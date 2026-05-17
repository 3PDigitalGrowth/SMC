import Link from 'next/link'
import styles from './Footer.module.css'

const columns = [
  {
    title: 'Family',
    links: [
      { label: 'Divorce & separation', href: '/divorce-separation' },
      { label: 'Parenting & children', href: '/parenting-children' },
      { label: 'Property settlement', href: '/property-settlement' },
      { label: 'Intervention orders', href: '/intervention-domestic-violence-lawyer' },
    ],
  },
  {
    title: 'Estates',
    links: [
      { label: 'Wills & probate', href: '/gawler-estate-lawyer' },
      { label: 'Estate planning', href: '/estate-planning' },
      { label: 'Power of attorney', href: '/power-of-attorney' },
      { label: 'Advance care planning', href: '/gawler-estate-planning-lawyers' },
      { label: 'Trusts', href: '/gawler-trust-lawyer' },
    ],
  },
  {
    title: 'Property & Business',
    links: [
      { label: 'Property law & conveyancing', href: '/gawler-property-lawyers' },
      { label: 'Property disputes', href: '/property-disputes' },
      { label: 'Commercial leases', href: '/gawler-lease-lawyer' },
      { label: 'Business sale & purchase', href: '/gawler-business-lawyers' },
      { label: 'Commercial & corporate', href: '/gawler-commercial-lawyers' },
      { label: 'Debt recovery', href: '/gawler-debt-recovery' },
      { label: 'Building & construction', href: '/gawler-construction-lawyer' },
    ],
  },
  {
    title: 'More',
    links: [
      { label: 'Criminal & traffic', href: '/criminal-defence-lawyer' },
      { label: 'Personal injury', href: '/gawler-personal-injury-lawyers' },
      { label: 'Motor vehicle accidents', href: '/gawler-compensation-lawyers' },
      { label: 'Dispute resolution', href: '/gawler-dispute-resolution-lawyers' },
      { label: 'Industrial relations', href: '/gawler-industrial-relations-lawyer' },
      { label: 'Insolvency', href: '/gawler-insolvency-lawyer' },
      { label: 'Notary Public', href: '/notary-public-gawler' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.inner}>
          <div className={styles.brandBlock}>
            <Link href="/" className={styles.wordmark}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/smc-logo.png"
                alt="Steven M Clark — Barristers, Solicitors, Public Notary"
                className={styles.logo}
              />
            </Link>
            <p className={styles.tagline}>
              The Gawler firm that&apos;s been on the same street since 1985.
              Family, estates, property, business, and the only Public Notary between
              North Adelaide and the Riverland.
            </p>
            <address className={styles.address}>
              <div>1 Adelaide Rd, Gawler South SA 5118</div>
              <div>Mon–Fri · 9:00am – 5:00pm</div>
              <div><a href="tel:0885226025">(08) 8522 6025</a></div>
              <div><a href="mailto:law@stevenmclark.com.au">law@stevenmclark.com.au</a></div>
              <div>
                <a
                  href="https://maps.app.goo.gl/zKVSLimjnENP8s5Z9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leave a Google review →
                </a>
              </div>
            </address>
          </div>

          <div className={styles.cols}>
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className={styles.colHeading}>{col.title}</h4>
                {col.links.map((link) => (
                  <Link key={link.label} href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.inner}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Steven M Clark Pty Ltd. Liability limited by a scheme approved under Professional Standards Legislation.
          </p>
          <div className={styles.bottomRight}>
            <Link href="/privacy" className={styles.bottomLink}>Privacy</Link>
            <Link href="/terms" className={styles.bottomLink}>Terms</Link>
            <a
              href="https://3pdigital.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bottomLink}
            >
              Website by 3P Digital
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
