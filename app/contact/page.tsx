import PageHero from '@/components/page/PageHero'
import ContactBlock from '@/components/page/ContactBlock'
import Booking from '@/components/home/Booking'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { pageMetadata } from '@/lib/seo'
import { IMAGES } from '@/lib/images'

export const metadata = pageMetadata({
  path: '/contact',
  title: 'Contact Steven M Clark Lawyers, Gawler. (08) 8522 6025.',
  description:
    'Adelaide Road, Gawler South. One phone number, one email, one office, since 1985. Same-business-day callbacks.',
  image: IMAGES.contactHero.src,
})

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Contact', href: '/contact' }]} />
      <PageHero
        eyebrow="Get in touch"
        heading={
          <>
            One phone number, one office, since <em>1985</em>.
          </>
        }
        lede="No call centres. No referral mazes. You will speak to a person on Adelaide Road, and you will get a same-business-day reply, even if Steven is in court."
        image={IMAGES.contactHero}
        imageCaption="The team at the Adelaide Road office."
        wideImage
      />

      <ContactBlock />

      <Booking />
    </>
  )
}
