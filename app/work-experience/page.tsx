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

          {/* Editorial experience grid: keep the original entries and destinations */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4">
              <article className="group border-t border-[#cedcea] pt-7 pb-10 flex flex-col">
                <div className="h-20 flex items-center justify-start mb-8">
                  <Image src="/images/psyonic-logo.png" alt="Psyonic logo" width="260" height="96" className="max-h-16 w-auto max-w-[210px] object-contain object-left" />
                </div>
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#1c304c] mb-4">Mechatronics Intern</h2>
                <p className="text-[#53677d] leading-relaxed text-base mb-7 flex-1">Contributing to cutting-edge prosthetic technology development at a leading bionic limb company, focusing on user-centered testing and control system fabrication.</p>
                <Link href="/work-experience/psyonic" className="group/link inline-flex items-center gap-2 self-start text-[#295b98] font-medium border-b border-[#8caccd] pb-1 hover:text-[#143b70] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#295b98]">
                  View experience <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
                </Link>
              </article>
              <article className="group border-t border-[#cedcea] pt-7 pb-10 flex flex-col">
                <div className="h-20 flex items-center justify-start mb-8">
                  <Image src="/images/auli-tech-logo.png" alt="Auli Tech logo" width="260" height="96" className="max-h-16 w-auto max-w-[210px] object-contain object-left" />
                </div>
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#1c304c] mb-4">Assistive Technology Intern</h2>
                <p className="text-[#53677d] leading-relaxed text-base mb-7 flex-1">Mentored a quadriplegic user in marketing and content creation, producing professional demo videos with Synthesia.io and launching a YouTube channel to showcase the Cato assistive device.</p>
                <Link href="/work-experience/auli-tech" className="group/link inline-flex items-center gap-2 self-start text-[#295b98] font-medium border-b border-[#8caccd] pb-1 hover:text-[#143b70] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#295b98]">
                  View experience <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
                </Link>
              </article>
              <article className="group border-t border-[#cedcea] pt-7 pb-10 flex flex-col">
                <div className="h-20 flex items-center justify-start mb-8">
                  <Image src="/images/syntermed-logo.png" alt="SynterMed logo" width="260" height="96" className="max-h-16 w-auto max-w-[210px] object-contain object-left" />
                </div>
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#1c304c] mb-4">Neuronuclear Medicine and Imaging Consultant</h2>
                <p className="text-[#53677d] leading-relaxed text-base mb-7 flex-1">Conducting quantitative neuroimaging research on brain PET analysis and Alzheimer&apos;s disease, quantifying and validating FDG-PET scans and analyzing tau accumulation and glucose metabolism with Python.</p>
                <Link href="/work-experience/syntermed" className="group/link inline-flex items-center gap-2 self-start text-[#295b98] font-medium border-b border-[#8caccd] pb-1 hover:text-[#143b70] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#295b98]">
                  View experience <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
                </Link>
              </article>
              <article className="group border-t border-[#cedcea] pt-7 pb-10 flex flex-col">
                <div className="h-20 flex items-center justify-start mb-8">
                  <Image src="/images/makerspace-logo.png" alt="UCLA Makerspace logo" width="260" height="96" className="max-h-16 w-auto max-w-[210px] object-contain object-left" />
                </div>
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#1c304c] mb-4">Makerspace Technician</h2>
                <p className="text-[#53677d] leading-relaxed text-base mb-7 flex-1">Managed technical equipment and facilitated student projects in UCLA's makerspace from 2023 to 2026, providing expertise in 3D printing, laser cutting, and advanced manufacturing techniques.</p>
                <Link href="/work-experience/makerspace" className="group/link inline-flex items-center gap-2 self-start text-[#295b98] font-medium border-b border-[#8caccd] pb-1 hover:text-[#143b70] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#295b98]">
                  View experience <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
                </Link>
              </article>
              <article className="group border-t border-[#cedcea] pt-7 pb-10 flex flex-col">
                <div className="h-20 flex items-center justify-start mb-8">
                  <Image src="/images/braave-logo.png" alt="Braave logo" width="260" height="96" className="max-h-16 w-auto max-w-[210px] object-contain object-left" />
                </div>
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#1c304c] mb-4">R&amp;D Consultant</h2>
                <p className="text-[#53677d] leading-relaxed text-base mb-7 flex-1">Developed biological sensor integration methods for Braave&apos;s wearable product line, preparing the seamlessly embedded sensing technology for clinical trials.</p>
                <Link href="/work-experience/braave" className="group/link inline-flex items-center gap-2 self-start text-[#295b98] font-medium border-b border-[#8caccd] pb-1 hover:text-[#143b70] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#295b98]">
                  View experience <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
                </Link>
              </article>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-[#2e609f] hover:bg-[#204e84] text-white rounded-full shadow-sm transition-all duration-300 flex items-center justify-center z-50 opacity-80 hover:opacity-100"
        aria-label="Back to top"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  )
}
