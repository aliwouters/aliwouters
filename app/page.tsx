"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, ExternalLink, ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react"
import AnimatedBackground from "@/components/AnimatedBackground"

const featuredProjects = [
  {
    id: 1,
    title: "1 Degree of Freedom Tentacle",
    description: "Bio-inspired soft robotics with single-axis actuation for precise manipulation tasks",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7386%20%281%29%20%281%29-NxdSxlxVzRa6VgKxLDQbu8lFqasnoL.mov",
    link: "/research/anatomical-engineering#1-degree-of-freedom",
    category: "Anatomical Engineering",
    isVideo: true,
    caption: "Full Hand Demonstration",
  },
  {
    id: 2,
    title: "2 Degrees of Freedom Tentacle",
    description: "Advanced tentacle design with dual-axis control for enhanced dexterity and movement",
    image: "/images/2dof-tentacle-3d-model.png",
    link: "/research/anatomical-engineering#2-degrees-of-freedom",
    category: "Anatomical Engineering",
    isImage: true,
    caption: "3D Model Design",
  },
  {
    id: 3,
    title: "4 Degrees of Freedom Tentacle",
    description:
      "Complex multi-axis tentacle system with four independent degrees of freedom for sophisticated manipulation",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-7892%20%281%29-Ly4QU96BAvnOg3kkk9B2yDLRJqgVJt.mov",
    link: "/research/anatomical-engineering#4-degrees-of-freedom",
    category: "Anatomical Engineering",
    isVideo: true,
    caption: "4D Tentacle Demonstration",
  },
  {
    id: 4,
    title: "Visualizing High-Dimensional Data with t-SNE",
    description:
      "Advanced dimensionality reduction technique for visualizing complex datasets and understanding data structure in lower dimensions",
    image: "/images/tsne-sigma-1.png",
    link: "/projects/data-science-engineering",
    category: "Data Science Engineering",
    isImage: true,
    caption: "t-SNE Visualization Results",
  },
]

