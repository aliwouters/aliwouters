"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, GraduationCap, Mountain } from "lucide-react"

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
            {/* Plato Society */}
            <Card className="h-full flex flex-col border-slate-200/50 hover:border-blue-300 transition-all duration-300 hover:shadow-lg group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-medium text-slate-900">Plato Society</CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Intergenerational philosophical discussions exploring AI's impact on society through weekly dialogue
                  sessions with community elders, fostering cross-generational understanding and critical thinking.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                    Philosophy
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                    AI Ethics
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                    Community Dialogue
                  </Badge>
                </div>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/community/plato-society">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* School Outreach */}
            <Card className="h-full flex flex-col border-slate-200/50 hover:border-green-300 transition-all duration-300 hover:shadow-lg group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <GraduationCap className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-medium text-slate-900">School Outreach</CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Educational program development and STEM mentorship through curriculum design, workshop facilitation,
                  and inspiring underrepresented students to pursue careers in science and technology.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                    STEM Education
                  </Badge>
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                    Curriculum Design
                  </Badge>
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                    Mentorship
                  </Badge>
                </div>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/community/school-outreach">View Programs</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Los Angeles Ski and Board Club */}
            <Card className="h-full flex flex-col border-slate-200/50 hover:border-purple-300 transition-all duration-300 hover:shadow-lg group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <Mountain className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-medium text-slate-900">Los Angeles Ski and Board Club</CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Leadership roles in UCLA's largest social club, making skiing and snowboarding accessible to over
                  1,500 college students through trip organization, corporate partnerships, and inclusive community
                  building.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-200">
                    Leadership
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-200">
                    Event Organization
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-200">
                    Community Building
                  </Badge>
                </div>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="/community/lasbc">Explore Leadership</Link>
                </Button>
              </CardContent>
            </Card>
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
        </div>
      </div>
    </div>
  )
}
