'use client'

import { trackPhoneClick } from '@/lib/analytics'

const PHONE_TEL = '0885226025'

// A tel: link that reports the call attempt. Exists as its own client
// component so server-rendered sections (footer, contact block) can track
// phone taps without becoming client components themselves.
export default function PhoneLink({
  location,
  className,
  children,
}: {
  location: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <a
      href={`tel:${PHONE_TEL}`}
      className={className}
      onClick={() => trackPhoneClick(location)}
    >
      {children}
    </a>
  )
}
