"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function NetworkNodes() {
  const groupRef = useRef<THREE.Group>(null)

  // Create nodes and connections
  const { nodePositions, connections } = useMemo(() => {
    const nodeCount = 30
    const nodes: THREE.Vector3[] = []
    const conns: [THREE.Vector3, THREE.Vector3][] = []

    // Generate random node positions
    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Vector3((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 10)
      nodes.push(node)
    }

    // Create connections between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].distanceTo(nodes[j])
        if (distance < 7 && Math.random() > 0.6) {
          conns.push([nodes[i], nodes[j]])
        }
      }
    }

    return { nodePositions: nodes, connections: conns }
  }, [])

  useFrame((state) => {
    const time = state.clock.elapsedTime
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.08
      groupRef.current.rotation.x = Math.sin(time * 0.03) * 0.15
    }
  })

  return (
    <group ref={groupRef}>
      {/* Nodes */}
      {nodePositions.map((position, index) => (
        <mesh key={`node-${index}`} position={[position.x, position.y, position.z]}>
          <sphereGeometry args={[0.15, 12, 12]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.9} />
        </mesh>
      ))}

      {/* Connections */}
      {connections.map(([start, end], index) => {
        const points = [start, end]
        const geometry = new THREE.BufferGeometry().setFromPoints(points)

        return (
          <line key={`connection-${index}`} geometry={geometry}>
            <lineBasicMaterial color="#10b981" transparent opacity={0.6} />
          </line>
        )
      })}
    </group>
  )
}

function FloatingParticles() {
  const particleRefs = useRef<(THREE.Mesh | null)[]>([])

  const particles = useMemo(() => {
    const count = 80
    const positions: { x: number; y: number; z: number; offset: number }[] = []

    for (let i = 0; i < count; i++) {
      positions.push({
        x: (Math.random() - 0.5) * 30,
        y: (Math.random() - 0.5) * 18,
        z: (Math.random() - 0.5) * 12,
        offset: Math.random() * Math.PI * 2,
      })
    }

    return positions
  }, [])

  useFrame((state) => {
    const time = state.clock.elapsedTime
    particleRefs.current.forEach((ref, index) => {
      if (ref && particles[index]) {
        const particle = particles[index]
        ref.position.y = particle.y + Math.sin(time * 0.4 + particle.offset) * 0.8
        ref.position.x = particle.x + Math.cos(time * 0.2 + particle.offset) * 0.3
        ref.rotation.y = time * 0.03
      }
    })
  })

  return (
    <group>
      {particles.map((particle, index) => (
        <mesh
          key={`particle-${index}`}
          ref={(el) => (particleRefs.current[index] = el)}
          position={[particle.x, particle.y, particle.z]}
        >
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshBasicMaterial color="#06b6d4" transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  )
}

export default function NeuralNetwork3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 25], fov: 75 }} style={{ background: "transparent" }} dpr={[1, 2]}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <NetworkNodes />
        <FloatingParticles />
      </Canvas>
    </div>
  )
}
