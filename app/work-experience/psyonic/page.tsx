import SiteNav from "@/components/SiteNav"

export default function PsyonicPage() {
  return <div className="portfolio-inner case-study min-h-screen bg-white text-[#1b334b]">
    <SiteNav />
    <main id="main-content" className="max-w-6xl mx-auto px-6 lg:px-8 py-12 sm:py-16">
      <header className="internship-introduction">
        <div className="page-introduction">
          <img src="/images/psyonic-logo.png" alt="Psyonic" className="internship-logo" />
          <h1 className="mb-6">Mechatronics Intern</h1>
          <p>I worked on prosthetic testing, manufacturing, and production assembly: recreating a Cybathlon training course, assembling robotic hand control sticks, building an epoxy chamber, and maintaining 3D printers.</p>
          <a href="https://www.psyonic.io/" target="_blank" rel="noopener noreferrer" className="article-source">Psyonic website <span aria-hidden="true">↗</span></a>
        </div>
        <figure><img src="/images/psyonic-lab-setup.png" alt="Prosthetic hand testing environment in the Psyonic laboratory" /><figcaption>The prosthetic hand testing environment.</figcaption></figure>
      </header>
      <section className="editorial-section case-section">
        <h2>Testing with a user</h2>
        <div><h3>Cybathlon course recreation</h3>
          <p>Working alongside a coworker, I built a training course that replicated the Cybathlon competition environment. Their feedback helped identify specific areas for prosthetic improvement.</p>
          <p>Cybathlon is an international competition where people with physical disabilities compete using assistive technologies.</p>
          <a href="https://cybathlon.com/en" target="_blank" rel="noopener noreferrer" className="article-source">About Cybathlon <span aria-hidden="true">↗</span></a>
        </div>
      </section>
      <section className="editorial-section case-section">
        <h2>Production &amp; manufacturing</h2>
        <div><ul className="article-list">
          <li>Production assembly of robotic hand control sticks</li>
          <li>Epoxy chamber construction for manufacturing</li>
          <li>3D printer maintenance and troubleshooting</li>
          <li>User testing protocol development</li>
        </ul>
        <p>The work involved mechatronics system integration, production assembly and quality control, manufacturing process optimization, and cross-functional collaboration.</p></div>
      </section>
      <section className="case-section">
        <div className="editorial-section"><h2>The Ability Hand</h2><p>Psyonic develops a touch-sensing bionic hand. I worked with its grip patterns and force control during testing and the Cybathlon course project.</p></div>
        <div className="article-gallery">
          <figure><img src="/images/psyonic-hand-raspberry.png" alt="Psyonic Ability Hand holding a raspberry" /><figcaption>Fine motor control and touch sensitivity.</figcaption></figure>
          <figure><img src="/images/psyonic-hand-gestures.png" alt="Twelve hand positions and gestures of the Psyonic Ability Hand" /><figcaption>Grip patterns used in testing scenarios.</figcaption></figure>
        </div>
        <figure className="article-reference-image"><img src="/images/psyonic-website.jpeg" alt="Psyonic website showing the touch-sensing bionic hand" /><figcaption>Psyonic's Ability Hand.</figcaption></figure>
      </section>
      <a href="/work-experience" className="article-source">All work experience <span aria-hidden="true">→</span></a>
    </main>
  </div>
}
