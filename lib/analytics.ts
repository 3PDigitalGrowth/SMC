function pushEvent(name: string, params: Record<string, string>) {
  if (typeof window === 'undefined') return
  const w = window as any
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({ event: name, ...params })
  if ('gtag' in w) {
    w.gtag('event', name, params)
  }
}

export function trackPhoneClick() {
  console.log('phone_click')
  pushEvent('phone_click', { event_category: 'contact' })
}

export function trackLeadCaptured(source: string) {
  console.log('lead_captured', { source })
  pushEvent('lead_captured', { event_category: 'conversion', source })
}
