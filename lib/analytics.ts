// Analytics events are pushed twice on purpose: once onto the dataLayer for
// the GTM container to pick up, and once through gtag so the event reaches GA4
// directly even if a GTM tag for it has not been built yet.

function pushEvent(name: string, params: Record<string, string>) {
  if (typeof window === 'undefined') return
  const w = window as any
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({ event: name, ...params })
  if ('gtag' in w) {
    w.gtag('event', name, params)
  }
}

// `location` describes where on the site the number was tapped (nav, footer,
// contact page and so on), so we can see which placements actually earn calls.
export function trackPhoneClick(location = 'unspecified') {
  pushEvent('phone_click', { event_category: 'contact', source: location })
}

export function trackLeadCaptured(source: string) {
  pushEvent('lead_captured', { event_category: 'conversion', source })
}
