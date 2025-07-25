'use client';

import { useState } from 'react';
import { pathways, PathwaySection } from '@/lib/pathways-data';
import { ExternalLink, Clock, Building } from 'lucide-react';

export default function PathwaysPage() {
  const [activeSection, setActiveSection] = useState<string>('all');

  const filteredPathways = activeSection === 'all' 
    ? pathways 
    : pathways.filter(pathway => pathway.id === activeSection);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Learning <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Pathways</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Structured learning roadmaps to advance your career in AI and technology. 
            Choose your path and start building the skills that matter.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveSection('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeSection === 'all'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            All Courses
          </button>
          {pathways.map((pathway) => (
            <button
              key={pathway.id}
              onClick={() => setActiveSection(pathway.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeSection === pathway.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {pathway.section}
            </button>
          ))}
        </div>

        {/* Course Sections */}
        <div className="space-y-16">
          {filteredPathways.map((pathway) => (
            <section key={pathway.id} id={pathway.id}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {pathway.section}
              </h2>
              
              {/* Course Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pathway.courses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    {/* Course Image */}
                    <div className="relative h-48 bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback to gradient background if image fails to load
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      {/* Fallback gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 flex items-center justify-center">
                        <div className="text-center text-gray-600">
                          <Building className="w-12 h-12 mx-auto mb-2 opacity-50" />
                          <p className="text-sm font-medium">{course.platform.split(' ')[0]}</p>
                        </div>
                      </div>
                    </div>

                    {/* Course Content */}
                    <div className="p-6 flex flex-col h-64">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {course.title}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          <span className="truncate">{course.platform}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.length}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                        {course.summary}
                      </p>

                      {/* Course Link */}
                      <a
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 group/link"
                      >
                        <span>Start Learning</span>
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Choose a course that aligns with your goals and start building the skills that will advance your career in tech.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
              Take Our Quiz to Find Your Path
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
