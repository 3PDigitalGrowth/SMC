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
  path: '/gawler-estate-lawyer',
  title: 'Gawler estate lawyer. Wills, probate, estate planning.',
  description:
    'A Gawler estate practice since 1986. Wills, probate, estate planning, power of attorney, advance care directives, and trusts.',
  image: IMAGES.estatesHero.src,
})

const subServices = [
  'Estate and probate law advice',
  'Will drafting',
  'Family and testamentary trusts',
  'Executors and guardians',
  'Reducing the risk of Will contests',
  'Estate tax and financial planning',
  'Power of Attorney',
  'Advance Care Directive',
  'Probate applications',
  'Secure document storage',
]

const callouts = [
  {
    title: 'You do not yet have a Will.',
    body: 'About half of South Australian adults do not. A properly drafted Will costs less than most people imagine, takes about an hour of your time, and protects every person you care about. Start here.',
  },
  {
    title: 'Your Will is more than five years old.',
    body: "A lot can change in five years — marriages, separations, children, business interests, super, a property bought or sold. We review and update existing Wills, often in a single visit.",
  },
  {
    title: 'Someone in your family has died.',
    body: 'If you are the executor, we walk you through probate, the asset transfers, the tax, and the awkward conversations. We do not rush you and we do not bill in six-minute units.',
  },
]

const faq = [
  {
    q: 'What happens if I die without a Will?',
    a: "Your estate is distributed according to South Australian intestacy rules, which often do not match what you would have wanted. Spouses, children, parents and siblings each have statutory shares, and your house may have to be sold to divide the proceeds. A Will avoids all of that.",
  },
  {
    q: 'How long does probate take in South Australia?',
    a: "For a straightforward estate, four to eight weeks from filing the application is typical. Estates with contested Wills, foreign assets, or complex business interests take longer. We will tell you on the first call which category yours sits in.",
  },
  {
    q: "Can a Will be contested?",
    a: 'Yes, under the Inheritance (Family Provision) Act, certain family members can claim against an estate even if the Will is otherwise valid. Good drafting reduces the chance of a successful claim significantly. We routinely write Wills with that protection in mind.',
  },
  {
    q: 'Do I need a Power of Attorney?',
    a: "If you become unable to make decisions about your finances or your medical care, someone needs the legal authority to do it for you. Without a Power of Attorney, your family has to apply to a tribunal, which is slow, public, and stressful. A Power of Attorney is signed in fifteen minutes alongside your Will.",
  },
  {
    q: "What is an Advance Care Directive?",
    a: "A separate document that records your medical wishes and names someone to speak for you if you cannot. It works alongside your Will and Power of Attorney. We prepare all three together so you do not have to come back.",
  },
  {
    q: 'Do you store the original Will?',
    a: 'Yes — we offer secure document storage at no additional charge. Most clients prefer their original Will held with us, with a copy at home, so it is never lost.',
  },
]

const related = [
  {
    title: 'Family and discretionary trusts',
    body: 'Sometimes a trust genuinely helps. Often it does not. We will tell you straight.',
    href: '/gawler-trust-lawyer',
  },
  {
    title: 'Advance care planning',
    body: 'The medical and lifestyle side of planning ahead, alongside the legal side.',
    href: '/gawler-estate-planning-lawyers',
  },
  {
    title: 'Property law',
    body: 'If the family home or a rural property forms part of the estate, conveyancing happens here too.',
    href: '/gawler-property-lawyers',
  },
]

export default function EstateLawyerPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Estates', href: '/estates' }, { name: 'Estate lawyer', href: '/gawler-estate-lawyer' }]} />
      <PageHero
        eyebrow="Wills · Probate · Estate Planning"
        heading={
          <>
            Wills and estates. Done <em>properly</em>, the first time.
          </>
        }
        lede="Planning for what happens after you are gone is a small, important legal job. Most clients are in and out in two visits, with a Will, a Power of Attorney and an Advance Care Directive that will not need to be touched for years."
        image={IMAGES.estatesHero}
        imageCaption="The quiet moment a Will is signed. Tuesday morning at the kitchen table."
      />

      <ServiceBody
        eyebrow="What we handle"
        heading={<>The full estate picture, in plain words.</>}
        paragraphs={[
          "Planning for your family's future after you are gone is a really important legal task. A properly prepared Will reduces both the emotional and financial weight your family carries at the worst possible time.",
          'For most clients, the right starting set is a Will, a Power of Attorney and an Advance Care Directive — signed together so that all three are in place. We prepare them, we explain them, and we hold the originals safely in our office.',
          'For clients with more complex estates — a business, a farm, a blended family, significant superannuation, or assets in more than one state — we put a full plan in place. That can include a testamentary trust, executor advice, or guardianship arrangements for younger children. We will tell you honestly which of those your situation needs and which it does not.',
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />

      <ServiceCallout
        eyebrow="If you are here because…"
        heading={<>Three reasons most people finally get around to this.</>}
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
