"use client"

import SiteNav from "@/components/SiteNav"

import Link from "next/link"
import { ArrowLeft, Home, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PhospheneSimulatorEmbed() {
  return (
    <div className="flex flex-col h-screen bg-neutral-950">
      {/* Navigation Bar */}
      <SiteNav />
      <div className="bg-white px-6 py-3 text-sm text-[#285c8a]"><a href="https://github.com/aliwouters/Phosphene-Vision-Simulator-" target="_blank" rel="noopener noreferrer">View simulator source code ↗</a></div>

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
