import PageHero from '@/components/page/PageHero'
import ServiceBody from '@/components/page/ServiceBody'
import ServiceCallout from '@/components/page/ServiceCallout'
import ServiceFAQ from '@/components/page/ServiceFAQ'
import RelatedServices from '@/components/page/RelatedServices'
import Booking from '@/components/home/Booking'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import FAQSchema from '@/components/seo/FAQSchema'
import { NOTARY_HUB_SLUG, hubLink, notaryHref, spokeLinks } from '@/components/notary/registry'

export const SLUG = 'notarising-documents-for-use-overseas'

export const META = {
  title: 'Notarising documents for India, Italy, the UK and overseas. Gawler.',
  description:
    'Powers of Attorney for property abroad, citizenship declarations, foreign probate, overseas contracts and certified copies. What each destination tends to ask for, from Gawler\'s Public Notary.',
}

const aside = [
  'Power of Attorney for property or a bank abroad',
  'Statutory declaration for a citizenship application',
  'Documents for a foreign probate or inheritance',
  'Overseas employment or visa paperwork',
  'Attested copies of passports and qualifications',
  'Company documents for a foreign registry or bank',
  'Consent to a child travelling or living abroad',
]

const callouts = [
  {
    title: 'India',
    body: 'Usually a Power of Attorney for property, or a declaration for a family or inheritance matter. India is in the Hague Convention, so notarisation plus a DFAT apostille is the standard package. Sub-registrars can be exact about wording and photographs on the document; bring their instructions.',
  },
  {
    title: 'Italy and Greece',
    body: 'Citizenship by descent applications, property in the family village, and inheritances. Both countries are in the Convention. Consulates and comuni often require a certified translation alongside the notarised original, and the apostille goes on the document, not the translation. We sequence it correctly.',
  },
  {
    title: 'United Kingdom and Europe',
    body: 'Probate of a relative\'s estate, pension and bank declarations, and identity for solicitors under UK money-laundering rules. All Convention countries. The document is usually a form the UK firm sends; we complete the notarial section they specify and add the apostille if asked.',
  },
  {
    title: 'China and the Philippines',
    body: 'China joined the Apostille Convention in November 2023 and the Philippines in 2019, so both now take an apostille rather than consular legalisation. Family, property and employment documents are the common ones. Translations are frequently required and we tell you which side of the certificate they attach to.',
  },
  {
    title: 'The United States, Canada and New Zealand',
    body: 'Real estate closings, powers of attorney, affidavits for US courts and Canadian immigration declarations. All three accept an apostille (Canada since January 2024). US documents often prescribe their own acknowledgement wording; we follow it exactly.',
  },
  {
    title: 'Countries outside the Convention',
    body: 'Several Middle Eastern and some Asian destinations still require DFAT authentication followed by legalisation at their embassy in Australia. It adds time and an embassy fee. We check the current list for your destination before you book so there are no surprises.',
  },
]

const faq = [
  {
    q: 'Does the document need to be in English?',
    a: 'Not necessarily. The Notary must understand what is being certified and be satisfied you understand what you are signing. For a document in another language we may ask for a translation by an accredited translator, or arrange an interpreter for the appointment. Many destinations also want a certified translation of the notarial certificate itself; we tell you if yours does.',
  },
  {
    q: 'Can you notarise a document the overseas lawyer has already drafted?',
    a: 'Yes, and it is usually best that they draft it, because they know what their registry or court will accept. Send us their draft and their instructions. We check the notarial wording, tell you if anything will not work under Australian practice, and witness it as they require.',
  },
  {
    q: 'Do you draft Powers of Attorney for use overseas?',
    a: 'We can, but for property and banking abroad the receiving country\'s form is nearly always required. Where the overseas side has no form, we prepare one in consultation with them.',
  },
  {
    q: 'What about photographs, thumbprints and witnesses?',
    a: 'Some destinations, India especially, want a photograph affixed and signed across, a thumbprint, or two additional witnesses. Bring what their instructions say. We have the materials on hand for photographs and prints, and can supply a second witness from the office.',
  },
  {
    q: 'How do I get the document to the other country?',
    a: 'Courier. We prepare the pack so the notarial certificate, apostille and any translation stay bound and in order, and we can arrange the courier or hand it to you to send. Scans are rarely accepted for original notarised documents, so plan for the postage time.',
  },
]

export default function OverseasPage({ base }: { base: string }) {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Public Notary', href: notaryHref(base, NOTARY_HUB_SLUG) }, { name: 'Documents for overseas', href: notaryHref(base, SLUG) }]} />
      <FAQSchema items={faq} />
      <PageHero
        eyebrow="Documents for use overseas · Gawler"
        heading={<>Where it is going decides <em>what it needs</em>.</>}
        lede="A Power of Attorney for a flat in Chennai, a declaration for Italian citizenship, a form from a solicitor in Manchester about your late aunt's estate. Each one is a notarisation, and each one has its own habits. This is what we see most, by destination, so you can bring the right things and we can get it accepted first time."
      />
      <ServiceBody
        eyebrow="The pattern"
        heading={<>Same certificate, different expectations at the far end.</>}
        paragraphs={[
          'Every notarised document is the same in one respect: an Australian Notary has verified the signer, the signature or the copy, and recorded it in a certificate under seal. What changes is what the receiving authority wants around that certificate: a translation, an apostille, a photograph, a particular form of words, a second witness. Those requirements come from the destination, and they are the things people most often miss.',
          'Our approach is to start from the instructions. Before the appointment we read what the overseas lawyer, registry, consulate or bank has asked for and match the certificate to it. Where the destination is in the Hague Apostille Convention we build the DFAT apostille into the job; where it is not, we plan for DFAT authentication and embassy legalisation and tell you the extra time and cost.',
          'Because we are the only Public Notary between North Adelaide and the Riverland, we see the same destinations again and again: India, Italy, Greece, the United Kingdom, China, the Philippines, the United States. The notes below are the practical habits of each, drawn from that work. They are a guide to prepare with, not a substitute for the instructions from your own overseas contact.',
        ]}
        asideTitle="Documents we notarise for overseas"
        asideItems={aside}
      />
      <ServiceCallout eyebrow="By destination" heading={<>What each place tends to ask for.</>} items={callouts} />
      <ServiceFAQ eyebrow="Common questions" heading={<>Translations, drafts and delivery.</>} items={faq} />
      <RelatedServices eyebrow="Keep reading" heading={<>Related guides.</>} items={[hubLink(base), ...spokeLinks(base, SLUG).slice(0, 1), ...spokeLinks(base, SLUG).slice(2, 3)]} />
      <Booking />
    </>
  )
}
