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
  path: '/de-facto-relationships',
  title: 'De facto relationships lawyer, Gawler. Separation, property.',
  description:
    'Family law for de facto couples in the Gawler region. Separation, property settlement, parenting, and Binding Financial Agreements. The same protections as marriage.',
  image: IMAGES.familyHero.src,
})

const subServices = [
  'Establishing whether a relationship is de facto',
  'Property settlement after a de facto separation',
  'Spousal maintenance for de facto partners',
  'Binding Financial Agreements (before, during, or after a relationship)',
  'Parenting matters for de facto couples',
  '2-year limitation period advice',
  'Same-sex de facto relationships',
  'Multiple-relationship cases',
]

const callouts = [
  {
    title: 'You are about to move in together.',
    body: 'A Binding Financial Agreement before cohabitation lets both partners know where they stand if the relationship ends. It is the de facto equivalent of a prenup — quiet, sensible, often saved for second relationships where there are already assets.',
  },
  {
    title: 'You have just separated from a de facto partner.',
    body: 'The two-year clock starts now. To apply for property orders, you must lodge within 2 years of separation. Out-of-time applications need leave of the Court, which is not guaranteed. Time matters.',
  },
  {
    title: 'There is a dispute about whether you were de facto at all.',
    body: 'The other side denies the relationship existed. We help establish the relationship using the statutory factors — duration, shared finances, public reputation, sexual relationship, care of children, ownership of property.',
  },
]

const faq = [
  {
    q: 'What counts as a de facto relationship?',
    a: "Under the Family Law Act, a de facto relationship exists if you've lived together on a genuine domestic basis. The Court looks at a list of factors — duration of the relationship (typically two years or more, but not always), nature of shared residence, financial interdependence, sexual relationship, public reputation, mutual commitment to a shared life, care of children, and ownership of property.",
  },
  {
    q: 'Do de facto partners get the same property rights as married couples?',
    a: 'Largely yes. The Family Court applies the same four-step process — identify the asset pool, assess contributions, assess future needs, consider justice and equity. The main differences are the time limit (2 years from separation, not 1 year from divorce) and the threshold question of whether the relationship existed.',
  },
  {
    q: 'Can de facto partners claim spousal maintenance?',
    a: 'Yes, on the same basis as married couples. Where one party cannot adequately support themselves and the other has the capacity to pay, maintenance can be ordered.',
  },
  {
    q: 'What about a same-sex de facto relationship?',
    a: 'The Family Law Act treats same-sex de facto relationships on the same legal footing as opposite-sex de facto relationships. The factors and remedies are identical.',
  },
  {
    q: 'Is a Binding Financial Agreement worth it?',
    a: 'For couples bringing significant assets into a new relationship, often yes. A properly drafted BFA gives both partners certainty and avoids the asset-protection-by-litigation route if things end. It must be drafted by a lawyer for each party for it to be binding — we can act for either side.',
  },
]

const related = [
  {
    title: 'Property settlement',
    body: 'The asset division part of any de facto separation.',
    href: '/property-settlement',
  },
  {
    title: 'Parenting and children',
    body: 'Children of de facto relationships have the same protections as children of marriages.',
    href: '/parenting-children',
  },
  {
    title: 'Family law overview',
    body: 'The wider family-law picture.',
    href: '/gawler-family-lawyers',
  },
]

export default function DeFactoPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Family', href: '/family' }, { name: 'De facto relationships', href: '/de-facto-relationships' }]} />
      <PageHero
        eyebrow="Family · De Facto"
        heading={<>The same protections as marriage, with a <em>shorter clock</em>.</>}
        lede="De facto separations have the same property and maintenance remedies as married couples — but the time limit to apply is 2 years from the date of separation, not 1 year from divorce. The earlier you have advice, the more options you have."
        image={IMAGES.familyHero}
      />
      <ServiceBody
        eyebrow="What we handle"
        heading={<>The full de facto relationship lifecycle, before and after.</>}
        paragraphs={[
          "Since 2009, de facto couples in Australia have had access to the same property and spousal maintenance regime as married couples. The Family Court applies the same legal test and the same remedies — the threshold question is simply whether the relationship existed as a de facto one.",
          'On the front end of a relationship, we draft Binding Financial Agreements that set out how assets would be divided if the relationship ends. Increasingly common in second relationships where one or both partners are bringing significant assets, a business, or children from a previous relationship.',
          'On the back end, we handle the same work as for a married couple — property settlement, parenting arrangements, maintenance, and any necessary Court applications. The major procedural difference is the time limit, which is shorter than for married couples. Move quickly.',
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />
      <ServiceCallout eyebrow="If you are here because…" heading={<>Three places de facto matters typically start.</>} items={callouts} />
      <ServiceFAQ eyebrow="Common questions" heading={<>What people most often ask on the first call.</>} items={faq} />
      <RelatedServices eyebrow="Adjacent help" heading={<>Often connected to:</>} items={related} />
      <Booking />
    </>
  )
}
