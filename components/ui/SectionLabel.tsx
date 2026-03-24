import styles from './SectionLabel.module.css'

interface SectionLabelProps {
  children: React.ReactNode
  variant?: 'gold' | 'gold-muted'
}

export default function SectionLabel({ children, variant = 'gold' }: SectionLabelProps) {
  return (
    <p className={`${styles.label} ${styles[variant]}`}>
      {children}
    </p>
  )
}
