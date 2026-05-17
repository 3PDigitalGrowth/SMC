import PageHero from '@/components/page/PageHero'
import LegalDocument from '@/components/page/LegalDocument'
import Booking from '@/components/home/Booking'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: '/terms',
  title: 'Terms of use. Steven M Clark Lawyers, Gawler.',
  description:
    "Terms of use for the Steven M Clark Lawyers website. What this site is, what it isn't, and the legal limits of using it.",
})

const sections = [
  {
    heading: 'What this site is',
    paragraphs: [
      "This is the website of Steven M Clark Pty Ltd (Steven M Clark Lawyers), a South Australian legal practice operating from 1 Adelaide Road, Gawler South. The site is intended to introduce the firm, explain the areas of law we practise in, and make it easy to get in touch.",
    ],
  },
  {
    heading: 'What it is not',
    paragraphs: [
      "Nothing on this website is legal advice. The articles, service pages, FAQs and other content are general information only, written in plain English to be useful, but they are not a substitute for advice that takes your specific circumstances into account.",
      "Reading this site does not create a solicitor-client relationship between you and Steven M Clark Lawyers. That relationship only begins after we have spoken with you, conducted any necessary conflict checks, and confirmed engagement in writing.",
    ],
  },
  {
    heading: 'Accuracy',
    paragraphs: [
      "We make a genuine effort to keep the content of this site accurate and up to date. Laws change, however, and content written months or years ago may no longer reflect the current position. If you are relying on information for an actual decision, ring us — that is what we are here for.",
    ],
  },
  {
    heading: 'External links',
    paragraphs: [
      "This site may link to other websites — government departments, professional bodies, our Google profile, and so on. We do not control those sites and we are not responsible for their content, accuracy, or privacy practices. A link is not an endorsement of every word on the linked site.",
    ],
  },
  {
    heading: 'Use of the site',
    paragraphs: [
      "You may read, share, and link to this site freely. You may not scrape it for content to republish, train models on it without permission, attempt to disrupt it, or use it to send unsolicited communications. Where you submit information through a contact form, our privacy policy applies.",
    ],
  },
  {
    heading: 'Liability',
    paragraphs: [
      "To the extent permitted by law, Steven M Clark Pty Ltd is not liable for any loss arising from the use of this website. Liability of Steven M Clark Pty Ltd is limited by a scheme approved under the Professional Standards Legislation in respect of legal services we actually provide.",
    ],
  },
  {
    heading: 'Governing law',
    paragraphs: [
      "These terms are governed by the laws of South Australia. Any dispute arising from your use of this site will be heard in the South Australian courts.",
    ],
  },
  {
    heading: 'Contact',
    paragraphs: [
      "Questions about these terms should be directed to law@stevenmclark.com.au or by phone to (08) 8522 6025.",
    ],
  },
]

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Terms', href: '/terms' }]} />
      <PageHero
        eyebrow="Legal"
        heading={
          <>
            Terms of use, <em>kept brief</em>.
          </>
        }
        lede="The legal terms covering the use of this website. The short version: read the content, share it, get in touch — but treat the articles as general information, not advice."
      />
      <LegalDocument lastUpdated="17 May 2026" sections={sections} />
      <Booking />
    </>
  )
}
