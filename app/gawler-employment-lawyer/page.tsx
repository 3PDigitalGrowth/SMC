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
  path: '/gawler-employment-lawyer',
  title: 'Employment lawyer in Gawler. Unfair dismissal and workplace problems.',
  description:
    'Dismissed, made redundant, under investigation or underpaid? Employment lawyers in Gawler for employees. Most dismissal claims must be lodged within 21 days, so call early.',
  image: IMAGES.employmentHero.src,
})

const subServices = [
  'Unfair dismissal',
  'General protections claims',
  'Redundancy and redundancy pay',
  'Workplace investigations and show-cause letters',
  'Responding to allegations',
  'Bullying and harassment',
  'Underpayment and unpaid entitlements',
  'Employment contracts and restraints',
  'Negotiated exits and settlement deeds',
  'Workers compensation disputes',
  'Fair Work Commission conciliations',
]

const callouts = [
  {
    title: 'You have just been dismissed.',
    body: 'Write down what was said and when, keep every letter and message, and do not sign anything offered on the day. Then call us. Most dismissal claims must be lodged within 21 days, and a late application is accepted only in exceptional circumstances.',
  },
  {
    title: 'You are under investigation at work.',
    body: 'A fair process means knowing the allegations and having a proper chance to respond, and the Fair Work Commission looks at whether you had one. Talk to us before the interview or before you send a written response. What you say first is hard to take back.',
  },
  {
    title: 'You were hurt at work and the claim has stalled.',
    body: 'Workers compensation in South Australia runs through ReturnToWorkSA. If your claim has been rejected or your payments have stopped, there are review steps, and they have time limits. We explain them and act for you in the dispute.',
  },
]

const faq = [
  {
    q: 'How long do I have to make an unfair dismissal claim?',
    a: '21 days from the day the dismissal takes effect, for employees in the national Fair Work system, which covers most people working in South Australia. A general protections claim about a dismissal has the same 21 days. The Commission accepts a late application only in exceptional circumstances, so do not wait to see how things settle.',
  },
  {
    q: 'Am I covered by unfair dismissal laws?',
    a: 'Most employees are, once they have worked for the employer for at least six months, or 12 months if the business has fewer than 15 employees. There are exceptions, including some higher-income earners and casual staff without regular, systematic work. Some state and local government employees sit in the South Australian system instead. We check which applies on the first call.',
  },
  {
    q: 'I was made redundant. Can I challenge it?',
    a: 'A genuine redundancy is not an unfair dismissal. But the role has to be truly no longer needed, the employer has to consult as any award or agreement requires, and redeployment has to be considered. If those steps were skipped, you may have a claim, and you may also be owed redundancy pay.',
  },
  {
    q: 'Is it worth fighting?',
    a: 'Sometimes not, and we will tell you so. Often the better result is a negotiated exit with a payment and an agreed reference, or a letter that gets unpaid wages paid. We weigh the cost and stress of a claim against what is realistically recoverable before you commit to anything.',
  },
  {
    q: 'I was injured at work. Is that a separate claim?',
    a: 'Your workers compensation claim goes through ReturnToWorkSA, and disputes about it are heard in the South Australian Employment Tribunal. If you were also dismissed, there may be a separate claim about that. We look at both together.',
  },
  {
    q: 'Do you act for employers as well?',
    a: 'Yes, on our industrial relations page. We never act for both sides of the same dispute, and we check for a conflict before you tell us the details.',
  },
]

const related = [
  {
    title: 'Industrial relations for employers',
    body: 'Contracts, restructures, terminations and Fair Work claims, from the business side.',
    href: '/gawler-industrial-relations-lawyer',
  },
  {
    title: 'Personal injury',
    body: 'When a workplace injury becomes a claim of its own.',
    href: '/gawler-personal-injury-lawyers',
  },
  {
    title: 'Dispute resolution',
    body: 'Negotiation and mediation when a workplace dispute needs a way out short of a hearing.',
    href: '/gawler-dispute-resolution-lawyers',
  },
]

export default function EmploymentLawyerPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Employment lawyer', href: '/gawler-employment-lawyer' }]} />
      <FAQSchema items={faq} />
      <PageHero
        eyebrow="Employment · Dismissal"
        heading={<>Employment lawyers in <em>Gawler</em>, for employees.</>}
        lede="Losing a job, or being told you are under investigation, is a shock. Some of the most important deadlines start the day it happens. A short call tells you where you stand and what to do this week."
        image={IMAGES.employmentHero}
        imageCaption="A lanyard on the bench at the end of a hard day."
      />

      <ServiceBody
        eyebrow="What we handle"
        heading={<>Advice for the person on the other side of the desk.</>}
        paragraphs={[
          'We act for employees from Gawler and across northern Adelaide and the Barossa: people who have been dismissed, made redundant, investigated, underpaid or pushed out of a job, and people injured at work who are now in a dispute about it.',
          'If you have been dismissed, the clock starts straight away. Most employees in South Australia are in the national Fair Work system, where an unfair dismissal application, or a general protections claim about a dismissal, must be lodged with the Fair Work Commission within 21 days of the dismissal taking effect. Some employees, including many in state and local government, sit in the South Australian system instead, which has its own rules. We work out which applies on the first call.',
          'Not every problem needs a claim. Often the right step is a carefully written response to an allegation, a negotiated exit with a payment and a reference, or a letter that gets wages paid. We tell you which route is worth it, including when it is not worth fighting.',
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />

      <ServiceCallout
        eyebrow="If you are here because…"
        heading={<>Three places employment problems usually start.</>}
        items={callouts}
      />

      <ServiceFAQ
        eyebrow="Common questions"
        heading={<>What employees ask on the first call.</>}
        items={faq}
      />

      <RelatedServices
        eyebrow="Adjacent help"
        heading={<>Often connected to:</>}
        items={related}
      />

      <Booking />
    </>
  )
}
