
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Sparkles, ArrowRight, Download, Share2, RotateCcw } from 'lucide-react'
import { QuizAnswer } from './quiz-container'
import { calculatePersona, getRecommendations } from '@/lib/quiz-logic'

interface QuizResultsProps {
  answers: QuizAnswer[]
  onRestart: () => void
}

const QuizResults = ({ answers, onRestart }: QuizResultsProps) => {
  const [emailSent, setEmailSent] = useState(false)
  const persona = calculatePersona(answers)
  const recommendations = getRecommendations(persona)

  const handleEmailResults = () => {
    // In a real app, this would send the results via email
    setEmailSent(true)
    setTimeout(() => setEmailSent(false), 3000)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Your AI Journey Profile
        </h2>
        <p className="text-lg text-gray-600">
          Based on your responses, here's your personalized AI empowerment plan
        </p>
      </div>

      {/* Persona Card */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">{persona.title}</h3>
          <p className="text-lg opacity-90 mb-6">{persona.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {persona.traits.map((trait, index) => (
              <div key={index} className="bg-white/20 rounded-lg p-4">
                <div className="text-sm font-semibold">{trait}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">Your Personalized Recommendations</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recommended Tools */}
          <div className="bg-purple-50 rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4 text-purple-900">Recommended AI Tools</h4>
            <div className="space-y-3">
              {recommendations.tools.map((tool, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-purple-800">{tool}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Path */}
          <div className="bg-pink-50 rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4 text-pink-900">Your Learning Path</h4>
            <div className="space-y-3">
              {recommendations.pathways.map((pathway, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span className="text-pink-800">{pathway}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Wins */}
          <div className="bg-green-50 rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4 text-green-900">Quick Wins</h4>
            <div className="space-y-3">
              {recommendations.quickWins.map((win, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-green-800">{win}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Focus Areas */}
          <div className="bg-blue-50 rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4 text-blue-900">Focus Areas</h4>
            <div className="space-y-3">
              {recommendations.focusAreas.map((area, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-blue-800">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <Link href="/discovery" className="btn-primary inline-flex items-center justify-center">
          Start Your Journey
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
        
        <button
          onClick={handleEmailResults}
          disabled={emailSent}
          className="btn-secondary inline-flex items-center justify-center"
        >
          {emailSent ? 'Sent!' : 'Email Results'}
          <Download className="ml-2 w-5 h-5" />
        </button>
        
        <button
          onClick={onRestart}
          className="text-gray-600 hover:text-purple-600 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
        >
          <RotateCcw className="mr-2 w-5 h-5" />
          Retake Quiz
        </button>
      </div>

      {/* Social Share */}
      <div className="text-center pt-6 border-t border-gray-200">
        <p className="text-gray-600 mb-4">Share your AI journey with others</p>
        <button className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
          <Share2 className="mr-2 w-5 h-5" />
          Share Results
        </button>
      </div>
    </div>
  )
}

export default QuizResults
