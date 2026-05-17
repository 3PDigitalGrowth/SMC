import styles from './SectionLabel.module.css'

interface SectionLabelProps {
  children: React.ReactNode
  variant?: 'leaf' | 'ink' | 'paper' | 'ember'
}

export default function SectionLabel({ children, variant = 'leaf' }: SectionLabelProps) {
  return <p className={`${styles.label} ${styles[variant]}`}>{children}</p>
}
