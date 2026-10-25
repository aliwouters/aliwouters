"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { CategoryTile, type CategoryTileItem } from "@/components/category-tile"

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
      "Experimental psychology research in the Zili Lab, investigating human behavior, decision-making, and cognitive mechanisms in controlled laboratory settings.",
    tags: ["Behavioral Experiments", "Data Analysis", "Research Collaboration"],
    color: "emerald",
    cta: "Explore research",
  },
]

const ResearchPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="text-2xl font-light text-slate-900 tracking-wide">
              Alizee Wouters
            </Link>
            <Button asChild variant="outline" size="sm" className="border-slate-300 bg-transparent">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Home
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="pt-16 pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">Research Experience</h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              My research spans multiple disciplines, from biomedical engineering to neurotechnology and cognitive
              science, each contributing to our understanding of human-machine interfaces and biological systems.
            </p>
          </div>

          {/* Research Areas */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {researchAreas.map((item) => (
              <CategoryTile key={item.href} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 opacity-80 hover:opacity-100"
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
