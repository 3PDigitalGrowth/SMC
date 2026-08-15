'use client'

import { trackPhoneClick } from '@/lib/analytics'
import styles from './StickyCTA.module.css'

export default function StickyCTA() {
  function handleBook() {
    const el = document.getElementById('book')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={styles.bar} role="region" aria-label="Quick contact">
      <a
        href="tel:0885226025"
        className={styles.phone}
        onClick={() => trackPhoneClick('sticky_cta')}
      >
        <span className={styles.dot} />
        (08) 8522 6025
      </a>
      <button onClick={handleBook} className={styles.book}>
        Free 15-min call
      </button>
    </div>
  )
}
