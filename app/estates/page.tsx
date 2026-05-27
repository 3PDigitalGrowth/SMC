import PageHero from '@/components/page/PageHero'
import HubServices from '@/components/page/HubServices'
import HubProof from '@/components/page/HubProof'
import Booking from '@/components/home/Booking'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { pageMetadata } from '@/lib/seo'
import { IMAGES } from '@/lib/images'

export const metadata = pageMetadata({
  path: '/estates',
  title: 'Wills, estates and probate, Gawler. Get it right once.',
  description:
    'Wills, estate planning, probate, power of attorney, advance care directives, and trusts. Done properly the first time, by a Gawler practice since 1986.',
  image: IMAGES.estatesHero.src,
})

const services = [
  {
    title: 'Wills',
    body: "A Will that is properly drafted and properly witnessed. We make sure it says what you mean, that it cannot be easily contested, and that the right people are named.",
    href: '/gawler-estate-lawyer',
  },
  {
    title: 'Probate',
    body: 'When someone has died, probate is the legal process that lets the executor act on the Will. We handle the application, the paperwork, and the dealings with the Supreme Court.',
    href: '/gawler-estate-lawyer',
  },
  {
    title: 'Estate planning',
    body: 'A Will is one document. A proper estate plan is the whole picture: assets, super, business interests, tax, who runs what after you are gone, and how to reduce the chance of a contest.',
    href: '/estate-planning',
  },
  {
    title: 'Power of Attorney',
    body: 'The document that lets a trusted person manage your finances if you cannot. Drafted with the same care as a Will, because it matters just as much.',
    href: '/power-of-attorney',
  },
  {
    title: 'Advance Care Directive',
    body: 'Your medical and lifestyle wishes if you cannot speak for yourself. Done alongside your Will so your family is never guessing.',
    href: '/gawler-estate-planning-lawyers',
  },
  {
    title: 'Family and testamentary trusts',
    body: 'Trusts are often misunderstood and oversold. We will tell you straight whether one actually helps your situation, and if it does, we set it up properly.',
    href: '/gawler-trust-lawyer',
  },
]

export default function EstatesPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Estates', href: '/estates' }]} />
      <PageHero
        eyebrow="Wills and Estates"
        heading={
          <>
            Get it right <em>once</em>, then forget about it.
          </>
        }
        lede="A properly prepared Will, Power of Attorney and Advance Care Directive give your family certainty when they need it most. Most families need an hour with us, and a follow-up signing. That is the entire job."
        image={IMAGES.estatesHero}
        imageCaption="The quiet moment a Will is signed. Tuesday morning at the kitchen table."
      />

      <HubServices
        eyebrow="How we help"
        heading={<>The whole estate picture, in plain words.</>}
        intro="Most people only need a Will, a Power of Attorney and an Advance Care Directive. Some need more. We will tell you exactly which, in the first half hour."
        items={services}
      />

      <HubProof
        eyebrow="In practice"
        quote="Dad died on a Sunday. By Wednesday, Steven had told us what to do, in order. Nothing felt like a fight."
        attribution="Estate client, Gawler region · Probate granted in 6 weeks"
        body={[
          'A Gawler family lost their father unexpectedly. The Will was clear, but the assets sat across a farm, a business, two properties and several superannuation accounts. Three siblings, one of whom lived interstate.',
          'We walked the eldest daughter, as executor, through probate, the asset transfers, the tax, and the sale of the farm machinery. Nothing was rushed. The family did not have to learn estate law on the worst week of their year.',
        ]}
        image={IMAGES.pathwayEstate}
      />

      <Booking />
    </>
  )
}
