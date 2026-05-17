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
  path: '/parenting-children',
  title: 'Parenting and children lawyer, Gawler. Custody, support, plans.',
  description:
    'Parenting plans, custody and visitation arrangements, child support and parental rights in the Gawler region. The children come first, the law follows.',
  image: IMAGES.familyHero.src,
})

const subServices = [
  'Parenting plans (informal agreements)',
  'Consent orders (Court-enforceable)',
  'Custody and visitation arrangements',
  'Child support assessment and enforcement',
  "Father's rights",
  "Grandparent's rights",
  'Child guardianship',
  'Adoption',
  "Children's Court representation",
  'Family Court representation',
  'Recovery orders if a child has been wrongfully taken',
]

const callouts = [
  {
    title: 'You and the other parent have agreed.',
    body: 'Great. We turn the agreement into either a Parenting Plan (informal, fast, low-cost) or Consent Orders (Court-enforceable, slightly more involved). We explain the trade-off and let you choose.',
  },
  {
    title: 'You cannot agree.',
    body: 'Most parenting disputes resolve through Family Dispute Resolution before any Court involvement. We will tell you whether mediation is the right path for your situation, or whether the matter needs Court intervention from the start.',
  },
  {
    title: 'Child support is not being paid.',
    body: 'Services Australia can assess and collect child support. Where they cannot — overseas non-payers, complex income arrangements, or enforcement of private agreements — we step in.',
  },
]

const faq = [
  {
    q: "What's the difference between a Parenting Plan and Consent Orders?",
    a: 'A Parenting Plan is a written agreement signed by both parents. It is not legally enforceable but is taken seriously by Courts and is a common, low-cost first step. Consent Orders are filed with the Family Court and have the force of a Court order — enforceable, but requires Court approval. We help you choose.',
  },
  {
    q: 'How does the Court decide what is in a child\'s best interests?',
    a: "Under the Family Law Act, the Court considers a long list of factors including the benefit of a meaningful relationship with both parents, protection from harm, the child's views (depending on age), parental capacity, and practical arrangements. The best interests of the child is the paramount consideration.",
  },
  {
    q: 'Do I have to go to mediation before Court?',
    a: 'Yes, in most cases. Section 60I of the Family Law Act requires parties to attempt Family Dispute Resolution before filing a parenting application, with limited exceptions (family violence, urgency, child abuse). We coordinate with FDR providers and help you prepare.',
  },
  {
    q: 'Do grandparents have rights?',
    a: "Grandparents can apply to the Family Court for time with grandchildren. The Court considers the same best-interests factors. We act for grandparents and have a good track record with these applications.",
  },
  {
    q: 'How long do parenting orders last?',
    a: 'Until the child turns 18 or until the order is varied by the Court. Variations require demonstrating a significant change in circumstances. The orders should be drafted with enough flexibility to accommodate the realities of growing children.',
  },
]

const related = [
  {
    title: 'Divorce and separation',
    body: 'Often run in parallel — divorce is the legal process, parenting is the practical reality.',
    href: '/divorce-separation',
  },
  {
    title: 'Family mediation',
    body: 'Required in most cases before Court applications.',
    href: '/family-mediation',
  },
  {
    title: 'Intervention orders',
    body: 'If safety is a concern, urgent help is available the same day.',
    href: '/intervention-domestic-violence-lawyer',
  },
]

export default function ParentingChildrenPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Family', href: '/family' }, { name: 'Parenting and children', href: '/parenting-children' }]} />
      <PageHero
        eyebrow="Family · Parenting · Children"
        heading={<>Arrangements that work for the <em>children's lives</em>, not just the legal file.</>}
        lede="A parenting matter is really about the school week. Where the kids sleep on a Tuesday. Who picks them up from sport. The legal documents should make those answers easier, not harder."
        image={IMAGES.familyHero}
      />
      <ServiceBody
        eyebrow="What we handle"
        heading={<>Parenting plans, Consent Orders, child support and the wider arrangements.</>}
        paragraphs={[
          'For most parents we work with, the goal is the same: a stable, predictable arrangement that lets the children get on with their school week. The legal route varies depending on whether both parents agree, whether the matter needs to be enforceable, and whether there are safety concerns.',
          'On the practical side we draft Parenting Plans, prepare Consent Orders, advise on child support assessments and enforcement, and act in Court when matters cannot be resolved any other way. We also act for grandparents seeking access and for fathers asserting their rights to a fair share of time.',
          'Where there are safety concerns, parenting matters can intersect with intervention orders. We handle both, so the strategy is coherent rather than two separate fights.',
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />
      <ServiceCallout eyebrow="If you are here because…" heading={<>Three places parenting matters usually start.</>} items={callouts} />
      <ServiceFAQ eyebrow="Common questions" heading={<>What people most often ask on the first call.</>} items={faq} />
      <RelatedServices eyebrow="Adjacent help" heading={<>Often connected to:</>} items={related} />
      <Booking />
    </>
  )
}
