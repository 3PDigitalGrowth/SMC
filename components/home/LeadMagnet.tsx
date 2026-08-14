'use client'

import { useState, FormEvent } from 'react'
import { submitLeadForm, honeypotValue } from '@/lib/formHandlers'
import HoneypotField from '@/components/ui/HoneypotField'
import { trackLeadCaptured } from '@/lib/analytics'
import styles from './LeadMagnet.module.css'

export default function LeadMagnet() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const hp = honeypotValue(e.currentTarget as HTMLFormElement)
    setError('')
    if (!name.trim()) return setError('Please enter your name.')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError('Please enter a valid email.')
    setLoading(true)
    try {
      await submitLeadForm({
        name: name.trim(),
        email: email.trim(),
        source: 'homepage_checklist',
        hp,
      })
      trackLeadCaptured('homepage_checklist')
      setSuccess(true)
    } catch {
      setError('Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="lead-magnet" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>A quiet aside</span>
          <h2 className={styles.heading}>
            Not ready to call yet? <em>Have a read.</em>
          </h2>
          <p className={styles.body}>
            Our short, plainly-written Separation &amp; Estate Planning guides answer the
            questions people ask us in the first conversation. Free, no follow-up calls.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          <HoneypotField />
          {success ? (
            <div className={styles.success}>
              <span className={styles.successMark}>✓</span>
              <p>Sent. Check your inbox in the next minute.</p>
            </div>
          ) : (
            <>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
                aria-label="Name"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                aria-label="Email"
              />
              <button type="submit" className={styles.btn} disabled={loading}>
                {loading ? 'Sending…' : 'Send me the guides'}
              </button>
              {error && <p className={styles.error}>{error}</p>}
            </>
          )}
        </form>
      </div>
    </section>
  )
}
