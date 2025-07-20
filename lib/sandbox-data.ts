
export const recipes = [
  {
    id: 1,
    title: "Write Compelling Email Copy in Minutes",
    description: "Learn to craft professional, persuasive emails using AI assistance. Perfect for sales outreach, customer service, or internal communications.",
    category: "writing",
    duration: "15 min",
    difficulty: "beginner" as const,
    tags: ["email", "communication", "ChatGPT", "sales"],
    steps: 4,
    tools: ["ChatGPT", "Gmail or Outlook"],
    expectedOutput: "A professional email that gets responses, with clear subject lines and compelling calls-to-action.",
    fullSteps: [
      {
        title: "Define Your Email Purpose and Audience",
        content: "Before writing, clarify what you want to achieve and who you're writing to. This helps the AI generate more targeted content.",
        tip: "Be specific about your audience's pain points and what action you want them to take."
      },
      {
        title: "Create Your Email Structure with AI",
        content: "Use this prompt to generate a well-structured email outline that follows proven formulas.",
        prompt: "Write a professional email for [YOUR AUDIENCE] about [YOUR TOPIC]. The goal is to [YOUR OBJECTIVE]. Use this structure: 1) Compelling subject line, 2) Personal greeting, 3) Clear value proposition, 4) Supporting details, 5) Strong call-to-action. Keep it under 150 words and make it conversational yet professional.",
        tip: "Replace the bracketed sections with your specific details for the best results."
      },
      {
        title: "Refine and Personalize",
        content: "Take the AI-generated email and add personal touches. Review for tone, accuracy, and your brand voice.",
        prompt: "Please revise this email to sound more [TONE: friendly/formal/urgent] and add a personal touch that shows I've researched the recipient. Also, make the subject line more compelling.",
        tip: "Always fact-check any claims or statistics the AI includes in your email."
      },
      {
        title: "Test and Send",
        content: "Review your final email, check for any errors, and consider A/B testing different versions to see what works best.",
        tip: "Send yourself a test email first to see how it looks in your email client, especially on mobile devices."
      }
    ]
  },
  {
    id: 2,
    title: "Create Professional Presentations Instantly",
    description: "Transform your ideas into stunning presentations using AI. Learn to generate content, design slides, and create compelling narratives.",
    category: "productivity",
    duration: "20 min",
    difficulty: "beginner" as const,
    tags: ["presentations", "design", "Gamma", "business"],
    steps: 5,
    tools: ["Gamma", "ChatGPT", "Canva"],
    expectedOutput: "A professional presentation with cohesive design, compelling content, and clear narrative flow.",
    fullSteps: [
      {
        title: "Plan Your Presentation Structure",
        content: "Start by defining your key message, audience, and desired outcome. This foundation will guide all your content creation.",
        tip: "Follow the rule of 3: no more than 3 main points, with 3 supporting details each."
      },
      {
        title: "Generate Your Content Outline",
        content: "Use AI to create a comprehensive outline that flows logically and keeps your audience engaged.",
        prompt: "Create a presentation outline for [YOUR TOPIC] targeting [YOUR AUDIENCE]. Include: 1) Attention-grabbing opening, 2) Problem statement, 3) Your solution/main points, 4) Benefits/results, 5) Call-to-action. Make it persuasive and include suggested visuals for each section.",
        tip: "Ask for specific slide titles and bullet points to make the next step easier."
      },
      {
        title: "Design Your Slides with AI",
        content: "Use Gamma or similar tools to automatically generate slides based on your outline. Focus on clean, professional design.",
        prompt: "Based on this outline, create slide content for a [LENGTH] minute presentation. Each slide should have a clear headline, 2-3 bullet points maximum, and suggestions for supporting visuals. Keep text minimal and impactful.",
        tip: "Choose a template that matches your brand or audience expectations (corporate, creative, academic, etc.)."
      },
      {
        title: "Add Visual Elements",
        content: "Enhance your slides with relevant images, charts, or graphics. Use AI tools to suggest or create visuals that support your message.",
        prompt: "Suggest specific images, icons, or chart types for each slide that would enhance the message and keep the audience engaged. Focus on professional, high-quality visuals.",
        tip: "Use consistent visual style throughout - same fonts, colors, and image treatment."
      },
      {
        title: "Practice and Polish",
        content: "Review your presentation for flow, timing, and clarity. Practice your delivery and make final adjustments.",
        tip: "Record yourself presenting or practice with a colleague to identify areas for improvement."
      }
    ]
  },
  {
    id: 3,
    title: "Automate Social Media Content Creation",
    description: "Create a month's worth of engaging social media content in one session. Learn to maintain consistency and drive engagement.",
    category: "marketing",
    duration: "30 min",
    difficulty: "intermediate" as const,
    tags: ["social media", "content", "automation", "Copy.ai"],
    steps: 6,
    tools: ["Copy.ai", "Buffer", "Canva", "ChatGPT"],
    expectedOutput: "30 days of scheduled social media content with consistent branding and engaging copy.",
    fullSteps: [
      {
        title: "Define Your Content Strategy",
        content: "Establish your brand voice, posting frequency, and content pillars. This ensures consistency across all your content.",
        tip: "Use the 80/20 rule: 80% valuable content, 20% promotional content."
      },
      {
        title: "Generate Content Ideas",
        content: "Use AI to brainstorm a variety of content ideas that align with your strategy and audience interests.",
        prompt: "Generate 30 social media post ideas for [YOUR INDUSTRY/NICHE] that would engage [YOUR TARGET AUDIENCE]. Include a mix of educational tips, behind-the-scenes content, user-generated content ideas, and promotional posts. Make them specific and actionable.",
        tip: "Group similar ideas together to create content series that build on each other."
      },
      {
        title: "Create Compelling Copy",
        content: "Transform your ideas into engaging social media copy that drives interaction and reflects your brand voice.",
        prompt: "Write social media copy for this idea: [POST IDEA]. Target audience: [YOUR AUDIENCE]. Brand voice: [YOUR VOICE - friendly/professional/witty]. Include relevant hashtags and a clear call-to-action. Optimize for [PLATFORM - Instagram/LinkedIn/Twitter].",
        tip: "Vary your post formats: questions, tips, stories, quotes, and behind-the-scenes content."
      },
      {
        title: "Design Visual Content",
        content: "Create eye-catching visuals that complement your copy and maintain brand consistency across all posts.",
        prompt: "Suggest visual concepts for these social media posts that would work well for [YOUR BRAND]. Include specific design elements, color schemes, and image types that would grab attention in the feed.",
        tip: "Create templates in Canva that you can quickly customize for different posts."
      },
      {
        title: "Plan Your Content Calendar",
        content: "Organize your content strategically across the month, considering optimal posting times and content variety.",
        tip: "Use tools like Buffer or Hootsuite to schedule posts in advance and maintain consistency."
      },
      {
        title: "Set Up Analytics and Optimization",
        content: "Prepare to track performance and create a system for optimizing future content based on what works best.",
        tip: "Document which types of posts perform best so you can create more similar content in the future."
      }
    ]
  },
  {
    id: 4,
    title: "Analyze Data Like a Pro",
    description: "Transform raw data into actionable insights using AI. Learn to create reports, identify trends, and make data-driven decisions.",
    category: "analysis",
    duration: "25 min",
    difficulty: "intermediate" as const,
    tags: ["data analysis", "insights", "Claude", "business intelligence"],
    steps: 5,
    tools: ["Claude AI", "Excel or Google Sheets", "ChatGPT"],
    expectedOutput: "Clear, actionable insights from your data with professional visualizations and recommendations.",
    fullSteps: [
      {
        title: "Prepare Your Data",
        content: "Clean and organize your data so AI can analyze it effectively. This step is crucial for accurate insights.",
        tip: "Remove duplicates, fix formatting issues, and ensure consistent data types before analysis."
      },
      {
        title: "Define Your Analysis Goals",
        content: "Be clear about what questions you want your data to answer. This guides the AI toward relevant insights.",
        prompt: "I have data about [DESCRIBE YOUR DATA]. I want to understand [YOUR SPECIFIC QUESTIONS]. What analysis should I perform to get actionable insights? Suggest specific metrics to calculate and trends to look for.",
        tip: "Start with broad questions, then drill down into specific areas based on initial findings."
      },
      {
        title: "Generate Initial Insights",
        content: "Use AI to identify patterns, trends, and anomalies in your data that might not be immediately obvious.",
        prompt: "Analyze this data: [PASTE YOUR DATA or DESCRIBE IT]. Identify the top 5 most important trends or patterns. For each trend, explain what it means for the business and what actions should be considered. Present findings in order of importance.",
        tip: "Always verify AI insights by spot-checking calculations and logic."
      },
      {
        title: "Create Visualizations",
        content: "Transform your insights into clear, compelling visualizations that make your findings easy to understand and act upon.",
        prompt: "Based on these insights [SUMMARY OF FINDINGS], suggest the best chart types and visualizations to communicate each finding to [YOUR AUDIENCE]. Include specific recommendations for titles, labels, and key points to highlight.",
        tip: "Choose chart types that best represent your data: line charts for trends, bar charts for comparisons, pie charts for proportions."
      },
      {
        title: "Develop Recommendations",
        content: "Translate your analysis into specific, actionable recommendations that stakeholders can implement.",
        prompt: "Based on this data analysis [SUMMARY], provide 3-5 specific, actionable recommendations. For each recommendation, include: expected impact, implementation difficulty, timeline, and success metrics to track.",
        tip: "Prioritize recommendations by potential impact and ease of implementation."
      }
    ]
  },
  {
    id: 5,
    title: "Generate Product Descriptions That Sell",
    description: "Create compelling product descriptions that convert browsers into buyers. Learn the psychology of persuasive copy.",
    category: "marketing",
    duration: "18 min",
    difficulty: "beginner" as const,
    tags: ["copywriting", "e-commerce", "sales", "persuasion"],
    steps: 4,
    tools: ["ChatGPT", "Copy.ai", "Shopify or WooCommerce"],
    expectedOutput: "Converting product descriptions that highlight benefits, address objections, and drive sales.",
    fullSteps: [
      {
        title: "Research Your Product and Audience",
        content: "Understand your product's unique value and your customers' needs, pain points, and buying motivations.",
        tip: "Read customer reviews and feedback to understand what language resonates with your audience."
      },
      {
        title: "Create Benefit-Focused Copy",
        content: "Transform product features into customer benefits that show how the product improves their life.",
        prompt: "Write a compelling product description for [PRODUCT NAME]. Features: [LIST FEATURES]. Target customer: [DESCRIBE CUSTOMER]. Focus on benefits, not just features. Include emotional triggers and address common objections. Keep it scannable with bullet points. End with a strong call-to-action.",
        tip: "Use the formula: Feature + Benefit + Emotional outcome for each key point."
      },
      {
        title: "Add Social Proof and Urgency",
        content: "Incorporate elements that build trust and encourage immediate action without being pushy.",
        prompt: "Enhance this product description with social proof elements and subtle urgency. Suggest ways to include customer testimonials, ratings, or scarcity elements that feel authentic and trustworthy.",
        tip: "Use specific numbers and real customer quotes when possible - they're more credible than generic claims."
      },
      {
        title: "Optimize for Search and Conversion",
        content: "Ensure your description is both search-engine friendly and optimized for conversions.",
        tip: "Include relevant keywords naturally, but prioritize readability and persuasion over SEO stuffing."
      }
    ]
  },
  {
    id: 6,
    title: "Plan Content Strategy with AI",
    description: "Develop a comprehensive content strategy that aligns with your business goals and audience needs.",
    category: "marketing",
    duration: "35 min",
    difficulty: "advanced" as const,
    tags: ["content strategy", "planning", "SEO", "audience"],
    steps: 7,
    tools: ["ChatGPT", "Claude", "Ahrefs or SEMrush", "Google Analytics"],
    expectedOutput: "A complete content strategy with editorial calendar, keyword targets, and performance metrics.",
    fullSteps: [
      {
        title: "Analyze Your Current Position",
        content: "Audit your existing content and understand what's working, what isn't, and where the gaps are.",
        tip: "Use analytics to identify your top-performing content and understand why it succeeded."
      },
      {
        title: "Define Your Content Goals",
        content: "Align your content strategy with broader business objectives and define success metrics.",
        prompt: "Help me create content goals for [YOUR BUSINESS TYPE] targeting [YOUR AUDIENCE]. Our main business goals are [LIST GOALS]. Suggest specific, measurable content objectives that support these goals, including KPIs to track success.",
        tip: "Make goals SMART: Specific, Measurable, Achievable, Relevant, Time-bound."
      },
      {
        title: "Research Your Audience Deeply",
        content: "Develop detailed audience personas and understand their content consumption patterns.",
        prompt: "Create detailed audience personas for [YOUR BUSINESS]. Include demographics, pain points, content preferences, buying journey stages, and the questions they ask at each stage. Suggest content types that would resonate with each persona.",
        tip: "Interview actual customers or survey your audience to validate your assumptions."
      },
      {
        title: "Conduct Competitive Analysis",
        content: "Study your competitors' content strategies to identify opportunities and differentiation points.",
        prompt: "Analyze the content strategy for these competitors: [LIST COMPETITORS]. Identify content gaps, successful formats, topics they're missing, and opportunities for differentiation. Suggest how to position our content uniquely.",
        tip: "Focus on finding topics your competitors aren't covering well rather than copying what they do."
      },
      {
        title: "Develop Content Pillars",
        content: "Create 3-5 core content themes that align with your expertise and audience needs.",
        prompt: "Based on our business goals, audience needs, and competitive landscape, suggest 3-5 content pillars. For each pillar, provide: the main theme, why it matters to our audience, content types that work well, and sample topic ideas.",
        tip: "Ensure each pillar showcases different aspects of your expertise and addresses different audience needs."
      },
      {
        title: "Create Your Editorial Calendar",
        content: "Plan your content production and distribution across channels and timeframes.",
        prompt: "Create a 3-month editorial calendar template for [YOUR BUSINESS]. Include: content types, publishing frequency, distribution channels, seasonal considerations, and resource requirements. Make it realistic for our team size of [NUMBER].",
        tip: "Start with a manageable publishing frequency that you can maintain consistently."
      },
      {
        title: "Set Up Measurement and Optimization",
        content: "Establish systems to track performance and continuously improve your content strategy.",
        tip: "Review and adjust your strategy monthly based on performance data and changing business needs."
      }
    ]
  }
]
