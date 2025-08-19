"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Wrench, Users, Lightbulb, Settings, FolderOpen, GraduationCap } from "lucide-react"
import { Suspense, useState, useEffect } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import * as THREE from "three"

// Dynamically import Canvas and 3D components with no SSR
const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), {
  ssr: false,
})

const OrbitControls = dynamic(() => import("@react-three/drei").then((mod) => mod.OrbitControls), {
  ssr: false,
})

const useGLTF = dynamic(() => import("@react-three/drei").then((mod) => mod.useGLTF), {
  ssr: false,
})

const Environment = dynamic(() => import("@react-three/drei").then((mod) => mod.Environment), {
  ssr: false,
})

const Html = dynamic(() => import("@react-three/drei").then((mod) => mod.Html), {
  ssr: false,
})

// 3D Model Components - wrapped to handle client-side only rendering
function MiterSawAdapterModel() {
  const { scene } = useGLTF("/models/miter-saw-adapter.glb")
  if (!scene) return null
  return <primitive object={scene} scale={[1.5, 1.5, 1.5]} rotation={[Math.PI, 0, 0]} />
}

function ThreeDPeaModel() {
  const { scene } = useGLTF("/models/3dpea-assembled-design-v2.glb")

  if (!scene) return null

  // Only try to center the model if scene is properly loaded
  if (scene && scene.children && scene.children.length > 0) {
    try {
      // Center the model by computing its bounding box
      const box = new THREE.Box3().setFromObject(scene)
      const center = box.getCenter(new THREE.Vector3())
      scene.position.sub(center)
    } catch (boxError) {
      console.warn("Could not center model:", boxError)
      // Continue without centering if there's an error
    }
  }

  return <primitive object={scene} scale={[0.25, 0.25, 0.25]} rotation={[0, 0, 0]} position={[0, 0, 0]} />
}

// Loading component
function ModelLoader() {
  return (
    <div className="flex items-center justify-center h-64 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg">
      <div className="flex items-center gap-2 text-slate-600">
        <div className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div>
        Loading 3D Model...
      </div>
    </div>
  )
}

// 3D Scene Component
function ThreeDScene({ children, gradient }: { children: React.ReactNode; gradient: string }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <ModelLoader />
  }

  return (
    <div className="w-full h-64 rounded-lg overflow-hidden">
      <Canvas camera={{ position: [60, 60, 60], fov: 60, near: 0.1, far: 1000 }} style={{ background: gradient }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <Suspense fallback={null}>
          {children}
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={1}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
          target={[0, 15, 0]}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  )
}

function MiterSawScene() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <ModelLoader />
  }

  return (
    <div className="w-full h-64 rounded-lg overflow-hidden">
      <Canvas
        camera={{ position: [75, 75, 75], fov: 50, near: 0.1, far: 1000 }}
        style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%)" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <Suspense fallback={null}>
          <MiterSawAdapterModel />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={2}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
          target={[0, -15, 0]}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  )
}

