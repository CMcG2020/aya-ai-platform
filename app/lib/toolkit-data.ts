// app/lib/toolkit-data.ts

export interface ToolkitItem {
  id: string;
  name: string;
  category: string;
  pricing: string;
  rating: number;
  users: string;
  description: string;
  features: string[];
  link: string;
  bestFor: string[];
}

export const tools = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "writing",
    pricing: "freemium",
    rating: 4.7,
    users: "100M+",
    description: "Type in any question or task, and ChatGPT will help you write emails, recipes, stories, or even answer everyday questions. No tech skills needed—just chat like you would with a friend.",
    features: ["Natural conversation", "Creative writing", "Email assistance"],
    link: "https://chat.openai.com/",
    bestFor: [
      "Write professional emails and documents",
      "Brainstorm creative ideas and solutions",
      "Get help with homework or research",
      "Plan meals and organize daily tasks"
    ]
  },
  {
    id: "canva",
    name: "Canva",
    category: "design",
    pricing: "freemium",
    rating: 4.8,
    users: "135M+",
    description: "Easily create beautiful invitations, social media posts, or flyers. Canva has ready-made templates and a simple drag-and-drop editor—no design experience needed.",
    features: ["Magic Design", "Background remover", "Brand kit"],
    link: "https://www.canva.com/",
    bestFor: [
      "Create stunning social media posts",
      "Design invitations and greeting cards",
      "Make professional presentations",
      "Build your personal brand visuals"
    ]
  },
  {
    id: "otter-ai",
    name: "Otter.ai",
    category: "productivity",
    pricing: "freemium",
    rating: 4.6,
    users: "25M+",
    description: "Otter listens to your meetings or classes and writes down what's said, so you can focus on listening instead of taking notes.",
    features: ["Live transcription", "Meeting summaries", "Action items"],
    link: "https://otter.ai/",
    bestFor: [
      "Never miss important meeting details",
      "Focus on conversations without note-taking",
      "Review and share meeting highlights",
      "Track action items and follow-ups"
    ]
  },
  {
    id: "grammarly",
    name: "Grammarly",
    category: "writing",
    pricing: "freemium",
    rating: 4.5,
    users: "30M+",
    description: "Checks your spelling and grammar as you type, helping you write clear and confident messages, emails, or documents.",
    features: ["Grammar checking", "Tone detector", "Plagiarism detection"],
    link: "https://www.grammarly.com/",
    bestFor: [
      "Write error-free emails and messages",
      "Improve your writing tone and clarity",
      "Build confidence in professional communication",
      "Learn better writing habits over time"
    ]
  },
  {
    id: "youper",
    name: "Youper",
    category: "wellness",
    pricing: "freemium",
    rating: 4.7,
    users: "2M+",
    description: "A friendly AI mental health assistant that helps you track your mood, manage anxiety, and practice mindfulness—all in a private, supportive app.",
    features: ["Mood tracking", "Mindfulness exercises", "Anxiety support"],
    link: "https://www.youper.ai/",
    bestFor: [
      "Track and understand your emotions",
      "Practice daily mindfulness and meditation",
      "Manage stress and anxiety naturally",
      "Build better mental health habits"
    ]
  },
  {
    id: "google-lens",
    name: "Google Lens",
    category: "productivity",
    pricing: "free",
    rating: 4.6,
    users: "1B+",
    description: "Point your phone camera at anything—plants, recipes, signs—and Google Lens will tell you what it is or translate it for you.",
    features: ["Image search", "Translation", "Shopping help"],
    link: "https://lens.google/",
    bestFor: [
      "Identify plants, animals, and objects instantly",
      "Translate text in foreign languages",
      "Find similar products while shopping",
      "Copy text from images to your phone"
    ]
  },
  {
    id: "lensa",
    name: "Lensa",
    category: "design",
    pricing: "freemium",
    rating: 4.6,
    users: "10M+",
    description: "Easily enhance your selfies and photos with AI-powered filters and effects. No editing skills required.",
    features: ["Photo enhancement", "AI avatars", "Background blur"],
    link: "https://prisma-ai.com/lensa",
    bestFor: [
      "Create professional-looking profile photos",
      "Enhance selfies for social media",
      "Remove unwanted backgrounds from photos",
      "Generate fun AI avatar versions of yourself"
    ]
  },
  {
    id: "flo",
    name: "Flo",
    category: "wellness",
    pricing: "freemium",
    rating: 4.8,
    users: "50M+",
    description: "Track your period, ovulation, and health with smart predictions and helpful reminders. Private and easy to use.",
    features: ["Cycle tracking", "Health insights", "Symptom logging"],
    link: "https://flo.health/",
    bestFor: [
      "Predict your cycle with accuracy",
      "Track fertility and ovulation",
      "Monitor health symptoms and patterns",
      "Get personalized health insights"
    ]
  },
  {
    id: "duolingo",
    name: "Duolingo",
    category: "learning",
    pricing: "freemium",
    rating: 4.7,
    users: "500M+",
    description: "Learn a new language in just a few minutes a day with fun, bite-sized lessons. Great for travel or personal growth.",
    features: ["Language learning", "Daily streaks", "Speaking practice"],
    link: "https://www.duolingo.com/",
    bestFor: [
      "Learn languages for travel or work",
      "Practice speaking with confidence",
      "Build a daily learning habit",
      "Connect with different cultures"
    ]
  },
  {
    id: "replika",
    name: "Replika",
    category: "wellness",
    pricing: "freemium",
    rating: 4.5,
    users: "10M+",
    description: "Your personal AI companion that learns about you and provides emotional support through conversations. Like having a friend who's always there to listen.",
    features: ["Emotional support", "Personal conversations", "Mood tracking"],
    link: "https://replika.com/",
    bestFor: [
      "Practice conversations and social skills",
      "Get emotional support when feeling lonely",
      "Explore your thoughts and feelings safely",
      "Build confidence in expressing yourself"
    ]
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    category: "productivity",
    pricing: "paid",
    rating: 4.4,
    users: "30M+",
    description: "Integrated AI assistant within Notion that helps with writing, summarizing, and organizing information in your workspace.",
    features: ["Content generation", "Summarization", "Translation"],
    link: "https://www.notion.so/product/ai",
    bestFor: [
      "Organize your life and work in one place",
      "Generate content ideas and outlines",
      "Summarize long documents quickly",
      "Plan projects and track goals"
    ]
  },
  {
    id: "gamma",
    name: "Gamma",
    category: "productivity",
    pricing: "freemium",
    rating: 4.5,
    users: "3M+",
    description: "AI-powered presentation maker that creates beautiful slide decks from simple text prompts with minimal design effort.",
    features: ["AI presentation generation", "Smart templates", "Interactive content"],
    link: "https://gamma.app/",
    bestFor: [
      "Create professional presentations quickly",
      "Design slides without design skills",
      "Present ideas clearly and beautifully",
      "Save hours on presentation formatting"
    ]
  }
];

export const categories = [
  "All Categories",
  "Writing",
  "Design", 
  "Productivity",
  "Wellness",
  "Learning"
];

export const pricingOptions = [
  "All Pricing",
  "Free",
  "Freemium", 
  "Paid"
];
