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
  path: '/gawler-compensation-lawyers',
  title: 'Motor vehicle accident lawyer, Gawler. Car, bike, heavy.',
  description:
    'Motor vehicle accident compensation in the Gawler region. Cars, motorbikes, bicycles, heavy vehicles and pedestrian accidents. CTP claims and settlements.',
  image: IMAGES.gawlerStreet.src,
})

const subServices = [
  'Motor vehicle accident collision claims',
  'Motorcycle and bicycle accident claims',
  'Pedestrian accident claims',
  'Heavy vehicle accident claims',
  'CTP (Compulsory Third Party) lodgement',
  'Liability investigation',
  'Medical and police report collection',
  'Insurer negotiation',
  'Settlement and lump-sum advice',
  'Court representation if negotiation fails',
]

const callouts = [
  {
    title: 'You have been hurt in a crash.',
    body: 'Get medical treatment first. Then ring us. CTP claims in South Australia have specific deadlines and procedures, and the right early steps protect your position. We will explain the process on the first call and there is no obligation to proceed.',
  },
  {
    title: 'The insurer has offered a settlement.',
    body: "Insurers offer to settle early because it is cheaper for them. Before you sign, let us look at the offer. The right number depends on the future medical, the future earning loss, and the pain and suffering — not just the bills already on the table.",
  },
  {
    title: 'You are a cyclist or pedestrian.',
    body: 'Cyclists and pedestrians injured by motor vehicles are covered by the CTP scheme. Many do not realise this and never claim. If you have been hit, you almost certainly have a claim.',
  },
]

const faq = [
  {
    q: 'I was injured in a car accident. What do I do first?',
    a: 'Get medical treatment, report the accident to police (which you must do within 24 hours for any injury), exchange details, and then ring us. We will explain how CTP works in South Australia and what your next steps are.',
  },
  {
    q: 'Does it matter who was at fault?',
    a: 'Yes, but only partially. The CTP scheme in South Australia is fault-based, meaning the injured non-at-fault party can recover damages. If you were partly at fault, your recovery is reduced (contributory negligence) but not eliminated.',
  },
  {
    q: 'What can I claim for?',
    a: 'Past and future loss of income, past and future medical and rehabilitation costs, care and assistance, and for serious injuries, pain and suffering. We work with medical, vocational and economic experts to quantify each head properly.',
  },
  {
    q: 'How long do I have to lodge a claim?',
    a: 'Generally three years from the date of the accident in South Australia, but the practical preparation steps need to start much sooner. The sooner you ring us, the better the position we can put together.',
  },
  {
    q: 'I am a cyclist injured by a car. Can I claim?',
    a: 'Yes. CTP in South Australia covers cyclists, pedestrians and motorbike riders injured by a motor vehicle. Many cyclists never lodge a claim because they do not realise they can. If a vehicle was involved, you have a claim.',
  },
]

const related = [
  {
    title: 'Personal injury',
    body: 'The broader category — workplace, public liability, medical negligence and TPD.',
    href: '/gawler-personal-injury-lawyers',
  },
  {
    title: 'Criminal defence',
    body: 'If the accident also involves criminal driving charges.',
    href: '/criminal-defence-lawyer',
  },
  {
    title: 'Dispute resolution',
    body: 'Where insurer negotiations fail and the matter must go to court.',
    href: '/gawler-dispute-resolution-lawyers',
  },
]

export default function CompensationLawyersPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Motor vehicle accidents', href: '/gawler-compensation-lawyers' }]} />
      <PageHero
        eyebrow="Personal Injury · Motor Vehicle"
        heading={<>Car-accident injuries can be very <em>serious</em>. The claim does not have to be.</>}
        lede="Our compensation lawyers handle motor vehicle, motorcycle, bicycle and pedestrian accident claims for clients across the Gawler region. We collect the evidence, work the insurer, and negotiate or litigate the right outcome."
        image={IMAGES.gawlerStreet}
      />
      <ServiceBody
        eyebrow="What we handle"
        heading={<>The full motor vehicle accident process, from medical to settlement.</>}
        paragraphs={[
          'Car accident injuries can be very serious and our experienced compensation lawyers can assist you with your claims and collecting information. We act for drivers, passengers, motorcyclists, cyclists, pedestrians and others injured in vehicle accidents on South Australian roads.',
          'On the practical side, we evaluate the claim, collect the important information (details of other vehicles, insurance details, hospital and medication records), explain the factual content of police reports, contact the insurer involved in your claim on your behalf, gather evidence in a timely manner, and negotiate the settlement of the claim.',
          'Most matters resolve through negotiation. Where the matter cannot be resolved through negotiation or mediation, we prepare your claim for court and represent you in the District or Supreme Courts of South Australia.',
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />
      <ServiceCallout eyebrow="If you are here because…" heading={<>Three places motor vehicle files most often start.</>} items={callouts} />
      <ServiceFAQ eyebrow="Common questions" heading={<>What people most often ask on the first call.</>} items={faq} />
      <RelatedServices eyebrow="Adjacent help" heading={<>Often connected to:</>} items={related} />
      <Booking />
    </>
  )
}
