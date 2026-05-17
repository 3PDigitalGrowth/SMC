'use client'

import { useState, useEffect } from 'react'
import { useScrolled } from '@/hooks/useScrolled'
import { trackPhoneClick } from '@/lib/analytics'
import styles from './StickyCTA.module.css'

export default function StickyCTA() {
  const scrolled = useScrolled(600)
  const [dismissed, setDismissed] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setDismissed(sessionStorage.getItem('stickyCTADismissed') === 'true')
  }, [])

  function handleDismiss() {
    setDismissed(true)
    sessionStorage.setItem('stickyCTADismissed', 'true')
  }

  function handleBook() {
    const el = document.getElementById('book')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const show = mounted && scrolled && !dismissed

  return (
    <div className={`${styles.bar} ${show ? styles.visible : ''}`} role="region" aria-label="Quick contact">
      <a
        href="tel:0885226025"
        className={styles.phone}
        onClick={() => trackPhoneClick()}
      >
        <span className={styles.dot} />
        (08) 8522 6025
      </a>
      <button onClick={handleBook} className={styles.book}>
        Free 15-min call
      </button>
      <button
        className={styles.dismiss}
        onClick={handleDismiss}
        aria-label="Dismiss"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}
