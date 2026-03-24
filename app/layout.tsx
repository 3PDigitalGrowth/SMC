import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/footer/Footer'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Steven M Clark Legal | Gawler Family Lawyers Since 1985',
  description:
    "Gawler's trusted family law firm. Expert advice on divorce, child custody, property settlement, and intervention orders. Free 30-minute consultation.",
  metadataBase: new URL('https://stevenmclark.com.au'),
  openGraph: {
    title: 'Steven M Clark Legal | Gawler Family Lawyers Since 1985',
    description: 'Calm, expert legal guidance for Gawler families since 1985.',
    url: 'https://stevenmclark.com.au',
    siteName: 'Steven M Clark Legal',
    locale: 'en_AU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU" className={`${playfair.variable} ${lato.variable}`}>
      {/* TODO: Add Google Tag Manager <Script> block once GTM container ID is provided */}
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
