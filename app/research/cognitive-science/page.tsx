import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Eye, Brain, BarChart } from "lucide-react"

export default function CognitiveSciencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-purple-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Alizee Wouters
            </Link>
            <div className="flex gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href="/research" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Research
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg mb-6 flex items-center justify-center mx-auto">
            <Eye className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cognitive Science Research</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Investigating the fundamental mechanisms of human cognition and behavior
          </p>
        </div>

        <div className="space-y-8">
          {/* Cognitive and Perceptual Abilities in Card Game Players */}
          <Card className="border-purple-100 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Brain className="w-6 h-6 text-purple-500" />
                Cognitive and Perceptual Abilities in Card Game Players
              </CardTitle>
              <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-3 border border-amber-200">
                <p className="text-amber-800 font-semibold text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  Lab Manager Role - Led team hiring, interviewing, and management
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Led a comprehensive research project investigating the cognitive and perceptual abilities of Magic: The
                Gathering players compared to non-players. As Lab Manager, I oversaw team operations, coordinated hiring
                processes, and managed research assistants while contributing to experimental design and data analysis.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Research Focus Areas:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Reasoning and problem-solving abilities</li>
                    <li>• Numeracy and mathematical cognition</li>
                    <li>• Visual memory capacity and retention</li>
                    <li>• Visual attention and processing speed</li>
                    <li>• Strategic thinking and planning</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Lab Management Responsibilities:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Coordinating hiring and interview processes</li>
                    <li>• Managing research assistant teams</li>
                    <li>• Overseeing experimental protocols</li>
                    <li>• Supervising data collection procedures</li>
                    <li>• Ensuring research quality and standards</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Technical Implementation:</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Our methodology involves creating and collecting cognitive assessment stimuli, developing PsychoPy
                  experiments deployed on Pavlovia, and conducting comprehensive statistical analyses using R and
                  Python. The project employs advanced statistical methods including correlation analysis,
                  linear/logistic regression, and ANOVA/ANCOVA to identify cognitive differences between gaming
                  populations.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-purple-700 font-bold">E</span>
                    </div>
                    <p className="text-sm text-gray-700">Experimental Design</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-purple-700 font-bold">D</span>
                    </div>
                    <p className="text-sm text-gray-700">Data Analysis</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-purple-700 font-bold">M</span>
                    </div>
                    <p className="text-sm text-gray-700">Team Management</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Experience Design and Research */}
          <Card className="border-purple-100 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Eye className="w-6 h-6 text-purple-500" />
                User Experience Design and Research
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Contributed to interdisciplinary research that bridges cognitive psychology and user experience design.
                This project developed both subjective and objective measures to track user journeys, assess usability,
                and quantify customer satisfaction through rigorous experimental methods.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Research Methodologies:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• User journey mapping and analysis</li>
                    <li>• Usability testing protocols</li>
                    <li>• In-depth user interviews</li>
                    <li>• Qualitative data coding and analysis</li>
                    <li>• Mixed-methods research design</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Technical Skills Applied:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Figma design and prototyping</li>
                    <li>• Statistical analysis in R and Python</li>
                    <li>• Qualitative coding methodologies</li>
                    <li>• User testing facilitation</li>
                    <li>• Data visualization and reporting</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Interdisciplinary Applications:</h4>
                <p className="text-gray-700 text-sm">
                  This research combines principles from cognitive psychology, human-computer interaction, and design
                  thinking to create evidence-based UX methodologies. Our work contributes to understanding how
                  cognitive processes influence user behavior and decision-making in digital environments, with
                  applications in product design, interface optimization, and user satisfaction measurement.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Graph Perception and Data Visualization */}
          <Card className="border-purple-100 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <BarChart className="w-6 h-6 text-purple-500" />
                Graph Perception and Data Visualization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Investigated fundamental questions about how people interpret graphs and data visualizations, including
                common misconceptions and perceptual biases. This research provided insights into statistical literacy
                and data comprehension that inform better visualization design practices.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Core Research Questions:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• How do people interpret novel graph formats?</li>
                    <li>• What misconceptions arise in data interpretation?</li>
                    <li>• How does statistical literacy affect comprehension?</li>
                    <li>• What design principles improve understanding?</li>
                    <li>• How do cognitive biases influence perception?</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Experimental Contributions:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Participant recruitment and scheduling</li>
                    <li>• Experiment piloting and refinement</li>
                    <li>• Data collection supervision</li>
                    <li>• Statistical analysis and interpretation</li>
                    <li>• Experimental material development</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Mixed-Methods Approach:</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Our research employed both quantitative and qualitative methods to comprehensively understand graph
                  perception. We combined controlled experiments measuring accuracy and response times with qualitative
                  interviews exploring reasoning processes and misconceptions.
                </p>
                <div className="grid md:grid-cols-4 gap-3">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-1">
                      <span className="text-green-700 font-bold text-xs">EXP</span>
                    </div>
                    <p className="text-xs text-gray-700">Controlled Experiments</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-1">
                      <span className="text-green-700 font-bold text-xs">INT</span>
                    </div>
                    <p className="text-xs text-gray-700">User Interviews</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-1">
                      <span className="text-green-700 font-bold text-xs">VIZ</span>
                    </div>
                    <p className="text-xs text-gray-700">Visualization Design</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-1">
                      <span className="text-green-700 font-bold text-xs">STAT</span>
                    </div>
                    <p className="text-xs text-gray-700">Statistical Analysis</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research Impact Section */}
          <Card className="border-purple-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Research Impact & Methodological Contributions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                My work across these three Zili Lab projects demonstrated expertise in experimental psychology,
                statistical analysis, and interdisciplinary research methods. The combination of cognitive assessment,
                user experience research, and data visualization studies provided a comprehensive foundation in applied
                cognitive science.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Cross-Project Skills and Impact:</h4>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-purple-700 font-bold">L</span>
                    </div>
                    <p className="text-sm text-gray-700 font-medium">Leadership</p>
                    <p className="text-xs text-gray-600">Lab management and team coordination</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-purple-700 font-bold">M</span>
                    </div>
                    <p className="text-sm text-gray-700 font-medium">Methodology</p>
                    <p className="text-xs text-gray-600">Mixed-methods research design</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-purple-700 font-bold">A</span>
                    </div>
                    <p className="text-sm text-gray-700 font-medium">Analysis</p>
                    <p className="text-xs text-gray-600">Advanced statistical methods</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
