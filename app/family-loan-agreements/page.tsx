import PageHero from '@/components/page/PageHero'
import ServiceBody from '@/components/page/ServiceBody'
import ServiceCallout from '@/components/page/ServiceCallout'
import ServiceFAQ from '@/components/page/ServiceFAQ'
import RelatedServices from '@/components/page/RelatedServices'
import RelatedGuides from '@/components/page/RelatedGuides'
import Booking from '@/components/home/Booking'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import FAQSchema from '@/components/seo/FAQSchema'
import { pageMetadata } from '@/lib/seo'
import { IMAGES } from '@/lib/images'

export const metadata = pageMetadata({
  path: '/family-loan-agreements',
  title: 'Family loan agreements and independent legal advice, Gawler.',
  description:
    'Lending to your children or your partner for a home? We put the loan in writing, secure it properly, and give independent legal advice certificates for guarantees and private mortgages.',
  image: IMAGES.familyLoansHero.src,
})

const subServices = [
  'Loans from parents towards a home',
  'Selling a home to a family member',
  'Loans between partners',
  'Mortgages to secure a family loan',
  'Second mortgages and bank consent',
  'Interest, repayment and default terms',
  'What happens on separation or sale',
  'Family loans and your Will',
  'Independent legal advice certificates',
  'Guarantees for family borrowing',
  'Private mortgage documents',
]

const callouts = [
  {
    title: 'You are helping a child buy a home.',
    body: 'Decide first whether the money is a gift or a loan, and say so in writing. If it is a loan, we draw up the agreement and, where it makes sense, register a mortgage so the money comes back if the house is sold or the relationship ends.',
  },
  {
    title: 'You are lending money to a partner.',
    body: 'Married, de facto or living apart, a written agreement is the only reliable record of what was a loan and on what terms. Without one, a court may decide the money was a gift, or simply part of the shared property.',
  },
  {
    title: 'A lender has asked for an independent advice certificate.',
    body: 'Bring the documents and your photo ID. We go through them with you, explain in clear terms what you are taking on and what happens if the borrower does not pay, and sign the certificate if you are comfortable to go ahead. If you are not, we say so.',
  },
]

const faq = [
  {
    q: 'If we never wrote anything down, is it a gift?',
    a: 'Not automatically, but it is much harder to show it was a loan. Courts look at what was said and done at the time, and in a separation an undocumented family loan is often treated as part of the shared property. A signed agreement made at the time removes most of the argument.',
  },
  {
    q: 'Do we need a mortgage as well as an agreement?',
    a: 'Not always. For a smaller amount a written, unsecured agreement may be enough. For a large sum, or where the borrower is in a relationship, a registered mortgage gives the lender a claim on the property itself. If a bank already holds the first mortgage, a second one usually needs the bank\'s consent, and we arrange that.',
  },
  {
    q: 'We are selling our home to our daughter below its value. Is that a problem?',
    a: 'It can be. Stamp duty is generally worked out on the market value when that is higher than the price, and the difference may count as a gift for other purposes, such as the Age Pension. We look at the whole picture, including your Wills, before anything is signed.',
  },
  {
    q: 'Can you act for both the parents and the child?',
    a: 'Usually not on the same loan, because their interests differ if things go wrong. We act for one side, normally the lender, and recommend the other gets their own advice. We tell you at the start if that applies to you.',
  },
  {
    q: 'What happens to the loan if I die?',
    a: 'It becomes an asset of your estate, and your executor can call it in unless your Will says otherwise. Many parents forgive the loan in their Will, or deduct it from that child\'s share so everyone is treated evenly. Either way, it needs to be written into the Will.',
  },
  {
    q: 'Does lending money affect my Age Pension?',
    a: 'It can. Centrelink generally counts money you have lent as one of your assets. Check with Centrelink or your financial adviser before you lend, and we can work with them on the paperwork.',
  },
  {
    q: 'What does an independent legal advice certificate cost?',
    a: 'We quote a fixed fee once we have seen the documents, before the appointment, so you know the cost before you come in.',
  },
]

const related = [
  {
    title: 'Conveyancing',
    body: 'The purchase the loan is helping with: contract, Form 1, finance and settlement.',
    href: '/gawler-conveyancing',
  },
  {
    title: 'Wills and probate',
    body: 'A family loan should be written into your Will, so your other children are treated fairly.',
    href: '/gawler-estate-lawyer',
  },
  {
    title: 'Property settlement',
    body: 'When a relationship ends and the question is what the family money actually was.',
    href: '/property-settlement',
  },
]

export default function FamilyLoansPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Property', href: '/property' }, { name: 'Family loans', href: '/family-loan-agreements' }]} />
      <FAQSchema items={faq} />
      <PageHero
        eyebrow="Property · Family loans"
        heading={<>Family loan agreements and independent legal advice in <em>Gawler</em>.</>}
        lede="Parents help children into homes. Partners lend each other money. It usually works out, until a separation, a death or a falling-out asks what the money actually was. A short, properly drafted agreement answers that before anyone has to."
        image={IMAGES.familyLoansHero}
        imageCaption="A family arrangement, put in writing at the kitchen table."
      />

      <ServiceBody
        eyebrow="What we handle"
        heading={<>Put it in writing while everyone still agrees.</>}
        paragraphs={[
          'Money moving inside a family is often handled on trust: a transfer from the parents\' account and a promise to pay it back one day. If nothing is written down, a court, or the other side of a separation, can treat that money as a gift. A loan agreement records the amount, whether interest is charged, when and how it is repaid, and what happens if the borrower separates, sells or dies.',
          'Where the amount matters, the loan can be secured with a registered mortgage over the property, so it is repaid from a sale before anything else is divided. Parents should also think about their own position: a loan can count as an asset for the Age Pension, and how your Will treats it (repaid, forgiven, or deducted from that child\'s share) decides whether your other children are treated fairly. We deal with the loan and the Wills together.',
          'Lenders often need a certificate that you have had independent legal advice before you sign a guarantee, a private mortgage or a loan for someone else\'s benefit. We read the documents with you, explain what you are agreeing to and what could happen if the borrower does not pay, and sign the certificate. We act for you alone, not for the lender or the borrower.',
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />

      <ServiceCallout
        eyebrow="If you are here because…"
        heading={<>Three conversations that bring families in.</>}
        items={callouts}
      />

      <ServiceFAQ
        eyebrow="Common questions"
        heading={<>What lenders and borrowers ask us first.</>}
        items={faq}
      />

      <RelatedServices
        eyebrow="Adjacent help"
        heading={<>Often part of the same conversation.</>}
        items={related}
      />

      <RelatedGuides slugs={['binding-financial-agreements-australia', 'updating-or-revoking-a-will-australia']} />

      <Booking />
    </>
  )
}
