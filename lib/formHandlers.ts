export async function submitLeadForm(data: {
  name: string
  email: string
  phone?: string
  source: string
}) {
  const res = await fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, page: currentPage() }),
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
    body: JSON.stringify({ ...data, page: currentPage() }),
  })
  if (!res.ok) {
    const body = await res.json().catch(() => null)
    throw new Error(body?.error || 'Submission failed')
  }
  return res.json()
}
