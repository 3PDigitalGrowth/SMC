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
  path: '/property-settlement',
  title: 'Property settlement lawyer, Gawler. After separation.',
  description:
    'Dividing assets after a separation or divorce. The house, superannuation, business interests, debts. Negotiated where possible, litigated where necessary.',
  image: IMAGES.familyHero.src,
})

const subServices = [
  'Identification and valuation of assets and liabilities',
  'Treatment of superannuation',
  'Treatment of a family business or farm',
  'Treatment of trusts (family law looks through them)',
  'Negotiated property settlements',
  'Consent Orders for property',
  'Binding Financial Agreements (post-separation)',
  'Family Court applications (Form 1, Form 13)',
  'Spousal maintenance applications',
  'Time-limit advice (1 year post-divorce for married, 2 years post-separation for de facto)',
]

const callouts = [
  {
    title: 'You have just separated.',
    body: "Do not divide anything formally yet — but do start documenting. Bank statements, super statements, property valuations. The earlier you have a clear picture, the easier the eventual settlement.",
  },
  {
    title: 'You have agreed in principle.',
    body: 'A handshake or an email is not enough. To make a settlement binding and final, you need either Consent Orders or a Binding Financial Agreement. We prepare whichever fits the situation.',
  },
  {
    title: 'You cannot agree.',
    body: "Where one side will not engage or the gap is too wide, we apply to the Family Court. We work the matter to mediation first, settlement conferences second, trial only as a last resort. Court is expensive — but sometimes necessary.",
  },
]

const faq = [
  {
    q: 'How does the Court work out a fair split?',
    a: 'The Family Law Act sets a four-step process: identify the asset pool, assess contributions (financial and non-financial, including homemaker and parent contributions), assess future needs (income disparity, care of children, health), and consider whether the proposed split is just and equitable. There is no automatic 50/50.',
  },
  {
    q: 'What about superannuation?',
    a: 'Super is property for family law purposes and is included in the asset pool. It can be split between parties via a superannuation splitting order. We coordinate with the super fund and draft the necessary orders.',
  },
  {
    q: 'What if there is a family business or farm?',
    a: 'Business interests are part of the pool but valuing them is the hard part. We work with forensic accountants and valuers where needed. The goal is usually to preserve the business as a going concern rather than to force a sale at distress prices.',
  },
  {
    q: 'How long do I have to apply?',
    a: 'For married couples, 12 months from the date of divorce becoming final. For de facto couples, 2 years from the date of separation. Out-of-time applications need leave of the Court — possible but not guaranteed.',
  },
  {
    q: 'Do trusts protect assets from family law?',
    a: 'Not as much as people think. Family law looks through trust structures to identify property that is effectively controlled by a party. A well-structured trust can complicate matters but rarely insulates them entirely.',
  },
]

const related = [
  {
    title: 'Divorce and separation',
    body: 'The legal process for ending the marriage. Property is a separate matter that can run in parallel.',
    href: '/divorce-separation',
  },
  {
    title: 'Property law',
    body: 'If the matrimonial home is being sold or transferred, the conveyancing happens here.',
    href: '/gawler-property-lawyers',
  },
  {
    title: 'Trusts',
    body: 'For complex asset pools involving family trusts.',
    href: '/gawler-trust-lawyer',
  },
]

export default function PropertySettlementPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Family', href: '/family' }, { name: 'Property settlement', href: '/property-settlement' }]} />
      <PageHero
        eyebrow="Family · Property Settlement"
        heading={<>Dividing assets after separation, done <em>properly</em> the first time.</>}
        lede="A property settlement is a one-time legal job. Done well, it puts the financial chapter behind you. Done badly, it surfaces again years later. We work hard to make it the former."
        image={IMAGES.familyHero}
      />
      <ServiceBody
        eyebrow="What we handle"
        heading={<>The full property settlement, from valuations to enforceable orders.</>}
        paragraphs={[
          'A property settlement after separation looks straightforward on the surface and almost never is. Couples typically own a mix of assets — the family home, superannuation across several accounts, possibly a business or farm, sometimes a trust, sometimes debts. The job is to identify the pool, value it fairly, work out a just split, and document it in a form the Court will recognise.',
          "We work primarily on negotiated settlements. Most matters resolve through correspondence between solicitors or at a single mediation. Where they don't, we run them through the Family Court — but we will always tell you honestly whether litigation is economic in your particular case.",
          "On the documentation side, we prepare Consent Orders (the Court-enforceable option) or Binding Financial Agreements (the contractual option). Both have their place. We will choose with you based on your situation.",
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />
      <ServiceCallout eyebrow="If you are here because…" heading={<>Three places property settlements typically start.</>} items={callouts} />
      <ServiceFAQ eyebrow="Common questions" heading={<>What people most often ask on the first call.</>} items={faq} />
      <RelatedServices eyebrow="Adjacent help" heading={<>Often connected to:</>} items={related} />
      <Booking />
    </>
  )
}
