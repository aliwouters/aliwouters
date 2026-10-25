"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { CategoryTile, type CategoryTileItem } from "@/components/category-tile"

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
            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">Community Engagement</h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Building meaningful connections through educational outreach, philosophical discourse, and recreational
              leadership that fosters inclusive communities and lifelong learning.
            </p>
          </div>

          {/* Community Involvement Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {involvements.map((item) => (
              <CategoryTile key={item.href} item={item} />
            ))}
          </div>

          {/* Community Impact Statement */}
          <div className="mt-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8">
            <div className="text-center">
              <h2 className="text-2xl font-medium text-slate-900 mb-4">Community Philosophy</h2>
              <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
                True community engagement transcends individual achievement, creating spaces where diverse perspectives
                converge to foster learning, growth, and meaningful connections. Through education, dialogue, and shared
                experiences, we build bridges that strengthen our collective understanding and create lasting positive
                impact.
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
