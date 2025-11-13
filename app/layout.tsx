import { Inter } from 'next/font/google'

import type { Metadata } from "next"
import "./globals.css"

import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"

const inter = Inter({
  weight: 'variable'
})

export const metadata: Metadata = {
  title: "🐊 The Gaming Gators @ SFSU",
  description: "The official student-championed e-sports and general gaming organization at SFSU.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
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
