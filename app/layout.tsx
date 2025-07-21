
import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Aya - AI Empowerment for Women',
  description: 'Discover, learn, and master AI tools with confidence. Aya empowers women to use artificial intelligence in work, home, learning, and play.',
  keywords: 'AI, artificial intelligence, women, empowerment, tools, learning, technology',
  authors: [{ name: 'Aya Platform' }],
  openGraph: {
    title: 'Aya - AI Empowerment for Women',
    description: 'Discover, learn, and master AI tools with confidence. Aya empowers women to use artificial intelligence in work, home, learning, and play.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aya - AI Empowerment for Women',
    description: 'Discover, learn, and master AI tools with confidence.',
  },
  robots: 'index, follow',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#9333ea" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
