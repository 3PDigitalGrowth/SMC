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
  const scrolled = useScrolled()
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
    closeTimer.current = setTimeout(() => {
      setActiveMenu(null)
    }, 120)
  }, [])

  const handleCloseMenu = useCallback(() => {
    setActiveMenu(null)
  }, [])

  const navTriggers = [
    { label: 'Family Law', key: 'family' },
    { label: 'Property', key: 'property' },
    { label: 'Wills & Estates', key: 'wills' },
  ]

  return (
    <>
      <nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.inner}>
          <Link href="/" className={styles.wordmark}>
            <span className={styles.wordmarkName}>Steven M Clark</span>
            <span className={styles.wordmarkLabel}>Legal</span>
            <div className={styles.wordmarkRule} />
          </Link>

          <div className={styles.links}>
            {navTriggers.map((item) => (
              <button
                key={item.key}
                className={styles.link}
                onMouseEnter={() => handleMouseEnter(item.key)}
                onClick={() => setActiveMenu(activeMenu === item.key ? null : item.key)}
                aria-expanded={activeMenu === item.key}
              >
                {item.label}
              </button>
            ))}
            <Link href="/our-team" className={styles.link}>
              About
            </Link>
            <Link href="/contact-us" className={styles.link}>
              Contact
            </Link>
          </div>

          <div className={styles.right}>
            <a
              href="tel:0885226025"
              className={styles.phone}
              onClick={() => trackPhoneClick()}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              (08) 8522 6025
            </a>
            <span className={styles.bookBtn}>
              <Button variant="gold" size="sm" href="#book">
                Book Free Consult
              </Button>
            </span>
            <button
              className={styles.hamburger}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <span className={styles.hamburgerLine} />
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
