'use client';

import { profileData } from '../utils/data';
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-white p-2">
                  <img
                    src={profileData.photoUrl}
                    alt={profileData.name}
                    className="w-full h-full rounded-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/320x320/3b82f6/ffffff?text=JV';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {profileData.name}
            </h1>
            <h2 className="text-xl lg:text-2xl text-blue-600 font-semibold mb-6">
              {profileData.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {profileData.bio}
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <FaMapMarkerAlt className="text-gray-400" />
                <span className="text-gray-600">{profileData.location}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <FaEnvelope className="text-gray-400" />
                <a 
                  href={`mailto:${profileData.email}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {profileData.email}
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <FaPhone className="text-gray-400" />
                <a 
                  href={`tel:${profileData.phone}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {profileData.phone}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href={`https://${profileData.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center space-x-2"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                href="#contact"
                className="btn-secondary"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 