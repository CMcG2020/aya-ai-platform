
import NewsContainer from '@/components/news/news-container'

export const metadata = {
  title: 'Latest AI Developments - Stay Updated | Aya',
  description: 'Stay updated with the latest AI news and developments, curated and explained in easy-to-understand language.',
}

export default function NewsPage() {
  return (
    <div className="min-h-screen py-12">
      <NewsContainer />
    </div>
  )
}
