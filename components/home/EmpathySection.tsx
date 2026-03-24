import SectionLabel from '@/components/ui/SectionLabel'
import AnimateIn from '@/components/ui/AnimateIn'
import styles from './EmpathySection.module.css'

const cards = [
  {
    heading: "You don't know what you're entitled to.",
    body: "Most clients are surprised by what the law provides. A free 30-minute call can change your whole perspective.",
  },
  {
    heading: "You're worried about the cost.",
    body: "We are upfront about fees from the very first conversation. No surprises, no hidden charges, ever.",
  },
  {
    heading: "You feel completely alone in this.",
    body: "You are not. We have helped hundreds of Gawler families through exactly what you are facing right now.",
  },
]

export default function EmpathySection() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div>
          <SectionLabel>We Understand</SectionLabel>
          <h2 className={styles.heading}>
            When life falls apart, the last thing you need is a lawyer who makes it harder.
          </h2>
          <p className={styles.body}>
            Family law matters are not just legal problems. They affect your home, your children, your finances, and your sense of who you are. We know that.
          </p>
          <p className={styles.body}>
            Most people who call us have never needed a lawyer before. They are scared, unsure of what comes next, and worried about the cost. That is completely normal. It is exactly why we do things differently.
          </p>
          <p className={styles.body}>
            We listen first. We explain your options in plain language. Then we fight for the outcome that is right for you and your family.
          </p>
          <a href="#why" className={styles.cta}>
            See how we work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div>
          {cards.map((card, index) => (
            <AnimateIn key={index} delay={index * 100}>
              <div className={styles.card}>
                <h3 className={styles.cardHeading}>{card.heading}</h3>
                <p className={styles.cardBody}>{card.body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
