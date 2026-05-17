import PageHero from '@/components/page/PageHero'
import LegalDocument from '@/components/page/LegalDocument'
import Booking from '@/components/home/Booking'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: '/privacy',
  title: 'Privacy policy. Steven M Clark Lawyers, Gawler.',
  description:
    'How Steven M Clark Lawyers collects, holds, uses and discloses personal information, written in plain English.',
})

const sections = [
  {
    heading: 'What this policy covers',
    paragraphs: [
      "This policy explains how Steven M Clark Pty Ltd (Steven M Clark Lawyers, ABN-registered legal practice operating from 1 Adelaide Road, Gawler South, South Australia) handles your personal information. It applies to information collected through this website, by phone, email, or in person at the office.",
      "We are bound by the Australian Privacy Principles set out in the Privacy Act 1988 (Cth), and by the professional obligations applicable to South Australian solicitors.",
    ],
  },
  {
    heading: 'What we collect',
    paragraphs: [
      "We collect the information you give us when you contact us. That typically includes your name, phone number, email address, and a description of the matter you are calling about. If you become a client, we collect additional information necessary to act on your matter, including identification documents, financial details, and information about other parties.",
      "If you only visit this website without contacting us, we collect standard analytics data: pages visited, approximate location based on IP address, browser and device type. We do not use third-party advertising cookies.",
    ],
  },
  {
    heading: 'How we use it',
    paragraphs: [
      "We use your information to respond to your enquiry, to act on legal matters where you become a client, to comply with our professional obligations and applicable laws, and to administer our practice (billing, file management, conflict checks).",
      "We do not sell, rent, or share your personal information for marketing purposes. We do not pass it to third parties except where you have asked us to, where the law requires us to, or where it is genuinely necessary to act on your matter (for example, to brief a barrister or to lodge documents with a court or registry).",
    ],
  },
  {
    heading: 'How we keep it safe',
    paragraphs: [
      "Physical files are held in a locked office. Digital files are held on systems secured to the standards expected of a small legal practice — password protection, role-based access, and encrypted backups. Solicitor-client privilege protects communications relevant to legal advice.",
      "We retain client files for a minimum of seven years after the matter closes, in line with regulatory requirements. After that, files are destroyed securely.",
    ],
  },
  {
    heading: 'Access and corrections',
    paragraphs: [
      "You can ask us at any time to access the personal information we hold about you, to correct it if it is wrong, or to delete it where we are not legally required to keep it. Email law@stevenmclark.com.au or call (08) 8522 6025 and we will respond within a reasonable time.",
      "There is no charge for access to your file unless the request is unusually large. If a charge applies, we will tell you in writing before any work is done.",
    ],
  },
  {
    heading: 'Complaints',
    paragraphs: [
      "If you believe we have mishandled your personal information, please contact us first — most concerns are resolved that way. If we cannot resolve it, you can refer the matter to the Office of the Australian Information Commissioner (oaic.gov.au) or, for solicitor conduct, the Legal Profession Conduct Commissioner of South Australia.",
    ],
  },
  {
    heading: 'Changes to this policy',
    paragraphs: [
      "If we update this policy, the new version will appear on this page with an updated date. Material changes will be noted at the top of the page for a reasonable period.",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Privacy', href: '/privacy' }]} />
      <PageHero
        eyebrow="Legal"
        heading={
          <>
            Privacy policy, in <em>plain English</em>.
          </>
        }
        lede="How we handle your personal information. The short version: we use it to do the legal work you have asked us to do, we keep it safe, and we do not pass it to anyone who does not need it."
      />
      <LegalDocument lastUpdated="17 May 2026" sections={sections} />
      <Booking />
    </>
  )
}
