"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Cpu, ExternalLink, Home } from "lucide-react"
import Image from "next/image"

export default function BraavePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-blue-100">
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">R&amp;D Consultant</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-800 to-blue-950 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Braave &bull; November 2025 &ndash; December 2025
          </p>
        </div>

        {/* Organization Section */}
        <div className="bg-white rounded-3xl p-10 border border-blue-100 shadow-lg mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">The Company</h2>
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <div className="h-20 flex items-center justify-center mb-6">
              <Image
                src="/images/braave-logo.png"
                alt="Braave company logo"
                width={320}
                height={110}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Braave designs seamlessly integrated wearable sensing technology for women&apos;s health, embedding
              intimate biological sensors directly into everyday garments so that monitoring is invisible, soft, and
              designed for the female physiology.
            </p>
            <a
              href="https://braave.touchpoints.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-800 to-blue-950 hover:from-blue-900 hover:to-black text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              Visit Braave Website
            </a>
          </div>
        </div>

        {/* My Role Section */}
        <div className="bg-white rounded-3xl p-10 border border-blue-100 shadow-lg mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
            <Cpu className="w-6 h-6 text-blue-800" />
            My Role
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            As an R&amp;D consultant for Braave, I developed biological sensor integration methods for the company&apos;s
            wearable product line, working to embed sensing hardware into soft garments without compromising comfort or
            everyday wearability. My work focused on preparing this seamlessly integrated technology for clinical
            trials, bridging the gap between an early-stage sensing concept and a validated, testable product.
          </p>

          <div className="mt-8 grid gap-6">
            <figure className="overflow-hidden rounded-2xl border border-blue-100 bg-gray-50">
              <Image
                src="/images/braave-sensor-bra.png"
                alt="Braave wearable with a biological sensor seamlessly integrated into the left bra cup"
                width={2340}
                height={1160}
                className="w-full h-auto"
              />
              <figcaption className="px-6 py-4 text-sm text-gray-500 italic">
                Braave&apos;s sensor is seamlessly integrated into the left bra cup, enabling intimate sensing without
                bulk or invasiveness.
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-800 to-blue-950 hover:from-blue-900 hover:to-black text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 opacity-80 hover:opacity-100"
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
