
'use client'

import { useState, useEffect } from 'react'
import { Search, Filter, Grid, List } from 'lucide-react'
import dynamic from 'next/dynamic'
import { ToolkitItem } from '@/lib/toolkit-data'

// Dynamically import ToolCard to reduce initial bundle size
const ToolCard = dynamic(() => import('./tool-card'), { ssr: true })

// Load tools data client-side to reduce initial JS bundle
const loadToolsData = async () => {
  const { tools } = await import('@/lib/toolkit-data')
  return tools
}

const ToolkitContainer = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPricing, setSelectedPricing] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [filteredTools, setFilteredTools] = useState<ToolkitItem[]>([])
  const [allTools, setAllTools] = useState<ToolkitItem[]>([])
  const [loading, setLoading] = useState(true)

  const categories = [
    'all', 'writing', 'design', 'productivity', 'marketing', 'analysis', 'automation', 'communication'
  ]

  const pricingOptions = [
    'all', 'free', 'freemium', 'paid'
  ]

  // Load tools data on component mount
  useEffect(() => {
    const loadTools = async () => {
      try {
        const toolsData = await loadToolsData()
        setAllTools(toolsData)
        setFilteredTools(toolsData)
      } catch (error) {
        console.error('Failed to load tools data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadTools()
  }, [])

  useEffect(() => {
    let filtered = allTools

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(tool =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.useCases.some(useCase => useCase.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(tool => tool.category === selectedCategory)
    }

    // Filter by pricing
    if (selectedPricing !== 'all') {
      filtered = filtered.filter(tool => tool.pricing === selectedPricing)
    }

    setFilteredTools(filtered)
  }, [searchTerm, selectedCategory, selectedPricing, allTools])

  return (
    <div className="section-container">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          AI <span className="gradient-text">Toolkit</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover vetted AI tools with plain English descriptions, honest pricing info, 
          and real use cases. No technical jargon - just practical solutions for real problems.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search AI tools, features, or use cases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent min-w-[150px]"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>

          {/* Pricing Filter */}
          <select
            value={selectedPricing}
            onChange={(e) => setSelectedPricing(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent min-w-[120px]"
          >
            {pricingOptions.map(pricing => (
              <option key={pricing} value={pricing}>
                {pricing === 'all' ? 'All Pricing' : pricing.charAt(0).toUpperCase() + pricing.slice(1)}
              </option>
            ))}
          </select>

          {/* View Mode Toggle */}
          <div className="flex border border-gray-300 rounded-xl overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-3 flex items-center space-x-2 transition-colors ${
                viewMode === 'grid'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span>Grid</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-3 flex items-center space-x-2 transition-colors ${
                viewMode === 'list'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <List className="w-4 h-4" />
              <span>List</span>
            </button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-8">
        <p className="text-gray-600">
          Showing <span className="font-semibold">{filteredTools.length}</span> tools
          {selectedCategory !== 'all' && (
            <span> in <span className="font-semibold">{selectedCategory}</span></span>
          )}
          {selectedPricing !== 'all' && (
            <span> with <span className="font-semibold">{selectedPricing}</span> pricing</span>
          )}
        </p>
      </div>

      {/* Tools Grid/List */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : (
        <div className={viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          : 'space-y-6'
        }>
          {filteredTools.map((tool, index) => (
            <ToolCard 
              key={tool.id} 
              tool={tool} 
              index={index}
              viewMode={viewMode}
            />
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && filteredTools.length === 0 && (
        <div className="text-center py-12">
          <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No tools found</h3>
          <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
          <button
            onClick={() => {
              setSearchTerm('')
              setSelectedCategory('all')
              setSelectedPricing('all')
            }}
            className="btn-primary"
          >
            Show All Tools
          </button>
        </div>
      )}

      {/* Load More */}
      {!loading && filteredTools.length > 0 && filteredTools.length >= 12 && (
        <div className="text-center mt-12">
          <button className="btn-secondary">
            Load More Tools
          </button>
        </div>
      )}
    </div>
  )
}

export default ToolkitContainer
