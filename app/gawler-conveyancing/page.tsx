import PageHero from '@/components/page/PageHero'
import ServiceBody from '@/components/page/ServiceBody'
import ServiceCallout from '@/components/page/ServiceCallout'
import ServiceFAQ from '@/components/page/ServiceFAQ'
import RelatedServices from '@/components/page/RelatedServices'
import Booking from '@/components/home/Booking'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import FAQSchema from '@/components/seo/FAQSchema'
import { pageMetadata } from '@/lib/seo'
import { IMAGES } from '@/lib/images'

export const metadata = pageMetadata({
  path: '/gawler-conveyancing',
  title: 'Conveyancing in Gawler. Buying, selling, house and land.',
  description:
    'Conveyancing lawyers in Gawler since 1985. Your contract read before you sign, a fixed fee quoted first, settlement handled. Gawler, Hewett, Evanston, Roseworthy, Angle Vale and the Barossa.',
  image: IMAGES.conveyancingHero.src,
})

const subServices = [
  'Buying your first home',
  'Selling a home',
  'House-and-land packages',
  'Building contracts for a new home',
  'Off-the-plan purchases',
  'Vacant and rural land',
  'Units and community title',
  'Contract and Form 1 review',
  'Cooling-off advice',
  'Finance and inspection conditions',
  'Stamp duty and first home buyer relief',
  'Problems found at the final inspection',
  'Transfers between family members',
  'Family loans towards a purchase',
]

const callouts = [
  {
    title: 'You have been handed a contract to sign.',
    body: 'Send it to us before you sign. We can usually read a residential contract and ring you back within 24 hours, with the clauses that matter marked. Once it is signed, the cooling-off window is short, and there is none at all if you bought at auction.',
  },
  {
    title: 'You are building in one of the new estates.',
    body: 'A house-and-land purchase is two contracts with two sets of deadlines. If the land contract becomes unconditional before your building finance is approved, you can be committed to land you cannot afford to build on. We check both before either one binds you.',
  },
  {
    title: 'Something was wrong at the final inspection.',
    body: 'The heating does not work, a fixture has gone, or there is damage that was not there when you signed. What you can do depends on the contract and on timing, which is usually a matter of days. Call before settlement, not after.',
  },
]

const faq = [
  {
    q: 'How much does conveyancing cost?',
    a: 'We quote a fixed fee for standard residential conveyancing before we start, with search fees and government charges listed separately so you can see the total. House-and-land, off-the-plan and family transfers are quoted once we have seen the documents.',
  },
  {
    q: 'Should I use a conveyancer or a lawyer?',
    a: 'For a straightforward sale, a registered conveyancer does the job well. A lawyer is worth it when something is not straightforward, or might become so: a dispute with the other side, a building contract, a family loan, a deceased estate or a separation. We can handle all of those without referring you on.',
  },
  {
    q: 'Can I cool off after I sign?',
    a: 'For most residential purchases in South Australia, yes: within two clear business days after the later of signing the contract and being served the Form 1 (the vendor\'s statement). There is no cooling-off when you buy at auction, other exceptions apply, and the vendor can keep a small part of the deposit. Ask us before you rely on it.',
  },
  {
    q: 'Do I need to come into the office?',
    a: 'Usually once, for the identity check and to sign the authority that lets us act for you, at our office at 1 Adelaide Road, Gawler South. The rest happens by phone and email, and settlement itself is completed electronically. You get a call when it has settled.',
  },
  {
    q: 'Which areas do you cover?',
    a: 'Gawler and the towns and suburbs around it, including Hewett, Evanston, Willaston, Roseworthy, Angle Vale, Two Wells and the Barossa, and properties anywhere in South Australia.',
  },
  {
    q: 'My parents are helping with the deposit. Does that matter?',
    a: 'It can. Your bank will want to know whether the money is a gift or a loan, and the answer affects what happens if you later separate or if a parent dies. We can put the arrangement in writing as part of the purchase.',
  },
]

const related = [
  {
    title: 'Family loans and independent advice',
    body: 'Parents lending towards a deposit, a home sold within the family, or a lender asking for an independent legal advice certificate.',
    href: '/family-loan-agreements',
  },
  {
    title: 'Building and construction',
    body: 'Building contracts, defective work and disputes with builders, before and after the slab goes down.',
    href: '/gawler-construction-lawyer',
  },
  {
    title: 'Property law',
    body: 'Subdivisions, easements, boundary and fencing disputes, and the rest of property law beyond the sale itself.',
    href: '/gawler-property-lawyers',
  },
]

export default function ConveyancingPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Property', href: '/property' }, { name: 'Conveyancing', href: '/gawler-conveyancing' }]} />
      <FAQSchema items={faq} />
      <PageHero
        eyebrow="Property · Conveyancing"
        heading={<>Conveyancing lawyers in <em>Gawler</em>.</>}
        lede="Buying or selling a home is the biggest contract most families ever sign. We read it before you do, tell you what each clause means for you, and run the settlement through to the keys. Fixed fee, quoted first."
        image={IMAGES.conveyancingHero}
        imageCaption="Keys on the letterbox, the day after settlement."
      />

      <ServiceBody
        eyebrow="What we handle"
        heading={<>A lawyer on your contract, from signing to settlement.</>}
        paragraphs={[
          'Conveyancing is the legal work of moving a property from one owner to another: the contract, the vendor\'s statement, the searches, the money and the transfer. For a simple sale a conveyancer is often enough. We are lawyers, so when something stops being simple, such as a finance clause that does not work, a defect found at the final inspection or a family member lending part of the deposit, the person who has been reading your file can deal with it.',
          'For buyers, we check the contract and the Form 1 (the vendor\'s statement) before you sign or while you can still cool off, explain the finance and building inspection conditions, work through stamp duty and any first home buyer relief with you, and handle settlement with your bank. For sellers, we prepare the Form 1, answer the buyer\'s questions and make sure the settlement figures are right.',
          'Much of the new housing around Gawler is sold as house-and-land: a land contract and a separate building contract, each with its own conditions and deadlines. We read the two together, because the costly problems we see tend to come from the gap between them.',
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />

      <ServiceCallout
        eyebrow="If you are here because…"
        heading={<>Three moments people call us about a property.</>}
        items={callouts}
      />

      <ServiceFAQ
        eyebrow="Common questions"
        heading={<>What buyers and sellers ask on the first call.</>}
        items={faq}
      />

      <RelatedServices
        eyebrow="Adjacent help"
        heading={<>Often part of the same move.</>}
        items={related}
      />

      <Booking />
    </>
  )
}
