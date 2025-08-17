'use client';

import { useState } from 'react';
import { pathways } from '@/lib/pathways-data';
import { getPlatformLogo } from '@/lib/platform-logos';
import { ExternalLink, Clock, Building } from 'lucide-react';
import Image from 'next/image';

export default function PathwaysPage() {
  const [activeSection, setActiveSection] = useState<string>('all');

  // Track image fallback states without using hooks inside loops
  const [headerLogoError, setHeaderLogoError] = useState<Record<string, boolean>>({});
  const [cardImageError, setCardImageError] = useState<Record<string, boolean>>({});
  const [cardLogoError, setCardLogoError] = useState<Record<string, boolean>>({});

  const filteredPathways = activeSection === 'all'
    ? pathways
    : pathways.filter(pathway => pathway.id === activeSection);

  const defaultLogo = '/logos/coursera.png';
  const cardKey = (pathwayId: string, index: number) => `${pathwayId}:${index}`;

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Learning <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Pathways</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
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
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
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
              <div className="flex items-center justify-center mb-8">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={headerLogoError[pathway.id] ? defaultLogo : (pathway.logo || defaultLogo)}
                    alt={`${pathway.section} logo`}
                    fill
                    className="object-contain"
                    onError={() => setHeaderLogoError((prev) => ({ ...prev, [pathway.id]: true }))}
                    sizes="48px"
                    priority
                    loading="eager"
                  />
                </div>
                <h2 className="text-3xl font-bold text-white text-center">
                  {pathway.section}
                </h2>
              </div>

              {/* Course Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pathway.courses.map((course, index) => {
                  const key = cardKey(pathway.id, index);
                  const imageFailed = !!cardImageError[key];
                  const logoFailed = !!cardLogoError[key];

                  return (
                    <div
                      key={index}
                      className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                    >
                      {/* Course Image */}
                      <div className="relative h-48 bg-gray-800 overflow-hidden">
                        {!imageFailed ? (
                          <Image
                            src={course.image || defaultLogo}
                            alt={course.title}
                            fill
                            className="object-contain p-6 opacity-90"
                            onError={() => setCardImageError((prev) => ({ ...prev, [key]: true }))}
                            sizes="(max-width: 768px) 100vw, 33vw"
                            loading="eager"
                          />
                        ) : null}

                        {/* Fallback gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30 items-center justify-center ${imageFailed ? 'flex' : 'hidden'}`}>
                          <div className="text-center">
                            <div className="relative w-20 h-20 mx-auto mb-2">
                              <Image
                                src={logoFailed ? defaultLogo : getPlatformLogo(course.platform)}
                                alt={`${course.platform.split(' ')[0]} logo`}
                                fill
                                className="object-contain"
                                onError={() => setCardLogoError((prev) => ({ ...prev, [key]: true }))}
                                sizes="80px"
                                loading="eager"
                              />
                            </div>
                            <p className="text-sm font-medium text-gray-300">{course.platform.split(' ')[0]}</p>
                          </div>
                        </div>
                      </div>

                      {/* Course Content */}
                      <div className="p-6 flex flex-col h-64">
                        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                          {course.title}
                        </h3>

                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                          <div className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            <span className="truncate">{course.platform}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{course.length}</span>
                          </div>
                        </div>

                        <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
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
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gray-800 rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-400 mb-6">
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