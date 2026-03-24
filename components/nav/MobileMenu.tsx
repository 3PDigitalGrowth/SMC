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
    title: 'Family Law',
    links: [
      { label: 'Divorce & Family Law', href: '/gawler-family-lawyers' },
      { label: 'Child Custody & Parenting', href: '/gawler-family-lawyers' },
      { label: 'Property Settlement', href: '/gawler-family-lawyers' },
      { label: 'Intervention Orders', href: '/intervention-domestic-violence-lawyer' },
      { label: 'Family Mediation', href: '/gawler-family-lawyers' },
      { label: 'De Facto Relationships', href: '/gawler-family-lawyers' },
    ],
  },
  {
    title: 'Property',
    links: [
      { label: 'Property Law', href: '/gawler-property-lawyers' },
      { label: 'Building & Construction', href: '/gawler-construction-lawyer' },
      { label: 'Retail & Commercial Leases', href: '/gawler-lease-lawyer' },
      { label: 'Business & Purchase Sale', href: '/gawler-business-lawyers' },
      { label: 'Commercial & Corporate', href: '/gawler-commercial-lawyers' },
    ],
  },
  {
    title: 'Wills & Estates',
    links: [
      { label: 'Wills, Probate & Estate Planning', href: '/gawler-estate-lawyer' },
      { label: 'Estate Planning', href: '/estate-planning' },
      { label: 'Estate & Advance Care Planning', href: '/gawler-estate-planning-lawyers' },
      { label: 'Unit, Discretionary & Family Trusts', href: '/gawler-trust-lawyer' },
    ],
  },
]

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
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
      <button className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <div className={styles.wordmark}>
        <span className={styles.wordmarkName}>Steven M Clark</span>
        <span className={styles.wordmarkLabel}>Legal</span>
        <div className={styles.wordmarkRule} />
      </div>

      <hr className={styles.divider} />

      {sections.map((section) => (
        <div key={section.title} className={styles.accordion}>
          <button
            className={styles.accordionTrigger}
            onClick={() =>
              setExpanded(expanded === section.title ? null : section.title)
            }
            aria-expanded={expanded === section.title}
          >
            {section.title}
            <svg
              className={`${styles.chevron} ${
                expanded === section.title ? styles.chevronOpen : ''
              }`}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div
            className={`${styles.subLinks} ${
              expanded === section.title ? styles.subLinksOpen : ''
            }`}
          >
            <div className={styles.subLinksInner}>
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
      ))}

      <Link href="/our-team" className={styles.plainLink} onClick={onClose}>
        About
      </Link>
      <Link href="/contact-us" className={styles.plainLink} onClick={onClose}>
        Contact
      </Link>

      <hr className={styles.divider} />

      <a
        href="tel:0885226025"
        className={styles.phoneNumber}
        onClick={() => trackPhoneClick()}
      >
        (08) 8522 6025
      </a>

      <Button variant="gold" size="lg" fullWidth onClick={handleBookClick}>
        Book Free Consult
      </Button>
    </div>
  )
}
