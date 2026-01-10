"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, ExternalLink, ArrowRight, Check, ChevronLeft, ChevronRight, Menu, X } from "lucide-react"
import AnimatedBackground from "@/components/AnimatedBackground"

const featuredProjects = [
  {
    id: 1,
    title: "Analog EMG Controlled Tentacle with 4 Degrees of Freedom",
    description:
      "Advanced proportional control system using analog muscle activation signals for continuous, natural movement that responds to contraction intensity. Used in research studies investigating referential control of agonist-antagonist muscle pairs.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/-487967345448332010820251003_192912-IHpZjVTrQRE6h4n9dV7K6RJemUyeyn.mov",
    link: "/projects/anatomical-engineering#analog-emg-tentacle",
    category: "Anatomical Engineering",
    isVideo: true,
    caption: "Analog EMG Control Demonstration",
  },
  {
    id: 2,
    title: "Pilot Study on the Impact of Proprioception on Referred Control",
    description:
      "Research investigating how control mapping between human and referred degrees of freedom affects myoelectric neuromuscular control performance using antagonistic muscle pairs for intuitive robotic device operation",
    image: "/images/proprioception-referred-control-study.jpeg",
    link: "/research/anatomical-engineering#research-publications",
    category: "Research Publication",
    isImage: true,
    caption: "UCLA Research Poster",
  },
  {
    id: 3,
    title: "Aged Plantarflexor Bionic Assistance Device",
    description:
      "Series elastic actuator design for ankle plantarflexion assistance targeting aged populations with reduced mobility and gait performance.",
    image: "/images/screenshot-202025-12-03-20125041.png",
    link: "/projects/anatomical-engineering#ankle-exoskeleton",
    category: "Anatomical Engineering",
    isImage: true,
    caption: "Technical Design Rendering",
  },
  {
    id: 4,
    title: "Converting Grayscale to Color Using U-Net Image-to-Image Translation",
    description:
      "Deep learning model using U-Net architecture trained on STL-10 dataset to automatically colorize grayscale images with perceptual loss optimization.",
    image: "/images/psych-20119d-20poster-20-281-29-1.jpeg",
    link: "/projects/data-science-engineering#unet-colorization",
    category: "Data Science Engineering",
    isImage: true,
    caption: "Research Poster",
  },
  {
    id: 5,
    title: "Visualizing High-Dimensional Data with t-SNE",
    description:
      "Advanced dimensionality reduction technique for visualizing complex datasets and understanding data structure in lower dimensions",
    image: "/images/tsne-sigma-1.png",
    link: "/projects/data-science-engineering#tsne-visualization",
    category: "Data Science Engineering",
    isImage: true,
    caption: "t-SNE Visualization Results",
  },
]

