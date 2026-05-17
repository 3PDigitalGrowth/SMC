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
  path: '/gawler-personal-injury-lawyers',
  title: 'Personal injury lawyer, Gawler. Workplace, public, road.',
  description:
    'Personal injury and compensation claims in the Gawler region. Motor vehicle, workplace, public liability, medical negligence, and TPD claims.',
  image: IMAGES.personalInjuryHero.src,
})

const subServices = [
  'Motor vehicle accident compensation',
  'Workplace injury claims',
  'Medical and professional negligence',
  "Public and occupiers' liability",
  'Product liability',
  "Victims' compensation",
  'Total and Permanent Disablement (TPD) claims',
  'Superannuation lump-sum claims',
  'Home visits for clients with mobility issues',
]

const callouts = [
  {
    title: 'You have been injured and someone else is responsible.',
    body: 'Personal injury law has strict time limits — and they start running from the date of the injury, not the date you decide to act. Ring us as soon as you can. A first consultation costs you nothing.',
  },
  {
    title: 'You have been hurt at work.',
    body: 'Workplace injuries can involve a ReturnToWork SA claim, a common-law claim, or both. We assess which paths are open and pursue the ones that produce the best outcome for you.',
  },
  {
    title: 'You have a TPD insurance claim.',
    body: 'Most superannuation funds include Total and Permanent Disablement cover, and many people do not realise they are entitled to claim. We assess the policy, prepare the medical and vocational evidence, and lodge the claim properly.',
  },
]

const faq = [
  {
    q: 'How long do I have to make a claim?',
    a: "The limitation period varies by claim type — motor vehicle three years, workplace generally six months for notification and three years for civil action, public liability three years. Some claims are shorter. The safest answer is: ring us as soon as the injury occurs.",
  },
  {
    q: 'How much will it cost me to bring a claim?',
    a: 'We will tell you in the first call. Many personal injury matters can be run on a deferred or no-win-no-fee basis depending on the type of claim. We do not run matters that are not viable, and we tell you straight when that is the case.',
  },
  {
    q: 'What can I claim for?',
    a: 'Depending on the matter: pain and suffering, past and future loss of earnings, past and future medical expenses, care costs, modifications to your home or vehicle, and for serious injuries, a future loss component. We work with medical and occupational specialists to put the right number on each head of damages.',
  },
  {
    q: 'What if my injury was partly my fault?',
    a: "Contributory negligence does not bar a claim — it reduces it. Even where you bear some responsibility, you can usually still recover compensation. We assess the contributory percentage realistically and factor it into the claim.",
  },
  {
    q: 'I cannot easily get to your office. Can you come to me?',
    a: 'Yes. We routinely visit clients with mobility issues in the comfort of their own home. Ring us to arrange a home visit.',
  },
]

const related = [
  {
    title: 'Motor vehicle accidents',
    body: 'The largest category of personal injury claim — separate, specific advice.',
    href: '/gawler-compensation-lawyers',
  },
  {
    title: 'Dispute resolution',
    body: "Most personal injury matters settle. Where they do not, the case goes to court.",
    href: '/gawler-dispute-resolution-lawyers',
  },
  {
    title: 'Wills and estates',
    body: 'A serious injury is a moment most people update their estate plan.',
    href: '/gawler-estate-lawyer',
  },
]

export default function PersonalInjuryLawyersPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Personal injury', href: '/gawler-personal-injury-lawyers' }]} />
      <PageHero
        eyebrow="Personal Injury"
        heading={<>If you have been injured, the legal part should be the <em>easy part</em>.</>}
        lede="Personal injury is rarely just the legal claim. It is the medical care, the income, the family. We coordinate the legal side so you can focus on the rest. We also visit you at home if you cannot easily get to us."
        image={IMAGES.personalInjuryHero}
      />
      <ServiceBody
        eyebrow="What we handle"
        heading={<>Compensation claims for all major categories of personal injury.</>}
        paragraphs={[
          'Steven M Clark Lawyers can assist you with legal advice and representation through all stages of your personal injury claim. We act for people injured in motor vehicle accidents, at work, by medical negligence, on public or private property, and for grieving family members making victims-of-crime claims.',
          'We assist with assessing the amount of personal injury compensation you are entitled to, the lodgement of the claim, and the careful, compassionate work of guiding you through the process to a fair settlement on the best possible terms. We make a particular point of pursuing lump-sum TPD entitlements from superannuation funds — many of our clients do not realise they are covered.',
          'To make things a little easier where it matters most, we will visit those with mobility issues in the comfort of their own home. Due to the complicated laws and strict time limits on lodging personal injury claims, contact us right away to organise a consultation.',
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />
      <ServiceCallout eyebrow="If you are here because…" heading={<>Three places personal injury files most often start.</>} items={callouts} />
      <ServiceFAQ eyebrow="Common questions" heading={<>What people most often ask on the first call.</>} items={faq} />
      <RelatedServices eyebrow="Adjacent help" heading={<>Often connected to:</>} items={related} />
      <Booking />
    </>
  )
}
