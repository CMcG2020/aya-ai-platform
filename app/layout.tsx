
import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Aya - AI Empowerment for Women',
  description: 'Discover, learn, and master AI with confidence. The goal of this platform is to empower women to use artificial intelligence in work, home, learning, and play.',
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#9333ea" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
