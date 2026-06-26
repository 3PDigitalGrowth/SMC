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
  path: '/gawler-commercial-lawyers',
  title: 'Commercial and corporate lawyer, Gawler.',
  description:
    'Commercial and corporate legal work for South Australian businesses and not-for-profits since 1985. Structures, contracts, employment, IP, governance.',
  image: IMAGES.commercialHero.src,
})

const subServices = [
  'Legal advice for business startups',
  'Business structure (partnership, trust, company)',
  'Business name registration',
  'Partnership and joint venture agreements',
  'Business acquisitions and sales',
  'Lease agreements',
  'Bankruptcy and debt collection',
  'Estate and succession planning',
  'Business management and administration',
  'Employment contracts and disputes',
  'Confidentiality agreements',
  'Administrative law',
  'Copyright and intellectual property',
  'Legislative compliance and governance',
  'Tax law including CGT',
  'Not-for-profit and charity legal services',
  'Mergers, acquisitions and joint ventures',
  'Lending and securities advice',
  'Employee share option schemes',
]

const callouts = [
  {
    title: 'You are setting up a new business.',
    body: 'The right structure at day one — company, partnership, trust, sole trader — saves tax, paperwork and arguments later. We sit with you and your accountant and make the decision together.',
  },
  {
    title: 'You need a contract reviewed or drafted.',
    body: 'Supplier contracts, distribution agreements, partnership deeds, employment contracts, NDAs. We draft them so they hold up and review them so you know what you are signing.',
  },
  {
    title: 'You are running a not-for-profit or charity.',
    body: 'Charity and not-for-profit law has its own constitution rules, reporting obligations and governance requirements. We have advised Gawler-region charities for decades.',
  },
]

const faq = [
  {
    q: 'What business structure is right for me?',
    a: 'It depends on your tax position, your risk profile, who you will share income with, and whether you intend to bring in outside investors or sell the business in the future. We work it through with you and your accountant, then we register and document whichever structure we decide on.',
  },
  {
    q: 'Do you handle employment matters for businesses?',
    a: 'Yes — contracts, performance issues, disciplinary action, redundancy, unfair dismissal defence, and confidentiality and non-compete arrangements. We help you do it right the first time so it does not end up at the Fair Work Commission.',
  },
  {
    q: 'I want to bring in a business partner. What do I need?',
    a: 'A properly drafted Shareholders Agreement or Partnership Deed that deals with control, profit-sharing, what happens if one party leaves, and how disputes are resolved. Skipping this step is the most common reason business partnerships fall apart badly.',
  },
  {
    q: 'Can you help with intellectual property?',
    a: "Yes — registration of trade marks, copyright matters, confidentiality and licence agreements, and IP disputes. For complex patent matters we refer to a specialist patent attorney we trust.",
  },
  {
    q: 'Do you advise not-for-profits and charities?',
    a: 'Yes. We have advised Gawler-region not-for-profits, sporting clubs, foundations and charities for decades. Steven himself has served as a Director of the Trinity College Foundation, the Gawler Health Service Foundation, and the Gawler Business Development Board.',
  },
]

const related = [
  {
    title: 'Business sale and purchase',
    body: 'Buying or selling a business — contract, due diligence, settlement.',
    href: '/gawler-business-lawyers',
  },
  {
    title: 'Commercial leases',
    body: 'The lease often decides what the business can and cannot do.',
    href: '/gawler-lease-lawyer',
  },
  {
    title: 'Debt recovery',
    body: 'When a customer or supplier has not paid.',
    href: '/gawler-debt-recovery',
  },
]

export default function CommercialLawyersPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Business', href: '/business' }, { name: 'Commercial and corporate', href: '/gawler-commercial-lawyers' }]} />
      <PageHero
        eyebrow="Business · Commercial · Corporate"
        heading={<>The boring documents, done <em>properly</em>, so the interesting work can happen.</>}
        lede="Most of what stops a business is something not written down. We draft, review and maintain the contracts and structures that make the rest of your week predictable."
        image={IMAGES.commercialHero}
      />
      <ServiceBody
        eyebrow="What we handle"
        heading={<>The full range of commercial and corporate work.</>}
        paragraphs={[
          "Steven M Clark Lawyers commercial and corporate lawyers can provide advice and assistance on the full range of commercial and corporate legal matters. We work with sole traders, family companies, partnerships, trust structures, joint ventures, not-for-profits and charities — across the Gawler region and across South Australia.",
          'On the structure side we advise on business setup, business name registration, partnership and joint venture agreements, business acquisitions and sales, lease arrangements, and the related tax and succession planning. Day-to-day, we draft and review contracts of all kinds, advise on employment matters, handle copyright and IP issues, and provide ongoing governance advice.',
          'For larger matters, we handle mergers, acquisitions and joint ventures, lending and securities advice, and employee share option schemes. Where commercial disputes need to be litigated, we appear in the Magistrates, District and Supreme Courts of South Australia.',
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />
      <ServiceCallout eyebrow="If you are here because…" heading={<>Three reasons commercial files most often start.</>} items={callouts} />
      <ServiceFAQ eyebrow="Common questions" heading={<>What people most often ask on the first call.</>} items={faq} />
      <RelatedServices eyebrow="Adjacent help" heading={<>Often connected to:</>} items={related} />
      <Booking />
    </>
  )
}
