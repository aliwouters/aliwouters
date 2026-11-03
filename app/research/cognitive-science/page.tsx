"use client"

import SiteNav from "@/components/SiteNav"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Eye, Brain, BarChart, Home } from "lucide-react"

export default function CognitiveSciencePage() {
  return (
    <div className="portfolio-inner case-study min-h-screen bg-white text-[#1b334b]">
      {/* Navigation */}
      <SiteNav />

      <div id="main-content" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="page-introduction mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cognitive Science Research</h1>
          <p className="text-lg text-gray-600">
            Research with Dr. Zili Liu and Lucy Cui at UCLA’s Perceptual Processing and Computational Lab.
          </p>
        </div>

        <figure className="sourced-feature lab-feature">
          <img src="/images/sourced/zili-lab-banner.jpg" alt="Perceptual Processing and Computational Lab — Principal Investigator Zili Liu" />
          <figcaption>Lab banner from <a href="https://zililab.psych.ucla.edu/" target="_blank" rel="noopener noreferrer">Zili Lab, UCLA ↗</a></figcaption>
        </figure>
        <div className="space-y-8">
          {/* Cognitive and Perceptual Abilities in Card Game Players */}
          <Card className="portfolio-article case-section border-[#cbd9e4]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                Cognitive and Perceptual Abilities in Card Game Players
              </CardTitle>
              <div className="case-note     ]">
                <p className="text-[#285c8a] font-semibold text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#285c8a] rounded-full"></span>
                  Lab Manager Role - Led team hiring, interviewing, and management
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Led a comprehensive research project investigating the cognitive and perceptual abilities of Magic: The
                Gathering players compared to non-players. This study examined multiple cognitive domains including
                reasoning, numeracy, visual memory, and attention processing to understand how strategic gaming
                experience relates to cognitive performance.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="case-note   ">
                  <h4 className="font-semibold text-gray-800 mb-2">Research Focus Areas:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Reasoning and problem-solving abilities</li>
                    <li>• Numeracy and mathematical cognition</li>
                    <li>• Visual memory capacity and retention</li>
                    <li>• Visual attention and processing speed</li>
                    <li>• Strategic thinking and planning</li>
                  </ul>
                </div>
                <div className="case-note   ">
                  <h4 className="font-semibold text-gray-800 mb-2">Technical Implementation:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• PsychoPy experiment development</li>
                    <li>• Pavlovia deployment and data collection</li>
                    <li>• Statistical analysis using R and Python</li>
                    <li>• Correlation and regression modeling</li>
                    <li>• ANOVA/ANCOVA comparative analysis</li>
                  </ul>
                </div>
              </div>

              <div className="case-note    mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Methodology & Analysis:</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Our methodology involved creating and collecting cognitive assessment stimuli, developing PsychoPy
                  experiments deployed on Pavlovia, and conducting comprehensive statistical analyses using R and
                  Python. The project employed advanced statistical methods including correlation analysis,
                  linear/logistic regression, and ANOVA/ANCOVA to identify cognitive differences between gaming
                  populations.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-700">Experimental Design</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-700">Data Analysis</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-700">Team Management</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Experience Design and Research */}
          <Card className="portfolio-article case-section border-[#cbd9e4]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
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
                <div className="case-note   ">
                  <h4 className="font-semibold text-gray-800 mb-2">Research Methodologies:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• User journey mapping and analysis</li>
                    <li>• Usability testing protocols</li>
                    <li>• In-depth user interviews</li>
                    <li>• Qualitative data coding and analysis</li>
                    <li>• Mixed-methods research design</li>
                  </ul>
                </div>
                <div className="case-note   ">
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

              <div className="case-note   ">
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
          <Card className="portfolio-article case-section border-[#cbd9e4]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
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
                <div className="case-note   ">
                  <h4 className="font-semibold text-gray-800 mb-2">Core Research Questions:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• How do people interpret novel graph formats?</li>
                    <li>• What misconceptions arise in data interpretation?</li>
                    <li>• How does statistical literacy affect comprehension?</li>
                    <li>• What design principles improve understanding?</li>
                    <li>• How do cognitive biases influence perception?</li>
                  </ul>
                </div>
                <div className="case-note   ">
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

              <div className="case-note   ">
                <h4 className="font-semibold text-gray-800 mb-2">Mixed-Methods Approach:</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Our research employed both quantitative and qualitative methods to comprehensively understand graph
                  perception. We combined controlled experiments measuring accuracy and response times with qualitative
                  interviews exploring reasoning processes and misconceptions.
                </p>
                <div className="grid md:grid-cols-4 gap-3">
                  <div className="text-center">
                    <p className="text-xs text-gray-700">Controlled Experiments</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-700">User Interviews</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-700">Visualization Design</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-700">Statistical Analysis</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-12 h-12 bg-[#285c8a] text-white rounded-full transition-all duration-300 flex items-center justify-center z-50 opacity-80 hover:opacity-100"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  )
}
