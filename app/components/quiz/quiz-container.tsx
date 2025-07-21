
'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import QuizQuestion from './quiz-question'
import QuizResults from './quiz-results'
import { questions } from '@/lib/quiz-data'

export interface QuizAnswer {
  questionId: number
  selectedOption: string
  value: string
}

const QuizContainer = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswer[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (questionId: number, selectedOption: string, value: string) => {
    const newAnswers = answers.filter(a => a.questionId !== questionId)
    newAnswers.push({ questionId, selectedOption, value })
    setAnswers(newAnswers)
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
  }

  const currentAnswer = answers.find(a => a.questionId === currentQuestion)
  const canProceed = currentAnswer !== undefined

  if (showResults) {
    return <QuizResults answers={answers} onRestart={restartQuiz} />
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-purple-600">
            {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <QuizQuestion
        question={questions[currentQuestion]}
        selectedAnswer={currentAnswer?.selectedOption}
        onAnswer={handleAnswer}
      />

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12">
        <button
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            currentQuestion === 0
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
          }`}
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Previous
        </button>

        <button
          onClick={nextQuestion}
          disabled={!canProceed}
          className={`flex items-center px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
            canProceed
              ? 'btn-primary'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {currentQuestion === questions.length - 1 ? (
            <>
              Get Results
              <Sparkles className="w-5 h-5 ml-2" />
            </>
          ) : (
            <>
              Next
              <ChevronRight className="w-5 h-5 ml-2" />
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default QuizContainer
