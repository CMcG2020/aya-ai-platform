
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Play, Users, Zap, Target } from 'lucide-react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="hero-section parallax-bg relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-15">
        <div className="relative w-full h-full">
          <Image
            src="/ai-imagery.png"
            alt="Woman working confidently with AI tools"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 z-10"></div>

      <div className="section-container relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Your AI Journey
                <span className="gradient-text"> Starts Here</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Discover, learn, and master AI tools with confidence. 
                Aya empowers women to use artificial intelligence in work, home, learning, and play.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-400">10,000+ Women Empowered</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-400">50+ AI Tools Curated</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-400">Personalized Learning</span>
              </div>
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
            <div className="absolute -top-6 -left-6 bg-background p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                <div>
                  <p className="font-semibold text-sm">AI Writing Assistant</p>
                  <p className="text-xs text-gray-500">Boost productivity</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-sm">Smart Analytics</p>
                  <p className="text-xs text-gray-500">Data insights</p>
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
