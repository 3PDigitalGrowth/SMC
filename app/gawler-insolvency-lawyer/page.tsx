import PageHero from '@/components/page/PageHero'
import ServiceBody from '@/components/page/ServiceBody'
import ServiceCallout from '@/components/page/ServiceCallout'
import ServiceFAQ from '@/components/page/ServiceFAQ'
import RelatedServices from '@/components/page/RelatedServices'
import InlineCallback from '@/components/page/InlineCallback'
import Booking from '@/components/home/Booking'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import FAQSchema from '@/components/seo/FAQSchema'
import { pageMetadata } from '@/lib/seo'
import { IMAGES } from '@/lib/images'

export const metadata = pageMetadata({
  path: '/gawler-insolvency-lawyer',
  title: 'Bankruptcy and insolvency lawyer, Gawler. Steven M Clark.',
  description:
    'Facing bankruptcy or business insolvency? Steven M Clark Lawyers, Gawler since 1985. Free 15-minute call, same-day callback. Call (08) 8522 6025.',
  image: IMAGES.insolvencyHero.src,
})

const subServices = [
  'Voluntary administration appointment',
  'Deeds of Company Arrangement',
  'Personal bankruptcy advice',
  'Personal insolvency arrangements',
  'Negotiated debt reduction (credit card, bank, consumer)',
  'Credit reference file dispute',
  'Director duties and personal liability advice',
  'Liaison with appointed administrators and trustees',
  'Insolvent estate administration',
]

const callouts = [
  {
    title: 'Your business is in trouble.',
    body: 'The options narrow fast. The earlier we are involved, the more choices you have: voluntary administration, restructuring, a Deed of Company Arrangement, or an orderly wind-up. Ring us before the creditors do.',
  },
  {
    title: 'You personally cannot keep up.',
    body: 'Bankruptcy is one path, and not always the right one. A personal insolvency arrangement can sometimes deliver a better outcome. We assess your situation and tell you the genuine alternatives.',
  },
  {
    title: 'You want to negotiate down what you owe.',
    body: 'We have negotiated significant reductions on credit card debt, bank debt, consumer debt and similar. Creditors often accept a structured part-payment over a doomed full payment. We make that case for you.',
  },
]

const faq = [
  {
    q: 'Should I declare bankruptcy?',
    a: 'Rarely should you make that decision on your own. Bankruptcy has consequences for employment, travel and credit for years, and there are sometimes alternatives (a Personal Insolvency Agreement, a Debt Agreement, or negotiated reductions) that achieve a better outcome. Talk to us first.',
  },
  {
    q: 'What is voluntary administration?',
    a: 'A formal process where directors of a company in financial difficulty appoint an administrator to take control, assess the position, and propose either a Deed of Company Arrangement (continuing the business under restructure) or a liquidation. It is often the cleanest way to deal with corporate insolvency.',
  },
  {
    q: 'Am I personally liable for company debts?',
    a: "Generally no, because that is the point of a limited liability company, but there are exceptions, particularly for personal guarantees, unpaid superannuation and tax, and certain insolvent trading situations. We advise directors on the specific exposures they have, before things escalate.",
  },
  {
    q: 'Can you fix my credit file?',
    a: 'We have helped clients remove disputable entries from credit reference files. Where an entry is incorrect, out of statutory date, or made without the proper basis, it can be challenged. Where it is accurate, no firm can remove it.',
  },
  {
    q: 'What about ATO debts?',
    a: 'ATO debts can be negotiated in some circumstances: payment plans, remission of penalties, settlement of disputed assessments. We work with your accountant to structure the right proposal and put it formally.',
  },
]

const related = [
  {
    title: 'Debt recovery',
    body: 'If you are owed money by a party who may be insolvent.',
    href: '/gawler-debt-recovery',
  },
  {
    title: 'Commercial and corporate',
    body: 'Restructures, director duties, corporate governance.',
    href: '/gawler-commercial-lawyers',
  },
  {
    title: 'Business law',
    body: 'The wider commercial picture around a struggling business.',
    href: '/gawler-business-lawyers',
  },
]

export default function InsolvencyLawyerPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Business', href: '/business' }, { name: 'Insolvency', href: '/gawler-insolvency-lawyer' }]} />
      <FAQSchema items={faq} />
      <PageHero
        eyebrow="Bankruptcy · Insolvency"
        heading={<>Bankruptcy and insolvency. Ring early, keep your <em>options</em>.</>}
        lede="Insolvency is rarely a single decision. It is a sequence of decisions, and the order matters. Talk to us before the bank, the ATO or the creditor's solicitor forces the order for you."
        image={IMAGES.insolvencyHero}
      />
      <ServiceBody
        eyebrow="What we handle"
        heading={<>Personal and business insolvency, with a strong preference for early intervention.</>}
        paragraphs={[
          'Steven M Clark Lawyers is a Gawler law firm advising individuals and company directors on bankruptcy, personal insolvency agreements, voluntary administration and negotiated debt reduction. We have acted for clients in Gawler and the surrounding region since 1985, and your first 15-minute call is free and confidential.',
          'Steven M Clark Lawyers can provide advice for businesses facing insolvency, including the appointment of a voluntary administrator and Deeds of Arrangement. We also provide advice for personal insolvency including bankruptcy, personal insolvency arrangements, and the related taxation concerns.',
          'A key part of our work is asking how we might assist in discharging debt at a fraction of what is owed. We have successfully negotiated significant reductions on credit card debt, bank debt, consumer debt and similar. Creditors generally prefer a real, structured part-payment over a theoretical full payment that will never come.',
          "We have also assisted clients with the removal of disputable entries on credit reference report files. Where an entry is incorrect or out of date, it can be challenged. Where it is accurate, no firm can lawfully remove it, and we will tell you that on the first call rather than waste your money.",
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />
      <InlineCallback
        text="Worried about a bank, the ATO or a creditor? Call us, or ask for a callback from Steven the same business day."
        buttonLabel="Request a callback"
        location="insolvency_inline"
      />
      <ServiceCallout eyebrow="If you are here because…" heading={<>Three places insolvency files most often start.</>} items={callouts} />
      <ServiceBody
        eyebrow="Bankruptcy in Australia"
        heading={<>Personal bankruptcy and company insolvency are not the same thing.</>}
        paragraphs={[
          'In Australia, individuals can become bankrupt under the Bankruptcy Act 1966. Companies do not go bankrupt. They enter voluntary administration or liquidation instead.',
          'Personal bankruptcy generally lasts three years and one day. While it lasts it can limit overseas travel and some kinds of work, and it stays on your credit file for longer than the bankruptcy itself.',
          'If you are a director, a failing company can also create personal exposure through guarantees, unpaid super and tax, and insolvent trading. Before you decide anything, we explain the real alternatives, including a personal insolvency agreement, a debt agreement or a negotiated part-payment, and tell you which one fits your situation.',
        ]}
        asideTitle="Alternatives we look at first"
        asideItems={[
          'Personal insolvency agreement',
          'Debt agreement',
          'Negotiated part-payment with creditors',
          'ATO payment plan or penalty remission',
          'Voluntary administration for a company',
        ]}
      />
      <ServiceFAQ eyebrow="Common questions" heading={<>What people most often ask on the first call.</>} items={faq} />
      <RelatedServices eyebrow="Adjacent help" heading={<>Often connected to:</>} items={related} />
      <Booking />
    </>
  )
}
