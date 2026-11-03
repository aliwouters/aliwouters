"use client"

import SiteNav from "@/components/SiteNav"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, BookOpen, MessageCircle, ExternalLink } from "lucide-react"

export default function PlatoSocietyPage() {
  return (
    <div className="portfolio-inner case-study min-h-screen bg-white text-[#1b334b]">
      {/* Navigation */}
      <SiteNav />

      <div id="main-content" className="pt-16 pb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="page-introduction mb-16">
            <div className="w-32 h-32 bg-white mb-8 flex items-center justify-center mx-auto border border-slate-200/50">
              <Image
                src="/images/plato-society-logo.png"
                alt="Plato Society Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">Plato Society</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Participating in weekly discussion groups with elderly community members, exploring the implications of
              artificial intelligence across multiple sectors through Ray Kurzweil's "The Singularity is Nearer: When We
              Merge with AI."
            </p>

            {/* Website Link */}
            <div className="flex justify-center">
              <Button
                asChild
                variant="outline"
                className="border-[#cbd9e4] text-[#285c8a] hover:bg-[#eef4f8] bg-transparent"
              >
                <Link
                  href="https://www.theplatosociety.org/?gad_source=1&gad_campaignid=6504429560&gbraid=0AAAAADP0sC_BKsjM4XG7oC6-6jkRpZWgX&gclid=Cj0KCQjw4qHEBhCDARIsALYKFNOhmPPPdNQFG_a8UXckcm5oDmau8tiGVtOM6uZmu8gpCzOxiQmmoHgaAqSBEALw_wcBi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Visit Plato Society Website
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Discussion Group Experience */}
          <div className="space-y-16">
            <div className="case-study-block">
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-5">
                  <div className="relative w-full h-80 overflow-hidden">
                    <Image
                      src="/images/plato-society-meeting.jpeg"
                      alt="Plato Society discussion group meeting with elderly participants around a conference table"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">Weekly AI Discussion Group</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Participated in a structured weekly discussion group focused on Ray Kurzweil's "The Singularity is
                    Nearer: When We Merge with AI." Our diverse group of elderly community members engaged in thoughtful
                    analysis of artificial intelligence's transformative potential across multiple sectors.
                  </p>

                  <div className="case-note  ">
                    <h4 className="font-semibold text-slate-900 mb-3">Discussion Focus Areas</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#285c8a] rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-slate-700 text-sm">Economic implications of AI</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#285c8a] rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-slate-700 text-sm">Biological enhancement technologies</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#285c8a] rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-slate-700 text-sm">Longevity and life extension</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#285c8a] rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-slate-700 text-sm">Environmental sustainability</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#285c8a] rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-slate-700 text-sm">Political and social structures</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#285c8a] rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-slate-700 text-sm">Ethical considerations</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-study-block">
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-10">
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">Book Study: "The Singularity is Nearer"</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Our group conducted an in-depth analysis of Ray Kurzweil's latest work, examining his predictions
                    about the convergence of human and artificial intelligence. We explored the timeline and
                    implications of technological singularity across various domains of human experience.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="case-note  ">
                      <h4 className="font-semibold text-slate-900 mb-3">Key Themes Explored</h4>
                      <ul className="text-slate-700 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-[#285c8a] rounded-full mt-2 flex-shrink-0"></span>
                          Human-AI merger predictions
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-[#285c8a] rounded-full mt-2 flex-shrink-0"></span>
                          Exponential technology growth
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-[#285c8a] rounded-full mt-2 flex-shrink-0"></span>
                          Societal transformation scenarios
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-[#285c8a] rounded-full mt-2 flex-shrink-0"></span>
                          Consciousness and identity questions
                        </li>
                      </ul>
                    </div>

                    <div className="case-note  ">
                      <h4 className="font-semibold text-slate-900 mb-3">Discussion Format</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Weekly meetings featuring chapter-by-chapter analysis, group discussions on implications, and
                        intergenerational perspectives on technological change and its impact on society.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-study-block">
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-10">
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">Intergenerational Dialogue</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    As one of the younger participants in a group primarily composed of elderly community members, I
                    contributed a unique perspective on technology adoption and digital native experiences while
                    learning from the wisdom and life experience of older generations.
                  </p>

                  <div className="case-note  ">
                    <h4 className="font-semibold text-slate-900 mb-3">Unique Contributions</h4>
                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                      <div className="text-center">
                        <p className="text-sm text-slate-700">Tech-native perspective</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-slate-700">Bridge generational views</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-slate-700">Learn from experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Section */}
            <div className="case-note   text-[#1b334b]">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-medium mb-4">Personal & Intellectual Growth</h3>
                <p className="text-[#4b6174] leading-relaxed max-w-3xl mx-auto">
                  My participation in the Plato Society's AI discussion group provided invaluable experience in
                  intergenerational dialogue, critical analysis of emerging technologies, and thoughtful consideration
                  of humanity's technological future.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="case-note  ">
                  <h4 className="font-semibold mb-4">Skills Developed</h4>
                  <ul className="text-[#4b6174] space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#285c8a] rounded-full mt-2 flex-shrink-0"></span>
                      Cross-generational communication
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#285c8a] rounded-full mt-2 flex-shrink-0"></span>
                      Technology impact analysis
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#285c8a] rounded-full mt-2 flex-shrink-0"></span>
                      Ethical reasoning in AI contexts
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#285c8a] rounded-full mt-2 flex-shrink-0"></span>
                      Respectful intellectual discourse
                    </li>
                  </ul>
                </div>

                <div className="case-note  ">
                  <h4 className="font-semibold mb-4">Research Applications</h4>
                  <ul className="text-[#4b6174] space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#285c8a] rounded-full mt-2 flex-shrink-0"></span>
                      AI ethics in neurotechnology
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#285c8a] rounded-full mt-2 flex-shrink-0"></span>
                      Human-computer interaction design
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#285c8a] rounded-full mt-2 flex-shrink-0"></span>
                      Assistive technology implications
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#285c8a] rounded-full mt-2 flex-shrink-0"></span>
                      Future technology adoption patterns
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
