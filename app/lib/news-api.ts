export interface NewsArticle {
  id?: string;
  title: string;
  description?: string;
  summary?: string;
  url: string;
  image?: string;
  publishedAt?: string;
  source?: string;
  author?: string;
  category?: string;
  trending?: boolean;
  keyPoints?: string[];
}

export async function fetchAINews(): Promise<NewsArticle[]> {
  const res = await fetch(
    'https://newsapi.org/v2/everything?' +
      new URLSearchParams({
        q: 'technology OR tech OR "artificial intelligence" OR AI OR "machine learning" OR crypto OR bitcoin OR blockchain OR ethereum',
        language: 'en',
        sortBy: 'publishedAt',
        pageSize: '12',
        apiKey: 'f818ee6656304c1fbe4a35c15161e912',
      }),
    { next: { revalidate: 43200 } } // update every 12 hours
  );

  const data = await res.json();

  return data.articles.map((article: any) => ({
    id: article.url,
    title: article.title,
    description: article.description,
    summary: article.description,
    url: article.url,
    image: article.urlToImage,
    publishedAt: article.publishedAt,
    source: article.source.name,
    author: article.author,
    category: 'technology', // placeholder
    trending: false, // placeholder
    keyPoints: [], // placeholder
  }));
}