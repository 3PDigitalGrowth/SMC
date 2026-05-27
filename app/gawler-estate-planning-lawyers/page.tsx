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
  path: '/gawler-estate-planning-lawyers',
  title: 'Advance care planning, Gawler. POA and Advance Care Directive.',
  description:
    'Power of Attorney and Advance Care Directive prepared by a Gawler practice since 1986. Make sure your family is never guessing.',
  image: IMAGES.advanceCareHero.src,
})

const subServices = [
  'General Power of Attorney',
  'Enduring Power of Attorney',
  'Advance Care Directive (Advance Care Directives Act 2013)',
  'Substituted decision-maker appointment',
  'Binding provisions for refusal of treatment',
  'Coordination with Will and estate plan',
  'Complimentary fireproof document storage',
]

const callouts = [
  {
    title: 'You are doing your Will anyway.',
    body: 'Power of Attorney and Advance Care Directive are signed alongside it in the same visit. Most clients leave with all three in hand. It is a quiet, important hour.',
  },
  {
    title: "A parent's health is changing.",
    body: 'These documents must be made while a person still has capacity. If you have aging parents and the documents are not yet in place, do not wait.',
  },
  {
    title: 'You travel, or work in higher-risk jobs.',
    body: "If something happens to you suddenly, someone has to have the legal authority to act. Without a Power of Attorney, your family has to apply to a tribunal. With one, they can act in days.",
  },
]

const faq = [
  {
    q: 'What is the difference between a General and an Enduring Power of Attorney?',
    a: 'A General Power of Attorney grants authority for legal and financial decisions, with the scope determined by the grantor, and ends if you lose capacity. An Enduring Power of Attorney continues even if you lose capacity. Most people need the enduring version.',
  },
  {
    q: 'Who can be a substituted decision-maker?',
    a: "Any competent adult you trust. Typically a spouse, an adult child, a sibling, or a close friend. You can appoint more than one and require them to decide together, or in a hierarchy. We help you choose the structure that suits your family.",
  },
  {
    q: 'Can a substituted decision-maker refuse pain relief on my behalf?',
    a: 'No. A substituted decision-maker cannot refuse pain relief, or refuse the natural provision of food and water by mouth. They can refuse most other treatment, including life-sustaining measures, if your Advance Care Directive permits it.',
  },
  {
    q: 'What if I become unable to make decisions and I have no Advance Care Directive?',
    a: 'The default is that family, partners and treating clinicians make decisions under the Consent to Medical Treatment and Palliative Care Act. It works, but it can be slow, contested, and stressful. An Advance Care Directive is the cleanest answer.',
  },
  {
    q: 'Where should the original documents be kept?',
    a: "We offer complimentary fireproof document storage at the office, accessible during business hours. Most clients prefer their originals held with us, with copies at home. We keep your Will, Power of Attorney and Advance Care Directive together.",
  },
]

const related = [
  {
    title: 'Wills and probate',
    body: 'The core Will-and-estate documents prepared in the same visit.',
    href: '/gawler-estate-lawyer',
  },
  {
    title: 'Estate planning',
    body: 'The bigger picture — succession, asset protection, tax.',
    href: '/estate-planning',
  },
  {
    title: 'Trusts',
    body: 'Family, discretionary and testamentary — when they help.',
    href: '/gawler-trust-lawyer',
  },
]

export default function EstatePlanningLawyersPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Estates', href: '/estates' }, { name: 'Advance care planning', href: '/gawler-estate-planning-lawyers' }]} />
      <PageHero
        eyebrow="Estate · Advance Care Planning"
        heading={<>Make sure your family is <em>never guessing</em>.</>}
        lede="A Power of Attorney and an Advance Care Directive are quiet documents. Most people sign them in fifteen minutes and never think about them again — until the day they make everything easier."
        image={IMAGES.advanceCareHero}
      />
      <ServiceBody
        eyebrow="What we handle"
        heading={<>The full set of planning documents for if you cannot decide for yourself.</>}
        paragraphs={[
          "Ensuring that your affairs are in order means dealing with two distinct situations: what happens to your property when you pass, and what happens if you cannot make decisions for yourself while you are still living. Both matter equally. A complete plan covers both.",
          'A General Power of Attorney grants someone authority to handle legal and financial matters on your behalf within whatever scope you set. An Enduring Power of Attorney does the same, and remains valid even if you lose capacity later. For most people, the enduring version is the right choice.',
          "Since 2013, South Australia has had a single Advance Care Directive form covering future health care, accommodation, and personal matters. It lets you document your preferences and appoint a substituted decision-maker. It must be made freely and with full understanding — we make sure both boxes are ticked.",
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />
      <ServiceCallout eyebrow="If you are here because…" heading={<>Three reasons people put this in place.</>} items={callouts} />
      <ServiceFAQ eyebrow="Common questions" heading={<>What people most often ask on the first call.</>} items={faq} />
      <RelatedServices eyebrow="Adjacent help" heading={<>Often done in the same visit:</>} items={related} />
      <Booking />
    </>
  )
}
