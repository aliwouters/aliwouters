"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, useGLTF } from "@react-three/drei"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cog, Zap, FileText, Presentation, ArrowLeft, Home } from "lucide-react"

function AnkleExoModel() {
  const { scene } = useGLTF("/models/ankle-exo-series-elastic.glb")

  return <primitive object={scene} scale={[1, 1, 1]} />
}

function AnkleExoWebsiteModel() {
  const { scene } = useGLTF("/models/ankle-exo-website.glb")
  return <primitive object={scene} scale={[1, 1, 1]} rotation={[0, Math.PI, 0]} />
}

function TentacleModel1D() {
  const { scene } = useGLTF("/models/1d-tentacle-all-parts.glb")
  return <primitive object={scene} scale={[1, 1, 1]} />
}

function TentacleModel2D() {
  const { scene } = useGLTF("/models/2d-tentacle-all-parts.glb")
  return <primitive object={scene} scale={[1, 1, 1]} />
}

function TentacleModelCables() {
  const { scene } = useGLTF("/models/tentacle-design-cables.glb")
  return <primitive object={scene} scale={[1, 1, 1]} />
}

const ModelLoader = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="gray" />
  </mesh>
)

export default function AnatomicalEngineeringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="text-2xl font-light text-slate-900 tracking-wide">
              Alizee Wouters
            </Link>
            <div className="flex items-center gap-3">
              <Button asChild variant="outline" size="sm" className="border-slate-300 bg-transparent">
                <Link href="/projects" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Projects
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="border-slate-300 bg-transparent">
                <Link href="/" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16 pb-24">
        {/* Header */}
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl mb-8 flex items-center justify-center mx-auto">
              <Cog className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">Anatomical Engineering</h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-700 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Developing bio-inspired robotic systems and assistive devices through biomechanical analysis,
              EMG-controlled interfaces, and anatomical modeling.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-16">
          {/* Aged Plantarflexor Bionic Assistance Device project */}
          <Card id="ankle-exoskeleton" className="border-emerald-200 shadow-xl from-emerald-50 to-teal-50 scroll-mt-20">
            <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Cog className="w-6 h-6" />
                Aged Plantarflexor Bionic Assistance Device
              </CardTitle>
              <p className="text-emerald-100 mt-2">
                Ankle exoskeleton with series elastic actuation to assist age-related plantarflexor muscle weakness
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* 3D Model Viewer */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
                  <h4 className="font-semibold text-gray-800 mb-4 text-center">Interactive 3D Model</h4>
                  <div className="w-full h-96 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg overflow-hidden">
                    <Canvas
                      camera={{ position: [100, 1200, 2000], fov: 75, near: 0.1, far: 20000 }}
                      style={{ background: "linear-gradient(135deg, #d1fae5 0%, #99f6e4 100%)" }}
                    >
                      <ambientLight intensity={0.6} />
                      <directionalLight position={[10, 10, 5]} intensity={1.2} />
                      <Suspense fallback={<ModelLoader />}>
                        <AnkleExoWebsiteModel />
                        <Environment preset="studio" />
                      </Suspense>
                      <OrbitControls
                        makeDefault
                        enablePan={true}
                        enableZoom={true}
                        enableRotate={true}
                        autoRotate={true}
                        maxPolarAngle={Math.PI}
                        minPolarAngle={0}
                        target={[0, 1000, 0]}
                        enableDamping={true}
                        dampingFactor={0.05}
                        rotateSpeed={1}
                      />
                    </Canvas>
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-gray-600 text-sm">
                      Click and drag to rotate, scroll to zoom, right-click to pan
                    </p>
                  </div>
                </div>

                {/* Static Technical Rendering */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
                  <h4 className="font-semibold text-gray-800 mb-4 text-center">Technical Design Rendering</h4>
                  <div className="w-full h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                      src="/images/ankle-exo-side-view.png"
                      alt="Ankle Exoskeleton Technical Rendering"
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-gray-600 text-sm">Side view showing series elastic actuation system</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-emerald-200 shadow-md mb-6">
                <h5 className="font-semibold text-gray-800 mb-4">Project Overview</h5>
                <div className="space-y-3">
                  <p className="text-gray-600 text-sm">
                    Age-related plantarflexor weakness affects over 61 million adults, reducing ankle power during
                    push-off and increasing fall risk. Using OpenSim biomechanical modeling, we designed a series
                    elastic actuator ankle exoskeleton that delivers optimally-timed assistive torque during late
                    stance.
                  </p>
                  <p className="text-gray-600 text-sm">
                    The device reduced metabolic cost from 575 J to 553 J (96% restoration), provided up to 100 Nm
                    plantarflexion moment during push-off, and achieved 90% motor efficiency with a total system mass of
                    just 1.87 kg.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-emerald-200 shadow-md mb-6">
                <h5 className="font-semibold text-gray-800 mb-4">Key Technical Specifications</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                    <h6 className="font-medium text-gray-700 mb-2">Actuation System</h6>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Maxon EC-4pole 30 motor (200W, 90% efficiency)</li>
                      <li>• GP 32 HP planetary gearhead (53:1 ratio)</li>
                      <li>• Custom spring (k = 3175 N/m, stores 31.5 J)</li>
                      <li>• Bowden cable transmission (3.78 cm pulley)</li>
                    </ul>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                    <h6 className="font-medium text-gray-700 mb-2">Performance</h6>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• 36.2 W continuous power, 89.7 W peak</li>
                      <li>• Up to 100 Nm plantarflexion torque</li>
                      <li>• 96% metabolic efficiency restoration</li>
                      <li>• Total system mass: 1.87 kg</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-emerald-200">
                <div className="flex-1 flex items-center gap-3 bg-white rounded-lg p-3 border border-emerald-200">
                  <img
                    src="/images/screenshot-202026-01-05-20163235.png"
                    alt="Presentation Cover"
                    className="w-24 h-24 object-cover rounded border border-emerald-300"
                  />
                  <a
                    href="https://docs.google.com/presentation/d/1rYraVGMTkk1HoRBqk7ufDVxR03wsuUf4mzUPYt9o3no/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    <Presentation className="w-4 h-4" />
                    View Presentation
                  </a>
                </div>
                <div className="flex-1 flex items-center gap-3 bg-white rounded-lg p-3 border border-emerald-200">
                  <img
                    src="/images/screenshot-202026-01-05-20163416.png"
                    alt="Report Cover"
                    className="w-24 h-24 object-cover rounded border border-gray-300"
                  />
                  <a
                    href="/documents/ankle-exo-report.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    Read Technical Report
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Analog EMG Controlled Tentacle */}
          <Card
            id="analog-emg-tentacle"
            className="border-indigo-200 shadow-xl bg-gradient-to-br from-indigo-50 to-violet-50 scroll-mt-20"
          >
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-violet-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Zap className="w-6 h-6" />
                Analog EMG Controlled Tentacle with 4 Degrees of Freedom
              </CardTitle>
              <p className="text-indigo-100 mt-2">
                Continuous proportional control system using analog muscle activation signals
              </p>
            </CardHeader>
            <CardContent className="p-8">
              {/* Videos Side by Side */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* Video 1 */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-indigo-100">
                  <h4 className="font-semibold text-gray-800 mb-4">Control System Demo</h4>
                  <div className="w-full h-80 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-lg">
                      <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/-487967345448332010820251003_192912-IHpZjVTrQRE6h4n9dV7K6RJemUyeyn.mov" type="video/mp4" />
                    </video>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600 text-sm">Analog EMG Control in Action</p>
                  </div>
                </div>

                {/* Video 2 */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-indigo-100">
                  <h4 className="font-semibold text-gray-800 mb-4">Proportional Response</h4>
                  <div className="w-full h-80 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-lg">
                      <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/-747288150443556990120251003_193345%20%281%29-mhEk6G4QSArOrxK6h26tAjBI8dWN2Z.mov" type="video/mp4" />
                    </video>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600 text-sm">Precise Movement Control</p>
                  </div>
                </div>
              </div>

              {/* Project Overview */}
              <div className="bg-white rounded-lg p-6 border border-indigo-200 shadow-md mb-4">
                <h5 className="font-semibold text-gray-800 mb-4">Project Overview</h5>
                <div className="space-y-4">
                  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                    <h6 className="font-semibold text-gray-800 mb-2">Analog EMG Control System</h6>
                    <p className="text-gray-600 text-sm">
                      This advanced system uses analog electromyography (EMG) sensors to detect continuous muscle
                      activation levels, enabling proportional control of the tentacle's four degrees of freedom. Unlike
                      binary systems, this provides smooth, natural movement that responds to the intensity of muscle
                      contractions.
                    </p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                    <h6 className="font-semibold text-gray-800 mb-2">Research Application</h6>
                    <p className="text-gray-600 text-sm">
                      This project was developed for research studies investigating referential control of
                      agonist-antagonist muscle pairs. The system explores how humans can intuitively control robotic
                      devices through natural muscle activation patterns, advancing our understanding of human-machine
                      interfaces for prosthetics and assistive devices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center pt-4 border-t border-indigo-200">
                <a
                  href="https://www.canva.com/design/DAGxf2dB4Tg/DZXi_LGPFzPU6c0SIgeO0g/edit?utm_content=DAGxf2dB4Tg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  View Full Project Report
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
              <p className="text-purple-100 mt-2">Binary bioelectric control system using muscle activation signals</p>
            </CardHeader>
            <CardContent className="p-8">
              {/* Video and Description */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* Video - Left side */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
                  <h4 className="font-semibold text-gray-800 mb-4">Project Documentation</h4>
                  <div className="w-full h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-lg">
                      <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8548%20%281%29%20%281%29-MlreCKkora0uV8xwCSDLJF12gwuuBQ.mov" type="video/mp4" />
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
                        This system uses electromyography (EMG) sensors to detect muscle contractions, converting
                        biological signals into digital control commands for the tentacle.
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
                      Assistive technology for individuals with mobility limitations.
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
                      Rehabilitation tools for motor function recovery and therapy applications.
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
                  <Badge className="w-5 h-5" />
                  View Arduino & Python Code on GitHub
                </a>
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
                        makeDefault
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
                        zoomSpeed={-0.5}
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
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-lg">
                      <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8708%20%281%29%20%281%29-6XERDZOozF1rQ4f0PfkvZ2jiI6UteT.mov" type="video/mp4" />
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
                  <Badge className="w-5 h-5" />
                  View Arduino Code on GitHub
                </a>
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
              <p className="text-teal-100 mt-2">Tentacle mechanism with counter pulling capabilities</p>
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
                      <directionalLight position={[-10, -10, -10]} intensity={0.8} />
                      <pointLight position={[0, 0, 10]} intensity={1} />
                      <Suspense fallback={<ModelLoader />}>
                        <TentacleModel2D />
                        <Environment preset="studio" />
                      </Suspense>
                      <OrbitControls
                        makeDefault
                        enablePan={true}
                        enableZoom={true}
                        enableRotate={true}
                        autoRotate={true}
                        autoRotateSpeed={2}
                        target={[0, 45, 0]}
                        enableDamping={true}
                        dampingFactor={0.05}
                        zoomSpeed={-0.5}
                      />
                    </Canvas>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600 text-sm">Click and drag to rotate, scroll to zoom</p>
                  </div>
                </div>

                {/* Video - Right side */}
                <div className="bg-white rounded-2xl p-6 border border-teal-200 shadow-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">Project Documentation</h4>
                  <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-lg">
                      <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7860%20%282%29-IvbHBGHnknvvuwEVPAhNAwysibili3.mov" type="video/mp4" />
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
                        makeDefault
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
                        zoomSpeed={-0.5}
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
                    <video autoPlay loop muted playsInline className="w-full aspect-square object-cover">
                      <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7380%20%281%29-rmRrKlHHikkAdAK1JrvcIk30yHday7.MOV" type="video/mp4" />
                    </video>
                    <div className="p-2">
                      <p className="text-xs text-gray-700 font-medium">Test Finger</p>
                    </div>
                  </div>

                  {/* Video 2 - Operational Demo */}
                  <div className="bg-white rounded-lg border border-green-200 overflow-hidden shadow-md">
                    <video autoPlay loop muted playsInline className="w-full aspect-square object-cover">
                      <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7381-18DzB9TbijsTpdD90skBSVOeNXjCu3.MOV" type="video/mp4" />
                    </video>
                    <div className="p-2">
                      <p className="text-xs text-gray-700 font-medium">Replication</p>
                    </div>
                  </div>

                  {/* Video 3 - Movement Demo */}
                  <div className="bg-white rounded-lg border border-green-200 overflow-hidden shadow-md">
                    <video autoPlay loop muted playsInline className="w-full aspect-square object-cover">
                      <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7386%20%281%29%20%281%29-NxdSxlxVzRa6VgKxLDQbu8lFqasnoL.mov" type="video/mp4" />
                    </video>
                    <div className="p-2">
                      <p className="text-xs text-gray-700 font-medium">Full Hand Demonstration</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 opacity-80 hover:opacity-100"
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
