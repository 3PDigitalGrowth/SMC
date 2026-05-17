import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
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
            Steven M Clark Lawyers. 36 years of straight-talking legal advice
            for South Australian families and businesses.
          </p>

          <div className={styles.actions}>
            <Link href="#book" className={styles.primary}>
              Book a free 15-minute call
              <span aria-hidden>→</span>
            </Link>
            <a href="tel:0885226025" className={styles.secondary}>
              or call (08) 8522 6025
            </a>
          </div>
          <p className={styles.offerNote}>
            15 minutes · Free · Confidential · No obligation
          </p>
        </div>
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
