
'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Check, Copy, ExternalLink } from 'lucide-react'

interface RecipeModalProps {
  recipe: {
    id: number
    title: string
    description: string
    category: string
    duration: string
    difficulty: 'beginner' | 'intermediate' | 'advanced'
    tags: string[]
    steps: number
    fullSteps: {
      title: string
      content: string
      prompt?: string
      tip?: string
    }[]
    tools: string[]
    expectedOutput: string
  }
  onClose: () => void
}

const RecipeModal = ({ recipe, onClose }: RecipeModalProps) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [copiedPrompt, setCopiedPrompt] = useState<number | null>(null)

  const markStepComplete = (stepIndex: number) => {
    if (!completedSteps.includes(stepIndex)) {
      setCompletedSteps([...completedSteps, stepIndex])
    }
  }

  const copyPrompt = async (prompt: string, stepIndex: number) => {
    try {
      await navigator.clipboard.writeText(prompt)
      setCopiedPrompt(stepIndex)
      setTimeout(() => setCopiedPrompt(null), 2000)
    } catch (err) {
      console.error('Failed to copy prompt:', err)
    }
  }

  const nextStep = () => {
    if (currentStep < recipe.fullSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const currentStepData = recipe.fullSteps[currentStep]
  const progress = ((completedSteps.length) / recipe.fullSteps.length) * 100

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{recipe.title}</h2>
            <p className="text-gray-600 mt-1">Step {currentStep + 1} of {recipe.fullSteps.length}</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4 bg-gray-50">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">Progress</span>
            <span className="text-sm font-medium text-purple-600">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {/* Step Content */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{currentStepData.title}</h3>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed">{currentStepData.content}</p>
            </div>
          </div>

          {/* Prompt Box */}
          {currentStepData.prompt && (
            <div className="mb-6">
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-purple-900">AI Prompt Template</h4>
                  <button
                    onClick={() => copyPrompt(currentStepData.prompt!, currentStep)}
                    className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 text-sm font-medium"
                  >
                    {copiedPrompt === currentStep ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-white border border-purple-200 rounded-lg p-3 font-mono text-sm">
                  {currentStepData.prompt}
                </div>
              </div>
            </div>
          )}

          {/* Tip */}
          {currentStepData.tip && (
            <div className="mb-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <h4 className="font-medium text-yellow-900 mb-2">💡 Pro Tip</h4>
                <p className="text-yellow-800 text-sm">{currentStepData.tip}</p>
              </div>
            </div>
          )}

          {/* Tools Needed */}
          {currentStep === 0 && (
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-3">Tools You'll Need</h4>
              <div className="flex flex-wrap gap-2">
                {recipe.tools.map((tool, index) => (
                  <span key={index} className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    <ExternalLink className="w-3 h-3" />
                    <span>{tool}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Expected Output */}
          {currentStep === recipe.fullSteps.length - 1 && (
            <div className="mb-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h4 className="font-medium text-green-900 mb-2">Expected Output</h4>
                <p className="text-green-800 text-sm">{recipe.expectedOutput}</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              currentStep === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
            }`}
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </button>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => markStepComplete(currentStep)}
              disabled={completedSteps.includes(currentStep)}
              className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                completedSteps.includes(currentStep)
                  ? 'bg-green-100 text-green-700 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
              }`}
            >
              <Check className="w-4 h-4 mr-2" />
              {completedSteps.includes(currentStep) ? 'Completed' : 'Mark Complete'}
            </button>

            <button
              onClick={nextStep}
              disabled={currentStep === recipe.fullSteps.length - 1}
              className={`flex items-center px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                currentStep === recipe.fullSteps.length - 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'btn-primary'
              }`}
            >
              Next
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeModal
