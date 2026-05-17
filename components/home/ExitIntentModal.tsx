'use client'

import { useState, useCallback, useEffect } from 'react'
import { useExitIntent } from '@/hooks/useExitIntent'
import styles from './ExitIntentModal.module.css'

export default function ExitIntentModal() {
  const [visible, setVisible] = useState(false)

  const show = useCallback(() => setVisible(true), [])
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
    }, 120)
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
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <span className={styles.eyebrow}>Before you go</span>
        <h2 className={styles.heading}>
          15 free minutes can save weeks of worry.
        </h2>
        <p className={styles.body}>
          Tell us briefly what&apos;s happening. Steven will call you back the same business day
          for a free 15-minute conversation. We&apos;ll tell you whether we can help, and if not,
          point you toward who can. No cost, no pressure.
        </p>
        <div className={styles.actions}>
          <button onClick={handleBook} className={styles.primary}>
            Book a free 15-minute call
            <span aria-hidden>→</span>
          </button>
          <button onClick={() => setVisible(false)} className={styles.secondary}>
            Maybe later
          </button>
        </div>
      </div>
    </div>
  )
}