export default function HomePage() {
  const [emailCopied, setEmailCopied] = useState(false)
  const [currentProject, setCurrentProject] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Handle hash navigation when page loads
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
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
            className={`${sizeClasses} object-contain transition-all duration-500 bg-gradient-to-br from-slate-50 to-blue-50/30`}
            style={{ transform: "scale(1.4)" }}
          />
          {project.caption && size === "main" && (
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-black/70 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-lg text-xs sm:text-sm font-medium">
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
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-black/70 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-lg text-xs sm:text-sm font-medium">
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
          <div className="text-center p-2 sm:p-4">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl mx-auto mb-2 flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-lg">3D</span>
            </div>
            {size === "main" && (
              <>
                <p className="text-slate-600 font-medium text-xs sm:text-sm">3D Model Screen Capture</p>
                <p className="text-slate-500 text-xs mt-1 hidden sm:block">Click "Learn More" to explore</p>
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

  const handleLearnMoreClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault()
    window.location.href = link
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 sm:py-6">
            <Link href="/" className="text-xl sm:text-2xl font-light text-slate-900 tracking-wide">
              Alizee Wouters
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8 xl:space-x-10">
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-slate-200 py-4">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/resume"
                  className="text-slate-600 hover:text-emerald-600 transition-colors font-medium px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resume
                </Link>
                <Link
                  href="/research"
                  className="text-slate-600 hover:text-emerald-600 transition-colors font-medium px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Research
                </Link>
                <Link
                  href="/work-experience"
                  className="text-slate-600 hover:text-emerald-600 transition-colors font-medium px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Work Experience
                </Link>
                <Link
                  href="/projects"
                  className="text-slate-600 hover:text-emerald-600 transition-colors font-medium px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/community"
                  className="text-slate-600 hover:text-emerald-600 transition-colors font-medium px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Community
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Neural Network Animation */}
      <section className="pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 space-y-8 sm:space-y-12 text-center lg:text-left">
              <div className="space-y-6 sm:space-y-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 leading-tight">
                  Hello, I'm{" "}
                  <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                    Alizee Wouters
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  A researcher and scientist at the intersection of neurotechnology, cognitive science, and biomedical
                  engineering. I aim to develop innovative solutions that bridge human cognition and technology.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={handleEmailClick}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white border-0 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-medium w-full sm:w-auto"
                >
                  <div className="flex items-center gap-3">
                    {emailCopied ? (
                      <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                    {emailCopied ? "Email Copied!" : "Get in Touch"}
                  </div>
                </Button>
                <Button
                  variant="default"
                  size="lg"
                  asChild
                  className="bg-white hover:bg-gray-50 text-slate-700 border border-slate-300 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-medium w-full sm:w-auto"
                >
                  <a
                    href="https://linkedin.com/in/alizee-wouters"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 justify-center"
                  >
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                    LinkedIn
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center order-first lg:order-last">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-3xl blur-3xl"></div>
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border border-slate-200/50 bg-white p-2">
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

      {/* Featured Projects Carousel */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-light text-slate-900 mb-4 sm:mb-6">Featured Projects</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-4"></div>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="flex items-center gap-3 sm:gap-6">
              {/* Previous Project Preview - Hidden on mobile */}
              <div
                className="hidden xl:block w-48 opacity-60 hover:opacity-80 transition-opacity cursor-pointer"
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
                      <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden lg:rounded-l-lg rounded-t-lg lg:rounded-t-none">
                        {renderMedia(featuredProjects[currentProject])}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                        <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-800 text-xs sm:text-sm font-medium rounded-full transition-all duration-500 w-fit">
                            {featuredProjects[currentProject].category}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">
                            {currentProject + 1} of {featuredProjects.length}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3 sm:mb-4 transition-all duration-500 leading-tight">
                          {featuredProjects[currentProject].title}
                        </h3>
                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 transition-all duration-500">
                          {featuredProjects[currentProject].description}
                        </p>
                        <a
                          href={featuredProjects[currentProject].link}
                          onClick={(e) => handleLearnMoreClick(e, featuredProjects[currentProject].link)}
                        >
                          <Button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                              Learn More
                              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Next Project Preview - Hidden on mobile */}
              <div
                className="hidden xl:block w-48 opacity-60 hover:opacity-80 transition-opacity cursor-pointer"
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
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 z-10"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 z-10"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 sm:mt-8 gap-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
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
      <section className="py-20 sm:py-24 lg:py-32 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-light text-slate-900 mb-4 sm:mb-6">About Me</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/50 shadow-sm">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl leading-relaxed text-slate-600 mb-6 sm:mb-8">
                I'm a UCLA student in Cognitive Science and Data Science Engineering, with a certification in
                Neuroscience and Neurotechnology. My contributions span from developing brain-controlled interfaces to
                understanding the fundamental mechanisms of human cognition.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                Currently pursuing research in anatomical engineering while contributing to groundbreaking projects in
                neurotechnology and experimental psychology. I believe in the power of interdisciplinary collaboration
                to solve complex challenges at the intersection of technology and human experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Areas */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-light text-slate-900 mb-4 sm:mb-6">My Work</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            <div className="group text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 sm:mb-8 flex items-center justify-center mx-auto">
                <span className="text-white font-semibold text-xl">R</span>
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-slate-900 mb-3 sm:mb-4">Research</h3>
              <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Advancing neurotechnology, anatomical engineering, and cognitive science through research.
              </p>
              <Link
                href="/research"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:gap-2 transition-all text-sm sm:text-base"
              >
                Explore Research
                <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-0 transition-all" />
              </Link>
            </div>

            <div className="group text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mb-6 sm:mb-8 flex items-center justify-center mx-auto">
                <span className="text-white font-semibold text-xl">E</span>
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-slate-900 mb-3 sm:mb-4">Work Experience</h3>
              <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Professional journey through innovative companies including Psyonic, Auli Tech, and UCLA's Makerspace.
              </p>
              <Link
                href="/work-experience"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium group-hover:gap-2 transition-all text-sm sm:text-base"
              >
                View Experience
                <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-0 transition-all" />
              </Link>
            </div>

            <div className="group text-center sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl mb-6 sm:mb-8 flex items-center justify-center mx-auto">
                <span className="text-white font-semibold text-xl">P</span>
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-slate-900 mb-3 sm:mb-4">Projects</h3>
              <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Diverse portfolio spanning computer science, data science engineering, experimental design, and personal
                innovations.
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium group-hover:gap-2 transition-all text-sm sm:text-base"
              >
                Browse Projects
                <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-0 transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-4 sm:mb-6">Let's Collaborate</h2>
          <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-10 leading-relaxed">
            Interested in discussing research opportunities or potential collaborations? I'd love to connect.
          </p>
          <Button
            onClick={handleEmailClick}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white border-0 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-medium w-full sm:w-auto"
          >
            <div className="flex items-center gap-3 justify-center">
              {emailCopied ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : <Mail className="w-4 h-4 sm:w-5 sm:h-5" />}
              {emailCopied ? "Email Copied!" : "Start a Conversation"}
            </div>
          </Button>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 opacity-80 hover:opacity-100"
        aria-label="Back to top"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  )
}
