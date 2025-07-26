'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="hero-section relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ai-imagery.png"
          alt="AI Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-purple-800/70 to-pink-800/80"></div>
      </div>

      <div className="section-container relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                Your AI Journey
                <span className="text-white"> Starts Here</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Simplifying the tech world and making AI less intimidating. Aya gathers all the essential AI resources in one place, making it easier for women to confidently integrate artificial intelligence into their everyday lives - from work and home to learning and personal growth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quiz" className="btn-primary inline-flex items-center justify-center">
                Take the Spark Quiz
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <button className="btn-secondary inline-flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className={`relative ${isVisible ? 'slide-in-right visible' : 'slide-in-right'}`}>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://img.freepik.com/premium-photo/group-professional-women-collaborating-laptop-modern-office_1297820-2893.jpg?w=996"
                alt="Women empowered by AI technology"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                <div>
                  <p className="font-semibold text-sm text-gray-800">Understanding AI</p>
                  <p className="text-xs text-gray-600">Boost productivity</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-sm text-gray-800">Why should I care?</p>
                  <p className="text-xs text-gray-600">Get insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
