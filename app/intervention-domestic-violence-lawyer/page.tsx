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
  path: '/intervention-domestic-violence-lawyer',
  title: 'Intervention orders, Gawler. Urgent and confidential help.',
  description:
    'Help applying for an intervention order if you are not safe, or defending one taken out against you. Confidential, urgent, same-day action.',
  image: IMAGES.interventionHero.src,
})

const subServices = [
  'Applying for an Intervention Order',
  'Defending an Intervention Order application',
  'Variations and revocations of existing orders',
  'Interim Intervention Orders',
  'Police-issued Intervention Orders',
  'Breach of order proceedings',
  'Coordination with Family Court parenting matters',
]

const callouts = [
  {
    title: 'You or your children are not safe.',
    body: 'Ring us today. An urgent application for an Intervention Order can be made in one visit, and an interim order can be in place within hours. You do not have to wait for police involvement.',
  },
  {
    title: 'An order has been taken out against you.',
    body: 'You can object and have a trial. Until that trial, an interim order will be in place. We help you understand what you can and cannot do, and we build your defence.',
  },
  {
    title: 'The order is interfering with your children.',
    body: "Intervention Orders and Family Court parenting orders can conflict. We handle both, so the strategy works as one piece — not two firms tripping over each other.",
  },
]

const faq = [
  {
    q: 'What is an Intervention Order?',
    a: "An Intervention Order is a court order that prohibits the defendant from certain behaviour: harassment, stalking, intimidation, violence, or the threat of violence. It typically also restricts contact and proximity to the protected person's home, workplace, or children.",
  },
  {
    q: 'How quickly can an order be put in place?',
    a: 'Where the magistrate is satisfied there are reasonable grounds for fear, an interim order can be granted on the same day the application is made. The matter then returns for a full hearing.',
  },
  {
    q: 'Can I object if an Intervention Order has been taken out against me?',
    a: 'Yes. You can contest the application and ask for the matter to be adjourned for trial. An interim order remains in place until the trial date. We will defend the application and, where appropriate, seek to have it dismissed.',
  },
  {
    q: 'What happens if I breach an order?',
    a: 'Breaching an Intervention Order is a criminal offence with significant penalties, including imprisonment. If you have been charged with a breach, ring us immediately. Some breaches are technical and defensible, but you should not face the matter alone.',
  },
  {
    q: 'Does an Intervention Order affect my parenting rights?',
    a: 'It can — particularly during the interim period. Intervention Order conditions and Family Court parenting orders sometimes conflict, and we sort out the interaction so you do not end up in breach of one while complying with the other.',
  },
]

const related = [
  {
    title: 'Family law',
    body: 'Most intervention order matters are tied to family law issues we also handle.',
    href: '/gawler-family-lawyers',
  },
  {
    title: 'Criminal defence',
    body: 'If you have been charged with breaching an order, defence work starts here.',
    href: '/criminal-defence-lawyer',
  },
  {
    title: 'Dispute resolution',
    body: 'Where appropriate, mediation can resolve underlying tension before it escalates further.',
    href: '/gawler-dispute-resolution-lawyers',
  },
]

export default function InterventionOrderPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Family', href: '/family' }, { name: 'Intervention orders', href: '/intervention-domestic-violence-lawyer' }]} />
      <PageHero
        eyebrow="Family · Intervention Orders"
        heading={<>An Intervention Order can be in place by the <em>end of the day</em>.</>}
        lede="If you or your children are not safe, ring us today. If an order has been wrongly taken out in your name, ring us today. Both are urgent. Both are confidential."
        image={IMAGES.interventionHero}
      />
      <ServiceBody
        eyebrow="What we handle"
        heading={<>Both sides of an Intervention Order application.</>}
        paragraphs={[
          "An Intervention Order is an order made by the Court that prohibits the defendant from certain behaviour such as harassment, stalking, intimidation, violence, or the threat of violence. The order is intended to protect against future harm, typically by restricting a person's actions and their proximity to the complainant's residence, workplace, or children.",
          'A magistrate can issue an Intervention Order with the defendant\'s consent, or on evidence demonstrating reasonable grounds for fear of violence or harassment. If the order is contested, an interim order is in place until trial.',
          'We act on both sides — for applicants who need urgent protection, and for defendants who believe the order has been wrongly taken out. We move quickly on either, because in this area the calendar matters as much as the legal argument.',
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />
      <ServiceCallout eyebrow="If you are here because…" heading={<>Three reasons most callers need us today, not next week.</>} items={callouts} />
      <ServiceFAQ eyebrow="Common questions" heading={<>What people most often ask on the first call.</>} items={faq} />
      <RelatedServices eyebrow="Adjacent help" heading={<>Often connected to:</>} items={related} />
      <Booking />
    </>
  )
}
