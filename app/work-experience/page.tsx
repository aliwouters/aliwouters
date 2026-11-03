"use client"

import SiteNav from "@/components/SiteNav"
import VisualDirectory from "@/components/VisualDirectory"


const experiences = [
              { company: "Psyonic", image: "/images/psyonic-logo.png", role: "Mechatronics Intern", description: "Contributing to cutting-edge prosthetic technology development at a leading bionic limb company, focusing on user-centered testing and control system fabrication.", href: "/work-experience/psyonic" },
              { company: "Auli Tech", image: "/images/auli-tech-logo.png", role: "Assistive Technology Intern", description: "Mentored a quadriplegic user in marketing and content creation, producing professional demo videos with Synthesia.io and launching a YouTube channel to showcase the Cato assistive device.", href: "/work-experience/auli-tech" },
              { company: "Syntermed", image: "/images/syntermed-logo.png", role: "Neuronuclear Medicine and Imaging Consultant", description: "Conducting quantitative neuroimaging research on brain PET analysis and Alzheimer's disease, quantifying and validating FDG-PET scans and analyzing tau accumulation and glucose metabolism with Python.", href: "/work-experience/syntermed" },
              { company: "UCLA Olympic Makerspace", image: "/images/makerspace-logo.png", role: "Makerspace Technician", description: "Managed technical equipment and facilitated student projects in UCLA's makerspace from 2023 to 2026, providing expertise in 3D printing, laser cutting, and advanced manufacturing techniques.", href: "/work-experience/makerspace" },
              { company: "Braave", image: "/images/braave-logo.png", role: "R&D Consultant", description: "Developed biological sensor integration methods for Braave's wearable product line, preparing the seamlessly embedded sensing technology for clinical trials.", href: "/work-experience/braave" },
]

export default function WorkExperiencePage() {
  return (
    <div className="experience-page min-h-screen bg-white">
      {/* Navigation */}
      <SiteNav />

      <div id="main-content" className="pt-12 sm:pt-16 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-left directory-introduction mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#182d48] mb-5 sm:mb-7">
              Professional Experience
            </h1>

            <p className="text-base sm:text-lg text-[#53677d] max-w-2xl leading-relaxed">
              Building and testing biomedical technology, analyzing brain imaging, and helping people use assistive devices.
            </p>
          </div>

          {/* Experience directory with linked entries and contextual media. */}
          <VisualDirectory label="Work experience" items={experiences.map(item => ({
            href: item.href, title: item.role, eyebrow: item.company, logo: item.image,
            description: item.description, tags: [], color: "blue" as const, cta: "View experience",
          }))} />
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
