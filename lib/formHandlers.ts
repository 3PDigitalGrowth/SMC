// Set when the page loads, so the API can see how long the form was open
// before it was submitted. Scripts fire in milliseconds; people do not.
const LOADED_AT = Date.now()

function elapsedMs() {
  return Date.now() - LOADED_AT
}

// Pull the honeypot value out of the submitting form, if the form has one.
export function honeypotValue(form?: HTMLFormElement | null): string {
  if (!form) return ''
  const field = form.elements.namedItem('company')
  return field instanceof HTMLInputElement ? field.value : ''
}

export async function submitLeadForm(data: {
  name: string
  email: string
  phone?: string
  source: string
  hp?: string
}) {
  const res = await fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, page: currentPage(), elapsedMs: elapsedMs() }),
  })
  if (!res.ok) {
    const body = await res.json().catch(() => null)
    throw new Error(body?.error || 'Submission failed')
  }
  return res.json()
}

export interface BookingSubmission {
  name: string
  phone: string
  email: string
  message?: string
  source?: string
  hp?: string
}

// Capture the page/practice-area context the enquiry came from, so the
// confirmation and admin emails can speak to what the person asked about.
function currentPage() {
  if (typeof window === 'undefined') return undefined
  return {
    path: window.location.pathname,
    title: document.title,
    url: window.location.href,
  }
}

export async function submitBookingForm(data: BookingSubmission) {
  const res = await fetch('/api/booking', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, page: currentPage(), elapsedMs: elapsedMs() }),
  })
  if (!res.ok) {
    const body = await res.json().catch(() => null)
    throw new Error(body?.error || 'Submission failed')
  }
  return res.json()
}
