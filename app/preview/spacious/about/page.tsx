import type { Metadata } from 'next'
import AboutPage from '@/app/about/page'
import SpaciousWrap from '../SpaciousWrap'

export const metadata: Metadata = {
  title: 'Preview: about page, proposed desktop layout',
  robots: { index: false, follow: false },
}

export default function SpaciousAboutPreview() {
  return (
    <SpaciousWrap liveHref="/about">
      <AboutPage />
    </SpaciousWrap>
  )
}
