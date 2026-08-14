// Branded transactional emails for website enquiries, sent via Resend.
// Two emails per submission: a warm client confirmation, and an admin
// notification to the firm. Both are context aware (practice area + page).

import {
  EnquiryPayload,
  serviceLabel,
  sourceLabel,
  pageName,
  firstName,
  submittedAt,
} from './enquiry'

const SITE = 'https://stevenmclark.com.au'
const PHONE_DISPLAY = '(08) 8522 6025'
const PHONE_TEL = '0885226025'
const EMAIL = 'law@stevenmclark.com.au'
const ADDRESS = '1 Adelaide Road, Gawler South SA 5118'
const HOURS = 'Mon to Fri, 9:00am to 5:00pm'

// Brand palette (from app/globals.css). Inlined because email clients
// do not support CSS variables or external stylesheets.
const C = {
  paper: '#F6F1E8',
  paperSoft: '#FBF7EE',
  paperDeep: '#EFE7D6',
  ink: '#1A1814',
  inkSoft: '#2D2A22',
  inkMuted: '#6B6457',
  inkFaint: '#A39B8B',
  rule: '#D9D0BE',
  leaf: '#4F6B4A',
  leafDeep: '#3A4F37',
  leafPale: '#DCE3D6',
}

const SERIF = "Georgia, 'Times New Roman', serif"
const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"

export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function nl2br(input: string): string {
  return escapeHtml(input).replace(/\r?\n/g, '<br>')
}

// Shared shell: paper background, centred 600px card, serif wordmark header.
function layout(opts: { eyebrow: string; preheader: string; body: string }): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<title>Steven M Clark Lawyers</title>
</head>
<body style="margin:0; padding:0; background:${C.paper}; -webkit-font-smoothing:antialiased;">
<div style="display:none; max-height:0; overflow:hidden; opacity:0;">${escapeHtml(opts.preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.paper};">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:100%;">
        <!-- Header -->
        <tr>
          <td style="padding:8px 8px 24px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <div style="font-family:${SERIF}; font-size:22px; letter-spacing:-0.01em; color:${C.ink};">Steven&nbsp;M&nbsp;Clark</div>
                  <div style="font-family:${SANS}; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:${C.leaf}; margin-top:4px;">Barristers &middot; Solicitors &middot; Public Notary</div>
                </td>
                <td align="right" style="font-family:${SANS}; font-size:12px; color:${C.inkMuted}; vertical-align:bottom;">
                  Gawler, South Australia
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Card -->
        <tr>
          <td style="background:${C.paperSoft}; border:1px solid ${C.rule}; border-radius:14px; overflow:hidden;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="height:4px; background:${C.leaf};"></td>
              </tr>
              <tr>
                <td style="padding:36px 40px 40px;">
                  <div style="font-family:${SANS}; font-size:11px; font-weight:600; letter-spacing:0.22em; text-transform:uppercase; color:${C.leaf}; margin-bottom:16px;">${escapeHtml(opts.eyebrow)}</div>
                  ${opts.body}
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:24px 8px 8px; font-family:${SANS}; font-size:12px; line-height:1.7; color:${C.inkFaint};">
            Steven M Clark Pty Ltd &middot; ${escapeHtml(ADDRESS)}<br>
            ${PHONE_DISPLAY} &middot; <a href="mailto:${EMAIL}" style="color:${C.inkMuted}; text-decoration:none;">${EMAIL}</a> &middot; <a href="${SITE}" style="color:${C.inkMuted}; text-decoration:none;">stevenmclark.com.au</a><br>
            Liability limited by a scheme approved under Professional Standards Legislation.
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
}

function heading(text: string): string {
  return `<h1 style="margin:0 0 18px; font-family:${SERIF}; font-size:28px; line-height:1.15; font-weight:400; letter-spacing:-0.015em; color:${C.ink};">${text}</h1>`
}

function para(text: string): string {
  return `<p style="margin:0 0 16px; font-family:${SANS}; font-size:16px; line-height:1.65; color:${C.inkSoft};">${text}</p>`
}

// ---------- Client confirmation ----------