export default function MakerspacePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-green-100">
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-600 rounded-lg mb-6 flex items-center justify-center mx-auto">
            <Wrench className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">UCLA Makerspace Experience</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Makerspace Technician - Empowering student innovation through hands-on technical support
          </p>
        </div>

        <div className="space-y-8">
          {/* Role Overview */}
          <Card className="border-green-100 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Users className="w-6 h-6 text-green-500" />
                Makerspace Technician Role
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As a Makerspace Technician at UCLA, I work directly with students to help bring their creative projects
                to life. My role encompasses technical guidance, equipment maintenance, troubleshooting, and fostering
                an environment where innovation thrives through hands-on learning and making.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Primary Responsibilities:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                      Guide students through project planning and execution
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                      Provide hands-on training with fabrication equipment
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                      Maintain and repair makerspace machinery
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                      Troubleshoot technical issues and equipment problems
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                      Support diverse makerspace projects and initiatives
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Student Support Approach:</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    I work collaboratively with students to understand their project goals, discuss the necessary steps
                    for implementation, and provide guidance on tool selection and fabrication techniques. My approach
                    emphasizes learning through doing, safety protocols, and creative problem-solving.
                  </p>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <p className="text-green-800 text-xs font-medium">
                      "Helping students transform ideas into reality through hands-on technical mentorship"
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Equipment & Technical Expertise */}
          <Card className="border-green-100 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Settings className="w-6 h-6 text-green-500" />
                Equipment & Technical Expertise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I maintain proficiency across a comprehensive range of digital fabrication tools, traditional workshop
                equipment, and design software, enabling me to support diverse student projects from concept to
                completion.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Digital Fabrication</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Laser cutter/engraver operation</li>
                    <li>• Filament 3D printers (Prusa & Bamboo Labs)</li>
                    <li>• Formlabs 3D printer (SLA)</li>
                    <li>• Resin 3D printers</li>
                    <li>• Roland vinyl cutter</li>
                    <li>• Cameo vinyl cutter</li>
                    <li>• Embroidery machine</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Workshop Tools</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Miter saw</li>
                    <li>• Band saw</li>
                    <li>• Drill press</li>
                    <li>• Spindle sander</li>
                    <li>• Rotary sander</li>
                    <li>• Power tools (various)</li>
                    <li>• Hand tools</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Specialized Equipment</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Sewing machine</li>
                    <li>• Heat presses</li>
                    <li>• Soldering irons & electronics</li>
                    <li>• Adobe Illustrator (design)</li>
                    <li>• CAD software for 3D modeling</li>
                    <li>• Equipment maintenance tools</li>
                    <li>• Safety equipment & protocols</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Makerspace Projects */}
          <Card className="border-green-100 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <FolderOpen className="w-6 h-6 text-green-500" />
                Professional Makerspace Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Beyond routine maintenance, I actively contribute to makerspace improvements through custom solutions
                and innovative problem-solving. When equipment breaks or needs modification, I design and fabricate
                replacement parts and upgrades.
              </p>

              {/* Grid layout for projects side by side */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Project 1: Spindle Sander Guard */}
                <div className="text-center">
                  <h4 className="font-semibold text-gray-800 text-lg mb-4">Adjustable Spindle Sander Guard</h4>

                  {/* 3D Model */}
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-4 mb-4">
                    <ThreeDScene gradient="linear-gradient(135deg, #dbeafe 0%, #cffafe 100%)">
                      <ThreeDPeaModel />
                    </ThreeDScene>
                    <p className="text-gray-600 text-xs mt-2">Click and drag to rotate, scroll to zoom</p>
                  </div>

                  {/* Description */}
                  <div className="text-left space-y-3">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      This innovative 3D printed assembly design demonstrates advanced mechanical engineering principles
                      through a multi-component system. The project showcases precision manufacturing, assembly
                      tolerances, and functional mechanical design.
                    </p>

                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-medium text-gray-800 text-xs mb-2">Technical Skills:</h5>
                      <ul className="text-gray-700 text-xs space-y-1">
                        <li>• Advanced CAD modeling and assembly design</li>
                        <li>• Precision tolerance calculation</li>
                        <li>• Multi-part 3D printing strategy</li>
                        <li>• Design for manufacturing (DfM)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Project 2: Miter Saw Adapter */}
                <div className="text-center">
                  <h4 className="font-semibold text-gray-800 text-lg mb-4">Miter Saw Hose Adapter</h4>

                  {/* 3D Model */}
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-4 mb-4">
                    <MiterSawScene />
                    <p className="text-gray-600 text-xs mt-2">Click and drag to rotate, scroll to zoom</p>
                  </div>

                  {/* Description */}
                  <div className="text-left space-y-3">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      When the miter saw's dust collection hose adapter broke, I took initiative to design and
                      manufacture a replacement. Using CAD software, I created a custom adapter that restored
                      functionality and improved upon the original design.
                    </p>

                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-medium text-gray-800 text-xs mb-2">Skills Demonstrated:</h5>
                      <ul className="text-gray-700 text-xs space-y-1">
                        <li>• CAD modeling and design optimization</li>
                        <li>• 3D printing material selection</li>
                        <li>• Mechanical problem analysis</li>
                        <li>• Equipment integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Professional Projects */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-800 text-lg mb-4">Additional Professional Projects</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="relative w-48 h-48 mx-auto mb-3 rounded-lg overflow-hidden">
                      <Image
                        src="/images/professional-red-organizer.jpeg"
                        alt="Red translucent 3D printed organizer tray with circular wells"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h5 className="font-medium text-gray-800 mb-2">Motion Capture Marker Tray</h5>
                    <p className="text-gray-600 text-sm">
                      Laser cut tray on stackable 3D printed feet. Used to organize motion capture markers and easily
                      apply adhesive.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="relative w-48 h-48 mx-auto mb-3 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/images/professional-ironing-setup.jpeg"
                        alt="Green ironing board setup in makerspace workshop"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h5 className="font-medium text-gray-800 mb-2">Ironing Board Cover</h5>
                    <p className="text-gray-600 text-sm">
                      When a user left an iron laying on the ironing board, it burned through the fabric and the
                      batting. I recreated both the batting and the fabric ironing board cover.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Workshops */}
          <Card className="border-green-100 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <GraduationCap className="w-6 h-6 text-green-500" />
                Workshops
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As part of my role, I lead educational workshops that teach students fundamental skills and techniques
                across various fabrication methods. These hands-on classes provide structured learning experiences where
                students can develop confidence with new tools and processes.
              </p>

              <div className="mb-6 bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">Workshop Topics I Teach:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Introduction to 3D Printing</li>
                    <li>• Introduction to Sewing</li>
                    <li>• Introduction to Woodworking</li>
                  </ul>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Laser Cutting Fundamentals</li>
                    <li>• Basic Electronics & Soldering</li>
                    <li>• CAD Design Principles</li>
                  </ul>
                </div>
              </div>

              {/* Workshop project examples - now with 4 items */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="relative w-48 h-48 mx-auto mb-3 rounded-lg overflow-hidden">
                    <Image
                      src="/images/personal-vase-flowers.jpeg"
                      alt="3D printed white vase with red flowers"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h5 className="font-medium text-gray-800 mb-2">Forever Flowers and 3D Printed Vase Workshop</h5>
                  <p className="text-gray-600 text-sm">
                    As a Valentines day workshop, we created flowers out of ribbon and 3D printed vases to give to loved
                    ones.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="relative w-48 h-48 mx-auto mb-3 rounded-lg overflow-hidden">
                    <Image
                      src="/images/personal-cyanotype.jpeg"
                      alt="Cyanotype print with botanical silhouettes"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h5 className="font-medium text-gray-800 mb-2">Cyanotyping Workshop</h5>
                  <p className="text-gray-600 text-sm">
                    Cyanotype photography workshops introduce students to historical photographic processes, combining
                    chemistry, art, and design. Students learn to create unique botanical prints using traditional
                    techniques.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="relative w-48 h-48 mx-auto mb-3 rounded-lg overflow-hidden">
                    <Image
                      src="/images/workshop-wooden-maze.jpeg"
                      alt="Circular wooden maze with intricate laser-cut pathways"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h5 className="font-medium text-gray-800 mb-2">Laser Cutting Workshop - Wooden Maze</h5>
                  <p className="text-gray-600 text-sm">
                    Students learn laser cutting fundamentals by creating intricate wooden mazes. This project combines
                    digital design skills with precision fabrication techniques, teaching both Adobe Illustrator
                    software and laser cutter operation.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="relative w-48 h-48 mx-auto mb-3 rounded-lg overflow-hidden">
                    <Image
                      src="/images/workshop-snoopy-tote-bag.jpeg"
                      alt="Canvas tote bag with colorful Snoopy and Woodstock embroidered design"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h5 className="font-medium text-gray-800 mb-2">Custom Tote Bag Workshop</h5>
                  <p className="text-gray-600 text-sm">
                    Students learn to personalize canvas tote bags using Adobe Illustrator and heat transfer vinyl. This
                    workshop combines digital design with textile arts, teaching both creative expression and technical
                    skills.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Teaching Philosophy:</strong> I believe in hands-on learning where students gain confidence
                  through guided practice. Each workshop combines technical instruction with creative exploration,
                  ensuring students leave with both skills and inspiration for future projects.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Personal Makerspace Projects */}
          <Card className="border-green-100 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Lightbulb className="w-6 h-6 text-green-500" />
                Personal Makerspace Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6 leading-relaxed">
                In addition to my professional responsibilities, I pursue personal creative projects at the makerspace,
                exploring new techniques, testing equipment capabilities, and developing innovative solutions for
                personal interests and hobbies.
              </p>

              {/* Personal project images - now includes 4 projects */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="relative w-48 h-48 mx-auto mb-3 rounded-lg overflow-hidden">
                    <Image
                      src="/images/personal-knife-box.jpeg"
                      alt="Japanese kitchen knife in presentation box"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h5 className="font-medium text-gray-800 mb-2">
                    Handmade Damascus Steel Chefs Knife with a Walnut Handle
                  </h5>
                  <p className="text-gray-600 text-sm">
                    I bought a chef's knife blade made from 66 layers of Damascus steel, then handcrafted a walnut wood
                    handle to complete it.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="relative w-48 h-48 mx-auto mb-3 rounded-lg overflow-hidden">
                    <Image
                      src="/images/personal-wooden-frame.jpeg"
                      alt="Wooden frame with metal corner brackets"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h5 className="font-medium text-gray-800 mb-2">Custom Picture Frame</h5>
                  <p className="text-gray-600 text-sm">
                    I found a beautiful piece of wood on a hike. I woodworked the wood into a picture frame.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="relative w-48 h-48 mx-auto mb-3 rounded-lg overflow-hidden">
                    <Image
                      src="/images/personal-charcuterie-board.jpeg"
                      alt="Handcrafted wooden charcuterie board with beautiful grain patterns"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h5 className="font-medium text-gray-800 mb-2">Handcrafted Charcuterie Board</h5>
                  <p className="text-gray-600 text-sm">
                    Custom designed and crafted wooden charcuterie board featuring beautiful natural grain patterns and
                    smooth curved edges, perfect for entertaining.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="relative w-48 h-48 mx-auto mb-3 rounded-lg overflow-hidden">
                    <Image
                      src="/images/personal-batman-puzzle.jpeg"
                      alt="Custom laser-cut wooden Batman jigsaw puzzle"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h5 className="font-medium text-gray-800 mb-2">Family Photo Wooden Puzzle</h5>
                  <p className="text-gray-600 text-sm">
                    Laser engraved family photo with laser cut jigsaw shapes into eigth inch wood.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-teal-50 p-4 rounded-lg">
                <p className="text-teal-800 text-sm">
                  <strong>Note:</strong> Personal projects allow me to stay current with new fabrication techniques,
                  test equipment limits, and develop creative solutions that often inform my professional work with
                  students.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Impact & Skills Development */}
          <Card className="border-green-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Impact & Professional Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My role as Makerspace Technician has developed my technical expertise while allowing me to foster
                creativity and innovation in the student community. This position bridges technical skills with
                educational mentorship, creating an environment where learning and making intersect.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-green-700" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Student Mentorship</h4>
                  <p className="text-gray-600 text-sm">
                    Guiding hundreds of students through project realization and technical skill development
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Settings className="w-6 h-6 text-green-700" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Technical Mastery</h4>
                  <p className="text-gray-600 text-sm">
                    Comprehensive expertise across digital fabrication and traditional workshop tools
                  </p>
                </div>

                <div className="bg-green-50 p-6 text-center">
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lightbulb className="w-6 h-6 text-green-700" />
                  </div>
                  <h4 className="font-medium text-gray-800 mb-2">Innovation Culture</h4>
                  <p className="text-gray-600 text-sm">
                    Creating an environment where creative problem-solving and hands-on learning thrive
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
