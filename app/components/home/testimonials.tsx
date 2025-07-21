
'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null)

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

    const elements = testimonialsRef.current?.querySelectorAll('.fade-in')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Marketing Director',
      company: 'Tech Startup',
      image: 'https://i.pinimg.com/originals/5e/e8/73/5ee873f5d772e8c2e4f2acf165f3faed.png',
      quote: 'Aya transformed how I approach my work. The AI tools I discovered have increased my productivity by 40% and made me more confident in my role.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'Freelance Designer',
      company: 'Creative Agency',
      image: 'https://img.freepik.com/premium-photo/smiling-latin-young-professional-business-woman-corporate-marketing-managedigital-tablet-computer_730845-1364.jpg',
      quote: 'The Sandbox section was a game-changer. I learned to use AI for design ideation and client presentations. My business has grown significantly.',
      rating: 5
    },
    {
      name: 'Emma Thompson',
      role: 'Small Business Owner',
      company: 'Retail Store',
      image: 'https://img.freepik.com/premium-photo/woman-entrepreneur-shopkeeper-welcoming-customers-entrance-shop-store_1061358-24572.jpg',
      quote: 'I was intimidated by AI until I found Aya. The personalized pathways helped me automate my inventory management and customer service.',
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50" ref={testimonialsRef}>
      <div className="section-container">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Success Stories from
            <span className="gradient-text"> Amazing Women</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how women like you are using AI to transform their careers, 
            businesses, and daily lives with confidence and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="fade-in bg-white rounded-2xl p-8 shadow-lg card-hover"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-purple-300" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-8 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} profile picture`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-purple-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
