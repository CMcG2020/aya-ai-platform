import NewsContainer from '@/components/news/news-container';
import { fetchAINews } from '@/lib/news-api';

export default async function NewsPage() {
  const articles = await fetchAINews();

  return (
    <div className="min-h-screen py-12">
      <NewsContainer articles={articles} />
    </div>
  );
}