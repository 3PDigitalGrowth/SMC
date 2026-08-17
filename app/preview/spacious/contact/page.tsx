import type { Metadata } from 'next'
import ContactPage from '@/app/contact/page'
import SpaciousWrap from '../SpaciousWrap'

export const metadata: Metadata = {
  title: 'Preview: contact page, proposed desktop layout',
  robots: { index: false, follow: false },
}

export default function SpaciousContactPreview() {
  return (
    <SpaciousWrap liveHref="/contact">
      <ContactPage />
    </SpaciousWrap>
  )
}
