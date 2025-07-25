
'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Users, Star, ArrowRight, CheckCircle, TrendingUp, Target, Filter } from 'lucide-react'

interface PathwayCardProps {
  pathway: {
    id: number
    title: string
    description: string
    category: string
    duration: string
    difficulty: 'beginner' | 'intermediate' | 'advanced'
    participants: number
    rating: number
    image: string
    modules: number
    skills: string[]
    outcomes: string[]
    link: string
  }
  index: number
}

const PathwayCard = ({ pathway, index }: PathwayCardProps) => {
  const [isVisible, setIsVisible] = useState(false)
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
    switch (pathway.category) {
      case 'business':
        return <TrendingUp className="w-4 h-4" />
      case 'career':
        return <Users className="w-4 h-4" />
      case 'skills':
        return <Filter className="w-4 h-4" />
      default:
        return <Target className="w-4 h-4" />
    }
  }

  const getCategoryColor = () => {
    switch (pathway.category) {
      case 'business':
        return 'bg-green-100 text-green-800'
      case 'career':
        return 'bg-blue-100 text-blue-800'
      case 'skills':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getDifficultyColor = () => {
    switch (pathway.difficulty) {
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

  return (
    <div
      ref={cardRef}
      className={`card-hover bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ${
        isVisible ? 'fade-in visible' : 'fade-in'
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-video">
        <Image
          src={pathway.image}
          alt={pathway.title}
          fill
          className="object-cover"
        />
        
        {/* Category Badge */}
        <div className={`absolute top-4 left-4 flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor()}`}>
          {getCategoryIcon()}
          <span className="capitalize">{pathway.category}</span>
        </div>

        {/* Rating */}
        <div className="absolute top-4 right-4 bg-white/90 rounded-lg px-2 py-1 flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium">{pathway.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 text-gray-900">
          {pathway.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {pathway.description}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{pathway.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{pathway.participants.toLocaleString()}</span>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor()}`}>
            {pathway.difficulty}
          </span>
        </div>

        {/* Skills You'll Learn */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Skills You'll Learn</h4>
          <div className="flex flex-wrap gap-2">
            {pathway.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Key Outcomes */}
        <div className="mb-8">
          <h4 className="font-semibold text-gray-900 mb-3">Key Outcomes</h4>
          <div className="space-y-2">
            {pathway.outcomes.slice(0, 3).map((outcome, outcomeIndex) => (
              <div key={outcomeIndex} className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Info */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Modules</span>
            <span className="font-semibold text-gray-900">{pathway.modules}</span>
          </div>
        </div>

        {/* CTA */}
        <Link
          href={pathway.link}
          className="w-full btn-primary flex items-center justify-center"
        >
          Start Pathway
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export default PathwayCard
