"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, GraduationCap, Award, Code, Brain, Wrench, Home, ArrowLeft, Eye } from "lucide-react"

export default function ResumePage() {
  const [isDownloading, setIsDownloading] = useState(false)
  const [isViewingTranscript, setIsViewingTranscript] = useState(false)

  const handleDownloadResume = async () => {
    try {
      setIsDownloading(true)

      // Import jsPDF dynamically
      const { jsPDF } = await import("jspdf")

      // Create new PDF document
      const pdf = new jsPDF("portrait", "mm", "a4")

      // Try to load and add the resume image
      try {
        const img = new Image()
        img.crossOrigin = "anonymous"

        await new Promise((resolve, reject) => {
          img.onload = resolve
          img.onerror = reject
          img.src = "/documents/alizee-wouters-resume.png"
        })

        // Calculate dimensions to fit the page
        const pageWidth = pdf.internal.pageSize.getWidth()
        const pageHeight = pdf.internal.pageSize.getHeight()
        const imgAspectRatio = img.width / img.height
        const pageAspectRatio = pageWidth / pageHeight

        let imgWidth, imgHeight
        if (imgAspectRatio > pageAspectRatio) {
          imgWidth = pageWidth - 20 // 10mm margin on each side
          imgHeight = imgWidth / imgAspectRatio
        } else {
          imgHeight = pageHeight - 20 // 10mm margin on top and bottom
          imgWidth = imgHeight * imgAspectRatio
        }

        const x = (pageWidth - imgWidth) / 2
        const y = (pageHeight - imgHeight) / 2

        pdf.addImage(img, "PNG", x, y, imgWidth, imgHeight)
      } catch (imageError) {
        console.warn("Could not load resume image, creating text-based PDF")

        // Fallback: Create a simple text-based PDF
        pdf.setFontSize(20)
        pdf.text("Alizee Wouters", 20, 30)
        pdf.setFontSize(16)
        pdf.text("Resume", 20, 45)
        pdf.setFontSize(12)
        pdf.text("For the complete resume with formatting,", 20, 65)
        pdf.text("please contact: ali.wout.3003@gmail.com", 20, 75)
      }

      // Save the PDF
      pdf.save("Alizee-Wouters-Resume.pdf")
    } catch (error) {
      console.error("Resume download failed:", error)
      alert("Resume download failed. Please contact ali.wout.3003@gmail.com for a copy.")
    } finally {
      setIsDownloading(false)
    }
  }

  const handleViewTranscript = async () => {
    try {
      setIsViewingTranscript(true)

      // Import jsPDF dynamically
      const { jsPDF } = await import("jspdf")

      // Create new PDF document
      const pdf = new jsPDF("portrait", "mm", "a4")

      // Array of transcript page images
      const transcriptPages = [
        "/documents/transcript-page-1.png",
        "/documents/transcript-page-2.png",
        "/documents/transcript-page-3.png",
        "/documents/transcript-page-4.png",
      ]

      // Add each page to the PDF
      for (let i = 0; i < transcriptPages.length; i++) {
        if (i > 0) {
          pdf.addPage()
        }

        try {
          const img = new Image()
          img.crossOrigin = "anonymous"

          await new Promise((resolve, reject) => {
            img.onload = resolve
            img.onerror = reject
            img.src = transcriptPages[i]
          })

          // Calculate dimensions to fit the page
          const pageWidth = pdf.internal.pageSize.getWidth()
          const pageHeight = pdf.internal.pageSize.getHeight()
          const imgAspectRatio = img.width / img.height
          const pageAspectRatio = pageWidth / pageHeight

          let imgWidth, imgHeight
          if (imgAspectRatio > pageAspectRatio) {
            imgWidth = pageWidth - 20 // 10mm margin on each side
            imgHeight = imgWidth / imgAspectRatio
          } else {
            imgHeight = pageHeight - 20 // 10mm margin on top and bottom
            imgWidth = imgHeight * imgAspectRatio
          }

          const x = (pageWidth - imgWidth) / 2
          const y = (pageHeight - imgHeight) / 2

          pdf.addImage(img, "PNG", x, y, imgWidth, imgHeight)
        } catch (imageError) {
          console.warn(`Could not load transcript page ${i + 1}`)

          // Add a placeholder page
          pdf.setFontSize(16)
          pdf.text(`UCLA Official Transcript - Page ${i + 1}`, 20, 30)
          pdf.setFontSize(12)
          pdf.text("For the complete transcript,", 20, 50)
          pdf.text("please contact: ali.wout.3003@gmail.com", 20, 60)
        }
      }

      // Save the PDF
      pdf.save("UCLA-Transcript-Alizee-Wouters.pdf")
    } catch (error) {
      console.error("Transcript download failed:", error)
      alert("Transcript download failed. Please contact ali.wout.3003@gmail.com for a copy.")
    } finally {
      setIsViewingTranscript(false)
    }
  }

  const handleViewNarcanCertificate = () => {
    alert(`Certificate Information:

End Overdose Narcan Training Certificate
Completed: September 11, 2025
Name: Alizee Wouters

Training Details:
- Overdose recognition and response
- Proper administration of Narcan (naloxone)
- Emergency procedures and safety protocols
- Community harm reduction strategies

For verification or questions, please contact:
ali.wout.3003@gmail.com`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="outline" size="sm">
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Resume & Academic Records</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Download my complete resume and official academic transcripts
          </p>
        </div>

        {/* Download Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Resume Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Professional Resume
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 dark:text-slate-400">
                Complete professional resume including education, experience, skills, and achievements.
              </p>
              <Button onClick={handleDownloadResume} disabled={isDownloading} className="w-full">
                <Download className="w-4 h-4 mr-2" />
                {isDownloading ? "Generating PDF..." : "Download Resume"}
              </Button>
            </CardContent>
          </Card>

          {/* Transcript Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                UCLA Official Transcript
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 dark:text-slate-400">
                Official academic transcript from UCLA showing coursework, grades, and degree progress.
              </p>
              <Button
                onClick={handleViewTranscript}
                disabled={isViewingTranscript}
                className="w-full bg-transparent"
                variant="outline"
              >
                <Eye className="w-4 h-4 mr-2" />
                {isViewingTranscript ? "Generating PDF..." : "View Transcript"}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Education Summary */}
        <Card className="max-w-4xl mx-auto mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">University of California, Los Angeles (UCLA)</h3>
                <span className="text-slate-600 dark:text-slate-400">2022-2026</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-2">
                College Honors Program. Rose Gilbert Honor Scholarship recipient
              </p>
              <div className="space-y-1">
                <p className="font-medium">Bachelor of Science in Bioengineering</p>
                <p className="font-medium">Minor in Cognitive Science</p>
                <p className="font-medium">Specialization in Neuroengineering</p>
              </div>
              <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-slate-900 dark:text-slate-100">Current GPA</p>
                    <p className="text-2xl font-bold text-blue-600">3.7/4.0</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-slate-100">Completed Units</p>
                    <p className="text-2xl font-bold text-green-600">120/180</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Academic Honors */}
        <Card className="max-w-4xl mx-auto mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              Academic Honors & Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Honors & Awards</h4>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li>• Rose Gilbert Honor Scholarship</li>
                  <li>• College Honors Program</li>
                  <li>• Dean's List (Multiple Quarters)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Biomechanics</Badge>
                  <Badge variant="secondary">Neural Engineering</Badge>
                  <Badge variant="secondary">Signal Processing</Badge>
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">Cognitive Science</Badge>
                  <Badge variant="secondary">Biostatistics</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Summary */}
        <Card className="max-w-4xl mx-auto mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              Technical Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Programming
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Python</Badge>
                  <Badge>MATLAB</Badge>
                  <Badge>R</Badge>
                  <Badge>C++</Badge>
                  <Badge>JavaScript</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  Neurotechnology
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">EEG Analysis</Badge>
                  <Badge variant="outline">Signal Processing</Badge>
                  <Badge variant="outline">Brain-Computer Interfaces</Badge>
                  <Badge variant="outline">Psychophysics</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Wrench className="w-4 h-4" />
                  Engineering
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">CAD Design</Badge>
                  <Badge variant="secondary">3D Modeling</Badge>
                  <Badge variant="secondary">Prototyping</Badge>
                  <Badge variant="secondary">Circuit Design</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              Certifications & Training
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-semibold">End Overdose Narcan Training</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Completed: September 11, 2025</p>
                </div>
                <Button onClick={handleViewNarcanCertificate} variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  View Certificate
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-semibold">Lab Safety Training</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">UCLA Environmental Health & Safety</p>
                </div>
                <Badge variant="secondary">Certified</Badge>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-semibold">Research Ethics Training</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">CITI Program Certification</p>
                </div>
                <Badge variant="secondary">Certified</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
