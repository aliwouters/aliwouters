import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Briefcase, Cpu, Wrench, ArrowRight } from "lucide-react"

export default function WorkExperiencePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="text-2xl font-light text-slate-900 tracking-wide">
              Alizee Wouters
            </Link>
            <Button asChild variant="outline" size="sm" className="border-slate-300 bg-transparent">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Home
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="pt-16 pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">Professional Experience</h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              My professional journey spans innovative companies and organizations, each contributing to my expertise in
              technology, engineering, and research.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white rounded-3xl p-8 border border-slate-200/50 hover:border-orange-200 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-slate-900 mb-2">Psyonic</h3>
                  <p className="text-orange-600 font-medium mb-4 text-sm">Prosthetic Technology Research</p>
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                    Contributing to cutting-edge prosthetic technology and neural interface development at a leading
                    bionic limb company, focusing on user-centered design and advanced control systems.
                  </p>
                </div>
                <div className="mt-auto">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white w-full"
                  >
                    <Link href="/work-experience/psyonic" className="flex items-center justify-center gap-2">
                      Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-3xl p-8 border border-slate-200/50 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-slate-900 mb-2">Auli Tech</h3>
                  <p className="text-blue-600 font-medium mb-4 text-sm">Assistive Technology Development</p>
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                    Working with innovative assistive technology solutions, contributing to the development of the Cato
                    device and collaborating on marketing content creation with users.
                  </p>
                </div>
                <div className="mt-auto">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white w-full"
                  >
                    <Link href="/work-experience/auli-tech" className="flex items-center justify-center gap-2">
                      Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-3xl p-8 border border-slate-200/50 hover:border-emerald-200 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-slate-900 mb-2">UCLA Makerspace</h3>
                  <p className="text-emerald-600 font-medium mb-4 text-sm">Makerspace Technician</p>
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                    Managing technical equipment and facilitating student projects in UCLA's makerspace, providing
                    expertise in 3D printing, laser cutting, and advanced manufacturing techniques.
                  </p>
                </div>
                <div className="mt-auto">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white w-full"
                  >
                    <Link href="/work-experience/makerspace" className="flex items-center justify-center gap-2">
                      Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
