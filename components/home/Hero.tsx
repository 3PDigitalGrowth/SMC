import Button from '@/components/ui/Button'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* TODO: Replace CSS background-color with next/image once hero photo is available. Apply navy overlay via absolute positioned div at 60% opacity. */}
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.preTag}>
            Gawler&apos;s Family Law Specialists Since 1985
          </span>

          <h1 className={styles.heading}>
            Protecting Gawler Families For Over <em>40 Years</em>.
          </h1>

          <p className={styles.subheadline}>
            Going through a separation, custody dispute, or legal crisis is one of life&apos;s hardest moments. We provide calm, expert guidance so you always know what to do next.
          </p>

          <div className={styles.ctaRow}>
            <Button variant="gold" size="lg" href="#book">
              Book Your Free Consultation
            </Button>
            <a href="tel:0885226025" className={styles.secondaryBtn}>
              Call (08) 8522 6025
            </a>
          </div>

          <div className={styles.trustStrip}>
            <div className={styles.trustItem}>
              <span className={styles.trustValue}>Est. 1985</span>
              <span className={styles.trustLabel}>In Gawler</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustValue}>40+</span>
              <span className={styles.trustLabel}>Years Experience</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustValue}>Free</span>
              <span className={styles.trustLabel}>First Consultation</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustValue}>100%</span>
              <span className={styles.trustLabel}>Confidential</span>
            </div>
          </div>
        </div>

        <div className={styles.pills}>
          <span className={styles.pill}>Family Law</span>
          <span className={styles.pill}>Property Settlement</span>
          <span className={styles.pill}>Intervention Orders</span>
        </div>

        <div className={styles.scrollCue}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  )
}
