
import QuizContainer from '@/components/quiz/quiz-container'

export const metadata = {
  title: 'Spark Quiz - Discover Your AI Potential | Aya',
  description: 'Take our personalized quiz to discover the best AI tools and learning path for your goals and interests.',
}

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="gradient-text">Spark Quiz</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover your AI potential with our personalized assessment. 
              Get tailored recommendations based on your goals, interests, and experience level.
            </p>
          </div>
          
          <QuizContainer />
        </div>
      </div>
    </div>
  )
}
