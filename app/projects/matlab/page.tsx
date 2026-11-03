"use client"

import SiteNav from "@/components/SiteNav"

import { useEffect, type ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Home, ExternalLink, Code, Brain, Eye, Headphones, MousePointer } from "lucide-react"

export default function MatlabProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projects: { id:number; title:string; description:string; tags:string[]; icon:ReactNode; githubUrl:string; color:string; language:string; image?:string; images?:string[]; video?:string }[] = [
    {
      id: 9,
      title: "Monster Maze Game",
      description:
        "An ASCII-based dungeon crawler game built in C++. Navigate through multiple maze levels while fighting goblins, snakewomen, and boogey men that intelligently track and attack the player. Collect various weapons with different attack ranges and damage values, and discover scrolls that grant special powers like increased strength and accuracy. Battle through the levels to reach the golden idol and claim victory.",
      tags: ["Game Development", "ASCII Graphics", "AI Pathfinding", "Object-Oriented Design"],
      icon: <Code className="w-6 h-6" />,
      githubUrl: "https://github.com/aliwouters/Monster-Maze-Game-",
      color: "red",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Recording%202026-01-11%20143008%20%281%29%20%281%29-BwiqkcP1hmr9yRhiiDGoi76FzieFCl.mp4",
      language: "C++",
    },
    {
      id: 7,
      title: "Audiovisual Perception Study",
      description:
        "Examines how sound affects perception of an animation. Two circles meet behind a square while a bonk or whoosh plays, and participants judge whether they bounced or passed through. The program randomizes sound conditions, records responses, and saves results.",
      tags: ["Audiovisual Integration", "Perceptual Psychology", "Animation"],
      icon: <Brain className="w-6 h-6" />,
      githubUrl: "https://github.com/aliwouters/MatLab-Projects/blob/main/Psych20BHomework7.m",
      color: "indigo",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Recording%202025-09-06%20195651-Mcm7rvXFNPhCnYvtfipVh4jI3xOCuq.mp4",
      language: "MATLAB",
    },
    {
      id: 6,
      title: "Auditory Reaction Time Experiment",
      description:
        "Runs an auditory reaction-time experiment. Participants hear a tone in the left ear, right ear, or both, and press the spacebar when it plays. The program records response times, manages subject IDs, and saves results using PsychPortAudio.",
      tags: ["Audio Processing", "PsychPortAudio", "Spatial Audio"],
      icon: <Headphones className="w-6 h-6" />,
      githubUrl: "https://github.com/aliwouters/MatLab-Projects/blob/main/Psych20BHomework6.m",
      color: "teal",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Recording%202025-09-06%20200436-U8J4XyGUd0L86sRTm7WDLo0RCMCh3U.mp4",
      language: "MATLAB",
    },
    {
      id: 5,
      title: "Self-Assessment Manikin (SAM) Tool",
      description:
        "Creates an interactive mood-rating tool with the Self-Assessment Manikin (SAM). The program slices icons from an image, highlights them on hover, and lets users select one to match their mood. It handles real-time mouse tracking, screen drawing, and saves the data.",
      tags: ["Mouse Tracking", "Image Processing", "Mood Assessment"],
      icon: <Brain className="w-6 h-6" />,
      githubUrl: "https://github.com/aliwouters/MatLab-Projects/blob/main/Psych20BHomework5.m",
      color: "rose",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250907-0310-12.8199673-Xta2MQBZZJMb0IueJt2NEGvVqJ7anV.mp4",
      language: "MATLAB",
    },
    {
      id: 8,
      title: "Visual Change Detection with Mouse Response",
      description:
        "This MATLAB/Psychtoolbox project measures visual change detection with mouse responses. In each trial, two blue circles appear; after a random delay, one circle briefly changes luminance (lighter or darker). Participants click the circle that changed as fast as possible. The program randomizes trial types and delays, records response times and accuracy, and saves results to a subject-specific .mat file.",
      tags: ["Change Detection", "Mouse Response", "Visual Perception", "Reaction Time"],
      icon: <MousePointer className="w-6 h-6" />,
      githubUrl: "https://github.com/aliwouters/MatLab-Projects/blob/main/Psych20BHomework8.m",
      color: "cyan",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Recording%202025-09-06%20203545-bofEP6MwBQs3pT2rR2rXhjn5tzhCh4.mp4",
      language: "MATLAB",
    },
    {
      id: 4,
      title: "Visual Reaction Time Experiment",
      description:
        "Implements a reaction-time experiment in Psychtoolbox. A yellow circle changes color, shape, or position after a random delay, and participants press the spacebar as quickly as possible. The program measures response times, randomizes trials, and saves results.",
      tags: ["Reaction Time", "Experimental Design", "Visual Stimuli"],
      icon: <Eye className="w-6 h-6" />,
      githubUrl: "https://github.com/aliwouters/MatLab-Projects/blob/main/Psych20BHomework4.m",
      color: "orange",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Recording%202025-09-06%20201736-YHHSupNymvOEdUYmPF0ubGVpGTkfYu.mp4",
      language: "MATLAB",
    },
    {
      id: 3,
      title: "Interactive Survey System",
      description:
        "Builds a simple interactive survey using Psychtoolbox. The program shows instructions, gathers input on language background, voter registration, age, and favorite color, and checks for valid responses. Results are saved to a file, demonstrating screen control, keyboard input, and data storage.",
      tags: ["User Interface", "Data Collection", "Input Validation"],
      icon: <Brain className="w-6 h-6" />,
      githubUrl: "https://github.com/aliwouters/MatLab-Projects/blob/main/Psych20BHomework3.m",
      color: "purple",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Recording%202025-09-06%20201954-2dbIVaWZrw5BtRmMUhMzRjurNAqAup.mp4",
      language: "MATLAB",
    },
    {
      id: 2,
      title: "Visual Display with Psychtoolbox",
      description:
        "Introduces Psychtoolbox for visual display. The program opens a full-screen window, divides the screen into quadrants, and shows colored text. It also places the word 'random' in different spots and shades to demonstrate randomization, text rendering, and display timing.",
      tags: ["Psychtoolbox", "Visual Display", "Screen Control"],
      icon: <Eye className="w-6 h-6" />,
      githubUrl: "https://github.com/aliwouters/MatLab-Projects/blob/main/Psych20BHomework2.m",
      color: "green",
      image: "/images/matlab-psychtoolbox-display-hq.png",
      language: "MATLAB",
    },
    {
      id: 1,
      title: "Matrix Operations & Programming Fundamentals",
      description:
        "Covers random matrix generation, element-wise operations, row and column statistics, and building structured arrays. Also includes practice with loops, countdown timers, and user input, focusing on MATLAB's core programming and vectorization.",
      tags: ["Matrix Operations", "Vectorization", "Data Structures"],
      icon: <Code className="w-6 h-6" />,
      githubUrl: "https://github.com/aliwouters/MatLab-Projects/blob/main/Psych20BHomework1.m",
      color: "blue",
      image: "/images/matlab-matrix-operations-hq.png",
      language: "MATLAB",
    },
  ]

  const getButtonClasses = (_color: string) => "bg-[#285c8a] hover:bg-[#1c456b]"

  return (
    <div className="portfolio-inner case-study min-h-screen bg-white text-[#1b334b]">
      {/* Navigation */}
      <SiteNav />

      <div id="main-content" className="pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="page-introduction mb-16">
            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">Computer Science</h1>
            <div className="mt-8">
              <Button asChild variant="outline" className="border-slate-300 bg-transparent hover:bg-slate-100">
                <Link
                  href="https://github.com/aliwouters?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View All Projects on GitHub
                </Link>
              </Button>
            </div>
          </div>

          {/* Projects List */}
          <div className="space-y-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="portfolio-article case-section border-slate-200/50 transition-all duration-300 group overflow-hidden"
              >
                {project.image || project.images || project.video ? (
                  // Projects with images/video - horizontal layout with equal heights (starts at md breakpoint)
                  <div className="flex flex-col md:flex-row min-h-[400px]">
                    {/* Left side - Content */}
                    <div className="flex-1 md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl md:text-2xl font-medium text-slate-900 leading-tight mb-3 md:mb-4">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-slate-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                          {project.description}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.language && (
                            <Badge
                              variant="secondary"
                              className="bg-[#eef4f8] text-[#285c8a] border-[#cbd9e4] text-xs font-medium"
                            >
                              {project.language}
                            </Badge>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                          {project.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="bg-slate-100 text-slate-700 border-slate-200 text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="mt-auto">
                        <Button asChild size="sm" className={`w-fit ${getButtonClasses(project.color)} text-white`}>
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                            <span className="text-xs md:text-sm">View Code on GitHub</span>
                          </Link>
                        </Button>
                      </div>
                    </div>

                    {/* Right side - Images/Video */}
                    <div className="flex-1 md:w-1/2 p-4 md:p-8 flex items-center justify-center bg-slate-25">
                      <div className="w-full h-full flex items-center justify-center">
                        {project.video ? (
                          // Video - autoplay with controls
                          <video
                            autoPlay
                            loop
                            muted
                            controls
                            className="w-full h-auto max-h-[350px] object-contain rounded-md md:rounded-lg"
                          >
                            <source src={project.video} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : project.images ? (
                          // Multiple images - display in a compact vertical stack with smaller sizes
                          <div className="w-full max-w-[250px] md:max-w-[300px] space-y-2">
                            {project.images.map((imageSrc, index) => (
                              <div key={index} className="w-full">
                                <Image
                                  src={imageSrc || "/placeholder.svg"}
                                  alt={`Screenshot ${index + 1} of ${project.title}`}
                                  width={250}
                                  height={150}
                                  className="w-full h-auto object-contain rounded-md"
                                />
                              </div>
                            ))}
                          </div>
                        ) : (
                          // Single image
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={`Screenshot of ${project.title}`}
                            width={350}
                            height={280}
                            className="w-full h-auto max-h-[280px] md:max-h-[350px] object-contain rounded-md md:rounded-lg"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Projects without images/video - standard layout
                  <div className="p-8">
                    <CardTitle className="text-2xl font-medium text-slate-900 leading-tight mb-4">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 leading-relaxed mb-6 text-base">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.language && (
                        <Badge
                          variant="secondary"
                          className="bg-[#eef4f8] text-[#285c8a] border-[#cbd9e4] text-xs font-medium"
                        >
                          {project.language}
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-slate-100 text-slate-700 border-slate-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild className={`w-fit ${getButtonClasses(project.color)} text-white`}>
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Code on GitHub
                      </Link>
                    </Button>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Back to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 w-12 h-12 bg-[#285c8a] text-white rounded-full transition-all duration-300 flex items-center justify-center z-50 opacity-80 hover:opacity-100"
            aria-label="Back to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
