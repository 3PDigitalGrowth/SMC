import Link from 'next/link'
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
  path: '/gawler-industrial-relations-lawyer',
  title: 'Industrial relations lawyer for employers, Gawler.',
  description:
    'Industrial relations advice for employers across the Gawler region. Employment contracts, terminations, restructures, awards, and unfair dismissal claims at the Fair Work Commission.',
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
    title: 'You are an employee, not the employer.',
    body: "A dismissal, a redundancy that does not feel right, an investigation, or pay that has not arrived. We act for employees too, and our employment law page for employees sets out how we help and what the time limits are.",
  },
  {
    title: 'A claim has already been filed.',
    body: 'Whether you are responding to an unfair dismissal application or pursuing one, the deadlines are short. Ring us today. Both sides have 21 days from the dismissal to lodge.',
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
    a: 'Yes, for both applicants and respondents. We handle conciliations, hearings, and any appeals.',
  },
]

const related = [
  {
    title: 'Employment law for employees',
    body: 'Dismissed, made redundant, investigated or underpaid. Advice from the employee side.',
    href: '/gawler-employment-lawyer',
  },
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
]

export default function IndustrialRelationsLawyerPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Business', href: '/business' }, { name: 'Industrial relations', href: '/gawler-industrial-relations-lawyer' }]} />
      <FAQSchema items={faq} />
      <PageHero
        eyebrow="Business · Industrial Relations"
        heading={<>Industrial relations lawyers in <em>Gawler</em>, for employers.</>}
        lede="We act for employers and for employees, so we know how each side actually plays a dispute. The advice you get as an employer is grounded in how the matter will really unfold, not the textbook version."
        image={IMAGES.industrialRelationsHero}
      />
      <ServiceBody
        eyebrow="What we handle"
        heading={<>Industrial relations work for employers.</>}
        paragraphs={[
          "Steven M Clark Lawyers advise employers and employees on industrial relations and employment matters. The laws involved include the Fair Work Act 2009 (Cth), which covers most South Australian workplaces, the Fair Work Act 1994 (SA) for employers in the state system, the Work Health and Safety Act 2012 (SA), and privacy law.",
          "For employers, we draft employment agreements, enforce them where necessary, and advise on restructuring the company correctly. We routinely represent employers at the Fair Work Commission and in any related legal proceedings.",
          <>
            If you are an employee, our{' '}
            <Link href="/gawler-employment-lawyer">employment lawyers for employees</Link> page covers dismissal, redundancy, workplace investigations and underpayment, and the 21-day time limit that applies to most dismissal claims.
          </>,
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
