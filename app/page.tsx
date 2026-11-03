"use client"

import SiteNav from "@/components/SiteNav"

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
    title: "Analog EMG-Controlled Soft Robotic Manipulator",
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

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-scroll-reveal]")
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" })
      sections.forEach((section) => {
        section.classList.add("scroll-reveal-ready")
        observer.observe(section)
      })
      return () => observer.disconnect()
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
            className={`${sizeClasses} object-contain transition-all duration-500 bg-[#eaf1f8]`}

          />

        </div>
      )
    } else if (project.isImage) {
      return (
        <div className="relative w-full h-full">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className={`object-contain transition-all duration-500 bg-[#eaf1f8]`}
          />

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
      <SiteNav />

      {/* Hero Section with Neural Network Animation */}
      <section id="main-content" className="portfolio-hero relative overflow-hidden" aria-labelledby="hero-heading">
        {/* Import LanguageToggle component */}
        <AnimatedBackground />
        <div className="hero-composition relative z-10">
          <div className="hero-columns">
            <div className="hero-copy space-y-10 text-left">
              <div className="space-y-6 sm:space-y-8">
                <div className="hero-identity">
                  <h1 id="hero-heading" className="hero-title">Hello, I'm<br />Alizee Wouters</h1>
                </div>
                <p className="hero-description">I'm a biomedical engineering master's student at Georgia Tech and Emory, specializing in neuroengineering. My work spans quantitative brain imaging, muscle-controlled robotics, and assistive technology, combining research with hands-on engineering.</p>
              </div>

              <div className="hero-actions flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={handleEmailClick}
                  size="lg"
                  className="rounded-none bg-[#285c8a] hover:bg-[#1a466f] text-white border-0 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-medium w-full sm:w-auto"
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
                  className="rounded-none bg-white hover:bg-[#edf3f8] text-[#285c8a] border border-[#b8cbd9] px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-medium w-full sm:w-auto"
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


            <div className="hero-photo-right"><Image src="/images/alizee-headshot.png" alt="Alizee Wouters" width={448} height={448} className="identity-portrait" /></div>

          </div>
        </div>
      </section>


      {/* Selected work: image-led carousel. Existing project data and navigation preserved. */}
      <section className="featured-section bg-white py-16 sm:py-24 px-5 sm:px-8" data-scroll-reveal aria-labelledby="featured-projects-heading">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-10 sm:mb-14">
            <h2 id="featured-projects-heading" className="text-3xl sm:text-5xl font-normal tracking-tight text-[#172c43]">Featured Projects</h2>
            <span className="text-sm text-[#5b738b] tabular-nums" aria-label={`Project ${currentProject + 1} of ${featuredProjects.length}`}>
              {currentProject + 1} of {featuredProjects.length}
            </span>
          </div>
          <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-8 lg:gap-14 items-center">
            <div key={featuredProjects[currentProject].id} className={`feature-media-enter relative overflow-hidden bg-[#e6edf3] ${featuredProjects[currentProject].id === 2 || featuredProjects[currentProject].id === 4 ? "aspect-[4/4] sm:aspect-[5/4]" : "aspect-[5/4]"}`}>
              {renderMedia(featuredProjects[currentProject])}
            </div>
            <div key={`text-${featuredProjects[currentProject].id}`} className="feature-copy-enter lg:py-5" aria-live="polite">
              <p className="mb-4 text-sm font-medium text-[#416b97]">{featuredProjects[currentProject].category}</p>
              <h3 className="text-2xl sm:text-3xl lg:text-[2.35rem] leading-[1.17] tracking-tight font-normal text-[#172c43] mb-5">{featuredProjects[currentProject].title}</h3>
              <p className="text-base sm:text-lg leading-[1.7] text-[#4d6073] mb-7">{featuredProjects[currentProject].description}</p>
              <Link href={featuredProjects[currentProject].link} className="inline-flex items-center gap-2 text-[#235c91] font-medium hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#235c91]">
                Explore project <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-[#ccd9e4] pt-5">
            <div className="flex flex-wrap gap-2" aria-label="Choose featured project">
              {featuredProjects.map((project, index) => (
                <button key={project.id} type="button" onClick={() => setCurrentProject(index)}
                  className={`h-2 transition-colors duration-200 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#235c91] ${index === currentProject ? "w-9 bg-[#315e8d]" : "w-6 bg-[#bbcad8] hover:bg-[#7b9ab8]"}`}
                  aria-label={`Show project ${index + 1}: ${project.title}`} aria-current={index === currentProject ? "true" : undefined} />
              ))}
            </div>
            <div className="flex items-center gap-5 text-[#235c91]">
              <button type="button" onClick={prevProject} className="p-2 hover:text-[#132f50] focus-visible:outline focus-visible:outline-2" aria-label="Previous project"><ChevronLeft className="w-6 h-6" /></button>
              <button type="button" onClick={nextProject} className="p-2 hover:text-[#132f50] focus-visible:outline focus-visible:outline-2" aria-label="Next project"><ChevronRight className="w-6 h-6" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* About: prose with an editorial column, not a bordered card. */}
      <section className="bg-[#f5f9fc] px-5 sm:px-8 py-16 sm:py-24" data-scroll-reveal aria-labelledby="about-heading">
        <div className="mx-auto max-w-6xl grid md:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] gap-6 md:gap-12">
          <h2 id="about-heading" className="text-3xl sm:text-4xl font-normal tracking-tight text-[#172c43]">About Me</h2>
          <div className="max-w-3xl text-[#42586f] space-y-6">
            <p className="text-lg sm:text-xl leading-[1.75]">I'm a master's student in Biomedical Engineering and Neuroengineering at Georgia Tech and Emory. I split my time between graduate coursework and research, learning the theory in lectures and putting it to work on real neuroimaging problems.</p>
            <p className="text-base sm:text-lg leading-[1.75]">My research at SynterMed and UCLA Health focuses on quantitative neuroimaging. I analyze FDG and tau PET scans in Python, validate neuroimaging software across processing settings and diagnostic groups, and study how tau accumulation and glucose metabolism relate in the detection of Alzheimer's disease. Outside of that work, I keep building brain-controlled interfaces and assistive technology, drawn to problems that do not fit neatly into a single field.</p>
          </div>
        </div>
      </section>

      {/* Work areas: navigable list, not three matching feature cards. */}
      <section className="bg-[#edf3f7] px-5 sm:px-8 py-16 sm:py-24" data-scroll-reveal aria-labelledby="work-heading">
        <div className="mx-auto max-w-6xl">
          <h2 id="work-heading" className="text-3xl sm:text-4xl font-normal tracking-tight text-[#172c43] mb-8 sm:mb-12">My Work</h2>
          {[
            { title: "Research", href: "/research", description: "Advancing neurotechnology, anatomical engineering, and cognitive science through research." },
            { title: "Work Experience", href: "/work-experience", description: "Professional journey through innovative companies including Psyonic, Auli Tech, SynterMed, and UCLA's Makerspace." },
            { title: "Projects", href: "/projects", description: "Diverse portfolio spanning computer science, data science engineering, experimental design, and personal innovations." },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="group grid md:grid-cols-[minmax(0,0.35fr)_minmax(0,0.57fr)_auto] items-center gap-3 md:gap-10 border-t border-[#c6d5e2] py-6 sm:py-9 transition-[padding,background-color] duration-300 hover:bg-[#e4eef5] hover:pl-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#235c91]">
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#172c43] group-hover:text-[#235c91] transition-colors">{item.title}</h3>
              <p className="text-base leading-relaxed text-[#4d6073]">{item.description}</p>
              <ArrowRight className="hidden md:block w-5 h-5 text-[#235c91] transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          ))}
          <div className="border-t border-[#c6d5e2]" />
        </div>
      </section>

      {/* Closing: flat navy, no gradient or outsized CTA. */}
      <section className="bg-[#1c3047] px-5 sm:px-8 py-16 sm:py-20" data-scroll-reveal aria-labelledby="collaborate-heading">
        <div className="mx-auto max-w-6xl grid md:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] gap-6 md:gap-12 items-start">
          <h2 id="collaborate-heading" className="text-3xl sm:text-4xl tracking-tight font-normal text-white">Let's Collaborate</h2>
          <div>
            <p className="text-lg sm:text-xl leading-relaxed text-[#d6e2ed] mb-6">Interested in discussing research opportunities or potential collaborations? I'd love to connect.</p>
            <button type="button" onClick={handleEmailClick} className="inline-flex items-center gap-3 text-white font-medium border-b border-[#98b9d9] pb-2 hover:text-[#b5d5ef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              {emailCopied ? "Email copied" : "Start a conversation"} <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-[#315e8d] hover:bg-[#20476f] text-white rounded-sm transition-colors duration-200 flex items-center justify-center z-50 opacity-90"
        aria-label="Back to top"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  )
}
