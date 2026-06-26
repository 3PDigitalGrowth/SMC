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
  path: '/divorce-separation',
  title: 'Divorce and separation lawyer, Gawler.',
  description:
    "Family law for separating partners in the Gawler region. Divorce applications, legal separation, annulment, spousal maintenance and binding financial agreements.",
  image: IMAGES.divorceHero.src,
})

const subServices = [
  'Divorce applications and Court filings',
  'Document preparation and service',
  'Legal separation under one roof',
  'Marriage annulment',
  'Spousal maintenance claims',
  'Binding Financial Agreements (prenuptial)',
  'Separation under one roof affidavits',
  'Property settlement coordination',
  'Coordination with parenting matters',
]

const callouts = [
  {
    title: 'You have just separated.',
    body: 'The first call clarifies the timeline. We explain the 12-month separation requirement, what you can do during that year to protect your position, and what to expect when you can apply for divorce.',
  },
  {
    title: 'You have been separated for 12 months.',
    body: 'Time to apply. We prepare the application, serve documents if you are the sole applicant, and represent you at the Court hearing if one is required. Most clients never need to attend.',
  },
  {
    title: 'You are signing something.',
    body: 'A Binding Financial Agreement, a property settlement, a deed of release. Before you sign anything that purports to settle financial matters between you, send it to us. Reversing a signed agreement is much harder than negotiating one.',
  },
]

const faq = [
  {
    q: 'Do I need to prove the marriage failed?',
    a: 'No. Australia is a no-fault jurisdiction. The only ground for divorce is irretrievable breakdown, evidenced by 12 months of separation. The Court is not interested in who did what.',
  },
  {
    q: 'Can we be separated and still living together?',
    a: 'Yes. You can be separated under one roof if you can show the relationship has ended in substance — separate finances, separate sleeping arrangements, separate social lives. We help you document this with a separation-under-one-roof affidavit.',
  },
  {
    q: 'Do I need to attend Court for the divorce?',
    a: "Usually no. If there are no children under 18 and the application is joint, attendance is not required. If you have children under 18 or are filing alone, you may need to appear briefly. We attend with you.",
  },
  {
    q: 'How much does a divorce cost?',
    a: 'The Court filing fee is set by the Family Court. Our fee for preparing and filing a straightforward application is quoted on a fixed-fee basis. We tell you the all-up cost on the first call.',
  },
  {
    q: 'What if my spouse will not agree?',
    a: 'You can apply alone (sole application). We serve the documents, and the divorce can proceed without their cooperation as long as 12 months of separation can be established.',
  },
]

const related = [
  {
    title: 'Parenting and children',
    body: 'Most separations involve decisions about children. Often handled in the same matter.',
    href: '/parenting-children',
  },
  {
    title: 'Property settlement',
    body: 'Divorce and property are separate legal questions. Both can run in parallel.',
    href: '/property-settlement',
  },
  {
    title: 'Family law overview',
    body: 'The broader picture — mediation, intervention orders, de facto matters.',
    href: '/gawler-family-lawyers',
  },
]

export default function DivorceSeparationPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Family', href: '/family' }, { name: 'Divorce and separation', href: '/divorce-separation' }]} />
      <PageHero
        eyebrow="Family · Divorce · Separation"
        heading={<>The legal end of a marriage, done <em>plainly</em>.</>}
        lede="Most clients separating after a long relationship are not after a fight. They want a fair, quick, dignified resolution. We have done this work since 1985."
        image={IMAGES.divorceHero}
      />
      <ServiceBody
        eyebrow="What we handle"
        heading={<>Divorce, legal separation and the financial agreements either side may need.</>}
        paragraphs={[
          'A divorce application in Australia is a relatively simple legal process. The complications usually live around it — separation under one roof, blended families, an uncooperative spouse, or financial agreements that need to be signed before or after the divorce is final.',
          'We prepare and file your divorce application, serve documents if needed, attend any Court hearing on your behalf, and coordinate with the parallel work on parenting and property. Most matters resolve without the Family Court ever seeing the parties.',
          "For couples who want certainty in advance — pre-marriage, during a separation, or after — we draft Binding Financial Agreements that hold up if challenged. Drafting is the work that matters; many BFAs prepared elsewhere fail because they were drafted hastily.",
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />
      <ServiceCallout eyebrow="If you are here because…" heading={<>Three places divorce files most often start.</>} items={callouts} />
      <ServiceFAQ eyebrow="Common questions" heading={<>What people most often ask on the first call.</>} items={faq} />
      <RelatedServices eyebrow="Adjacent help" heading={<>Often connected to:</>} items={related} />
      <Booking />
    </>
  )
}