export function clientConfirmationEmail(data: EnquiryPayload): { subject: string; html: string } {
  const fname = escapeHtml(firstName(data.name))
  const service = serviceLabel(data.page)
  const isGeneral = service === 'General enquiry'
  const aboutLine = isGeneral
    ? 'We have your message and the details below.'
    : `We have your enquiry about <strong style="color:${C.ink};">${escapeHtml(service)}</strong>, sent from ${escapeHtml(pageName(data.page))}.`

  const messageBlock = data.message && data.message.trim()
    ? `<tr>
         <td style="padding:16px 20px; border-top:1px solid ${C.rule};">
           <div style="font-family:${SANS}; font-size:11px; letter-spacing:0.16em; text-transform:uppercase; color:${C.inkMuted}; margin-bottom:6px;">What you told us</div>
           <div style="font-family:${SANS}; font-size:15px; line-height:1.6; color:${C.inkSoft};">${nl2br(data.message.trim())}</div>
         </td>
       </tr>`
    : ''

  const stepsBox = `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.paper}; border:1px solid ${C.rule}; border-radius:10px; margin:8px 0 24px;">
    <tr>
      <td style="padding:20px 20px 8px;">
        <div style="font-family:${SANS}; font-size:11px; letter-spacing:0.18em; text-transform:uppercase; color:${C.leaf}; margin-bottom:12px;">What happens next</div>
      </td>
    </tr>
    ${stepRow('1', 'We read your enquiry', 'A real person at the firm, not a queue.')}
    ${stepRow('2', 'One of our solicitors calls you back', 'The same business day, on the number you gave us.')}
    ${stepRow('3', 'A free 15-minute conversation', 'Confidential, no obligation, no pressure to engage us afterwards.', true)}
  </table>`

  const contactBox = `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid ${C.rule}; margin-top:8px;">
    <tr>
      <td style="padding:22px 0 4px;">
        <div style="font-family:${SANS}; font-size:15px; line-height:1.6; color:${C.inkSoft};">Need us sooner? You are always welcome to reach us directly.</div>
      </td>
    </tr>
    <tr>
      <td style="padding:12px 0 0;">
        <a href="tel:${PHONE_TEL}" style="display:inline-block; background:${C.leaf}; color:${C.paperSoft}; font-family:${SANS}; font-size:15px; font-weight:600; text-decoration:none; padding:13px 24px; border-radius:8px;">Call ${PHONE_DISPLAY}</a>
        <a href="mailto:${EMAIL}" style="display:inline-block; color:${C.leafDeep}; font-family:${SANS}; font-size:15px; font-weight:600; text-decoration:none; padding:13px 16px;">Email us &rarr;</a>
      </td>
    </tr>
    <tr>
      <td style="padding:16px 0 0; font-family:${SANS}; font-size:13px; line-height:1.8; color:${C.inkMuted};">
        ${escapeHtml(ADDRESS)}<br>
        ${escapeHtml(HOURS)}
      </td>
    </tr>
  </table>`

  const body = `
    ${heading(`Thank you, ${fname}.`)}
    ${para(aboutLine)}
    ${para('Your message is with our team. We aim to call every enquiry back the same business day.')}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.paper}; border:1px solid ${C.rule}; border-radius:10px; margin:8px 0 24px;">
      ${detailRow('Name', escapeHtml(data.name))}
      ${detailRow('Phone', escapeHtml(data.phone))}
      ${detailRow('Email', escapeHtml(data.email))}
      ${isGeneral ? '' : detailRow('Enquiry about', escapeHtml(service))}
      ${messageBlock}
    </table>
    ${stepsBox}
    ${contactBox}
  `

  return {
    subject: isGeneral
      ? 'We have your enquiry, Steven M Clark Lawyers'
      : `We have your ${service.toLowerCase()} enquiry, Steven M Clark Lawyers`,
    html: layout({
      eyebrow: 'Enquiry received',
      preheader: `Thanks ${firstName(data.name)}, we will call you back the same business day.`,
      body,
    }),
  }
}

function stepRow(num: string, title: string, sub: string, last = false): string {
  return `<tr>
    <td style="padding:0 20px ${last ? '20px' : '14px'};">
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td width="34" valign="top">
            <div style="width:24px; height:24px; border-radius:50%; background:${C.leafPale}; color:${C.leafDeep}; font-family:${SANS}; font-size:12px; font-weight:700; text-align:center; line-height:24px;">${num}</div>
          </td>
          <td valign="top">
            <div style="font-family:${SANS}; font-size:15px; font-weight:600; color:${C.ink};">${title}</div>
            <div style="font-family:${SANS}; font-size:13px; line-height:1.55; color:${C.inkMuted}; margin-top:2px;">${sub}</div>
          </td>
        </tr>
      </table>
    </td>
  </tr>`
}

