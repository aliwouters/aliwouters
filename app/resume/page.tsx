"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
import { useState } from "react"

export default function ResumePage() {
  const [isGeneratingResume, setIsGeneratingResume] = useState(false)
  const [isGeneratingTranscript, setIsGeneratingTranscript] = useState(false)

  const handleDownloadResume = async () => {
    setIsGeneratingResume(true)
    try {
      // Dynamically import jsPDF
      const { jsPDF } = await import("jspdf")

      // Create new PDF with letter size
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "in",
        format: "letter",
      })

      // Letter size dimensions in inches
      const pageWidth = 8.5
      const pageHeight = 11

      // Create image element and wait for it to load
      await new Promise<void>((resolve, reject) => {
        const img = new Image()
        img.crossOrigin = "anonymous"
        img.onload = () => {
          // Calculate aspect ratio to fit the image properly
          const imgWidth = img.width
          const imgHeight = img.height
          const imgAspectRatio = imgWidth / imgHeight
          const pageAspectRatio = pageWidth / pageHeight

          let finalWidth = pageWidth
          let finalHeight = pageHeight
          let xOffset = 0
          let yOffset = 0

          // Scale image to fit page while maintaining aspect ratio
          if (imgAspectRatio > pageAspectRatio) {
            // Image is wider than page ratio
            finalHeight = pageWidth / imgAspectRatio
            yOffset = (pageHeight - finalHeight) / 2
          } else {
            // Image is taller than page ratio
            finalWidth = pageHeight * imgAspectRatio
            xOffset = (pageWidth - finalWidth) / 2
          }

          // Add image to PDF with proper scaling
          pdf.addImage(img, "PNG", xOffset, yOffset, finalWidth, finalHeight, undefined, "FAST")
          resolve()
        }
        img.onerror = reject
        img.src = "/documents/resume-updated.png"
      })

      // Save the PDF
      pdf.save("Alizee-Wouters-Resume.pdf")
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Failed to generate resume PDF. Please try again.")
    } finally {
      setIsGeneratingResume(false)
    }
  }

  const handleDownloadTranscript = async () => {
    setIsGeneratingTranscript(true)
    try {
      // Dynamically import jsPDF
      const { jsPDF } = await import("jspdf")

      // Array of transcript page images
      const pages = [
        "/documents/transcript-page-1-updated.png",
        "/documents/transcript-page-2-updated.png",
        "/documents/transcript-page-3-updated.png",
        "/documents/transcript-page-4-updated.png",
      ]

      // Create new PDF with letter size
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "in",
        format: "letter",
      })

      // Letter size dimensions in inches
      const pageWidth = 8.5
      const pageHeight = 11

      // Load and add each image to the PDF
      for (let i = 0; i < pages.length; i++) {
        if (i > 0) {
          pdf.addPage()
        }

        // Create image element and wait for it to load
        await new Promise<void>((resolve, reject) => {
          const img = new Image()
          img.crossOrigin = "anonymous"
          img.onload = () => {
            // Calculate aspect ratio to fit the image properly
            const imgWidth = img.width
            const imgHeight = img.height
            const imgAspectRatio = imgWidth / imgHeight
            const pageAspectRatio = pageWidth / pageHeight

            let finalWidth = pageWidth
            let finalHeight = pageHeight
            let xOffset = 0
            let yOffset = 0

            // Scale image to fit page while maintaining aspect ratio
            if (imgAspectRatio > pageAspectRatio) {
              // Image is wider than page ratio
              finalHeight = pageWidth / imgAspectRatio
              yOffset = (pageHeight - finalHeight) / 2
            } else {
              // Image is taller than page ratio
              finalWidth = pageHeight * imgAspectRatio
              xOffset = (pageWidth - finalWidth) / 2
            }

            // Add image to PDF with proper scaling
            pdf.addImage(img, "PNG", xOffset, yOffset, finalWidth, finalHeight, undefined, "FAST")
            resolve()
          }
          img.onerror = reject
          img.src = pages[i]
        })
      }

      // Save the PDF
      pdf.save("UCLA-Transcript-Alizee-Wouters.pdf")
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Failed to generate transcript PDF. Please try again.")
    } finally {
      setIsGeneratingTranscript(false)
    }
  }

  const handleViewLabSafety = () => {
    window.open(
      "https://worksafe.ucla.edu/UCLA/Programs/Standard/Control/Certificate.wml?HID=1801836&EMail=0",
      "_blank",
    )
  }

  const handleViewFireSafety = () => {
    window.open(
      "https://worksafe.ucla.edu/UCLA/Programs/Standard/Control/Certificate.wml?HID=1839397&EMail=0",
      "_blank",
    )
  }

  const handleViewNarcanCertificate = () => {
    alert(
      "End Overdose Narcan Training Certificate\n\nCompleted: September 11, 2025\n\nCertificate download will be available soon.\nFor immediate verification, please contact:\nali.wout.3003@gmail.com",
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <nav className="bg-white/80 backdrop-blur-sm border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-gray-900">
              Alizee Wouters
            </Link>
            <div className="flex gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href="/" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  <span className="hidden sm:inline">Home</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-6 flex items-center justify-center mx-auto">
            <User className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Resume</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
        </div>

        <Card className="border-blue-100 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
              <User className="w-6 h-6 text-blue-500" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          </CardContent>
        </Card>

        <Card className="border-blue-100 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
              <Download className="w-6 h-6 text-blue-500" />
              Resume Download
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleDownloadResume}
                disabled={isGeneratingResume}
                className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2 min-w-[220px]"
              >
                <Download className="w-4 h-4" />
                {isGeneratingResume ? "Loading..." : "Download Resume (PDF)"}
              </Button>
              <Button
                onClick={handleDownloadTranscript}
                disabled={isGeneratingTranscript}
                variant="outline"
                className="border-blue-300 bg-transparent flex items-center gap-2 min-w-[200px]"
              >
                <Download className="w-4 h-4" />
                {isGeneratingTranscript ? "Loading..." : "Academic Transcript"}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-100 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
              <GraduationCap className="w-6 h-6 text-blue-500" />
              Formal Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    University of California, Los Angeles (UCLA) 2022-2026
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 w-fit">
                    Work in Progress
                  </span>
                </div>
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
                    <strong>Cumulative GPA:</strong> 3.867
                  </p>
                  <p className="mb-3">
                    <strong>Total Units Completed:</strong> 214.0 (including 72.0 transfer credits from Advanced
                    Placement)
                  </p>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <h4 className="font-semibold text-blue-800 mb-2">Academic Honors</h4>
                  <div className="text-sm text-blue-700">
                    <p className="mb-2">
                      <strong>Dean's Honor List:</strong> 7 quarters (Fall 2022, Winter 2023, Spring 2023, Fall 2023,
                      Winter 2024, Fall 2024, Spring 2025)
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
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

              <div className="border-l-4 border-green-500 pl-6">
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
          </CardContent>
        </Card>

        <Card className="border-blue-100 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
              <Award className="w-6 h-6 text-blue-500" />
              Research Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
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

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Cognitive Science Research 2024</h3>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">Zili Lab - UCLA Psychology Department</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Lab Manager for cognitive abilities research in card game players</li>
                  <li>• Conducted user experience research bridging psychology and design</li>
                  <li>• Investigated graph perception and data visualization comprehension</li>
                  <li>• Managed research teams and coordinated experimental protocols</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
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
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-100 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
              <Briefcase className="w-6 h-6 text-blue-500" />
              Professional Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  UCLA Makerspace Technician 2023-2025
                </h3>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">Technical Support & Innovation Facilitation</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Provided technical support across multiple fabrication technologies</li>
                  <li>• Trained users on 3D printing, laser cutting, and CNC machining</li>
                  <li>• Developed custom tools and fixtures for improved workshop efficiency</li>
                  <li>• Led educational workshops on making and fabrication techniques</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
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

              <div className="border-l-4 border-teal-500 pl-6">
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
          </CardContent>
        </Card>

        <Card className="border-blue-100 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
              <Award className="w-6 h-6 text-blue-500" />
              Skills & Competencies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
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
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Work in Progress:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Artificial Intelligence</li>
                    <li>• Lab in Functional Neuroimaging</li>
                    <li>• Biological and Artificial Neural Networks</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
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
          </CardContent>
        </Card>

        <Card className="border-blue-100 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
              <Certificate className="w-6 h-6 text-blue-500" />
              Professional Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-indigo-500 pl-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    Neuroscience and Neurotechnology Primer
                  </h3>
                  <a
                    href="https://credentials.neurotechmicrocreds.com/bd68d39f-eba9-421a-9fac-35e5262cf644#acc.01mbgjGV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full hover:bg-indigo-200 transition-colors w-fit"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View Credential
                  </a>
                </div>
                <p className="text-base sm:text-lg text-gray-700 mb-2">Queen's University 2024</p>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">Neurotech Microcredential Program (NTMC)</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  BCI & Neurotechnology Masterclass EEG & Eyetracking
                </h3>
                <p className="text-base sm:text-lg text-gray-700 mb-2">G.Tec Medical Engineering GmbH</p>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">Completed June 17, 2025</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Laboratory Safety Fundamentals</h3>
                  <button
                    onClick={handleViewLabSafety}
                    className="inline-flex items-center px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full hover:bg-orange-200 transition-colors w-fit"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View Certificate
                  </button>
                </div>
                <p className="text-base sm:text-lg text-gray-700 mb-2">UCLA WorkSafe</p>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">Laboratory Safety Training Program</p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    Fire and Life Safety Online Training
                  </h3>
                  <button
                    onClick={handleViewFireSafety}
                    className="inline-flex items-center px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full hover:bg-red-200 transition-colors w-fit"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View Certificate
                  </button>
                </div>
                <p className="text-base sm:text-lg text-gray-700 mb-2">UCLA WorkSafe</p>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">Fire Safety and Emergency Response Training</p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">FERPA Training</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-2">UCLA</p>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">
                  Family Educational Rights and Privacy Act Training
                </p>
              </div>

              <div className="border-l-4 border-pink-500 pl-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">End Overdose Narcan Training</h3>
                  <button
                    onClick={handleViewNarcanCertificate}
                    className="inline-flex items-center px-2 py-1 text-xs font-medium bg-pink-100 text-pink-800 rounded-full hover:bg-pink-200 transition-colors w-fit"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View Certificate
                  </button>
                </div>
                <p className="text-base sm:text-lg text-gray-700 mb-2">End Overdose</p>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">Completed September 11, 2025</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 opacity-80 hover:opacity-100"
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
