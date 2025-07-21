
'use client'

import { useState, useEffect } from 'react'
import { Filter, Search, Heart, BookOpen, Lightbulb, Star, TrendingUp } from 'lucide-react'
import IdeaCard from './idea-card'
import { ideaCards } from '@/lib/discovery-data'

const DiscoveryHub = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredCards, setFilteredCards] = useState(ideaCards)

  const categories = [
    { id: 'all', name: 'All Ideas', icon: Star },
    { id: 'quick-wins', name: 'Quick Wins', icon: Lightbulb },
    { id: 'tools', name: 'Tool Spotlights', icon: BookOpen },
    { id: 'success-stories', name: 'Success Stories', icon: Heart },
    { id: 'trends', name: 'Trending', icon: TrendingUp },
  ]

  useEffect(() => {
    let filtered = ideaCards

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(card => card.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(card =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    setFilteredCards(filtered)
  }, [selectedCategory, searchTerm])

  return (
    <div className="section-container">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Discovery <span className="gradient-text">Hub</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore curated AI ideas, tool spotlights, and inspiring success stories. 
          Find your next breakthrough moment with personalized recommendations.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col lg:flex-row gap-6 mb-12">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search ideas, tools, or topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
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
      </div>

      {/* Results Count */}
      <div className="mb-8">
        <p className="text-gray-600">
          Showing <span className="font-semibold">{filteredCards.length}</span> ideas
          {selectedCategory !== 'all' && (
            <span> in <span className="font-semibold">{categories.find(c => c.id === selectedCategory)?.name}</span></span>
          )}
          {searchTerm && (
            <span> for "<span className="font-semibold">{searchTerm}</span>"</span>
          )}
        </p>
      </div>

      {/* Idea Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCards.map((card, index) => (
          <IdeaCard key={card.id} card={card} index={index} />
        ))}
      </div>

      {/* Empty State */}
      {filteredCards.length === 0 && (
        <div className="text-center py-12">
          <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No ideas found</h3>
          <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
          <button
            onClick={() => {
              setSelectedCategory('all')
              setSearchTerm('')
            }}
            className="btn-primary"
          >
            Show All Ideas
          </button>
        </div>
      )}

      {/* Load More */}
      {filteredCards.length > 0 && filteredCards.length >= 9 && (
        <div className="text-center mt-12">
          <button className="btn-secondary">
            Load More Ideas
          </button>
        </div>
      )}
    </div>
  )
}

export default DiscoveryHub
