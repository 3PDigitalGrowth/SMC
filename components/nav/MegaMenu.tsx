'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import styles from './MegaMenu.module.css'

interface MegaMenuProps {
  activeMenu: string | null
  onClose: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
}

interface PanelDef {
  eyebrow: string
  question: string
  body: string
  primary: { label: string; href: string }
  columns: {
    heading: string
    links: { label: string; href: string }[]
  }[]
}

const panels: Record<string, PanelDef> = {
  family: {
    eyebrow: 'Family Law',
    question: 'Going through a separation?',
    body: 'A confidential call costs nothing and changes everything. Steven has helped hundreds of Gawler families through exactly what you are facing.',
    primary: { label: 'Book a free 15-minute call', href: '#book' },
    columns: [
      {
        heading: 'How we help',
        links: [
          { label: 'Divorce & separation', href: '/divorce-separation' },
          { label: 'Parenting & children', href: '/parenting-children' },
          { label: 'Property settlement', href: '/property-settlement' },
          { label: 'Intervention orders', href: '/intervention-domestic-violence-lawyer' },
          { label: 'De facto relationships', href: '/de-facto-relationships' },
          { label: 'Family mediation', href: '/family-mediation' },
        ],
      },
      {
        heading: 'Read first',
        links: [
          { label: 'Divorce in Australia, plainly', href: '/divorce-australia' },
          { label: 'The Separation Checklist (free)', href: '#lead-magnet' },
        ],
      },
    ],
  },
  estates: {
    eyebrow: 'Wills & Estates',
    question: 'Planning what happens next?',
    body: 'A properly prepared Will, Power of Attorney and Advance Care Directive give your family certainty when they need it most.',
    primary: { label: 'Book a free 15-minute call', href: '#book' },
    columns: [
      {
        heading: 'How we help',
        links: [
          { label: 'Wills & probate', href: '/gawler-estate-lawyer' },
          { label: 'Estate planning', href: '/estate-planning' },
          { label: 'Advance care planning', href: '/gawler-estate-planning-lawyers' },
          { label: 'Family & discretionary trusts', href: '/gawler-trust-lawyer' },
          { label: 'Power of attorney', href: '/power-of-attorney' },
        ],
      },
      {
        heading: 'Read first',
        links: [
          { label: 'What every Gawler family should have in place', href: '#lead-magnet' },
        ],
      },
    ],
  },
  property: {
    eyebrow: 'Property',
    question: 'Buying, selling, or in a dispute?',
    body: 'Property decisions are among the biggest you will make. We protect your interests at every step, including conveyancing, leases and disputes.',
    primary: { label: 'Book a free 15-minute call', href: '#book' },
    columns: [
      {
        heading: 'How we help',
        links: [
          { label: 'Property law & conveyancing', href: '/gawler-property-lawyers' },
          { label: 'Building & construction', href: '/gawler-construction-lawyer' },
          { label: 'Retail & commercial leases', href: '/gawler-lease-lawyer' },
          { label: 'Property disputes', href: '/property-disputes' },
        ],
      },
      {
        heading: 'Adjacent help',
        links: [
          { label: 'Business sale & purchase', href: '/gawler-business-lawyers' },
          { label: 'Debt recovery', href: '/gawler-debt-recovery' },
        ],
      },
    ],
  },
  business: {
    eyebrow: 'Business',
    question: 'Running a business in the Gawler region?',
    body: 'Straight legal advice for SMEs across South Australia: from the day you start, through every contract, lease and dispute, to succession and sale.',
    primary: { label: 'Book a free 15-minute call', href: '#book' },
    columns: [
      {
        heading: 'How we help',
        links: [
          { label: 'Commercial & corporate', href: '/gawler-commercial-lawyers' },
          { label: 'Business sale & purchase', href: '/gawler-business-lawyers' },
          { label: 'Commercial leases', href: '/gawler-lease-lawyer' },
          { label: 'Debt recovery', href: '/gawler-debt-recovery' },
          { label: 'Industrial relations', href: '/gawler-industrial-relations-lawyer' },
          { label: 'Insolvency', href: '/gawler-insolvency-lawyer' },
        ],
      },
      {
        heading: 'Also offered',
        links: [
          { label: 'Notarial services', href: '/notary-public-gawler' },
          { label: 'Criminal & traffic', href: '/criminal-defence-lawyer' },
        ],
      },
    ],
  },
}

function useAnchorJump() {
  const router = useRouter()
  const pathname = usePathname()

  return (href: string, onClose: () => void) => {
    if (!href.startsWith('#')) return
    onClose()
    const id = href.slice(1)

    if (document.getElementById(id)) {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
      return
    }

    if (pathname !== '/') {
      router.push(`/${href}`)
    }
  }
}

function Panel({ panel, onClose }: { panel: PanelDef; onClose: () => void }) {
  const handleScrollTo = useAnchorJump()
  return (
    <div className={styles.content}>
      <div className={styles.promo}>
        <span className={styles.eyebrow}>{panel.eyebrow}</span>
        <h3 className={styles.question}>{panel.question}</h3>
        <p className={styles.body}>{panel.body}</p>
        <button
          type="button"
          className={styles.primaryCta}
          onClick={() => handleScrollTo(panel.primary.href, onClose)}
        >
          {panel.primary.label}
          <span aria-hidden>→</span>
        </button>
      </div>

      {panel.columns.map((col) => (
        <div key={col.heading} className={styles.column}>
          <span className={styles.columnHeading}>{col.heading}</span>
          {col.links.map((link) => {
            if (link.href.startsWith('#')) {
              return (
                <button
                  key={link.label}
                  className={styles.linkItem}
                  onClick={() => handleScrollTo(link.href, onClose)}
                >
                  {link.label}
                  <span className={styles.linkArrow} aria-hidden>→</span>
                </button>
              )
            }
            return (
              <Link
                key={link.label}
                href={link.href}
                className={styles.linkItem}
                onClick={onClose}
              >
                {link.label}
                <span className={styles.linkArrow} aria-hidden>→</span>
              </Link>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default function MegaMenu({ activeMenu, onClose, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  useEffect(() => {
    if (!activeMenu) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [activeMenu, onClose])

  const panel = activeMenu ? panels[activeMenu] : null

  return (
    <div
      className={`${styles.overlay} ${activeMenu ? styles.open : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.inner}>
        {panel && <Panel panel={panel} onClose={onClose} />}
      </div>
    </div>
  )
}
