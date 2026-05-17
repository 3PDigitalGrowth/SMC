'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CTA_SLOTS, INLINE_FORM_FIELDS } from '@/lib/cta-config'
import styles from './CTA.module.css'

interface CTAProps {
  slot: 'primary' | 'secondary' | 'inline-form'
}

export default function CTA({ slot }: CTAProps) {
  const cfg = CTA_SLOTS[slot]
  if (!cfg) return null

  if (slot === 'secondary') {
    return (
      <aside className={styles.secondary}>
        <p className={styles.secondaryEyebrow}>{cfg.eyebrow}</p>
        <p className={styles.secondaryHeading}>{cfg.heading}</p>
        <p className={styles.secondaryBody}>{cfg.body}</p>
        <Link href={cfg.href} className={styles.secondaryLink}>
          {cfg.buttonLabel}
          <span aria-hidden>→</span>
        </Link>
      </aside>
    )
  }

  if (slot === 'inline-form') {
    return <InlineForm config={cfg} />
  }

  // primary
  return (
    <aside className={styles.primary}>
      <p className={styles.primaryEyebrow}>{cfg.eyebrow}</p>
      <h3 className={styles.primaryHeading}>{cfg.heading}</h3>
      <p className={styles.primaryBody}>{cfg.body}</p>
      <Link href={cfg.href} className={styles.primaryBtn}>
        {cfg.buttonLabel}
        <span aria-hidden>→</span>
      </Link>
    </aside>
  )
}

function InlineForm({ config }: { config: typeof CTA_SLOTS['inline-form'] }) {
  const [state, setState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')
    setError(null)
    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())
    try {
      const res = await fetch(config.href, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, source: 'blog-inline-form' }),
      })
      if (!res.ok) throw new Error('Submission failed')
      setState('success')
    } catch {
      setState('error')
      setError('Something went wrong. Please call (08) 8522 6025 or try again.')
    }
  }

  if (state === 'success') {
    return (
      <aside className={`${styles.inlineForm} ${styles.inlineFormSuccess}`}>
        <p className={styles.successEyebrow}>Thank you.</p>
        <h3 className={styles.successHeading}>We will be in touch the same business day.</h3>
        <p className={styles.successBody}>
          If your matter is urgent, ring us directly on{' '}
          <a href="tel:0885226025" className={styles.successLink}>(08) 8522 6025</a>.
        </p>
      </aside>
    )
  }

  return (
    <aside className={styles.inlineForm}>
      <p className={styles.primaryEyebrow}>{config.eyebrow}</p>
      <h3 className={styles.primaryHeading}>{config.heading}</h3>
      <p className={styles.primaryBody}>{config.body}</p>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        {INLINE_FORM_FIELDS.map((field) => (
          <label key={field.name} className={styles.field}>
            <span className={styles.fieldLabel}>{field.label}{field.required && ' *'}</span>
            <input
              name={field.name}
              type={field.type}
              required={field.required}
              className={styles.input}
              autoComplete={field.name === 'phone' ? 'tel' : field.name === 'name' ? 'name' : 'off'}
            />
          </label>
        ))}
        {error && <p className={styles.error}>{error}</p>}
        <button
          type="submit"
          className={styles.primaryBtn}
          disabled={state === 'submitting'}
        >
          {state === 'submitting' ? 'Sending…' : config.buttonLabel}
          {state !== 'submitting' && <span aria-hidden>→</span>}
        </button>
      </form>
    </aside>
  )
}
