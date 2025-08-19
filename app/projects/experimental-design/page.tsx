import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FlaskConical, Users, BarChart, Brain } from "lucide-react"

export default function ExperimentalDesignPage() {
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
            <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-3xl mb-8 flex items-center justify-center mx-auto">
              <FlaskConical className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">Experimental Design</h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-600 to-cyan-700 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Psychology and behavioral research projects demonstrating expertise in experimental methodology,
              statistical analysis, and rigorous scientific investigation.
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-16">
            <div className="bg-white rounded-3xl p-10 border border-slate-200/50 shadow-lg">
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">Psych 100B Coursework</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Comprehensive experimental psychology projects completed as part of advanced coursework. These
                    studies demonstrate proficiency in experimental design, data collection, and statistical analysis of
                    behavioral data.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-cyan-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Research Areas</h4>
                      <ul className="text-slate-700 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></span>
                          Cognitive psychology experiments
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></span>
                          Attention and perception studies
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></span>
                          Memory and learning paradigms
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></span>
                          Decision-making processes
                        </li>
                      </ul>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Methodological Approach</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Rigorous experimental protocols following APA guidelines, with careful attention to control
                        variables, randomization, and ethical considerations in human subjects research.
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
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">Behavioral Experiments</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Independent research projects investigating human behavior through controlled laboratory
                    experiments. These studies focus on understanding cognitive processes and behavioral patterns using
                    quantitative methods.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-emerald-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Experimental Techniques</h4>
                      <ul className="text-slate-700 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                          Reaction time measurements
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                          Eye-tracking studies
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                          Behavioral coding and analysis
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                          Psychophysiological measures
                        </li>
                      </ul>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Data Collection</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Systematic data collection protocols ensuring reliability and validity, with careful attention
                        to participant recruitment, informed consent, and data quality control.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 border border-slate-200/50 shadow-lg">
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                    <BarChart className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">Statistical Modeling & Analysis</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Advanced statistical analysis of experimental data using appropriate methods for psychological
                    research. These projects demonstrate proficiency in hypothesis testing, effect size calculation, and
                    interpretation of results.
                  </p>

                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Statistical Methods</h4>
                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-blue-700 font-bold">A</span>
                        </div>
                        <p className="text-sm text-slate-700">ANOVA</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-blue-700 font-bold">R</span>
                        </div>
                        <p className="text-sm text-slate-700">Regression</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-blue-700 font-bold">M</span>
                        </div>
                        <p className="text-sm text-slate-700">Mixed Models</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Section */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 text-white">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-medium mb-4">Research Impact & Applications</h3>
                <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto">
                  These experimental design projects have contributed to understanding human cognition and behavior,
                  with implications for educational psychology, user experience design, and cognitive rehabilitation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-4">Key Findings</h4>
                  <ul className="text-slate-300 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                      Novel insights into attention mechanisms
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                      Evidence for cognitive processing models
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                      Behavioral pattern identification
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-4">Applications</h4>
                  <ul className="text-slate-300 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                      Educational intervention design
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                      User interface optimization
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                      Cognitive assessment tools
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
