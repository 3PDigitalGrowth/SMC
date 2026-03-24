import SectionLabel from '@/components/ui/SectionLabel'
import AnimateIn from '@/components/ui/AnimateIn'
import styles from './WhyUs.module.css'

const blocks = [
  {
    number: '01',
    title: 'We actually listen.',
    body: 'Your first consultation is about understanding your situation completely before we offer a single piece of advice. No rushing, no assumptions.',
  },
  {
    number: '02',
    title: 'Plain English, always.',
    body: 'We explain every step in language that makes sense. You will always know what is happening and why, without needing a law degree.',
  },
  {
    number: '03',
    title: 'Locally based, locally committed.',
    body: 'Our lawyers live and work in Gawler. We know the local courts, the local context, and this community deeply.',
  },
  {
    number: '04',
    title: 'Transparent fees from day one.',
    body: 'We discuss costs clearly and upfront. No surprises on your invoice. If anything changes, we tell you before it does.',
  },
]

const stats = [
  '40+ Years in Gawler',
  'Hundreds of Families Helped',
  'Free Initial Consultation',
  '100% Confidential',
]

export default function WhyUs() {
  return (
    <section id="why" className={styles.section}>
      <div className={styles.container}>
        <SectionLabel variant="gold-muted">Why Steven M Clark Legal</SectionLabel>
        <h2 className={styles.heading}>
          The Gawler firm that has been here for this community since 1985.
        </h2>

        <div className={styles.grid}>
          {blocks.map((block, index) => (
            <AnimateIn key={index} delay={index * 100}>
              <div>
                <div className={styles.number}>{block.number}</div>
                <h3 className={styles.blockTitle}>{block.title}</h3>
                <p className={styles.blockBody}>{block.body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <div className={styles.statStrip}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.stat}>
              <span className={styles.statText}>{stat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
