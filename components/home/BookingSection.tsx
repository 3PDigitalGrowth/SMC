'use client'

import { useState, FormEvent } from 'react'
import Script from 'next/script'
import { submitBookingForm } from '@/lib/formHandlers'
import { trackPhoneClick, trackLeadCaptured } from '@/lib/analytics'
import SectionLabel from '@/components/ui/SectionLabel'
import styles from './BookingSection.module.css'

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

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    bestTime: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  function validate(): boolean {
    const errs: Record<string, string> = {}
    if (!formData.name.trim()) errs.name = 'Please enter your name.'
    if (!formData.phone.trim()) errs.phone = 'Please enter your phone number.'
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
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
      await submitBookingForm({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        bestTime: formData.bestTime,
        message: formData.message.trim(),
      })
      trackLeadCaptured('homepage_booking')
      setSuccess(true)
    } catch {
      setErrors({ form: 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  function updateField(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="book" className={styles.section}>
      <div className={styles.grid}>
        <div>
          <SectionLabel variant="gold-muted">Book Your Free Consultation</SectionLabel>
          <h2 className={styles.heading}>Your first step costs nothing.</h2>
          <p className={styles.body}>
            Whether you are dealing with a separation, a property matter, or planning for the future, a free 30-minute call with our team is the best place to start.
          </p>

          <div className={styles.ticks}>
            <div className={styles.tick}>
              <TickIcon />
              Completely free, no strings attached
            </div>
            <div className={styles.tick}>
              <TickIcon />
              Confidential, safe, and judgement-free
            </div>
            <div className={styles.tick}>
              <TickIcon />
              Available for all legal matters
            </div>
          </div>

          <div className={styles.contactBlock}>
            <a
              href="tel:0885226025"
              className={styles.contactItem}
              onClick={() => trackPhoneClick()}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              (08) 8522 6025
            </a>
            <a href="mailto:law@stevenmclark.com.au" className={styles.contactItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              law@stevenmclark.com.au
            </a>
            <span className={styles.contactItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              1 Adelaide Rd, Gawler South SA 5118
            </span>
            <p className={styles.note}>
              Prefer to drop in? We welcome walk-ins during business hours.
            </p>
          </div>
        </div>

        <div className={styles.rightCol}>
          {/* Calendly inline embed */}
          {/* TODO: Replace PLACEHOLDER with Steven's Calendly username once account is created */}
          <div className={styles.calendlyCard}>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/PLACEHOLDER/30min"
              style={{ minWidth: '320px', height: '600px' }}
            />
            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="lazyOnload"
            />
          </div>

          <div className={styles.fallback}>
            {success ? (
              <div className={styles.success}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <h3 className={styles.successHeading}>Message sent. We will be in touch.</h3>
                <p className={styles.successBody}>
                  We aim to respond within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className={styles.fallbackHeading}>Or send us a message</h3>

                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="book-name">Name</label>
                  <input
                    id="book-name"
                    type="text"
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className={styles.errorText}>{errors.name}</p>}
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="book-phone">Phone</label>
                  <input
                    id="book-phone"
                    type="tel"
                    className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    placeholder="0400 000 000"
                  />
                  {errors.phone && <p className={styles.errorText}>{errors.phone}</p>}
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="book-email">Email</label>
                  <input
                    id="book-email"
                    type="email"
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className={styles.errorText}>{errors.email}</p>}
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="book-time">Best time to call</label>
                  <select
                    id="book-time"
                    className={styles.select}
                    value={formData.bestTime}
                    onChange={(e) => updateField('bestTime', e.target.value)}
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (9am - 12pm)</option>
                    <option value="afternoon">Afternoon (12pm - 3pm)</option>
                    <option value="late-afternoon">Late Afternoon (3pm - 5pm)</option>
                    <option value="anytime">Any time</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="book-message">Message</label>
                  <textarea
                    id="book-message"
                    className={styles.textarea}
                    value={formData.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    placeholder="Briefly describe your situation..."
                  />
                </div>

                {errors.form && <p className={styles.errorText}>{errors.form}</p>}

                <button type="submit" className={styles.submitBtn} disabled={loading}>
                  {loading ? <SpinnerIcon /> : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
