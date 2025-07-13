'use client';

import { profileData } from '../utils/data';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Work Experience</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My professional journey in software development, from DevOps to Full Stack Engineering, working with cutting-edge technologies and global clients.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-200"></div>

          <div className="space-y-12">
            {profileData.experience.map((exp, index) => (
              <div key={exp.id} className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="card hover:shadow-lg transition-shadow duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                        <h4 className="text-lg font-semibold text-blue-600">{exp.company}</h4>
                      </div>
                      {exp.current && (
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Location and Date */}
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <FaMapMarkerAlt className="text-gray-400" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaCalendarAlt className="text-gray-400" />
                        <span>{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-3 mb-4">
                      {exp.description.map((desc, descIndex) => (
                        <p key={descIndex} className="text-gray-600 leading-relaxed">
                          • {desc}
                        </p>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="card text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Bridgewater State University</h4>
              <p className="text-lg text-blue-600 mb-2">BA Computer Science</p>
              <p className="text-gray-600 mb-2">Bridgewater, MA</p>
              <p className="text-gray-600">GPA: 3.7 • Sep 2019 - Dec 2021</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 