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
  path: '/criminal-defence-lawyer',
  title: 'Criminal defence and traffic lawyer, Gawler.',
  description:
    'Criminal and traffic defence across South Australia. Drink driving, driving suspended, theft, assault, drug offences. Magistrates and District Court.',
  image: IMAGES.criminalDefenceHero.src,
})

const subServices = [
  'Drink driving (exceeding prescribed concentration of alcohol)',
  'Driving whilst disqualified or suspended',
  'Driving without a licence',
  'Speeding and other driving offences',
  'Driving in a manner dangerous',
  'Theft and dishonesty offences',
  'Assault and acts intended to cause injury',
  'Drug offences',
  'Public order offences',
  'Property damage',
  'Fraud',
  'Prohibited weapons',
  'Threatening behaviour',
  'Sexual offences',
  'Robbery, blackmail and extortion',
  'Homicide',
  'Justice procedure offences',
  'Disciplinary matters',
]

const callouts = [
  {
    title: 'You have been charged.',
    body: 'Whether the charge is traffic or criminal, the outcome can be life changing. The earlier we are involved, the more we can shape the case. Do not give a statement before talking to us.',
  },
  {
    title: 'A first court date is approaching.',
    body: "First mention dates are not just procedural. The plea and the early submissions can determine the whole course of the matter. Bring the summons or charge sheet in and we will go through it on the first call.",
  },
  {
    title: 'You are facing licence loss.',
    body: 'Drink-driving, drug-driving, demerit-point and dangerous-driving cases all carry licence consequences. Some have available defences. Most have at least some submissions that can be made. Talk to us before you plead.',
  },
]

const faq = [
  {
    q: 'I have been charged. Should I plead guilty straight away?',
    a: 'Not yet. The plea has lasting consequences and should never be entered without legal advice — even where the charge seems obvious. We assess the evidence, work out what the prosecution actually has, and tell you whether a defence is realistic. If it is not, we focus on minimising the penalty.',
  },
  {
    q: 'What happens at the first court date?',
    a: 'In the Magistrates Court, the first appearance is usually a mention. You are not expected to plead at mention. We typically appear for you, request the brief of evidence, and adjourn the matter for either further mention, contest mention, or trial.',
  },
  {
    q: "I am over the limit but only just. Do I have any options?",
    a: 'In some Category 1 PCA cases, the Court has discretion not to disqualify the licence. The submissions and supporting evidence we put forward at sentencing can be the difference between losing your licence and keeping it. We have run many of these matters successfully.',
  },
  {
    q: 'What if I have been charged with drug driving?',
    a: 'Drug driving is a strict-liability offence — presence is enough; impairment is not required. That said, the test results themselves can sometimes be challenged, and the penalties depend heavily on prior history. Ring us before pleading.',
  },
  {
    q: 'Do you appear in the District Court?',
    a: 'Yes — for more serious indictable matters. We also handle committals from the Magistrates Court for matters that progress to the District or Supreme Court.',
  },
]

const related = [
  {
    title: 'Intervention orders',
    body: 'If your charge relates to an intervention order breach.',
    href: '/intervention-domestic-violence-lawyer',
  },
  {
    title: 'Personal injury',
    body: 'If a car accident has resulted in both charges and an injury claim.',
    href: '/gawler-personal-injury-lawyers',
  },
  {
    title: 'Dispute resolution',
    body: 'For related civil matters arising from the same events.',
    href: '/gawler-dispute-resolution-lawyers',
  },
]

export default function CriminalDefencePage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Criminal defence', href: '/criminal-defence-lawyer' }]} />
      <PageHero
        eyebrow="Criminal · Traffic"
        heading={<>If you have been charged, give yourself the <em>best chance</em>.</>}
        lede="The outcome of a criminal or traffic charge can be life-changing. The earlier you have proper advice, the more you can do about it. Confidential and same-day."
        image={IMAGES.criminalDefenceHero}
      />
      <ServiceBody
        eyebrow="What we handle"
        heading={<>Criminal and traffic defence across the South Australian courts.</>}
        paragraphs={[
          'If you have been charged with a criminal or traffic offence you do not have to face it alone. The outcome of your court case might be life-changing, so give yourself the best possible chance with experienced criminal and traffic defence lawyers.',
          'We advise you on your rights, prepare you for court, explain the procedure, and defend you in the courtroom. We appear in the Magistrates and District Courts of South Australia, and on related disciplinary matters.',
          'On the traffic side, we handle drink driving (exceeding the prescribed concentration of alcohol in blood), driving whilst disqualified or suspended, driving without a licence, speeding, and dangerous driving. On the criminal side, we cover the full range — assault, theft, drug offences, public order, fraud, property damage, prohibited weapons, threatening behaviour, sexual offences, robbery and extortion, homicide, and justice procedure offences.',
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />
      <ServiceCallout eyebrow="If you are here because…" heading={<>Three places criminal files most often start.</>} items={callouts} />
      <ServiceFAQ eyebrow="Common questions" heading={<>What people most often ask on the first call.</>} items={faq} />
      <RelatedServices eyebrow="Adjacent help" heading={<>Often connected to:</>} items={related} />
      <Booking />
    </>
  )
}
