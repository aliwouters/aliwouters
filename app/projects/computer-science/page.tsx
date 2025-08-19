import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Code, Globe, Database, Cpu } from "lucide-react"

export default function ComputerSciencePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="text-2xl font-light text-slate-900 tracking-wide">
              Alizee Wouters
            </Link>
            <div className="flex gap-3">
              <Button asChild variant="outline" size="sm" className="border-slate-300 bg-transparent">
                <Link href="/projects" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16 pb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl mb-8 flex items-center justify-center mx-auto">
              <Code className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">Computer Science Projects</h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Software development projects showcasing programming expertise, algorithm implementation, and system
              design capabilities across various domains and technologies.
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-16">
            <div className="bg-white rounded-3xl p-10 border border-slate-200/50 shadow-lg">
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">Web Applications & APIs</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Full-stack web applications built with modern frameworks and technologies. These projects
                    demonstrate proficiency in both frontend and backend development, including responsive design, API
                    integration, and database management.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Technologies Used</h4>
                      <ul className="text-slate-700 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          React, Next.js, TypeScript
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          Node.js, Express, RESTful APIs
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          PostgreSQL, MongoDB
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          AWS, Docker, CI/CD
                        </li>
                      </ul>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Key Features</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Responsive user interfaces, real-time data processing, secure authentication systems, and
                        scalable architecture designed for performance and maintainability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 border border-slate-200/50 shadow-lg">
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">Machine Learning Implementations</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Custom machine learning algorithms and models implemented from scratch and using popular frameworks.
                    These projects focus on understanding core ML concepts and applying them to real-world problems.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-emerald-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Algorithms & Models</h4>
                      <ul className="text-slate-700 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                          Neural networks from scratch
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                          Computer vision applications
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                          Natural language processing
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                          Reinforcement learning
                        </li>
                      </ul>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Tools & Frameworks</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Python, TensorFlow, PyTorch, scikit-learn, NumPy, pandas, and Jupyter notebooks for data
                        analysis and model development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 border border-slate-200/50 shadow-lg">
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">System Architecture & Design</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Large-scale system design projects focusing on scalability, performance, and maintainability. These
                    projects demonstrate understanding of distributed systems, microservices, and cloud architecture.
                  </p>

                  <div className="bg-cyan-50 rounded-2xl p-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Design Principles</h4>
                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-cyan-200 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-cyan-700 font-bold">S</span>
                        </div>
                        <p className="text-sm text-slate-700">Scalability</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-cyan-200 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-cyan-700 font-bold">R</span>
                        </div>
                        <p className="text-sm text-slate-700">Reliability</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-cyan-200 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-cyan-700 font-bold">M</span>
                        </div>
                        <p className="text-sm text-slate-700">Maintainability</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
