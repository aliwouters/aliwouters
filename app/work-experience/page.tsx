"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Home } from "lucide-react"

export default function WorkExperiencePage() {
  return (
    <div className="min-h-screen bg-[#fbfdff]">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 sm:py-6">
            <Link href="/" className="text-xl sm:text-2xl font-light text-slate-900 tracking-wide">
              Alizee Wouters
            </Link>
            <Button asChild variant="outline" size="sm" className="border-slate-300 bg-transparent">
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Home</span>
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="pt-12 sm:pt-16 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-left mb-16 sm:mb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#182d48] mb-5 sm:mb-7">
              Professional Experience
            </h1>
            
            <p className="text-base sm:text-lg text-[#53677d] max-w-2xl leading-relaxed">
              My industry experience spans innovative companies and organizations, each contributing to developing my
              skills in technology, engineering, and research.
            </p>
          </div>

          {/* Experience index: logo, position and full description in horizontal rows. */}
          <div className="border-t border-[#c6d5e2]">
            {[
              { company: "Psyonic", image: "/images/psyonic-logo.png", role: "Mechatronics Intern", description: "Contributing to cutting-edge prosthetic technology development at a leading bionic limb company, focusing on user-centered testing and control system fabrication.", href: "/work-experience/psyonic" },
              { company: "Auli Tech", image: "/images/auli-tech-logo.png", role: "Assistive Technology Intern", description: "Mentored a quadriplegic user in marketing and content creation, producing professional demo videos with Synthesia.io and launching a YouTube channel to showcase the Cato assistive device.", href: "/work-experience/auli-tech" },
              { company: "Syntermed", image: "/images/syntermed-logo.png", role: "Neuronuclear Medicine and Imaging Consultant", description: "Conducting quantitative neuroimaging research on brain PET analysis and Alzheimer's disease, quantifying and validating FDG-PET scans and analyzing tau accumulation and glucose metabolism with Python.", href: "/work-experience/syntermed" },
              { company: "UCLA Makerspace", image: "/images/makerspace-logo.png", role: "Makerspace Technician", description: "Managed technical equipment and facilitated student projects in UCLA's makerspace from 2023 to 2026, providing expertise in 3D printing, laser cutting, and advanced manufacturing techniques.", href: "/work-experience/makerspace" },
              { company: "Braave", image: "/images/braave-logo.png", role: "R&D Consultant", description: "Developed biological sensor integration methods for Braave's wearable product line, preparing the seamlessly embedded sensing technology for clinical trials.", href: "/work-experience/braave" },
            ].map((item) => (
              <article key={item.href} className="grid md:grid-cols-[minmax(0,0.25fr)_minmax(0,0.75fr)] lg:grid-cols-[minmax(0,0.23fr)_minmax(0,0.27fr)_minmax(0,0.5fr)] gap-4 md:gap-7 lg:gap-10 border-b border-[#c6d5e2] py-8 sm:py-11 items-start">
                <div className="min-h-16 flex items-start">
                  <Image src={item.image} alt={`${item.company} logo`} width={210} height={84} className="max-h-16 w-auto max-w-[175px] object-contain object-left" />
                </div>
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#1c304c] leading-snug">{item.role}</h2>
                <div>
                  <p className="text-[#53677d] leading-[1.7] text-base mb-5">{item.description}</p>
                  <Link href={item.href} className="inline-flex items-center gap-2 text-[#295b98] font-medium hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#295b98]">
                    View experience <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-[#315e8d] hover:bg-[#20476f] text-white rounded-sm transition-colors duration-200 flex items-center justify-center z-50 opacity-90"
        aria-label="Back to top"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  )
}
