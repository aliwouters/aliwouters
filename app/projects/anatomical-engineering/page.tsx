"use client"

import { Suspense } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Microscope, Cog, Zap, Github } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, Html } from "@react-three/drei"

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

export default function AnatomicalEngineeringProjectsPage() {
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
                <Link href="/projects" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Projects
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Anatomical Engineering Projects</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Bio-inspired robotic systems and EMG-controlled devices for medical and research applications
          </p>
        </div>

        <div className="space-y-12">
          {/* Actuated Cable Driven Finger Model */}
          <Card className="border-green-200 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Zap className="w-6 h-6" />
                Actuated Cable Driven Finger Model
              </CardTitle>
              <p className="text-green-100 mt-2">
                Bio-inspired single degree of freedom finger mechanism with cable-driven actuation
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex gap-6">
                {/* 3D Model - Large box on left (60% width) */}
                <div className="w-[60%] bg-white rounded-2xl p-6 shadow-lg border border-green-100">
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

                  {/* Key Features Section */}
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Key Features</h5>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Heat-formed nylon tubing for structural integrity</li>
                      <li>• Precision-cut notches for controlled flexion</li>
                      <li>• Braided Kevlar actuation cable for durability</li>
                      <li>• Ergonomic key ring base for user comfort</li>
                      <li>• Scalable design for full hand implementation</li>
                    </ul>
                  </div>
                </div>

                {/* Videos - Bigger boxes stacked on right (40% width) */}
                <div className="w-[40%] space-y-3">
                  <h4 className="font-semibold text-gray-800 text-sm mb-3">Project Documentation</h4>

                  {/* Video 1 - Testing Phase */}
                  <div className="bg-white rounded-lg border border-green-200 overflow-hidden shadow-md">
                    <video
                      controls
                      className="w-full aspect-square object-cover"
                      poster="/placeholder.svg?height=200&width=200&text=Testing+Phase+Video+Frame"
                    >
                      <source
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7380%20%281%29-rmRrKlHHikkAdAK1JrvcIk30yHday7.MOV"
                        type="video/mp4"
                      />
                    </video>
                    <div className="p-2">
                      <p className="text-xs text-gray-700 font-medium">Test Finger</p>
                    </div>
                  </div>

                  {/* Video 2 - Operational Demo */}
                  <div className="bg-white rounded-lg border border-green-200 overflow-hidden shadow-md">
                    <video
                      controls
                      className="w-full aspect-square object-cover"
                      poster="/placeholder.svg?height=200&width=200&text=Operational+Demo+Video+Frame"
                    >
                      <source
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7381-18DzB9TbijsTpdD90skBSVOeNXjCu3.MOV"
                        type="video/mp4"
                      />
                    </video>
                    <div className="p-2">
                      <p className="text-xs text-gray-700 font-medium">Production</p>
                    </div>
                  </div>

                  {/* Video 3 - Movement Demo */}
                  <div className="bg-white rounded-lg border border-green-200 overflow-hidden shadow-md">
                    <video
                      controls
                      className="w-full aspect-square object-cover"
                      poster="/placeholder.svg?height=200&width=200&text=Movement+Demo+Video+Frame"
                    >
                      <source
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7386%20%281%29%20%281%29-NxdSxlxVzRa6VgKxLDQbu8lFqasnoL.mov"
                        type="video/mp4"
                      />
                    </video>
                    <div className="p-2">
                      <p className="text-xs text-gray-700 font-medium">Full Hand Demonstration</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actuated Cable Driven Tentacle with 2 Degrees of Freedom */}
          <Card className="border-teal-200 shadow-xl bg-gradient-to-br from-teal-50 to-cyan-50">
            <CardHeader className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Cog className="w-6 h-6" />
                Actuated Cable Driven Tentacle with 2 Degrees of Freedom
              </CardTitle>
              <p className="text-teal-100 mt-2">Advanced tentacle mechanism with dual-axis movement capabilities</p>
            </CardHeader>
            <CardContent className="p-8">
              {/* 3D Model and Video - Equal width side by side */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* 3D Model - Left side */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-teal-100">
                  <div className="w-full h-80 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg overflow-hidden mb-4">
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
                <div className="bg-white rounded-2xl p-6 border border-teal-200 shadow-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">Project Documentation</h4>
                  <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                    <video
                      controls
                      className="w-full h-full object-cover rounded-lg"
                      poster="/placeholder.svg?height=320&width=400&text=2D+Tentacle+Demo"
                    >
                      <source
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7860%20%282%29-IvbHBGHnknvvuwEVPAhNAwysibili3.mov"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600 text-sm">2 Degree of Freedom Tentacle Demonstration</p>
                  </div>
                </div>
              </div>

              {/* Technical Features Section */}
              <div className="bg-white rounded-lg p-6 border border-teal-200 shadow-md">
                <h5 className="font-semibold text-gray-800 mb-3">Technical Features</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h6 className="font-medium text-gray-700 mb-2">Actuation System</h6>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Spring steel backbone for structural support</li>
                      <li>• Steel cable actuation system</li>
                      <li>• Central coiled spring for passive resistance</li>
                      <li>• Strategic cable pulley placement</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-medium text-gray-700 mb-2">Design Features</h6>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Custom 3D-printed base component</li>
                      <li>• Set screw securing mechanism</li>
                      <li>• Curved cable path optimization</li>
                      <li>• Rotation prevention system</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Analog Joystick Controlled Tentacle */}
          <Card className="border-blue-200 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Zap className="w-6 h-6" />
                Analog Joystick Controlled Tentacle with 4 Degrees of Freedom
              </CardTitle>
              <p className="text-blue-100 mt-2">
                Interactive control system with real-time joystick input for precise tentacle manipulation
              </p>
            </CardHeader>
            <CardContent className="p-8">
              {/* 3D Model and Video - Equal width side by side */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* 3D Model - Left side */}
                <div className="w-full bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
                  <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg overflow-hidden mb-4">
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
                <div className="bg-white rounded-2xl p-6 border border-blue-200 shadow-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">Project Documentation</h4>
                  <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                    <video
                      controls
                      className="w-full h-full object-cover rounded-lg"
                      poster="/placeholder.svg?height=320&width=400&text=Analog+Joystick+Tentacle+Demo"
                    >
                      <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8708%20%281%29%20%281%29-cedTqu9picgFLNWYYO03DCUraHrVaM.mov" type="video/mp4" />
                    </video>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600 text-sm">Analog Joystick Controlled Tentacle Demonstration</p>
                  </div>
                </div>
              </div>

              {/* Control System Section */}
              <div className="bg-white rounded-lg p-6 border border-blue-200 shadow-md mb-4">
                <h5 className="font-semibold text-gray-800 mb-3">Control System</h5>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h6 className="font-medium text-gray-700 mb-2">Hardware Components</h6>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Custom 3D-printed base and vertebrae</li>
                      <li>• Counterwound cable backbone system</li>
                      <li>• Four outer control cables</li>
                      <li>• Two servo motors for actuation</li>
                      <li>• Arduino Leonardo microcontroller</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-medium text-gray-700 mb-2">Control Features</h6>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Analog joystick interface</li>
                      <li>• Real-time directional control</li>
                      <li>• Opposing cable pair actuation</li>
                      <li>• Smooth, continuous movement</li>
                      <li>• Intuitive user interaction</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* GitHub Link - More prominent button */}
              <div className="flex items-center justify-center pt-4 border-t border-blue-200">
                <a
                  href="https://github.com/aliwouters/Analog-Joystick-Controls-4-Degrees-of-Freedom-Tentacle-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View Arduino Code on GitHub
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Binary EMG Controlled Tentacle */}
          <Card className="border-purple-200 shadow-xl bg-gradient-to-br from-purple-50 to-pink-50">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Zap className="w-6 h-6" />
                Binary EMG Controlled Tentacle with 4 Degrees of Freedom
              </CardTitle>
              <p className="text-purple-100 mt-2">
                Revolutionary bioelectric control system using muscle activation signals
              </p>
            </CardHeader>
            <CardContent className="p-8">
              {/* Video and Description */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* Video - Left side */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
                  <h4 className="font-semibold text-gray-800 mb-4">Project Documentation</h4>
                  <div className="w-full h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                    <video
                      controls
                      className="w-full h-full object-cover rounded-lg"
                      poster="/placeholder.svg?height=320&width=400&text=Binary+EMG+Tentacle+Demo"
                    >
                      <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8548%20%281%29%20%281%29-ctq7iUDmuLMabHZdj3EHF93exN1NJO.mov" type="video/mp4" />
                    </video>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600 text-sm">Binary EMG Controlled Tentacle Demonstration</p>
                  </div>
                </div>

                {/* Description - Right side */}
                <div className="bg-white rounded-2xl p-6 border border-purple-200 shadow-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">Project Overview</h4>
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <h5 className="font-semibold text-gray-800 mb-2">EMG Control System</h5>
                      <p className="text-gray-600 text-sm">
                        This innovative system uses electromyography (EMG) sensors to detect muscle contractions,
                        converting biological signals into digital control commands for the tentacle.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Binary Control Logic</h5>
                      <p className="text-gray-600 text-sm">
                        The system operates on binary muscle activation patterns, where specific muscle contractions
                        trigger predetermined tentacle movements, creating an intuitive brain-to-machine interface.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Applications Section */}
              <div className="bg-white rounded-lg p-6 border border-purple-200 shadow-md mb-4">
                <h5 className="font-semibold text-gray-800 mb-3">Applications</h5>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h6 className="font-medium text-gray-700 mb-2">Assistive Devices</h6>
                    <p className="text-gray-600 text-sm">
                      Revolutionary applications in assistive technology for individuals with mobility limitations.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h6 className="font-medium text-gray-700 mb-2">Prosthetics</h6>
                    <p className="text-gray-600 text-sm">
                      Advanced prosthetic control systems using natural muscle activation patterns.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h6 className="font-medium text-gray-700 mb-2">Rehabilitation</h6>
                    <p className="text-gray-600 text-sm">
                      Innovative rehabilitation tools for motor function recovery and therapy applications.
                    </p>
                  </div>
                </div>
              </div>

              {/* GitHub Link - More prominent button */}
              <div className="flex items-center justify-center pt-4 border-t border-purple-200">
                <a
                  href="https://github.com/aliwouters/Binary-EMG-Control-for-4-Degrees-of-Freedom-Tentacle-/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View Arduino & Python Code on GitHub
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Coming Soon - Analog EMG Controlled Tentacle */}
          <Card className="border-gray-300 shadow-xl bg-gradient-to-br from-gray-50 to-slate-50">
            <CardHeader className="bg-gradient-to-r from-gray-500 to-slate-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Zap className="w-6 h-6" />
                Analog EMG Controlled Tentacle with 4 Degrees of Freedom
              </CardTitle>
              <p className="text-gray-100 mt-2">
                Next-generation continuous control system with proportional muscle activation
              </p>
            </CardHeader>
            <CardContent className="p-8">
              {/* Coming Soon Display */}
              <div className="bg-gradient-to-br from-gray-100 to-slate-100 rounded-2xl p-8 border-2 border-dashed border-gray-400">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-400 to-slate-500 rounded-full mb-6 flex items-center justify-center mx-auto">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-semibold text-gray-800 mb-4">Coming Soon</h4>
                  <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                    The next evolution in EMG-controlled robotics: analog signal processing for continuous, proportional
                    control of tentacle movement based on muscle activation intensity.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm">
                      <h5 className="font-semibold text-gray-800 mb-2">Analog Signal Processing</h5>
                      <p className="text-gray-600 text-sm">
                        Advanced EMG signal processing for continuous, proportional control based on muscle contraction
                        intensity rather than binary on/off states.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm">
                      <h5 className="font-semibold text-gray-800 mb-2">Enhanced Precision</h5>
                      <p className="text-gray-600 text-sm">
                        Fine-grained control allowing for variable speed and position control, creating more natural and
                        intuitive human-machine interaction.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-gray-300 to-slate-400 text-gray-700 rounded-full text-sm font-medium">
                      In Development
                    </span>
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
