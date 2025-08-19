import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download, BookOpen } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Alizee Wouters
            </Link>
            <Button asChild variant="outline" size="sm">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resume</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">My academic and professional background</p>
        </div>

        <div className="space-y-8">
          <Card className="border-rose-100 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Download className="w-6 h-6 text-rose-500" />
                Resume Download
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Download my complete resume with detailed information about my education, experience, and skills.
              </p>
              <a
                href="/documents/alizee-wouters-resume.pdf"
                download="alizee-wouters-resume.pdf"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume (PDF)
              </a>
            </CardContent>
          </Card>

          <Card className="border-rose-100 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <BookOpen className="w-6 h-6 text-rose-500" />
                Relevant Coursework
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                A comprehensive list of courses that have shaped my interdisciplinary expertise in computer science,
                cognitive science, mathematics, and practical applications.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Computer Science</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Introduction to Programming - C++</li>
                    <li>Intermediate Programming - C++</li>
                    <li>Introduction to Programming - Matlab</li>
                    <li>Advanced Programming - Matlab</li>
                    <li>Introduction to Computer Science - C++</li>
                    <li>Computer Science Algorithms and Complexities</li>
                    <li>Probabilistic Models of Computational Genomics</li>
                    <li>Introduction to Machine Learning</li>
                    <li>Fundamentals of Artificial Intelligence</li>
                    <li>Introduction to Computational and Systems Biology</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Cognitive and Neuro Science</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Foundations of Neuroscience</li>
                    <li>Neuroprosthetics</li>
                    <li>Neuroimaging</li>
                    <li>Neurostimulation Primer</li>
                    <li>Psychological Statistics</li>
                    <li>Introduction to Cognitive Science</li>
                    <li>Psychological Research Methods</li>
                    <li>Cognitive Psychology</li>
                    <li>Behavioral Neuroscience</li>
                    <li>Learning in Biological and Artificial Neural Networks</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Mathematics</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Integration and Infinite Series</li>
                    <li>Psychological Statistics</li>
                    <li>Linear Algebra and Applications</li>
                    <li>Introduction to Probability</li>
                    <li>Discrete Mathematical Structures</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Practical Applications</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Sustainable Fabrication</li>
                    <li>Research Apprenticeship</li>
                    <li>Research Apprenticeship</li>
                    <li>Bionics Systems Engineering</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Economics</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Principles of Economics</li>
                    <li>Microeconomic Theory</li>
                    <li>Accounting Principles</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-rose-100 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Download className="w-6 h-6 text-rose-500" />
                UCLA Transcript Download
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Download my official UCLA transcript for a detailed record of my academic performance.
              </p>
              <a
                href="/documents/ucla-transcript.pdf"
                download="alizee-wouters-transcript.pdf"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                Download UCLA Transcript (PDF)
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
