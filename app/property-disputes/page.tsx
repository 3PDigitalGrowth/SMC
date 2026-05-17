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
  path: '/property-disputes',
  title: 'Property disputes lawyer, Gawler. Fences, boundaries, easements.',
  description:
    'Property disputes in the Gawler region since 1985. Fences and boundaries, easements and encroachments, caveats, neighbour disputes, and quiet enjoyment.',
  image: IMAGES.disputeResolutionHero.src,
})

const subServices = [
  'Boundary and fencing disputes (Fences Act 1975 SA)',
  'Easement disputes and access rights',
  'Encroachment claims',
  'Caveats and caveat removal',
  'Adverse possession claims',
  'Title rectifications',
  'Neighbour nuisance and noise complaints',
  'Tree disputes (overhanging branches, root damage)',
  'Strata and community title disputes',
  'Quiet enjoyment and trespass',
]

const callouts = [
  {
    title: "Your neighbour won't see reason.",
    body: 'A properly worded letter from us, setting out the law and what we propose, resolves a surprising number of property disputes in a week. It is fast, fixed-fee, and stops you having to keep the difficult conversation going personally.',
  },
  {
    title: "There's a fence you cannot agree on.",
    body: 'The Fences Act 1975 (SA) gives both neighbours equal say and equal responsibility. We follow the statutory process — notice, response, conciliation, Magistrates Court if needed. Most matters resolve at notice stage.',
  },
  {
    title: "A caveat has appeared on your title.",
    body: 'A caveat is a stop on your title that prevents dealings until the underlying claim is resolved. We act both ways — placing caveats to protect your interest, and applying to remove them when they have been improperly registered.',
  },
]

const faq = [
  {
    q: "My neighbour won't pay for the fence. What do I do?",
    a: 'Under the Fences Act 1975 (SA), you can serve a Fencing Notice on the neighbour proposing the fence, the standard, and the cost split. If they object, the matter goes to conciliation and then to the Magistrates Court Civil Division. The Court will then decide what is reasonable. Most matters resolve at the notice stage.',
  },
  {
    q: 'What about an overhanging tree?',
    a: "You have a common-law right to cut back branches that overhang your boundary, up to the boundary line. You must return any cut material to the neighbour. For root damage to structures or paving, you may have a claim in nuisance or for damages. We assess case-by-case.",
  },
  {
    q: 'Can I claim adverse possession of a strip my fence is over?',
    a: "Possibly. Adverse possession in South Australia requires 15 years of open, continuous, and adverse possession of land. The threshold is high and the evidence required is substantial. We will tell you on the first call whether it is realistic in your case.",
  },
  {
    q: 'What is an easement, and what can I do about one?',
    a: "An easement is a right one party has over another party's land — typically for access, drainage, or services. Easements are registered on title and run with the land. Disputes usually involve the scope of the easement (what is permitted), maintenance obligations, or extinguishment. We handle all three.",
  },
  {
    q: 'How long do these matters take?',
    a: 'A letter of demand resolves most disputes within 2-4 weeks. Fencing Act matters can resolve in 6-8 weeks via the statutory process. Court proceedings, where necessary, take 6-12 months in the Magistrates Court, longer in higher courts.',
  },
]

const related = [
  {
    title: 'Property law and conveyancing',
    body: 'Disputes that arise from a property transaction usually loop back here.',
    href: '/gawler-property-lawyers',
  },
  {
    title: 'Building and construction',
    body: 'When the dispute involves a build, a defective structure, or contractor.',
    href: '/gawler-construction-lawyer',
  },
  {
    title: 'Dispute resolution',
    body: 'For broader civil disputes that are not strictly property.',
    href: '/gawler-dispute-resolution-lawyers',
  },
]

export default function PropertyDisputesPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Property', href: '/property' }, { name: 'Property disputes', href: '/property-disputes' }]} />
      <PageHero
        eyebrow="Property · Disputes"
        heading={<>Most property disputes resolve with a <em>single letter</em>.</>}
        lede="Boundary lines, fences, easements, encroachments, and neighbours who will not see reason. We try to resolve before court. If court is needed, we are ready."
        image={IMAGES.disputeResolutionHero}
      />
      <ServiceBody
        eyebrow="What we handle"
        heading={<>The full range of property disputes, from fences to caveats.</>}
        paragraphs={[
          "Almost every property dispute we see starts as a small misunderstanding and becomes expensive only when one side digs in. Our first instinct is always a properly worded letter — clear about the law, clear about what we propose, and economic enough that the matter resolves without litigation.",
          "On the more formal side, we handle Fences Act notices, easement disputes, caveats (placing and removing), adverse possession claims, encroachment claims, and the title rectifications that follow. We appear in the Magistrates Court Civil Division and in higher courts when necessary.",
          "Where the dispute is with a neighbour you will continue to live next to, the strategy matters as much as the legal argument. We work to resolutions that solve the legal issue without poisoning the relationship beyond repair.",
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />
      <ServiceCallout eyebrow="If you are here because…" heading={<>Three places property disputes typically start.</>} items={callouts} />
      <ServiceFAQ eyebrow="Common questions" heading={<>What people most often ask on the first call.</>} items={faq} />
      <RelatedServices eyebrow="Adjacent help" heading={<>Often connected to:</>} items={related} />
      <Booking />
    </>
  )
}
