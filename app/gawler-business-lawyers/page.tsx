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
  path: '/gawler-business-lawyers',
  title: 'Gawler business lawyers. Sale, purchase, commercial advice.',
  description:
    'Business law for South Australian SMEs since 1986. Business sale and purchase, contracts, leases, due diligence, franchising, licence transfers.',
  image: IMAGES.businessHero.src,
})

const subServices = [
  'Business structure advice (company, partnership, trust, sole trader)',
  'Contracts and leases',
  'Put and Call options',
  'Goodwill and asset valuation',
  'Tax considerations',
  'Liaison with banks and lenders',
  'Liquor licence transfers',
  'Poker machine entitlement transfers',
  'Equipment licence transfers',
  'Franchising agreements',
  'Due diligence searches and inspections',
  'Settlement coordination',
  'Shareholder and partnership agreements',
  'Supplier and customer contracts',
]

const callouts = [
  {
    title: 'You are about to buy a business.',
    body: 'Most buyers focus on the price and forget the lease, the goodwill, the staff, the licences and the receivables. We work through every one before you sign, and tell you straight if the deal does not make sense.',
  },
  {
    title: 'You are about to sell.',
    body: 'A clean exit needs the right structure, the right pre-sale clean-up, and the right contract. We get involved early enough to maximise what you walk out with, not just at the lawyers-shake-hands stage.',
  },
  {
    title: 'You are starting something new.',
    body: 'The right structure at day one saves tax, paperwork and arguments later. Company, trust, partnership or sole trader — we sit with you and your accountant, and we make the call together.',
  },
]

const faq = [
  {
    q: 'When in a business sale or purchase should I bring you in?',
    a: 'As early as possible — ideally before any offer is made. Most of the value of having a lawyer is at the structuring and contract stages, not at settlement. By the time the contract is signed, your room to manoeuvre is mostly gone.',
  },
  {
    q: 'How much does this cost?',
    a: "Most business matters quote per project or per stage rather than per hour. We give you a fee estimate before any work starts and let you know immediately if anything would change it. Most clients prefer the certainty.",
  },
  {
    q: 'Do I need both a lawyer and an accountant?',
    a: 'Almost always, yes — and they should talk to each other. We routinely work with our clients\' accountants on structure and tax decisions. For most deals, the accountant runs the numbers and we run the documents.',
  },
  {
    q: 'What is due diligence and do I need it?',
    a: "For any business purchase above token amounts, yes. Due diligence is the checking phase — title to assets, lease status, licences, employment liabilities, customer contracts, tax position. We coordinate it and tell you what we find before the cooling-off period closes.",
  },
  {
    q: 'Can you handle franchising agreements?',
    a: 'Yes. Franchising contracts are heavily one-sided in favour of the franchisor, and most prospective franchisees do not realise what they are agreeing to. We read the agreement and the disclosure document, and tell you the parts that are negotiable, the parts that are not, and whether the deal is sound.',
  },
  {
    q: 'I am chasing an overdue debt. Where do we start?',
    a: 'Usually a letter of demand from us, which resolves the great majority of debts under $50,000 without further steps. If that fails, we escalate through the Magistrates Court or, for larger debts, the District Court. We will tell you on the first call whether the debt is worth chasing.',
  },
]

const related = [
  {
    title: 'Commercial and corporate',
    body: 'Company structures, shareholder agreements, partnerships, supplier contracts.',
    href: '/gawler-commercial-lawyers',
  },
  {
    title: 'Commercial leases',
    body: 'If you lease your premises, your lease decides a lot of what you can and cannot do.',
    href: '/gawler-lease-lawyer',
  },
  {
    title: 'Debt recovery',
    body: 'A formal letter often resolves what months of polite emails could not.',
    href: '/gawler-debt-recovery',
  },
]

export default function BusinessLawyersPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Business', href: '/business' }, { name: 'Business lawyers', href: '/gawler-business-lawyers' }]} />
      <PageHero
        eyebrow="Business · Sale · Purchase · Commercial"
        heading={
          <>
            Business law for people who actually <em>run a business</em>.
          </>
        }
        lede="We have run our own business on Adelaide Road since 1986. Most of what stresses you about running yours has stressed us too. We give you the advice we wish we had got."
        image={IMAGES.businessHero}
        imageCaption="Murray Street, Gawler, just after seven. The town getting started."
      />

      <ServiceBody
        eyebrow="What we handle"
        heading={<>The full range of business law, from a Gawler firm that has been doing it since 1986.</>}
        paragraphs={[
          'Our Gawler business lawyers have the skills and the local experience to advise you on the purchase or sale of a business, and on the day-to-day legal work of running one. We work with sole traders, partnerships, family companies and trust structures across the Gawler region and South Australia.',
          "On the sale-and-purchase side, we give advice on the best business structure for you, the contract terms, put and call options, goodwill and asset valuation, tax considerations, lender liaison, transfers of liquor and equipment licences, franchising, and due diligence. We coordinate and attend settlement so you do not have to.",
          'On the day-to-day side, we draft and review contracts and leases, sort out commercial disputes before they get expensive, manage debt recovery for our business clients, advise on employment matters, and provide the Public Notary services every now and then a deal will require.',
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />

      <ServiceCallout
        eyebrow="If you are here because…"
        heading={<>Three of the most common reasons SMEs call us first.</>}
        items={callouts}
      />

      <ServiceFAQ
        eyebrow="Common questions"
        heading={<>The questions almost every first caller asks.</>}
        items={faq}
      />

      <RelatedServices
        eyebrow="Adjacent help"
        heading={<>Other things we often look at on the same visit.</>}
        items={related}
      />

      <Booking />
    </>
  )
}
