
import { QuizAnswer } from '@/components/quiz/quiz-container'

export interface PersonaResult {
  title: string
  description: string
  traits: string[]
}

export interface Recommendations {
  tools: string[]
  pathways: string[]
  quickWins: string[]
  focusAreas: string[]
}

export function calculatePersona(answers: QuizAnswer[]): PersonaResult {
  const answerMap = answers.reduce((acc, answer) => {
    acc[answer.questionId] = answer.value
    return acc
  }, {} as Record<number, string>)

  const experience = answerMap[0] || 'beginner'
  const goal = answerMap[1] || 'productivity'
  const interest = answerMap[2] || 'writing'

  // Determine persona based on key answers
  if (experience === 'beginner' && goal === 'personal') {
    return {
      title: "The Curious Explorer",
      description: "You're just starting your AI journey and excited to see how it can improve your daily life. Perfect for discovering user-friendly tools and building confidence.",
      traits: ["Beginner-friendly", "Personal focus", "Learning-oriented"]
    }
  }
  
  if (goal === 'business' || goal === 'career') {
    return {
      title: "The Ambitious Achiever",
      description: "You see AI as a key to advancing your career or business goals. You're ready to invest time in learning tools that will give you a competitive edge.",
      traits: ["Goal-oriented", "Business-focused", "Growth-minded"]
    }
  }
  
  if (interest === 'design' || goal === 'creative') {
    return {
      title: "The Creative Innovator",
      description: "You're excited about using AI to enhance your creative work and bring new ideas to life. Perfect for exploring visual and content creation tools.",
      traits: ["Creatively-driven", "Visual learner", "Innovation-focused"]
    }
  }
  
  if (experience === 'advanced' || experience === 'regular') {
    return {
      title: "The Strategic Optimizer",
      description: "You have some AI experience and want to level up strategically. You're ready for more advanced tools and workflows to maximize efficiency.",
      traits: ["Experience-based", "Efficiency-focused", "Strategic thinker"]
    }
  }

  // Default persona
  return {
    title: "The Practical Learner",
    description: "You want to use AI to make your work and life more efficient. You prefer practical, proven solutions that deliver clear benefits.",
    traits: ["Practical approach", "Efficiency-focused", "Results-oriented"]
  }
}

export function getRecommendations(persona: PersonaResult): Recommendations {
  const baseRecommendations = {
    tools: ["ChatGPT for writing assistance", "Canva AI for quick graphics", "Grammarly for polished communication"],
    pathways: ["AI Fundamentals", "Productivity Essentials", "Tool Mastery Basics"],
    quickWins: ["Automate email responses", "Generate social media content", "Create meeting summaries"],
    focusAreas: ["Writing efficiency", "Communication skills", "Time management"]
  }

  // Customize based on persona
  if (persona.title.includes("Curious Explorer")) {
    return {
      ...baseRecommendations,
      tools: ["ChatGPT for questions", "Otter.ai for note-taking", "Any.do for task management"],
      quickWins: ["Ask AI for daily planning", "Transcribe voice notes", "Get recipe suggestions"],
      focusAreas: ["Daily organization", "Learning basics", "Building confidence"]
    }
  }

  if (persona.title.includes("Ambitious Achiever")) {
    return {
      ...baseRecommendations,
      tools: ["Claude for analysis", "Notion AI for project management", "LinkedIn AI for networking"],
      pathways: ["Business Strategy with AI", "Career Advancement", "Leadership in AI Age"],
      quickWins: ["Optimize LinkedIn profile", "Automate client reports", "Analyze market trends"],
      focusAreas: ["Strategic planning", "Professional development", "Competitive advantage"]
    }
  }

  if (persona.title.includes("Creative Innovator")) {
    return {
      ...baseRecommendations,
      tools: ["Midjourney for images", "RunwayML for videos", "Copy.ai for content"],
      pathways: ["Creative AI Mastery", "Visual Storytelling", "Content Creation"],
      quickWins: ["Generate mood boards", "Create social graphics", "Write compelling captions"],
      focusAreas: ["Visual design", "Content creation", "Creative workflows"]
    }
  }

  if (persona.title.includes("Strategic Optimizer")) {
    return {
      ...baseRecommendations,
      tools: ["Claude for complex analysis", "Zapier for automation", "Tableau with AI insights"],
      pathways: ["Advanced AI Workflows", "Automation Mastery", "Data-Driven Decisions"],
      quickWins: ["Build custom workflows", "Automate reporting", "Optimize existing processes"],
      focusAreas: ["Process optimization", "Advanced automation", "Strategic implementation"]
    }
  }

  return baseRecommendations
}
