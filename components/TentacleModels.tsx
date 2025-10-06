"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, Html } from "@react-three/drei"

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

// 3D Model Components
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

// Exported Canvas Wrappers
export function TentacleCablesViewer() {
  return (
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
  )
}

export function Tentacle2DViewer() {
  return (
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
  )
}

export function Tentacle1DViewer() {
  return (
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
  )
}
