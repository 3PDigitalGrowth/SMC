import PageHero from '@/components/page/PageHero'
import HubServices from '@/components/page/HubServices'
import HubProof from '@/components/page/HubProof'
import Booking from '@/components/home/Booking'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { pageMetadata } from '@/lib/seo'
import { IMAGES } from '@/lib/images'

export const metadata = pageMetadata({
  path: '/family',
  title: 'Family law, Gawler. Separation, children, settlement.',
  description:
    "Family law for South Australian families. Separation, parenting, property settlement, intervention orders. A confidential first call costs nothing.",
  image: IMAGES.familyHero.src,
})

const services = [
  {
    title: 'Separation and divorce',
    body: 'The legal end of a marriage or de facto relationship. We explain what you are entitled to, what the timeline looks like, and what each step actually costs.',
    href: '/gawler-family-lawyers',
  },
  {
    title: 'Parenting and children',
    body: 'Parenting plans, custody, visitation, child support. Where possible, settled without going to court. Where necessary, we represent you firmly.',
    href: '/gawler-family-lawyers',
  },
  {
    title: 'Property settlement',
    body: 'Dividing assets after separation. We protect your interests, including any superannuation, family business stake, and the family home.',
    href: '/gawler-family-lawyers',
  },
  {
    title: 'Binding financial agreements',
    body: 'Often called prenuptials. A clear agreement, drafted properly, that holds up if things change later. Done quietly and respectfully.',
    href: '/gawler-family-lawyers',
  },
  {
    title: 'Intervention orders',
    body: 'If you or your children are not safe, we act quickly. We also defend you if an order has been wrongly taken out in your name.',
    href: '/intervention-domestic-violence-lawyer',
  },
  {
    title: 'Family mediation',
    body: 'Where both sides are willing, mediation is faster, cheaper and easier on the children than court. We will tell you honestly if it is the right call.',
    href: '/gawler-family-lawyers',
  },
]

export default function FamilyPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Family', href: '/family' }]} />
      <PageHero
        eyebrow="Family Law"
        heading={
          <>
            When a marriage ends, the law should make it <em>simpler</em>, not harder.
          </>
        }
        lede="Most families that walk through our door are not after a fight. They want a fair, quick, dignified resolution so their children can get on with their lives. That is what we are good at."
        image={IMAGES.familyHero}
        imageCaption="A conversation that has been needed for a long time."
      />

      <HubServices
        eyebrow="How we help"
        heading={<>Six of the most common reasons families call us.</>}
        intro="If your situation is not on this list, ring us anyway. We are a general practice and we will tell you honestly if we are the right firm or if someone else is."
        items={services}
      />

      <HubProof
        eyebrow="In practice"
        quote="The kids could keep their school, their friends, their week. That was the point. The legal part stopped being the loud thing in the house."
        attribution="Family client, Gawler · Settled out of court"
        body={[
          'A Gawler couple separating after twelve years came in expecting a long, ugly process. Both wanted the same thing — for their two children to keep their school and their routines.',
          'We agreed early on a parenting plan, sorted property settlement in three meetings rather than three months, and stayed out of the Family Court entirely. The legal work finished. The family moved on. That is a good outcome.',
        ]}
        image={IMAGES.pathwaySeparation}
      />

      <Booking />
    </>
  )
}
