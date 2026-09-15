import PageHero from '@/components/page/PageHero'
import ServiceBody from '@/components/page/ServiceBody'
import ServiceCallout from '@/components/page/ServiceCallout'
import ServiceFAQ from '@/components/page/ServiceFAQ'
import RelatedServices from '@/components/page/RelatedServices'
import Booking from '@/components/home/Booking'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import FAQSchema from '@/components/seo/FAQSchema'
import NotaryRoute from '@/components/notary/NotaryRoute'
import { NOTARY_HUB_SLUG, hubLink, notaryHref, spokeLinks } from '@/components/notary/registry'

export const SLUG = 'apostille-and-authentication-south-australia'

export const META = {
  title: 'Apostille and DFAT authentication, South Australia. Lodged from Gawler.',
  description:
    'What an apostille is, when DFAT issues an authentication instead, what it costs (A$105 per document) and how Steven M Clark notarises and lodges your documents from Gawler.',
}

const aside = [
  'Apostille: for countries in the Hague Apostille Convention',
  'Authentication: for countries outside the Convention',
  'Both are issued by DFAT, not by the Notary',
  'DFAT fee: A$105 per document (September 2026)',
  'Turnaround: a few business days once lodged',
  'We lodge for you, or prepare the pack for you to lodge',
]

const callouts = [
  {
    title: 'Your destination is a Hague Convention country.',
    body: 'The United Kingdom, India, Italy, Greece, Germany, the Netherlands, the Philippines, New Zealand, the United States, and since late 2023 China, are all members. Notarisation plus a DFAT apostille is the complete package. No embassy visit.',
  },
  {
    title: 'Your destination is not in the Convention.',
    body: 'Several countries in the Middle East and parts of Asia are outside it. DFAT issues an authentication instead of an apostille, and the destination country\'s embassy or consulate then legalises the document. We tell you before you start whether this applies.',
  },
  {
    title: 'You are not sure which one you need.',
    body: 'Send us the document and the instructions the overseas authority gave you. We check the destination against the current Convention list and the authority\'s own wording, and tell you the exact steps and the total cost before you book.',
  },
]

const faq = [
  {
    q: 'What is an apostille?',
    a: 'An apostille is a certificate issued by the Department of Foreign Affairs and Trade (DFAT) confirming that the signature and seal of the Australian Notary on your document are genuine. Countries in the Hague Apostille Convention accept it without any further legalisation. It is attached to the notarised document, not issued on its own.',
  },
  {
    q: 'What is the difference between an apostille and an authentication?',
    a: 'They do the same job for different destinations. DFAT issues an apostille for countries in the Hague Apostille Convention and an authentication for countries outside it. An authentication usually then needs to be legalised by the destination country\'s embassy or consulate in Australia. Both cost the same at DFAT.',
  },
  {
    q: 'Can the Notary issue the apostille?',
    a: 'No. Only DFAT issues apostilles and authentications in Australia. The Notary prepares and certifies the document; DFAT certifies the Notary. That is why the two steps go together and why we offer to lodge with DFAT for you.',
  },
  {
    q: 'How much does an apostille cost in Australia?',
    a: 'DFAT\'s fee is A$105 per document as at September 2026, payable to DFAT. That is separate from our notary fee. If a courier is needed to get the document to its destination, that is on top as well. We set all three out before you book.',
  },
  {
    q: 'How long does DFAT take?',
    a: 'Lodgement and processing usually take a few business days, longer around public holidays or if DFAT asks for something to be corrected. Because we check the document against DFAT\'s requirements before it goes in, corrections are rare.',
  },
  {
    q: 'Do I have to go to Adelaide myself?',
    a: 'No. We can lodge the document with DFAT on your behalf as part of the notary job. If you would rather lodge it yourself, we give you the completed pack and DFAT\'s current form and tell you what to expect.',
  },
]

export default function ApostillePage({ base }: { base: string }) {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Public Notary', href: notaryHref(base, NOTARY_HUB_SLUG) }, { name: 'Apostilles', href: notaryHref(base, SLUG) }]} />
      <FAQSchema items={faq} />
      <PageHero
        eyebrow="Apostilles and authentication · South Australia"
        heading={<>The apostille is DFAT vouching for <em>the Notary</em>.</>}
        lede="Most people are told they need an apostille without being told what one is. It is a government certificate that sits behind the notarial certificate, and it is the step that turns a document signed in Gawler into one a foreign court will accept. We notarise, we lodge, and we tell you the total before you start."
      />
      <NotaryRoute />
      <ServiceBody
        eyebrow="How it works"
        heading={<>Two certificates, one job, no trip to the city.</>}
        paragraphs={[
          'Australia is a party to the Hague Convention of 1961 that abolished the old chain of legalisations. Under it, a public document from one member country only needs a single certificate, the apostille, to be accepted in another. For a privately signed document such as a Power of Attorney or a statutory declaration, the Notary\'s certificate is what makes it a public document, and the apostille then certifies the Notary.',
          'For countries outside the Convention the principle is the same but the paperwork is longer. DFAT issues an authentication in place of the apostille, and the destination country\'s own embassy or consulate in Australia adds its stamp. We identify which route applies from the destination and the receiving authority\'s instructions, and build the appointment around it.',
          'The practical difference for you is small. You come to one appointment in Gawler. We notarise the document, prepare DFAT\'s legalisation request, and either lodge it ourselves or hand you the pack. DFAT charges A$105 per document, payable to DFAT, and returns the document with the certificate attached within a few business days.',
        ]}
        asideTitle="At a glance"
        asideItems={aside}
      />
      <ServiceCallout eyebrow="Which one you need" heading={<>It depends on where the document is going.</>} items={callouts} />
      <ServiceFAQ eyebrow="Common questions" heading={<>What people ask about apostilles.</>} items={faq} />
      <RelatedServices eyebrow="Keep reading" heading={<>More on notarising for overseas use.</>} items={[hubLink(base), ...spokeLinks(base, SLUG).slice(3, 5)]} />
      <Booking />
    </>
  )
}
