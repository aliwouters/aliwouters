"use client"

import { Suspense } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Microscope, Cog, Zap } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, Html } from "@react-three/drei"
import Image from "next/image"

// 3D Model Components for Tentacle Project
function TentacleModel1D() {
  const { scene } = useGLTF("/models/1d-tentacle-all-parts.glb")
  return <primitive object={scene} scale={[1, 1, 1]} rotation={[Math.PI / 2, 0, 0]} />
}

function TentacleModel2D() {
  const { scene } = useGLTF("/models/2d-tentacle-all-parts.glb")
  return <primitive object={scene} scale={[1, 1, 1]} />
}

function TentacleModelCables() {
  const { scene } = useGLTF("/models/tentacle-design-cables.glb")
  return <primitive object={scene} scale={[1, 1, 1]} />
}

// Loading component
function ModelLoader() {
  return (
    <Html center>
      <div className="flex items-center gap-2 text-slate-600 bg-white p-4 rounded-lg shadow-lg">
        <div className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div>
        Loading 3D Model...
      </div>
    </Html>
  )
}

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
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
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
              <div className="mt-3 text-center">
                <p className="text-sm text-gray-600"> </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Robotic Actuated Tentacle Project */}
          <Card className="border-green-100 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Zap className="w-6 h-6 text-green-500" />
                Robotic Actuated Tentacle Project
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Development of bio-inspired robotic tentacle systems with multiple degrees of freedom for medical and
                research applications. This project explores soft robotics principles and cable-driven actuation
                mechanisms.
              </p>

              {/* 1D Tentacle Section */}
              <div id="1-degree-of-freedom" className="mb-12">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Tentacle with 1 degree of freedom</h3>
                <div className="flex gap-6">
                  {/* 3D Model - Large box on left (60% width) */}
                  <div className="w-[60%] bg-green-50 rounded-2xl p-6">
                    <div className="w-full h-[500px] bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg overflow-hidden mb-4">
                      <Canvas
                        camera={{ position: [70, 70, 150], fov: 45, near: 0.1, far: 1000 }}
                        style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%)" }}
                      >
                        <ambientLight intensity={0.6} />
                        <directionalLight position={[10, 10, 5]} intensity={1.2} />
                        <Suspense fallback={<ModelLoader />}>
                          <TentacleModel1D />
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
                          target={[0, -30, 0]}
                          enableDamping={true}
                          dampingFactor={0.05}
                        />
                      </Canvas>
                    </div>
                    <div className="text-center mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Interactive 3D Model</h4>
                      <p className="text-gray-600 text-sm">
                        Click and drag to rotate, scroll to zoom, right-click to pan
                      </p>
                    </div>

                    {/* Project Description Section */}
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Project Description</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        This single-degree-of-freedom tentacle showcases core principles of cable-driven soft robotics
                        through a bio-inspired design that enables controlled bending. Nylon tubing was heat-formed to
                        hold a straight neutral position, with notches cut to guide flexion. Actuation is achieved using
                        a strong braided Kevlar line which pulls on the top of the tentacle to create motion. A key ring
                        at the base improves user comfort.
                        <br />
                        Inspired by the mechanics of a human finger, five tentacles were scaled to fit my hand and
                        mounted on a plywood base to form a functional, cable-actuated robotic hand. The project
                        addresses key challenges in soft robotics, including material flexibility, precise control, and
                        ergonomic actuation.
                      </p>
                    </div>
                  </div>

                  {/* Videos - Bigger boxes stacked on right (40% width) */}
                  <div className="w-[40%] space-y-3">
                    <h4 className="font-semibold text-gray-800 text-sm mb-3">Project Documentation</h4>

                    {/* Video 1 - Testing Phase */}
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <video
                        controls
                        className="w-full aspect-square object-cover"
                        poster="/placeholder.svg?height=200&width=200&text=Testing+Phase+Video+Frame"
                      >
                        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7380%20%281%29-rmRrKlHHikkAdAK1JrvcIk30yHday7.MOV" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="p-2">
                        <p className="text-xs text-gray-700 font-medium">Test Tentacle</p>
                      </div>
                    </div>

                    {/* Video 2 - Operational Demo */}
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <video
                        controls
                        className="w-full aspect-square object-cover"
                        poster="/placeholder.svg?height=200&width=200&text=Operational+Demo+Video+Frame"
                      >
                        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7381-18DzB9TbijsTpdD90skBSVOeNXjCu3.MOV" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="p-2">
                        <p className="text-xs text-gray-700 font-medium">Production</p>
                      </div>
                    </div>

                    {/* Video 3 - Movement Demo */}
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <video
                        controls
                        className="w-full aspect-square object-cover"
                        poster="/placeholder.svg?height=200&width=200&text=Movement+Demo+Video+Frame"
                      >
                        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7386%20%281%29%20%281%29-NxdSxlxVzRa6VgKxLDQbu8lFqasnoL.mov" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="p-2">
                        <p className="text-xs text-gray-700 font-medium">Full Hand Demonstration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2D Tentacle Section */}
              <div id="2-degrees-of-freedom" className="mb-12">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Tentacle with 2 degrees of freedom</h3>

                {/* 3D Model and Video - Equal width side by side */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                  {/* 3D Model - Left side */}
                  <div className="bg-emerald-50 rounded-2xl p-6">
                    <div className="w-full h-80 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg overflow-hidden mb-4">
                      <Canvas
                        camera={{ position: [50, 50, 150], fov: 90, near: 0.1, far: 1000 }}
                        style={{ background: "linear-gradient(135deg, #ecfdf5 0%, #a7f3d0 100%)" }}
                      >
                        <ambientLight intensity={0.6} />
                        <directionalLight position={[10, 10, 5]} intensity={1.2} />
                        <Suspense fallback={<ModelLoader />}>
                          <TentacleModel2D />
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
                          target={[0, 45, 0]}
                          enableDamping={true}
                          dampingFactor={0.05}
                        />
                      </Canvas>
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-800 mb-2">Interactive 3D Model</h4>
                      <p className="text-gray-600 text-sm">
                        Click and drag to rotate, scroll to zoom, right-click to pan
                      </p>
                    </div>
                  </div>

                  {/* Video - Right side */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-4">Project Documentation</h4>
                    <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                      <video
                        controls
                        className="w-full h-full object-cover rounded-lg"
                        poster="/placeholder.svg?height=320&width=400&text=2D+Tentacle+Demo"
                      >
                        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7860%20%282%29-IvbHBGHnknvvuwEVPAhNAwysibili3.mov" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-600 text-sm">2D Tentacle Demonstration</p>
                    </div>
                  </div>
                </div>

                {/* Project Description - Full width underneath */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h5 className="font-semibold text-gray-800 mb-3">Project Description</h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    This two-degree-of-freedom tentacle operates by pulling on spring steel using steel cables. A
                    central spring is coiled around the spring steel to provide passive resistance, while cable pulleys
                    are strategically placed to guide the cables along a curved path rather than the shortest route,
                    improving control and consistency. The base is a custom 3D-printed component designed with set
                    screws that secure the spring steel and precisely guide the cables, preventing unwanted movement or
                    rotation across the steel.
                  </p>
                </div>
              </div>

              {/* Tentacle Design with Cables Section */}
              <div id="4-degrees-of-freedom" className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Tentacle with 4 degrees of freedom</h3>

                {/* 3D Model and Video - Equal width side by side */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                  {/* 3D Model - Left side */}
                  <div className="w-full bg-teal-50 rounded-2xl p-6">
                    <div className="w-full h-80 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg overflow-hidden mb-4">
                      <Canvas
                        camera={{ position: [50, 50, 150], fov: 70, near: 0.1, far: 1000 }}
                        style={{ background: "linear-gradient(135deg, #f0fdfa 0%, #a5f3fc 100%)" }}
                      >
                        <ambientLight intensity={0.6} />
                        <directionalLight position={[10, 10, 5]} intensity={1.2} />
                        <Suspense fallback={<ModelLoader />}>
                          <TentacleModelCables />
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
                          target={[0, 50, 0]}
                          enableDamping={true}
                          dampingFactor={0.05}
                        />
                      </Canvas>
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-800 mb-2">Interactive 3D Model</h4>
                      <p className="text-gray-600 text-sm">
                        Click and drag to rotate, scroll to zoom, right-click to pan
                      </p>
                    </div>
                  </div>

                  {/* Video - Right side */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-4">Project Documentation</h4>
                    <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                      <video
                        controls
                        className="w-full h-full object-cover rounded-lg"
                        poster="/placeholder.svg?height=320&width=400&text=4D+Tentacle+Demo"
                      >
                        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-7892%20%281%29-Ly4QU96BAvnOg3kkk9B2yDLRJqgVJt.mov" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-600 text-sm">4D Tentacle Demonstration</p>
                    </div>
                  </div>
                </div>

                {/* Project Description - Full width underneath */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h5 className="font-semibold text-gray-800 mb-3">Project Description</h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    This four-degree-of-freedom tentacle features a custom 3D-printed base and vertebrae, each designed
                    with set screw holes to anchor securely to a central counterwound cable, minimizing torsional
                    rotation and slippage. Four outer cables, attached to the top vertebra, control movement in each
                    direction. Two servo motors, driven by an Arduino Leonardo, actuate the tentacle by pulling and
                    releasing opposing cable pairs—one cable tightens while its counterpart loosens—to allow smooth,
                    directional bending.
                    <br />
                    The system is controlled via custom Arduino code, enabling input of the motor number (1 or 2) and
                    desired angle of movement. This setup provides precise, user-defined positioning and demonstrates
                    the integration of mechanical design with embedded control.
                  </p>
                </div>
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

          <Card className="border-green-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Research Methodology & Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                My anatomical engineering research employs a multidisciplinary approach, combining engineering
                principles with biological understanding to create solutions that can improve patient outcomes and
                advance medical technology.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Research Impact Areas:</h4>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-green-700 font-bold">1</span>
                    </div>
                    <p className="text-sm text-gray-700">Clinical Applications</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-green-700 font-bold">2</span>
                    </div>
                    <p className="text-sm text-gray-700">Technology Innovation</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-green-700 font-bold">3</span>
                    </div>
                    <p className="text-sm text-gray-700">Patient Outcomes</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
