'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { trackPhoneClick } from '@/lib/analytics'
import Button from '@/components/ui/Button'
import styles from './MobileMenu.module.css'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const sections = [
  {
    title: 'Family',
    hubHref: '/family',
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
    title: 'Estates',
    hubHref: '/estates',
    links: [
      { label: 'Wills & probate', href: '/gawler-estate-lawyer' },
      { label: 'Estate planning', href: '/estate-planning' },
      { label: 'Advance care planning', href: '/gawler-estate-planning-lawyers' },
      { label: 'Family & discretionary trusts', href: '/gawler-trust-lawyer' },
      { label: 'Power of attorney', href: '/power-of-attorney' },
    ],
  },
  {
    title: 'Property',
    hubHref: '/property',
    links: [
      { label: 'Property law & conveyancing', href: '/gawler-property-lawyers' },
      { label: 'Property disputes', href: '/property-disputes' },
      { label: 'Building & construction', href: '/gawler-construction-lawyer' },
      { label: 'Retail & commercial leases', href: '/gawler-lease-lawyer' },
    ],
  },
  {
    title: 'Business',
    hubHref: '/business',
    links: [
      { label: 'Commercial & corporate', href: '/gawler-commercial-lawyers' },
      { label: 'Business sale & purchase', href: '/gawler-business-lawyers' },
      { label: 'Debt recovery', href: '/gawler-debt-recovery' },
      { label: 'Industrial relations', href: '/gawler-industrial-relations-lawyer' },
      { label: 'Insolvency', href: '/gawler-insolvency-lawyer' },
      { label: 'Criminal & traffic', href: '/criminal-defence-lawyer' },
      { label: 'Notarial services', href: '/notary-public-gawler' },
    ],
  },
]

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  const handleBookClick = () => {
    onClose()
    setTimeout(() => {
      const el = document.getElementById('book')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 350)
  }

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`}>
      <div className={styles.head}>
        <div className={styles.wordmark}>
          <span className={styles.wordmarkName}>Steven M Clark</span>
          <span className={styles.wordmarkLabel}>Lawyers · Gawler · Est. 1985</span>
        </div>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className={styles.scrollArea}>
        {sections.map((section) => {
          const isOpenSec = expanded === section.title
          return (
            <div key={section.title} className={styles.accordion}>
              <div className={styles.accordionTrigger}>
                <Link
                  href={section.hubHref}
                  className={styles.accordionLabel}
                  onClick={onClose}
                >
                  {section.title}
                </Link>
                <button
                  className={styles.accordionToggle}
                  onClick={() => setExpanded(isOpenSec ? null : section.title)}
                  aria-expanded={isOpenSec}
                  aria-label={`${isOpenSec ? 'Collapse' : 'Expand'} ${section.title} sub-menu`}
                >
                  <svg
                    className={`${styles.chevron} ${isOpenSec ? styles.chevronOpen : ''}`}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </div>
              <div className={`${styles.subLinks} ${isOpenSec ? styles.subLinksOpen : ''}`}>
                <div className={styles.subLinksInner}>
                  <Link
                    href={section.hubHref}
                    className={`${styles.subLink} ${styles.subLinkHub}`}
                    onClick={onClose}
                  >
                    View all {section.title.toLowerCase()} services →
                  </Link>
                  {section.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={styles.subLink}
                      onClick={onClose}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )
        })}

        <Link href="/about" className={styles.plainLink} onClick={onClose}>About</Link>
        <Link href="/insights" className={styles.plainLink} onClick={onClose}>Insights</Link>
        <Link href="/contact" className={styles.plainLink} onClick={onClose}>Contact</Link>
      </div>

      <div className={styles.foot}>
        <a
          href="tel:0885226025"
          className={styles.phoneNumber}
          onClick={() => trackPhoneClick()}
        >
          (08) 8522 6025
        </a>
        <Button variant="leaf" size="lg" fullWidth onClick={handleBookClick}>
          Book a free 15-minute call
        </Button>
      </div>
    </div>
  )
}
