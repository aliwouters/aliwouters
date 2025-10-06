"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, Html } from "@react-three/drei"

// Loading component
function ModelLoader() {
  return (
    <Html center>
      <div className="flex items-center gap-2 text-slate-600 bg-white p-4 rounded-lg shadow-lg">
        <div className="w-4 h-4 border-2 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
        Loading 3D Model...
      </div>
    </Html>
  )
}

// 3D Model Components
function MiterSawAdapterModel() {
  const { scene } = useGLTF("/models/miter-saw-adapter-v2.glb")
  return <primitive object={scene} scale={[1, 1, 1]} />
}

function SpindleSanderGuardModel() {
  const { scene } = useGLTF("/models/spindle-sander-guard.glb")
  return <primitive object={scene} scale={[1, 1, 1]} />
}

// Exported Canvas Wrappers
export function MiterSawAdapterViewer() {
  return (
    <Canvas
      camera={{ position: [150, 150, 150], fov: 50, near: 0.1, far: 2000 }}
      style={{ background: "linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />
      <Suspense fallback={<ModelLoader />}>
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
        enableDamping={true}
        dampingFactor={0.05}
      />
    </Canvas>
  )
}

export function SpindleSanderGuardViewer() {
  return (
    <Canvas
      camera={{ position: [150, 150, 150], fov: 50, near: 0.1, far: 2000 }}
      style={{ background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />
      <Suspense fallback={<ModelLoader />}>
        <SpindleSanderGuardModel />
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
        enableDamping={true}
        dampingFactor={0.05}
      />
    </Canvas>
  )
}
