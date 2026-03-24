export async function submitLeadForm(data: {
  name: string
  email: string
  phone?: string
  source: string
}) {
  // TODO: Replace with actual Mailchimp / CRM API call
  console.log('lead_captured', data)
  await new Promise(resolve => setTimeout(resolve, 800))
  // TODO: Replace with fetch('/api/lead', { method: 'POST', body: JSON.stringify(data) })
}

export async function submitBookingForm(data: {
  name: string
  phone: string
  email: string
  bestTime: string
  message: string
}) {
  // TODO: Replace with actual booking API call
  console.log('booking_request', data)
  await new Promise(resolve => setTimeout(resolve, 800))
  // TODO: Replace with fetch('/api/booking', { method: 'POST', body: JSON.stringify(data) })
}
