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
  path: '/divorce-australia',
  title: 'Divorce in Australia, plainly. By a Gawler family lawyer.',
  description:
    'How divorce in Australia actually works. The 12-month rule, the paperwork, the timeline, children, property and the parts that catch people out.',
  image: IMAGES.divorceHero.src,
})

const subServices = [
  '12-month separation requirement',
  'No-fault divorce in Australia',
  'Documents required for application',
  'Court hearing timeline',
  'Children and care arrangements',
  'Property settlement within 12 months',
  'Final divorce orders',
  'Separation under one roof',
]

const callouts = [
  {
    title: 'You think you have decided.',
    body: 'The 12-month separation clock starts the day you separate, not the day you file. The earlier you understand the process, the better positioned you are when the year is up.',
  },
  {
    title: 'You are not sure if you have separated.',
    body: 'You can be separated while still living in the same house, but you need to be able to swear to it in the application. We help you work out what counts and what does not.',
  },
  {
    title: 'There is property to divide.',
    body: 'Property orders have to be lodged within 12 months of the divorce becoming final. People miss this deadline and it costs them. Get advice while you still have time.',
  },
]

const faq = [
  {
    q: 'Do I need a reason to get divorced?',
    a: 'No. Australia is a no-fault jurisdiction. The only ground for divorce is that the marriage has broken down irretrievably, evidenced by 12 months of separation. The Court is not interested in who did what.',
  },
  {
    q: 'How long does it take?',
    a: 'A divorce hearing is usually listed within two to three months of lodging the application. You often do not need to attend. The order becomes final one month and one day after the hearing.',
  },
  {
    q: 'Can we be separated while still living under the same roof?',
    a: 'Yes. You need to be able to demonstrate to the Court that the marriage has ended in substance — separate finances, separate sleeping arrangements, sometimes a corroborating affidavit from a friend or family member. We will tell you what is needed in your situation.',
  },
  {
    q: 'What documents do I need?',
    a: 'Your marriage certificate, identification, and proof of citizenship or residency. If your marriage was overseas, the certificate may need translation. We organise that for you.',
  },
  {
    q: 'What about the children?',
    a: 'The Court needs to be satisfied that arrangements are in place for any children under 18, but does not require a formal parenting agreement. If parenting needs to be resolved, we handle that as a separate matter — it does not delay the divorce.',
  },
  {
    q: 'What about property?',
    a: "You can negotiate and document a property settlement at any time. Crucially, if you cannot agree, a formal application for property orders must be lodged within 12 months of your divorce becoming final. Miss that and you need leave of the Court to bring a claim.",
  },
]

const related = [
  {
    title: 'Family law',
    body: 'The bigger picture — separation, children, settlement, mediation.',
    href: '/gawler-family-lawyers',
  },
  {
    title: 'Property law',
    body: 'If the matrimonial home is being sold or transferred, conveyancing happens with us too.',
    href: '/gawler-property-lawyers',
  },
  {
    title: 'Wills and estates',
    body: 'Most people update their Will the week the divorce comes through.',
    href: '/gawler-estate-lawyer',
  },
]

export default function DivorceAustraliaPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Family', href: '/family' }, { name: 'Divorce in Australia', href: '/divorce-australia' }]} />
      <PageHero
        eyebrow="Read first · Divorce"
        heading={<>Divorce in Australia, in <em>plain English</em>.</>}
        lede="A short guide written by a Gawler family lawyer practising since 1986. The 12-month rule, the timeline, the parts that catch people out, and what you can actually do right now."
        image={IMAGES.divorceHero}
      />
      <ServiceBody
        eyebrow="The basics"
        heading={<>How divorce in Australia actually works.</>}
        paragraphs={[
          "In Australia, there is no need to provide any reasons for divorce other than that the relationship has broken down irretrievably. The 12-month separation requirement serves as evidence of that irretrievable breakdown.",
          "It is possible to be separated and still living together — you do not have to physically move out for the clock to start. Once you can demonstrate that 12 months of separation has passed, you can apply for divorce. The Court is not asked to take sides.",
          "Children, property and finances can be sorted at the same time, before, or after the divorce. Most people sort children and property before the divorce becomes final, but that is a strategic choice, not a legal one. We walk you through which order makes sense in your circumstances.",
        ]}
        asideTitle="Key concepts on this page"
        asideItems={subServices}
      />
      <ServiceCallout eyebrow="If you are here because…" heading={<>Three reasons people read this page first.</>} items={callouts} />
      <ServiceFAQ eyebrow="Common questions" heading={<>The most-asked questions on the first call.</>} items={faq} />
      <RelatedServices eyebrow="Where to next" heading={<>Other things people read on the same visit.</>} items={related} />
      <Booking />
    </>
  )
}
