import styles from './Stats.module.css'

interface StatItem {
  value: string
  label: string
}

interface StatsProps {
  items: StatItem[]
}

export default function Stats({ items = [] }: StatsProps) {
  if (items.length === 0) return null
  return (
    <aside className={styles.block}>
      {items.map((item) => (
        <div key={item.label} className={styles.cell}>
          <p className={styles.value}>{item.value}</p>
          <p className={styles.label}>{item.label}</p>
        </div>
      ))}
    </aside>
  )
}
