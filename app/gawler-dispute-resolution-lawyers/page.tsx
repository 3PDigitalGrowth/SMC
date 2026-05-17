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
  path: '/gawler-dispute-resolution-lawyers',
  title: 'Dispute resolution and litigation, Gawler.',
  description:
    'Mediation, conciliation, arbitration and litigation across the Gawler region. We treat court as a last resort but run cases properly when needed.',
  image: IMAGES.disputeResolutionHero.src,
})

const subServices = [
  'Mediation',
  'Conciliation',
  'Arbitration',
  'Alternative dispute resolution',
  'Negotiated settlements',
  'Court representation (Magistrates, District, Supreme)',
  'Commercial and contractual disputes',
  'Property and tenancy disputes',
  'Building and construction disputes',
  'Insurance disputes',
  'Debt-related disputes',
  'Estate and family-provision claims',
]

const callouts = [
  {
    title: 'The other side will not engage.',
    body: 'When months of polite emails have not produced movement, a clearly worded letter from us, setting out the legal position and the next step, usually does. That is often where matters resolve.',
  },
  {
    title: 'You have been served with court papers.',
    body: 'Defences have to be filed within 21 days. Even if you intend to negotiate, the formal response matters. Ring us as soon as the papers arrive, not the week before they are due.',
  },
  {
    title: 'You are at the trial-or-settle decision point.',
    body: 'Most matters settle on the courthouse steps. We give you a frank assessment of the risk, the cost, and the realistic range of outcomes, so the decision you make is informed rather than emotional.',
  },
]

const faq = [
  {
    q: 'What is the difference between mediation, conciliation and arbitration?',
    a: 'Mediation is facilitated negotiation — a neutral third party helps the sides reach a voluntary agreement. Conciliation is similar but the third party can suggest solutions. Arbitration is a private hearing where the arbitrator decides, much like a private judge. We use whichever fits the dispute.',
  },
  {
    q: 'How long does a court matter take?',
    a: 'It depends on the court and the complexity. A Magistrates Court civil matter can finish in three to six months from filing. District Court matters take twelve months or longer. Supreme Court matters can run multiple years. We will give you a realistic timeframe at the start.',
  },
  {
    q: 'How much does litigation cost?',
    a: "Litigation is expensive and the costs are not always predictable. We will quote stage by stage and tell you immediately if anything changes. We also tell you whether the matter is genuinely worth running rather than settling.",
  },
  {
    q: 'Can I recover my legal costs from the other side?',
    a: "If you win, generally yes — but rarely all of them. Indemnity costs (the full amount you actually paid) are awarded only in specific circumstances. Party-party costs (a defined scale amount) are more common. The recoverable portion is usually 50–70%.",
  },
  {
    q: 'Should I settle?',
    a: "Often, yes — but only on the right terms. We assess the strength of your case, the likely cost of running it through, and the realistic range of outcomes, and we tell you whether the offer in front of you is below, in, or above that range. The decision is always yours; the framing is ours.",
  },
]

const related = [
  {
    title: 'Commercial and corporate',
    body: 'Many disputes are commercial. The legal substance is sorted here.',
    href: '/gawler-commercial-lawyers',
  },
  {
    title: 'Debt recovery',
    body: 'Specific tools for monetary claims.',
    href: '/gawler-debt-recovery',
  },
  {
    title: 'Building and construction',
    body: 'A specialised dispute category we handle separately.',
    href: '/gawler-construction-lawyer',
  },
]

export default function DisputeResolutionPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Dispute resolution', href: '/gawler-dispute-resolution-lawyers' }]} />
      <PageHero
        eyebrow="Litigation · Dispute Resolution"
        heading={<>Court is a tool, not the <em>default</em>.</>}
        lede="Most disputes never need to be litigated. We treat court as a last resort because of the cost and the risk — but when it is the right call, we run the case properly."
        image={IMAGES.disputeResolutionHero}
      />
      <ServiceBody
        eyebrow="What we handle"
        heading={<>Mediation, conciliation, arbitration and litigation across South Australia.</>}
        paragraphs={[
          "Steven M Clark Lawyers dispute resolution lawyers offer extensive experience in solving issues for clients in the most efficient manner possible. We take the time needed to fully understand a client's legal position and diligently seek favourable outcomes. The advice is practical and timely — that is the reputation we have built across the Gawler region and Adelaide's legal profession.",
          'We offer mediation, conciliation and arbitration services across a wide range of disputes, for individuals and businesses both large and small. Where the matter can be settled outside a courtroom, we settle it. Most can be.',
          'When it comes to litigation, we strive to provide alternatives to going to trial. Litigation is always viewed as a last resort due to the risk and the cost. However, in certain situations the courtroom is unavoidable, and our experienced litigation lawyers manage both the risk and the cost so the matter does not become its own crisis. We appear in the Magistrates, District and Supreme Courts of South Australia.',
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />
      <ServiceCallout eyebrow="If you are here because…" heading={<>Three places dispute files most often start.</>} items={callouts} />
      <ServiceFAQ eyebrow="Common questions" heading={<>What people most often ask on the first call.</>} items={faq} />
      <RelatedServices eyebrow="Adjacent help" heading={<>Often connected to:</>} items={related} />
      <Booking />
    </>
  )
}
