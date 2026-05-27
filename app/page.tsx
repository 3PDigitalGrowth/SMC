import Hero from '@/components/home/Hero'
import Pathways from '@/components/home/Pathways'
import Testimonials from '@/components/home/Testimonials'
import Editorial from '@/components/home/Editorial'
import Process from '@/components/home/Process'
import Booking from '@/components/home/Booking'
import LeadMagnet from '@/components/home/LeadMagnet'
import StickyCTA from '@/components/home/StickyCTA'
import ExitIntentModal from '@/components/home/ExitIntentModal'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: '/',
  title: 'Steven M Clark Lawyers, Gawler. Plain-English legal advice.',
  description:
    "Gawler's general law practice since 1986. Family, estates, property, business and Public Notary services. Free 15-minute call.",
})

export default function Home() {
  return (
    <>
      <Hero />
      <Pathways />
      <Testimonials />
      <Editorial />
      <Process />
      <Booking />
      <LeadMagnet />
      <StickyCTA />
      <ExitIntentModal />
    </>
  )
}
