import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/footer/Footer'
import SmoothScroll from '@/components/ui/SmoothScroll'
import { LEGAL_SERVICE_JSON_LD } from '@/lib/seo'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://stevenmclark.com.au'),
  title: {
    default: 'Steven M Clark Lawyers, Gawler. Plain-English legal advice since 1986.',
    template: '%s',
  },
  description:
    "Gawler's general law practice since 1986. Family, estates, property, business and Public Notary services.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll />
        <Nav />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: LEGAL_SERVICE_JSON_LD }}
        />
      </body>
    </html>
  )
}
