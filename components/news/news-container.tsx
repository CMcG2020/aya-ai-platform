
'use client'

import { useState, useEffect } from 'react'
import { Search, Calendar, TrendingUp, RefreshCw } from 'lucide-react'
import NewsCard from './news-card'
import { fetchAINews, NewsArticle } from '@/lib/news-api'

const NewsContainer = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    'all', 'AI tools', 'business', 'research', 'ethics', 'industry'
  ]

  useEffect(() => {
    loadNews()
  }, [])

  const loadNews = async () => {
    setLoading(true)
    setError(null)
    try {
      const newsData = await fetchAINews()
      setArticles(newsData)
    } catch (err) {
      setError('Failed to load news. Please try again later.')
      console.error('Error fetching news:', err)
    } finally {
      setLoading(false)
    }
  }

  const filteredArticles = articles.filter(article => {
    const matchesSearch = searchTerm === '' || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary?.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'all' || 
      article.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  return (
    <div className="section-container">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Latest AI <span className="gradient-text">Developments</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest AI news and developments, curated and explained 
          in easy-to-understand language. No technical jargon - just what matters for real people.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search AI news and developments..."
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

          {/* Refresh Button */}
          <button
            onClick={loadNews}
            disabled={loading}
            className="flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Results Count and Date */}
      <div className="flex justify-between items-center mb-8">
        <p className="text-gray-600">
          {loading ? 'Loading...' : (
            <>
              Showing <span className="font-semibold">{filteredArticles.length}</span> articles
              {selectedCategory !== 'all' && (
                <span> in <span className="font-semibold">{selectedCategory}</span></span>
              )}
            </>
          )}
        </p>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>Last updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
              <div className="bg-gray-300 aspect-video"></div>
              <div className="p-6">
                <div className="bg-gray-300 h-4 rounded mb-4"></div>
                <div className="bg-gray-300 h-4 rounded mb-2"></div>
                <div className="bg-gray-300 h-4 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-center py-12">
          <TrendingUp className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">Failed to load news</h3>
          <p className="text-gray-500 mb-6">{error}</p>
          <button onClick={loadNews} className="btn-primary">
            Try Again
          </button>
        </div>
      )}

      {/* News Articles */}
      {!loading && !error && filteredArticles.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <NewsCard key={article.id || index} article={article} index={index} />
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
          <p className="text-gray-500 mb-6">Try adjusting your search terms or category filter</p>
          <button
            onClick={() => {
              setSearchTerm('')
              setSelectedCategory('all')
            }}
            className="btn-primary"
          >
            Show All Articles
          </button>
        </div>
      )}

      {/* Load More (if needed) */}
      {!loading && !error && filteredArticles.length >= 12 && (
        <div className="text-center mt-12">
          <button className="btn-secondary">
            Load More Articles
          </button>
        </div>
      )}
    </div>
  )
}

export default NewsContainer
