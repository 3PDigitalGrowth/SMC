import styles from './ComparisonTable.module.css'

interface ComparisonTableProps {
  headers: string[]
  rows: (string | number)[][]
}

export default function ComparisonTable({ headers = [], rows = [] }: ComparisonTableProps) {
  if (headers.length === 0) return null
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h} className={styles.th}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={styles.row}>
              {row.map((cell, j) => (
                <td key={j} className={styles.td}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
