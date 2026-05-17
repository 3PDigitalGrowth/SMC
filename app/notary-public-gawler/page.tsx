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
  path: '/notary-public-gawler',
  title: 'Public Notary, Gawler. International document certification.',
  description:
    'Notary Public services in Gawler, South Australia. Document notarisation for international use, apostilles, oaths, attested copies and ships protests.',
  image: IMAGES.notaryDetailHero.src,
})

const subServices = [
  'Notarisation of Powers of Attorney',
  'Notarisation of Wills',
  'Deeds and contracts for overseas use',
  'Affidavits and statutory declarations',
  'Attested copies of official documents (exemplifications)',
  'Bills of exchange (noting and protesting)',
  'Ships protests',
  'Administration of oaths',
  'Apostille coordination',
]

const callouts = [
  {
    title: 'You have a document that needs to be used overseas.',
    body: 'Documents for use outside Australia almost always need notarisation, and often apostille certification on top. We do both — and we are the only Public Notary between North Adelaide and the Riverland.',
  },
  {
    title: 'You need a certified copy that an overseas authority will accept.',
    body: 'A standard JP-certified copy is not enough for many overseas uses. A notarial certificate under seal is. We prepare attested copies (exemplifications) of original documents in single appointments.',
  },
  {
    title: 'You have been asked for a notarised oath or declaration.',
    body: 'Common for immigration, dual citizenship, foreign property transactions and international business matters. We administer the oath, witness the document, and apply the notarial seal.',
  },
]

const faq = [
  {
    q: 'What is a Public Notary?',
    a: 'A Public Notary is a practising lawyer appointed by Statute or by Commission of the Supreme Court of South Australia to hold a unique public office. Notaries have the internationally recognised authority to prepare notarial certificates under Australian law that are accepted by authorities in other countries.',
  },
  {
    q: "What is the difference between a Notary and a Justice of the Peace?",
    a: 'A JP can witness signatures and certify copies of documents for use within Australia. A Notary can do the same for use anywhere in the world, with their authority backed by a notarial seal and Commission. For international use, only a Notary will do.',
  },
  {
    q: 'Do you arrange apostilles?',
    a: 'Yes. Many countries that are parties to the Hague Apostille Convention require notarised documents to also carry an apostille from DFAT. We notarise the document and coordinate the apostille through DFAT on your behalf.',
  },
  {
    q: 'How long does it take?',
    a: 'Most notarisations are completed in a single appointment of 15 to 30 minutes. Apostille turnaround through DFAT typically adds a few business days.',
  },
  {
    q: 'How much does it cost?',
    a: 'Notary work is charged on a fixed-fee basis depending on the document and complexity. We quote you on the first call.',
  },
]

const related = [
  {
    title: 'Wills and estates',
    body: 'Powers of Attorney and Wills are common notarisation subjects.',
    href: '/gawler-estate-lawyer',
  },
  {
    title: 'Business law',
    body: 'International business and contract execution often requires notarial certification.',
    href: '/gawler-business-lawyers',
  },
  {
    title: 'Property law',
    body: 'Foreign property transactions and overseas execution of conveyancing documents.',
    href: '/gawler-property-lawyers',
  },
]

export default function NotaryPublicPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Business', href: '/business' }, { name: 'Public Notary', href: '/notary-public-gawler' }]} />
      <PageHero
        eyebrow="Public Notary · Gawler"
        heading={<>The only Public Notary between <em>North Adelaide and the Riverland</em>.</>}
        lede="If you have a document that needs to be recognised overseas, you need a Notary, not a JP. We have been Gawler's Public Notary for decades, and we handle the apostille work too."
        image={IMAGES.notaryDetailHero}
      />
      <ServiceBody
        eyebrow="What we handle"
        heading={<>Notarial certificates accepted internationally, prepared in one visit.</>}
        paragraphs={[
          "A Public Notary is a practising lawyer appointed by Statute or Commission in South Australia by the Supreme Court to hold a unique public office. Notaries have the internationally recognised power and authority to prepare notarial certificates under Australian law. The role exists because authorities in other jurisdictions need a trusted Australian officer to verify identity and document execution.",
          'We verify individual identities and document execution through our signatures and official seal, making documents acceptable to authorities overseas. A Public Notary also has the authority to administer oaths, certifying that a person signing a legal document was in fact under oath when doing so. Public Notaries perform international administrative functions and provide official verification for use in court proceedings around the world.',
          "Document types we handle include Powers of Attorney, Wills, deeds and contracts, affidavits, statutory declarations, exemplifications (attested copies under seal), bills of exchange (noting and protesting), and ships protests. We provide notarial services for use in Australia and internationally.",
        ]}
        asideTitle="Documents and matters we handle"
        asideItems={subServices}
      />
      <ServiceCallout eyebrow="If you are here because…" heading={<>Three reasons people need a Notary.</>} items={callouts} />
      <ServiceFAQ eyebrow="Common questions" heading={<>What people most often ask on the first call.</>} items={faq} />
      <RelatedServices eyebrow="Adjacent help" heading={<>Often connected to:</>} items={related} />
      <Booking />
    </>
  )
}
