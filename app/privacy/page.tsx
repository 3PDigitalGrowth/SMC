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

const intro = [
  "Steven M Clark Lawyers is committed to protecting the privacy of personal information in accordance with the Privacy Act 1988 (Cth), including the Australian Privacy Principles.",
  "This Privacy Policy explains how we collect, hold, use and disclose personal information in the course of providing legal services and conducting our practice. It also explains how you may access personal information we hold about you, seek correction of that information, or make a complaint about the way in which we have handled your personal information.",
]

const sections = [
  {
    heading: 'What personal information we collect',
    paragraphs: [
      "The personal information we collect will depend on the nature of the matter in which we are instructed and our legal and regulatory obligations. It may include your name, residential or postal address, email address, telephone number, date of birth, occupation, identification documents and details, financial information, banking details, tax file number or other government identifiers where permitted by law, information relevant to your legal matter, and correspondence and records of communications with you or on your behalf.",
      "In some matters, we may also collect sensitive information where it is reasonably necessary for us to provide legal services or otherwise permitted or required by law. Sensitive information may include information about your health, racial or ethnic origin, religious beliefs, membership of a professional or trade association, criminal record, biometric information used for identity verification, or other sensitive information relevant to your matter.",
    ],
  },
  {
    heading: 'How we collect personal information',
    paragraphs: [
      "We generally collect personal information directly from you when you contact us, provide instructions, complete forms, sign agreements, send us documents, attend meetings, communicate with us by telephone, email or otherwise, or use our website or digital platforms.",
      "We may also collect personal information from third parties where this is reasonably necessary for the conduct of your matter or the operation of our practice. Such third parties may include your authorised representatives, referrers, courts and tribunals, government agencies, regulators, counterparties, other solicitors, barristers, experts, witnesses, financial institutions, property agents, service providers, identity verification providers, and publicly available registers and databases.",
      "Where practicable, we will collect personal information directly from you. However, in legal matters it is not always practicable or appropriate to do so.",
    ],
  },
  {
    heading: 'Why we collect, hold, use and disclose personal information',
    paragraphs: [
      "We collect, hold, use and disclose personal information for purposes including: to provide legal advice and legal services; to verify your identity and carry out client due diligence and compliance checks; to assess whether we are able to act for you and to identify and manage conflicts of interest; to communicate with you and others in relation to your matter; to prepare, file and serve documents and otherwise conduct or manage legal proceedings or transactions; to comply with our legal, professional, ethical and regulatory obligations; to manage billing, accounts, trust accounting and debt recovery; to engage barristers, experts, consultants and other service providers on your behalf or in connection with your matter; to improve our services, systems and client experience; to maintain and protect our legal rights and interests; and for any other purpose permitted or required by law.",
      "If you do not provide personal information requested by us, we may be unable to act for you, continue to act for you, provide legal services effectively, comply with our legal obligations, or accept funds into our trust account.",
    ],
  },
  {
    heading: 'Disclosure of personal information',
    paragraphs: [
      "We may disclose personal information to: courts, tribunals, government departments, regulators and law enforcement agencies; other solicitors, barristers, mediators, experts, valuers, accountants and consultants; banks, financial institutions and payment processors; identity verification and document verification providers; information technology, cloud storage, document management and other service providers; process servers, couriers and administrative contractors; your authorised agents, representatives or advisers; parties and their advisers involved in your matter; and other persons where you have authorised the disclosure or where disclosure is required or permitted by law.",
      "We take reasonable steps to ensure that third parties to whom we disclose personal information handle that information appropriately and, where applicable, in accordance with confidentiality and privacy obligations.",
    ],
  },
  {
    heading: 'Overseas disclosure',
    paragraphs: [
      "Some of our service providers, including providers of cloud-based software, data storage, email, document management or identity verification systems, may store or process personal information overseas. Where this occurs, we will take reasonable steps to ensure that any overseas recipient handles personal information in a manner consistent with Australian privacy law, except where an exception under the Privacy Act 1988 (Cth) applies.",
    ],
  },
  {
    heading: 'Website, cookies and analytics',
    paragraphs: [
      "If you visit our website, we may collect certain information automatically, such as your IP address, browser type, device information, pages visited, time spent on the site and referring website details. We may use cookies and similar technologies to improve website functionality, analyse traffic and enhance user experience. You may adjust your browser settings to refuse cookies, although some website features may then not function properly.",
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices, content or security of those external websites.",
    ],
  },
  {
    heading: 'Direct marketing',
    paragraphs: [
      "We may use your contact details to send you legal updates, publications, invitations or information about our services where permitted by law. You may opt out of receiving such communications at any time by contacting us or using the unsubscribe facility in the relevant communication.",
    ],
  },
  {
    heading: 'Storage and security of personal information',
    paragraphs: [
      "We hold personal information in both electronic and hard copy form. We take reasonable steps to protect personal information from misuse, interference and loss, and from unauthorised access, modification or disclosure. These steps may include physical security measures, secure document storage, password protection, encryption, access controls, staff training, confidentiality obligations and the use of reputable information technology service providers.",
      "While we take reasonable steps to protect personal information, no method of transmission over the internet or electronic storage is completely secure. Accordingly, we cannot guarantee absolute security.",
    ],
  },
  {
    heading: 'Retention of personal information',
    paragraphs: [
      "We retain personal information for as long as it is reasonably necessary for the purposes for which it was collected, to provide legal services, to comply with legal, professional, insurance, accounting and regulatory obligations, to resolve disputes, and to enforce our rights. When personal information is no longer required, we will take reasonable steps to destroy it or de-identify it, unless we are required or permitted by law to retain it.",
    ],
  },
  {
    heading: 'Access to and correction of personal information',
    paragraphs: [
      "You may request access to personal information we hold about you and request correction of personal information that is inaccurate, out of date, incomplete, irrelevant or misleading.",
      "Requests for access or correction should be made in writing to us using the contact details below. We will respond within a reasonable time. In some circumstances, access may be refused in accordance with the Privacy Act 1988 (Cth) or other applicable laws. If we refuse access or correction, we will provide written reasons where required.",
    ],
  },
  {
    heading: 'Anonymity and pseudonymity',
    paragraphs: [
      "Where lawful and practicable, you may deal with us anonymously or by using a pseudonym. However, in most cases this will not be practicable because of the nature of legal services, our professional obligations, and our identity verification and client due diligence requirements.",
    ],
  },
  {
    heading: 'Complaints',
    paragraphs: [
      "If you have any concerns or complaints about how we have handled your personal information, please contact us using the details below. We will consider your complaint and respond within a reasonable time.",
      "If you are not satisfied with our response, you may make a complaint to the Office of the Australian Information Commissioner.",
    ],
  },
  {
    heading: 'Contact details',
    paragraphs: [
      "If you have any questions about this Privacy Policy, wish to request access to or correction of your personal information, or wish to make a privacy complaint, please contact:",
      "Steven M Clark Lawyers. 1 Adelaide Road, GAWLER SOUTH, South Australia. law@stevenmclark.com.au. (08) 8522 6025.",
    ],
  },
  {
    heading: 'Changes to this Privacy Policy',
    paragraphs: [
      "We may amend this Privacy Policy from time to time to reflect changes in our legal obligations, practices, procedures or systems. The current version of this Privacy Policy will be made available by us on request and, if applicable, published on our website.",
    ],
  },
]

const closing = [
  "By engaging us, communicating with us, or providing personal information to us, you acknowledge that you have read and understood this Privacy Policy.",
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
      <LegalDocument lastUpdated="24 June 2026" sections={sections} intro={intro} closing={closing} />
      <Booking />
    </>
  )
}
