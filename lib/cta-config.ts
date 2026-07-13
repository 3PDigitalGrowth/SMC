export interface CtaSlotConfig {
  variant: 'primary' | 'secondary' | 'inline-form'
  eyebrow: string
  heading: string
  body: string
  buttonLabel: string
  href: string
}

export const CTA_SLOTS: Record<'primary' | 'secondary' | 'inline-form', CtaSlotConfig> = {
  primary: {
    variant: 'primary',
    eyebrow: 'Talk to Us',
    heading: 'A first call costs nothing and changes everything.',
    body: "Confidential, unhurried, no pressure. By the end of it you will know where you stand and what your real options are.",
    buttonLabel: 'Book a confidential call',
    href: '#book',
  },
  secondary: {
    variant: 'secondary',
    eyebrow: 'Or write to us',
    heading: "Not ready for a call? Send us a note.",
    body: "Tell us what's on your mind. We will reply the same business day.",
    buttonLabel: 'Get in touch',
    href: '/contact',
  },
  'inline-form': {
    variant: 'inline-form',
    eyebrow: "Book a confidential call",
    heading: "Tell us a little about what's brought you here.",
    body: "Steven will personally call you back on the same business day. Nothing is shared, nothing is on the record.",
    buttonLabel: 'Request a callback',
    href: '/api/booking',
  },
}

export const INLINE_FORM_FIELDS = [
  { name: 'name', label: 'Your name', type: 'text', required: true },
  { name: 'phone', label: 'Best phone number', type: 'tel', required: true },
  { name: 'topic', label: 'What is it about?', type: 'text', required: false },
] as const
