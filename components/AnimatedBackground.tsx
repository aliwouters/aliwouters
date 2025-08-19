"use client"

import { useEffect, useState, useRef, useCallback } from "react"

interface Node {
  id: number
  x: number
  y: number
  size: number
  color: string
  pulseDelay: number
  baseOpacity: number
  velocityX: number
  velocityY: number
  centerX: number
  centerY: number
  angle: number
  radius: number
  angularVelocity: number
}

interface Connection {
  id: number
  startNodeId: number
  endNodeId: number
  baseOpacity: number
  animationDelay: number
  duration: number
}

export default function AnimatedBackground() {
  const [nodes, setNodes] = useState<Node[]>([])
  const [connections, setConnections] = useState<Connection[]>([])
  const [particles, setParticles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      color: string
      animationDelay: number
      velocityX: number
      velocityY: number
    }>
  >([])
  const animationRef = useRef<number>()
  const frameCount = useRef(0)

  const updateConnections = useCallback((nodeList: Node[]) => {
    const newConnections: Connection[] = []
    let connectionId = 0

    nodeList.forEach((node, i) => {
      nodeList.slice(i + 1).forEach((otherNode) => {
        const distance = Math.sqrt(Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2))

        // Connect nodes that are close enough
        if (distance < 30) {
          newConnections.push({
            id: connectionId++,
            startNodeId: node.id,
            endNodeId: otherNode.id,
            baseOpacity: Math.max(0.1, 0.3 - distance * 0.008), // Opacity based on distance
            animationDelay: Math.random() * 12,
            duration: Math.random() * 8 + 6,
          })
        }
      })
    })

    setConnections(newConnections)
  }, [])

  useEffect(() => {
    const generateNodes = () => {
      const newNodes: Node[] = []
      const colors = ["#3b82f6", "#10b981", "#06b6d4", "#8b5cf6"]

      // Create layers for a more network-like structure
      const layers = [
        { y: 20, count: 3 },
        { y: 35, count: 5 },
        { y: 50, count: 4 },
        { y: 65, count: 5 },
        { y: 80, count: 3 },
      ]

      let nodeId = 0
      layers.forEach((layer) => {
        for (let i = 0; i < layer.count; i++) {
          const spacing = 70 / (layer.count + 1)
          const centerX = 15 + spacing * (i + 1)
          const centerY = layer.y

          newNodes.push({
            id: nodeId++,
            x: centerX,
            y: centerY,
            centerX: centerX,
            centerY: centerY,
            size: Math.random() * 4 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            pulseDelay: Math.random() * 8,
            baseOpacity: Math.random() * 0.3 + 0.2,
            velocityX: 0,
            velocityY: 0,
            angle: Math.random() * Math.PI * 2,
            radius: Math.random() * 10 + 4, // Slightly larger orbit radius
            angularVelocity: (Math.random() - 0.5) * 0.025, // Faster rotation
          })
        }
      })

      // Add some random floating nodes
      for (let i = 0; i < 6; i++) {
        const centerX = Math.random() * 70 + 15
        const centerY = Math.random() * 60 + 20

        newNodes.push({
          id: nodeId++,
          x: centerX,
          y: centerY,
          centerX: centerX,
          centerY: centerY,
          size: Math.random() * 3 + 3,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulseDelay: Math.random() * 8,
          baseOpacity: Math.random() * 0.2 + 0.1,
          velocityX: (Math.random() - 0.5) * 0.02, // Faster drift
          velocityY: (Math.random() - 0.5) * 0.02,
          angle: Math.random() * Math.PI * 2,
          radius: Math.random() * 8 + 3,
          angularVelocity: (Math.random() - 0.5) * 0.03, // Faster rotation
        })
      }

      return newNodes
    }

    const generateParticles = () => {
      const newParticles = []
      const colors = ["#3b82f6", "#10b981", "#06b6d4", "#8b5cf6"]

      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          animationDelay: Math.random() * 15,
          velocityX: (Math.random() - 0.5) * 0.04, // Faster particle movement
          velocityY: (Math.random() - 0.5) * 0.04,
        })
      }
      return newParticles
    }

    const initialNodes = generateNodes()
    setNodes(initialNodes)
    updateConnections(initialNodes)
    setParticles(generateParticles())

    const animate = () => {
      frameCount.current++

      setNodes((prevNodes) => {
        const updatedNodes = prevNodes.map((node) => {
          // Update orbital motion
          const newAngle = node.angle + node.angularVelocity

          // Calculate new position based on orbital motion
          const orbitalX = Math.cos(newAngle) * node.radius
          const orbitalY = Math.sin(newAngle) * node.radius

          // Update center position for drift
          let newCenterX = node.centerX + node.velocityX
          let newCenterY = node.centerY + node.velocityY

          // Boundary handling for center positions
          if (newCenterX <= 12 || newCenterX >= 88) {
            node.velocityX = -node.velocityX * 0.9
            newCenterX = Math.max(12, Math.min(88, newCenterX))
          }
          if (newCenterY <= 18 || newCenterY >= 82) {
            node.velocityY = -node.velocityY * 0.9
            newCenterY = Math.max(18, Math.min(82, newCenterY))
          }

          // Occasional gentle direction changes for drift
          if (Math.random() < 0.001) {
            node.velocityX += (Math.random() - 0.5) * 0.004
            node.velocityY += (Math.random() - 0.5) * 0.004
          }

          // Speed limiting for drift - increased max speed
          const speed = Math.sqrt(node.velocityX * node.velocityX + node.velocityY * node.velocityY)
          if (speed > 0.015) {
            // Increased from 0.008 to 0.015
            node.velocityX = (node.velocityX / speed) * 0.015
            node.velocityY = (node.velocityY / speed) * 0.015
          }

          return {
            ...node,
            x: newCenterX + orbitalX,
            y: newCenterY + orbitalY,
            centerX: newCenterX,
            centerY: newCenterY,
            angle: newAngle,
            velocityX: node.velocityX * 0.996, // Less damping for more movement
            velocityY: node.velocityY * 0.996,
          }
        })

        // Update connections every 60 frames (about once per second at 60fps)
        if (frameCount.current % 60 === 0) {
          setTimeout(() => updateConnections(updatedNodes), 0)
        }

        return updatedNodes
      })

      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let newX = particle.x + particle.velocityX
          let newY = particle.y + particle.velocityY

          // Boundary wrapping for particles
          if (newX < 0) newX = 100
          if (newX > 100) newX = 0
          if (newY < 0) newY = 100
          if (newY > 100) newY = 0

          // Occasional direction changes
          if (Math.random() < 0.002) {
            // More frequent direction changes
            particle.velocityX += (Math.random() - 0.5) * 0.008
            particle.velocityY += (Math.random() - 0.5) * 0.008
          }

          return {
            ...particle,
            x: newX,
            y: newY,
          }
        }),
      )

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [updateConnections])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/8 via-emerald-50/5 to-cyan-50/8"></div>

      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="subtleGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="subtleGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        {connections.map((connection, index) => {
          const startNode = nodes.find((n) => n.id === connection.startNodeId)
          const endNode = nodes.find((n) => n.id === connection.endNodeId)

          if (!startNode || !endNode) return null

          return (
            <line
              key={connection.id}
              x1={`${startNode.x}%`}
              y1={`${startNode.y}%`}
              x2={`${endNode.x}%`}
              y2={`${endNode.y}%`}
              stroke={index % 3 === 0 ? "url(#subtleGradient1)" : "url(#subtleGradient2)"}
              strokeWidth="1"
              opacity={connection.baseOpacity}
            >
              <animate
                attributeName="opacity"
                values={`0;${connection.baseOpacity * 2};${connection.baseOpacity};0;${connection.baseOpacity}`}
                dur={`${connection.duration}s`}
                repeatCount="indefinite"
                begin={`${connection.animationDelay}s`}
              />
              <animate
                attributeName="stroke-width"
                values="0.5;1.5;1;0.5"
                dur={`${connection.duration + 2}s`}
                repeatCount="indefinite"
                begin={`${connection.animationDelay + 2}s`}
              />
            </line>
          )
        })}
      </svg>

      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute rounded-full"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: `${node.size}px`,
            height: `${node.size}px`,
            backgroundColor: node.color,
            opacity: node.baseOpacity,
            boxShadow: `0 0 ${node.size * 2}px ${node.color}30`,
            transform: "translate(-50%, -50%)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        />
      ))}

      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: 0.15,
            filter: "blur(1px)",
            transform: "translate(-50%, -50%)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        />
      ))}

      <style jsx>{`
        @keyframes subtlePulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05);
          }
        }
      `}</style>
    </div>
  )
}
