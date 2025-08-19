import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, GraduationCap, Users, Heart, Star, Wrench, Gamepad2, Zap } from "lucide-react"

export default function SchoolOutreachPage() {
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
                <Link href="/community" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Community
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
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl mb-8 flex items-center justify-center mx-auto">
              <GraduationCap className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">School Outreach</h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Leading educational outreach initiatives as a staff supervisor and curriculum developer, inspiring
              students from middle school through high school in STEM fields through hands-on learning experiences.
            </p>
          </div>

          {/* Programs */}
          <div className="space-y-16">
            <div className="bg-white rounded-3xl p-10 border border-slate-200/50 shadow-lg">
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">
                    <Gamepad2 className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="lg:col-span-10">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-medium text-slate-900">Summer Discovery Program</h3>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      Staff Supervisor
                    </span>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    As <strong>Staff Supervisor</strong>, I designed and implemented a comprehensive 3-week game design
                    curriculum for middle school students. The program combined hands-on makerspace learning with
                    creative game development, culminating in student-designed games and presentations.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-blue-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <Wrench className="w-4 h-4 text-blue-600" />
                        Week 1: Machine Learning
                      </h4>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          Wood engraved nametags
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          Custom vinyl cut tote bags
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          Wood engraved keychains
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          3D printing projects
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          Introduction to woodworking
                        </li>
                      </ul>
                    </div>

                    <div className="bg-cyan-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <Gamepad2 className="w-4 h-4 text-cyan-600" />
                        Week 2: Game Prototyping
                      </h4>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></span>
                          Ball-in-maze game construction
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></span>
                          Kerplunk game building
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></span>
                          Team formation and concept development
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></span>
                          Game design thinking workshops
                        </li>
                      </ul>
                    </div>

                    <div className="bg-indigo-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <Star className="w-4 h-4 text-indigo-600" />
                        Week 3: Creation & Presentation
                      </h4>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span>
                          Custom game fabrication
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span>
                          Team t-shirt design with game logos
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span>
                          Final game presentations
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span>
                          Peer evaluation and feedback
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Curriculum Design Philosophy</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      The program was structured to build technical skills progressively while fostering creativity and
                      collaboration. Students learned individual machine operations before applying those skills to
                      collaborative game design projects, culminating in presentations that built confidence and
                      communication skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 border border-slate-200/50 shadow-lg">
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">Bruin Guardian Scholars Academy</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Providing guided makerspace access to high school students from foster care backgrounds, combining
                    safety training with creative freedom to help students explore their interests and develop technical
                    skills in a supportive environment.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-emerald-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Structured Introduction</h4>
                      <ul className="text-slate-700 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                          Comprehensive safety briefings
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                          Laser engraver training with custom nametags
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                          3D printing fundamentals
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                          Custom tote bag creation
                        </li>
                      </ul>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Independent Exploration</h4>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        After mastering basic skills, students received free-range access to pursue personal projects. I
                        provided individualized mentorship to help students realize their creative visions, from concept
                        development through final fabrication.
                      </p>
                      <div className="bg-emerald-100 rounded-lg p-3">
                        <p className="text-emerald-800 text-xs font-medium">
                          Focus: Building confidence and self-advocacy through hands-on creation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 border border-slate-200/50 shadow-lg">
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">CruX School Visits</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Visiting local high schools to present neurotechnology research, demonstrate brain-computer
                    interfaces, and inspire students, particularly young women, to pursue STEM fields. These interactive
                    sessions combined live demonstrations with college guidance and career mentorship.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-purple-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Presentation Components</h4>
                      <ul className="text-slate-700 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                          Live neurotechnology demonstrations
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                          Brain-computer interface showcases
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                          Interactive Q&A sessions
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                          College application guidance
                        </li>
                      </ul>
                    </div>

                    <div className="bg-pink-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Women in STEM Focus</h4>
                      <p className="text-slate-600 text-sm leading-relaxed mb-3">
                        A key mission was encouraging young women to pursue STEM careers by sharing personal
                        experiences, addressing barriers, and providing relatable role models in neurotechnology
                        research.
                      </p>
                      <div className="bg-pink-100 rounded-lg p-3">
                        <p className="text-pink-800 text-xs font-medium">
                          Goal: Increase female representation in STEM through mentorship and inspiration
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Student Engagement Activities</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Zap className="w-6 h-6 text-purple-700" />
                        </div>
                        <p className="text-sm text-slate-700 font-medium">Live Demos</p>
                        <p className="text-xs text-slate-600">Hands-on technology experiences</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Users className="w-6 h-6 text-purple-700" />
                        </div>
                        <p className="text-sm text-slate-700 font-medium">Student Mingling</p>
                        <p className="text-xs text-slate-600">Informal mentorship conversations</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-2">
                          <GraduationCap className="w-6 h-6 text-purple-700" />
                        </div>
                        <p className="text-sm text-slate-700 font-medium">College Guidance</p>
                        <p className="text-xs text-slate-600">Practical application advice</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Section */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 text-white">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-medium mb-4">Leadership Impact & Educational Philosophy</h3>
                <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto">
                  Through curriculum development, staff supervision, and direct student mentorship, I've reached
                  hundreds of students across diverse backgrounds. My approach emphasizes hands-on learning, creative
                  problem-solving, and building confidence through technical skill development.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-4 text-center">Program Development</h4>
                  <ul className="text-slate-300 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      Designed comprehensive 3-week curriculum
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      Supervised staff and student activities
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      Created progressive skill-building framework
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-4 text-center">Student Outcomes</h4>
                  <ul className="text-slate-300 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                      Increased STEM confidence and interest
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                      Enhanced technical and creative skills
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                      Improved presentation abilities
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-4 text-center">Personal Growth</h4>
                  <ul className="text-slate-300 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                      Advanced curriculum design skills
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                      Strengthened leadership abilities
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                      Deepened commitment to STEM equity
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
