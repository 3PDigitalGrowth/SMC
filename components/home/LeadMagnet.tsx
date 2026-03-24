'use client'

import { useState, FormEvent } from 'react'
import { submitLeadForm } from '@/lib/formHandlers'
import { trackLeadCaptured } from '@/lib/analytics'
import SectionLabel from '@/components/ui/SectionLabel'
import styles from './LeadMagnet.module.css'

function TickIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function SpinnerIcon() {
  return (
    <svg className={styles.spinner} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
      <path d="M12 2a10 10 0 0 1 10 10" />
    </svg>
  )
}

export default function LeadMagnet() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  function validate(): boolean {
    const errs: Record<string, string> = {}
    if (!name.trim()) errs.name = 'Please enter your name.'
    if (!email.trim()) {
      errs.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address.'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    try {
      await submitLeadForm({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim() || undefined,
        source: 'homepage_checklist',
      })
      trackLeadCaptured('homepage_checklist')
      setSuccess(true)
    } catch {
      setErrors({ form: 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="lead-magnet" className={styles.section}>
      <div className={styles.grid}>
        <div>
          <SectionLabel>Free Download</SectionLabel>
          <h2 className={styles.heading}>
            The Gawler Family Separation Checklist.
          </h2>
          <p className={styles.body}>
            Not sure where to start after a separation? Download our free checklist and know exactly what steps to take, what documents to gather, and what your rights are, without spending a cent.
          </p>
          <div className={styles.checklist}>
            <div className={styles.checkItem}>
              <TickIcon />
              What documents to gather immediately
            </div>
            <div className={styles.checkItem}>
              <TickIcon />
              How property and assets are typically divided in SA
            </div>
            <div className={styles.checkItem}>
              <TickIcon />
              Your rights when children are involved
            </div>
          </div>
          <p className={styles.finePrint}>
            No spam. We respect your privacy. Unsubscribe any time.
          </p>
        </div>

        <div className={styles.formCard}>
          {success ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className={styles.successHeading}>You&apos;re all set. Check your inbox.</h3>
              <p className={styles.successBody}>We&apos;ve sent the checklist to {email}.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <h3 className={styles.formTitle}>Get your free checklist</h3>

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="lead-name">Full Name</label>
                <input
                  id="lead-name"
                  type="text"
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={validate}
                  placeholder="Your full name"
                />
                {errors.name && <p className={styles.errorText}>{errors.name}</p>}
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="lead-email">Email Address</label>
                <input
                  id="lead-email"
                  type="email"
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={validate}
                  placeholder="you@example.com"
                />
                {errors.email && <p className={styles.errorText}>{errors.email}</p>}
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="lead-phone">Phone (optional)</label>
                <input
                  id="lead-phone"
                  type="tel"
                  className={styles.input}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0400 000 000"
                />
              </div>

              {errors.form && <p className={styles.errorText}>{errors.form}</p>}

              <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? <SpinnerIcon /> : 'Send Me the Free Checklist'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
