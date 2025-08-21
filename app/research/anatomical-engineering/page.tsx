"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Microscope, Cog, Zap, ExternalLink, ArrowRight, Play, Database, BarChart3 } from "lucide-react"
import Image from "next/image"

export default function AnatomicalEngineeringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-green-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Alizee Wouters
            </Link>
            <div className="flex gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href="/research" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Research
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-6 flex items-center justify-center mx-auto">
            <Microscope className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Anatomical Engineering Research</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Advanced biomedical engineering research focusing on anatomical structures and medical applications
          </p>
        </div>

        {/* Lab Website Link */}
        <div className="bg-white rounded-3xl p-8 border border-green-100 shadow-lg mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Research Laboratory</h2>
              <p className="text-gray-600 mb-6">
                Visit our laboratory website to learn more about our ongoing research and publications in anatomical
                engineering. Our lab specializes in motion capture systems, biomechanical analysis, and innovative
                approaches to understanding human movement.
              </p>
              <a
                href="http://anatomics.seas.ucla.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Visit Anatomics Lab Website
              </a>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-green-200 shadow-lg">
                <Image
                  src="/images/lab-motion-capture.png"
                  alt="Motion capture equipment setup in the anatomical engineering lab showing biomechanical research apparatus attached to a participant's leg"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Motion Capture & Data Processing */}
          <Card className="border-blue-100 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Database className="w-6 h-6 text-blue-500" />
                Motion Capture & Data Processing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
                <div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    As an undergraduate research assistant, I work extensively with Vicon motion capture systems to
                    track and analyze human movement patterns. This cutting-edge technology allows us to capture precise
                    biomechanical data for research into motor control, rehabilitation, and human performance.
                  </p>

                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-gray-800 mb-3">Technical Expertise:</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        Vicon motion capture system operation and calibration
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        Nexus software for data processing and analysis
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        3D biomechanical modeling and visualization
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        Human movement tracking and kinematic analysis
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="relative">
                  <div className="rounded-2xl overflow-hidden border border-blue-200 shadow-lg">
                    <Image
                      src="/images/vicon-motion-capture-3d.png"
                      alt="3D motion capture visualization showing human skeletal structure with colored markers and connecting lines on a grid background"
                      width={400}
                      height={500}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <p className="text-gray-600 text-sm">3D Motion Capture Visualization in Vicon Nexus</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">Research Applications:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Data Collection & Processing</h5>
                    <p className="text-gray-600 text-sm">
                      Comprehensive motion capture data collection using high-precision Vicon cameras, followed by
                      detailed processing in Nexus software to extract meaningful biomechanical parameters.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Biomechanical Analysis</h5>
                    <p className="text-gray-600 text-sm">
                      Advanced analysis of human movement patterns, joint kinematics, and motor control strategies to
                      understand fundamental principles of human locomotion and motor function.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research Publications */}
          <Card className="border-purple-100 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <BarChart3 className="w-6 h-6 text-purple-500" />
                Research Publications & Presentations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My research contributions include work on referred control systems and EMG-driven interfaces, exploring
                how humans can intuitively control robotic devices through muscle activation patterns.
              </p>

              <div className="bg-white rounded-2xl border border-purple-200 shadow-lg overflow-hidden">
                <div className="p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">Featured Research Poster</h4>

                  <div className="relative">
                    <Image
                      src="/images/referred-control-research-poster-full.jpeg"
                      alt="Research poster titled 'A pilot study on the impact of proprioception on referred control' showing comprehensive experimental design, methodology, results with bar charts, and conclusions for EMG-controlled referred control systems by Michael J. Rose, Will Flanagan, Alizee M. Wouters, and Tyler R. Clites from UCLA"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded-lg border border-gray-200"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Robotic Projects Preview */}
          <Card className="border-green-100 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Zap className="w-6 h-6 text-green-500" />
                Robotic Engineering Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Development of bio-inspired robotic systems with multiple degrees of freedom for medical and research
                applications. These projects explore soft robotics principles, cable-driven actuation mechanisms, and
                EMG control systems.
              </p>

              {/* Project Previews Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Binary EMG Controlled Tentacle */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Binary EMG Controlled Tentacle</h4>
                      <p className="text-gray-600 text-sm">4 Degrees of Freedom</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Revolutionary bioelectric control system using muscle activation signals to control robotic tentacle
                    movement through EMG sensors.
                  </p>
                  <div className="flex items-center gap-2">
                    <Play className="w-4 h-4 text-purple-600" />
                    <span className="text-purple-600 text-sm font-medium">Video Demonstration Available</span>
                  </div>
                </div>

                {/* Analog Joystick Controlled Tentacle */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <Cog className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Analog Joystick Controlled Tentacle</h4>
                      <p className="text-gray-600 text-sm">4 Degrees of Freedom</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Interactive control system with real-time joystick input for precise tentacle manipulation and
                    directional control.
                  </p>
                  <div className="flex items-center gap-2">
                    <Microscope className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-600 text-sm font-medium">3D Model & Video Available</span>
                  </div>
                </div>

                {/* 2 DOF Tentacle */}
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                      <Cog className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Cable Driven Tentacle</h4>
                      <p className="text-gray-600 text-sm">2 Degrees of Freedom</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Advanced tentacle mechanism with dual-axis movement capabilities using spring steel backbone and
                    cable actuation.
                  </p>
                  <div className="flex items-center gap-2">
                    <Microscope className="w-4 h-4 text-teal-600" />
                    <span className="text-teal-600 text-sm font-medium">Interactive 3D Model</span>
                  </div>
                </div>

                {/* Finger Model */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Cable Driven Finger Model</h4>
                      <p className="text-gray-600 text-sm">1 Degree of Freedom</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Bio-inspired finger mechanism with cable-driven actuation using heat-formed nylon tubing and Kevlar
                    cables.
                  </p>
                  <div className="flex items-center gap-2">
                    <Play className="w-4 h-4 text-green-600" />
                    <span className="text-green-600 text-sm font-medium">Multiple Video Demos</span>
                  </div>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                >
                  <Link href="/projects/anatomical-engineering" className="flex items-center gap-2">
                    Learn More About These Projects
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Undergraduate Research Work */}
          <Card className="border-green-100 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Cog className="w-6 h-6 text-green-500" />
                Undergraduate Research Assistant
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                As an undergraduate research assistant in the anatomical engineering lab, I primarily work with motion
                capture systems, using Vicon cameras and software to track human movement and perform comprehensive data
                processing. This work contributes to advancing our understanding of human biomechanics and motor
                control.
              </p>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Current Research Focus:</h4>
                <p className="text-gray-700 mb-3">
                  I'm currently contributing to a referential control project that explores using the activation of
                  specific muscle groups to control virtual muscles. This innovative approach has significant
                  implications for advancing motor control modeling and developing next-generation rehabilitation
                  technologies.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Technical Skills:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Vicon motion capture system operation</li>
                    <li>• Human movement tracking and analysis</li>
                    <li>• Biomechanical data processing</li>
                    <li>• Motion capture software proficiency</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Research Applications:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Motor control modeling</li>
                    <li>• Rehabilitation technology development</li>
                    <li>• Virtual muscle control systems</li>
                    <li>• Muscle activation pattern analysis</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
