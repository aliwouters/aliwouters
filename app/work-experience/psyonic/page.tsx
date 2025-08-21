import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Briefcase, Zap, Users, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function PsyonicPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-orange-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Alizee Wouters
            </Link>
            <div className="flex gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href="/work-experience" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Work Experience
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-600 rounded-lg mb-6 flex items-center justify-center mx-auto">
            <Briefcase className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Psyonic Mechatronics Internship</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Contributing to prosthetic technology production and testing
          </p>
        </div>

        {/* About Psyonic Section */}
        <div className="bg-white rounded-3xl p-10 border border-orange-100 shadow-lg mb-12">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="mb-6">
                <Image
                  src="/images/psyonic-logo.png"
                  alt="Psyonic company logo"
                  width={200}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Psyonic</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Psyonic is revolutionizing prosthetic technology by developing the world's first touch-sensing bionic
                hand. Their innovative approach combines advanced robotics, machine learning, and sensory feedback to
                restore both motor function and tactile sensation for amputees, fundamentally changing what's possible
                in prosthetic limbs.
              </p>
              <a
                href="https://www.psyonic.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Visit Psyonic Website
              </a>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-orange-200 shadow-lg">
                <Image
                  src="/images/psyonic-website.jpeg"
                  alt="Screenshot of Psyonic website showing their touch-sensing bionic hand"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Technology Showcase */}
        <div className="bg-white rounded-3xl p-10 border border-orange-100 shadow-lg mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Technology I Worked With</h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              During my internship, I had the opportunity to work directly with Psyonic's cutting-edge prosthetic
              technology, experiencing firsthand the precision and capabilities of their bionic hand systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-orange-200 shadow-lg">
                  <Image
                    src="/images/psyonic-hand-raspberry.png"
                    alt="Psyonic prosthetic hand demonstrating fine motor control by delicately holding a raspberry"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Precision & Touch Sensitivity</h4>
                  <p className="text-sm text-gray-600">
                    The bionic hand's ability to delicately handle fragile objects like raspberries demonstrates the
                    sophisticated force control and sensory feedback systems I worked with during testing.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-orange-200 shadow-lg">
                  <Image
                    src="/images/psyonic-hand-gestures.png"
                    alt="Grid showing 12 different hand positions and gestures possible with the Psyonic prosthetic hand"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Versatile Functionality</h4>
                  <p className="text-sm text-gray-600">
                    The prosthetic hand's extensive range of gestures and grip patterns enabled comprehensive testing
                    scenarios during my Cybathlon course recreation project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My Role & Contributions */}
        <div className="bg-white rounded-3xl p-10 border border-orange-100 shadow-lg mb-12">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-orange-500" />
                Mechatronics Intern Role
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As a Mechatronics Intern, I contributed to prosthetic technology development through hands-on
                engineering projects that directly impacted product testing, manufacturing processes, and production
                assembly. My work ranged from recreating the Cybathlon course for systematic prosthetic evaluation to
                assembling robotic hand control sticks for production units.
              </p>

              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-orange-600" />
                    Cybathlon Course Recreation
                  </h4>
                  <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                    Working alongside a coworker who is an amputee, I built a comprehensive training course that
                    replicated the Cybathlon competition environment. This collaboration provided invaluable user
                    feedback and helped identify specific areas for prosthetic improvement.
                  </p>
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <p className="text-xs text-gray-600">
                      <strong>About Cybathlon:</strong> An international competition where people with physical
                      disabilities compete using state-of-the-art assistive technologies.
                      <a
                        href="https://cybathlon.com/en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-orange-700 ml-1 inline-flex items-center gap-1"
                      >
                        Learn more <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Projects:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Cybathlon course design & implementation</li>
                      <li>• Production assembly of robotic hand control sticks</li>
                      <li>• Epoxy chamber construction for manufacturing</li>
                      <li>• 3D printer maintenance & troubleshooting</li>
                      <li>• User testing protocol development</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Skills Applied:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Mechatronics system integration</li>
                      <li>• Production assembly & quality control</li>
                      <li>• Manufacturing process optimization</li>
                      <li>• Cross-functional collaboration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-orange-200 shadow-lg">
                <Image
                  src="/images/psyonic-lab-setup.png"
                  alt="Psyonic laboratory setup showing prosthetic hand testing environment with microscope and various tools"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
