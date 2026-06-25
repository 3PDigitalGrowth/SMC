import PageHero from '@/components/page/PageHero'
import LegalDocument from '@/components/page/LegalDocument'
import Booking from '@/components/home/Booking'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: '/identity-checks',
  title: 'Identity checks and client due diligence. Steven M Clark Lawyers, Gawler.',
  description:
    'From 1 July 2026, Australian legal practices must verify client identity and carry out due diligence for certain work under the AML/CTF Act. What to expect when you engage us.',
})

const intro = [
  "From 1 July 2026, Australian legal practices are required to comply with new obligations under the Anti-Money Laundering and Counter-Terrorism Financing Act 2006 (Cth). These obligations apply to all legal practices in Australia in respect of certain categories of work, including conveyancing, business sales, company formation, trust and estate work, and the receipt or management of client funds.",
]

const sections = [
  {
    heading: 'What this means for you',
    paragraphs: [
      "When you engage us in respect of this type of work, or when we next review our records for an existing matter, we will be required to verify your identity by reference to documents such as a driver's licence or passport, collect information regarding the purpose of your matter, and, in certain circumstances, request additional information regarding the source of funds or the parties involved.",
      "We understand that some of these questions may feel more detailed than what you have been asked before. They are a requirement of the national scheme and apply to every legal practice in Australia, not a choice we are making about you as a client.",
    ],
  },
  {
    heading: 'Your information',
    paragraphs: [
      "Information you provide remains subject to our ordinary obligations of confidentiality and is held securely in accordance with our privacy policy. We will collect only the information we are required to collect for these purposes.",
    ],
  },
  {
    heading: 'Questions',
    paragraphs: [
      "If you have any questions regarding the information we will request, please speak with your solicitor or contact our office on (08) 8522 6025 or law@stevenmclark.com.au.",
    ],
  },
]

export default function IdentityChecksPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Identity checks', href: '/identity-checks' }]} />
      <PageHero
        eyebrow="Compliance"
        heading={
          <>
            Identity checks and <em>client due diligence</em>.
          </>
        }
        lede="New national rules apply to Australian legal practices from 1 July 2026. For certain types of work, we now verify your identity and ask a few extra questions before we act. Here is what to expect, and why."
      />
      <LegalDocument lastUpdated="24 June 2026" sections={sections} intro={intro} />
      <Booking />
    </>
  )
}
