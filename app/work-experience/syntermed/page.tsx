"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Activity, ExternalLink, Home } from "lucide-react"
import Image from "next/image"

export default function SynterMedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-violet-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Alizee Wouters
            </Link>
            <div className="flex gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href="/" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Home
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/work-experience" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Work Experience
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Neuronuclear Medicine and Imaging Consultant</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            SynterMed &amp; UCLA Health &bull; May 2026 &ndash; Present
          </p>
        </div>

        {/* Organizations Section */}
        <div className="bg-white rounded-3xl p-10 border border-violet-100 shadow-lg mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">The Organizations</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center text-center">
              <div className="h-24 flex items-center justify-center mb-6">
                <Image
                  src="/images/syntermed-logo.png"
                  alt="SynterMed company logo"
                  width={320}
                  height={110}
                  className="h-14 w-auto object-contain"
                />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                SynterMed develops advanced medical imaging software, including NeuroQ, used to quantify and analyze
                brain PET scans for neurological research and clinical diagnosis.
              </p>
              <a
                href="https://syntermed.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Visit SynterMed Website
              </a>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-24 flex items-center justify-center mb-6">
                <Image
                  src="/images/ucla-health-logo.png"
                  alt="UCLA Health logo"
                  width={320}
                  height={110}
                  className="h-20 w-auto object-contain"
                />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                UCLA Health is a top-ranked academic medical center whose Nuclear Medicine and Molecular Imaging program
                is a recognized leader in brain PET research.
              </p>
              <a
                href="https://uclahealth.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Visit UCLA Health Website
              </a>
            </div>
          </div>
        </div>

        {/* My Role Section */}
        <div className="bg-white rounded-3xl p-10 border border-violet-100 shadow-lg mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
            <Activity className="w-6 h-6 text-violet-500" />
            My Role &amp; Research
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At UCLA Health and SynterMed, I conduct quantitative neuroimaging research focused on brain PET analysis and
            Alzheimer&apos;s disease. My work includes quantifying FDG-PET scans with NeuroQ and validating the software
            across versions, processing settings, and diagnostic groups. I use Python to compare regional measurements,
            calculate agreement, run regressions, visualize results, and identify subject- and brain-region-level
            outliers.
          </p>
          <p className="text-gray-600 leading-relaxed">
            I also curate and process tau and FDG-PET datasets to investigate regional relationships between tau
            accumulation and glucose metabolism. By comparing these patterns across normal aging, mild cognitive
            impairment, and Alzheimer&apos;s disease, I evaluate how tau and FDG-PET can contribute to the detection and
            characterization of Alzheimer&apos;s disease.
          </p>

          <div className="mt-8 grid gap-6">
            <figure className="overflow-hidden rounded-2xl border border-violet-100 bg-gray-50">
              <Image
                src="/images/fdg-pet-montage.png"
                alt="Montage of FDG-PET axial brain slices showing regional glucose metabolism"
                width={2314}
                height={1440}
                className="w-full h-auto"
              />
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-violet-100 bg-gray-900">
              <Image
                src="/images/neuroq-analysis.png"
                alt="NeuroQ analysis interface comparing a patient brain PET scan against a normal template with cluster regions and regional Z-score tables"
                width={2555}
                height={1435}
                className="w-full h-auto"
              />
            </figure>
            <p className="text-center text-sm text-gray-500 italic">
              Note: research data shown has been anonymized.
            </p>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 opacity-80 hover:opacity-100"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  )
}
