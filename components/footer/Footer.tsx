import Link from 'next/link'
import Button from '@/components/ui/Button'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <div className={styles.wordmark}>
            <span className={styles.wordmarkName}>Steven M Clark</span>
            <span className={styles.wordmarkLabel}>Legal</span>
            <div className={styles.wordmarkRule} />
          </div>
          <p className={styles.tagline}>Serving Gawler families since 1985.</p>
          {/* TODO: Add Facebook page URL */}
          <a
            href="#"
            className={styles.social}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>

        <div>
          <h4 className={styles.colHeading}>Family Law</h4>
          <Link href="/gawler-family-lawyers" className={styles.footerLink}>
            Divorce &amp; Family Law
          </Link>
          <Link href="/gawler-family-lawyers" className={styles.footerLink}>
            Child Custody &amp; Parenting
          </Link>
          <Link href="/gawler-family-lawyers" className={styles.footerLink}>
            Property Settlement
          </Link>
          <Link href="/intervention-domestic-violence-lawyer" className={styles.footerLink}>
            Intervention Orders
          </Link>
          <Link href="/divorce-australia" className={styles.footerLink}>
            Divorce in Australia
          </Link>
          <Link href="/gawler-family-lawyers" className={styles.footerLink}>
            Family Mediation
          </Link>
        </div>

        <div>
          <h4 className={styles.colHeading}>All Services</h4>
          <Link href="/gawler-property-lawyers" className={styles.footerLink}>
            Property Law
          </Link>
          <Link href="/gawler-estate-lawyer" className={styles.footerLink}>
            Wills &amp; Estate Planning
          </Link>
          <Link href="/gawler-criminal-lawyer" className={styles.footerLink}>
            Criminal Defence
          </Link>
          <Link href="/gawler-business-lawyers" className={styles.footerLink}>
            Business &amp; Commercial
          </Link>
          <Link href="/gawler-personal-injury-lawyer" className={styles.footerLink}>
            Personal Injury
          </Link>
          <Link href="/contact-us" className={styles.footerLink}>
            Notary Public
          </Link>
        </div>

        <div>
          <h4 className={styles.colHeading}>Get In Touch</h4>
          <span className={styles.contactItem}>
            1 Adelaide Rd, Gawler South SA 5118
          </span>
          <a href="tel:0885226025" className={styles.footerLink}>
            (08) 8522 6025
          </a>
          <a href="mailto:law@stevenmclark.com.au" className={styles.footerLink}>
            law@stevenmclark.com.au
          </a>
          <div style={{ marginTop: '20px' }}>
            <Button variant="gold" size="sm" href="#book" fullWidth>
              Book Free Consult
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          &copy; 2026 Steven M Clark Pty Ltd. All rights reserved. Liability limited by a scheme approved under Professional Standards Legislation.
        </p>
        <a
          href="https://3pdigital.com.au"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.credit}
        >
          Website by 3P Digital
        </a>
      </div>
    </footer>
  )
}
