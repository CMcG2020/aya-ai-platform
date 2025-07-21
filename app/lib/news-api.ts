
export interface NewsArticle {
  id?: string
  title: string
  description?: string
  summary?: string
  url: string
  image?: string
  publishedAt?: string
  source?: string
  author?: string
  category?: string
  trending?: boolean
  keyPoints?: string[]
}

// Mock news data - In production, this would be replaced with real API calls
const mockNewsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'OpenAI Announces Major ChatGPT Update with Enhanced Reasoning Capabilities',
    description: 'OpenAI has released a significant update to ChatGPT, introducing improved logical reasoning and problem-solving abilities that could revolutionize how users interact with AI.',
    summary: 'ChatGPT receives major upgrade with better reasoning, problem-solving, and logical thinking capabilities, making it more useful for complex tasks.',
    url: 'https://i.ytimg.com/vi/1ui0c1QwwMo/maxresdefault.jpg',
    image: 'https://i.ytimg.com/vi/LB4MVdpajsU/maxresdefault.jpg',
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    source: 'OpenAI',
    author: 'OpenAI Team',
    category: 'AI tools',
    trending: true,
    keyPoints: [
      'Enhanced logical reasoning and problem-solving',
      'Better understanding of complex multi-step problems',
      'Improved accuracy in mathematical calculations',
      'Rolling out to Plus and Team users first'
    ]
  },
  {
    id: '2',
    title: 'Google Introduces Gemini for Small Business: AI Made Simple',
    description: 'Google launches a new version of Gemini specifically designed for small businesses, focusing on simplicity and practical applications.',
    summary: 'Google\'s new Gemini for Small Business offers AI tools designed specifically for entrepreneurs and small business owners.',
    url: 'https://i.ytimg.com/vi/3XxmmMF2v1U/maxresdefault.jpg',
    image: 'https://i.ytimg.com/vi/GUQNQnJrabk/maxresdefault.jpg',
    publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(), // 6 hours ago
    source: 'Google',
    author: 'Google AI Team',
    category: 'business',
    keyPoints: [
      'Simplified AI tools for small business owners',
      'Integration with Google Workspace',
      'Automated customer service features',
      'Starting at $10/month per user'
    ]
  },
  {
    id: '3',
    title: 'Stanford Study: Women in AI Leadership Show 40% Better Team Performance',
    description: 'New research from Stanford University reveals that AI teams led by women demonstrate significantly better performance metrics and innovation rates.',
    summary: 'Stanford research shows AI teams with women in leadership roles achieve 40% better performance and higher innovation rates.',
    url: 'https://hai.stanford.edu/news/women-ai-leadership-study',
    image: 'https://media.licdn.com/dms/image/D4E12AQGIBXMrNAuUMQ/article-cover_image-shrink_720_1280/0/1691764090321?e=2147483647&v=beta&t=nw_VTUEt8nusL0t7BdUB8nV8rvw_v0clZemOSYBvQKA',
    publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(), // 12 hours ago
    source: 'Stanford HAI',
    author: 'Dr. Sarah Chen',
    category: 'research',
    keyPoints: [
      '40% improvement in team performance metrics',
      'Higher rates of breakthrough innovations',
      'Better ethical consideration in AI development',
      'Increased team satisfaction and retention'
    ]
  },
  {
    id: '4',
    title: 'Canva Launches Magic Studio: AI Design Suite for Everyone',
    description: 'Canva unveils Magic Studio, a comprehensive AI-powered design suite that democratizes professional design capabilities.',
    summary: 'Canva\'s new Magic Studio brings professional-grade AI design tools to everyday users, making design accessible to everyone.',
    url: 'https://i.ytimg.com/vi/0cxrcQb4csc/maxresdefault.jpg',
    image: 'https://i.ytimg.com/vi/No0TgEzW4Xc/maxresdefault.jpg',
    publishedAt: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(), // 18 hours ago
    source: 'Canva',
    author: 'Canva Design Team',
    category: 'AI tools',
    keyPoints: [
      'One-click background removal and replacement',
      'AI-powered brand kit generation',
      'Automatic design suggestions based on content',
      'Available in free and pro tiers'
    ]
  },
  {
    id: '5',
    title: 'Microsoft Copilot Integration Transforms Workplace Productivity',
    description: 'Companies using Microsoft Copilot report 30% increase in productivity as AI assistants become integral to daily workflows.',
    summary: 'Microsoft Copilot users see 30% productivity boost as AI integration reshapes workplace efficiency.',
    url: 'https://www.onlinetools.directory/content/images/2024/04/DALL-E-2024-04-24-00.45.04---A-realistic-3D-image-representing-a-modern-office-environment-with-diverse-employees-using-advanced-technology.-In-the-foreground--a-young-woman-of-As.webp',
    image: 'https://i.ytimg.com/vi/ui9lzncMOos/maxresdefault.jpg',
    publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    source: 'Microsoft',
    author: 'Microsoft 365 Team',
    category: 'business',
    keyPoints: [
      '30% average increase in productivity',
      'Reduced time on repetitive tasks',
      'Better collaboration and communication',
      'Positive ROI within 3 months of adoption'
    ]
  },
  {
    id: '6',
    title: 'EU Passes Comprehensive AI Ethics Framework',
    description: 'The European Union approves landmark legislation establishing ethical guidelines and safety requirements for AI development and deployment.',
    summary: 'EU implements comprehensive AI ethics framework, setting global standards for responsible AI development.',
    url: 'https://ec.europa.eu/info/ai-ethics-framework',
    image: 'https://i.ytimg.com/vi/Oy9xMoLh1Tw/maxresdefault.jpg',
    publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    source: 'European Commission',
    author: 'EU Digital Policy Team',
    category: 'ethics',
    keyPoints: [
      'Mandatory risk assessments for high-risk AI',
      'Transparency requirements for AI systems',
      'Protection of fundamental rights',
      'Penalties up to 6% of global revenue'
    ]
  },
  {
    id: '7',
    title: 'Anthropic\'s Claude 3 Shows Breakthrough in Long-Context Understanding',
    description: 'Anthropic\'s latest Claude 3 model demonstrates unprecedented ability to understand and work with extremely long documents and conversations.',
    summary: 'Claude 3 achieves breakthrough in processing long documents, handling up to 200,000 tokens with maintained accuracy.',
    url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYoc_chxgKOtb_CujkV4a3Glw0TXJ_Fnl2iLBUVbZe8yTTHQvOA1dNa_WGxYd5cqv4swW1ESy9apkI9eQNAa5_f9pnFLWoC_B-gD0ezcyNmf7kqTdp8wbzJ0kpRdOQakWKBylKYMHeB5SvtRvMWsZvH1W0U0VCJrtWVCAOkAztGrb6Gf5IPH2ZJ1C-HZKY/w1200-h630-p-k-no-nu/Claude3L.jpeg',
    image: 'https://i.ytimg.com/vi/h3mRqlWSEjw/maxresdefault.jpg',
    publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    source: 'Anthropic',
    author: 'Anthropic Research Team',
    category: 'research',
    trending: true,
    keyPoints: [
      'Processes up to 200,000 tokens (150,000 words)',
      'Maintains accuracy throughout long conversations',
      'Better understanding of complex documents',
      'Applications in legal and academic research'
    ]
  },
  {
    id: '8',
    title: 'Female Entrepreneurs Lead AI Startup Funding Growth',
    description: 'Q4 2024 data shows female-founded AI startups securing 35% more funding compared to previous year, breaking industry barriers.',
    summary: 'Women-led AI startups see 35% funding increase in Q4 2024, showing growing investor confidence in female leadership.',
    url: 'https://img.freepik.com/premium-photo/entrepreneurs-presenting-startup-business-plan-investors_1240525-100404.jpg',
    image: 'https://i.ytimg.com/vi/4KOwYB_3qAE/maxresdefault.jpg',
    publishedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days ago
    source: 'Crunchbase',
    author: 'Venture Capital Report',
    category: 'business',
    keyPoints: [
      '35% increase in funding for female-founded AI startups',
      'Growing investor confidence in diverse leadership',
      'Focus on ethical AI and social impact',
      'Average funding round size increasing'
    ]
  },
  {
    id: '9',
    title: 'Adobe Firefly 3 Revolutionizes Creative AI with Ethical Training',
    description: 'Adobe releases Firefly 3, trained exclusively on licensed content, setting new standards for ethical AI in creative industries.',
    summary: 'Adobe Firefly 3 launches with ethical training approach, using only licensed content to respect creators\' rights.',
    url: 'https://i.ytimg.com/vi/pq1K3Bymvb4/maxresdefault.jpg',
    image: 'https://i.ytimg.com/vi/zL1IMIC6E4o/maxresdefault.jpg',
    publishedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
    source: 'Adobe',
    author: 'Adobe Creative Team',
    category: 'AI tools',
    keyPoints: [
      'Trained exclusively on licensed Adobe Stock content',
      'Built-in content credentials and attribution',
      'Enhanced quality and style control',
      'Commercial use protections for creators'
    ]
  }
]

// Simulate API delay and potential failures
const simulateNetworkDelay = () => new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000))

// In a real implementation, this would call actual news APIs
export async function fetchAINews(): Promise<NewsArticle[]> {
  await simulateNetworkDelay()
  
  // Simulate occasional API failures (10% chance)
  if (Math.random() < 0.1) {
    throw new Error('Network error: Failed to fetch news articles')
  }
  
  // Return shuffled articles to simulate fresh content
  const shuffled = [...mockNewsArticles].sort(() => Math.random() - 0.5)
  
  // Categorize articles if they don't have categories
  return shuffled.map(article => ({
    ...article,
    category: article.category || getAutomaticCategory(article.title, article.description || '')
  }))
}

function getAutomaticCategory(title: string, description: string): string {
  const content = (title + ' ' + description).toLowerCase()
  
  if (content.includes('startup') || content.includes('funding') || content.includes('business')) {
    return 'business'
  }
  if (content.includes('research') || content.includes('study') || content.includes('university')) {
    return 'research'
  }
  if (content.includes('ethics') || content.includes('regulation') || content.includes('policy')) {
    return 'ethics'
  }
  if (content.includes('tool') || content.includes('app') || content.includes('platform')) {
    return 'AI tools'
  }
  
  return 'industry'
}
