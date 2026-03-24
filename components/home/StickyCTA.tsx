'use client'

import { useState, useEffect } from 'react'
import { useScrolled } from '@/hooks/useScrolled'
import { trackPhoneClick } from '@/lib/analytics'
import Button from '@/components/ui/Button'
import styles from './StickyCTA.module.css'

export default function StickyCTA() {
  const scrolled = useScrolled(400)
  const [dismissed, setDismissed] = useState(true)

  useEffect(() => {
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

  const show = scrolled && !dismissed

  return (
    <div className={`${styles.bar} ${show ? styles.visible : ''}`}>
      <a
        href="tel:0885226025"
        className={styles.phone}
        onClick={() => trackPhoneClick()}
      >
        (08) 8522 6025
      </a>
      <Button variant="gold" size="sm" onClick={handleBook}>
        Book Free Consult
      </Button>
      <button
        className={styles.dismiss}
        onClick={handleDismiss}
        aria-label="Dismiss"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}
