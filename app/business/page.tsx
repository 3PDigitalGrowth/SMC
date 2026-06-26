import PageHero from '@/components/page/PageHero'
import HubServices from '@/components/page/HubServices'
import HubProof from '@/components/page/HubProof'
import Booking from '@/components/home/Booking'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { pageMetadata } from '@/lib/seo'
import { IMAGES } from '@/lib/images'

export const metadata = pageMetadata({
  path: '/business',
  title: 'Business law, Gawler. Sale, purchase, leases, debt.',
  description:
    'Legal advice for South Australian SMEs. Commercial, business sale and purchase, leases, debt recovery, industrial relations, insolvency, and notary services.',
  image: IMAGES.businessHero.src,
})

const services = [
  {
    title: 'Commercial and corporate',
    body: 'Company structure, shareholder agreements, partnership deeds, supplier contracts. We get the boring documents right so the interesting work has a foundation.',
    href: '/gawler-commercial-lawyers',
  },
  {
    title: 'Business sale and purchase',
    body: 'Buying or selling a business is not just the price. It is the lease, the goodwill, the staff, the licences, the receivables and the tax. We work through every one.',
    href: '/gawler-business-lawyers',
  },
  {
    title: 'Commercial leases',
    body: 'Five years of your business decisions live inside your lease. We will tell you which clauses to push back on, and which are not worth the fight.',
    href: '/gawler-lease-lawyer',
  },
  {
    title: 'Debt recovery',
    body: 'A letter from a lawyer is often all it takes. When it is not, we have spent decades recovering debts for Gawler businesses without making enemies of customers worth keeping.',
    href: '/gawler-debt-recovery',
  },
  {
    title: 'Industrial relations',
    body: 'Award questions, performance issues, unfair dismissal claims, redundancy. We help you do it right the first time so it does not end up at the Commission.',
    href: '/gawler-industrial-relations-lawyer',
  },
  {
    title: 'Insolvency',
    body: 'If a customer or supplier has gone under, or if you are looking at the cliff yourself, we advise you on the options early, when you still have them.',
    href: '/gawler-insolvency-lawyer',
  },
]

export default function BusinessPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Business', href: '/business' }]} />
      <PageHero
        eyebrow="Business Law"
        heading={
          <>
            Straight legal advice for businesses, from a firm that <em>runs one</em>.
          </>
        }
        lede="We have run our own business on Adelaide Road since 1985. Most of what stresses you about running yours has stressed us too. We give you the advice we wish we had got."
        image={IMAGES.businessHero}
      />

      <HubServices
        eyebrow="How we help"
        heading={<>Six situations every Gawler SME runs into.</>}
        intro="Also offered: Public Notary services (the only one between North Adelaide and the Riverland), criminal and traffic, and a wider general practice if your situation does not fit any of these six."
        items={services}
      />

      <HubProof
        eyebrow="In practice"
        quote="Steven told us not to buy it. We did not. Six months later we found the right one and he handled that contract too."
        attribution="Business client, Gawler region · Acquisition advisory"
        body={[
          'A local family was looking at buying a hospitality business. The numbers looked fine but the lease was unusual and the goodwill was overvalued. They came in for a contract review.',
          'We told them, on the first call, not to proceed. They listened. Six months later they bought a different business in the same sector for less money and on a much cleaner lease. We handled that contract too. Saying "do not buy this" is part of the job.',
        ]}
        image={IMAGES.pathwayBusiness}
      />

      <Booking />
    </>
  )
}
