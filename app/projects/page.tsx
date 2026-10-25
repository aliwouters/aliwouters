"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { CategoryTile, type CategoryTileItem } from "@/components/category-tile"

const categories: CategoryTileItem[] = [
  {
    href: "/projects/data-science-engineering",
    title: "Data Science & Engineering",
    description:
      "Statistical modeling, machine learning, and visualization work that turns messy, complex datasets into clear answers.",
    tags: ["Machine Learning", "Statistical Analysis", "Data Visualization"],
    color: "blue",
    cta: "Explore projects",
    layout: "md:col-span-2",
  },
  {
    href: "/projects/anatomical-engineering",
    title: "Anatomical Engineering",
    description:
      "Bio-inspired robotics, EMG-controlled devices, and soft actuators built where biology meets mechanical design.",
    tags: ["Soft Robotics", "EMG Control", "Bio-inspired Design"],
    color: "green",
    cta: "Explore projects",
    layout: "md:col-span-2",
  },
  {
    href: "/projects/neurotechnology",
    title: "Neurotechnology",
    description:
      "Brain-computer interfaces and EEG signal processing for detecting emotion, stress, and cognitive state.",
    tags: ["EEG", "Brain-Computer Interface", "Signal Processing"],
    color: "purple",
    cta: "Explore projects",
    layout: "md:col-span-2",
  },
  {
    href: "/projects/matlab",
    title: "Computer Science",
    description:
      "C++ game programming and MATLAB-built psychology experiments for data collection and behavioral research.",
    tags: ["C++", "MATLAB", "Game Development"],
    color: "orange",
    cta: "Explore projects",
    layout: "md:col-span-2 md:col-start-2",
  },
  {
    href: "/projects/personal",
    title: "Personal Projects",
    description:
      "Creative side projects, 3D models, and hobby builds driven by curiosity rather than a syllabus.",
    tags: ["Creative Design", "3D Modeling", "Innovation"],
    color: "rose",
    cta: "Explore projects",
    layout: "md:col-span-2",
  },
]

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
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {categories.map((item) => (
              <CategoryTile key={item.href} item={item} />
            ))}
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
