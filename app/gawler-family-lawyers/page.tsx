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
  path: '/gawler-family-lawyers',
  title: 'Gawler family lawyers. Separation, divorce, children.',
  description:
    'A Gawler family law practice since 1986. Separation, divorce, parenting and property settlement, handled plainly and confidentially.',
  image: IMAGES.familyHero.src,
})

const subServices = [
  'Divorce proceedings, document preparation and service',
  'Legal separation, marriage annulment',
  'Spousal maintenance',
  'Property settlement',
  'Binding Financial Agreements (prenuptials)',
  'Domestic and family violence orders',
  'Family mediation',
  'Family Court representation',
  'Child support and enforcement',
  'Parenting plans, custody, visitation',
  "Father's and grandparent's rights",
  'Adoption and child guardianship',
]

const callouts = [
  {
    title: 'You have just separated.',
    body: "The first call is about working out what is actually in front of you, in order. We will explain what you are entitled to, what comes next, and what each step will cost, before you commit to anything.",
  },
  {
    title: 'You are worried about the children.',
    body: "Parenting arrangements come first. We help you reach an arrangement that works for the children's lives — school, sport, the week-on-week rhythm — and is enforceable if it ever needs to be.",
  },
  {
    title: 'There is a property to divide.',
    body: 'A house, super, a business stake, a farm. We work through the lot with a clear head, push hard where we need to, and stop short of the kind of fight that costs more than it returns.',
  },
]

const faq = [
  {
    q: 'Do I need a lawyer to get divorced?',
    a: "Strictly, no — a divorce application can be filed without one. But almost everyone going through separation also has property, super, or children to sort out, and those are the parts that go wrong without proper advice. A 30-minute first call usually answers most of that.",
  },
  {
    q: 'How much does this cost?',
    a: "It depends on the situation, but we give you a clear fee estimate before you commit to any work. Many matters settle out of court within a fixed quote. We will tell you straight if your matter is heading into territory that gets expensive.",
  },
  {
    q: 'Do we have to go to the Family Court?',
    a: "Most matters never reach the Family Court. Mediation, negotiation between lawyers, and properly drafted agreements resolve the great majority of separations. Court is a tool we use when the other side will not engage, not the default.",
  },
  {
    q: 'How long does a property settlement take?',
    a: 'Where both parties cooperate, three to six months is normal. If the matter is contested or involves a business or trust, it can be longer. We tell you on the first call which side of that you are likely on.',
  },
  {
    q: 'What is the time limit for property settlement after separation?',
    a: 'For married couples, you generally have 12 months from the date of divorce to apply. For de facto couples, two years from separation. Time limits can be extended in some cases, but it is much easier to act inside them.',
  },
  {
    q: 'Can you help with an intervention order?',
    a: "Yes — both in applying for one if you are not safe, and in defending one if you believe it has been taken out wrongly. Both are urgent matters and we move quickly on them.",
  },
]

const related = [
  {
    title: 'Intervention orders',
    body: 'Urgent help if you or your children are not safe, or if an order has been wrongly taken out.',
    href: '/intervention-domestic-violence-lawyer',
  },
  {
    title: 'Wills & estates',
    body: 'Most people update their Will after a separation. We can do both, in one visit.',
    href: '/gawler-estate-lawyer',
  },
  {
    title: 'Property law',
    body: 'If the matrimonial home is being sold or transferred, the conveyancing happens with us too.',
    href: '/gawler-property-lawyers',
  },
]

export default function FamilyLawyersPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Family', href: '/family' }, { name: 'Family lawyers', href: '/gawler-family-lawyers' }]} />
      <PageHero
        eyebrow="Family · Divorce · Separation"
        heading={
          <>
            Family law, in the <em>plain words</em> you actually need.
          </>
        }
        lede="Whatever has brought you here, the first call is confidential, unhurried, and costs nothing. By the end of it, you will know where you stand and what your real options are."
        image={IMAGES.familyHero}
        imageCaption="A conversation that has been needed for a long time."
      />

      <ServiceBody
        eyebrow="What we handle"
        heading={<>The full range of family law, by a generalist firm that has been doing it since 1986.</>}
        paragraphs={[
          'Family law is one of the busiest parts of our practice. Most weeks, someone in the Gawler region is sitting in our office on the worst day of their year, and the job is to make the legal part of that day smaller, not larger.',
          'We act for the partner leaving, the partner left, parents fighting for or about their children, grandparents seeking access, and clients on both sides of intervention order applications. We work mainly under fixed quotes or close estimates so there are no surprises on the invoice.',
          'Where it can be settled without court, we settle it. Where it cannot, we are experienced Family Court advocates and will represent you firmly. The most important thing is that the strategy fits your situation, not the firm.',
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />

      <ServiceCallout
        eyebrow="If you are here because…"
        heading={<>Three of the most common reasons people call us first.</>}
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
