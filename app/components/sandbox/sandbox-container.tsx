
'use client'

import { useState } from 'react'
import { Filter, Search, Play, BookOpen, Zap, Users } from 'lucide-react'
import RecipeCard from './recipe-card'
import RecipeModal from './recipe-modal'
import { recipes } from '@/lib/sandbox-data'

const SandboxContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRecipe, setSelectedRecipe] = useState<typeof recipes[0] | null>(null)

  const categories = [
    { id: 'all', name: 'All Recipes', icon: BookOpen },
    { id: 'writing', name: 'Writing', icon: BookOpen },
    { id: 'productivity', name: 'Productivity', icon: Zap },
    { id: 'marketing', name: 'Marketing', icon: Users },
    { id: 'analysis', name: 'Analysis', icon: Filter },
  ]

  const filteredRecipes = recipes.filter(recipe => {
    const categoryMatch = selectedCategory === 'all' || recipe.category === selectedCategory
    const searchMatch = searchTerm === '' || 
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return categoryMatch && searchMatch
  })

  return (
    <div className="section-container">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          The <span className="gradient-text">Sandbox</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Practice with guided AI recipes and templates. Learn by doing with step-by-step 
          prompts and exercises designed to build your confidence and skills.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col lg:flex-row gap-6 mb-12">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search recipes and templates..."
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
          Showing <span className="font-semibold">{filteredRecipes.length}</span> recipes
          {selectedCategory !== 'all' && (
            <span> in <span className="font-semibold">{categories.find(c => c.id === selectedCategory)?.name}</span></span>
          )}
        </p>
      </div>

      {/* Recipe Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRecipes.map((recipe, index) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            index={index}
            onSelect={() => setSelectedRecipe(recipe)}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredRecipes.length === 0 && (
        <div className="text-center py-12">
          <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No recipes found</h3>
          <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
          <button
            onClick={() => {
              setSelectedCategory('all')
              setSearchTerm('')
            }}
            className="btn-primary"
          >
            Show All Recipes
          </button>
        </div>
      )}

      {/* Recipe Modal */}
      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  )
}

export default SandboxContainer
