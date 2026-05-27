import PageHero from '@/components/page/PageHero'
import HubServices from '@/components/page/HubServices'
import HubProof from '@/components/page/HubProof'
import Booking from '@/components/home/Booking'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { pageMetadata } from '@/lib/seo'
import { IMAGES } from '@/lib/images'

export const metadata = pageMetadata({
  path: '/property',
  title: 'Property law and conveyancing, Gawler. Since 1986.',
  description:
    'Conveyancing, building and construction, commercial and retail leases, property disputes. Done properly, in the Gawler region, by lawyers who live here.',
  image: IMAGES.propertyHero.src,
})

const services = [
  {
    title: 'Property law and conveyancing',
    body: 'Buying or selling a house, unit, rural property or off-the-plan. We handle the contract, the cooling-off period, the title checks, the settlement, and the awkward late changes.',
    href: '/gawler-property-lawyers',
  },
  {
    title: 'Commercial and retail leases',
    body: 'Whether you are signing or drafting, a commercial lease decides a lot of what your business can and cannot do for the next five years. We make sure it works for you.',
    href: '/gawler-lease-lawyer',
  },
  {
    title: 'Building and construction',
    body: 'Build contracts, owner-builder advice, disputes with builders, defective work. We have seen the lot and we know which battles are worth fighting.',
    href: '/gawler-construction-lawyer',
  },
  {
    title: 'Subdivisions and development',
    body: 'Splitting a block, developing a site, or working through council approvals. We coordinate with your surveyor and planner so nothing stalls.',
    href: '/gawler-property-lawyers',
  },
  {
    title: 'Property disputes',
    body: "Boundary lines, fences, easements, encroachments, and neighbours who will not see reason. We try to resolve before court. If court is needed, we are ready.",
    href: '/property-disputes',
  },
  {
    title: 'Title searches and enquiries',
    body: "A title is rarely as simple as it looks. We check what is actually on the register, what the lender expects, and what the council might surprise you with.",
    href: '/gawler-property-lawyers',
  },
]

export default function PropertyPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Property', href: '/property' }]} />
      <PageHero
        eyebrow="Property Law"
        heading={
          <>
            The biggest cheque most people sign. Worth getting <em>properly</em> advised on.
          </>
        }
        lede="Property decisions are usually the largest financial decisions a Gawler family makes. We have been advising on them since 1986, and we have read more contracts in this region than most agents have ever drafted."
        image={IMAGES.propertyHero}
      />

      <HubServices
        eyebrow="How we help"
        heading={<>Six property situations we see most weeks.</>}
        intro="If you have a contract in front of you and a deadline this week, ring (08) 8522 6025 and we will read it today."
        items={services}
      />

      <HubProof
        eyebrow="In practice"
        quote="The contract had a clause that would have cost us forty thousand. They picked it up in an hour."
        attribution="Property client, Gawler region · First-home purchase"
        body={[
          'A young couple buying their first house outside Gawler brought us the contract on a Wednesday, hoping to sign on the Friday. The agent had marked it as standard.',
          'It was not. A clause about deposit forfeiture during the cooling-off period would have exposed them to a much larger loss than they realised. We renegotiated the clause, the vendor agreed, and the settlement went through on time at the original price.',
        ]}
        image={IMAGES.officeInterior}
      />

      <Booking />
    </>
  )
}
