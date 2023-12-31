import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Conn-Menu',
  description: 'A prettier Harris Menu <3',
}

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-background font-sans antialiased ${fontSans.variable}`}>{children}</body>
    </html>
  )
}
