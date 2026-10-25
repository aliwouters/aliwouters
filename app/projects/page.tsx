"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

type ProjectCategory = {
  href: string
  category: string
  description: string
  tags: string[]
  layout: string
  bar: string
  kicker: string
  hoverTitle: string
  hoverBorder: string
}

const categories: ProjectCategory[] = [
  {
    href: "/projects/data-science-engineering",
    category: "Data Science & Engineering",
    description:
      "Statistical modeling, machine learning, and visualization work that turns messy, complex datasets into clear answers.",
    tags: ["Machine Learning", "Statistical Analysis", "Data Visualization"],
    layout: "md:col-span-2",
    bar: "bg-blue-600",
    kicker: "text-blue-700",
    hoverTitle: "group-hover:text-blue-700",
    hoverBorder: "hover:border-blue-300",
  },
  {
    href: "/projects/anatomical-engineering",
    category: "Anatomical Engineering",
    description:
      "Bio-inspired robotics, EMG-controlled devices, and soft actuators built where biology meets mechanical design.",
    tags: ["Soft Robotics", "EMG Control", "Bio-inspired Design"],
    layout: "md:col-span-2",
    bar: "bg-green-600",
    kicker: "text-green-700",
    hoverTitle: "group-hover:text-green-700",
    hoverBorder: "hover:border-green-300",
  },
  {
    href: "/projects/neurotechnology",
    category: "Neurotechnology",
    description:
      "Brain-computer interfaces and EEG signal processing for detecting emotion, stress, and cognitive state.",
    tags: ["EEG", "Brain-Computer Interface", "Signal Processing"],
    layout: "md:col-span-2",
    bar: "bg-purple-600",
    kicker: "text-purple-700",
    hoverTitle: "group-hover:text-purple-700",
    hoverBorder: "hover:border-purple-300",
  },
  {
    href: "/projects/matlab",
    category: "Computer Science",
    description:
      "C++ game programming and MATLAB-built psychology experiments for data collection and behavioral research.",
    tags: ["C++", "MATLAB", "Game Development"],
    layout: "md:col-span-2 md:col-start-2",
    bar: "bg-orange-600",
    kicker: "text-orange-700",
    hoverTitle: "group-hover:text-orange-700",
    hoverBorder: "hover:border-orange-300",
  },
  {
    href: "/projects/personal",
    category: "Personal Projects",
    description:
      "Creative side projects, 3D models, and hobby builds driven by curiosity rather than a syllabus.",
    tags: ["Creative Design", "3D Modeling", "Innovation"],
    layout: "md:col-span-2",
    bar: "bg-rose-600",
    kicker: "text-rose-700",
    hoverTitle: "group-hover:text-rose-700",
    hoverBorder: "hover:border-rose-300",
  },
]

function CategoryTile({ item }: { item: ProjectCategory }) {
  return (
    <Link
      href={item.href}
      className={`group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${item.hoverBorder} ${item.layout}`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-[0.25] transition-transform duration-500 group-hover:scale-x-100 ${item.bar}`}
      />
      <h2
        className={`text-xl font-medium text-slate-900 text-balance transition-colors duration-300 ${item.hoverTitle}`}
      >
        {item.category}
      </h2>
      <p className="mt-4 leading-relaxed text-slate-600 text-pretty">{item.description}</p>
      <p className="mt-6 text-sm text-slate-500">{item.tags.join("  ·  ")}</p>
      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
        <span className="text-sm font-medium text-slate-900">Explore projects</span>
        <span
          aria-hidden="true"
          className={`text-lg transition-transform duration-300 group-hover:translate-x-1 ${item.kicker}`}
        >
          {"→"}
        </span>
      </div>
    </Link>
  )
}

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
