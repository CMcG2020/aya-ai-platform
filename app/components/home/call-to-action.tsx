
'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react'

const CallToAction = () => {
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = ctaRef.current?.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const benefits = [
    'Personalized AI tool recommendations',
    'Step-by-step learning pathways',
    'Supportive community of women',
    'Real-world project templates',
    'Latest AI news and trends'
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white relative overflow-hidden" ref={ctaRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute top-20 right-20">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="absolute bottom-20 left-20">
          <Sparkles className="w-10 h-10" />
        </div>
        <div className="absolute bottom-10 right-10">
          <Sparkles className="w-4 h-4" />
        </div>
      </div>

      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 slide-in-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Relationship with AI?
              </h2>
              <p className="text-xl text-purple-100 leading-relaxed">
                Join thousands of women who have discovered the power of AI. 
                Take our Spark Quiz and get your personalized AI journey started today.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                  <span className="text-purple-100">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                href="/quiz"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
                href="/discovery"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                Explore Platform
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative slide-in-right">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://c8.alamy.com/comp/2R4RNPR/excited-young-woman-holding-laptop-computer-and-celebrating-success-isolated-on-white-background-2R4RNPR.jpg"
                alt="Woman celebrating AI success"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 left-6 right-6 bg-white text-gray-900 p-6 rounded-xl shadow-lg">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-600">10K+</div>
                  <div className="text-sm text-gray-600">Women Empowered</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">AI Tools</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
