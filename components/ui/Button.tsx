import Link from 'next/link'
import styles from './Button.module.css'

interface ButtonProps {
  variant: 'leaf' | 'ink' | 'quiet' | 'ghost' | 'onDark'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  fullWidth?: boolean
  type?: 'button' | 'submit'
  disabled?: boolean
}

export default function Button({
  variant,
  size = 'md',
  href,
  onClick,
  children,
  fullWidth,
  type = 'button',
  disabled,
}: ButtonProps) {
  const className = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
