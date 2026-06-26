'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import ArtImage from '@/components/ui/ArtImage'
import { IMAGES } from '@/lib/images'
import { submitBookingForm } from '@/lib/formHandlers'
import { trackPhoneClick, trackLeadCaptured } from '@/lib/analytics'
import styles from './Booking.module.css'

export default function Booking() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    about: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function validate(): boolean {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Your name'
    if (!form.phone.trim()) errs.phone = 'Best number to reach you'
    if (!form.email.trim()) {
      errs.email = 'Your email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'A valid email'
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
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        message: form.about.trim(),
        source: 'homepage_booking',
      })
      trackLeadCaptured('homepage_booking')
      setSuccess(true)
    } catch {
      setErrors({ form: 'Something went wrong. Try again, or call us directly.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="book" className={styles.section}>
      <div className={styles.backdrop} aria-hidden>
        <ArtImage
          src={IMAGES.bookingBackdrop.src}
          alt=""
          caption={IMAGES.bookingBackdrop.caption}
          fill
          treatment="pan"
          sizes="100vw"
        />
        <div className={styles.tint} />
      </div>

      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>15 minutes · Free · Confidential</span>
          <h2 className={styles.heading}>
            We&apos;ll call you back the <em>same business day</em>.
          </h2>
          <p className={styles.lede}>
            Tell us briefly what&apos;s happening. Steven will call you back for a free
            15-minute conversation, the same business day. No obligation, no pressure to
            engage us afterwards.
          </p>
          <div className={styles.contactRow}>
            <a
              href="tel:0885226025"
              className={styles.contactItem}
              onClick={() => trackPhoneClick()}
            >
              <span className={styles.contactLabel}>By phone</span>
              <span className={styles.contactValue}>(08) 8522 6025</span>
            </a>
            <a href="mailto:law@stevenmclark.com.au" className={styles.contactItem}>
              <span className={styles.contactLabel}>By email</span>
              <span className={styles.contactValue}>law@stevenmclark.com.au</span>
            </a>
            <span className={styles.contactItem}>
              <span className={styles.contactLabel}>In person</span>
              <span className={styles.contactValue}>1 Adelaide Rd, Gawler South</span>
            </span>
          </div>
          <p className={styles.amlNote}>
            For certain matters, new national rules mean we verify your identity before we
            start acting.{' '}
            <Link href="/identity-checks" className={styles.amlLink}>
              What to expect &rarr;
            </Link>
          </p>
        </div>

        <div className={`${styles.panel} ${success ? styles.panelSuccess : ''}`}>
          <div className={`${styles.formFace} ${success ? styles.faceHidden : ''}`}>
            <form onSubmit={handleSubmit} noValidate className={styles.form}>
              <h3 className={styles.formTitle}>Request a callback</h3>

              <div className={styles.fields}>
                <div className={styles.field}>
                  <input
                    id="b-name"
                    type="text"
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder=" "
                  />
                  <label htmlFor="b-name" className={styles.label}>
                    {errors.name ?? 'Your name'}
                  </label>
                </div>

                <div className={styles.field}>
                  <input
                    id="b-phone"
                    type="tel"
                    className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder=" "
                  />
                  <label htmlFor="b-phone" className={styles.label}>
                    {errors.phone ?? 'Phone'}
                  </label>
                </div>

                <div className={styles.field}>
                  <input
                    id="b-email"
                    type="email"
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder=" "
                  />
                  <label htmlFor="b-email" className={styles.label}>
                    {errors.email ?? 'Email'}
                  </label>
                </div>

                <div className={styles.field}>
                  <textarea
                    id="b-about"
                    className={styles.textarea}
                    value={form.about}
                    onChange={(e) => update('about', e.target.value)}
                    placeholder=" "
                    rows={3}
                  />
                  <label htmlFor="b-about" className={styles.label}>
                    A line on what it&apos;s about (optional)
                  </label>
                </div>
              </div>

              {errors.form && <p className={styles.formError}>{errors.form}</p>}

              <button type="submit" className={styles.submit} disabled={loading}>
                {loading ? 'Sending…' : 'Send'}
                {!loading && <span aria-hidden>→</span>}
              </button>

              <p className={styles.fine}>
                Confidential. Used only to reply to you.
              </p>
            </form>
          </div>

          <div
            className={`${styles.successFace} ${success ? styles.faceVisible : ''}`}
            aria-live="polite"
          >
            <span className={styles.successEyebrow}>Received</span>
            <h3 className={styles.successHeading}>
              Thank you. We&apos;ll be in touch <em>today</em>.
            </h3>
            <p className={styles.successBody}>
              Your message is with our team. If it&apos;s urgent, you&apos;re welcome to call
              us directly on <a href="tel:0885226025">(08) 8522 6025</a>.
            </p>
            <div className={styles.signature}>
              <span className={styles.signatureName}>Steven M Clark</span>
              <span className={styles.signatureTitle}>Principal Solicitor &amp; Public Notary</span>
            </div>
            <p className={styles.successFooter}>
              If we&apos;ve helped you before,{' '}
              <a
                href="https://maps.app.goo.gl/zKVSLimjnENP8s5Z9"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.successFooterLink}
              >
                a Google review means a lot to a small firm →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
