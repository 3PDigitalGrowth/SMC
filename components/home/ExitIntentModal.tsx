'use client'

import { useState, useCallback, useEffect } from 'react'
import { useExitIntent } from '@/hooks/useExitIntent'
import Button from '@/components/ui/Button'
import styles from './ExitIntentModal.module.css'

export default function ExitIntentModal() {
  const [visible, setVisible] = useState(false)

  const show = useCallback(() => {
    setVisible(true)
  }, [])

  useExitIntent(show)

  useEffect(() => {
    if (!visible) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setVisible(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [visible])

  function handleBook() {
    setVisible(false)
    setTimeout(() => {
      const el = document.getElementById('book')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  if (!visible) return null

  return (
    <div className={styles.overlay} onClick={() => setVisible(false)}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeBtn}
          onClick={() => setVisible(false)}
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--grey-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <h2 className={styles.heading}>Before you go, let&apos;s talk for free.</h2>
        <p className={styles.body}>
          A 30-minute call costs nothing and could change everything about your situation.
        </p>
        <div className={styles.actions}>
          <Button variant="gold" size="lg" onClick={handleBook}>
            Book Free Call
          </Button>
          <Button variant="ghost" size="lg" onClick={() => setVisible(false)}>
            No thanks, I&apos;ll figure it out
          </Button>
        </div>
      </div>
    </div>
  )
}
