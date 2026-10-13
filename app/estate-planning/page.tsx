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
  path: '/estate-planning',
  title: 'Estate planning lawyers in Gawler, since 1985.',
  description:
    'Estate planning lawyers in Gawler since 1985. Wills, Powers of Attorney, Advance Care Directives, trusts, and farm and business succession, usually in two visits.',
  image: IMAGES.estatePlanningHero.src,
})

const subServices = [
  'Assessment of assets',
  'Assessment of likely taxation consequences',
  'Advice on claims against the estate',
  'Asset protection structures',
  'Enduring Power of Attorney',
  'Advance Care Directive',
  'Substitute decision-maker appointments',
  'Business and farm succession planning',
  'Discretionary trust integration',
  'Superannuation and insurance review',
]

const callouts = [
  {
    title: 'You own a business or farm.',
    body: 'A Will is not enough on its own. A succession plan makes the transition easy for your family or your employees, and dramatically reduces the chance that the business or farm has to be sold up when you leave.',
  },
  {
    title: 'Your circumstances have changed.',
    body: 'Marriage, divorce, a new child, a sale, a major asset bought, a structure change. Each of these is a reason to re-evaluate. Estate planning is an active process, not a one-off event.',
  },
  {
    title: 'You want to reduce family conflict.',
    body: 'Most estate fights start over silence rather than money. A documented plan, made while you are well, removes most of the room for argument later.',
  },
]

const firstMeeting = [
  {
    title: 'First, a free 15-minute call.',
    body: 'Tell us what you own, who depends on you and what is worrying you. We will tell you whether you need a full estate plan or just a Will, and what it involves.',
  },
  {
    title: 'Then an hour with us.',
    body: 'We go through your assets, your family, any business or farm, and the structures you already have. Bring a list of your main assets and debts, and any existing Will, trust deed or company papers.',
  },
  {
    title: 'Then a follow-up signing.',
    body: 'We prepare the documents, explain each one, and you sign them on the second visit. We can hold the originals in our fireproof storage at no extra charge.',
  },
]

const faq = [
  {
    q: 'What is the difference between a Will and an estate plan?',
    a: 'A Will is one document, dealing with how your assets are distributed after you die. An estate plan is the whole picture: Will, Power of Attorney, Advance Care Directive, succession arrangements for your business, asset protection, tax planning, and the documents that work together to make a complete plan.',
  },
  {
    q: 'When should I update my estate plan?',
    a: 'After any major life event: marriage, separation, divorce, the birth of a child or grandchild, a substantial change in assets or debts, the purchase or sale of a business, a change in superannuation or insurance, or the establishment of a trust. As a baseline, every five years.',
  },
  {
    q: 'Do I really need a succession plan for my business or farm?',
    a: 'If you want your business or farm to continue rather than be sold up at the worst possible time, yes. A succession plan makes the transition orderly, tax-efficient, and predictable for the people who will run the business after you.',
  },
  {
    q: 'What is asset protection?',
    a: 'Structuring your affairs so that personal or business creditors cannot easily reach the assets you want to preserve for your family. It might involve a trust, a separate company, or a different ownership pattern. We tell you whether it is worth doing in your specific case.',
  },
  {
    q: 'Can I appoint someone to make medical decisions if I cannot?',
    a: 'Yes, through an Advance Care Directive. It records your healthcare and lifestyle preferences and names a substituted decision-maker. We prepare it alongside your Will and Power of Attorney.',
  },
  {
    q: 'What should I bring to the first meeting?',
    a: 'A list of your main assets and debts, the people you want to include, and any existing Will, trust deed or company papers. If you own a business or farm, bring whatever shows how it is held. If you are not sure, bring what you have and we will work out the rest together.',
  },
]

const related = [
  {
    title: 'Wills and probate',
    body: 'The core estate documents and the work that follows on death.',
    href: '/gawler-estate-lawyer',
  },
  {
    title: 'Advance care planning',
    body: 'The medical and lifestyle side of planning ahead.',
    href: '/advance-care-planning',
  },
  {
    title: 'Trusts',
    body: 'Family, discretionary and testamentary: when they help and when they do not.',
    href: '/gawler-trust-lawyer',
  },
]

export default function EstatePlanningPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Estates', href: '/estates' }, { name: 'Estate planning lawyers', href: '/estate-planning' }]} />
      <FAQSchema items={faq} />
      <PageHero
        eyebrow="Estate Planning Lawyers"
        heading={<>Estate planning lawyers in <em>Gawler</em>, since 1985.</>}
        lede="Plan the transition while you can still influence it. Estate planning is the legal scaffolding that lets your home, business or farm pass to your family on your terms, not the law's defaults. Most plans take two visits."
        image={IMAGES.estatePlanningHero}
      />
      <ServiceBody
        eyebrow="What we handle"
        heading={<>Whole-of-estate planning, not just a Will.</>}
        paragraphs={[
          'Nobody likes to think about preparing a Last Will and Testament too much, but inevitably one day you will have to leave your house, business, farm or other valuable asset, whether by selling up, retiring, or for health reasons. The point of estate planning is to make that transition easy, not just for you, but for your family and the people who depend on what you have built.',
          'Estate planning is an active process of re-evaluating the estate when circumstances in life change: marriage or divorce, changes to family assets, business acquisitions or sales, changes to superannuation, insurance or taxation, and the establishment of discretionary trusts. The right plan today is not necessarily the right plan in five years.',
          'We assess your assets, the likely taxation consequences of various outcomes, the risk of claims against the estate, and the protective structures that suit your situation. Then we put the documents in place (Will, Power of Attorney, Advance Care Directive, and any trust deeds) so the plan is real, not theoretical.',
        ]}
        asideTitle="Specific matters covered"
        asideItems={subServices}
      />
      <ServiceCallout eyebrow="If you are here because…" heading={<>Three of the most common reasons people start planning.</>} items={callouts} />
      <ServiceFAQ eyebrow="Common questions" heading={<>What people most often ask on the first call.</>} items={faq} />
      <ServiceCallout eyebrow="Getting started" heading={<>How a first meeting works.</>} items={firstMeeting} />
      <RelatedServices eyebrow="Adjacent help" heading={<>Other things we often look at on the same visit.</>} items={related} />
      <Booking />
    </>
  )
}
