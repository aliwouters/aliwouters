"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Database, Microscope, Heart, Code, Brain } from "lucide-react"

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">Projects</h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A collection of technical projects spanning data science, anatomical engineering, experimental design, and
              personal explorations in engineering and technology.
            </p>
          </div>

          {/* Project Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Data Science & Engineering */}
            <Card className="h-full flex flex-col border-slate-200/50 hover:border-blue-300 transition-all duration-300 hover:shadow-lg group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-medium text-slate-900">Data Science & Engineering</CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Advanced statistical modeling, machine learning implementations, and data visualization projects
                  exploring complex datasets and algorithmic approaches.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                    Machine Learning
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                    Statistical Analysis
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                    Data Visualization
                  </Badge>
                </div>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/projects/data-science-engineering">View Projects</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Anatomical Engineering */}
            <Card className="h-full flex flex-col border-slate-200/50 hover:border-green-300 transition-all duration-300 hover:shadow-lg group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <Microscope className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-medium text-slate-900">Anatomical Engineering</CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Bio-inspired robotic systems, EMG-controlled devices, and soft robotics projects exploring the
                  intersection of biology and engineering for medical applications.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                    Soft Robotics
                  </Badge>
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                    EMG Control
                  </Badge>
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                    Bio-inspired Design
                  </Badge>
                </div>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/projects/anatomical-engineering">View Projects</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Neurotechnology */}
            <Card className="h-full flex flex-col border-slate-200/50 hover:border-purple-300 transition-all duration-300 hover:shadow-lg group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-medium text-slate-900">Neurotechnology</CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Brain-computer interfaces, EEG signal processing, and neural technology projects exploring emotion
                  detection, stress monitoring, and cognitive state classification systems.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-200">
                    EEG
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-200">
                    Brain-Computer Interface
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-200">
                    Signal Processing
                  </Badge>
                </div>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="/projects/neurotechnology">View Projects</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Computer Science */}
            <Card className="h-full flex flex-col border-slate-200/50 hover:border-orange-300 transition-all duration-300 hover:shadow-lg group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                  <Code className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl font-medium text-slate-900">Computer Science</CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Software development projects including C++ game programming and MATLAB-based computational psychology
                  experiments for experimental design, data collection, and behavioral research analysis.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200">
                    C++
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200">
                    MATLAB
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200">
                    Game Development
                  </Badge>
                </div>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link href="/projects/matlab">View Projects</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Personal Projects */}
            <Card className="h-full flex flex-col border-slate-200/50 hover:border-rose-300 transition-all duration-300 hover:shadow-lg group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-rose-200 transition-colors">
                  <Heart className="w-6 h-6 text-rose-600" />
                </div>
                <CardTitle className="text-xl font-medium text-slate-900">Personal Projects</CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Creative explorations, hobby projects, and personal interests that showcase diverse skills and passion
                  for continuous learning and innovation.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-rose-50 text-rose-700 border-rose-200">
                    Creative Design
                  </Badge>
                  <Badge variant="secondary" className="bg-rose-50 text-rose-700 border-rose-200">
                    3D Modeling
                  </Badge>
                  <Badge variant="secondary" className="bg-rose-50 text-rose-700 border-rose-200">
                    Innovation
                  </Badge>
                </div>
                <Button asChild className="w-full bg-rose-600 hover:bg-rose-700">
                  <Link href="/projects/personal">View Projects</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="mt-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8">
            <div className="text-center">
              <h2 className="text-2xl font-medium text-slate-900 mb-4">Project Philosophy</h2>
              <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Each project represents a commitment to rigorous methodology, innovative problem-solving, and continuous
                learning. From theoretical foundations to practical implementations, these works demonstrate the
                intersection of academic knowledge and real-world application.
              </p>
            </div>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 opacity-80 hover:opacity-100"
            aria-label="Back to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
