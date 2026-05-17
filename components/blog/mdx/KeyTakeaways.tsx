import styles from './KeyTakeaways.module.css'

interface KeyTakeawaysProps {
  items: string[]
}

export default function KeyTakeaways({ items = [] }: KeyTakeawaysProps) {
  if (items.length === 0) return null
  return (
    <aside className={styles.block} aria-label="Key takeaways">
      <p className={styles.eyebrow}>Key takeaways</p>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item} className={styles.item}>{item}</li>
        ))}
      </ul>
    </aside>
  )
}
