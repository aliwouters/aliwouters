"use client"

import SiteNav from "@/components/SiteNav"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, Video, Target, ExternalLink, Play, Home } from "lucide-react"
import Image from "next/image"

export default function AuliTechPage() {
  return (
    <div className="portfolio-inner case-study min-h-screen bg-white text-[#1b334b]">
      {/* Navigation */}
      <SiteNav />

      <div id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="page-introduction mb-16">
          <div className="mb-6">
            <Image
              src="/images/auli-tech-logo.png"
              alt="Auli Tech logo - Autonomous Living Technologies"
              width={300}
              height={80}
              className="h-16 w-auto mx-auto"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Assistive Technology Intern</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering independence through assistive technology and vocational skill development
          </p>
        </div>

        {/* About Auli Tech Section */}
        <div className="case-section mb-12">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Auli Tech</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Auli Tech (Autonomous Living Technologies) is on a mission to eliminate challenges in daily living for
                people with disabilities. They develop innovative assistive technology solutions that remove impediments
                to living, with their flagship product being the Cato - an affordable alternative to traditional
                eye-tracking systems.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.auli.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#285c8a] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Visit Auli Tech Website
                </a>
                <a
                  href="https://films.radiowest.org/film/autonomous"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#285c8a] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <Play className="w-5 h-5" />
                  Watch Spero's Story
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="overflow-hidden border border-[#cbd9e4]">
                <Image
                  src="/images/auli-tech-website.jpeg"
                  alt="Auli Tech website showing team photo and mission statement"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* The Cato Device */}
        <div className="case-section mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet Cato</h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              The Cato is Auli Tech's innovative assistive technology device that provides an affordable alternative to
              traditional eye-tracking systems, enabling greater independence for people with mobility challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="case-note   flex items-center justify-center">
                <Image
                  src="/images/cato-device.png"
                  alt="Cato assistive technology device - yellow rounded device with colored buttons"
                  width={300}
                  height={300}
                  className="w-full max-w-xs h-auto object-contain"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-6">
                <div className="case-note   ">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#285c8a] rounded-full mt-2 flex-shrink-0"></span>
                      Affordable alternative to expensive eye-tracking systems
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#285c8a] rounded-full mt-2 flex-shrink-0"></span>
                      Intuitive button-based interface for easy navigation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#285c8a] rounded-full mt-2 flex-shrink-0"></span>
                      Designed for users with limited mobility
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#285c8a] rounded-full mt-2 flex-shrink-0"></span>
                      Enables computer control and communication
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My Role & Project */}
        <div className="case-section mb-12">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-[#285c8a]" />
                Vocational Skills Development Project
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I worked directly with a quadriplegic student to help her develop vocational skills in marketing and
                content creation. Together, we used Synthesia.io to create professional marketing videos showcasing best
                practices for using Auli Tech's Cato device, helping her build a YouTube channel and gain valuable
                marketing experience.
              </p>

              <div className="space-y-6">
                <div className="case-note   ">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-[#285c8a]" />
                    Project Objectives
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#285c8a] rounded-full mt-2 flex-shrink-0"></span>
                      Teach Synthesia.io video creation platform
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#285c8a] rounded-full mt-2 flex-shrink-0"></span>
                      Develop marketing and communication skills
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#285c8a] rounded-full mt-2 flex-shrink-0"></span>
                      Create educational content about Cato usage
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#285c8a] rounded-full mt-2 flex-shrink-0"></span>
                      Build vocational skills for career development
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="case-note  ">
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Video className="w-5 h-5 text-[#285c8a]" />
                  Student's First Video
                </h4>
                <div className="relative">
                  <div className="rounded-lg overflow-hidden border border-[#cbd9e4] mb-4">
                    <Image
                      src="/images/brooklynn-watson-video.png"
                      alt="YouTube video thumbnail showing Brooklynn Watson - Thriving on Assistive Tech, Interviewed by Alizee Wouters"
                      width={400}
                      height={225}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="text-center mb-6">
                    <p className="text-sm text-gray-600 mb-4">
                      "Brooklynn Watson: Thriving on Assistive Tech" - An interview showcasing her journey and the
                      impact of assistive technology on independence.
                    </p>
                    <a
                      href="https://www.youtube.com/watch?v=QH_3apVr4Ng"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#285c8a] hover:bg-[#285c8a] text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      <Play className="w-4 h-4" />
                      Watch on YouTube
                    </a>
                  </div>

                  {/* Project Philosophy - moved from Impact section */}
                  <div className="bg-white/80 rounded-lg p-4 border border-[#cbd9e4]">
                    <h4 className="font-semibold text-gray-800 mb-3">Project Philosophy</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      This collaboration demonstrated that technology is most powerful when it serves to amplify human
                      potential and create opportunities for independence, creativity, and professional growth. By
                      combining assistive technology with vocational skill development, we created a pathway for
                      meaningful career development in the digital marketing space.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-12 h-12 bg-[#285c8a] text-white rounded-full transition-all duration-300 flex items-center justify-center z-50 opacity-80 hover:opacity-100"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  )
}
