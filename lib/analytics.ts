export function trackPhoneClick() {
  console.log('phone_click')
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', 'phone_click', { event_category: 'contact' })
  }
}

export function trackLeadCaptured(source: string) {
  console.log('lead_captured', { source })
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', 'lead_captured', { event_category: 'conversion', source })
  }
}
