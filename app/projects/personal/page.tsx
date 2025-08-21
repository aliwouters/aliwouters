"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart } from "lucide-react"
import Image from "next/image"

export default function PersonalProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="text-2xl font-light text-slate-900 tracking-wide">
              Alizee Wouters
            </Link>
            <div className="flex gap-3">
              <Button asChild variant="outline" size="sm" className="border-slate-300 bg-transparent">
                <Link href="/projects" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16 pb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl mb-8 flex items-center justify-center mx-auto">
              <Heart className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">Personal Projects</h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-teal-600 to-teal-700 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Creative and personal projects that reflect my interests, hobbies, and passion for innovation outside of
              academic and professional work, showcasing diverse skills and creativity.
            </p>
          </div>

          {/* Projects Gallery */}
          <div className="space-y-16">
            {/* Personal Makerspace Projects */}
            <div className="bg-white rounded-3xl p-10 border border-slate-200/50 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-medium text-slate-900 mb-4">Personal Projects</h3>
                <p className="text-slate-600 leading-relaxed">
                  Creative projects pursued in and outside of the UCLA Makerspace, exploring new techniques, testing
                  equipment capabilities, and developing innovative solutions for personal interests and hobbies.
                </p>
              </div>

              {/* Personal project images - pulled from makerspace page */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/50">
                  <div className="relative w-48 h-48 mx-auto mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/personal-knife-box.jpeg"
                      alt="Japanese kitchen knife in presentation box"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2 text-center">
                    Handmade Damascus Steel Chefs Knife with a Walnut Handle
                  </h4>
                  <p className="text-slate-600 text-sm text-center">
                    I bought a chef's knife blade made from 66 layers of Damascus steel, then handcrafted a walnut wood
                    handle to complete it.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/50">
                  <div className="relative w-48 h-48 mx-auto mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/personal-wooden-frame.jpeg"
                      alt="Wooden frame with metal corner brackets"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2 text-center">Custom Picture Frame</h4>
                  <p className="text-slate-600 text-sm text-center">
                    I found a beautiful piece of wood on a hike. I woodworked the wood into a picture frame.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/50">
                  <div className="relative w-48 h-48 mx-auto mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/personal-charcuterie-board.jpeg"
                      alt="Handcrafted wooden charcuterie board with beautiful grain patterns"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2 text-center">Handcrafted Charcuterie Board</h4>
                  <p className="text-slate-600 text-sm text-center">
                    Custom designed and crafted wooden charcuterie board featuring beautiful natural grain patterns and
                    smooth curved edges, perfect for entertaining.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/50">
                  <div className="relative w-48 h-48 mx-auto mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/personal-batman-puzzle.jpeg"
                      alt="Custom laser-cut wooden Batman jigsaw puzzle"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2 text-center">Family Photo Wooden Puzzle</h4>
                  <p className="text-slate-600 text-sm text-center">
                    Laser engraved family photo with laser cut jigsaw shapes into eighth inch wood.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
