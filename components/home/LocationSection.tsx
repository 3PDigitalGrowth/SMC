import SectionLabel from '@/components/ui/SectionLabel'
import styles from './LocationSection.module.css'

function IconPin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function IconClock() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

export default function LocationSection() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div>
          <SectionLabel>Find Us</SectionLabel>
          <h2 className={styles.heading}>Right here in Gawler.</h2>
          <p className={styles.body}>
            Our office is conveniently located on Adelaide Road in Gawler South, with easy parking and accessible entry. We have been part of this community for over 40 years.
          </p>

          <div className={styles.details}>
            <div className={styles.detailRow}>
              <IconPin />
              1 Adelaide Rd, Gawler South SA 5118
            </div>
            <div className={styles.detailRow}>
              <IconPhone />
              <a href="tel:0885226025">(08) 8522 6025</a>
            </div>
            <div className={styles.detailRow}>
              <IconMail />
              <a href="mailto:law@stevenmclark.com.au">law@stevenmclark.com.au</a>
            </div>
            <div className={styles.detailRow}>
              <IconClock />
              Monday to Friday, 9:00am to 5:00pm
            </div>
          </div>

          {/* TODO: Add Google Maps directions URL */}
          <a
            href="#"
            className={styles.directionsLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div>
          {/* TODO: Replace with actual Google Maps embed iframe */}
          <div className={styles.mapPlaceholder}>
            <p>Map placeholder — replace with Google Maps embed</p>
          </div>
        </div>
      </div>
    </section>
  )
}
