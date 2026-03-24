import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimateIn from '@/components/ui/AnimateIn'
import Button from '@/components/ui/Button'
import styles from './ServicesGrid.module.css'

const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18M3 12h18M5 5l14 14M19 5L5 19" />
      </svg>
    ),
    label: 'Most Requested',
    title: 'Family Law & Divorce',
    body: 'Separation is hard enough without confusing legal advice. We guide you through divorce, property settlement, and parenting arrangements with real care.',
    href: '/gawler-family-lawyers',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: null,
    title: 'Child Custody & Parenting',
    body: "Your children's wellbeing comes first. We help you reach parenting arrangements and custody plans that genuinely work for your family's future.",
    href: '/gawler-family-lawyers',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    label: null,
    title: 'Property Settlement',
    body: 'Dividing property after a relationship ends can be complex and stressful. We protect your financial interests and work toward a fair, lasting outcome.',
    href: '/gawler-family-lawyers',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: 'Urgent Help Available',
    title: 'Intervention Orders',
    body: 'If you need protection, we can help immediately. We handle intervention orders with the urgency, discretion, and sensitivity your situation demands.',
    href: '/intervention-domestic-violence-lawyer',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    label: null,
    title: 'Wills & Estate Planning',
    body: 'Protect your family\'s future with a properly prepared Will, Power of Attorney, and Advance Care Directive. We make estate planning simple and clear.',
    href: '/gawler-estate-lawyer',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    label: null,
    title: 'All Areas of Practice',
    body: 'We also assist with property law, criminal defence, business and commercial law, personal injury, commercial leases, and notarial services.',
    href: '/contact-us',
  },
]

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export default function ServicesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <SectionLabel>How We Help</SectionLabel>
        <h2 className={styles.heading}>
          Expert legal guidance across every area that matters.
        </h2>
        <p className={styles.intro}>
          Whether you are facing a family dispute, planning your estate, or need urgent legal protection, we are here to help you through it.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((service, index) => (
          <AnimateIn key={index} delay={index * 80}>
            <div className={styles.card}>
              <div className={styles.accentBar} />
              <div className={styles.cardContent}>
                <div className={styles.iconCircle}>
                  {service.icon}
                </div>
                {service.label && (
                  <SectionLabel>{service.label}</SectionLabel>
                )}
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardBody}>{service.body}</p>
                <Link href={service.href} className={styles.cardLink}>
                  Learn more <ArrowIcon />
                </Link>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>

      <div className={styles.bottomCta}>
        <Button variant="navy" size="lg" href="#book">
          Not sure where to start? Let&apos;s talk.
        </Button>
      </div>
    </section>
  )
}
