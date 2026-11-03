"use client"

import SiteNav from "@/components/SiteNav"
import VisualDirectory from "@/components/VisualDirectory"

import type React from "react"

import { type CategoryTileItem } from "@/components/category-tile"

const researchAreas: CategoryTileItem[] = [
  {
    href: "/research/anatomical-engineering",
    title: "Anatomical Engineering",
    description:
      "Biomedical research lab work focused on anatomical systems, motion analysis, and biomechanical modeling to understand human movement and develop better medical devices.",
    tags: ["Motion Capture Analysis", "Biomechanical Modeling", "Lab Research"],
    color: "purple",
    cta: "Explore research",
  },
  {
    href: "/research/cognitive-science",
    title: "Cognitive Science",
    description:
      "Experimental psychology research with Dr. Zili Liu and Lucy Cui at UCLA’s Perceptual Processing and Computational Lab.",
    tags: ["Behavioral Experiments", "Data Analysis", "Research Collaboration"],
    color: "emerald",
    cta: "Explore research",
  },
]

const ResearchPage: React.FC = () => {
  return (
    <div className="portfolio-inner min-h-screen bg-white text-[#1b334b]">
      {/* Navigation */}
      <SiteNav />

      <div id="main-content" className="pt-16 pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="page-introduction directory-introduction mb-12">
            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">Research Experience</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              My research spans multiple disciplines, from biomedical engineering to neurotechnology and cognitive
              science, each contributing to our understanding of human-machine interfaces and biological systems.
            </p>
          </div>

          {/* Research Areas */}
          <VisualDirectory items={researchAreas} label="Research" />
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
  )
}

export default ResearchPage
