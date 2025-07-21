
'use client'

import { CheckCircle } from 'lucide-react'

interface QuizQuestionProps {
  question: {
    id: number
    text: string
    description?: string
    options: {
      text: string
      value: string
      description?: string
    }[]
  }
  selectedAnswer?: string
  onAnswer: (questionId: number, selectedOption: string, value: string) => void
}

const QuizQuestion = ({ question, selectedAnswer, onAnswer }: QuizQuestionProps) => {
  return (
    <div className="space-y-8">
      {/* Question Text */}
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          {question.text}
        </h2>
        {question.description && (
          <p className="text-lg text-gray-600 leading-relaxed">
            {question.description}
          </p>
        )}
      </div>

      {/* Options */}
      <div className="space-y-4">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === option.text
          
          return (
            <button
              key={index}
              onClick={() => onAnswer(question.id, option.text, option.value)}
              className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-200 ${
                isSelected
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300 hover:bg-purple-25'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                  isSelected
                    ? 'border-purple-600 bg-purple-600'
                    : 'border-gray-300'
                }`}>
                  {isSelected && <CheckCircle className="w-4 h-4 text-white" />}
                </div>
                
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold mb-2 ${
                    isSelected ? 'text-purple-900' : 'text-gray-900'
                  }`}>
                    {option.text}
                  </h3>
                  {option.description && (
                    <p className={`text-sm ${
                      isSelected ? 'text-purple-700' : 'text-gray-600'
                    }`}>
                      {option.description}
                    </p>
                  )}
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default QuizQuestion
