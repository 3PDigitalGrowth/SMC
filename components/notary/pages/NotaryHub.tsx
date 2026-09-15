import PageHero from '@/components/page/PageHero'
import ServiceBody from '@/components/page/ServiceBody'
import ServiceCallout from '@/components/page/ServiceCallout'
import ServiceFAQ from '@/components/page/ServiceFAQ'
import HubServices from '@/components/page/HubServices'
import RelatedServices from '@/components/page/RelatedServices'
import Booking from '@/components/home/Booking'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import FAQSchema from '@/components/seo/FAQSchema'
import NotaryRoute from '@/components/notary/NotaryRoute'
import NotaryChecklist from '@/components/notary/NotaryChecklist'
import { IMAGES } from '@/lib/images'
import { NOTARY_HUB_SLUG, notaryHref, spokeLinks } from '@/components/notary/registry'

export const HUB_META = {
  title: 'Notary Public, Gawler. Apostilles and documents for overseas.',
  description:
    'Need a Notary Public in Gawler? Steven M Clark notarises documents for overseas use, administers oaths and coordinates DFAT apostilles. One appointment, fixed fee quoted first.',
}

const subServices = [
  'Powers of Attorney for use overseas',
  'Wills and estate documents for foreign probate',
  'Deeds, contracts and company documents for overseas execution',
  'Affidavits, statutory declarations and oaths',
  'Certified (attested) copies of passports, degrees and certificates',
  'Certificates of identity and of good standing',
  'Bills of exchange (noting and protesting)',
  'Ships protests',
  'DFAT apostille and authentication, lodged for you',
]

const callouts = [
  {
    title: 'An overseas authority has asked for a notarised document.',
    body: 'A land registry in India, a bank in Italy, a court in the UK, a university in Germany. They will not accept a JP-witnessed document. They will accept a notarial certificate under seal, usually with an apostille on top. We do both in one visit.',
  },
  {
    title: 'You need a certified copy that will be accepted abroad.',
    body: 'A JP-certified copy works inside Australia. For a foreign authority you need an attested copy under notarial seal (an exemplification). Passports, degrees, birth and marriage certificates, company extracts. Bring the original.',
  },
  {
    title: 'You have been told to swear or declare something in front of a Notary.',
    body: 'Common for dual citizenship, migration, inheriting overseas property, and international business. We administer the oath or declaration, witness your signature, and certify it.',
  },
]

export const HUB_FAQ = [
  {
    q: 'What is a Public Notary?',
    a: 'A Public Notary (or Notary Public) is a practising lawyer appointed by the Supreme Court of South Australia under the Notaries Public Act 2016 to hold a public office. A Notary verifies identity, witnesses signatures, certifies copies and administers oaths, and issues notarial certificates under seal that authorities in other countries recognise. Steven M Clark is the Public Notary at our Gawler office.',
  },
  {
    q: 'What is the difference between a Notary and a Justice of the Peace?',
    a: 'A JP witnesses documents and certifies copies for use within Australia, at no charge. A Notary does the same for use anywhere in the world, with authority backed by a Supreme Court appointment and a seal that foreign authorities and DFAT recognise. If your document is going overseas, you need a Notary. If it stays in Australia, a JP is usually enough and we will say so.',
  },
  {
    q: 'Do you arrange apostilles?',
    a: 'Yes. Countries that are party to the Hague Apostille Convention require a DFAT apostille on top of the notarisation; other countries require a DFAT authentication and sometimes legalisation at their embassy. We notarise the document and lodge it with DFAT on your behalf, or give you the completed pack to lodge yourself. DFAT currently charges A$105 per document.',
  },
  {
    q: 'How long does it take?',
    a: 'Most notarisations are done in one appointment of 15 to 30 minutes, and we can usually see you within a day or two. If DFAT is involved, allow a few business days for the apostille or authentication once lodged, plus courier time to the destination.',
  },
  {
    q: 'How much does it cost?',
    a: 'Notary work is charged on a fixed fee. The fee depends on how many documents there are, how many people are signing, whether certified copies are needed, and whether we are coordinating DFAT for you. Send us the document and the receiving authority\'s instructions and we confirm the fee before your appointment. DFAT and courier charges are on top and we tell you those too.',
  },
  {
    q: 'What should I bring?',
    a: 'The original unsigned document, current photo identification (passport or driver\'s licence), any written instructions from the overseas authority, the correct spelling of every name, and any supporting originals the document refers to. Do not sign the document before you arrive unless we have told you to.',
  },
  {
    q: 'Do you serve areas outside Gawler?',
    a: 'Yes. We are the only Public Notary between North Adelaide and the Riverland, so people come to us from Elizabeth, Salisbury, Munno Para, Angle Vale, Two Wells, Roseworthy, Kapunda and across the Barossa. Our office is at 1 Adelaide Road, Gawler South, with parking beside the office.',
  },
  {
    q: 'Can you notarise a document written in another language?',
    a: 'Often, yes. What matters is that the Notary understands what is being certified and that the signer understands what they are signing. Depending on the document and the destination, we may ask for a translation from an accredited translator, or arrange an interpreter for the appointment. Tell us the language when you book.',
  },
]