function detailRow(label: string, value: string, href?: string): string {
  const val = href ? `<a href="${href}" style="color:${C.leafDeep}; text-decoration:none;">${value}</a>` : value
  return `<tr>
    <td style="padding:13px 20px; border-bottom:1px solid ${C.rule};">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td width="130" style="font-family:${SANS}; font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:${C.inkMuted}; vertical-align:top; padding-top:2px;">${label}</td>
          <td style="font-family:${SANS}; font-size:15px; line-height:1.55; color:${C.inkSoft};">${val}</td>
        </tr>
      </table>
    </td>
  </tr>`
}

// ---------- Admin notification ----------

export function adminNotificationEmail(data: EnquiryPayload): { subject: string; html: string } {
  const service = serviceLabel(data.page)
  const isGeneral = service === 'General enquiry'
  const pageLink = data.page?.url
    ? `<a href="${escapeHtml(data.page.url)}" style="color:${C.leafDeep}; text-decoration:none;">${escapeHtml(data.page.title || data.page.path)}</a>`
    : escapeHtml(data.page?.title || data.page?.path || 'Website')

  const mailtoReply = `mailto:${escapeHtml(data.email)}?subject=${encodeURIComponent('Re: your enquiry to Steven M Clark Lawyers')}`

  const messageBlock = data.message && data.message.trim()
    ? `<tr>
         <td style="padding:16px 20px; border-bottom:1px solid ${C.rule};">
           <div style="font-family:${SANS}; font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:${C.inkMuted}; margin-bottom:6px;">Message</div>
           <div style="font-family:${SANS}; font-size:15px; line-height:1.6; color:${C.inkSoft};">${nl2br(data.message.trim())}</div>
         </td>
       </tr>`
    : `<tr><td style="padding:16px 20px; border-bottom:1px solid ${C.rule}; font-family:${SANS}; font-size:14px; color:${C.inkMuted};">No message left.</td></tr>`

  const body = `
    ${heading(isGeneral ? 'New website enquiry' : `New enquiry: ${escapeHtml(service)}`)}
    ${para(`<strong style="color:${C.ink};">${escapeHtml(data.name)}</strong> asked to be called back. We aim to reply the same business day.`)}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.paper}; border:1px solid ${C.rule}; border-radius:10px; margin:8px 0 24px;">
      ${detailRow('Name', escapeHtml(data.name))}
      ${detailRow('Phone', escapeHtml(data.phone), `tel:${escapeHtml(data.phone.replace(/[^+\d]/g, ''))}`)}
      ${detailRow('Email', escapeHtml(data.email), `mailto:${escapeHtml(data.email)}`)}
      ${detailRow('Enquiry about', escapeHtml(service))}
      ${messageBlock}
      ${detailRow('Submitted from', pageLink)}
      ${detailRow('Form', escapeHtml(sourceLabel(data.source)))}
      ${detailRow('Received', escapeHtml(submittedAt()))}
    </table>
    <table role="presentation" cellpadding="0" cellspacing="0">
      <tr>
        <td>
          <a href="tel:${escapeHtml(data.phone.replace(/[^+\d]/g, ''))}" style="display:inline-block; background:${C.leaf}; color:${C.paperSoft}; font-family:${SANS}; font-size:15px; font-weight:600; text-decoration:none; padding:13px 24px; border-radius:8px;">Call ${escapeHtml(data.name)} back</a>
          <a href="${mailtoReply}" style="display:inline-block; color:${C.leafDeep}; font-family:${SANS}; font-size:15px; font-weight:600; text-decoration:none; padding:13px 16px;">Reply by email &rarr;</a>
        </td>
      </tr>
    </table>
  `

  return {
    subject: isGeneral
      ? `New enquiry from ${data.name}`
      : `New ${service.toLowerCase()} enquiry from ${data.name}`,
    html: layout({
      eyebrow: 'Website enquiry',
      preheader: `${data.name} (${data.phone}) asked about ${service}.`,
      body,
    }),
  }
}

// ---------- Lead magnet (guide download) ----------

