"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Brain, FlaskConical, ArrowRight } from "lucide-react"

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
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group">
              <div className="bg-white rounded-3xl p-8 border border-slate-200/50 hover:border-purple-200 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <FlaskConical className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-slate-900 mb-2">Anatomical Engineering</h3>
                  <p className="text-purple-600 font-medium mb-4 text-sm">Biomedical Research Lab</p>
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                    Conducting research in biomedical engineering with focus on anatomical systems, motion analysis, and
                    biomechanical modeling to understand human movement and develop better medical devices.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">
                      Motion Capture Analysis
                    </span>
                    <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">
                      Biomechanical Modeling
                    </span>
                    <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">
                      Lab Research
                    </span>
                  </div>
                </div>
                <div className="mt-auto">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white w-full"
                  >
                    <Link href="/research/anatomical-engineering" className="flex items-center justify-center gap-2">
                      Explore Research
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-3xl p-8 border border-slate-200/50 hover:border-emerald-200 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-slate-900 mb-2">Cognitive Science</h3>
                  <p className="text-emerald-600 font-medium mb-4 text-sm">Zili Lab Research</p>
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                    Investigating cognitive processes through experimental psychology research, focusing on human
                    behavior, decision-making, and cognitive mechanisms in controlled laboratory settings.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium">
                      Behavioral Experiments
                    </span>
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium">
                      Data Analysis
                    </span>
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium">
                      Research Collaboration
                    </span>
                  </div>
                </div>
                <div className="mt-auto">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white w-full"
                  >
                    <Link href="/research/cognitive-science" className="flex items-center justify-center gap-2">
                      Explore Research
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
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
