import { NextResponse } from 'next/server'
import type { EnquiryPayload } from '@/lib/enquiry'
import { leadConfirmationEmail, leadAdminEmail, sendEmail } from '@/lib/emails'

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

  if (!name || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { success: false, error: 'Please provide your name and a valid email.' },
      { status: 422 },
    )
  }

  const payload: EnquiryPayload = { name, email, phone: '', source: data.source, page: data.page }

  // Deliver the guides to the person first: this is what they asked for.
  const confirmation = leadConfirmationEmail(payload)
  try {
    await sendEmail({
      from: FROM,
      to: payload.email,
      replyTo: FIRM_REPLY_TO,
      subject: confirmation.subject,
      html: confirmation.html,
    })
  } catch (err) {
    console.error('[lead] guide email failed:', err)
    return NextResponse.json(
      { success: false, error: 'We could not send the guides. Please try again or call us on (08) 8522 6025.' },
      { status: 502 },
    )
  }

  // Notify the firm (best-effort, never block the user's success on it).
  const admin = leadAdminEmail(payload)
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
    console.error('[lead] admin notification failed:', err)
  }

  return NextResponse.json({ success: true })
}
