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
  path: '/gawler-traffic-lawyer',
  title: 'Traffic lawyer in Gawler. Licence loss, drink driving, speeding.',
  description:
    'Traffic lawyers in Gawler for expiation notices, licence disqualification, drink and drug driving, careless driving and driving disqualified. Talk to us before you pay or plead.',
  image: IMAGES.trafficHero.src,
})

const subServices = [
  'Expiation notices and electing to go to court',
  'Camera offences and nominating the driver',
  'Demerit points and disqualification',
  'Immediate loss of licence notices',
  'Drink driving',
  'Drug driving',
  'Speeding and excessive speed',
  'Careless driving',
  'Dangerous driving',
  'Driving unlicensed or disqualified',
  'Failing to stop or report a crash',
  'Provisional and learner licence matters',
]

const callouts = [
  {
    title: 'An expiation notice has arrived.',
    body: 'Do not pay it straight away if the demerit points could cost you your licence, or if you were not the driver. The notice gives you a set time to pay, nominate the driver or elect to go to court. We help you choose before the date passes.',
  },
  {
    title: 'Police took your licence at the roadside.',
    body: 'Some offences, including higher-range drink driving and very high speeds, bring an immediate loss of licence. That is separate from what the court does later, and the plea and submissions still matter. Call us before the first court date.',
  },
  {
    title: 'You have a court date for a driving charge.',
    body: 'Bring the summons or charge sheet to the first call. At the first appearance, usually a mention, you are not expected to plead, and we can often appear for you. We get the evidence first, then tell you where you stand.',
  },
]

const faq = [
  {
    q: 'Should I just pay the expiation notice?',
    a: 'If paying costs you nothing more than the fine, often yes. If the demerit points would take you to the limit for your licence, or you dispute what happened, talk to us first. Once it is paid, the offence and the points stand.',
  },
  {
    q: 'A camera caught my car, but I was not driving. What now?',
    a: 'As the registered owner you are responsible unless you nominate the driver within the time on the notice, usually by statutory declaration. If you cannot or will not name the driver, talk to us before the deadline.',
  },
  {
    q: 'I was only just over the limit. Will I lose my licence?',
    a: 'It depends on the reading, whether it is a first offence and your driving history. In some lower-range cases there is room for submissions that affect the outcome. At higher ranges disqualification is mandatory, and the work is about its length and the evidence. Ring us before you pay or plead.',
  },
  {
    q: 'What if I keep driving while disqualified?',
    a: 'Driving while disqualified is a serious offence, with heavier penalties than most of the matters that lead to a disqualification, including further disqualification and, in some cases, prison. If you need to get to work, talk to us about your options rather than taking the risk.',
  },
  {
    q: 'Do you handle P-plate and learner matters?',
    a: 'Yes. Provisional and learner drivers have a much lower demerit point limit and stricter conditions, so even a minor offence can mean disqualification. The earlier we see it, the more options there are.',
  },
  {
    q: 'Do I need a lawyer for a careless driving charge?',
    a: 'Not always, but it is worth a conversation. Careless driving charges often follow a crash, and the outcome can affect an insurance or injury claim as well as your licence. We tell you on the first call whether it is worth contesting.',
  },
]

const related = [
  {
    title: 'Criminal defence',
    body: 'For charges beyond the road: assault, theft, drugs, bail and the rest of the criminal list.',
    href: '/criminal-defence-lawyer',
  },
  {
    title: 'Motor vehicle accidents',
    body: 'If a crash has led to both a charge and an injury claim, the two need to be handled together.',
    href: '/gawler-compensation-lawyers',
  },
  {
    title: 'Intervention orders',
    body: 'When a driving matter sits alongside an intervention order or a breach allegation.',
    href: '/intervention-domestic-violence-lawyer',
  },
]

export default function TrafficLawyerPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Criminal defence', href: '/criminal-defence-lawyer' }, { name: 'Traffic', href: '/gawler-traffic-lawyer' }]} />
      <FAQSchema items={faq} />
      <PageHero
        eyebrow="Traffic · Licence"
        heading={<>Traffic lawyers in <em>Gawler</em>.</>}
        lede="For most people around Gawler, losing a licence means losing the way to work. Before you pay an expiation notice, plead guilty or let a deadline pass, find out what it will do to your licence."
        image={IMAGES.trafficHero}
        imageCaption="A licence and a letter on the passenger seat."
      />

      <ServiceBody
        eyebrow="What we handle"
        heading={<>Your licence is usually what is really at stake.</>}
        paragraphs={[
          'Most traffic matters start with a piece of paper: an expiation notice in the mail, a notice from police at the roadside, or a summons to the Magistrates Court. Each one has a deadline, and what you do before it passes often decides the outcome.',
          'An expiation notice gives you a choice. You can pay it, which ends the matter but brings the demerit points and any disqualification that goes with it, or you can elect to be prosecuted and have a court decide. If a camera caught the vehicle, the registered owner is responsible unless they nominate the driver. We tell you which choice makes sense before the due date.',
          'In court we act on drink and drug driving, careless and dangerous driving, speeding, driving unlicensed or disqualified, and failing to stop. Where a disqualification is mandatory, the work is about its length and the evidence. Where the court has a discretion, the submissions and references we put forward can be the difference between keeping a licence and losing it.',
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />

      <ServiceCallout
        eyebrow="If you are here because…"
        heading={<>Three pieces of paper that bring people to us.</>}
        items={callouts}
      />

      <ServiceFAQ
        eyebrow="Common questions"
        heading={<>What drivers ask on the first call.</>}
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
