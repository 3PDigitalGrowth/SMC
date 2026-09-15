import PageHero from '@/components/page/PageHero'
import ServiceBody from '@/components/page/ServiceBody'
import ServiceCallout from '@/components/page/ServiceCallout'
import ServiceFAQ from '@/components/page/ServiceFAQ'
import RelatedServices from '@/components/page/RelatedServices'
import Booking from '@/components/home/Booking'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import FAQSchema from '@/components/seo/FAQSchema'
import { NOTARY_HUB_SLUG, hubLink, notaryHref, spokeLinks } from '@/components/notary/registry'

export const SLUG = 'notary-public-or-justice-of-the-peace'

export const META = {
  title: 'Notary Public, Justice of the Peace or Commissioner for Oaths? Gawler.',
  description:
    'Which officer your document needs. A JP is free and works inside Australia; a Notary Public is for overseas use; a Commissioner takes affidavits. Plain answer from Gawler\'s Public Notary.',
}

const aside = [
  'Document staying in Australia: a JP, usually free',
  'Document going overseas: a Notary Public, fixed fee',
  'Affidavit for an Australian court: JP, lawyer or Commissioner',
  'Certified copy for a foreign authority: Notary (attested copy)',
  'Not sure: call us and we will say which',
]

const callouts = [
  {
    title: 'Justice of the Peace',
    body: 'A volunteer appointed by the South Australian Government. Witnesses statutory declarations and affidavits, certifies copies, and witnesses signatures for use within Australia. No charge. Found through the JP service, many councils, libraries and police stations. If that is all you need, go there first.',
  },
  {
    title: 'Notary Public',
    body: 'A practising lawyer appointed by the Supreme Court of South Australia under the Notaries Public Act 2016. Does everything a JP does, plus issues notarial certificates under seal that foreign governments, courts and DFAT recognise. The only officer whose signature DFAT will apostille. Charges a fee.',
  },
  {
    title: 'Commissioner for taking affidavits',
    body: 'In South Australia, legal practitioners, JPs and certain other office holders can take affidavits for use in South Australian courts. If a court here has asked for a sworn affidavit, a JP or a solicitor is enough. If a court overseas has asked for one, you are back to the Notary.',
  },
]

const faq = [
  {
    q: 'Is there a free Notary Public?',
    a: 'No. Notaries are practising lawyers holding a Supreme Court appointment, and they charge a fee for notarial work. The free option is a Justice of the Peace, and for anything used inside Australia a JP is usually all you need. If someone has told you a document must be notarised for overseas use, a JP\'s signature will be rejected and you will need a Notary. We tell you which on the first call, at no charge.',
  },
  {
    q: 'Can a JP certify a document for use overseas?',
    a: 'Generally no. Foreign authorities and DFAT do not recognise a JP\'s signature, so a JP-certified copy or JP-witnessed document is usually sent back. A Notary\'s attested copy or notarial certificate under seal is what they accept, often with a DFAT apostille on top.',
  },
  {
    q: 'Is a Notary a Commissioner for Oaths?',
    a: 'A Notary can administer oaths and take affidavits and declarations, so in practice yes. The reverse is not true: a Commissioner or JP cannot issue a notarial certificate. If the instruction says "notarised" or "before a Notary Public", that is the officer you need.',
  },
  {
    q: 'Where can I find a JP in Gawler?',
    a: 'The South Australian JP service lists JPs by area and many operate from councils, libraries and police stations on set days. We are not the right place for a free JP witnessing, and we will point you to one if that is what your document needs.',
  },
  {
    q: 'What if the overseas authority just says "certified copy"?',
    a: 'Ask them, or send us their wording. Some foreign authorities accept a solicitor-certified copy; most want a notarial attested copy, and many also want an apostille. Getting this right before you post the document saves weeks.',
  },
]

export default function NotaryVsJPPage({ base }: { base: string }) {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Public Notary', href: notaryHref(base, NOTARY_HUB_SLUG) }, { name: 'Notary or JP', href: notaryHref(base, SLUG) }]} />
      <FAQSchema items={faq} />
      <PageHero
        eyebrow="Notary, JP or Commissioner · Gawler"
        heading={<>Three officers, three jobs. <em>Which one</em> your document needs.</>}
        lede="People ring us for a Notary when a JP would do, and turn up to a JP with a document bound for Mumbai or Milan. This page sorts it out in a minute. The short version: inside Australia, a JP and no fee. Outside Australia, a Notary and a fixed fee. We will tell you which one honestly."
      />
      <ServiceBody
        eyebrow="The plain distinction"
        heading={<>It is about who has to trust the signature.</>}
        paragraphs={[
          'A Justice of the Peace is appointed by the State to witness documents for use within it. An Australian court, bank, employer or government department knows what a JP is and accepts one. The JP service is free and there are JPs across the Gawler region. For a statutory declaration, an affidavit for a South Australian court, or a certified copy of your licence for an Australian bank, a JP is the right and cheapest answer.',
          'A Notary Public exists because a court in another country has no idea what an Australian JP is. Notaries are practising lawyers appointed by the Supreme Court under the Notaries Public Act 2016 (SA). Their certificate and seal are the thing foreign authorities recognise, and the thing DFAT will certify with an apostille. There is no free version of that office.',
          'A Commissioner for taking affidavits sits alongside both. In South Australia, solicitors and JPs can take affidavits for local court proceedings. A Notary can do that too. The trap is the reverse: an affidavit for a foreign court, a Power of Attorney for property abroad, or a citizenship declaration for another government needs the Notary, and nothing less will be accepted.',
        ]}
        asideTitle="Quick answers"
        asideItems={aside}
      />
      <ServiceCallout eyebrow="Side by side" heading={<>What each officer can do.</>} items={callouts} />
      <ServiceFAQ eyebrow="Common questions" heading={<>The questions behind the search.</>} items={faq} />
      <RelatedServices eyebrow="Keep reading" heading={<>If you do need the Notary.</>} items={[hubLink(base), ...spokeLinks(base, SLUG).slice(0, 1), ...spokeLinks(base, SLUG).slice(2, 3)]} />
      <Booking />
    </>
  )
}
