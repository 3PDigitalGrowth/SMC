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
  path: '/criminal-defence-lawyer',
  title: 'Criminal lawyer in Gawler. Criminal and traffic defence.',
  description:
    'Criminal lawyers in Gawler for assault, theft, drug, bail and intervention order matters, and traffic charges. Magistrates and District Courts. Talk to us before you plead or give a statement.',
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
    title: 'Police want to talk to you.',
    body: 'Beyond giving your personal details, you generally have the right to stay silent, and anything you say can be used later. If police ask for an interview or a DNA sample, ask whether it is voluntary or required, then call us before you go any further.',
  },
]

const faq = [
  {
    q: 'I have been charged. Should I plead guilty straight away?',
    a: 'Not yet. The plea has lasting consequences and should never be entered without legal advice, even where the charge seems obvious. We assess the evidence, work out what the prosecution actually has, and tell you whether a defence is realistic. If it is not, we focus on minimising the penalty.',
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
    a: 'Drug driving is a strict-liability offence: presence is enough; impairment is not required. That said, the test results themselves can sometimes be challenged, and the penalties depend heavily on prior history. Ring us before pleading.',
  },
  {
    q: 'Do you appear in the District Court?',
    a: 'Yes, for more serious indictable matters. We also handle committals from the Magistrates Court for matters that progress to the District or Supreme Court.',
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
    title: 'Traffic and licence',
    body: 'Expiation notices, licence disqualification, drink and drug driving, and driving charges.',
    href: '/gawler-traffic-lawyer',
  },
]

export default function CriminalDefencePage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Criminal defence', href: '/criminal-defence-lawyer' }]} />
      <FAQSchema items={faq} />
      <PageHero
        eyebrow="Criminal · Traffic"
        heading={<>Criminal lawyers in <em>Gawler</em>.</>}
        lede="The outcome of a criminal or traffic charge can be life-changing. The earlier you have proper advice, the more you can do about it. Confidential and same-day."
        image={IMAGES.criminalDefenceHero}
      />
      <ServiceBody
        eyebrow="What we handle"
        heading={<>Criminal and traffic defence across the South Australian courts.</>}
        paragraphs={[
          'If you have been charged with a criminal or traffic offence you do not have to face it alone. The outcome of your court case might be life-changing, so give yourself the best possible chance with experienced criminal and traffic defence lawyers.',
          'We advise you on your rights, prepare you for court, explain the procedure, and defend you in the courtroom. We appear in the Magistrates and District Courts of South Australia, and on related disciplinary matters.',
          <>
            On the criminal side, we cover the full range: assault, theft, drug offences, public order, fraud, property damage, prohibited weapons, threatening behaviour, sexual offences, robbery and extortion, homicide, and justice procedure offences such as breach of bail. On the traffic side, we handle drink and drug driving, driving disqualified or unlicensed, speeding and dangerous driving, and our{' '}
            <Link href="/gawler-traffic-lawyer">traffic lawyers page</Link> covers expiation notices and licence loss in more detail.
          </>,
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
