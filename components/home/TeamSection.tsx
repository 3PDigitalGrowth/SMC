import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import styles from './TeamSection.module.css'

export default function TeamSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionLabel>Your Legal Team</SectionLabel>
        <h2 className={styles.sectionHeading}>
          Lawyers who live here, work here, and care about this community.
        </h2>

        <div className={styles.grid}>
          <div>
            {/* TODO: Replace with next/image once photo is available */}
            <div className={styles.photoPlaceholder}>
              <span className={styles.photoInitials}>SC</span>
              {/* Photo: Steven Clark professional portrait, 280x340px */}
            </div>
          </div>

          <div>
            <h3 className={styles.name}>Steven M Clark</h3>
            <p className={styles.title}>Principal Solicitor &amp; Public Notary</p>
            <div className={styles.rule} />
            <p className={styles.bio}>
              Steven has been practising law in Gawler since 1985. With deep roots in the community and an unwavering commitment to his clients, he brings decades of experience across family law, property, wills and estates, and general practice. Steven is known for his approachable manner, plain-speaking advice, and genuine care for every client who walks through his door.
            </p>
            <p className={styles.bio}>
              As the only Public Notary between North Adelaide and the Riverland, Steven also provides notarial services for document authentication, statutory declarations, and international documents. His broad expertise means you get a lawyer who truly understands your whole picture.
            </p>

            <div className={styles.badges}>
              <span className={styles.badge}>Admitted 1983</span>
              <span className={styles.badge}>Public Notary</span>
              <span className={styles.badge}>Gold Alliance Member</span>
            </div>

            <Link href="/our-team" className={styles.teamLink}>
              Meet the full team
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
