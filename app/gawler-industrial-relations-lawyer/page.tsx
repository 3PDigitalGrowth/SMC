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
  path: '/gawler-industrial-relations-lawyer',
  title: 'Industrial relations and employment lawyer, Gawler.',
  description:
    'Employment law for employers and employees across the Gawler region. Contracts, unfair dismissal, awards, redundancy, Fair Work representation.',
  image: IMAGES.industrialRelationsHero.src,
})

const subServices = [
  'Drafting employment agreements',
  'Enforcement of employment agreements',
  'Business restructuring advice',
  'Reviewing employment agreements (employee side)',
  'Challenging unfair contracts',
  'Working conditions reviews',
  'Unfair dismissal claims',
  'Redundancy and entitlements review',
  'Award advice (State and Federal)',
  'Fair Work Commission representation',
  'Confidentiality and restraint clauses',
]

const callouts = [
  {
    title: 'You are an employer with a problem.',
    body: 'Performance issues, suspected misconduct, a difficult termination, an unfair dismissal claim, or a restructure. We help you do it right the first time so it does not end up in the Commission.',
  },
  {
    title: 'You are an employee being squeezed.',
    body: "An unfair contract, a redundancy that does not feel right, working conditions that have shifted under you, or a termination you believe is unfair. We will tell you straight what your position is and what is realistically recoverable.",
  },
  {
    title: 'A claim has already been filed.',
    body: 'Whether you are responding to an unfair dismissal application or pursuing one, the deadlines are short. Ring us today — both sides have 21 days from the dismissal to lodge.',
  },
]

const faq = [
  {
    q: 'How long do I have to lodge an unfair dismissal claim?',
    a: "21 days from the date of dismissal. The Fair Work Commission does have a power to extend in exceptional circumstances, but extensions are not the norm. Ring us as soon as the dismissal happens.",
  },
  {
    q: "I am an employer. How do I let someone go safely?",
    a: 'Make sure the reason is a valid one (performance, misconduct, redundancy), follow a fair process (clear warnings, a chance to respond, support if appropriate), document everything, and check whether the employee is covered by an award or enterprise agreement. We can prepare you in a single call.',
  },
  {
    q: 'What is a fair redundancy?',
    a: 'A redundancy is fair where the role itself is genuinely no longer needed, the employer has considered redeployment, has consulted in accordance with any applicable award or agreement, and pays the correct entitlements. If any of those steps is missing, the redundancy can be challenged.',
  },
  {
    q: 'Are restraint of trade clauses enforceable?',
    a: 'Sometimes. South Australian courts will enforce restraints that are reasonable in scope and duration to protect a legitimate business interest. Overreaching restraints are routinely cut down or struck out. We draft them to be enforceable and we challenge them when they are not.',
  },
  {
    q: 'Do you appear at the Fair Work Commission?',
    a: 'Yes — for both applicants and respondents. We handle conciliations, hearings, and any appeals.',
  },
]

const related = [
  {
    title: 'Commercial and corporate',
    body: 'Employment law sits inside wider commercial structuring.',
    href: '/gawler-commercial-lawyers',
  },
  {
    title: 'Business law',
    body: 'If you are running a business, employment is one of several connected files.',
    href: '/gawler-business-lawyers',
  },
  {
    title: 'Dispute resolution',
    body: "When formal proceedings need a mediated path.",
    href: '/gawler-dispute-resolution-lawyers',
  },
]

export default function IndustrialRelationsLawyerPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Business', href: '/business' }, { name: 'Industrial relations', href: '/gawler-industrial-relations-lawyer' }]} />
      <PageHero
        eyebrow="Business · Industrial Relations"
        heading={<>Employment law, from both sides of the <em>same desk</em>.</>}
        lede="We act for employers and for employees, and that means we know how each side actually plays the situation. The advice you get is grounded in how the matter will really unfold, not the textbook version."
        image={IMAGES.industrialRelationsHero}
      />
      <ServiceBody
        eyebrow="What we handle"
        heading={<>Industrial relations work for employers and employees.</>}
        paragraphs={[
          "When handling industrial relations and employment matters, Steven M Clark Lawyers have experience assisting both employers and employees. The acts and laws involved include the Fair Work Act, the Employment Protection Act, the Industrial Relations Act, the Occupational Health and Safety Act, the Workplace Relations Act and the Privacy Laws.",
          "For employers, we draft employment agreements, enforce them where necessary, and advise on restructuring the company correctly. We routinely represent employers at the Fair Work Commission and in any related legal proceedings.",
          'For employees, we review employment agreements to ensure they are fair and reasonable, challenge or set aside unfair contracts, review working conditions, advise on unfair dismissal and breaches of employment agreements, review redundancies for proper entitlements, and provide award advice (both State and Federal).',
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />
      <ServiceCallout eyebrow="If you are here because…" heading={<>Three places employment files most often start.</>} items={callouts} />
      <ServiceFAQ eyebrow="Common questions" heading={<>What people most often ask on the first call.</>} items={faq} />
      <RelatedServices eyebrow="Adjacent help" heading={<>Often connected to:</>} items={related} />
      <Booking />
    </>
  )
}
