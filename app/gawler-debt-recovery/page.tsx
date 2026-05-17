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
  path: '/gawler-debt-recovery',
  title: 'Debt recovery, Gawler. Demand letters, judgement, enforcement.',
  description:
    'Recover money you are owed without making enemies of customers worth keeping. Letters of demand, Statement of Claim, judgement, warrants and enforcement.',
  image: IMAGES.debtRecoveryHero.src,
})

const subServices = [
  'Letter of demand',
  'Statement of Claim',
  'Defence of debt-recovery claims (21-day rule)',
  'Default judgement',
  'Warrants of seizure and sale of goods',
  'Examination Summons',
  'Garnishee orders',
  'Bankruptcy and insolvency-based recovery',
  'Recovery of legal costs where applicable',
]

const callouts = [
  {
    title: 'A customer has stopped paying.',
    body: 'A letter of demand from a lawyer resolves the great majority of overdue debts without further steps. The letter alone is often enough — and it is fast, fixed-fee and stops you having to write awkward emails yourself.',
  },
  {
    title: 'The debtor is ignoring you.',
    body: "If a letter of demand does not produce payment, we issue a Statement of Claim. The debtor has 21 days to defend. If they do not, judgement is entered against them and enforcement steps become available.",
  },
  {
    title: 'You have a judgement but no money.',
    body: 'Judgement is not money in your account. Warrants of seizure, Examination Summons and garnishee orders are the steps that actually convert a judgement into cash. We run them.',
  },
]

const faq = [
  {
    q: 'How big does a debt need to be before it is worth recovering?',
    a: "There is no rule, but as a guide, debts under about $2,000 are usually only worth recovering through a letter of demand — the court costs and time can exceed the recovery. Above that, formal action becomes economic. We will tell you on the first call whether your debt is worth chasing.",
  },
  {
    q: 'How long does the process take?',
    a: 'A letter of demand can resolve a debt within days. Statement of Claim through to judgement typically takes one to three months if undefended. Enforcement on top of that takes another one to three months depending on the steps used.',
  },
  {
    q: 'Can I recover my legal costs?',
    a: 'In certain situations, yes — particularly where the matter goes to court and you obtain judgement. The Court can order the debtor to pay your costs in addition to the debt and interest. We tell you upfront what is realistically recoverable.',
  },
  {
    q: 'What is a garnishee order?',
    a: 'A court order requiring a third party (typically the debtor\'s employer or bank) to pay money owed to the debtor directly to you instead. It is one of the more effective enforcement steps where the debtor has wages or a positive bank balance.',
  },
  {
    q: 'The debtor says they cannot pay. What now?',
    a: "An Examination Summons forces the debtor to attend Court and disclose under oath what assets and income they have. From there, you have a clear basis for deciding whether to push further or to accept that the debt is uncollectable.",
  },
]

const related = [
  {
    title: 'Commercial and corporate',
    body: 'Most debt-recovery files are part of a wider commercial relationship.',
    href: '/gawler-commercial-lawyers',
  },
  {
    title: 'Insolvency',
    body: 'When the debtor is genuinely insolvent, formal insolvency may be the only practical path.',
    href: '/gawler-insolvency-lawyer',
  },
  {
    title: 'Dispute resolution',
    body: 'For larger or contested debts, mediation can save the cost of trial.',
    href: '/gawler-dispute-resolution-lawyers',
  },
]

export default function DebtRecoveryPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Business', href: '/business' }, { name: 'Debt recovery', href: '/gawler-debt-recovery' }]} />
      <PageHero
        eyebrow="Business · Debt Recovery"
        heading={<>A letter from a lawyer is often <em>all it takes</em>.</>}
        lede="A clear, properly written demand letter resolves the great majority of debts. When it does not, we have the full set of court tools to enforce — and we will tell you straight if a debt is not worth chasing."
        image={IMAGES.debtRecoveryHero}
      />
      <ServiceBody
        eyebrow="What we handle"
        heading={<>The full debt-recovery process, in clear, predictable steps.</>}
        paragraphs={[
          'If you are owed money that you would like to collect, you can take legal action to recover it. In certain situations, you can also recover your legal costs related to recovery proceedings. We work mainly on fixed fees so you know what each step costs before you commit.',
          "The standard sequence is: a letter of demand; if unpaid, a Statement of Claim used to demand payment formally; the debtor has 21 days to file a Defence; if no Defence is filed, we apply for default judgement; and from judgement, we move to enforcement.",
          'Enforcement steps include warrants for the seizure of goods to be sold to repay the debt, Examination Summons requiring the debtor to attend Court and explain how they propose to satisfy the judgement, garnishee orders directing a third party to pay money to you instead of the debtor, and where appropriate, bankruptcy or insolvency proceedings.',
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />
      <ServiceCallout eyebrow="If you are here because…" heading={<>Three places debt-recovery files usually start.</>} items={callouts} />
      <ServiceFAQ eyebrow="Common questions" heading={<>What people most often ask on the first call.</>} items={faq} />
      <RelatedServices eyebrow="Adjacent help" heading={<>Often connected to:</>} items={related} />
      <Booking />
    </>
  )
}
