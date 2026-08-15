import { NextResponse } from 'next/server'
import type { EnquiryPayload } from '@/lib/enquiry'
import {
  clientConfirmationEmail,
  adminNotificationEmail,
  sendEmail,
} from '@/lib/emails'
import { clientIp, screenSubmission } from '@/lib/spam'

export const runtime = 'nodejs'

const FROM = process.env.EMAIL_FROM || 'Steven M Clark Lawyers <enquiries@smc.websitesubmission.com.au>'
const ADMIN_TO = process.env.EMAIL_TO || 'law@stevenmclark.com.au'
const ADMIN_BCC = process.env.EMAIL_BCC || 'alex@3pdigital.com.au'
const FIRM_REPLY_TO = 'law@stevenmclark.com.au'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type SubmittedPayload = EnquiryPayload & { hp?: string; elapsedMs?: number }

export async function POST(request: Request) {
  let data: SubmittedPayload
  try {
    data = await request.json()
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request.' }, { status: 400 })
  }

  const name = (data.name || '').trim()
  const email = (data.email || '').trim()
  const phone = (data.phone || '').trim()

  // A callback request only needs a name and a number. Email is optional
  // (the blog inline form does not ask for one), but must be valid if given.
  if (!name || !phone || (email && !EMAIL_RE.test(email))) {
    return NextResponse.json(
      { success: false, error: 'Please provide your name and a phone number.' },
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

  const screen = screenSubmission({
    name,
    email,
    phone,
    message: payload.message,
    hp: data.hp,
    elapsedMs: data.elapsedMs,
    ip: clientIp(request),
  })

  // A bot gets the same success response a person does, so it learns nothing.
  if (screen.verdict === 'block') {
    console.warn('[booking] blocked submission:', screen.reasons.join('; '))
    return NextResponse.json({ success: true })
  }

  // Suspected marketing pitch: keep it out of the firm's inbox, but send it to
  // the agency so a wrongly flagged enquiry can still be rescued.
  if (screen.verdict === 'quarantine') {
    console.warn('[booking] quarantined submission:', screen.reasons.join('; '))
    const flagged = adminNotificationEmail(payload)
    try {
      await sendEmail({
        from: FROM,
        to: ADMIN_BCC,
        replyTo: payload.email || FIRM_REPLY_TO,
        subject: `[Possible spam] ${flagged.subject}`,
        html: flagged.html,
      })
    } catch (err) {
      console.error('[booking] quarantine notification failed:', err)
    }
    return NextResponse.json({ success: true })
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
      replyTo: payload.email || FIRM_REPLY_TO,
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

  // No email address means no confirmation to send: the callback still stands.
  if (!payload.email) {
    return NextResponse.json({ success: true })
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
