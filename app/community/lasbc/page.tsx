import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mountain, DollarSign, Calendar, ExternalLink, Crown, Megaphone, UserCheck } from "lucide-react"

export default function LASBCPage() {
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
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl mb-8 flex items-center justify-center mx-auto">
              <Mountain className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">LASBC</h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              UCLA's largest social club with over 1,500 members, dedicated to making skiing and snowboarding affordable
              and accessible to college students through organized trips, fundraising, and corporate partnerships.
            </p>

            {/* Website Link */}
            <div className="flex justify-center">
              <Button
                asChild
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-50 bg-transparent"
              >
                <Link
                  href="https://laboardclub.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Visit LASBC Website
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-20">
            <div className="relative h-[500px]">
              <Image
                src="/images/lasbc-group-photo.png"
                alt="LASBC group photo on ski slopes with team jerseys"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-10 text-white mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-medium mb-6">Our Mission</h2>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                To make skiing and snowboarding affordable and accessible to college students by organizing
                comprehensive trips, securing corporate sponsorships, and fundraising to subsidize costs so that
                everyone gets a chance to experience the mountains.
              </p>
            </div>
          </div>

          {/* Leadership Roles */}
          <div className="mb-20">
            <h2 className="text-3xl font-light text-slate-900 mb-12 text-center">Leadership Journey</h2>

            <div className="space-y-8">
              {/* President */}
              <div className="bg-white rounded-3xl p-10 border border-slate-200/50 shadow-lg">
                <div className="grid lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center">
                      <Crown className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="lg:col-span-10">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-medium text-slate-900">President</h3>
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                        Leadership
                      </span>
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Leading UCLA's largest social club, promoting inclusivity and coordinating all events,
                      fundraisers, and inter-university collaborations with sister schools across the region.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-yellow-50 rounded-2xl p-6">
                        <h4 className="font-semibold text-slate-900 mb-3">Key Responsibilities</h4>
                        <ul className="text-slate-700 space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span>
                            Promote inclusivity across 1,500+ members
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span>
                            Plan and organize all club events
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span>
                            Coordinate fundraising initiatives
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span>
                            Manage inter-university collaborations
                          </li>
                        </ul>
                      </div>

                      <div className="bg-slate-50 rounded-2xl p-6">
                        <h4 className="font-semibold text-slate-900 mb-3">Impact</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          Overseeing the largest social club on UCLA's campus, ensuring that skiing and snowboarding
                          remain accessible to students from all backgrounds through strategic leadership and community
                          building.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Public Relations */}
              <div className="bg-white rounded-3xl p-10 border border-slate-200/50 shadow-lg">
                <div className="grid lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                      <Megaphone className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="lg:col-span-10">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-medium text-slate-900">Public Relations</h3>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        Communications
                      </span>
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Managing all media and corporate relations, including Instagram management, email campaigns,
                      sponsor coordination, and discount code distribution to maximize member benefits.
                    </p>

                    <div className="bg-purple-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-4">Corporate Partnerships</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                        <div className="bg-white rounded-lg p-3 text-center font-medium text-slate-700">Ikon</div>
                        <div className="bg-white rounded-lg p-3 text-center font-medium text-slate-700">Red Bull</div>
                        <div className="bg-white rounded-lg p-3 text-center font-medium text-slate-700">Burton</div>
                        <div className="bg-white rounded-lg p-3 text-center font-medium text-slate-700">Pit Viper</div>
                        <div className="bg-white rounded-lg p-3 text-center font-medium text-slate-700">Shaggy's</div>
                        <div className="bg-white rounded-lg p-3 text-center font-medium text-slate-700">Bumpbox</div>
                        <div className="bg-white rounded-lg p-3 text-center font-medium text-slate-700">Kemper</div>
                        <div className="bg-white rounded-lg p-3 text-center font-medium text-slate-700">Lisco</div>
                        <div className="bg-white rounded-lg p-3 text-center font-medium text-slate-700">Vertika</div>
                        <div className="bg-white rounded-lg p-3 text-center font-medium text-slate-700">
                          Tipsy Elves
                        </div>
                        <div className="bg-white rounded-lg p-3 text-center font-medium text-slate-700">
                          Bern Helmets
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Staff */}
              <div className="bg-white rounded-3xl p-10 border border-slate-200/50 shadow-lg">
                <div className="grid lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center">
                      <UserCheck className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="lg:col-span-10">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-medium text-slate-900">Staff</h3>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        Operations
                      </span>
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Working directly for the club to run events, coordinate fundraisers, and organize ski trips,
                      gaining hands-on experience in event management and community building.
                    </p>

                    <div className="bg-green-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Core Activities</h4>
                      <ul className="text-slate-700 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                          Event planning and execution
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                          Fundraiser coordination
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                          Trip logistics management
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                          Member engagement activities
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Club Operations */}
          <div className="space-y-16">
            <div className="bg-white rounded-3xl p-10 border border-slate-200/50 shadow-lg">
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">Trip Organization & Logistics</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Comprehensive trip planning that handles every aspect of the skiing experience, from transportation
                    and lodging to lift tickets and equipment rentals, making mountain adventures accessible to all
                    students.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Services Provided</h4>
                      <ul className="text-slate-700 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          Housing coordination and booking
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          Carpool organization and transportation
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          Group lift ticket purchasing
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          Equipment rental coordination
                        </li>
                      </ul>
                    </div>

                    <div className="relative h-48 rounded-2xl overflow-hidden">
                      <Image
                        src="/images/lasbc-mountain-landscape.jpeg"
                        alt="Snow-covered mountain landscape"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 border border-slate-200/50 shadow-lg">
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">Fundraising & Accessibility</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Strategic fundraising initiatives and corporate partnerships that directly subsidize trip costs,
                    ensuring that financial barriers don't prevent students from experiencing mountain sports.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-emerald-50 rounded-2xl p-6 text-center">
                      <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-emerald-700 font-bold">G</span>
                      </div>
                      <h4 className="font-semibold text-slate-900 mb-2">Gear Donations</h4>
                      <p className="text-slate-600 text-sm">Equipment giveaways and donations from sponsor partners</p>
                    </div>

                    <div className="bg-emerald-50 rounded-2xl p-6 text-center">
                      <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-emerald-700 font-bold">P</span>
                      </div>
                      <h4 className="font-semibold text-slate-900 mb-2">Pass Giveaways</h4>
                      <p className="text-slate-600 text-sm">
                        Free ski pass distributions through corporate partnerships
                      </p>
                    </div>

                    <div className="bg-emerald-50 rounded-2xl p-6 text-center">
                      <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-emerald-700 font-bold">S</span>
                      </div>
                      <h4 className="font-semibold text-slate-900 mb-2">Subsidized Trips</h4>
                      <p className="text-slate-600 text-sm">Reduced-cost trips through fundraising and sponsorships</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Section */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 text-white">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-medium mb-4">Community Impact & Personal Growth</h3>
                <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto">
                  Through my progression from Staff to Public Relations to President, I've helped build LASBC into
                  UCLA's largest social club, creating lasting memories and accessible mountain experiences for over
                  1,500 students.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-4">Club Achievements</h4>
                  <ul className="text-slate-300 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      Largest social club on UCLA campus (1,500+ members)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      11+ corporate partnerships and sponsorships
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      Successful inter-university collaborations
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      Increased accessibility through subsidized trips
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-4">Leadership Skills Developed</h4>
                  <ul className="text-slate-300 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                      Large-scale event planning and execution
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                      Corporate partnership development
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                      Social media and digital marketing
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                      Community building and inclusivity promotion
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
