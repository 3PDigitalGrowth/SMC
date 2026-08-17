import type { Metadata } from 'next'
import Home from '@/app/page'
import SpaciousWrap from '../SpaciousWrap'

export const metadata: Metadata = {
  title: 'Preview: home page, proposed desktop layout',
  robots: { index: false, follow: false },
}

export default function SpaciousHomePreview() {
  return (
    <SpaciousWrap liveHref="/">
      <Home />
    </SpaciousWrap>
  )
}
