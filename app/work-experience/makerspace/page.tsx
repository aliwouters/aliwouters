"use client"

import React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Wrench, Lightbulb, Users, Target, Cog, Hammer } from "lucide-react"
import Image from "next/image"
import dynamic from "next/dynamic"
import * as THREE from "three"

// Dynamically import React Three Fiber components with SSR disabled
const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { ssr: false })
const OrbitControls = dynamic(() => import("@react-three/drei").then((mod) => mod.OrbitControls), { ssr: false })
const useGLTF = dynamic(() => import("@react-three/drei").then((mod) => mod.useGLTF), { ssr: false })
const Html = dynamic(() => import("@react-three/drei").then((mod) => mod.Html), { ssr: false })

// Loading component for 3D models
function ModelLoader() {
  return (
    <Html center>
      <div className="text-center p-4 bg-white rounded-lg shadow-lg">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
        <p className="text-gray-600">Loading 3D Model...</p>
      </div>
    </Html>
  )
}

// 3D Pea Model Component
function ThreeDPeaModel() {
  const { scene } = useGLTF("/models/3dpea-assembled-design-v2.glb")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (!scene || !scene.children || scene.children.length === 0) {
    return null
  }

  // Calculate bounding box and center the model
  try {
    const box = new THREE.Box3().setFromObject(scene)
    const center = box.getCenter(new THREE.Vector3())
    const size = box.getSize(new THREE.Vector3())

    // Center the model
    scene.position.copy(center).multiplyScalar(-1)

    // Scale the model to fit nicely
    const maxDim = Math.max(size.x, size.y, size.z)
    const scale = 2 / maxDim
    scene.scale.setScalar(scale)
  } catch (error) {
    console.warn("Error calculating bounding box:", error)
  }

  return <primitive object={scene} />
}

// Miter Saw Adapter Model Component
function MiterSawAdapterModel() {
  const { scene } = useGLTF("/models/miter-saw-adapter.glb")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (!scene || !scene.children || scene.children.length === 0) {
    return null
  }

  // Calculate bounding box and center the model
  try {
    const box = new THREE.Box3().setFromObject(scene)
    const center = box.getCenter(new THREE.Vector3())
    const size = box.getSize(new THREE.Vector3())

    // Center the model
    scene.position.copy(center).multiplyScalar(-1)

    // Scale the model to fit nicely
    const maxDim = Math.max(size.x, size.y, size.z)
    const scale = 2 / maxDim
    scene.scale.setScalar(scale)
  } catch (error) {
    console.warn("Error calculating bounding box:", error)
  }

  return <primitive object={scene} />
}

// 3D Scene Components
function ThreeDPeaScene() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-64 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
          <p className="text-slate-600">Loading 3D Model...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-64 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} onError={(error) => console.error("Canvas error:", error)}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
        <React.Suspense fallback={<ModelLoader />}>
          <ThreeDPeaModel />
        </React.Suspense>
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  )
}

function MiterSawAdapterScene() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-64 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
          <p className="text-slate-600">Loading 3D Model...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-64 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} onError={(error) => console.error("Canvas error:", error)}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
        <React.Suspense fallback={<ModelLoader />}>
          <MiterSawAdapterModel />
        </React.Suspense>
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  )
}

