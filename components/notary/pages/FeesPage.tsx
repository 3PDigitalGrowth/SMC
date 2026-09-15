import PageHero from '@/components/page/PageHero'
import ServiceBody from '@/components/page/ServiceBody'
import ServiceCallout from '@/components/page/ServiceCallout'
import ServiceFAQ from '@/components/page/ServiceFAQ'
import RelatedServices from '@/components/page/RelatedServices'
import Booking from '@/components/home/Booking'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import FAQSchema from '@/components/seo/FAQSchema'
import { NOTARY_HUB_SLUG, hubLink, notaryHref, spokeLinks } from '@/components/notary/registry'

export const SLUG = 'notary-fees-south-australia'

export const META = {
  title: 'Notary Public fees in South Australia. Fixed fee, quoted first.',
  description:
    'How Notary Public fees work at Steven M Clark, Gawler: a fixed fee confirmed before your appointment, what moves it, and the DFAT (A$105 per document) and courier costs to budget for.',
}

const aside = [
  'Fixed fee, agreed before the appointment',
  'Set by: number of documents, number of signers, copies, DFAT handling',
  'DFAT apostille or authentication: A$105 per document, to DFAT',
  'Courier to the destination: at cost',
  'Translation or interpreter: at cost, if needed',
  'Free 15-minute call to scope it first',
]

const callouts = [
  {
    title: 'What moves the fee up.',
    body: 'More documents. More people signing. Attested copies of several originals. A company signer needing an extract checked. DFAT paperwork prepared and lodged for you. A document in another language that needs an interpreter. Each is a known amount, not a surprise.',
  },
  {
    title: 'What does not.',
    body: 'Where you live. How urgent it is, within reason. Whether you have used us before. Asking questions. The free call at the start is genuinely free, and if a JP would do the job we say so and you pay nothing.',
  },
  {
    title: 'What is on top, and paid to someone else.',
    body: 'DFAT charges A$105 per document for an apostille or authentication. An overseas embassy may charge to legalise a document for a non-Convention country. Couriers charge by destination. We tell you each figure before you decide, and you can lodge or post yourself if you prefer.',
  },
]

const faq = [
  {
    q: 'How much does a Notary Public cost in South Australia?',
    a: 'There is no set scale. Each Notary sets their own fees, and ours are fixed per job rather than charged by time. The fee depends on the number of documents, the number of people signing, whether attested copies are needed, and whether we are handling the DFAT step. Send us the document and the overseas instructions and we confirm the figure before your appointment.',
  },
  {
    q: 'Why do you not publish a price list?',
    a: 'Because two documents that look the same can be very different jobs: one a single signature, the other three signers, four attested copies and a DFAT lodgement. Publishing one number would either overcharge the simple job or mislead on the complex one. A fixed quote on your actual documents is fairer, and it takes us minutes to give.',
  },
  {
    q: 'Is there a cheaper or free option?',
    a: 'For documents used inside Australia, yes: a Justice of the Peace, at no charge. For documents going overseas, no. Only a Notary\'s certificate is recognised abroad and by DFAT. Beware services advertising cheap notarisation that turn out to be JP witnessing; the document will be rejected at the far end.',
  },
  {
    q: 'What does DFAT charge?',
    a: 'A$105 per document for an apostille or an authentication, as at September 2026, paid to DFAT. That is a government charge and the same whoever lodges the document.',
  },
  {
    q: 'Can I pay on the day?',
    a: 'Yes. The fee is confirmed in advance, so there is nothing to work out at the desk. We take card and bank transfer.',
  },
]

export default function FeesPage({ base }: { base: string }) {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Public Notary', href: notaryHref(base, NOTARY_HUB_SLUG) }, { name: 'Fees', href: notaryHref(base, SLUG) }]} />
      <FAQSchema items={faq} />
      <PageHero
        eyebrow="Notary fees · South Australia"
        heading={<>A fixed fee, told to you <em>before</em> you come in.</>}
        lede="Notary work is one of the few things a law firm can price exactly, so we do. You send the document and the overseas instructions, we tell you the fee, and that is the fee. This page explains what it depends on and what other costs to expect from DFAT and couriers."
      />
      <ServiceBody
        eyebrow="How the fee is set"
        heading={<>Priced on the job, not the clock.</>}
        paragraphs={[
          'Notarial work is measured in documents, signers and certificates, not hours. A single Power of Attorney with one signer and a DFAT apostille is a known job. Four attested copies of degrees for a university application is another known job. We price each on those facts and confirm it in writing before you book, so the appointment is about the document and not the bill.',
          'Three things sit outside our fee and we set them out separately: DFAT\'s charge of A$105 per document for an apostille or authentication, any embassy legalisation fee for a country outside the Hague Convention, and courier costs to the destination. You can pay those through us or handle them yourself. Either way you see the total first.',
          'The honest caveat is at the other end of the scale. If your document is only for use in Australia, you do not need a Notary and should not pay for one. A Justice of the Peace does that at no charge, and we will tell you so on the free first call rather than take a booking.',
        ]}
        asideTitle="In short"
        asideItems={aside}
      />
      <ServiceCallout eyebrow="What changes the number" heading={<>The variables, plainly.</>} items={callouts} />
      <ServiceFAQ eyebrow="Common questions" heading={<>About the cost.</>} items={faq} />
      <RelatedServices eyebrow="Keep reading" heading={<>Related guides.</>} items={[hubLink(base), ...spokeLinks(base, SLUG).slice(0, 2)]} />
      <Booking />
    </>
  )
}
