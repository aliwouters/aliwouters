"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, ExternalLink, Linkedin, Mail, Check, Home } from "lucide-react"

export default function ResumePage() {
  const [emailCopied, setEmailCopied] = useState(false)

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

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/documents/alizee-wouters-resume.pdf"
    link.download = "Alizee_Wouters_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleDownloadTranscript = () => {
    // Create a new window/tab to display the transcript images
    const newWindow = window.open("", "_blank")
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>UCLA Transcript - Alizee Wouters</title>
          <style>
            body { 
              margin: 0; 
              padding: 20px; 
              background: #f5f5f5; 
              font-family: Arial, sans-serif;
            }
            .container { 
              max-width: 800px; 
              margin: 0 auto; 
              background: white; 
              padding: 20px; 
              border-radius: 8px; 
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .page { 
              margin-bottom: 30px; 
              text-align: center;
            }
            .page img { 
              max-width: 100%; 
              height: auto; 
              border: 1px solid #ddd; 
              border-radius: 4px;
            }
            .page-title {
              margin-bottom: 15px;
              color: #333;
              font-size: 18px;
              font-weight: bold;
            }
            h1 {
              text-align: center;
              color: #2563eb;
              margin-bottom: 30px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>UCLA Official Transcript - Alizee Wouters</h1>
            
            <div class="page">
              <div class="page-title">Page 1</div>
              <img src="/documents/transcript-page-1.png" alt="UCLA Transcript Page 1" />
            </div>
            
            <div class="page">
              <div class="page-title">Page 2</div>
              <img src="/documents/transcript-page-2.png" alt="UCLA Transcript Page 2" />
            </div>
            
            <div class="page">
              <div class="page-title">Page 3</div>
              <img src="/documents/transcript-page-3.png" alt="UCLA Transcript Page 3" />
            </div>
            
            <div class="page">
              <div class="page-title">Page 4</div>
              <img src="/documents/transcript-page-4.png" alt="UCLA Transcript Page 4" />
            </div>
          </div>
        </body>
        </html>
      `)
      newWindow.document.close()
    }
  }

  const handleViewNarcanCertificate = () => {
    // Show alert message instead of trying to fetch non-existent URL
    alert(
      "End Overdose Narcan Training Certificate\n\nThis certificate demonstrates completion of comprehensive training in naloxone (Narcan) administration for opioid overdose reversal. The training covered recognition of overdose symptoms, proper administration techniques, and emergency response protocols.\n\nCertificate issued by End Overdose organization.",
    )

    // Future implementation for when PDF is available:
    /*
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>End Overdose Narcan Certificate - Alizee Wouters</title>
          <style>
            body { margin: 0; padding: 20px; background: #f5f5f5; font-family: Arial, sans-serif; }
            .container { max-width: 800px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            embed { width: 100%; height: 600px; border: none; }
            h1 { text-align: center; color: #2563eb; margin-bottom: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>End Overdose Narcan Training Certificate</h1>
            <embed src="/documents/end-overdose-narcan-certificate.pdf" type="application/pdf" />
          </div>
        </body>
        </html>
      `);
      newWindow.document.close();
    }
    */
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 sm:py-6">
            <Link href="/" className="text-xl sm:text-2xl font-light text-slate-900 tracking-wide">
              Alizee Wouters
            </Link>
            <Button asChild variant="outline" size="sm" className="border-slate-300 bg-transparent">
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Home</span>
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="pt-12 sm:pt-16 pb-16 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mb-4 sm:mb-6">Resume</h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive overview of my academic background, research experience, and professional achievements in
              neurotechnology and biomedical engineering.
            </p>
          </div>

          {/* Contact Information */}
          <Card className="mb-8 sm:mb-12 border-slate-200/50 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-xl sm:text-2xl font-medium text-slate-900 text-center">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
                <Button
                  onClick={handleEmailClick}
                  variant="outline"
                  className="border-slate-300 hover:border-blue-400 hover:bg-blue-50 w-full sm:w-auto bg-transparent"
                >
                  <div className="flex items-center gap-2">
                    {emailCopied ? <Check className="w-4 h-4 text-green-600" /> : <Mail className="w-4 h-4" />}
                    <span className="text-sm sm:text-base">
                      {emailCopied ? "Email Copied!" : "ali.wout.3003@gmail.com"}
                    </span>
                  </div>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-slate-300 hover:border-blue-400 hover:bg-blue-50 w-full sm:w-auto bg-transparent"
                >
                  <a
                    href="https://linkedin.com/in/alizee-wouters"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm sm:text-base">LinkedIn Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Resume Download */}
          <Card className="mb-8 sm:mb-12 border-slate-200/50 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-xl sm:text-2xl font-medium text-slate-900 text-center">
                Resume Download
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  onClick={handleDownloadResume}
                  className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white w-full sm:w-auto"
                >
                  <Download className="w-4 h-4 mr-2" />
                  <span className="text-sm sm:text-base">Download Resume (PDF)</span>
                </Button>
                <Button
                  onClick={handleDownloadTranscript}
                  variant="outline"
                  className="border-slate-300 hover:border-emerald-400 hover:bg-emerald-50 w-full sm:w-auto bg-transparent"
                >
                  <Download className="w-4 h-4 mr-2" />
                  <span className="text-sm sm:text-base">View UCLA Transcript</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Formal Education */}
          <Card className="mb-8 sm:mb-12 border-slate-200/50 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-medium text-slate-900">Formal Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                  University of California, Los Angeles (UCLA)
                </h3>
                <div className="space-y-2 text-sm sm:text-base">
                  <p className="text-slate-700">
                    <span className="font-medium">Bachelor of Science in Cognitive Science</span> - Expected 2025
                  </p>
                  <p className="text-slate-700">
                    <span className="font-medium">Bachelor of Science in Data Science Engineering</span> - Expected 2025
                  </p>
                  <p className="text-slate-700">
                    <span className="font-medium">Certificate in Neuroscience and Neurotechnology</span> - 2024
                  </p>
                  <p className="text-slate-600 mt-3 sm:mt-4 leading-relaxed">
                    Interdisciplinary studies combining computational methods, cognitive theory, and neuroscience
                    applications. Coursework includes machine learning, statistical analysis, experimental design, and
                    brain-computer interface development.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research Experience */}
          <Card className="mb-8 sm:mb-12 border-slate-200/50 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-medium text-slate-900">Research Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                  Undergraduate Researcher - UCLA Anatomical Engineering Lab
                </h3>
                <p className="text-slate-600 text-sm sm:text-base mb-3 sm:mb-4">2023 - Present</p>
                <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    Developed EMG-controlled robotic tentacle systems with multiple degrees of freedom
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    Conducted pilot studies on proprioception and referred control in myoelectric interfaces
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    Published research poster on neuromuscular control performance optimization
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                  Research Assistant - UCLA Cognitive Science Department
                </h3>
                <p className="text-slate-600 text-sm sm:text-base mb-3 sm:mb-4">2022 - 2024</p>
                <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                    Designed and implemented experimental protocols for cognitive assessment studies
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                    Developed MATLAB applications for psychological testing and data collection
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                    Analyzed behavioral data using statistical methods and machine learning techniques
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Professional Experience */}
          <Card className="mb-8 sm:mb-12 border-slate-200/50 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-medium text-slate-900">Professional Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Mechatronics Intern - Psyonic</h3>
                <p className="text-slate-600 text-sm sm:text-base mb-3 sm:mb-4">2024</p>
                <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                    Contributed to prosthetic hand development and user testing protocols
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                    Fabricated control systems and conducted performance evaluations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                    Collaborated with engineering team on bionic limb technology advancement
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                  Assistive Technology Intern - Auli Tech
                </h3>
                <p className="text-slate-600 text-sm sm:text-base mb-3 sm:mb-4">2023</p>
                <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    Worked on innovative assistive technology solutions for accessibility
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    Collaborated on marketing content creation with end users
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    Contributed to user experience research and product development
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                  Makerspace Technician - UCLA Makerspace
                </h3>
                <p className="text-slate-600 text-sm sm:text-base mb-3 sm:mb-4">2022 - Present</p>
                <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                    Manage technical equipment including 3D printers, laser cutters, and CNC machines
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                    Provide technical support and training to students on advanced manufacturing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                    Facilitate interdisciplinary project development and prototyping
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Skills & Competencies */}
          <Card className="mb-8 sm:mb-12 border-slate-200/50 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-medium text-slate-900">Skills & Competencies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 text-base sm:text-lg">Programming</h4>
                  <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
                    <li>Python, MATLAB, R</li>
                    <li>JavaScript, TypeScript</li>
                    <li>C++, Java</li>
                    <li>SQL, NoSQL</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 text-base sm:text-lg">Data Science</h4>
                  <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
                    <li>Machine Learning</li>
                    <li>Statistical Analysis</li>
                    <li>Data Visualization</li>
                    <li>Signal Processing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 text-base sm:text-lg">Neurotechnology</h4>
                  <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
                    <li>EEG/EMG Systems</li>
                    <li>Brain-Computer Interfaces</li>
                    <li>Biomedical Instrumentation</li>
                    <li>Neural Signal Analysis</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 text-base sm:text-lg">Engineering</h4>
                  <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
                    <li>CAD Design (SolidWorks)</li>
                    <li>3D Printing & Manufacturing</li>
                    <li>Circuit Design</li>
                    <li>Robotics & Automation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 text-base sm:text-lg">Research Methods</h4>
                  <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
                    <li>Experimental Design</li>
                    <li>Data Collection & Analysis</li>
                    <li>Scientific Writing</li>
                    <li>Literature Review</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 text-base sm:text-lg">Tools & Frameworks</h4>
                  <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
                    <li>TensorFlow, PyTorch</li>
                    <li>React, Node.js</li>
                    <li>Git, Docker</li>
                    <li>AWS, Cloud Computing</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Certifications */}
          <Card className="border-slate-200/50 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-medium text-slate-900">
                Professional Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-100">
                <div className="mb-3 sm:mb-0">
                  <h4 className="font-semibold text-slate-900 text-base sm:text-lg">End Overdose Narcan Training</h4>
                  <p className="text-slate-600 text-sm sm:text-base">
                    Certified in naloxone administration for opioid overdose reversal
                  </p>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">Issued: 2024</p>
                </div>
                <Button
                  onClick={handleViewNarcanCertificate}
                  variant="outline"
                  size="sm"
                  className="border-red-300 hover:border-red-400 hover:bg-red-50 w-full sm:w-auto bg-transparent"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <span className="text-sm">View Certificate</span>
                </Button>
              </div>

              <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <h4 className="font-semibold text-slate-900 mb-2 text-base sm:text-lg">
                  UCLA Neuroscience and Neurotechnology Certificate
                </h4>
                <p className="text-slate-600 text-sm sm:text-base">
                  Comprehensive certification in neuroscience principles, brain-computer interfaces, and neurotechnology
                  applications
                </p>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">Completed: 2024</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

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
