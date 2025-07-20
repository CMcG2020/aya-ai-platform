
'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Clock, ArrowRight, Heart, BookOpen, Lightbulb, Users, TrendingUp } from 'lucide-react'

interface IdeaCardProps {
  card: {
    id: number
    title: string
    description: string
    category: string
    readTime: string
    difficulty: 'beginner' | 'intermediate' | 'advanced'
    tags: string[]
    image: string
    link: string
  }
  index: number
}

const IdeaCard = ({ card, index }: IdeaCardProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const getCategoryIcon = () => {
    switch (card.category) {
      case 'quick-wins':
        return <Lightbulb className="w-4 h-4" />
      case 'tools':
        return <BookOpen className="w-4 h-4" />
      case 'success-stories':
        return <Users className="w-4 h-4" />
      case 'trends':
        return <TrendingUp className="w-4 h-4" />
      default:
        return <Lightbulb className="w-4 h-4" />
    }
  }

  const getDifficultyColor = () => {
    switch (card.difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800'
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800'
      case 'advanced':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryColor = () => {
    switch (card.category) {
      case 'quick-wins':
        return 'bg-purple-100 text-purple-800'
      case 'tools':
        return 'bg-blue-100 text-blue-800'
      case 'success-stories':
        return 'bg-pink-100 text-pink-800'
      case 'trends':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div
      ref={cardRef}
      className={`card-hover bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ${
        isVisible ? 'fade-in visible' : 'fade-in'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-video">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover"
        />
        
        {/* Category Badge */}
        <div className={`absolute top-4 left-4 flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor()}`}>
          {getCategoryIcon()}
          <span className="capitalize">{card.category.replace('-', ' ')}</span>
        </div>

        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
            isLiked ? 'bg-pink-500 text-white' : 'bg-white/80 text-gray-600 hover:bg-white'
          }`}
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 text-gray-900 line-clamp-2">
          {card.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {card.description}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{card.readTime}</span>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor()}`}>
              {card.difficulty}
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {card.tags.slice(0, 3).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
          {card.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{card.tags.length - 3} more
            </span>
          )}
        </div>

        {/* CTA */}
        <a
          href={card.link}
          className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors"
        >
          Learn More
          <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  )
}

export default IdeaCard
