import PageHero from '@/components/page/PageHero'
import ServiceBody from '@/components/page/ServiceBody'
import ServiceFAQ from '@/components/page/ServiceFAQ'
import RelatedServices from '@/components/page/RelatedServices'
import Booking from '@/components/home/Booking'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import FAQSchema from '@/components/seo/FAQSchema'
import NotaryChecklist from '@/components/notary/NotaryChecklist'
import { NOTARY_HUB_SLUG, hubLink, notaryHref, spokeLinks } from '@/components/notary/registry'

export const SLUG = 'notary-appointment-checklist'

export const META = {
  title: 'What to bring to a notary appointment. Gawler checklist.',
  description:
    'Five things that get a document notarised in one visit at Steven M Clark, Gawler: the unsigned original, photo ID, the overseas instructions, correct names, supporting originals. And the one thing not to do first.',
}

const aside = [
  'Original document, unsigned',
  'Passport or driver\'s licence',
  'The overseas authority\'s instructions',
  'Spelling of every name, destination country',
  'Supporting originals (company extract, marriage certificate)',
  'Interpreter arranged if needed',
  'Payment: fixed fee confirmed in advance',
]

const faq = [
  {
    q: 'Why must I not sign the document before the appointment?',
    a: 'Because the Notary is certifying that they watched you sign. A document signed at home cannot be witnessed after the fact, and most overseas authorities reject a certificate that does not say the signature was made in the Notary\'s presence. If you have already signed, bring a clean copy or we print a fresh one.',
  },
  {
    q: 'Do I need to bring the original, or is a copy enough?',
    a: 'For witnessing a signature, we need the document you will sign, which is usually a print of what the overseas authority sent you. For an attested copy, we must see the original: the actual passport, degree or certificate. A photocopy of a photocopy cannot be attested.',
  },
  {
    q: 'What identification do you accept?',
    a: 'Current government-issued photo identification: an Australian or foreign passport, or an Australian driver\'s licence. The name on the ID must match the name on the document; if it does not, bring the certificate that explains the change (marriage, deed poll).',
  },
  {
    q: 'Can someone sign on behalf of a company?',
    a: 'Yes, but the Notary must be satisfied that they are authorised. Bring a current ASIC company extract and, where relevant, the resolution or constitution that gives that person signing authority. We can obtain the extract for you if you tell us when booking.',
  },
  {
    q: 'What if I need several documents done at once?',
    a: 'Tell us how many when you book and send them through in advance. Multiple documents in one appointment are common, especially for overseas property and citizenship matters, and the fixed fee accounts for the number of documents and signers.',
  },
  {
    q: 'How long will I be there?',
    a: 'Most appointments take 15 to 30 minutes. Longer if there are several documents, several signers, an interpreter, or DFAT paperwork to prepare on the spot.',
  },
]

export default function ChecklistPage({ base }: { base: string }) {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Public Notary', href: notaryHref(base, NOTARY_HUB_SLUG) }, { name: 'Appointment checklist', href: notaryHref(base, SLUG) }]} />
      <FAQSchema items={faq} />
      <PageHero
        eyebrow="Appointment checklist · Gawler"
        heading={<>Five things that get it done <em>in one visit</em>.</>}
        lede="Nearly every notary appointment that needs a second visit needs it for one of the same few reasons: a document signed at home, an ID that does not match the name, or instructions from overseas that nobody brought. Here is the list, and the one thing not to do."
      />
      <NotaryChecklist
        eyebrow="Bring these"
        heading={<>The checklist.</>}
        intro="Print it or screenshot it. If you send us the document and the overseas instructions the day before, we check them against DFAT's and the destination's requirements so the appointment itself is short."
      />
      <ServiceBody
        eyebrow="Why each one matters"
        heading={<>The certificate can only say what the Notary saw.</>}
        paragraphs={[
          'A notarial certificate is a first-hand account. It records that a named person, identified by a specified document, signed in the Notary\'s presence on a given day, or that a copy was compared against an original the Notary held. Every item on the checklist exists because the certificate has to be true to the word and the receiving authority will read it that way.',
          'The instructions from the overseas authority matter more than most people expect. A German bank, an Indian sub-registrar and an Italian consulate each have their own wording, and some supply the exact certificate they want. Bringing their email lets us match it rather than guess, which is the difference between the document being accepted and coming back.',
          'Names and destination go on the certificate too. A transposed middle name or a passport number typed from memory can void the whole thing at the far end. Check the spelling against the ID you are bringing, and tell us the country, so the DFAT step (apostille or authentication) is set up correctly from the start.',
        ]}
        asideTitle="On the day"
        asideItems={aside}
      />
      <ServiceFAQ eyebrow="Common questions" heading={<>Before you come in.</>} items={faq} />
      <RelatedServices eyebrow="Keep reading" heading={<>Related guides.</>} items={[hubLink(base), ...spokeLinks(base, SLUG).slice(2, 4)]} />
      <Booking />
    </>
  )
}
