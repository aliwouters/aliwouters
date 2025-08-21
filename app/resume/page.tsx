import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowLeft,
  Download,
  GraduationCap,
  Briefcase,
  Award,
  User,
  Mail,
  MapPin,
  ExternalLink,
  BadgeIcon as Certificate,
} from "lucide-react"

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
          <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-6 flex items-center justify-center mx-auto">
            <User className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resume</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Comprehensive overview of my academic background, research experience, and professional achievements
          </p>
        </div>

        {/* Contact Information */}
        <Card className="border-blue-100 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <User className="w-6 h-6 text-blue-500" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="text-gray-700">ali.wout.3003@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-blue-500" />
                <a
                  href="https://linkedin.com/in/alizee-wouters"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span className="text-gray-700">Los Angeles, CA</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Formal Education */}
        <Card className="border-blue-100 shadow-lg mb-8">
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
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">University of California, Los Angeles (UCLA)</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Work in Progress
                  </span>
                </div>
                <p className="text-lg text-gray-700 mb-2">Bachelor of Science in Cognitive Science</p>
                <p className="text-gray-600 mb-3">Specialization in Computing • Minor in Data Science Engineering</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Pursuing an interdisciplinary degree that combines psychology, neuroscience, computer science, and
                  philosophy to understand the mind and intelligence. The computing specialization focuses on artificial
                  intelligence, machine learning, and computational modeling of cognitive processes, while the data
                  science engineering minor provides expertise in statistical analysis, data visualization, and
                  large-scale data processing.
                </p>
              </div>

              {/* Queen's University */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Queen's University</h3>
                <p className="text-lg text-gray-700 mb-2">Neuroscience and Neurotechnology Primer</p>
                <p className="text-gray-600 mb-3">Microcredential Program</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Comprehensive program covering fundamental principles of neuroscience, brain-computer interfaces, and
                  emerging neurotechnology applications. Gained expertise in neural signal processing, EEG analysis, and
                  the development of brain-controlled devices for assistive technology applications.
                </p>
              </div>

              {/* High School */}
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">San Pasqual High School</h3>
                <p className="text-lg text-gray-700 mb-2">High School Diploma</p>
                <p className="text-gray-600 mb-3">Graduated 2022</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Strong foundation in STEM subjects with particular emphasis on mathematics, physics, and computer
                  science. Participated in advanced placement courses and extracurricular activities that fostered
                  analytical thinking and problem-solving skills essential for higher education and research pursuits.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Research Experience */}
        <Card className="border-blue-100 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Award className="w-6 h-6 text-blue-500" />
              Research Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Neurotechnology Research</h3>
                <p className="text-gray-600 mb-3">Brain-Computer Interfaces & Neural Signal Processing</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Developed brain-controlled prosthetic devices using EEG signal processing</li>
                  <li>• Created discrete EEG systems for real-time emotion and stress detection</li>
                  <li>• Won first place at California Neurotechnology Conference</li>
                  <li>• Applied machine learning algorithms for neural pattern recognition</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cognitive Science Research</h3>
                <p className="text-gray-600 mb-3">Zili Lab - UCLA Psychology Department</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Lab Manager for cognitive abilities research in card game players</li>
                  <li>• Conducted user experience research bridging psychology and design</li>
                  <li>• Investigated graph perception and data visualization comprehension</li>
                  <li>• Managed research teams and coordinated experimental protocols</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Anatomical Engineering Research</h3>
                <p className="text-gray-600 mb-3">Bio-inspired Robotics & Soft Actuators</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Designed and fabricated multi-degree-of-freedom tentacle robots</li>
                  <li>• Developed cable-driven actuation systems for soft robotics</li>
                  <li>• Created 3D models and prototypes for biomimetic manipulation</li>
                  <li>• Integrated control systems for precise robotic movement</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Experience */}
        <Card className="border-blue-100 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Briefcase className="w-6 h-6 text-blue-500" />
              Professional Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">UCLA Makerspace Technician</h3>
                <p className="text-gray-600 mb-3">Technical Support & Innovation Facilitation</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Provided technical support across multiple fabrication technologies</li>
                  <li>• Trained users on 3D printing, laser cutting, and CNC machining</li>
                  <li>• Developed custom tools and fixtures for improved workshop efficiency</li>
                  <li>• Led educational workshops on making and fabrication techniques</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Psyonic - Prosthetics Intern</h3>
                <p className="text-gray-600 mb-3">Bionic Hand Development & Testing</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Contributed to advanced prosthetic hand development and testing</li>
                  <li>• Assisted with production and assembly of robotic hand control systems</li>
                  <li>• Participated in user testing and feedback collection processes</li>
                  <li>• Supported quality assurance and product improvement initiatives</li>
                </ul>
              </div>

              <div className="border-l-4 border-teal-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Auli Tech - Marketing Collaborator</h3>
                <p className="text-gray-600 mb-3">Assistive Technology Marketing & Content Creation</p>
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

        {/* Professional Certifications */}
        <Card className="border-blue-100 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Certificate className="w-6 h-6 text-blue-500" />
              Professional Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-indigo-500 pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">Neuroscience and Neurotechnology Primer</h3>
                  <a
                    href="https://credentials.neurotechmicrocreds.com/bd68d39f-eba9-421a-9fac-35e5262cf644#acc.01mbgjGV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full hover:bg-indigo-200 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View Credential
                  </a>
                </div>
                <p className="text-lg text-gray-700 mb-2">Queen's University</p>
                <p className="text-gray-600 mb-3">Microcredential Program</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Comprehensive microcredential program covering fundamental principles of neuroscience, brain-computer
                  interfaces, and emerging neurotechnology applications. Gained expertise in neural signal processing,
                  EEG analysis, and the development of brain-controlled devices for assistive technology applications.
                  Verified digital credential demonstrating competency in neurotechnology fundamentals.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  BCI & Neurotechnology Masterclass EEG & Eyetracking
                </h3>
                <p className="text-lg text-gray-700 mb-2">G.Tec Medical Engineering GmbH</p>
                <p className="text-gray-600 mb-3">Completed June 17, 2025</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Advanced masterclass focusing on brain-computer interfaces and neurotechnology applications. Covered
                  comprehensive training in EEG signal processing, eyetracking technologies, and their integration for
                  neurotechnology applications. Gained hands-on experience with state-of-the-art BCI systems and
                  real-time neural signal analysis techniques used in medical and research applications.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills & Competencies */}
        <Card className="border-blue-100 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Award className="w-6 h-6 text-blue-500" />
              Skills & Competencies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Technical Skills:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Python, R, MATLAB programming</li>
                  <li>• Machine learning and data analysis</li>
                  <li>• 3D modeling (CAD, SolidWorks)</li>
                  <li>• EEG signal processing and analysis</li>
                  <li>• Statistical analysis and visualization</li>
                  <li>• Experimental design and methodology</li>
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
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resume Download */}
        <Card className="border-blue-100 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Download className="w-6 h-6 text-blue-500" />
              Resume Download
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              Download a comprehensive PDF version of my resume for your records or to share with potential
              collaborators and employers.
            </p>
            <div className="flex gap-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <a href="/documents/alizee-wouters-resume.pdf" download className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume (PDF)
                </a>
              </Button>
              <Button asChild variant="outline" className="border-blue-300 bg-transparent">
                <a href="/documents/ucla-transcript.pdf" download className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Academic Transcript
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
