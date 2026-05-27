import PageHero from '@/components/page/PageHero'
import ServiceBody from '@/components/page/ServiceBody'
import ServiceCallout from '@/components/page/ServiceCallout'
import ServiceFAQ from '@/components/page/ServiceFAQ'
import RelatedServices from '@/components/page/RelatedServices'
import Booking from '@/components/home/Booking'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { pageMetadata } from '@/lib/seo'
import { IMAGES } from '@/lib/images'

export const metadata = pageMetadata({
  path: '/gawler-property-lawyers',
  title: 'Gawler property lawyers. Conveyancing, leases, disputes.',
  description:
    'Property law and conveyancing in the Gawler region since 1986. Buying, selling, leases, subdivisions, building disputes.',
  image: IMAGES.propertyDetailHero.src,
})

const subServices = [
  'Residential conveyancing',
  'Rural and vacant land',
  'Units, strata, community title',
  'Off-the-plan purchases',
  'Public auction and private treaty',
  'Stamp duty and cost guidance',
  'Cooling-off period advice',
  'Negotiating sale terms',
  'Title searches and land enquiries',
  'Settlement and exchange',
  'Subdivision and development',
  'Building and construction contracts',
  'Neighbourhood and fencing disputes',
  'Property dispute resolution',
]

const callouts = [
  {
    title: 'You have a contract in front of you.',
    body: "Send it to us today. We will read it, ring you back, and tell you exactly which clauses to worry about and which are standard. Cooling-off and settlement deadlines do not wait, and most expensive mistakes happen here.",
  },
  {
    title: 'You are buying your first home.',
    body: "The agent works for the vendor. The conveyancer who comes free with the loan is usually fine, until something is not standard. For a few hundred dollars more, you get a real lawyer reading your contract.",
  },
  {
    title: "There is a dispute over a fence, easement or boundary.",
    body: 'Almost every one of these starts as a small misunderstanding and becomes expensive only when one side digs in. A properly worded letter from us resolves a surprising number of them in a week.',
  },
]

const faq = [
  {
    q: 'Why use a property lawyer instead of just a conveyancer?',
    a: 'A conveyancer can handle a standard contract, but every contract becomes non-standard the moment something goes wrong — late settlement, undisclosed defects, finance falling through, a caveat appearing on title. A property lawyer can handle all of those without referring you on.',
  },
  {
    q: 'When should I send you the contract?',
    a: 'Before you sign it. The cooling-off period exists for a reason but it is short and conditional. We can usually read and advise on a residential contract within 24 hours of receiving it.',
  },
  {
    q: 'How much does conveyancing cost?',
    a: 'We quote a fixed fee for standard residential conveyancing, with disbursements (search fees, title transfers, etc.) on top. We tell you the total before you commit. Complex transactions are quoted separately.',
  },
  {
    q: 'What happens at settlement?',
    a: 'We coordinate with the bank, the other side\'s lawyer or conveyancer, and the Lands Titles Office. You sign the transfer documents in our office a few days before. On the settlement day itself, you do not need to do anything — you just get the call to confirm it has settled.',
  },
  {
    q: 'Can you help with off-the-plan purchases?',
    a: 'Yes, and we strongly recommend you have one of us read the contract before you sign. Off-the-plan contracts have features (sunset clauses, variation rights, building staging) that catch most buyers out at least once.',
  },
  {
    q: 'I am in a fencing dispute with a neighbour. What now?',
    a: 'Start with a single letter from us to the neighbour, setting out the law (Fences Act 1975 SA) and what we propose. That fixes most disputes. If it does not, the next step is the Magistrates Court Civil Division, and we can act for you there.',
  },
]

const related = [
  {
    title: 'Building and construction',
    body: 'Build contracts, owner-builder advice, defective work and disputes with builders.',
    href: '/gawler-construction-lawyer',
  },
  {
    title: 'Retail and commercial leases',
    body: 'If you are leasing rather than buying, the legal work happens here.',
    href: '/gawler-lease-lawyer',
  },
  {
    title: 'Estate planning',
    body: 'Updating your Will after a property purchase is the unromantic but right move.',
    href: '/gawler-estate-lawyer',
  },
]

export default function PropertyLawyersPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Property', href: '/property' }, { name: 'Property lawyers', href: '/gawler-property-lawyers' }]} />
      <PageHero
        eyebrow="Property · Conveyancing · Leases"
        heading={
          <>
            Property law, by lawyers who have read more <em>Gawler contracts</em> than most agents have drafted.
          </>
        }
        lede="A property transaction is the biggest financial decision most families ever make. The legal work behind it should be the smallest worry. That is what we are for."
        image={IMAGES.propertyDetailHero}
        imageCaption="A South Australian country property at the moment it changes hands."
      />

      <ServiceBody
        eyebrow="What we handle"
        heading={<>Every kind of property work, from the standard to the awkward.</>}
        paragraphs={[
          'Property transactions are a big decision and a significant matter for most people. We have been doing them in the Gawler region since 1986 — residential, rural, commercial, off-the-plan, the lot.',
          "On the buying and selling side, we handle the Contract for Sale, the cooling-off period, stamp duty calculations, lender requirements, title searches, settlement and exchange. On the development side, we handle subdivisions, building contracts, and the council approvals that always take longer than anyone expects.",
          "When property goes sideways — a building dispute, a boundary disagreement, a defective fence, a neighbour with a different view of the easement — we work the matter the same way: write the right letter first, escalate only when we need to, and stop the moment it stops being economic to fight.",
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />

      <ServiceCallout
        eyebrow="If you are here because…"
        heading={<>Three reasons most property files start.</>}
        items={callouts}
      />

      <ServiceFAQ
        eyebrow="Common questions"
        heading={<>The questions almost every first caller asks.</>}
        items={faq}
      />

      <RelatedServices
        eyebrow="Adjacent help"
        heading={<>Other things we often look at on the same visit.</>}
        items={related}
      />

      <Booking />
    </>
  )
}
