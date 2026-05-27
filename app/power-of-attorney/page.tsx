import PageHero from '@/components/page/PageHero'
import ServiceBody from '@/components/page/ServiceBody'
import ServiceCallout from '@/components/page/ServiceCallout'
import ServiceFAQ from '@/components/page/ServiceFAQ'
import RelatedServices from '@/components/page/RelatedServices'
import Booking from '@/components/home/Booking'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { pageMetadata } from '@/lib/seo'
import { IMAGES } from '@/lib/images'

export const metadata = pageMetadata({
  path: '/power-of-attorney',
  title: 'Power of Attorney, Gawler. General and Enduring.',
  description:
    'Power of Attorney documents prepared by a Gawler practice since 1986. General and Enduring POAs that hold up when your family actually needs them.',
  image: IMAGES.advanceCareHero.src,
})

const subServices = [
  'General Power of Attorney (limited duration or purpose)',
  'Enduring Power of Attorney (continues after loss of capacity)',
  'Single-attorney appointments',
  'Joint appointments (both must agree)',
  'Joint-and-several appointments (either can act alone)',
  'Substitute attorney appointments',
  'Scope limitations (specific assets or decisions)',
  'Revocation of existing Powers of Attorney',
  'Complimentary fireproof document storage',
]

const callouts = [
  {
    title: "You're doing your Will anyway.",
    body: 'Power of Attorney signs in the same visit as your Will, in about fifteen minutes. Most clients leave with both in place. It is a small, important hour.',
  },
  {
    title: 'A parent or family member is losing capacity.',
    body: 'A Power of Attorney must be made while a person still has legal capacity. If you have concerns about an aging family member, do not wait. After capacity is gone, the only option is a tribunal application — slower, public, and harder.',
  },
  {
    title: 'You travel or work in higher-risk roles.',
    body: 'If something happens to you suddenly — illness, accident, prolonged time overseas — someone needs legal authority to handle your finances. Without a POA, your family has to apply to a tribunal. With one, they can act in days.',
  },
]

const faq = [
  {
    q: 'What is the difference between a General and an Enduring Power of Attorney?',
    a: 'A General Power of Attorney covers legal and financial decisions for as long as you have capacity to make them yourself. It ends automatically if you lose capacity. An Enduring Power of Attorney continues even after loss of capacity, which is when it is most needed. Most people want the Enduring version.',
  },
  {
    q: 'Who can be my attorney?',
    a: "Any adult you trust with legal capacity. Typically a spouse, an adult child, a sibling, or a close friend. You can appoint more than one — either requiring them to act jointly, or allowing them to act severally. We help you choose the structure that suits your family dynamics.",
  },
  {
    q: 'Does a Power of Attorney cover medical decisions?',
    a: 'No. Medical and lifestyle decisions are covered by a separate document — an Advance Care Directive. Most clients sign both at the same time, so all the planning documents are in place together.',
  },
  {
    q: 'Can I revoke a Power of Attorney?',
    a: "Yes, at any time while you have capacity. We prepare the revocation, notify the attorney, and update the records. If you have already used the POA with a bank or other institution, we ensure they have notice of the revocation as well.",
  },
  {
    q: 'Where is the original document kept?',
    a: "We offer complimentary fireproof storage at the office, accessible during business hours. Most clients prefer the original held with us, with a certified copy at home, so it is never lost.",
  },
  {
    q: 'Does my attorney have to act in my best interests?',
    a: 'Yes. Attorneys are subject to fiduciary duties — to act in your best interests, to keep their finances separate from yours, to keep proper records, and not to profit personally from the role. Where these duties are breached, the matter can be referred to SACAT or, in serious cases, the police.',
  },
]

const related = [
  {
    title: 'Wills and probate',
    body: 'POA is usually prepared in the same visit as your Will.',
    href: '/gawler-estate-lawyer',
  },
  {
    title: 'Advance care planning',
    body: 'The medical and lifestyle equivalent of a Power of Attorney.',
    href: '/gawler-estate-planning-lawyers',
  },
  {
    title: 'Estate planning',
    body: "The wider plan that POA sits inside.",
    href: '/estate-planning',
  },
]

export default function PowerOfAttorneyPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Estates', href: '/estates' }, { name: 'Power of attorney', href: '/power-of-attorney' }]} />
      <PageHero
        eyebrow="Estates · Power of Attorney"
        heading={<>The document that lets someone <em>act for you</em>, if you cannot.</>}
        lede="A Power of Attorney is quiet, brief, and indispensable. It signs in fifteen minutes alongside your Will, and most clients never think about it again — until the day it makes everything easier."
        image={IMAGES.advanceCareHero}
      />
      <ServiceBody
        eyebrow="What we handle"
        heading={<>Both types of Power of Attorney, drafted to suit your specific situation.</>}
        paragraphs={[
          'A Power of Attorney is a legal document that authorises another person — your attorney — to make decisions about your legal and financial affairs. The scope can be broad or narrow, time-limited or open-ended, and tailored to whatever situation you are planning for.',
          'Most clients want an Enduring Power of Attorney — one that continues to operate even if they lose capacity to manage their own affairs. Without it, the family has no automatic right to access bank accounts, sell property, or pay bills on your behalf. They have to apply to the South Australian Civil and Administrative Tribunal (SACAT), which is public, slow, and stressful at exactly the wrong moment.',
          "We draft Powers of Attorney with the specific protections and limitations you want — joint versus several, substitute attorneys, scope limits, and the wording required for your bank, your super fund, or any institution that will see the document. We hold the originals in our fireproof office storage at no charge.",
        ]}
        asideTitle="Specific matters we handle"
        asideItems={subServices}
      />
      <ServiceCallout eyebrow="If you are here because…" heading={<>Three reasons people put this in place.</>} items={callouts} />
      <ServiceFAQ eyebrow="Common questions" heading={<>What people most often ask on the first call.</>} items={faq} />
      <RelatedServices eyebrow="Adjacent help" heading={<>Often done in the same visit:</>} items={related} />
      <Booking />
    </>
  )
}
