import SectionLabel from '@/components/ui/SectionLabel'
import PhoneLink from '@/components/ui/PhoneLink'
import AnimateIn from '@/components/ui/AnimateIn'
import styles from './ContactBlock.module.css'

export default function ContactBlock() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <AnimateIn>
            <div className={styles.column}>
              <SectionLabel variant="leaf">Visit</SectionLabel>
              <p className={styles.address}>
                1 Adelaide Road
                <br />
                Gawler South SA 5118
              </p>
              <a
                href="https://maps.google.com/?q=1+Adelaide+Road+Gawler+South+SA+5118"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Open in Maps
                <span aria-hidden>→</span>
              </a>
            </div>
          </AnimateIn>

          <AnimateIn delay={80}>
            <div className={styles.column}>
              <SectionLabel variant="leaf">Call or write</SectionLabel>
              <PhoneLink location="contact_page" className={styles.bigLink}>
                (08) 8522 6025
              </PhoneLink>
              <a href="mailto:law@stevenmclark.com.au" className={styles.bigLink}>
                law@stevenmclark.com.au
              </a>
              <p className={styles.note}>Fax (08) 8312 4960</p>
            </div>
          </AnimateIn>

          <AnimateIn delay={160}>
            <div className={styles.column}>
              <SectionLabel variant="leaf">When we&apos;re here</SectionLabel>
              <p className={styles.hours}>
                Monday to Friday
                <br />
                9:00am to 5:00pm
              </p>
              <p className={styles.note}>
                After-hours appointments by arrangement, including evenings if your week
                does not allow otherwise.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
