import { NextResponse } from 'next/server'
import type { EnquiryPayload } from '@/lib/enquiry'
import {
  clientConfirmationEmail,
  adminNotificationEmail,
  sendEmail,
} from '@/lib/emails'

export const runtime = 'nodejs'

const FROM = process.env.EMAIL_FROM || 'Steven M Clark Lawyers <enquiries@smc.websitesubmission.com.au>'
const ADMIN_TO = process.env.EMAIL_TO || 'law@stevenmclark.com.au'
const ADMIN_BCC = process.env.EMAIL_BCC || 'alex@3pdigital.com.au'
const FIRM_REPLY_TO = 'law@stevenmclark.com.au'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let data: EnquiryPayload
  try {
    data = await request.json()
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request.' }, { status: 400 })
  }

  const name = (data.name || '').trim()
  const email = (data.email || '').trim()
  const phone = (data.phone || '').trim()

  if (!name || !phone || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { success: false, error: 'Please provide your name, phone and a valid email.' },
      { status: 422 },
    )
  }

  const payload: EnquiryPayload = {
    name,
    email,
    phone,
    message: (data.message || '').trim(),
    source: data.source,
    page: data.page,
  }

  // Admin notification is the critical path: if the firm does not hear about
  // the enquiry, the submission has effectively failed. Reply-to is set to the
  // enquirer so the team can reply straight back to them.
  const admin = adminNotificationEmail(payload)
  try {
    await sendEmail({
      from: FROM,
      to: ADMIN_TO,
      bcc: ADMIN_BCC,
      replyTo: payload.email,
      subject: admin.subject,
      html: admin.html,
    })
  } catch (err) {
    console.error('[booking] admin notification failed:', err)
    return NextResponse.json(
      { success: false, error: 'We could not send your enquiry. Please call us on (08) 8522 6025.' },
      { status: 502 },
    )
  }

  // Client confirmation is best-effort: never block the success response on it.
  const confirmation = clientConfirmationEmail(payload)
  try {
    await sendEmail({
      from: FROM,
      to: payload.email,
      replyTo: FIRM_REPLY_TO,
      subject: confirmation.subject,
      html: confirmation.html,
    })
  } catch (err) {
    console.error('[booking] client confirmation failed:', err)
  }

  return NextResponse.json({ success: true })
}
