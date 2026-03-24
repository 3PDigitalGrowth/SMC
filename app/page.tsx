import Hero from '@/components/home/Hero'
import SocialProofBar from '@/components/home/SocialProofBar'
import EmpathySection from '@/components/home/EmpathySection'
import ServicesGrid from '@/components/home/ServicesGrid'
import WhyUs from '@/components/home/WhyUs'
import LeadMagnet from '@/components/home/LeadMagnet'
import Testimonials from '@/components/home/Testimonials'
import TeamSection from '@/components/home/TeamSection'
import BookingSection from '@/components/home/BookingSection'
import LocationSection from '@/components/home/LocationSection'
import ExitIntentModal from '@/components/home/ExitIntentModal'
import StickyCTA from '@/components/home/StickyCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <EmpathySection />
      <ServicesGrid />
      <WhyUs />
      <LeadMagnet />
      <Testimonials />
      <TeamSection />
      <BookingSection />
      <LocationSection />
      <ExitIntentModal />
      <StickyCTA />
    </>
  )
}
