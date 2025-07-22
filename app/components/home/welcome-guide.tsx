'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Lightbulb, GraduationCap, Users, Rocket } from 'lucide-react'

const WelcomeGuide = () => {
  const guideRef = useRef<HTMLDivElement>(null)

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

    const elements = guideRef.current?.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const sections = [
    {
      icon: Lightbulb,
      title: 'What is AI?',
      description: 'Demystify artificial intelligence. Learn about its core concepts, different types, and how it\'s shaping our world, explained in simple, accessible language.',
      animation: 'slide-in-left'
    },
    {
      icon: GraduationCap,
      title: 'Why AI for Women?',
      description: 'Explore the unique opportunities and challenges for women in AI. Understand how AI can empower you in your career, daily life, and personal growth.',
      animation: 'fade-in'
    },
    {
      icon: Users,
      title: 'Our Community',
      description: 'Join a supportive network of women learning and growing with AI. Share experiences, ask questions, and collaborate on projects in a safe and encouraging environment.',
      animation: 'slide-in-right'
    },
    {
      icon: Rocket,
      title: 'Getting Started',
      description: 'Ready to dive in? Discover our personalized Spark Quiz, curated toolkits, and hands-on sandbox exercises designed to kickstart your AI journey.',
      animation: 'fade-in'
    }
  ]

  return (
    <section className="py-20 bg-background" ref={guideRef}>
      <Link href="/more-than-chatgpt" className="block">
        <div className="section-container">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Welcome Guide to
              <span className="gradient-text"> Understanding AI</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Aya is dedicated to making Artificial Intelligence accessible and empowering for all women.
              Start your journey here with foundational knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon
              return (
                <div
                  key={section.title}
                  className={`bg-card rounded-2xl p-8 shadow-lg card-hover ${section.animation}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">{section.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{section.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Link>
    </section>
  )
}

export default WelcomeGuide