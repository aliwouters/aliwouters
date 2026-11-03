"use client"

import SiteNav from "@/components/SiteNav"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Download,
  GraduationCap,
  Briefcase,
  Award,
  User,
  Mail,
  MapPin,
  ExternalLink,
  Briefcase as Certificate,
  Home,
} from "lucide-react"

export default function ResumePage() {
  const [isGeneratingTranscript, setIsGeneratingTranscript] = useState(false)

  const handleDownloadTranscript = async () => {
    setIsGeneratingTranscript(true)
    try {
      const response = await fetch("/documents/transcript-2026.pdf")
      if (!response.ok) throw new Error("PDF request failed")
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "Alizee-Wouters-Transcript.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error downloading transcript:", error)
      alert("Failed to download transcript. Please try again.")
    } finally {
      setIsGeneratingTranscript(false)
    }
  }

  const handleViewNarcanCertificate = () => {
    alert(
      "End Overdose Narcan Training Certificate\n\nCompleted: September 11, 2025\n\nCertificate download will be available soon.\nFor immediate verification, please contact:\nali.wout.3003@gmail.com",
    )
  }

  return (
    <div className="restored-resume min-h-screen bg-white text-[#1b334b]">
      {/* Navigation */}
      <SiteNav />

      <div id="main-content" className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#1b334b]">Resume</h1>
        </div>

        {/* Contact Information */}
        <section className="restore-section">
          <header>
            <h2>
              Contact Information
            </h2>
          </header>
          <div className="restore-content">
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="text-gray-700 text-sm sm:text-base">ali.wout.3003@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-blue-500" />
                <a
                  href="https://linkedin.com/in/alizee-wouters"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm sm:text-base"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span className="text-gray-700 text-sm sm:text-base">Los Angeles, CA</span>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Download - FIXED WIDTH BUTTONS */}
        <section className="restore-section">
          <header>
            <h2>
              <Download className="w-6 h-6 text-blue-500" />
              Resume Download
            </h2>
          </header>
          <div className="restore-content">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#285c8a] hover:bg-[#1d456b] text-white px-6 py-3 w-full sm:w-auto">
                <a href="/documents/resume-2026.pdf" download="Alizee-Wouters-Resume.pdf"><Download className="w-4 h-4" /><span>Download Resume (PDF)</span></a>
              </Button>
              <Button
                onClick={handleDownloadTranscript}
                disabled={isGeneratingTranscript}
                variant="outline"
                className="rounded-none border-[#b9ccdb] bg-white flex items-center justify-center gap-2 w-full sm:w-[200px]"
              >
                <Download className="w-4 h-4" />
                <span>{isGeneratingTranscript ? "Loading..." : "Academic Transcript"}</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Formal Education */}
        <section id="formal-education" className="restore-section">
          <header>
            <h2>
              Formal Education
            </h2>
          </header>
          <div className="restore-content">
            <div className="space-y-6">
              {/* Georgia Tech & Emory */}
              <div className="restore-entry education-entry">
                <div className="education-marks"><img src="/images/sourced/georgia-tech.png" alt="Georgia Tech" /><img src="/images/sourced/emory.png" alt="Emory University" /></div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    Georgia Institute of Technology and Emory University 2025-2027
                  </h3>
                  <span className="text-xs font-medium text-[#416c94]">
                    In Progress
                  </span>
                </div>
                <p className="text-base sm:text-lg text-gray-700 mb-2">
                  Master of Science in Biomedical Engineering
                </p>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">
                  Specialization in Neuroengineering • Expected June 2027
                </p>
                <p className="text-sm leading-relaxed text-gray-600">
                  Pursuing a graduate degree through the joint biomedical engineering program between the Georgia
                  Institute of Technology and Emory University, with a specialization in neuroengineering. The program
                  bridges rigorous engineering fundamentals with clinical and neuroscience research to develop
                  technologies that interface with the nervous system.
                </p>
              </div>

              {/* UCLA */}
              <div className="restore-entry education-entry">
                <div className="education-marks"><img src="/images/sourced/ucla.svg" alt="UCLA" /></div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  University of California, Los Angeles (UCLA) 2022-2026
                </h3>
                <p className="text-gray-600 mb-2 text-sm sm:text-base">
                  College Honors Program. Rose Gilbert Honor Scholarship recipient
                </p>
                <p className="text-gray-600 mb-2 text-sm sm:text-base">Bachelor of Science in Cognitive Science</p>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">
                  Specialization in Computing • Minor in Data Science Engineering
                </p>
                <p className="text-sm leading-relaxed text-gray-600">
                  Pursuing an interdisciplinary degree that combines cognitive psychology, neuroscience, computer
                  science, and mathematics to understand intelligent systems, both real and artificial. The
                  Specialization in Computing provides an extensive education in computer science and its applications
                  in cognitive psychology and neuroscience while the data science engineering minor exposes students to
                  the entire life cycle of data science, from both foundational and application perspectives.
                </p>
                <div className="mt-4 text-sm text-gray-600">
                  <p className="mb-1">
                    <strong>Cumulative GPA:</strong> 3.9
                  </p>
                  <p className="mb-3">
                    <strong>Total Units Completed:</strong> 233.0 (including 72.0 transfer credits from Advanced
                    Placement)
                  </p>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-blue-800 mb-2">Academic Honors</h4>
                  <div className="text-sm text-blue-700">
                    <p className="mb-2">
                      <strong>Dean's Honor List:</strong> 8 quarters (Fall 2022, Winter 2023, Spring 2023, Fall 2023,
                      Winter 2024, Fall 2024, Spring 2025, Fall 2025)
                    </p>
                  </div>
                </div>
              </div>

              {/* Queen's University */}
              <div className="restore-entry education-entry">
                <div className="education-marks"><img src="/images/sourced/queens.svg" alt="Queen’s University" /></div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Queen's University 2024</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-2">Neuroscience and Neurotechnology Primer</p>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">Neurotech Microcredential Program (NTMC)</p>
                <p className="text-sm leading-relaxed text-gray-600">
                  Comprehensive microcredential program covering fundamental neuroscience principles and various types
                  of neurotechnologies. The program focused on four core modules: foundations of neuroscience,
                  neuroprosthetics, neuroimaging, and neurostimulation primer. Gained skills in differentiating between
                  neurotechnologies and their use cases, exploring brain atlases and neuronal models to understand brain
                  systems relevant for neurotech, and comparing applications of various neurotechnologies in assessing
                  brain structure and function.
                </p>
              </div>

              {/* High School */}
              <div className="restore-entry education-entry">
                <div className="education-marks"><img src="/images/sourced/san-pasqual.png" alt="San Pasqual High School" /></div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">San Pasqual High School 2022</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-2">High School Diploma</p>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">
                  Valedictorian. Golden Eagle Award (top school honor)
                </p>
                <p className="text-sm leading-relaxed text-gray-600">
                  Strong foundation in STEM subjects with particular emphasis on mathematics, biology, chemistry,
                  physics, and computer science. Participated in advanced placement courses and extracurricular
                  activities that fostered analytical thinking and problem-solving skills essential for higher education
                  and research pursuits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="restore-section">
          <header>
            <h2>
              Professional Experience
            </h2>
          </header>
          <div className="restore-content">
            <div className="space-y-6">
              <div className="restore-entry">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    SynterMed, UCLA Health - Neuronuclear Medicine and Imaging Consultant 2026-Present
                  </h3>
                  <span className="text-xs font-medium text-[#416c94]">
                    Current
                  </span>
                </div>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">Quantitative Neuroimaging Research</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Conduct quantitative FDG and tau PET research using NeuroQ and ADNI datasets</li>
                  <li>• Validate neuroimaging software across versions, processing settings, and diagnostic groups</li>
                  <li>• Analyze regional relationships between tau accumulation and glucose metabolism in Python</li>
                  <li>• Study the detection and characterization of Alzheimer&apos;s disease</li>
                </ul>
              </div>

              <div className="restore-entry">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Braave - R&D Consultant Nov 2025 - Dec 2025
                </h3>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">Wearable Biosensor Integration</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Developed biological sensor integration methods for Braave&apos;s wearable product line</li>
                  <li>• Embedded intimate sensing hardware into soft garments without compromising comfort</li>
                  <li>• Prepared the seamlessly integrated sensing technology for clinical trials</li>
                </ul>
              </div>

              <div className="restore-entry">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  UCLA Makerspace Technician 2023-2026
                </h3>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">Technical Support & Innovation Facilitation</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Provided technical support across multiple fabrication technologies</li>
                  <li>• Trained users on 3D printing, laser cutting, and CNC machining</li>
                  <li>• Developed custom tools and fixtures for improved workshop efficiency</li>
                  <li>• Led educational workshops on making and fabrication techniques</li>
                </ul>
              </div>

              <div className="restore-entry">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Psyonic - Mechatronics Intern 2024
                </h3>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">Bionic Hand Development & Testing</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Contributed to advanced prosthetic hand development and testing</li>
                  <li>• Assisted with production and assembly of robotic hand control systems</li>
                  <li>• Participated in user testing and feedback collection processes</li>
                  <li>• Supported quality assurance and product improvement initiatives</li>
                </ul>
              </div>

              <div className="restore-entry">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Auli Tech - Assistive Technology Intern 2024
                </h3>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">
                  Assistive Technology Marketing & Content Creation
                </p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Collaborated on marketing content for assistive technology devices</li>
                  <li>• Worked with quadriplegic student on authentic user testimonials</li>
                  <li>• Developed vocational skills in marketing and content creation</li>
                  <li>• Contributed to accessibility-focused product promotion</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Research Experience */}
        <section className="restore-section">
          <header>
            <h2>
              Research Experience
            </h2>
          </header>
          <div className="restore-content">
            <div className="space-y-6">
              <div className="restore-entry">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Anatomics Research 2025</h3>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">
                  The Anatomical Engineering Group of Dr. Clites
                </p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Designed and fabricated multi-degree-of-freedom tentacle robots</li>
                  <li>• Developed cable-driven actuation systems for soft robotics</li>
                  <li>• Created 3D models and prototypes for biomimetic manipulation</li>
                  <li>• Integrated control systems for precise robotic movement</li>
                  <li>• Data processing and analysis using Vicon and Nexus software</li>
                  <li>• Motion capture data collection and biomechanical analysis</li>
                </ul>
              </div>

              <div className="restore-entry">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Neurotechnology Research 2022 - 2025
                </h3>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">
                  Brain-Computer Interfaces & Neural Signal Processing
                </p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Developed brain-controlled prosthetic devices using EEG signal processing</li>
                  <li>• Created discrete EEG systems for real-time emotion and stress detection</li>
                  <li>• Applied machine learning algorithms for neural pattern recognition</li>
                  <li>• Won first place at California Neurotechnology Conference</li>
                </ul>
              </div>

              <div className="restore-entry">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Cognitive Science Research 2024</h3>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">Zili Lab - UCLA Psychology Department</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Lab Manager for cognitive abilities research in card game players</li>
                  <li>• Conducted user experience research bridging psychology and design</li>
                  <li>• Investigated graph perception and data visualization comprehension</li>
                  <li>• Managed research teams and coordinated experimental protocols</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Competencies */}
        <section className="restore-section">
          <header>
            <h2>
              Skills & Competencies
            </h2>
          </header>
          <div className="restore-content">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="restore-skill-group">
                <h4 className="font-semibold text-gray-800 mb-2">Technical Skills:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>
                    • <strong>Programming:</strong> MATLAB, C++, Python, R, Algorithms
                  </li>
                  <li>
                    • <strong>Math:</strong> Calculus series, Linear Algebra, Probability, Algorithms, Discrete
                    Structures
                  </li>
                  <li>
                    • <strong>Psychology:</strong> Cognitive Psychology, Behavioral Neuroscience, Linguistics, Research
                    Methods
                  </li>
                  <li>
                    • <strong>Neurotechnology:</strong> Neuroanatomy, Neuroprosthetics, Neuroimaging, Neurostimulation
                  </li>
                  <li>
                    • <strong>Software:</strong> Vicon, Synthesia, Photoshop, Illustrator, Autodesk Fusion 360,
                    SolidWorks, MS Office
                  </li>
                  <li>
                    • <strong>Fabrication:</strong> 3D Printing, Laser Cutting/Engraving, Electronics Assembly,
                    Woodworking, Soldering, Sewing, Embroidery, Transfer Vinyl
                  </li>
                  <li>
                    • <strong>Languages:</strong> Fluent in French and English (USA, France, and Belgium nationalities)
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <div className="restore-skill-group">
                  <h4 className="font-semibold text-gray-800 mb-2">Work in Progress:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Artificial Intelligence</li>
                    <li>• Lab in Functional Neuroimaging</li>
                    <li>• Biological and Artificial Neural Networks</li>
                  </ul>
                </div>
                <div className="restore-skill-group">
                  <h4 className="font-semibold text-gray-800 mb-2">Research & Leadership:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Lab management and team coordination</li>
                    <li>• Project planning and execution</li>
                    <li>• Scientific writing and presentation</li>
                    <li>• User testing and interview facilitation</li>
                    <li>• Workshop development and instruction</li>
                    <li>• Cross-disciplinary collaboration</li>
                    <li>• Motion capture processing and analysis</li>
                    <li>• Experimental design and methodology</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Certifications */}
        <section className="restore-section">
          <header>
            <h2>
              Professional Certifications
            </h2>
          </header>
          <div className="restore-content">
            <div className="space-y-6">
              <div className="restore-entry">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    Neuroscience and Neurotechnology Primer
                  </h3>
                  
                </div>
                <p className="text-base sm:text-lg text-gray-700 mb-2">Queen's University 2024</p>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">Neurotech Microcredential Program (NTMC)</p>
              </div>

              <div className="restore-entry">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  BCI & Neurotechnology Masterclass EEG & Eyetracking
                </h3>
                <p className="text-base sm:text-lg text-gray-700 mb-2">G.Tec Medical Engineering GmbH</p>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">Completed June 17, 2025</p>
              </div>

              <div className="restore-entry">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Laboratory Safety Fundamentals</h3>
                </div>
                <p className="text-base sm:text-lg text-gray-700 mb-2">UCLA WorkSafe</p>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">Laboratory Safety Training Program</p>
              </div>

              <div className="restore-entry">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    Fire and Life Safety Online Training
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-gray-700 mb-2">UCLA WorkSafe</p>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">Fire Safety and Emergency Response Training</p>
              </div>

              <div className="restore-entry">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">FERPA Training</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-2">UCLA</p>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">
                  Family Educational Rights and Privacy Act Training
                </p>
              </div>

              <div className="restore-entry">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">End Overdose Narcan Training</h3>
                  <button
                    onClick={handleViewNarcanCertificate}
                    className="restore-certificate-link"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View Certificate
                  </button>
                </div>
                <p className="text-base sm:text-lg text-gray-700 mb-2">End Overdose</p>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">Completed September 11, 2025</p>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-[#285c8a] hover:bg-[#1c456b] text-white rounded-none transition-all duration-300 flex items-center justify-center z-50 opacity-80 hover:opacity-100"
          aria-label="Back to top"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  )
}
