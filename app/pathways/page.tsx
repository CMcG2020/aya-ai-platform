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

  // Use a more reliable default logo - try multiple fallbacks
  const defaultLogo = '/logos/coursera.png';
  const ultimateFallback = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzM3NDE1MSIvPgo8cGF0aCBkPSJNMTIgMTZIMjhWMjRIMTJWMTZaIiBmaWxsPSIjNkI3Mjg0Ii8+CjxwYXRoIGQ9Ik0xNiAxMkgyNFYxNkgxNlYxMloiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
  
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
            className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
              activeSection === 'all'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            All Pathways
          </button>
          {pathways.map((pathway) => (
            <button
              key={pathway.id}
              onClick={() => setActiveSection(pathway.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeSection === pathway.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {pathway.section}
            </button>
          ))}
        </div>

        {/* Course Sections */}
        <div className="space-y-16">
          {filteredPathways.map((pathway) => {
            const headerLogoFailed = headerLogoError[pathway.id];
            
            return (
              <section key={pathway.id} className="space-y-8">
                {/* Section Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    {!headerLogoFailed ? (
                      <Image
                        src={pathway.logo || defaultLogo}
                        alt={`${pathway.section} logo`}
                        fill
                        className="object-contain rounded-lg"
                        onError={() => setHeaderLogoError((prev) => ({ ...prev, [pathway.id]: true }))}
                        sizes="64px"
                        loading="eager"
                      />
                    ) : (
                      <Image
                        src={ultimateFallback}
                        alt={`${pathway.section} logo`}
                        fill
                        className="object-contain rounded-lg"
                        sizes="64px"
                        loading="eager"
                      />
                    )}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{pathway.section}</h2>
                    <p className="text-gray-400 mt-1">{pathway.courses.length} courses available</p>
                  </div>
                </div>

                {/* Course Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pathway.courses.map((course, index) => {
                    const key = cardKey(pathway.id, index);
                    const imageFailed = cardImageError[key];
                    const logoFailed = cardLogoError[key];
                    
                    return (
                      <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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
                                {!logoFailed ? (
                                  <Image
                                    src={getPlatformLogo(course.platform)}
                                    alt={`${course.platform.split(' ')[0]} logo`}
                                    fill
                                    className="object-contain"
                                    onError={() => setCardLogoError((prev) => ({ ...prev, [key]: true }))}
                                    sizes="80px"
                                    loading="eager"
                                  />
                                ) : (
                                  <Image
                                    src={ultimateFallback}
                                    alt={`${course.platform.split(' ')[0]} logo`}
                                    fill
                                    className="object-contain"
                                    sizes="80px"
                                    loading="eager"
                                  />
                                )}
                              </div>
                              <p className="text-sm font-medium text-gray-300">{course.platform.split(' ')[0]}</p>
                            </div>
                          </div>
                        </div>

                        {/* Course Content */}
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                            {course.title}
                          </h3>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                            <div className="flex items-center space-x-1">
                              <Building className="w-4 h-4" />
                              <span>{course.platform}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{course.length}</span>
                            </div>
                          </div>

                          <p className="text-gray-300 text-sm mb-6 line-clamp-3">
                            {course.summary}
                          </p>

                          <a
                            href={course.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                          >
                            <span>Start Course</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 py-12 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose a pathway that aligns with your goals and start building the skills that will shape your future in AI and technology.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl">
            Explore All Courses
          </button>
        </div>
      </div>
    </div>
  );
}