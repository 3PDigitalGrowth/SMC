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
  path: '/family-mediation',
  title: 'Family mediation lawyer, Gawler. Before going to Court.',
  description:
    'Family Dispute Resolution and mediation for separating couples in the Gawler region. Resolve parenting and property matters out of Court where possible.',
  image: IMAGES.disputeResolutionHero.src,
})

const subServices = [
  'Pre-mediation legal advice',
  'Preparation and strategy for FDR',
  'Coordination with FDR practitioners',
  'Attendance at mediation in support of you',
  'Drafting agreements reached in mediation',
  'Converting Parenting Plans to Consent Orders',
  'Section 60I certificates and the exceptions',
  'Shuttle mediation where direct contact is unsafe',
]

const callouts = [
  {
    title: 'You have to attempt mediation before Court.',
    body: 'Section 60I of the Family Law Act requires parties to attempt Family Dispute Resolution before filing a parenting application, with limited exceptions. We help you prepare for FDR so it has the best chance of resolving the matter.',
  },
  {
    title: 'You want to avoid Court.',
    body: 'Mediation is faster, cheaper and significantly easier on the children than the Court process. Where both parties are willing to engage, it resolves the great majority of matters.',
  },
  {
    title: 'Direct contact is unsafe.',
    body: 'Shuttle mediation, where the parties never meet face-to-face and a mediator carries proposals between them, is available. We coordinate with FDR providers experienced in shuttle work.',
  },
]

const faq = [
  {
    q: 'Is mediation the same as the Court process?',
    a: 'No. Mediation is a structured negotiation facilitated by a neutral third party — a Family Dispute Resolution practitioner. It is voluntary in substance, even where attempting it is procedurally required. The mediator does not decide; the parties do.',
  },
  {
    q: 'Do I need a lawyer at mediation?',
    a: 'You can attend without one, and many people do. The trade-off is that proposals made in mediation are easier to evaluate with legal advice in your ear. We can attend with you, or be on the phone, or simply prepare you in advance — whichever you prefer.',
  },
  {
    q: 'What if mediation fails?',
    a: 'The FDR practitioner issues a Section 60I certificate, which is the procedural ticket to the Court. We then file the application and run the matter as litigation. Failed mediation does not mean lost time — the work done in preparation usually streamlines what comes next.',
  },
  {
    q: 'Can a mediation agreement be enforced?',
    a: 'A handshake or even a signed Heads of Agreement at mediation is not automatically enforceable. To make it binding, the agreement needs to be converted to a Parenting Plan, Consent Orders, or a Binding Financial Agreement depending on the subject matter. We draft whichever applies.',
  },
  {
    q: 'When is mediation not appropriate?',
    a: 'In cases of family violence, child abuse, urgency, or where one party will not engage in good faith. The Section 60I exceptions cover these situations. We will tell you honestly on the first call whether mediation is the right path or whether the matter needs to go straight to Court.',
  },
]

const related = [
  {
    title: 'Parenting and children',
    body: 'The most common subject matter for family mediation.',
    href: '/parenting-children',
  },
  {
    title: 'Property settlement',
    body: 'Property matters also benefit from a mediation attempt before Court.',
    href: '/property-settlement',
  },
  {
    title: 'Dispute resolution',
    body: 'For non-family disputes that benefit from a mediated approach.',
    href: '/gawler-dispute-resolution-lawyers',
  },
]

export default function FamilyMediationPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Family', href: '/family' }, { name: 'Family mediation', href: '/family-mediation' }]} />
      <PageHero
        eyebrow="Family · Mediation"
        heading={<>Where it can be settled <em>out of Court</em>, we settle it.</>}
        lede="Family Dispute Resolution is faster, cheaper and easier on the children than Court. It is also a procedural requirement before filing most parenting applications. We help you make it count."
        image={IMAGES.disputeResolutionHero}
      />
      <ServiceBody
        eyebrow="What we handle"
        heading={<>Mediation preparation, attendance, and the documents that follow.</>}
        paragraphs={[
          "Family Dispute Resolution (FDR) is a form of mediation conducted by an accredited practitioner, designed to help separating couples reach agreements about children and property without going to Court. Since 2007, FDR has been a procedural requirement before most parenting applications can be filed.",
          'Our role is to prepare you for the mediation, advise on the realistic range of outcomes, and where requested, attend with you. We also draft the documents that turn a mediated agreement into an enforceable arrangement — a Parenting Plan, Consent Orders, or a Binding Financial Agreement.',
          'For cases involving family violence or where direct contact is unsafe, shuttle mediation is available. The parties never see each other; the mediator carries proposals between them. We coordinate with FDR providers experienced in this format.',
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />
      <ServiceCallout eyebrow="If you are here because…" heading={<>Three places mediation files most often start.</>} items={callouts} />
      <ServiceFAQ eyebrow="Common questions" heading={<>What people most often ask on the first call.</>} items={faq} />
      <RelatedServices eyebrow="Adjacent help" heading={<>Often connected to:</>} items={related} />
      <Booking />
    </>
  )
}
