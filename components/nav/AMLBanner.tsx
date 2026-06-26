'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import styles from './AMLBanner.module.css'

const STORAGE_KEY = 'amlBannerDismissed'

export default function AMLBanner() {
  const ref = useRef<HTMLDivElement>(null)
  const [dismissed, setDismissed] = useState(false)

  // Read the per-session dismissal once on mount.
  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === '1') setDismissed(true)
  }, [])

  // Publish the banner height to a CSS variable so the fixed nav and page
  // content can offset by it. Height varies as the notice wraps on narrow
  // screens, so we track it with a ResizeObserver.
  useEffect(() => {
    const root = document.documentElement
    const el = ref.current
    if (dismissed || !el) {
      root.style.setProperty('--aml-banner-h', '0px')
      return
    }
    const apply = () => root.style.setProperty('--aml-banner-h', `${el.offsetHeight}px`)
    apply()
    const ro = new ResizeObserver(apply)
    ro.observe(el)
    return () => ro.disconnect()
  }, [dismissed])

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, '1')
    setDismissed(true)
  }

  if (dismissed) return null

  return (
    <div ref={ref} className={styles.banner} role="region" aria-label="Important notice">
      <div className={styles.inner}>
        <p className={styles.text}>
          <strong className={styles.lead}>Important notice:</strong> From 1 July 2026, new
          Anti-Money Laundering (AML) requirements may mean we need to verify your identity
          and obtain additional information before providing legal services.{' '}
          <Link href="/identity-checks" className={styles.link}>Learn more</Link>
        </p>
        <button type="button" className={styles.close} onClick={dismiss} aria-label="Dismiss notice">
          &times;
        </button>
      </div>
    </div>
  )
}
