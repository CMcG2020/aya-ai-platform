
'use client'

import { useState, useEffect, useRef } from 'react'
import { Clock, Play, BookOpen, Zap, Users, Filter, BarChart } from 'lucide-react'

interface RecipeCardProps {
  recipe: {
    id: number
    title: string
    description: string
    category: string
    duration: string
    difficulty: 'beginner' | 'intermediate' | 'advanced'
    tags: string[]
    steps: number
  }
  index: number
  onSelect: () => void
}

const RecipeCard = ({ recipe, index, onSelect }: RecipeCardProps) => {
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
    switch (recipe.category) {
      case 'writing':
        return <BookOpen className="w-5 h-5" />
      case 'productivity':
        return <Zap className="w-5 h-5" />
      case 'marketing':
        return <Users className="w-5 h-5" />
      case 'analysis':
        return <BarChart className="w-5 h-5" />
      default:
        return <BookOpen className="w-5 h-5" />
    }
  }

  const getCategoryColor = () => {
    switch (recipe.category) {
      case 'writing':
        return 'from-blue-500 to-indigo-500'
      case 'productivity':
        return 'from-green-500 to-teal-500'
      case 'marketing':
        return 'from-pink-500 to-rose-500'
      case 'analysis':
        return 'from-purple-500 to-violet-500'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  const getDifficultyColor = () => {
    switch (recipe.difficulty) {
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
      className={`card-hover bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-500 ${
        isVisible ? 'fade-in visible' : 'fade-in'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={onSelect}
    >
      {/* Header with Icon */}
      <div className={`bg-gradient-to-r ${getCategoryColor()} p-6 text-white`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {getCategoryIcon()}
            <span className="font-medium capitalize">{recipe.category}</span>
          </div>
          <div className="bg-white/20 rounded-lg p-2">
            <Play className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 text-gray-900">
          {recipe.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {recipe.description}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{recipe.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Filter className="w-4 h-4" />
              <span>{recipe.steps} steps</span>
            </div>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor()}`}>
            {recipe.difficulty}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {recipe.tags.slice(0, 3).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
          {recipe.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{recipe.tags.length - 3}
            </span>
          )}
        </div>

        {/* CTA */}
        <button className="w-full btn-primary flex items-center justify-center">
          <Play className="mr-2 w-4 h-4" />
          Start Recipe
        </button>
      </div>
    </div>
  )
}

export default RecipeCard