export default function MakerspacePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-orange-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Alizee Wouters
            </Link>
            <div className="flex gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href="/work-experience" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Work Experience
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg mb-6 flex items-center justify-center mx-auto">
            <Wrench className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">UCLA Makerspace Technician</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Facilitating innovation through hands-on technical support and creative problem-solving
          </p>
        </div>

        {/* Role Overview */}
        <Card className="border-orange-100 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Target className="w-6 h-6 text-orange-500" />
              Role & Responsibilities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              As a Makerspace Technician at UCLA, I provide comprehensive technical support across multiple fabrication
              technologies while fostering an environment of innovation and learning. My role encompasses equipment
              maintenance, user training, project consultation, and safety oversight in a dynamic creative workspace.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Technical Expertise:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• 3D printing (FDM, SLA, multi-material)</li>
                  <li>• Laser cutting and engraving</li>
                  <li>• CNC machining and routing</li>
                  <li>• Electronics prototyping and soldering</li>
                  <li>• Woodworking and traditional fabrication</li>
                  <li>• CAD software training and support</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Key Responsibilities:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Equipment maintenance and troubleshooting</li>
                  <li>• User training and safety certification</li>
                  <li>• Project consultation and design review</li>
                  <li>• Inventory management and procurement</li>
                  <li>• Workshop planning and instruction</li>
                  <li>• Quality control and process optimization</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Projects */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <div className="flex-1">
            <Card className="border-orange-100 shadow-lg h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Cog className="w-5 h-5 text-orange-500" />
                  Professional Makerspace Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* 3D Pea Project */}
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">3D Pea - Assistive Technology Device</h4>
                    <div className="mb-4">
                      <ThreeDPeaScene />
                    </div>
                    <p className="text-gray-700 text-sm mb-3">
                      Collaborated on the development of an innovative assistive technology device designed to help
                      individuals with limited mobility. The 3D Pea represents a breakthrough in accessible design,
                      combining ergonomic principles with advanced manufacturing techniques.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-3 rounded">
                        <h5 className="font-medium text-gray-800 text-sm mb-1">Technical Contributions:</h5>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• 3D modeling and prototyping</li>
                          <li>• Material selection and testing</li>
                          <li>• Manufacturing process optimization</li>
                        </ul>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <h5 className="font-medium text-gray-800 text-sm mb-1">Impact:</h5>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• Improved accessibility for users</li>
                          <li>• Cost-effective manufacturing</li>
                          <li>• Scalable design solution</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Miter Saw Adapter */}
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Precision Miter Saw Adapter</h4>
                    <div className="mb-4">
                      <MiterSawAdapterScene />
                    </div>
                    <p className="text-gray-700 text-sm mb-3">
                      Designed and manufactured a custom adapter to enhance the precision and versatility of the
                      makerspace's miter saw. This project demonstrates advanced problem-solving skills and the ability
                      to create practical solutions for workshop efficiency.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-3 rounded">
                        <h5 className="font-medium text-gray-800 text-sm mb-1">Engineering Process:</h5>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• Problem identification and analysis</li>
                          <li>• CAD design and simulation</li>
                          <li>• Iterative prototyping and testing</li>
                        </ul>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <h5 className="font-medium text-gray-800 text-sm mb-1">Results:</h5>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• Increased cutting precision</li>
                          <li>• Enhanced user safety</li>
                          <li>• Improved workflow efficiency</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Additional Professional Projects */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded-lg border border-orange-200">
                      <div className="h-40 bg-gradient-to-br from-red-100 to-orange-100 rounded mb-3 overflow-hidden">
                        <Image
                          src="/images/professional-red-organizer.jpeg"
                          alt="Custom red tool organizer with multiple compartments for workshop organization"
                          width={200}
                          height={160}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h5 className="font-medium text-gray-800 text-sm mb-1">Workshop Organization System</h5>
                      <p className="text-xs text-gray-600">
                        Custom tool organizers designed to optimize workspace efficiency and tool accessibility
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-orange-200">
                      <div className="h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded mb-3 overflow-hidden">
                        <Image
                          src="/images/professional-ironing-setup.jpeg"
                          alt="Professional ironing and fabric preparation station setup in makerspace"
                          width={200}
                          height={160}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h5 className="font-medium text-gray-800 text-sm mb-1">Textile Processing Station</h5>
                      <p className="text-xs text-gray-600">
                        Specialized setup for fabric preparation and textile project support in the makerspace
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Workshop Projects */}
          <div className="flex-1">
            <Card className="border-orange-100 shadow-lg h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Hammer className="w-5 h-5 text-orange-500" />
                  Workshop & Teaching Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">Educational Workshop Development</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      Designed and led hands-on workshops to teach students fundamental making skills, from basic tool
                      safety to advanced fabrication techniques. These workshops foster creativity while building
                      practical technical competencies.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-white p-3 rounded-lg border border-orange-200">
                        <div className="h-40 bg-gradient-to-br from-amber-100 to-yellow-100 rounded mb-3 overflow-hidden">
                          <Image
                            src="/images/workshop-wooden-maze.jpeg"
                            alt="Handcrafted wooden maze puzzle demonstrating precision woodworking techniques"
                            width={200}
                            height={160}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h5 className="font-medium text-gray-800 text-sm mb-1">Precision Woodworking</h5>
                        <p className="text-xs text-gray-600">
                          Teaching traditional joinery and precision cutting techniques through engaging puzzle projects
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-200">
                        <div className="h-40 bg-gradient-to-br from-blue-100 to-indigo-100 rounded mb-3 overflow-hidden">
                          <Image
                            src="/images/workshop-snoopy-tote-bag.jpeg"
                            alt="Custom Snoopy-themed tote bag showcasing textile design and printing techniques"
                            width={200}
                            height={160}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h5 className="font-medium text-gray-800 text-sm mb-1">Textile Design Workshop</h5>
                        <p className="text-xs text-gray-600">
                          Combining digital design with traditional textile techniques for custom apparel creation
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-orange-200">
                      <h5 className="font-medium text-gray-800 mb-2">Workshop Impact & Outcomes:</h5>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Users className="w-4 h-4 text-orange-700" />
                          </div>
                          <p className="text-xs text-gray-700 font-medium">Student Engagement</p>
                          <p className="text-xs text-gray-600">High participation and skill retention rates</p>
                        </div>
                        <div className="text-center">
                          <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Lightbulb className="w-4 h-4 text-orange-700" />
                          </div>
                          <p className="text-xs text-gray-700 font-medium">Innovation</p>
                          <p className="text-xs text-gray-600">Creative problem-solving development</p>
                        </div>
                        <div className="text-center">
                          <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Target className="w-4 h-4 text-orange-700" />
                          </div>
                          <p className="text-xs text-gray-700 font-medium">Skill Building</p>
                          <p className="text-xs text-gray-600">Practical technical competency growth</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Personal Projects */}
        <Card className="border-orange-100 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Lightbulb className="w-6 h-6 text-orange-500" />
              Personal Makerspace Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              Beyond professional responsibilities, I pursue personal projects that explore creative applications of
              makerspace technologies, demonstrating versatility and passion for continuous learning.
            </p>

            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="h-40 bg-gradient-to-br from-purple-100 to-pink-100 rounded mb-3 overflow-hidden">
                  <Image
                    src="/images/personal-vase-flowers.jpeg"
                    alt="3D printed decorative vase with fresh flowers showcasing artistic design capabilities"
                    width={200}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-gray-800 text-sm mb-2">3D Printed Decorative Vase</h4>
                <p className="text-gray-700 text-xs">
                  Exploring artistic applications of 3D printing technology through functional decorative objects with
                  complex geometric patterns.
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="h-40 bg-gradient-to-br from-blue-100 to-cyan-100 rounded mb-3 overflow-hidden">
                  <Image
                    src="/images/personal-cyanotype.jpeg"
                    alt="Cyanotype photography print showing botanical subjects in classic blue and white"
                    width={200}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-gray-800 text-sm mb-2">Cyanotype Photography</h4>
                <p className="text-gray-700 text-xs">
                  Experimenting with alternative photographic processes, combining traditional techniques with modern
                  digital workflows.
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="h-40 bg-gradient-to-br from-amber-100 to-orange-100 rounded mb-3 overflow-hidden">
                  <Image
                    src="/images/personal-wooden-frame.jpeg"
                    alt="Precision-crafted wooden frame demonstrating advanced joinery and finishing techniques"
                    width={200}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-gray-800 text-sm mb-2">Precision Woodworking Jig</h4>
                <p className="text-gray-700 text-xs">
                  Custom jigs and fixtures designed to improve accuracy and repeatability in woodworking projects,
                  showcasing engineering problem-solving.
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="h-40 bg-gradient-to-br from-red-100 to-pink-100 rounded mb-3 overflow-hidden">
                  <Image
                    src="/images/personal-knife-box.jpeg"
                    alt="Handcrafted wooden knife storage box showing attention to detail and craftsmanship"
                    width={200}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-gray-800 text-sm mb-2">Tool Appreciation & Craftsmanship</h4>
                <p className="text-gray-700 text-xs">
                  Custom storage solutions that celebrate the beauty of well-made tools while demonstrating attention to
                  detail and finishing techniques.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
