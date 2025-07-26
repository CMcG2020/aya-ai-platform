'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ExternalLink, Clock, TrendingUp, User, Calendar } from 'lucide-react';
import { NewsArticle } from '@/lib/news-api';

interface NewsCardProps {
  article: NewsArticle;
  index: number;
}

const NewsCard = ({ article, index }: NewsCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 24) {
      if (diffInHours < 1) return 'Just now';
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      if (diffInDays < 7) return `${diffInDays}d ago`;
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(' ').length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

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
          src={
            article.image ||
            'https://www.cxoinsightme.com/wp-content/uploads/2020/07/AI_shutterstock_1722492775-scaled.jpg'
          }
          alt={article.title}
          fill
          className="object-cover"
        />

        {/* Trending Badge */}
        {article.trending && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full flex items-center space-x-1 text-xs">
            <TrendingUp className="w-3 h-3" />
            <span>Trending</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Information */}
        <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            {article.publishedAt && (
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(article.publishedAt)}</span>
              </div>
            )}
            {article.description && (
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{getReadingTime(article.description)}</span>
              </div>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 text-gray-900 line-clamp-2">
          {article.title}
        </h3>

        {/* Description/Summary */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {
            article.summary ||
            article.description ||
            'Stay informed about the latest developments in artificial intelligence and how they impact our daily lives.'
          }
        </p>

        {/* Source and Author */}
        <div className="flex items-center justify-between mb-6">
          {article.source && (
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600 font-medium">
                {article.source}
              </span>
            </div>
          )}
          {article.author && article.author !== article.source && (
            <span className="text-sm text-gray-500">by {article.author}</span>
          )}
        </div>

        {/* Key Points (if available) */}
        {article.keyPoints && article.keyPoints.length > 0 && (
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">Key Points:</h4>
            <ul className="space-y-1">
              {article.keyPoints.slice(0, 3).map((point, pointIndex) => (
                <li
                  key={pointIndex}
                  className="text-sm text-gray-600 flex items-start space-x-2"
                >
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors"
        >
          Read Full Article
          <ExternalLink className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default NewsCard;