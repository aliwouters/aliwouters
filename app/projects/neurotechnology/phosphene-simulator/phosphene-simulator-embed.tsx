"use client"

import Link from "next/link"
import { ArrowLeft, Home, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PhospheneSimulatorEmbed() {
  return (
    <div className="flex flex-col h-screen bg-neutral-950">
      {/* Navigation Bar */}
      <nav className="bg-neutral-950 border-b border-neutral-800 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link
              href="/"
              className="text-xl font-light text-neutral-100 tracking-wide"
            >
              Alizee Wouters
            </Link>
            <div className="flex gap-3">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-neutral-600 bg-transparent text-neutral-300 hover:bg-neutral-800 hover:text-white"
              >
                <Link href="/" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  <span className="hidden sm:inline">Home</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-neutral-600 bg-transparent text-neutral-300 hover:bg-neutral-800 hover:text-white"
              >
                <Link
                  href="/projects/neurotechnology"
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Neurotechnology</span>
                </Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="bg-teal-600 hover:bg-teal-700 text-white"
              >
                <a
                  href="https://github.com/aliwouters/Phosphene-Vision-Simulator-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden sm:inline">Source Code</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Iframe Container */}
      <div className="flex-1 relative">
        <iframe
          src="https://v0-alizee-wouters-personal.vercel.app"
          title="Phosphene Vision Simulator"
          className="absolute inset-0 w-full h-full border-0"
          allow="camera; microphone; fullscreen; accelerometer; gyroscope"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals allow-downloads"
        />
      </div>
    </div>
  )
}
