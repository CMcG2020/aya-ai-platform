// app/lib/toolkit-data.ts

export interface ToolkitItem {
  id: string;
  name: string;
  description: string;
  category: string;
  pricing: 'free' | 'freemium' | 'paid';
  priceDetails: string;
  rating: number;
  userCount: string;
  website: string;
  logo: string;
  features: string[];
  useCases: string[];
  pros: string[];
  cons: string[];
}

export const tools: ToolkitItem[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "writing",
    pricing: "freemium",
    priceDetails: "Free with paid plans",
    rating: 4.7,
    userCount: "100M+",
    website: "https://chat.openai.com/",
    logo: "/logos/chatgpt.png",
    description: "Type in any question or task, and ChatGPT will help you write emails, recipes, stories, or even answer everyday questions. No tech skills needed—just chat like you would with a friend.",
    features: ["Natural conversation", "Creative writing", "Email assistance"],
    useCases: [
      "Write professional emails and documents",
      "Brainstorm creative ideas and solutions",
      "Get help with homework or research",
      "Plan meals and organize daily tasks"
    ],
    pros: ["Versatile", "Easy to use", "Creative"],
    cons: ["Can be inaccurate", "Lacks real-time data"]
  },
  {
    id: "canva",
    name: "Canva",
    category: "design",
    pricing: "freemium",
    priceDetails: "Free with paid plans",
    rating: 4.8,
    userCount: "135M+",
    website: "https://www.canva.com/",
    logo: "/logos/canva.png",
    description: "Easily create beautiful invitations, social media posts, or flyers. Canva has ready-made templates and a simple drag-and-drop editor—no design experience needed.",
    features: ["Magic Design", "Background remover", "Brand kit"],
    useCases: [
      "Create stunning social media posts",
      "Design invitations and greeting cards",
      "Make professional presentations",
      "Build your personal brand visuals"
    ],
    pros: ["User-friendly", "Vast template library", "Versatile"],
    cons: ["Limited features on free plan", "Can be slow"]
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
