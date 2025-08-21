"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Wrench, Lightbulb, Users, Target, Cog, Hammer } from "lucide-react"
import Image from "next/image"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF, Html } from "@react-three/drei"
import * as THREE from "three"

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

// Spindle Sander Guard Model Component with Auto-Rotation
function SpindleSanderGuardModel() {
  const { scene } = useGLTF("/models/spindle-sander-guard.glb")
  const meshRef = useRef<THREE.Group>(null)
  const [centeredScene, setCenteredScene] = useState<THREE.Object3D | null>(null)

  useEffect(() => {
    if (scene) {
      // Clone the scene to avoid modifying the original
      const clonedScene = scene.clone()

      // Calculate bounding box and center the model
      const box = new THREE.Box3().setFromObject(clonedScene)
      const center = box.getCenter(new THREE.Vector3())
      const size = box.getSize(new THREE.Vector3())

      // Create a wrapper group to handle centering
      const wrapper = new THREE.Group()

      // Add the cloned scene to the wrapper
      wrapper.add(clonedScene)

      // Move the cloned scene so its center is at the wrapper's origin
      clonedScene.position.copy(center).multiplyScalar(-1)

      // Scale the model to fit nicely
      const maxDim = Math.max(size.x, size.y, size.z)
      if (maxDim > 0) {
        const scale = 3 / maxDim
        wrapper.scale.setScalar(scale)
      }

      setCenteredScene(wrapper)
    }
  }, [scene])

  // Auto-rotation around the model's center
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4
    }
  })

  if (!centeredScene) {
    return null
  }

  return (
    <group ref={meshRef}>
      <primitive object={centeredScene} />
    </group>
  )
}

// Miter Saw Adapter V2 Model Component with Auto-Rotation
function MiterSawAdapterV2Model() {
  const { scene } = useGLTF("/models/miter-saw-adapter-v2.glb")
  const meshRef = useRef<THREE.Group>(null)
  const [centeredScene, setCenteredScene] = useState<THREE.Object3D | null>(null)

  useEffect(() => {
    if (scene) {
      // Clone the scene to avoid modifying the original
      const clonedScene = scene.clone()

      // Calculate bounding box and center the model
      const box = new THREE.Box3().setFromObject(clonedScene)
      const center = box.getCenter(new THREE.Vector3())
      const size = box.getSize(new THREE.Vector3())

      // Create a wrapper group to handle centering
      const wrapper = new THREE.Group()

      // Add the cloned scene to the wrapper
      wrapper.add(clonedScene)

      // Move the cloned scene so its center is at the wrapper's origin
      clonedScene.position.copy(center).multiplyScalar(-1)

      // Scale the model to fit nicely
      const maxDim = Math.max(size.x, size.y, size.z)
      if (maxDim > 0) {
        const scale = 3 / maxDim
        wrapper.scale.setScalar(scale)
      }

      // Start the model upside down
      wrapper.rotation.z = Math.PI

      setCenteredScene(wrapper)
    }
  }, [scene])

  // Auto-rotation around the model's center
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4
    }
  })

  if (!centeredScene) {
    return null
  }

  return (
    <group ref={meshRef}>
      <primitive object={centeredScene} />
    </group>
  )
}

// 3D Scene Components
function SpindleSanderGuardScene() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-64 bg-blue-100 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
          <p className="text-blue-700">Loading 3D Model...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-64 bg-blue-100 rounded-lg overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 60 }}
        onError={(error) => console.error("Canvas error:", error)}
        gl={{ antialias: true, alpha: false }}
      >
        <color attach="background" args={["#dbeafe"]} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-5, -5, -5]} intensity={0.6} />
        <pointLight position={[0, 5, 0]} intensity={0.8} />
        <React.Suspense fallback={<ModelLoader />}>
          <SpindleSanderGuardModel />
        </React.Suspense>
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  )
}