export default function HomePage() {
  const [emailCopied, setEmailCopied] = useState(false)
  const [currentProject, setCurrentProject] = useState(0)

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % featuredProjects.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const handleEmailClick = async () => {
    const email = "ali.wout.3003@gmail.com"

    try {
      await navigator.clipboard.writeText(email)
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err) {
      // Fallback: open email client
      window.location.href = `mailto:${email}`
    }
  }

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % featuredProjects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
  }

  const getPrevProject = () => {
    return (currentProject - 1 + featuredProjects.length) % featuredProjects.length
  }

  const getNextProject = () => {
    return (currentProject + 1) % featuredProjects.length
  }

  const renderMedia = (project: (typeof featuredProjects)[0], size: "main" | "preview" = "main") => {
    const sizeClasses = size === "main" ? "w-full h-full" : "w-full h-32"

    if (project.isVideo) {
      return (
        <div className="relative w-full h-full">
          <video
            src={project.image}
            autoPlay
            loop
            muted
            playsInline
            className={`${sizeClasses} object-cover transition-all duration-500`}
          />
          {project.caption && size === "main" && (
            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
              {project.caption}
            </div>
          )}
        </div>
      )
    } else if (project.isImage) {
      return (
        <div className="relative w-full h-full">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className={`object-contain transition-all duration-500 bg-gradient-to-br from-slate-50 to-blue-50`}
          />
          {project.caption && size === "main" && (
            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
              {project.caption}
            </div>
          )}
        </div>
      )
    } else if (project.is3D) {
      return (
        <div
          className={`${sizeClasses} bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center transition-all duration-500`}
        >
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl mx-auto mb-2 flex items-center justify-center">
              <span className="text-white font-bold text-lg">3D</span>
            </div>
            {size === "main" && (
              <>
                <p className="text-slate-600 font-medium text-sm">3D Model Screen Capture</p>
                <p className="text-slate-500 text-xs mt-1">Click "Learn More" to explore</p>
              </>
            )}
          </div>
        </div>
      )
    } else {
      return (
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className={`object-cover transition-all duration-500`}
        />
      )
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="text-2xl font-light text-slate-900 tracking-wide">
              Alizee Wouters
            </Link>
            <div className="hidden md:flex space-x-10">
              <Link href="/resume" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">
                Resume
              </Link>
              <Link href="/research" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">
                Research
              </Link>
              <Link
                href="/work-experience"
                className="text-slate-600 hover:text-emerald-600 transition-colors font-medium"
              >
                Work Experience
              </Link>
              <Link href="/projects" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">
                Projects
              </Link>
              <Link href="/community" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">
                Community
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Neural Network Animation */}
      <section className="pt-32 pb-32 px-6 lg:px-8 relative overflow-hidden">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-8">
                <h1 className="text-5xl lg:text-6xl font-light text-slate-900 leading-tight">
                  Hello, I'm{" "}
                  <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                    Alizee Wouters
                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                  A researcher and engineer at the intersection of neurotechnology, cognitive science, and biomedical
                  engineering. I develop innovative solutions that bridge human cognition and technology.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleEmailClick}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white border-0 px-8 py-6 text-base font-medium"
                >
                  <div className="flex items-center gap-3">
                    {emailCopied ? <Check className="w-5 h-5" /> : <Mail className="w-5 h-5" />}
                    {emailCopied ? "Email Copied!" : "Get in Touch"}
                  </div>
                </Button>
                <Button
                  variant="default"
                  size="lg"
                  asChild
                  className="bg-white hover:bg-gray-50 text-slate-700 border border-slate-300 px-8 py-6 text-base font-medium"
                >
                  <a
                    href="https://linkedin.com/in/alizee-wouters"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-3xl blur-3xl"></div>
                <div className="relative w-80 h-80 rounded-3xl overflow-hidden border border-slate-200/50 bg-white p-2">
                  <Image
                    src="/images/alizee-photo.jpg"
                    alt="Alizee Wouters"
                    width={400}
                    height={400}
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel - Tentacle Series */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-slate-900 mb-6">Featured Projects</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-4"></div>
            <p className="text-lg text-slate-600"></p>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="flex items-center gap-6">
              {/* Previous Project Preview */}
              <div
                className="hidden lg:block w-48 opacity-60 hover:opacity-80 transition-opacity cursor-pointer"
                onClick={prevProject}
              >
                <Card className="border-slate-200/50 shadow-md bg-white/60">
                  <CardContent className="p-0">
                    <div className="relative h-32 overflow-hidden rounded-t-lg">
                      {renderMedia(featuredProjects[getPrevProject()], "preview")}
                    </div>
                    <div className="p-4">
                      <h4 className="text-sm font-medium text-slate-700 truncate">
                        {featuredProjects[getPrevProject()].title}
                      </h4>
                      <span className="text-xs text-slate-500">{featuredProjects[getPrevProject()].category}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Project */}
              <div className="flex-1 max-w-4xl">
                <Card className="border-slate-200/50 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Media Section */}
                      <div className="relative h-80 lg:h-96 overflow-hidden rounded-l-lg">
                        {renderMedia(featuredProjects[currentProject])}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="mb-4 flex items-center gap-2">
                          <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-800 text-sm font-medium rounded-full transition-all duration-500">
                            {featuredProjects[currentProject].category}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">
                            {currentProject + 1} of {featuredProjects.length}
                          </span>
                        </div>
                        <h3 className="text-2xl font-semibold text-slate-900 mb-4 transition-all duration-500">
                          {featuredProjects[currentProject].title}
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8 transition-all duration-500">
                          {featuredProjects[currentProject].description}
                        </p>
                        <div className="flex items-center gap-4">
                          <Button
                            asChild
                            className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white transition-colors duration-150 hover:scale-105 active:scale-95 transform"
                          >
                            <Link href={featuredProjects[currentProject].link} className="flex items-center gap-2">
                              Learn More
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Next Project Preview */}
              <div
                className="hidden lg:block w-48 opacity-60 hover:opacity-80 transition-opacity cursor-pointer"
                onClick={nextProject}
              >
                <Card className="border-slate-200/50 shadow-md bg-white/60">
                  <CardContent className="p-0">
                    <div className="relative h-32 overflow-hidden rounded-t-lg">
                      {renderMedia(featuredProjects[getNextProject()], "preview")}
                    </div>
                    <div className="p-4">
                      <h4 className="text-sm font-medium text-slate-700 truncate">
                        {featuredProjects[getNextProject()].title}
                      </h4>
                      <span className="text-xs text-slate-500">{featuredProjects[getNextProject()].category}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-0 lg:left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 z-10"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6 text-slate-600" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 z-10"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6 text-slate-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject
                      ? "bg-gradient-to-r from-blue-600 to-emerald-600 scale-110"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-slate-900 mb-6">About Me</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl p-12 border border-slate-200/50 shadow-sm">
            <div className="max-w-4xl mx-auto">
              <p className="text-xl leading-relaxed text-slate-600 mb-8">
                I'm a multidisciplinary researcher with a passion for exploring the frontiers of neurotechnology and
                cognitive science. My work spans from developing brain-controlled interfaces to understanding the
                fundamental mechanisms of human cognition.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                Currently pursuing advanced research in anatomical engineering while contributing to groundbreaking
                projects in neurotechnology and experimental psychology. I believe in the power of interdisciplinary
                collaboration to solve complex challenges at the intersection of technology and human experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Areas */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-slate-900 mb-6">My Work</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="group text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-8 flex items-center justify-center mx-auto">
                <span className="text-white font-semibold text-xl">R</span>
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-4">Research</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Advancing neurotechnology, anatomical engineering, and cognitive science through innovative research
                approaches.
              </p>
              <Link
                href="/research"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:gap-2 transition-all"
              >
                Explore Research
                <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-0 transition-all" />
              </Link>
            </div>

            <div className="group text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mb-8 flex items-center justify-center mx-auto">
                <span className="text-white font-semibold text-xl">E</span>
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-4">Work Experience</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Professional journey through innovative companies including Psyonic, Auli Tech, and UCLA's Makerspace.
              </p>
              <Link
                href="/work-experience"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium group-hover:gap-2 transition-all"
              >
                View Experience
                <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-0 transition-all" />
              </Link>
            </div>

            <div className="group text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl mb-8 flex items-center justify-center mx-auto">
                <span className="text-white font-semibold text-xl">P</span>
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-4">Projects</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Diverse portfolio spanning computer science, data science engineering, experimental design, and personal
                innovations.
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium group-hover:gap-2 transition-all"
              >
                Browse Projects
                <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-0 transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-white mb-6">Let's Collaborate</h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Interested in discussing research opportunities or potential collaborations? I'd love to connect.
          </p>
          <Button
            onClick={handleEmailClick}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white border-0 px-8 py-6 text-base font-medium"
          >
            <div className="flex items-center gap-3">
              {emailCopied ? <Check className="w-5 h-5" /> : <Mail className="w-5 h-5" />}
              {emailCopied ? "Email Copied!" : "Start a Conversation"}
            </div>
          </Button>
        </div>
      </section>
    </div>
  )
}
