
'use client'

import { useState } from 'react'
import { Filter, Clock, Users, TrendingUp, Target } from 'lucide-react'
import PathwayCard from './pathway-card'
import { pathways } from '@/lib/pathways-data'

const PathwaysContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Pathways', icon: Target },
    { id: 'foundational-ai', name: 'Foundational AI', icon: TrendingUp },
    { id: 'advanced-ai-ml', name: 'Advanced AI & ML', icon: Users },
    { id: 'data-science-analytics', name: 'Data Science', icon: Filter },
    { id: 'product-management', name: 'Business', icon: TrendingUp },
  ]

  const filteredPathways = pathways
    .filter(pathway => selectedCategory === 'all' || pathway.id === selectedCategory)
    .flatMap(pathway =>
      pathway.courses.map(course => ({
        ...course,
        id: Math.random(), // Temporary fix for unique key
        description: course.summary,
        duration: course.length,
        category: pathway.id,
        difficulty: course.difficulty,
        participants: 1000, // Placeholder
        rating: 4.5, // Placeholder
        modules: 10, // Placeholder
        skills: ['AI', 'Development'], // Placeholder
        outcomes: ['Outcome 1', 'Outcome 2'], // Placeholder
      }))
    )

  return (
    <div className="section-container">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Learning <span className="gradient-text">Pathways</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Follow structured learning roadmaps for bigger AI projects. Whether you're launching
          a side hustle, advancing your career, or mastering new skills, we've got your path mapped out.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(category => {
          const IconComponent = category.icon
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-purple-50 border border-gray-200'
              }`}
            >
              <IconComponent className="w-4 h-4" />
              <span>{category.name}</span>
            </button>
          )
        })}
      </div>

      {/* Results Count */}
      <div className="mb-8">
        <p className="text-gray-600 text-center">
          <span className="font-semibold">{filteredPathways.length}</span> courses available
          {selectedCategory !== 'all' && (
            <span>
              {' '}
              in{' '}
              <span className="font-semibold">
                {categories.find(c => c.id === selectedCategory)?.name}
              </span>
            </span>
          )}
        </p>
      </div>

      {/* Pathways Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredPathways.map((pathway, index) => (
          <PathwayCard key={pathway.id} pathway={pathway} index={index} />
        ))}
      </div>

      {/* Coming Soon */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">More Pathways Coming Soon!</h3>
          <p className="text-gray-600 mb-6">
            We're constantly adding new learning pathways based on community requests and emerging AI trends.
          </p>
          <button className="btn-primary">Request a Pathway</button>
        </div>
      </div>
    </div>
  )
}

export default PathwaysContainer
