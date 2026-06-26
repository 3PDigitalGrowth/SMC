'use client'

import { useState, useRef, useCallback } from 'react'
import Link from 'next/link'
import { useScrolled } from '@/hooks/useScrolled'
import { trackPhoneClick } from '@/lib/analytics'
import Button from '@/components/ui/Button'
import MegaMenu from './MegaMenu'
import MobileMenu from './MobileMenu'
import styles from './Nav.module.css'

export default function Nav() {
  const scrolled = useScrolled(40)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = useCallback((menu: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setActiveMenu(menu)
  }, [])

  const handleMouseLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 140)
  }, [])

  const handleCloseMenu = useCallback(() => setActiveMenu(null), [])

  const triggers = [
    { label: 'Family', key: 'family', href: '/family' },
    { label: 'Estates', key: 'estates', href: '/estates' },
    { label: 'Property', key: 'property', href: '/property' },
    { label: 'Business', key: 'business', href: '/business' },
  ]

  return (
    <>
      <nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.inner}>
          <Link href="/" className={styles.wordmark} aria-label="Steven M Clark Lawyers, home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/smclogo-web.png"
              alt="Steven M Clark — Barristers, Solicitors, Public Notary"
              className={styles.logo}
            />
          </Link>

          <div className={styles.links}>
            {triggers.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`${styles.link} ${activeMenu === item.key ? styles.linkActive : ''}`}
                onMouseEnter={() => handleMouseEnter(item.key)}
                onClick={handleCloseMenu}
                aria-expanded={activeMenu === item.key}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/insights" className={styles.link}>Insights</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
          </div>

          <div className={styles.right}>
            <a
              href="tel:0885226025"
              className={styles.phone}
              onClick={() => trackPhoneClick()}
            >
              <span className={styles.phoneDot} />
              (08) 8522 6025
            </a>
            <span className={styles.bookBtn}>
              <Button variant="leaf" size="sm" href="#book">
                Free 15-min call
              </Button>
            </span>
            <button
              className={styles.hamburger}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </button>
          </div>
        </div>

        <MegaMenu
          activeMenu={activeMenu}
          onClose={handleCloseMenu}
          onMouseEnter={() => {
            if (closeTimer.current) {
              clearTimeout(closeTimer.current)
              closeTimer.current = null
            }
          }}
          onMouseLeave={handleMouseLeave}
        />
      </nav>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
