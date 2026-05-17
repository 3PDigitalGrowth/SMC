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
  path: '/gawler-trust-lawyer',
  title: 'Trust lawyer, Gawler. Unit, discretionary and family trusts.',
  description:
    'Family, unit and discretionary trusts drafted and reviewed by a Gawler practice since 1985. We tell you straight if a trust is the right structure.',
  image: IMAGES.trustsHero.src,
})

const subServices = [
  'Drafting of original Trust Deeds',
  'Variations of existing Trust Deeds',
  'Compliance review of existing Trust Deeds',
  'Family discretionary trusts',
  'Unit trusts',
  'Testamentary trusts',
  'Corporate trustee structures',
  'Liaison with your accountant',
  'Asset protection strategy',
  'Family-law and creditor-claim mitigation',
]

const callouts = [
  {
    title: 'Your accountant has suggested a trust.',
    body: 'Often the right call, sometimes oversold. We sit down with you and your accountant together and decide whether a trust adds real value in your situation, or whether something simpler does the job.',
  },
  {
    title: 'You inherited one and you do not understand it.',
    body: "We review existing Trust Deeds, explain what the trust actually is and is not allowed to do, and identify whether it still suits its purpose. Most have not been touched in fifteen years.",
  },
  {
    title: 'You want to protect assets from a claim.',
    body: 'Trusts can be a legitimate part of asset protection, particularly against future creditors. Done late or done badly, they create more problems than they solve. We tell you the difference.',
  },
]

const faq = [
  {
    q: 'What does a trust actually do?',
    a: 'A trust separates the legal ownership of an asset from the benefit of it. A trustee holds the asset, on terms set out in a Trust Deed, for the benefit of named beneficiaries. That separation creates tax, succession and asset-protection opportunities — and a fair amount of paperwork.',
  },
  {
    q: 'When does a trust genuinely help?',
    a: "When income needs to be flexibly distributed across family members (legitimate tax minimisation), when assets need to be held outside the personal estate of someone exposed to creditors, when a family business or farm is being set up to be passed down, and when a Will needs a testamentary trust for vulnerable beneficiaries. We will tell you straight if your situation is not one of these.",
  },
  {
    q: 'Should the trustee be a person or a company?',
    a: "For most family trusts of any size, a corporate trustee. A company trustee avoids the difficulty caused by the death or bankruptcy of an individual trustee, simplifies banking, and gives a cleaner line between personal and trust property.",
  },
  {
    q: 'How long does it take to set one up?',
    a: 'A standard discretionary trust can be drafted and settled within a week. More complex structures — multiple beneficiaries, custom distribution rules, corporate trustees with bespoke shareholdings — take longer because we work them through with your accountant first.',
  },
  {
    q: 'What if my existing Trust Deed is out of date?',
    a: 'We review the Deed against current tax law, family law, and the recent case law on trust amendments. Where it needs updating, we prepare a Deed of Variation. Where it is fine, we tell you and you keep your money.',
  },
]

const related = [
  {
    title: 'Estate planning',
    body: 'Trusts sit inside a wider estate plan that includes your Will and Powers of Attorney.',
    href: '/estate-planning',
  },
  {
    title: 'Commercial and corporate',
    body: 'If the trust holds a business, the corporate structuring happens here.',
    href: '/gawler-commercial-lawyers',
  },
  {
    title: 'Wills and probate',
    body: 'Testamentary trusts are drafted inside your Will.',
    href: '/gawler-estate-lawyer',
  },
]

export default function TrustLawyerPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Estates', href: '/estates' }, { name: 'Trusts', href: '/gawler-trust-lawyer' }]} />
      <PageHero
        eyebrow="Trusts · Estate Planning"
        heading={<>A trust either helps you, or it does not. We will tell you <em>which</em>.</>}
        lede="Trusts are often sold as a one-size-fits-all answer. They are not. We work with you and your accountant, decide whether a trust actually adds value, and if it does, we draft it properly."
        image={IMAGES.trustsHero}
      />
      <ServiceBody
        eyebrow="What we handle"
        heading={<>Family, discretionary and unit trusts, drafted and maintained.</>}
        paragraphs={[
          "Steven M Clark Lawyers can assist you with structuring your business or investments through discretionary and family trusts. The right trust, in the right circumstances, can be a legitimate tax minimisation strategy, a means of sharing income across family members, a way to protect assets from creditor claims, and a method of placing valuable assets out of the direct control of individuals at risk of poor decisions.",
          'In a family discretionary trust, a trustee — frequently one of the family members, or a company controlled by them — is appointed to hold the assets of the trust in their name for the benefit of a group of beneficiaries. Both individuals and companies can serve as trustees. We typically recommend a corporate trustee because it avoids the difficulty of dealing with the death or bankruptcy of an individual trustee.',
          'We draft original Trust Deeds, prepare Deeds of Variation to existing trusts, review Trust Deeds for compliance with current law, liaise with your accountant on the practical operation, and advise on structuring trusts to minimise family-law and debt-recovery exposure.',
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />
      <ServiceCallout eyebrow="If you are here because…" heading={<>Three reasons people sit down with us about trusts.</>} items={callouts} />
      <ServiceFAQ eyebrow="Common questions" heading={<>What people most often ask on the first call.</>} items={faq} />
      <RelatedServices eyebrow="Adjacent help" heading={<>Often connected to:</>} items={related} />
      <Booking />
    </>
  )
}