const related = [
  {
    title: 'Wills and estates',
    body: 'Powers of Attorney and Wills are the documents we notarise most often, and we draft them too.',
    href: '/gawler-estate-lawyer',
  },
  {
    title: 'Property law',
    body: 'Buying, selling or inheriting property overseas usually needs a notarised Power of Attorney.',
    href: '/gawler-property-lawyers',
  },
  {
    title: 'Business law',
    body: 'Overseas contracts, company resolutions and certificates of good standing for foreign registries.',
    href: '/gawler-business-lawyers',
  },
]

export default function NotaryHub({ base }: { base: string }) {
  const hubPath = notaryHref(base, NOTARY_HUB_SLUG)
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Business', href: '/business' }, { name: 'Public Notary', href: hubPath }]} />
      <FAQSchema items={HUB_FAQ} />
      <PageHero
        eyebrow="Notary Public · Gawler, South Australia"
        heading={<>Notary Public in Gawler for <em>overseas documents</em> and apostilles.</>}
        lede="If an overseas authority has asked you to notarise a document, certify a copy or get an apostille, we handle the whole process from Gawler. Steven M Clark is a practising solicitor and Public Notary, the only one between North Adelaide and the Riverland. Most appointments take 15 to 30 minutes, and we confirm the fixed fee before you come in."
        image={IMAGES.notaryDetailHero}
      />
      <NotaryRoute />
      <ServiceBody
        eyebrow="What a Notary does"
        heading={<>A notarial certificate is the document the rest of the world trusts.</>}
        paragraphs={[
          'A Public Notary is a practising lawyer appointed by the Supreme Court of South Australia to hold a public office that other countries recognise. The role exists because a court in Italy or a land registry in India has no way of checking an Australian signature. The Notary checks it for them, records that check in a certificate, and puts a seal on it that DFAT and foreign authorities know.',
          'In practice that means three things. We verify who you are and that you signed freely. We attest that a copy is a true copy of an original we have seen. And we administer oaths and declarations, certifying that you swore or declared the contents. Each one produces a notarial certificate that travels with your document.',
          'We handle the full range: Powers of Attorney, Wills and estate documents, deeds and contracts, affidavits and statutory declarations, attested copies (exemplifications), bills of exchange and ships protests. Where the destination country needs a DFAT apostille or authentication on top, we coordinate that as part of the same job.',
        ]}
        asideTitle="Documents and matters we handle"
        asideItems={subServices}
      />
      <NotaryChecklist />
      <ServiceCallout eyebrow="If you are here because…" heading={<>Three reasons people need a Notary.</>} items={callouts} />
      <HubServices
        eyebrow="Go deeper"
        heading={<>The questions people ask before they book.</>}
        intro="Six short guides, written for people who have just been told the word notarised and want to know what happens next. Read the one that fits, then call."
        items={spokeLinks(base)}
      />
      <ServiceFAQ eyebrow="Common questions" heading={<>What people most often ask on the first call.</>} items={HUB_FAQ} />
      <RelatedServices eyebrow="Adjacent help" heading={<>Often connected to:</>} items={related} />
      <Booking />
    </>
  )
}
