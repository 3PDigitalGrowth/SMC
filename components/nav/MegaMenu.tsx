'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import styles from './MegaMenu.module.css'

interface MegaMenuProps {
  activeMenu: string | null
  onClose: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function handleScrollTo(id: string, onClose: () => void) {
  onClose()
  setTimeout(() => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, 100)
}

function FamilyLawPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.content}>
      <div className={styles.promo}>
        <span className={styles.promoLabel}>Most Searched</span>
        <h3 className={styles.promoHeading}>Going through a separation?</h3>
        <p className={styles.promoBody}>
          You don&apos;t have to figure this out alone. A free 30-minute call with our family law team costs nothing and changes everything.
        </p>
        <button
          className={styles.promoCta}
          onClick={() => handleScrollTo('book', onClose)}
        >
          Book Free Consultation
        </button>
        <a
          href="#lead-magnet"
          className={styles.promoLink}
          onClick={(e) => {
            e.preventDefault()
            handleScrollTo('lead-magnet', onClose)
          }}
        >
          Or download our free Separation Checklist
        </a>
      </div>

      <div className={styles.column}>
        <span className={styles.columnHeading}>Family Law Services</span>
        <Link href="/gawler-family-lawyers" className={styles.linkItem} onClick={onClose}>
          <ArrowIcon /> Divorce &amp; Family Law
        </Link>
        <Link href="/gawler-family-lawyers" className={styles.linkItem} onClick={onClose}>
          <ArrowIcon /> Child Custody &amp; Parenting
        </Link>
        <Link href="/gawler-family-lawyers" className={styles.linkItem} onClick={onClose}>
          <ArrowIcon /> Property Settlement
        </Link>
        <Link href="/intervention-domestic-violence-lawyer" className={styles.linkItem} onClick={onClose}>
          <ArrowIcon /> Intervention Orders
        </Link>
        <Link href="/gawler-family-lawyers" className={styles.linkItem} onClick={onClose}>
          <ArrowIcon /> Family Mediation
        </Link>
        <Link href="/gawler-family-lawyers" className={styles.linkItem} onClick={onClose}>
          <ArrowIcon /> De Facto Relationships
        </Link>
      </div>

      <div className={styles.column}>
        <span className={styles.columnHeading}>Free Resources</span>
        <Link href="/divorce-australia" className={styles.resourceCard} onClick={onClose}>
          <div className={styles.resourceCardTitle}>Divorce in Australia: FAQ</div>
          <div className={styles.resourceCardBody}>Common questions answered in plain English.</div>
        </Link>
        <a
          href="#lead-magnet"
          className={styles.resourceCard}
          onClick={(e) => {
            e.preventDefault()
            handleScrollTo('lead-magnet', onClose)
          }}
        >
          <div className={styles.resourceCardTitle}>Free Separation Checklist</div>
          <div className={styles.resourceCardBody}>Know exactly what to do next.</div>
        </a>
      </div>
    </div>
  )
}

function PropertyPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.content}>
      <div className={styles.promo}>
        <span className={styles.promoLabel}>Property Law</span>
        <h3 className={styles.promoHeading}>Buying, selling, or in a dispute?</h3>
        <p className={styles.promoBody}>
          Property decisions are among the biggest you will make. We protect your interests at every step.
        </p>
        <button
          className={styles.promoCta}
          onClick={() => handleScrollTo('book', onClose)}
        >
          Talk to a Property Lawyer
        </button>
      </div>

      <div className={styles.column}>
        <span className={styles.columnHeading}>Property Services</span>
        <Link href="/gawler-property-lawyers" className={styles.linkItem} onClick={onClose}>
          <ArrowIcon /> Property Law
        </Link>
        <Link href="/gawler-construction-lawyer" className={styles.linkItem} onClick={onClose}>
          <ArrowIcon /> Building &amp; Construction
        </Link>
        <Link href="/gawler-lease-lawyer" className={styles.linkItem} onClick={onClose}>
          <ArrowIcon /> Retail &amp; Commercial Leases
        </Link>
      </div>

      <div className={styles.column}>
        <span className={styles.columnHeading}>Related Services</span>
        <Link href="/gawler-business-lawyers" className={styles.linkItem} onClick={onClose}>
          <ArrowIcon /> Business &amp; Purchase Sale
        </Link>
        <Link href="/gawler-commercial-lawyers" className={styles.linkItem} onClick={onClose}>
          <ArrowIcon /> Commercial &amp; Corporate
        </Link>
        <Link href="/gawler-debt-recovery" className={styles.linkItem} onClick={onClose}>
          <ArrowIcon /> Debt Recovery
        </Link>
      </div>
    </div>
  )
}

function WillsPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.content}>
      <div className={styles.promo}>
        <span className={styles.promoLabel}>Estate Planning</span>
        <h3 className={styles.promoHeading}>Is your family protected?</h3>
        <p className={styles.promoBody}>
          A properly prepared Will, Power of Attorney, and Advance Care Directive gives your family certainty when they need it most.
        </p>
        <button
          className={styles.promoCta}
          onClick={() => handleScrollTo('book', onClose)}
        >
          Get Your Will Sorted
        </button>
      </div>

      <div className={styles.column}>
        <span className={styles.columnHeading}>Wills &amp; Estate Services</span>
        <Link href="/gawler-estate-lawyer" className={styles.linkItem} onClick={onClose}>
          <ArrowIcon /> Wills, Probate &amp; Estate Planning
        </Link>
        <Link href="/estate-planning" className={styles.linkItem} onClick={onClose}>
          <ArrowIcon /> Estate Planning
        </Link>
        <Link href="/gawler-estate-planning-lawyers" className={styles.linkItem} onClick={onClose}>
          <ArrowIcon /> Estate &amp; Advance Care Planning
        </Link>
        <Link href="/gawler-trust-lawyer" className={styles.linkItem} onClick={onClose}>
          <ArrowIcon /> Unit, Discretionary &amp; Family Trusts
        </Link>
      </div>

      <div className={styles.column}>
        <a
          href="#lead-magnet"
          className={styles.leadMagnetCard}
          onClick={(e) => {
            e.preventDefault()
            handleScrollTo('lead-magnet', onClose)
          }}
        >
          <div className={styles.leadMagnetHeading}>Free Estate Planning Guide</div>
          <div className={styles.leadMagnetBody}>What every Gawler family should have in place.</div>
          <span className={styles.leadMagnetBtn}>Download Free Guide</span>
        </a>
      </div>
    </div>
  )
}

export default function MegaMenu({ activeMenu, onClose, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (activeMenu) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [activeMenu, onClose])

  return (
    <div
      className={`${styles.overlay} ${activeMenu ? styles.open : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.inner}>
        {activeMenu === 'family' && <FamilyLawPanel onClose={onClose} />}
        {activeMenu === 'property' && <PropertyPanel onClose={onClose} />}
        {activeMenu === 'wills' && <WillsPanel onClose={onClose} />}
      </div>
    </div>
  )
}
