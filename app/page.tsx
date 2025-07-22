
import Hero from '@/components/home/hero'
import WelcomeGuide from '@/components/home/welcome-guide'
import Features from '@/components/home/features'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WelcomeGuide />
      <Features />
    </div>
  )
}
