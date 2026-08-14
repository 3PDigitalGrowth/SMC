'use client'

import { FormEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { trackLeadCaptured, trackPhoneClick } from '@/lib/analytics'
import { submitBookingForm, honeypotValue } from '@/lib/formHandlers'
import HoneypotField from '@/components/ui/HoneypotField'
import styles from './Hero.module.css'

export type HeroVariant = 'default' | 'band' | 'split' | 'frost' | 'cta'

const variantClasses: Record<HeroVariant, string> = {
  default: '',
  band: styles.heroBand,
  split: styles.heroSplit,
  frost: styles.heroFrost,
  cta: `${styles.heroFrost} ${styles.heroCta}`,
}

export default function Hero({ variant = 'default' }: { variant?: HeroVariant }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    about: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    if (!modalOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [modalOpen])

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
    const hp = honeypotValue(e.currentTarget)
    if (!validate()) return

    setLoading(true)
    try {
      await submitBookingForm({
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        message: form.about.trim(),
        source: variant === 'cta' ? 'homepage_hero_modal' : 'homepage_hero',
        hp,
      })
      trackLeadCaptured('homepage_hero')
      setSuccess(true)
    } catch {
      setErrors({ form: 'Something went wrong. Try again, or call us directly.' })
    } finally {
      setLoading(false)
    }
  }

  const successBlock = (
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
  )

  const formBlock = (
    <form onSubmit={handleSubmit} noValidate className={styles.form}>
      <HoneypotField />
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
  )

  return (
    <section className={`${styles.hero} ${variantClasses[variant]}`.trim()}>
      <div className={styles.backdrop} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={
            variant === 'cta'
              ? '/images/hero-team-portrait-1280.jpg'
              : '/images/home-hero-team.jpg'
          }
          srcSet={
            variant === 'cta'
              ? '/images/hero-team-portrait-1280.jpg 1280w, /images/hero-team-portrait-2333.jpg 2333w'
              : '/images/home-hero-team.jpg 1080w, /images/home-hero-team-2560.jpg 2560w'
          }
          sizes="100vw"
          alt=""
          className={styles.backdropImg}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Gawler · Est. 1985
          </span>

          <h1 className={styles.heading}>
            When something <em>serious</em> has happened, who you call matters.
          </h1>

          <p className={styles.lede}>
            Steven M Clark Lawyers. Straight-talking legal advice
            for South Australian families and businesses.
          </p>

          {variant === 'cta' && (
            <div className={styles.ctaRow}>
              <button
                type="button"
                className={`${styles.primary} ${styles.ctaButton}`}
                onClick={() => setModalOpen(true)}
              >
                Quick enquiry
                <span aria-hidden>→</span>
              </button>
              <a
                href="tel:0885226025"
                className={styles.secondary}
                onClick={() => trackPhoneClick()}
              >
                Prefer to call? (08) 8522 6025
              </a>
            </div>
          )}
        </div>

        {variant !== 'cta' && (
          <aside className={`${styles.contactPanel} ${success ? styles.contactPanelSuccess : ''}`} aria-label="Book a free 15-minute call">
            {success ? successBlock : formBlock}
          </aside>
        )}
      </div>

      {variant === 'cta' && modalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Quick enquiry"
        >
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setModalOpen(false)}
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            {success ? successBlock : formBlock}
          </div>
        </div>
      )}

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
