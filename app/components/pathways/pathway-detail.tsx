'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, Users, Star, Play, CheckCircle, Lock } from 'lucide-react'
import { PathwaySection } from '@/lib/pathways-data'
import { Course } from '@/lib/types'
import { getPlatformLogo } from '@/lib/platform-logos'

interface PathwayDetailProps {
  pathway: PathwaySection & { courses: Course[] }
}

const PathwayDetail = ({ pathway }: PathwayDetailProps) => {
  const [enrollmentStatus, setEnrollmentStatus] = useState<'not-enrolled' | 'enrolling' | 'enrolled'>('not-enrolled')

  // Mock module data - in a real app, this would come from the pathway data
  const moduleData = pathway.courses.map((course, index) => ({
      id: index + 1,
      title: course.title,
      description: course.summary,
      duration: course.length,
      lessons: 4, // placeholder
      completed: false,
      locked: index > 0,
  }));


  const handleEnrollment = () => {
    setEnrollmentStatus('enrolling')
    setTimeout(() => {
      setEnrollmentStatus('enrolled')
    }, 2000)
  }

  const getDifficultyColor = () => {
    // Use difficulty of the first course as representative
    const difficulty = pathway.courses[0]?.difficulty || 'beginner';
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800'
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800'
      case 'advanced':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const representativeCourse = pathway.courses[0];
  if (!representativeCourse) {
    return <div>Pathway data is missing.</div>;
  }

  return (
    <div className="min-h-screen py-12">
      <div className="section-container">
        {/* Back Button */}
        <Link
          href="/pathways"
          className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Pathways</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="space-y-6">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={representativeCourse.image}
                  alt={pathway.section}
                  fill
                  className="object-contain p-6"
                />
              </div>

              <div className="flex items-center">
                <div className="relative w-16 h-16 mr-4">
                  <Image
                    src={getPlatformLogo(representativeCourse.platform)}
                    alt={`${pathway.section} logo`}
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">{pathway.section}</h1>
                  <p className="text-xl text-gray-600 leading-relaxed">{representativeCourse.summary}</p>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{representativeCourse.length}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>1,234 participants</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>4.5 rating</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor()}`}>
                  {representativeCourse.difficulty}
                </span>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Skills You'll Learn</h2>
              <div className="flex flex-wrap gap-3">
                {pathway.courses.map((course, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium"
                  >
                    {course.title}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcomes Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">What You'll Achieve</h2>
              <div className="space-y-3">
                {pathway.courses.map((course, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{`Completion of ${course.title}`}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modules Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Course Modules</h2>
              <div className="space-y-4">
                {moduleData.map((module, index) => (
                  <div
                    key={module.id}
                    className={`border rounded-xl p-6 transition-all duration-200 ${
                      module.locked && enrollmentStatus === 'not-enrolled'
                        ? 'border-gray-200 bg-gray-50 opacity-60'
                        : 'border-gray-200 hover:border-purple-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            module.completed
                              ? 'bg-green-500 text-white'
                              : module.locked && enrollmentStatus === 'not-enrolled'
                              ? 'bg-gray-300 text-gray-500'
                              : 'bg-purple-600 text-white'
                          }`}>
                            {module.completed ? (
                              <CheckCircle className="w-4 h-4" />
                            ) : module.locked && enrollmentStatus === 'not-enrolled' ? (
                              <Lock className="w-4 h-4" />
                            ) : (
                              index + 1
                            )}
                          </div>
                          <h3 className="text-lg font-semibold">{module.title}</h3>
                        </div>
                        
                        <p className="text-gray-600 mb-3 ml-11">{module.description}</p>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-500 ml-11">
                          <span>{module.duration}</span>
                          <span>{module.lessons} lessons</span>
                        </div>
                        
                        {/* Platform logo */}
                        <div className="flex items-center space-x-2 mt-3 ml-11">
                          <div className="relative w-6 h-6">
                            <Image
                              src={getPlatformLogo(pathway.courses[index]?.platform || '')}
                              alt="Platform logo"
                              fill
                              className="object-contain"
                              sizes="24px"
                            />
                          </div>
                          <span className="text-xs text-gray-500">
                            {pathway.courses[index]?.platform.split(' ')[0] || 'Platform'}
                          </span>
                        </div>
                      </div>

                      {!module.locked || enrollmentStatus === 'enrolled' ? (
                        <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                          <Play className="w-4 h-4" />
                          <span>Start</span>
                        </button>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enrollment Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">Free</div>
                <div className="text-sm text-gray-500">Full access to all modules</div>
              </div>

              {enrollmentStatus === 'not-enrolled' && (
                <button
                  onClick={handleEnrollment}
                  className="w-full btn-primary mb-4"
                >
                  Start Learning Path
                </button>
              )}

              {enrollmentStatus === 'enrolling' && (
                <button
                  disabled
                  className="w-full bg-gray-400 text-white px-6 py-3 rounded-lg font-medium mb-4 opacity-75"
                >
                  Enrolling...
                </button>
              )}

              {enrollmentStatus === 'enrolled' && (
                <button className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-medium mb-4">
                  Continue Learning
                </button>
              )}

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Duration</span>
                  <span className="font-medium">{representativeCourse.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Level</span>
                  <span className="font-medium capitalize">{representativeCourse.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span>Certificate</span>
                  <span className="font-medium">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span>Language</span>
                  <span className="font-medium">English</span>
                </div>
              </div>
            </div>

            {/* Related Pathways */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4">Related Pathways</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="relative w-10 h-10">
                    <Image
                      src="/logos/google.png"
                      alt="Related pathway"
                      fill
                      className="object-contain rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">Data Science & Analytics</div>
                    <div className="text-xs text-gray-500">3 courses</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="relative w-10 h-10">
                    <Image
                      src="/logos/microsoft.png"
                      alt="Related pathway"
                      fill
                      className="object-contain rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">Cloud & DevOps</div>
                    <div className="text-xs text-gray-500">3 courses</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PathwayDetail