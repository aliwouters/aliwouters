"use client"

import SiteNav from "@/components/SiteNav"
import VisualDirectory from "@/components/VisualDirectory"

import { useEffect } from "react"
import { type CategoryTileItem } from "@/components/category-tile"

const involvements: CategoryTileItem[] = [
  {
    href: "/community/plato-society",
    title: "Plato Society",
    description:
      "Intergenerational philosophical discussions exploring AI's impact on society through weekly dialogue sessions with community elders, fostering cross-generational understanding and critical thinking.",
    tags: ["Philosophy", "AI Ethics", "Community Dialogue"],
    color: "blue",
    cta: "Learn more",
  },
  {
    href: "/community/school-outreach",
    title: "School Outreach",
    description:
      "Educational program development and STEM mentorship through curriculum design, workshop facilitation, and inspiring underrepresented students to pursue careers in science and technology.",
    tags: ["STEM Education", "Curriculum Design", "Mentorship"],
    color: "green",
    cta: "View programs",
  },
  {
    href: "/community/lasbc",
    title: "Los Angeles Ski and Board Club",
    description:
      "Leadership roles in UCLA's largest social club, making skiing and snowboarding accessible to over 1,500 college students through trip organization, corporate partnerships, and inclusive community building.",
    tags: ["Leadership", "Event Organization", "Community Building"],
    color: "purple",
    cta: "Explore leadership",
  },
]

export default function CommunityPage() {
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
            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">Community Engagement</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Building meaningful connections through educational outreach, philosophical discourse, and recreational
              leadership that fosters inclusive communities and lifelong learning.
            </p>
          </div>

          {/* Community Involvement Grid */}
          <VisualDirectory items={involvements} label="Community" />

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