function MiterSawAdapterV2Scene() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-64 bg-green-100 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-2"></div>
          <p className="text-green-700">Loading 3D Model...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-64 bg-green-100 rounded-lg overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 60 }}
        onError={(error) => console.error("Canvas error:", error)}
        gl={{ antialias: true, alpha: false }}
      >
        <color attach="background" args={["#dcfce7"]} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-5, -5, -5]} intensity={0.6} />
        <pointLight position={[0, 5, 0]} intensity={0.8} />
        <React.Suspense fallback={<ModelLoader />}>
          <MiterSawAdapterV2Model />
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
          <p className="text-lg text-orange-600 font-medium mb-2">August 2023 - Present</p>
          <p className="text-lg text-gray-600">
            Facilitating student innovation through hands-on technical support and creative problem-solving
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

        {/* Professional Projects - Full Width */}
        <Card className="border-orange-100 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Cog className="w-6 h-6 text-orange-500" />
              Examples of Professional Makerspace Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* 3D Interactive Projects Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 text-lg mb-4">Spindle Sander Guard</h4>
                  <div className="mb-4">
                    <SpindleSanderGuardScene />
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    Custom safety guard designed for the spindle sander to improve user protection while maintaining
                    full functionality and visibility during operation. This project demonstrates advanced CAD design
                    and safety engineering principles.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded text-center">
                      <p className="text-sm text-gray-600 font-medium">Enhanced Safety</p>
                      <p className="text-xs text-gray-500">Improved user protection</p>
                    </div>
                    <div className="bg-white p-3 rounded text-center">
                      <p className="text-sm text-gray-600 font-medium">Custom Fit</p>
                      <p className="text-xs text-gray-500">Precision engineered</p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 text-lg mb-4">Miter Saw Adapter</h4>
                  <div className="mb-4">
                    <MiterSawAdapterV2Scene />
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    Precision adapter designed to enhance the versatility and accuracy of the miter saw for specialized
                    cutting operations and improved workshop efficiency. Features modular design for multiple
                    applications.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded text-center">
                      <p className="text-sm text-gray-600 font-medium">Precision Cuts</p>
                      <p className="text-xs text-gray-500">Enhanced accuracy</p>
                    </div>
                    <div className="bg-white p-3 rounded text-center">
                      <p className="text-sm text-gray-600 font-medium">Versatile Setup</p>
                      <p className="text-xs text-gray-500">Multiple configurations</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Professional Projects */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <div className="h-32 bg-gradient-to-br from-red-100 to-orange-100 rounded mb-3 overflow-hidden">
                    <Image
                      src="/images/professional-red-organizer.jpeg"
                      alt="Custom red tool organizer with multiple compartments for workshop organization"
                      width={400}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="font-medium text-gray-800 text-base mb-2">Workshop Organization System</h5>
                  <p className="text-sm text-gray-600">
                    Custom tool organizers designed to optimize workspace efficiency and tool accessibility. Features
                    modular compartments and color-coded sections for improved workflow.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <div className="h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded mb-3 overflow-hidden">
                    <Image
                      src="/images/professional-ironing-setup.jpeg"
                      alt="Professional ironing and fabric preparation station setup in makerspace"
                      width={400}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="font-medium text-gray-800 text-base mb-2">Textile Processing Station</h5>
                  <p className="text-sm text-gray-600">
                    Specialized setup for fabric preparation and textile project support in the makerspace. Includes
                    temperature control and safety features for various fabric types.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Workshop Projects - Full Width */}
        <Card className="border-orange-100 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Hammer className="w-6 h-6 text-orange-500" />
              Workshop & Teaching Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 text-lg mb-4">Educational Workshop Development</h4>
                <p className="text-gray-700 mb-6">
                  Designed and led hands-on workshops to teach students fundamental making skills, from basic tool
                  safety to advanced fabrication techniques. These workshops foster creativity while building practical
                  technical competencies.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <div className="h-32 bg-gradient-to-br from-amber-100 to-yellow-100 rounded mb-3 overflow-hidden">
                      <Image
                        src="/images/workshop-wooden-maze.jpeg"
                        alt="Handcrafted wooden maze puzzle demonstrating precision woodworking techniques"
                        width={400}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="font-medium text-gray-800 text-base mb-2">Precision Woodworking</h5>
                    <p className="text-sm text-gray-600">
                      Teaching traditional joinery and precision cutting techniques through engaging puzzle projects
                      that combine craftsmanship with problem-solving skills.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <div className="h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded mb-3 overflow-hidden">
                      <Image
                        src="/images/workshop-snoopy-tote-bag.jpeg"
                        alt="Custom Snoopy-themed tote bag showcasing textile design and printing techniques"
                        width={400}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="font-medium text-gray-800 text-base mb-2">Textile Design Workshop</h5>
                    <p className="text-sm text-gray-600">
                      Combining digital design with traditional textile techniques for custom apparel creation,
                      including screen printing and heat transfer methods.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-orange-200">
                  <h5 className="font-medium text-gray-800 text-lg mb-4">Workshop Impact & Outcomes:</h5>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="w-6 h-6 text-orange-700" />
                      </div>
                      <p className="text-sm text-gray-700 font-medium mb-1">Student Engagement</p>
                      <p className="text-sm text-gray-600">
                        High participation and skill retention rates across all workshop sessions
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Lightbulb className="w-6 h-6 text-orange-700" />
                      </div>
                      <p className="text-sm text-gray-700 font-medium mb-1">Innovation</p>
                      <p className="text-sm text-gray-600">
                        Creative problem-solving development through hands-on projects
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Target className="w-6 h-6 text-orange-700" />
                      </div>
                      <p className="text-sm text-gray-700 font-medium mb-1">Skill Building</p>
                      <p className="text-sm text-gray-600">
                        Practical technical competency growth in fabrication technologies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

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
                <div className="h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded mb-3 overflow-hidden">
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
                <div className="h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded mb-3 overflow-hidden">
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
                <div className="h-32 bg-gradient-to-br from-amber-100 to-orange-100 rounded mb-3 overflow-hidden">
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
                <div className="h-32 bg-gradient-to-br from-red-100 to-pink-100 rounded mb-3 overflow-hidden">
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
