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
  path: '/gawler-construction-lawyer',
  title: 'Building and construction lawyer, Gawler. Contracts, disputes.',
  description:
    'Building and construction lawyers since 1985. Pre-contract review, payment claims, defective work, dispute resolution, court appearances when needed.',
  image: IMAGES.constructionHero.src,
})

const subServices = [
  'Pre-contractual drafting and review',
  'Owner-builder contract review',
  'Payment claims and security of payment',
  'Debt recovery for builders and subcontractors',
  'Dispute resolution and court appearances',
  'Body corporate advice',
  'Joint venture negotiation',
  'Professional liability and insurance claims',
  'Risk management and protection works',
  'Defective work claims (owner and builder side)',
]

const callouts = [
  {
    title: 'A contract has landed on your desk.',
    body: 'Before you sign it, send it to us. Building contracts have payment, variation and termination clauses that decide most of the disputes we see later. An hour of review now is the cheapest insurance available.',
  },
  {
    title: 'The work is not what was agreed.',
    body: 'Defective work, missing variations, dragging timelines. We help homeowners and developers get the work finished, the defects rectified, or the loss compensated — usually without going near court.',
  },
  {
    title: 'A payment claim has been served on you.',
    body: 'Security of payment claims have very tight statutory deadlines. If you do not respond in time, the claim is enforceable. Ring us today, not next week.',
  },
]

const faq = [
  {
    q: 'I am building or renovating. When should I get advice?',
    a: 'Before signing the contract, ideally. The standard industry contracts are weighted heavily toward the builder. We mark up the contract, push back on the clauses that matter, and tell you what is normal versus what is not.',
  },
  {
    q: 'My builder has gone over time and over budget. What can I do?',
    a: "It depends on what the contract says and what variations have been properly approved. We assess your position, write the right letter, and either negotiate a workable resolution or escalate to formal action under the Building Work Contractors Act or, if necessary, the Magistrates Court Civil Division.",
  },
  {
    q: 'I am a builder who has not been paid. How do I recover?',
    a: 'For most amounts, a properly served payment claim under the Building and Construction Industry Security of Payment Act is the fastest route — it has tight deadlines that favour the unpaid party. For larger claims, we move directly to court. We will tell you which path is appropriate.',
  },
  {
    q: 'Do you handle defective work claims?',
    a: 'Yes — for both homeowners and builders. We assess the defect, the contract, and the statutory warranties under the Building Work Contractors Act, and we work out the best route to rectification or compensation.',
  },
  {
    q: 'Do you act in body corporate disputes?',
    a: "Yes. Body corporate (strata) disputes typically involve repairs, levies, by-law enforcement and access. We advise lot owners, committees, and managers.",
  },
]

const related = [
  {
    title: 'Property law',
    body: 'If the build is on a property you own or are buying, the conveyancing happens with us too.',
    href: '/gawler-property-lawyers',
  },
  {
    title: 'Commercial leases',
    body: 'For commercial fit-outs, the lease and the build contract interact.',
    href: '/gawler-lease-lawyer',
  },
  {
    title: 'Dispute resolution',
    body: "When mediation is the right tool before court action.",
    href: '/gawler-dispute-resolution-lawyers',
  },
]

export default function ConstructionLawyerPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Property', href: '/property' }, { name: 'Building and construction', href: '/gawler-construction-lawyer' }]} />
      <PageHero
        eyebrow="Building · Construction"
        heading={<>The legal work behind the build, by lawyers who have <em>read the contract before</em>.</>}
        lede="Commercial, industrial, rural and domestic building disputes — we have handled them all since 1985. The same firm advises before the contract is signed and acts when something goes wrong."
        image={IMAGES.constructionHero}
      />
      <ServiceBody
        eyebrow="What we handle"
        heading={<>The whole arc of a build, from pre-contract to defects.</>}
        paragraphs={[
          "Steven M Clark Lawyers have years of experience handling commercial, industrial, rural and domestic building disputes. We act for builders, property developers, project managers, independent contractors, sub-contractors, building owners, property consultants, surveyors, architects and engineers — sometimes for one against the other, sometimes for everyone on the same side.",
          'Our experienced building and construction lawyers assist with the legal requirements for the entire building and construction process. That includes pre-contractual drafting and review, payment claims and debt recovery, dispute resolution and court representation including litigation, body corporate advice, joint venture negotiation, professional liability and insurance claims, and risk management.',
          "Most matters resolve before they become court matters. Where they do not, we have appeared on construction disputes in the Magistrates, District and Supreme Courts of South Australia.",
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />
      <ServiceCallout eyebrow="If you are here because…" heading={<>Three reasons most construction files start.</>} items={callouts} />
      <ServiceFAQ eyebrow="Common questions" heading={<>What people most often ask on the first call.</>} items={faq} />
      <RelatedServices eyebrow="Adjacent help" heading={<>Often connected to:</>} items={related} />
      <Booking />
    </>
  )
}
