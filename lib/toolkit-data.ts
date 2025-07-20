
export const tools = [
  {
    id: 1,
    name: "ChatGPT",
    description: "The most popular AI writing assistant that helps with everything from emails to creative writing. Perfect for beginners and versatile enough for advanced users.",
    category: "writing",
    pricing: "freemium" as const,
    priceDetails: "Free - $20",
    rating: 4.7,
    userCount: "100M+",
    website: "https://i.pinimg.com/originals/1e/6d/37/1e6d376832472223bc1ec26f6540a3b5.jpg",
    logo: "https://thumbs.dreamstime.com/b/minsk-belarus-openai-chatgpt-logo-artifical-chatbot-system-chat-bot-button-web-app-phone-icon-symbol-editorial-vector-278857334.jpg",
    features: ["Natural conversation", "Code generation", "Creative writing", "Translation", "Analysis"],
    useCases: [
      "Write professional emails and documents",
      "Brainstorm creative ideas and solutions",
      "Get coding help and debugging",
      "Translate content between languages",
      "Research and summarize information"
    ],
    pros: [
      "Very intuitive and easy to use",
      "Excellent at understanding context", 
      "Free tier includes substantial usage",
      "Great for creative and analytical tasks"
    ],
    cons: [
      "Can sometimes provide outdated information",
      "Free tier has usage limits during peak times",
      "May require fact-checking for accuracy"
    ]
  },
  {
    id: 2,
    name: "Canva",
    description: "AI-powered design platform that makes creating professional graphics, presentations, and social media content accessible to everyone.",
    category: "design",
    pricing: "freemium" as const,
    priceDetails: "Free - $15",
    rating: 4.8,
    userCount: "135M+",
    website: "https://i.pinimg.com/originals/68/bf/59/68bf59787c3e79cdd2866388119ced01.png",
    logo: "https://i.pinimg.com/736x/4f/a1/81/4fa1813ecf4043cd54eabcda2d1c61f4.jpg",
    features: ["Magic Design", "Background remover", "Brand kit", "Templates", "Collaboration"],
    useCases: [
      "Create social media graphics and posts",
      "Design professional presentations",
      "Make logos and brand materials",
      "Generate marketing materials",
      "Create educational content"
    ],
    pros: [
      "Huge library of templates and assets",
      "AI features significantly speed up design",
      "No design experience required",
      "Great collaboration features"
    ],
    cons: [
      "Advanced AI features require paid plan",
      "Can be overwhelming with so many options",
      "Limited customization compared to professional tools"
    ]
  },
  {
    id: 3,
    name: "Claude",
    description: "Anthropic's AI assistant known for thoughtful, nuanced responses and excellent analytical capabilities. Great for complex reasoning and research.",
    category: "analysis",
    pricing: "freemium" as const,
    priceDetails: "Free - $20",
    rating: 4.6,
    userCount: "10M+",
    website: "https://upload.wikimedia.org/wikipedia/commons/0/06/Claude_AI_logo.png",
    logo: "https://freepnglogo.com/images/all_img/claude-ai-logo-d862.png",
    features: ["Document analysis", "Complex reasoning", "Ethical considerations", "Long conversations", "Code review"],
    useCases: [
      "Analyze long documents and reports",
      "Get help with complex decision making",
      "Research and fact-checking",
      "Code review and optimization",
      "Strategic planning and analysis"
    ],
    pros: [
      "Excellent at handling complex, nuanced topics",
      "Very strong analytical capabilities",
      "Good at maintaining context in long conversations",
      "Thoughtful and balanced responses"
    ],
    cons: [
      "Smaller user base than ChatGPT",
      "Can be overly cautious sometimes",
      "Free tier has lower usage limits"
    ]
  },
  {
    id: 4,
    name: "Grammarly",
    description: "AI writing assistant that goes beyond spell-check to improve clarity, tone, and overall communication effectiveness.",
    category: "writing",
    pricing: "freemium" as const,
    priceDetails: "Free - $30",
    rating: 4.5,
    userCount: "30M+",
    website: "https://i.pinimg.com/originals/28/16/f5/2816f5a620bfb01ca1b8fcee73414655.png",
    logo: "https://i.pinimg.com/736x/0d/4a/91/0d4a91b1aed0358325ea9db55c4a3bdc.jpg",
    features: ["Grammar checking", "Tone detector", "Plagiarism detection", "Writing insights", "Browser extension"],
    useCases: [
      "Improve email and document writing",
      "Check tone and professionalism",
      "Catch grammar and spelling errors",
      "Enhance clarity and conciseness",
      "Academic and business writing"
    ],
    pros: [
      "Works across all platforms and apps",
      "Real-time suggestions as you type",
      "Helps improve writing skills over time",
      "Good free version for basic needs"
    ],
    cons: [
      "Premium features can be expensive",
      "Sometimes suggests changes that aren't necessary",
      "AI suggestions may not always match your voice"
    ]
  },
  {
    id: 5,
    name: "Midjourney",
    description: "Leading AI image generator known for creating stunning, artistic images from text descriptions. Perfect for creative projects and marketing.",
    category: "design",
    pricing: "paid" as const,
    priceDetails: "$10 - $60",
    rating: 4.9,
    userCount: "15M+",
    website: "https://i.ytimg.com/vi/rucDCFBFo8w/maxresdefault.jpg",
    logo: "https://i.pinimg.com/originals/40/89/10/4089108ff503ac64670ee5153616973d.png",
    features: ["Text-to-image", "Style variations", "Upscaling", "Blend images", "Custom styles"],
    useCases: [
      "Create unique artwork and illustrations",
      "Generate marketing visuals and ads",
      "Design concepts and mood boards",
      "Social media content creation",
      "Book covers and digital art"
    ],
    pros: [
      "Produces extremely high-quality, artistic images",
      "Great community and inspiration",
      "Constantly improving with updates",
      "Good for both realistic and stylized art"
    ],
    cons: [
      "No free tier - requires subscription",
      "Works through Discord, which can be confusing",
      "Can take time to master prompt writing"
    ]
  },
  {
    id: 6,
    name: "Notion AI",
    description: "Integrated AI assistant within Notion that helps with writing, summarizing, and organizing information in your workspace.",
    category: "productivity",
    pricing: "paid" as const,
    priceDetails: "$10 - $18",
    rating: 4.4,
    userCount: "30M+",
    website: "https://www.notion.so",
    logo: "https://i.pinimg.com/originals/d5/51/73/d55173b090d172c6cef50ec8b84fdeb9.jpg",
    features: ["Content generation", "Summarization", "Translation", "Task automation", "Database queries"],
    useCases: [
      "Organize projects and knowledge bases",
      "Generate meeting notes and summaries",
      "Create content templates and workflows",
      "Automate repetitive documentation",
      "Brainstorm and plan projects"
    ],
    pros: [
      "Seamlessly integrated with Notion workspace",
      "Great for teams and collaboration",
      "Helps organize complex information",
      "Good for project management"
    ],
    cons: [
      "Requires existing Notion knowledge",
      "AI features cost extra beyond Notion subscription",
      "Can be overkill for simple note-taking needs"
    ]
  },
  {
    id: 7,
    name: "Copy.ai",
    description: "Specialized AI copywriting tool designed for marketing content, social media posts, and sales copy that converts.",
    category: "marketing",
    pricing: "freemium" as const,
    priceDetails: "Free - $49",
    rating: 4.3,
    userCount: "10M+",
    website: "https://www.copy.ai",
    logo: "https://play-lh.googleusercontent.com/WcE1ZPNjPnpJMB2_lq1oMJVJNqe47PjOsDtpugzx0rSFGwQw6ZKWt0QZg-IXyy4Z",
    features: ["Content templates", "Brand voice", "Multi-language", "Team collaboration", "Analytics"],
    useCases: [
      "Write sales emails and landing pages",
      "Create social media content at scale",
      "Generate product descriptions",
      "Develop marketing campaigns",
      "Write blog posts and articles"
    ],
    pros: [
      "Specialized templates for marketing use cases",
      "Good at maintaining brand voice consistency",
      "Helpful for generating multiple variations",
      "User-friendly interface"
    ],
    cons: [
      "Output often needs significant editing",
      "Can sound generic without customization",
      "Limited free tier"
    ]
  },
  {
    id: 8,
    name: "Otter.ai",
    description: "AI-powered meeting assistant that transcribes, summarizes, and extracts action items from your calls and meetings.",
    category: "productivity",
    pricing: "freemium" as const,
    priceDetails: "Free - $20",
    rating: 4.6,
    userCount: "25M+",
    website: "https://otter.ai",
    logo: "https://static.vecteezy.com/system/resources/previews/024/029/762/large_2x/otter-icon-clipart-transparent-background-free-png.png",
    features: ["Live transcription", "Meeting summaries", "Action items", "Speaker identification", "Integrations"],
    useCases: [
      "Transcribe meetings and interviews",
      "Generate meeting summaries automatically",
      "Extract action items and next steps", 
      "Create searchable meeting archives",
      "Accessibility for hearing-impaired participants"
    ],
    pros: [
      "Very accurate transcription",
      "Great integration with video conferencing",
      "Automatically identifies speakers",
      "Good free tier for basic use"
    ],
    cons: [
      "Accuracy can suffer with background noise",
      "Limited offline capabilities",
      "Advanced features require paid plans"
    ]
  },
  {
    id: 9,
    name: "Zapier",
    description: "Automation platform with AI features that connects your apps and automates workflows without coding knowledge.",
    category: "automation",
    pricing: "freemium" as const,
    priceDetails: "Free - $99+",
    rating: 4.5,
    userCount: "5M+",
    website: "https://zapier.com",
    logo: "https://i.pinimg.com/originals/27/e3/5c/27e35c526450efbe5beb9cfadb0feb13.png",
    features: ["App integrations", "AI automation", "Workflow builder", "Data formatting", "Scheduling"],
    useCases: [
      "Automate data entry between apps",
      "Create automated email sequences",
      "Sync information across platforms",
      "Automate social media posting",
      "Generate reports automatically"
    ],
    pros: [
      "Connects thousands of apps",
      "No coding required",
      "AI helps suggest automation",
      "Time-saving for repetitive tasks"
    ],
    cons: [
      "Can get expensive with high usage",
      "Complex automations can break",
      "Learning curve for advanced features"
    ]
  },
  {
    id: 10,
    name: "Loom",
    description: "Video communication tool with AI features for transcription, summaries, and automated video editing.",
    category: "communication",
    pricing: "freemium" as const,
    priceDetails: "Free - $12",
    rating: 4.7,
    userCount: "21M+",
    website: "https://www.loom.com",
    logo: "https://lh3.googleusercontent.com/-loaq7tvfHQQ/ZqliljxtUoI/AAAAAAAAAQ0/c0ghg6z5JokDYh44Z3lUdyHjNAiFV1FJQCNcBGAsYHQ/s400/loom_logo_icon_color-128.png",
    features: ["Screen recording", "AI transcription", "Video summaries", "Auto-captions", "Video editing"],
    useCases: [
      "Create training and onboarding videos",
      "Record product demonstrations",
      "Provide video feedback and reviews",
      "Share quick updates with team",
      "Create educational content"
    ],
    pros: [
      "Very easy to use and share",
      "AI features enhance video value",
      "Good for async communication",
      "Integrates well with other tools"
    ],
    cons: [
      "Video quality limited on free plan",
      "AI features require paid subscription",
      "Storage limits on lower tiers"
    ]
  },
  {
    id: 11,
    name: "Gamma",
    description: "AI-powered presentation maker that creates beautiful slide decks from simple text prompts with minimal design effort.",
    category: "productivity",
    pricing: "freemium" as const,
    priceDetails: "Free - $20",
    rating: 4.5,
    userCount: "3M+",
    website: "https://i.pinimg.com/736x/28/6e/d1/286ed1c61132d80b2121db757465d225.jpg",
    logo: "https://i.pinimg.com/736x/62/fa/a6/62faa6ce4eb98a67c10bb83f63611159.jpg",
    features: ["AI presentation generation", "Smart templates", "Interactive content", "Export options", "Collaboration"],
    useCases: [
      "Create pitch decks and presentations",
      "Generate training materials",
      "Build interactive documents",
      "Make product showcases",
      "Design educational content"
    ],
    pros: [
      "Creates full presentations from prompts",
      "Beautiful, modern design templates",
      "Much faster than traditional tools",
      "Interactive elements included"
    ],
    cons: [
      "Less customization than PowerPoint",
      "AI sometimes misses specific requirements",
      "Newer tool with smaller community"
    ]
  },
  {
    id: 12,
    name: "Jasper AI",
    description: "Enterprise-focused AI writing platform designed for marketing teams, agencies, and content creators who need brand-consistent content at scale.",
    category: "marketing",
    pricing: "paid" as const,
    priceDetails: "$49 - $125",
    rating: 4.4,
    userCount: "100K+",
    website: "https://www.jasper.ai",
    logo: "https://www.pricelessconsultingllc.com/wp-content/uploads/2023/01/1-4.png",
    features: ["Brand voice training", "Content templates", "Team collaboration", "SEO optimization", "Plagiarism checker"],
    useCases: [
      "Scale content marketing efforts",
      "Maintain brand voice across content",
      "Create ad copy and landing pages",
      "Generate blog posts and articles",
      "Develop email marketing campaigns"
    ],
    pros: [
      "Excellent for maintaining brand consistency",
      "Great templates for marketing content",
      "Strong team collaboration features",
      "Good customer support"
    ],
    cons: [
      "More expensive than alternatives",
      "Requires time to train brand voice",
      "Overkill for individual users"
    ]
  }
]
