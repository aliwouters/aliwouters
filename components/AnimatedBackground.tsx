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
  const fieldRef = useRef<HTMLDivElement>(null)
  const [clearAreas, setClearAreas] = useState<{x:number;y:number;width:number;height:number}[]>([])
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
  const animationRef = useRef<number | null>(null)
  const frameCount = useRef(0)

  useEffect(() => {
    const field = fieldRef.current
    const hero = field?.parentElement
    if (!field || !hero) return
    const measure = () => {
      const bounds = field.getBoundingClientRect()
      if (!bounds.width || !bounds.height) return
      const areas = Array.from(hero.querySelectorAll(".hero-title, .hero-description, .hero-actions")).map(element => {
        const range = document.createRange()
        range.selectNodeContents(element)
        const rect = element.classList.contains("hero-actions") ? element.getBoundingClientRect() : range.getBoundingClientRect()
        const padding = 18
        return { x:(rect.left - bounds.left - padding)/bounds.width*100, y:(rect.top - bounds.top - padding)/bounds.height*100,
          width:(rect.width + padding*2)/bounds.width*100, height:(rect.height + padding*2)/bounds.height*100 }
      })
      setClearAreas(areas)
    }
    const observer = new ResizeObserver(measure)
    observer.observe(hero)
    hero.querySelectorAll(".hero-copy").forEach(element => observer.observe(element))
    measure()
    document.fonts.ready.then(measure)
    return () => observer.disconnect()
  }, [])

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
      const colors = ["#7caac5", "#90b7ce", "#aac9da", "#84aec7"]

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
      const colors = ["#7caac5", "#90b7ce", "#aac9da", "#84aec7"]

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

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [updateConnections])

  return (
    <div ref={fieldRef} className="absolute inset-0 overflow-hidden pointer-events-none neural-field" aria-hidden="true">
      <svg className="absolute inset-0 w-full h-full">
        <g>
          {connections.map(connection => {
            const start = nodes.find(n => n.id === connection.startNodeId)
            const end = nodes.find(n => n.id === connection.endNodeId)
            if (!start || !end) return null
            // Omit complete edges that intersect copy; never clip a line halfway through.
            const crossesCopy = clearAreas.some(area => {
              let enter = 0, exit = 1
              for (const [origin, delta, low, high] of [
                [start.x, end.x-start.x, area.x, area.x+area.width],
                [start.y, end.y-start.y, area.y, area.y+area.height],
              ]) {
                if (Math.abs(delta) < .00001) { if (origin < low || origin > high) return false }
                else {
                  const a = (low-origin)/delta, b = (high-origin)/delta
                  enter = Math.max(enter, Math.min(a,b)); exit = Math.min(exit, Math.max(a,b))
                  if (enter > exit) return false
                }
              }
              return true
            })
            if (crossesCopy) return null
            return <line key={connection.id} x1={`${start.x}%`} y1={`${start.y}%`} x2={`${end.x}%`} y2={`${end.y}%`} stroke="#82abc4" strokeWidth="1" opacity={connection.baseOpacity * 1.5}>
              <animate attributeName="opacity" values={`${connection.baseOpacity};${connection.baseOpacity * 2};${connection.baseOpacity}`} dur={`${connection.duration}s`} repeatCount="indefinite" begin={`${connection.animationDelay}s`} />
            </line>
          })}
          {nodes.filter(node => !clearAreas.some(area => node.x >= area.x && node.x <= area.x+area.width && node.y >= area.y && node.y <= area.y+area.height)).map(node => <circle key={node.id} cx={`${node.x}%`} cy={`${node.y}%`} r={node.size / 2} fill={node.color} opacity={node.baseOpacity + .1} />)}
          {particles.filter(particle => !clearAreas.some(area => particle.x >= area.x && particle.x <= area.x+area.width && particle.y >= area.y && particle.y <= area.y+area.height)).map(particle => <circle key={`p-${particle.id}`} cx={`${particle.x}%`} cy={`${particle.y}%`} r={particle.size / 2} fill={particle.color} opacity=".3" />)}
        </g>
      </svg>
    </div>
  )
}
