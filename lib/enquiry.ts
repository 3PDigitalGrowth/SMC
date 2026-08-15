// Shared types and context helpers for website enquiry submissions.
// Keeps the booking/callback form "context aware": we know which page and
// practice area the enquiry came from, so both the client confirmation and
// the admin notification can speak to what the person actually asked about.

export interface EnquiryPage {
  path: string
  title?: string
  url?: string
}

export interface EnquiryPayload {
  name: string
  email: string
  phone: string
  message?: string
  source?: string
  page?: EnquiryPage
}

// Map known routes to a clean, human practice-area label.
const SERVICE_BY_PATH: Record<string, string> = {
  '/': 'General enquiry',
  // Family
  '/family': 'Family law',
  '/gawler-family-lawyers': 'Family law',
  '/divorce-australia': 'Divorce & separation',
  '/divorce-separation': 'Divorce & separation',
  '/parenting-children': 'Parenting & children',
  '/property-settlement': 'Property settlement',
  '/de-facto-relationships': 'De facto relationships',
  '/family-mediation': 'Family mediation',
  '/intervention-domestic-violence-lawyer': 'Intervention orders',
  // Estates
  '/estates': 'Wills & estates',
  '/gawler-estate-lawyer': 'Wills & probate',
  '/estate-planning': 'Estate planning',
  '/gawler-estate-planning-lawyers': 'Estate planning',
  '/power-of-attorney': 'Power of attorney',
  '/gawler-trust-lawyer': 'Trusts',
  // Property & business
  '/property': 'Property law',
  '/gawler-property-lawyers': 'Property & conveyancing',
  '/property-disputes': 'Property disputes',
  '/gawler-lease-lawyer': 'Commercial leases',
  '/business': 'Business law',
  '/gawler-business-lawyers': 'Business sale & purchase',
  '/gawler-commercial-lawyers': 'Commercial & corporate',
  '/gawler-debt-recovery': 'Debt recovery',
  '/gawler-construction-lawyer': 'Building & construction',
  // More
  '/criminal-defence-lawyer': 'Criminal & traffic',
  '/gawler-personal-injury-lawyers': 'Personal injury',
  '/gawler-compensation-lawyers': 'Motor vehicle accidents',
  '/gawler-dispute-resolution-lawyers': 'Dispute resolution',
  '/gawler-industrial-relations-lawyer': 'Industrial relations',
  '/gawler-insolvency-lawyer': 'Insolvency',
  '/notary-public-gawler': 'Notary Public',
}

const SOURCE_LABELS: Record<string, string> = {
  homepage_hero: 'Homepage hero form',
  homepage_hero_modal: 'Homepage quick enquiry',
  homepage_booking: 'Callback form',
  homepage_checklist: 'Guide download',
  blog_inline_form: 'Article callback form',
}

// Derive a clean service label from the page the enquiry came from.
export function serviceLabel(page?: EnquiryPage): string {
  if (!page) return 'General enquiry'
  const mapped = SERVICE_BY_PATH[page.path]
  if (mapped) return mapped
  // Fall back to the page title, trimmed of the SEO suffix.
  if (page.title) {
    const clean = page.title.split(/[.·|]/)[0].trim()
    if (clean) return clean
  }
  return 'General enquiry'
}

export function sourceLabel(source?: string): string {
  if (!source) return 'Website form'
  return SOURCE_LABELS[source] ?? 'Website form'
}

// Page name for display, e.g. "Property & conveyancing page".
export function pageName(page?: EnquiryPage): string {
  if (!page || page.path === '/') return 'the homepage'
  const label = serviceLabel(page)
  if (label === 'General enquiry') return 'a page on the site'
  return `the ${label} page`
}

export function firstName(name: string): string {
  return name.trim().split(/\s+/)[0] || name.trim()
}

export function submittedAt(date = new Date()): string {
  return new Intl.DateTimeFormat('en-AU', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Australia/Adelaide',
  }).format(date)
}
