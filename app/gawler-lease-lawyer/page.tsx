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
  path: '/gawler-lease-lawyer',
  title: 'Commercial and retail lease lawyer, Gawler.',
  description:
    'Retail and commercial leases drafted, reviewed, negotiated and disputed by a Gawler firm since 1986. Tenants and landlords.',
  image: IMAGES.leaseHero.src,
})

const subServices = [
  'Drafting retail and commercial leases',
  'Reviewing leases before you sign',
  'Deeds of Assignment',
  'Compliant lease plans where required',
  'Negotiation of rent, term, options, exit and renewal',
  'Subletting and underlease preparation',
  'Insurance advice and business cover',
  'Lease dispute resolution',
  'Retail Shop Leases Act compliance',
]

const callouts = [
  {
    title: 'You are about to sign a lease.',
    body: "Send it to us before you sign. The clauses that matter most — rent reviews, options, exit, make-good, outgoings — are negotiable, but only before you have signed. After that, you live with what is there for the next five years.",
  },
  {
    title: 'You are buying a business with an existing lease.',
    body: "The lease is often as important as the business itself. We review the Deed of Assignment, check that the lease is transferable, and identify the clauses that will affect your operation.",
  },
  {
    title: 'A dispute has come up with your landlord or tenant.',
    body: 'Make-good claims, rent disputes, repairs, access. Most are resolved by a properly worded letter and a clean reading of the lease. We do that first, before anything formal.',
  },
]

const faq = [
  {
    q: 'Should I get legal advice before signing a commercial lease?',
    a: "Yes, every time. A commercial lease is typically a five-year commitment with options to extend. The cost of legal review before signing is a tiny fraction of what a bad clause costs over the term.",
  },
  {
    q: 'What is the difference between a retail and a commercial lease?',
    a: "In South Australia, retail leases (typically shops in shopping centres or selling to consumers) are covered by the Retail and Commercial Leases Act, which has additional tenant protections. Pure commercial leases are not. The Act influences how rent reviews, disclosure and assignment work.",
  },
  {
    q: 'What is make-good?',
    a: "Make-good is the obligation at the end of the lease to return the premises to a specified condition — often original condition. It can be the largest hidden cost in a lease. We negotiate it down to something realistic before you sign.",
  },
  {
    q: 'Can I sublet?',
    a: 'Only if the lease allows it, and the landlord consents in writing. Most leases require landlord consent, which cannot be unreasonably withheld. We prepare the underlease documents and the consent paperwork.',
  },
  {
    q: 'My landlord is increasing rent in a way that does not feel right.',
    a: "Rent reviews must follow the mechanism in the lease — CPI, market review, or a fixed percentage. If the review does not follow the mechanism, it can be challenged. We will look at the review notice and tell you within a day whether you have a basis to dispute.",
  },
]

const related = [
  {
    title: 'Property law',
    body: 'If you are buying or selling the underlying property, the conveyancing happens here.',
    href: '/gawler-property-lawyers',
  },
  {
    title: 'Business law',
    body: 'Most lease matters are tied to a business purchase, sale or restructure.',
    href: '/gawler-business-lawyers',
  },
  {
    title: 'Dispute resolution',
    body: "If the lease dispute needs more than a letter, this is where it goes.",
    href: '/gawler-dispute-resolution-lawyers',
  },
]

export default function LeaseLawyerPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Property', href: '/property' }, { name: 'Commercial leases', href: '/gawler-lease-lawyer' }]} />
      <PageHero
        eyebrow="Property · Commercial Leases"
        heading={<>Five years of your business decisions live <em>inside the lease</em>.</>}
        lede="A retail or commercial lease is one of the most consequential documents a business signs. We make sure it works for you, before you commit, and we sort it out if it does not."
        image={IMAGES.leaseHero}
      />
      <ServiceBody
        eyebrow="What we handle"
        heading={<>Lease work for both tenants and landlords.</>}
        paragraphs={[
          "Steven M Clark Lawyers can provide assistance with retail and commercial leases, and assignments of them, in a number of capacities. We strongly recommend taking legal advice before entering any lease, because a lease has the potential to become a negative impact on your business cash flow at any later stage.",
          "We draft leases for landlords, review and negotiate leases for tenants, prepare Deeds of Assignment for incoming tenants in a business sale, arrange compliant lease plans, prepare underlease documents for subletting, and resolve lease disputes when they arise.",
          'Most of what makes a lease good or bad is in the negotiation phase — rent reviews, option rights, exit rights, make-good, outgoings, permitted use. We work through every clause that matters and push back where the standard wording does not serve you.',
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />
      <ServiceCallout eyebrow="If you are here because…" heading={<>Three reasons people send us a lease.</>} items={callouts} />
      <ServiceFAQ eyebrow="Common questions" heading={<>What people most often ask on the first call.</>} items={faq} />
      <RelatedServices eyebrow="Adjacent help" heading={<>Often connected to:</>} items={related} />
      <Booking />
    </>
  )
}
