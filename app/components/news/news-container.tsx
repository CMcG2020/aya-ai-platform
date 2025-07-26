'use client';

import { useState } from 'react';
import { Search, Calendar, TrendingUp, RefreshCw } from 'lucide-react';
import NewsCard from './news-card';
import { NewsArticle } from '@/lib/news-api';

interface NewsContainerProps {
  articles: NewsArticle[];
}

const NewsContainer = ({ articles }: NewsContainerProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all',
    'AI tools',
    'business',
    'research',
    'ethics',
    'industry',
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      searchTerm === '' ||
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'all' || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="section-container">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Latest AI <span className="gradient-text">Developments</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest AI news and developments, curated and
          explained in easy-to-understand language. No technical jargon - just
          what matters for real people.
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
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === 'all'
                  ? 'All Categories'
                  : category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Count and Date */}
      <div className="flex justify-between items-center mb-8">
        <p className="text-gray-600">
          Showing <span className="font-semibold">{filteredArticles.length}</span>{' '}
          articles
          {selectedCategory !== 'all' && (
            <span>
              {' '}
              in <span className="font-semibold">{selectedCategory}</span>
            </span>
          )}
        </p>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>Last updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      {/* News Articles */}
      {filteredArticles.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <NewsCard key={article.id || index} article={article} index={index} />
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No articles found
          </h3>
          <p className="text-gray-500 mb-6">
            Try adjusting your search terms or category filter
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
            className="btn-primary"
          >
            Show All Articles
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsContainer;