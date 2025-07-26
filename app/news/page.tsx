'use client';

import { useState, useEffect } from 'react';
import NewsContainer from '@/components/news/news-container';
import { fetchAINews, NewsArticle } from '@/lib/news-api';

export default function NewsPage() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);

  useEffect(() => {
    async function getNews() {
      const news = await fetchAINews();
      setArticles(news);
    }
    getNews();
  }, []);

  return (
    <div className="min-h-screen py-12">
      <NewsContainer articles={articles} />
    </div>
  );
}