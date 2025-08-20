import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Brain, Zap, Activity, Target, ExternalLink, Trophy, Users } from "lucide-react"
import Image from "next/image"

export default function NeurotechnologyPage() {
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
                <Link href="/research" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Research
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
              <Brain className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">Neurotechnology Research</h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Pioneering brain-computer interfaces and neural signal processing technologies that transform how we
              interact with machines.
            </p>
          </div>

          {/* Research Projects */}
          <div className="space-y-16">
            <div className="bg-white rounded-3xl p-10 border border-slate-200/50 shadow-lg">
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">CruX - Brain-Controlled Pincher</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Developing an innovative brain-controlled prosthetic pincher that translates neural signals into
                    precise mechanical movements. This type of research would represent a significant advancement in
                    assistive technology for individuals with motor impairments.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-6">
                      <div className="bg-blue-50 rounded-2xl p-6">
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <Target className="w-5 h-5 text-blue-600" />
                          Key Features
                        </h4>
                        <ul className="text-slate-700 space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            Real-time EEG signal processing
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            Machine learning-based intent recognition
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            Precise motor control algorithms
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            User-adaptive calibration system
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 rounded-2xl p-6">
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <Target className="w-5 h-5 text-blue-600" />
                          Technical Approach
                        </h4>
                        <p className="text-slate-700 text-sm leading-relaxed">
                          Utilizing advanced signal processing techniques combined with machine learning algorithms to
                          decode motor intentions from neural activity, enabling intuitive control of prosthetic
                          devices.
                        </p>
                      </div>

                      <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <Target className="w-5 h-5 text-amber-600" />
                          Outcome
                        </h4>
                        <p className="text-slate-700 text-sm leading-relaxed">
                          Our team was partially successful in developing the brain-controlled interface. While we
                          achieved significant progress in EEG signal processing and mechanical control, we encountered
                          challenges with motor imagery classification that prevented full implementation of the
                          intended brain-control functionality. This experience provided valuable insights into the
                          complexities of brain-computer interface development.
                        </p>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Hardware Implementation</h4>
                      <div className="relative">
                        <div className="rounded-2xl overflow-hidden border border-blue-200 shadow-lg">
                          <Image
                            src="/images/crux-brain-pincher.jpeg"
                            alt="CruX brain-controlled pincher robotic arm with control electronics, showing the physical implementation of the brain-computer interface system"
                            width={300}
                            height={400}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                        <div className="mt-3 text-center">
                          <p className="text-sm text-slate-600">
                            Physical implementation with Arduino control board and multi-jointed articulated arm
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Documentation Links */}
                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h4 className="font-semibold text-slate-900 mb-4">Project Documentation</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <a
                        href="https://docs.google.com/presentation/d/1cWC6TjJJL-B-fmr4Tyk7YvJxk5iAy02wZV_ZKVp1GWs/edit?slide=id.p#slide=id.p"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white hover:bg-blue-50 border border-blue-200 rounded-lg p-4 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-medium text-slate-900">Project Proposal</p>
                          <p className="text-sm text-slate-600">Initial project concept and methodology</p>
                        </div>
                      </a>
                      <a
                        href="https://docs.google.com/presentation/d/1OCY-NMioLosHl-sckusI5GpqvFdAB2_lpDTKidcp0-8/edit?slide=id.p#slide=id.p"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white hover:bg-blue-50 border border-blue-200 rounded-lg p-4 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-medium text-slate-900">Project Presentation</p>
                          <p className="text-sm text-slate-600">Final results and demonstration</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 border border-slate-200/50 shadow-lg">
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">Emotion Detection with EEG</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Research focused on developing wearable EEG systems capable of real-time emotion recognition. This
                    work has applications in mental health monitoring, human-computer interaction, and adaptive user
                    interfaces.
                  </p>

                  {/* EEG Development Process Images */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-4">Development Process & Hardware</h4>
                    <div className="grid grid-cols-4 gap-4">
                      {/* EEG Cap with Logo */}
                      <div className="bg-emerald-50 rounded-lg p-3">
                        <div className="aspect-square rounded-lg overflow-hidden border border-emerald-200 mb-3">
                          <Image
                            src="/images/eeg-cap-logo.jpeg"
                            alt="EEG cap with brain-circuit logo design"
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-xs text-slate-600 text-center">Branding: customized cap with CruX logo</p>
                      </div>

                      {/* CAD Design */}
                      <div className="bg-emerald-50 rounded-lg p-3">
                        <div className="aspect-square rounded-lg overflow-hidden border border-emerald-200 mb-3">
                          <Image
                            src="/images/eeg-cad-design.jpeg"
                            alt="CAD design of EEG headset showing 3D modeling process"
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-xs text-slate-600 text-center">
                          3D CAD modeling of the EEG electrode casings: developed such that gel electrodes can be
                          removed and cleaned
                        </p>
                      </div>

                      {/* Electrode Array Interior */}
                      <div className="bg-emerald-50 rounded-lg p-3">
                        <div className="aspect-square rounded-lg overflow-hidden border border-emerald-200 mb-3">
                          <Image
                            src="/images/eeg-electrodes-inside.jpeg"
                            alt="Interior view of EEG cap showing electrode placement and wiring"
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-xs text-slate-600 text-center">
                          Electrode integration: electrode casings were 3D printed with flexible TPU for user comfort
                        </p>
                      </div>

                      {/* Video Demo */}
                      <div className="bg-emerald-50 rounded-lg p-3">
                        <div className="aspect-square rounded-lg overflow-hidden border border-emerald-200 mb-3">
                          <video
                            controls
                            className="w-full h-full object-cover"
                            poster="/placeholder.svg?height=200&width=200&text=EEG+Demo"
                          >
                            <source
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9874-IjrX6N3MVV1KMIN4avfDnMHNr8uhcT.MOV"
                              type="video/quicktime"
                            />
                            <source
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9874-IjrX6N3MVV1KMIN4avfDnMHNr8uhcT.MOV"
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <p className="text-xs text-slate-600 text-center">
                          Completed discrete EEG headset: worn by one of our project presenters
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-emerald-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Research Areas</h4>
                      <ul className="text-slate-700 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                          Signal acquisition and preprocessing
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                          Feature extraction from neural oscillations
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                          Deep learning classification models
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                          Wearable device integration
                        </li>
                      </ul>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Applications</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Creating systems that can monitor emotional states in real-time, enabling personalized
                        interventions and adaptive technologies that respond to user emotional needs.
                      </p>
                    </div>
                  </div>

                  {/* Project Documentation Link */}
                  <div className="bg-emerald-50 rounded-2xl p-6 mb-6">
                    <h4 className="font-semibold text-slate-900 mb-4">Project Documentation</h4>
                    <a
                      href="https://docs.google.com/presentation/d/1fPS0Ay2W_059HFDyExSL4MkaLow2HHIPaFNvYy6kt4Y/edit?slide=id.p#slide=id.p"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white hover:bg-emerald-50 border border-emerald-200 rounded-lg p-4 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-emerald-600" />
                      <div>
                        <p className="font-medium text-slate-900">Project Presentation</p>
                        <p className="text-sm text-slate-600">Complete project slideshow and results</p>
                      </div>
                    </a>
                  </div>

                  {/* California Neurotechnology Conference */}
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-amber-600" />
                      California Neurotechnology Conference
                    </h4>
                    <p className="text-slate-700 text-sm leading-relaxed mb-3">
                      Our emotion detection EEG project was presented at the California Neurotechnology Conference in a
                      competitive research presentation. The project won first place, earning recognition for innovation
                      in wearable neurotechnology and real-time emotion recognition systems.
                    </p>
                    <div className="bg-white/50 rounded-lg p-3">
                      <p className="text-xs text-slate-600">
                        <strong>Award:</strong> First Place Winner - Neuroscience and Neurotechnology Primer with
                        Queen's University
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stress Detection EEG Applied to Poker */}
            <div className="bg-white rounded-3xl p-10 border border-slate-200/50 shadow-lg">
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">Stress Detection EEG Applied to Poker</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Building on our previous emotion detection research, this project focuses on stress detection during
                    poker gameplay using a redesigned discrete EEG headset. The system has been completely concealed
                    within a baseball cap for unobtrusive monitoring during competitive gaming scenarios.
                  </p>

                  {/* Poker EEG Development Process Images */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-4">Discrete EEG System Development</h4>
                    <div className="grid grid-cols-6 gap-3">
                      {/* Hardware Components - FIRST */}
                      <div className="bg-purple-50 rounded-lg p-2">
                        <div className="aspect-square rounded-lg overflow-hidden border border-purple-200 mb-2">
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2890.jpg-NckdjHSmKCEeRHZrHUjixizCwBgeZk.jpeg"
                            alt="EEG processing hardware and circuit boards used in the discrete headset system"
                            width={150}
                            height={150}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-xs text-slate-600 text-center">
                          Signal processing hardware and electrode interface components before cap integration
                        </p>
                      </div>

                      {/* Discrete Cap in Use - SECOND */}
                      <div className="bg-purple-50 rounded-lg p-2">
                        <div className="aspect-square rounded-lg overflow-hidden border border-purple-200 mb-2">
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1846.jpg-f0h0Cwtoure3OUnhYvUZLKz8EnGmCM.jpeg"
                            alt="Person wearing discrete EEG cap while working at laptop in classroom setting"
                            width={150}
                            height={150}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-xs text-slate-600 text-center">
                          Initial EEG data collection for cognitive state classification
                        </p>
                      </div>

                      {/* Poker Game Testing - THIRD */}
                      <div className="bg-purple-50 rounded-lg p-2">
                        <div className="aspect-square rounded-lg overflow-hidden border border-purple-200 mb-2">
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1916.jpg-FvPrexh3lyC7xlsuUtfF4XJDKajwhw.jpeg"
                            alt="Group of people playing poker with EEG headset for stress detection research"
                            width={150}
                            height={150}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-xs text-slate-600 text-center">
                          Real-world testing during poker gameplay with EEG monitoring and data collection
                        </p>
                      </div>

                      {/* Multiple Headsets - FOURTH */}
                      <div className="bg-purple-50 rounded-lg p-2">
                        <div className="aspect-square rounded-lg overflow-hidden border border-purple-200 mb-2">
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5928.jpg-jgZMUUamDcSZnY6kaK4Cq4zMjkzI6L.jpeg"
                            alt="Multiple discrete EEG baseball caps showing manufacturing and assembly process"
                            width={150}
                            height={150}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-xs text-slate-600 text-center">
                          Multiple discrete EEG headsets in various stages of assembly and testing for multiple poker
                          players
                        </p>
                      </div>

                      {/* Interior Electronics - FIFTH */}
                      <div className="bg-purple-50 rounded-lg p-2">
                        <div className="aspect-square rounded-lg overflow-hidden border border-purple-200 mb-2">
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3967.jpg-SxXqMp5H3WBpq2Wh8HLkESRsLhiB5e.jpeg"
                            alt="Interior view of baseball cap showing integrated EEG electrodes and wiring system"
                            width={150}
                            height={150}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-xs text-slate-600 text-center">
                          Interior view showing fully integrated electrode array and signal processing electronics
                        </p>
                      </div>

                      {/* Conference Presentation - SIXTH */}
                      <div className="bg-purple-50 rounded-lg p-2">
                        <div className="aspect-square rounded-lg overflow-hidden border border-purple-200 mb-2">
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2894.jpg-MGeOXG1JtpBRebYOl4gZMBCtSwPhNR.jpeg"
                            alt="Conference presentation showing biofeedback dashboard with cognitive state data during poker gameplay"
                            width={150}
                            height={150}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-xs text-slate-600 text-center">
                          Conference presentation displaying real-time biofeedback dashboard with cognitive state
                          monitoring
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Technical Improvements</h4>
                      <ul className="text-slate-700 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                          Complete concealment within baseball cap
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                          Miniaturized signal processing electronics
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                          Real-time stress level monitoring
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                          Wireless data transmission capabilities
                        </li>
                      </ul>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Research Applications</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        This discrete system enables unobtrusive monitoring of cognitive load and stress responses
                        during competitive gaming, with potential applications in sports psychology, performance
                        optimization, and behavioral research in naturalistic settings.
                      </p>
                    </div>
                  </div>

                  {/* Project Documentation Link */}
                  <div className="bg-purple-50 rounded-2xl p-6 mt-6">
                    <h4 className="font-semibold text-slate-900 mb-4">Project Documentation</h4>
                    <a
                      href="https://docs.google.com/presentation/d/1MRi5empiZggo5zpohyQqALtpNQv3m6fwrzsRnKQy6vY/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white hover:bg-purple-50 border border-purple-200 rounded-lg p-4 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-purple-600" />
                      <div>
                        <p className="font-medium text-slate-900">Project Presentation</p>
                        <p className="text-sm text-slate-600">
                          Poker stress detection research slideshow and methodology
                        </p>
                      </div>
                    </a>
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
