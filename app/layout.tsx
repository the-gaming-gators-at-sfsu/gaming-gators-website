import { Inter_Tight } from 'next/font/google'

import type { Metadata } from 'next'
import './globals.css'

import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'

import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

const inter = Inter_Tight({
  weight: 'variable'
})

export const metadata: Metadata = {
  title: '🐊 The Gaming Gators @ San Francisco State',
  description: 'The official student-championed e-sports + general gaming organization at SFSU.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">

      {/* vercel perf and speed analytics */}
      <SpeedInsights />
      <Analytics />

      <body
        className={`${inter.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  )
}
