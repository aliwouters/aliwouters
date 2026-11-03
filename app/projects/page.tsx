"use client"

import SiteNav from "@/components/SiteNav"
import VisualDirectory from "@/components/VisualDirectory"

import { useEffect } from "react"
import { type CategoryTileItem } from "@/components/category-tile"

const categories: CategoryTileItem[] = [
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
    href: "/projects/experimental-design",
    title: "Experimental Design",
    description: "MATLAB and Psychtoolbox experiments in perception, reaction time, and mood assessment.",
    tags: [],
    color: "blue",
    cta: "Explore projects",
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
    <div className="portfolio-inner min-h-screen bg-white text-[#1b334b]">
      {/* Navigation */}
      <SiteNav />

      <div id="main-content" className="pt-16 pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="page-introduction directory-introduction mb-12">
            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">Projects</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A collection of technical projects spanning data science, anatomical engineering, experimental design, and
              personal explorations in engineering and technology.
            </p>
          </div>

          {/* Project Categories Grid */}
          <VisualDirectory items={categories} label="Projects" />

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
    </div>
  )
}
