'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { trackLeadCaptured, trackPhoneClick } from '@/lib/analytics'
import { submitBookingForm } from '@/lib/formHandlers'
import styles from './Hero.module.css'

export default function Hero() {
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

  function validate() {
    const nextErrors: Record<string, string> = {}

    if (!form.name.trim()) nextErrors.name = 'Your name'
    if (!form.phone.trim()) nextErrors.phone = 'Best number'
    if (!form.email.trim()) {
      nextErrors.email = 'Your email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'A valid email'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    try {
      await submitBookingForm({
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        message: form.about.trim(),
        source: 'homepage_hero',
      })
      trackLeadCaptured('homepage_hero')
      setSuccess(true)
    } catch {
      setErrors({ form: 'Something went wrong. Try again, or call us directly.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-office.png"
          alt=""
          className={styles.backdropImg}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Gawler · Est. 1986
          </span>

          <h1 className={styles.heading}>
            When something <em>serious</em> has happened, who you call matters.
          </h1>

          <p className={styles.lede}>
            Steven M Clark Lawyers. Straight-talking legal advice
            for South Australian families and businesses.
          </p>
        </div>

        <aside className={`${styles.contactPanel} ${success ? styles.contactPanelSuccess : ''}`} aria-label="Book a free 15-minute call">
          {success ? (
            <div className={styles.success}>
              <span className={styles.formEyebrow}>Received</span>
              <h2 className={styles.formTitle}>We&apos;ll call you back today.</h2>
              <p className={styles.successText}>
                Your message is with our team. If it&apos;s urgent, call us directly on{' '}
                <a href="tel:0885226025" onClick={() => trackPhoneClick()}>
                  (08) 8522 6025
                </a>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className={styles.form}>
              <span className={styles.formEyebrow}>Free 15-minute call</span>
              <h2 className={styles.formTitle}>Tell us where to reach you.</h2>

              <div className={styles.fields}>
                <label className={styles.field}>
                  <span>{errors.name ?? 'Your name'}</span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                  />
                </label>

                <label className={styles.field}>
                  <span>{errors.phone ?? 'Phone'}</span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    aria-invalid={Boolean(errors.phone)}
                  />
                </label>

                <label className={styles.field}>
                  <span>{errors.email ?? 'Email'}</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                  />
                </label>

                <label className={styles.field}>
                  <span>What&apos;s this about? <em>Optional</em></span>
                  <textarea
                    value={form.about}
                    onChange={(e) => update('about', e.target.value)}
                    rows={3}
                  />
                </label>
              </div>

              {errors.form && <p className={styles.formError}>{errors.form}</p>}

              <button type="submit" className={styles.primary} disabled={loading}>
                {loading ? 'Sending...' : 'Book a free 15-minute call'}
                {!loading && <span aria-hidden>→</span>}
              </button>

              <p className={styles.offerNote}>
                Confidential · No obligation · Same-business-day reply
              </p>

              <a
                href="tel:0885226025"
                className={styles.secondary}
                onClick={() => trackPhoneClick()}
              >
                Prefer to call? (08) 8522 6025
              </a>
            </form>
          )}
        </aside>
      </div>

      <div className={styles.trustRail}>
        <div className={styles.trustInner}>
          {[
            { v: 'Family', l: 'Separation · Children · Settlement', href: '/family' },
            { v: 'Estates', l: 'Wills · Probate · POA', href: '/estates' },
            { v: 'Property', l: 'Conveyancing · Leases · Disputes', href: '/property' },
            { v: 'Business', l: 'Commercial · Notary · Debt', href: '/business' },
            { v: 'Public Notary', l: 'Only one between North Adelaide & Riverland', href: '/notary-public-gawler' },
          ].map((t) => (
            <Link key={t.v} href={t.href} className={styles.trustCell}>
              <span className={styles.trustValue}>
                {t.v}
                <span aria-hidden className={styles.trustArrow}>→</span>
              </span>
              <span className={styles.trustLabel}>{t.l}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
