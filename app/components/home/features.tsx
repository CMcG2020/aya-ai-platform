
'use client'

import { useEffect, useRef } from 'react'
import { Brain, Compass, Wrench, Map, BookOpen, Star, TrendingUp } from 'lucide-react'

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null)

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

    const elements = featuresRef.current?.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Brain,
      title: 'The Spark Quiz',
      description: 'Discover your AI potential with our personalized assessment. Get tailored recommendations based on your goals and interests.',
      color: 'from-purple-500 to-pink-500',
      href: '/quiz'
    },
    {
      icon: Compass,
      title: 'Discovery Hub',
      description: 'Explore curated idea cards with quick wins, tool spotlights, and inspiring success stories from women in AI.',
      color: 'from-blue-500 to-indigo-500',
      href: '/discovery'
    },
    {
      icon: Wrench,
      title: 'The Sandbox',
      description: 'Practice with guided recipes and templates. Learn by doing with step-by-step AI prompts and exercises.',
      color: 'from-green-500 to-teal-500',
      href: '/sandbox'
    },
    {
      icon: Map,
      title: 'Pathways',
      description: 'Follow structured learning roadmaps for bigger projects. From side hustles to career advancement.',
      color: 'from-orange-500 to-red-500',
      href: '/pathways'
    },
    {
      icon: BookOpen,
      title: 'AI Toolkit',
      description: 'Browse our vetted directory of AI tools with plain English descriptions, pricing, and real use cases.',
      color: 'from-violet-500 to-purple-500',
      href: '/toolkit'
    },
    {
      icon: TrendingUp,
      title: 'Latest Developments',
      description: 'Stay updated with the latest AI news and developments, curated and explained in easy-to-understand language.',
      color: 'from-cyan-500 to-blue-500',
      href: '/news'
    }
  ]

  return (
    <section className="py-20" ref={featuresRef}>
      <div className="section-container">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Everything You Need to
            <span className="gradient-text"> Master AI</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            From discovery to mastery, Aya provides a complete ecosystem of tools, 
            resources, and guidance tailored specifically for women entering the AI space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            const animationClass = index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
            
            return (
              <div
                key={feature.title}
                className={`card-hover bg-background rounded-2xl p-8 ${animationClass}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p>
                
                <a
                  href={feature.href}
                  className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors"
                >
                  Explore <Star className="ml-2 w-4 h-4" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
