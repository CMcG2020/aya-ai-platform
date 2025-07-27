
'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ExternalLink, Star, DollarSign, Users, Zap, CheckCircle } from 'lucide-react'

interface ToolCardProps {
  tool: {
    id: string
    name: string
    description: string
    category: string
    pricing: 'free' | 'freemium' | 'paid'
    priceDetails: string
    rating: number
    userCount: string
    website: string
    logo: string
    features: string[]
    useCases: string[]
    pros: string[]
    cons: string[]
  }
  index: number
  viewMode: 'grid' | 'list'
}

const ToolCard = ({ tool, index, viewMode }: ToolCardProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
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

  const getPricingColor = () => {
    switch (tool.pricing) {
      case 'free':
        return 'bg-green-100 text-green-800'
      case 'freemium':
        return 'bg-blue-100 text-blue-800'
      case 'paid':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryColor = () => {
    switch (tool.category) {
      case 'writing':
        return 'bg-blue-100 text-blue-800'
      case 'design':
        return 'bg-pink-100 text-pink-800'
      case 'productivity':
        return 'bg-green-100 text-green-800'
      case 'marketing':
        return 'bg-orange-100 text-orange-800'
      case 'analysis':
        return 'bg-purple-100 text-purple-800'
      case 'automation':
        return 'bg-red-100 text-red-800'
      case 'communication':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (viewMode === 'list') {
    return (
      <div
        ref={cardRef}
        className={`card-hover bg-white rounded-2xl shadow-lg p-6 transition-all duration-500 ${
          isVisible ? 'fade-in visible' : 'fade-in'
        }`}
        style={{ animationDelay: `${index * 50}ms` }}
      >
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Logo and Basic Info */}
          <div className="flex items-start space-x-4 lg:min-w-[300px]">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
              <Image
                src={tool.logo}
                alt={`${tool.name} logo`}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor()}`}>
                  {tool.category}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPricingColor()}`}>
                  {tool.pricing}
                </span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{tool.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{tool.userCount}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description and Features */}
          <div className="flex-1">
            <p className="text-gray-600 mb-4">{tool.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tool.features.slice(0, 3).map((feature, featureIndex) => (
                <span
                  key={featureIndex}
                  className="inline-flex items-center space-x-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                >
                  <CheckCircle className="w-3 h-3" />
                  <span>{feature}</span>
                </span>
              ))}
              {tool.features.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  +{tool.features.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Pricing and CTA */}
          <div className="flex flex-col justify-between lg:min-w-[200px]">
            <div className="text-right mb-4">
              <div className="text-lg font-semibold text-gray-900">{tool.priceDetails}</div>
              <div className="text-sm text-gray-500">per month</div>
            </div>
            <div className="flex flex-col space-y-2">
              <a
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                Try {tool.name}
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="btn-secondary"
              >
                {showDetails ? 'Hide' : 'Show'} Details
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        {showDetails && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Use Cases</h4>
                <ul className="space-y-1">
                  {tool.useCases.map((useCase, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start space-x-2">
                      <Zap className="w-3 h-3 text-purple-500 mt-1 flex-shrink-0" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Pros</h4>
                <ul className="space-y-1">
                  {tool.pros.map((pro, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start space-x-2">
                      <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-3">Considerations</h4>
                <ul className="space-y-1">
                  {tool.cons.map((con, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start space-x-2">
                      <DollarSign className="w-3 h-3 text-red-500 mt-1 flex-shrink-0" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  // Grid view
  return (
    <div
      ref={cardRef}
      className={`card-hover bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ${
        isVisible ? 'fade-in visible' : 'fade-in'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start space-x-4 mb-4">
          <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
            <Image
              src={tool.logo}
              alt={`${tool.name} logo`}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h3>
            <div className="flex flex-wrap gap-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor()}`}>
                {tool.category}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPricingColor()}`}>
                {tool.pricing}
              </span>
            </div>
          </div>
        </div>

        {/* Rating and Users */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{tool.rating}</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <Users className="w-4 h-4" />
            <span>{tool.userCount}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3">{tool.description}</p>

        {/* Features */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {tool.features.slice(0, 3).map((feature, featureIndex) => (
              <span
                key={featureIndex}
                className="inline-flex items-center space-x-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                <CheckCircle className="w-3 h-3" />
                <span>{feature}</span>
              </span>
            ))}
            {tool.features.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                +{tool.features.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-lg font-semibold text-gray-900">{tool.priceDetails}</div>
            <div className="text-sm text-gray-500">per month</div>
          </div>
        </div>

        <div className="space-y-2">
          <a
            href={tool.website}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full btn-primary inline-flex items-center justify-center"
          >
            Try {tool.name}
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full btn-secondary"
          >
            {showDetails ? 'Hide' : 'Show'} Details
          </button>
        </div>

        {/* Detailed Information */}
        {showDetails && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Best For</h4>
                <div className="space-y-1">
                  {tool.useCases.slice(0, 3).map((useCase, index) => (
                    <div key={index} className="text-sm text-gray-600 flex items-start space-x-2">
                      <Zap className="w-3 h-3 text-purple-500 mt-1 flex-shrink-0" />
                      <span>{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ToolCard
