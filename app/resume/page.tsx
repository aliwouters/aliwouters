import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download, FileText, GraduationCap, MapPin, Mail, Linkedin, Github } from "lucide-react"
import Image from "next/image"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Alizee Wouters
            </Link>
            <div className="flex gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href="/" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg mb-6 flex items-center justify-center mx-auto">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resume & CV</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Professional experience, academic achievements, and technical expertise
          </p>
        </div>

        <div className="space-y-8">
          {/* Professional Summary */}
          <Card className="border-blue-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Alizee Wouters</CardTitle>
              <div className="flex justify-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/images/alizee-photo.jpg"
                    alt="Alizee Wouters professional photo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <p className="text-lg font-medium text-gray-800 mb-2">
                  Cognitive Science Student & Technical Innovation Specialist
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Passionate about the intersection of technology, neuroscience, and human-centered design. Experienced
                  in biomedical research, makerspace operations, and interdisciplinary collaboration with a focus on
                  creating accessible assistive technologies.
                </p>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>Los Angeles, CA</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-4 h-4 text-blue-500" />
                    <span>alizee.wouters@gmail.com</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Linkedin className="w-4 h-4 text-blue-500" />
                    <Link href="https://linkedin.com/in/alizee-wouters" className="hover:text-blue-600">
                      linkedin.com/in/alizee-wouters
                    </Link>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Github className="w-4 h-4 text-blue-500" />
                    <Link href="https://github.com/aliwouters" className="hover:text-blue-600">
                      github.com/aliwouters
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Formal Education */}
          <Card className="border-blue-100 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <GraduationCap className="w-6 h-6 text-blue-500" />
                Formal Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* UCLA */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                      University of California, Los Angeles (UCLA)
                    </h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                      Work in Progress
                    </span>
                  </div>
                  <p className="text-blue-600 font-medium mb-2">Bachelor of Science in Cognitive Science</p>
                  <p className="text-gray-600 text-sm mb-2">
                    Specialization in Computing • Minor in Data Science Engineering
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Interdisciplinary program combining psychology, neuroscience, computer science, and philosophy.
                    Computing specialization focuses on artificial intelligence, machine learning, and computational
                    modeling of cognitive processes. Data Science Engineering minor provides expertise in statistical
                    analysis, data visualization, and predictive modeling.
                  </p>
                </div>

                {/* Queen's University */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-800">Queen's University</h3>
                  <p className="text-purple-600 font-medium mb-2">
                    Neuroscience and Neurotechnology Primer Microcredential
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Comprehensive program covering fundamental principles of neuroscience, brain-computer interfaces,
                    neural engineering, and emerging neurotechnologies. Focused on the intersection of neuroscience
                    research and practical applications in medical devices and assistive technologies.
                  </p>
                </div>

                {/* High School */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-800">San Pasqual High School</h3>
                  <p className="text-green-600 font-medium mb-2">High School Diploma</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Strong foundation in STEM subjects with emphasis on mathematics, sciences, and technology.
                    Participated in advanced placement courses and extracurricular activities related to engineering and
                    computer science.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Core Competencies */}
          <Card className="border-blue-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Core Competencies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Technical Skills</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Python, MATLAB, R</li>
                    <li>• Data Analysis & Visualization</li>
                    <li>• Machine Learning</li>
                    <li>• CAD Design & 3D Modeling</li>
                    <li>• Digital Fabrication</li>
                    <li>• Circuit Design & PCB Layout</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Research Areas</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Neurotechnology Development</li>
                    <li>• Brain-Computer Interfaces</li>
                    <li>• Cognitive Science Research</li>
                    <li>• Biomedical Engineering</li>
                    <li>• Assistive Technology</li>
                    <li>• Human-Computer Interaction</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Professional Skills</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Project Management</li>
                    <li>• Technical Documentation</li>
                    <li>• Cross-functional Collaboration</li>
                    <li>• Student Mentorship</li>
                    <li>• Equipment Maintenance</li>
                    <li>• Workshop Facilitation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Achievements */}
          <Card className="border-blue-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Key Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Biomedical Research Impact:</strong> Contributed to multiple neurotechnology research
                    projects, including EEG cap development and brain-computer interface systems at leading research
                    institutions.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Technical Innovation:</strong> Designed and manufactured custom solutions for makerspace
                    equipment, demonstrating advanced CAD modeling and 3D printing expertise.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Student Mentorship:</strong> Successfully guided hundreds of students through technical
                    projects while leading workshops on digital fabrication and design principles.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Interdisciplinary Collaboration:</strong> Worked effectively across multiple domains
                    including engineering, neuroscience, and assistive technology development.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resume Download */}
          <Card className="border-blue-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Download Resume</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-6">
                <p className="text-gray-600">
                  Download my complete resume and official UCLA transcript for detailed information about my academic
                  achievements and professional experience.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <a href="/documents/alizee-wouters-resume.pdf" download className="flex items-center gap-2">
                      <Download className="w-5 h-5" />
                      Download Resume (PDF)
                    </a>
                  </Button>

                  <Button asChild variant="outline" size="lg">
                    <a href="/documents/ucla-transcript.pdf" download className="flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Download Transcript (PDF)
                    </a>
                  </Button>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Note:</strong> For the most current information about ongoing projects and recent
                    achievements, please explore the detailed sections throughout this website or contact me directly.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
