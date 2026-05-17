import SectionLabel from '@/components/ui/SectionLabel'
import AnimateIn from '@/components/ui/AnimateIn'
import styles from './TeamGrid.module.css'

interface TeamMember {
  name: string
  role: string
  bio?: string
}

interface TeamGridProps {
  eyebrow: string
  heading: React.ReactNode
  members: TeamMember[]
}

export default function TeamGrid({ eyebrow, heading, members }: TeamGridProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <SectionLabel variant="leaf">{eyebrow}</SectionLabel>
          <h2 className={styles.heading}>{heading}</h2>
        </div>

        <ul className={styles.list}>
          {members.map((m, i) => (
            <AnimateIn key={m.name} delay={i * 50}>
              <li className={styles.member}>
                <h3 className={styles.name}>{m.name}</h3>
                <p className={styles.role}>{m.role}</p>
                {m.bio && <p className={styles.bio}>{m.bio}</p>}
              </li>
            </AnimateIn>
          ))}
        </ul>
      </div>
    </section>
  )
}