export function leadConfirmationEmail(data: EnquiryPayload): { subject: string; html: string } {
  const fname = escapeHtml(firstName(data.name))

  const guidesBox = `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.paper}; border:1px solid ${C.rule}; border-radius:10px; margin:8px 0 24px;">
    <tr>
      <td style="padding:22px 20px;">
        <div style="font-family:${SANS}; font-size:11px; letter-spacing:0.18em; text-transform:uppercase; color:${C.leaf}; margin-bottom:12px;">Your reading</div>
        <div style="font-family:${SANS}; font-size:15px; line-height:1.6; color:${C.inkSoft}; margin-bottom:16px;">Our plainly-written guides answer the questions people ask us in the first conversation. No follow-up calls, read them in your own time.</div>
        <a href="${SITE}/insights" style="display:inline-block; background:${C.leaf}; color:${C.paperSoft}; font-family:${SANS}; font-size:15px; font-weight:600; text-decoration:none; padding:13px 24px; border-radius:8px;">Read the guides &rarr;</a>
      </td>
    </tr>
  </table>`

  const contactBox = `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid ${C.rule};">
    <tr>
      <td style="padding:22px 0 4px; font-family:${SANS}; font-size:15px; line-height:1.6; color:${C.inkSoft};">
        When you are ready to talk it through, we offer a free 15-minute call, the same business day.
      </td>
    </tr>
    <tr>
      <td style="padding:12px 0 0;">
        <a href="tel:${PHONE_TEL}" style="display:inline-block; color:${C.leafDeep}; font-family:${SANS}; font-size:15px; font-weight:600; text-decoration:none;">Call ${PHONE_DISPLAY}</a>
        &nbsp;&middot;&nbsp;
        <a href="mailto:${EMAIL}" style="display:inline-block; color:${C.leafDeep}; font-family:${SANS}; font-size:15px; font-weight:600; text-decoration:none;">${EMAIL}</a>
      </td>
    </tr>
  </table>`

  const body = `
    ${heading(`Thanks, ${fname}.`)}
    ${para('Your guides are ready. There is no catch and no follow-up call, just useful reading for whatever you are working through.')}
    ${guidesBox}
    ${contactBox}
  `

  return {
    subject: 'Your guides from Steven M Clark Lawyers',
    html: layout({
      eyebrow: 'Guides ready',
      preheader: `Thanks ${firstName(data.name)}, your guides are ready to read.`,
      body,
    }),
  }
}

export function leadAdminEmail(data: EnquiryPayload): { subject: string; html: string } {
  const body = `
    ${heading('New guide download')}
    ${para(`<strong style="color:${C.ink};">${escapeHtml(data.name)}</strong> requested the guides. A soft lead, not a callback request.`)}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.paper}; border:1px solid ${C.rule}; border-radius:10px; margin:8px 0 0;">
      ${detailRow('Name', escapeHtml(data.name))}
      ${detailRow('Email', escapeHtml(data.email), `mailto:${escapeHtml(data.email)}`)}
      ${detailRow('Form', escapeHtml(sourceLabel(data.source)))}
      ${detailRow('Received', escapeHtml(submittedAt()))}
    </table>
  `

  return {
    subject: `New guide download from ${data.name}`,
    html: layout({
      eyebrow: 'Website lead',
      preheader: `${data.name} downloaded the guides.`,
      body,
    }),
  }
}

// ---------- Resend transport ----------

interface SendArgs {
  from: string
  to: string | string[]
  subject: string
  html: string
  replyTo?: string
  bcc?: string | string[]
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

export async function sendEmail(args: SendArgs): Promise<void> {
  const key = process.env.RESEND_API_KEY
  if (!key) throw new Error('RESEND_API_KEY is not set')

  const body = JSON.stringify({
    from: args.from,
    to: args.to,
    bcc: args.bcc,
    reply_to: args.replyTo,
    subject: args.subject,
    html: args.html,
  })

  // Resend allows 2 requests/second. Each submission sends two emails, so a
  // burst can hit a 429. Retry on rate-limit (and transient 5xx) with backoff.
  const maxAttempts = 4
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body,
    })

    if (res.ok) return

    const retryable = res.status === 429 || res.status >= 500
    if (!retryable || attempt === maxAttempts) {
      const detail = await res.text()
      throw new Error(`Resend send failed (${res.status}): ${detail}`)
    }

    const retryAfter = Number(res.headers.get('retry-after'))
    const waitMs = Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : 600 * attempt
    await sleep(waitMs)
  }
}
