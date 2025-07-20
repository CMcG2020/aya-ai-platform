
import Hero from '@/components/home/hero'
import Features from '@/components/home/features'
import Testimonials from '@/components/home/testimonials'
import CallToAction from '@/components/home/call-to-action'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
    </div>
  )
}
