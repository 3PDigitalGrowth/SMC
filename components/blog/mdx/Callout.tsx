import styles from './Callout.module.css'

type CalloutType = 'info' | 'warning' | 'tip'

interface CalloutProps {
  type?: CalloutType
  children: React.ReactNode
}

const LABELS: Record<CalloutType, string> = {
  info: 'Note',
  warning: 'Heads up',
  tip: 'Tip',
}

export default function Callout({ type = 'info', children }: CalloutProps) {
  return (
    <aside className={`${styles.block} ${styles[type]}`}>
      <span className={styles.label}>{LABELS[type]}</span>
      <div className={styles.body}>{children}</div>
    </aside>
  )
}
