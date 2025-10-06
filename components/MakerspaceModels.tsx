"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, Html } from "@react-three/drei"
import * as THREE from "three"

// Loading component
function ModelLoader() {
  return (
    <Html center>
      <div className="flex items-center gap-2 text-slate-600">
        <div className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div>
        Loading 3D Model...
      </div>
    </Html>
  )
}

// 3D Model Components
function MiterSawAdapterModel() {
  const { scene } = useGLTF("/models/miter-saw-adapter.glb")
  return <primitive object={scene} scale={[1.5, 1.5, 1.5]} rotation={[Math.PI, 0, 0]} />
}

function ThreeDPeaModel() {
  const { scene } = useGLTF("/models/3dpea-assembled-design-v2.glb")
  const box = new THREE.Box3().setFromObject(scene)
  const center = box.getCenter(new THREE.Vector3())
  scene.position.sub(center)
  return <primitive object={scene} scale={[0.25, 0.25, 0.25]} rotation={[0, 0, 0]} position={[0, 0, 0]} />
}

// Exported Canvas Wrappers
export function MiterSawAdapterViewer() {
  return (
    <Canvas
      camera={{ position: [75, 75, 75], fov: 50, near: 0.1, far: 1000 }}
      style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%)" }}
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
        target={[0, -15, 0]}
        enableDamping={true}
        dampingFactor={0.05}
      />
    </Canvas>
  )
}

export function ThreeDPeaViewer() {
  return (
    <Canvas
      camera={{ position: [60, 60, 60], fov: 60, near: 0.1, far: 1000 }}
      style={{ background: "linear-gradient(135deg, #dbeafe 0%, #cffafe 100%)" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />
      <Suspense fallback={<ModelLoader />}>
        <ThreeDPeaModel />
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
  )
}
