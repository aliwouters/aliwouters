import SiteNav from "@/components/SiteNav"

const experiments = [
  {
    "title": "Audiovisual Perception Study",
    "description": "Examines how sound affects perception of an animation. Two circles meet behind a square while a bonk or whoosh plays, and participants judge whether they bounced or passed through. The program randomizes sound conditions, records responses, and saves results.",
    "githubUrl": "https://github.com/aliwouters/MatLab-Projects/blob/main/Psych20BHomework7.m",
    "video": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Recording%202025-09-06%20195651-Mcm7rvXFNPhCnYvtfipVh4jI3xOCuq.mp4"
  },
  {
    "title": "Auditory Reaction Time Experiment",
    "description": "Runs an auditory reaction-time experiment. Participants hear a tone in the left ear, right ear, or both, and press the spacebar when it plays. The program records response times, manages subject IDs, and saves results using PsychPortAudio.",
    "githubUrl": "https://github.com/aliwouters/MatLab-Projects/blob/main/Psych20BHomework6.m",
    "video": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Recording%202025-09-06%20200436-U8J4XyGUd0L86sRTm7WDLo0RCMCh3U.mp4"
  },
  {
    "title": "Self-Assessment Manikin (SAM) Tool",
    "description": "Creates an interactive mood-rating tool with the Self-Assessment Manikin (SAM). The program slices icons from an image, highlights them on hover, and lets users select one to match their mood. It handles real-time mouse tracking, screen drawing, and saves the data.",
    "githubUrl": "https://github.com/aliwouters/MatLab-Projects/blob/main/Psych20BHomework5.m",
    "video": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250907-0310-12.8199673-Xta2MQBZZJMb0IueJt2NEGvVqJ7anV.mp4"
  },
  {
    "title": "Visual Change Detection with Mouse Response",
    "description": "This MATLAB/Psychtoolbox project measures visual change detection with mouse responses. In each trial, two blue circles appear; after a random delay, one circle briefly changes luminance (lighter or darker). Participants click the circle that changed as fast as possible. The program randomizes trial types and delays, records response times and accuracy, and saves results to a subject-specific .mat file.",
    "githubUrl": "https://github.com/aliwouters/MatLab-Projects/blob/main/Psych20BHomework8.m",
    "video": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Recording%202025-09-06%20203545-bofEP6MwBQs3pT2rR2rXhjn5tzhCh4.mp4"
  },
  {
    "title": "Visual Reaction Time Experiment",
    "description": "Implements a reaction-time experiment in Psychtoolbox. A yellow circle changes color, shape, or position after a random delay, and participants press the spacebar as quickly as possible. The program measures response times, randomizes trials, and saves results.",
    "githubUrl": "https://github.com/aliwouters/MatLab-Projects/blob/main/Psych20BHomework4.m",
    "video": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Recording%202025-09-06%20201736-YHHSupNymvOEdUYmPF0ubGVpGTkfYu.mp4"
  }
]

export default function ExperimentalDesignPage() {
  return <div className="portfolio-inner case-study min-h-screen bg-white text-[#1b334b]">
    <SiteNav />
    <main id="main-content" className="max-w-6xl mx-auto px-6 lg:px-8 py-12 sm:py-16">
      <header className="page-introduction">
        <h1 className="mb-5">Experimental Design</h1>
        <p>MATLAB and Psychtoolbox experiments in perception, reaction time, and mood assessment.</p>
      </header>
      {experiments.map((experiment, index) => <section key={experiment.githubUrl} className="experiment-article case-section">
        <div><span className="article-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <h2>{experiment.title}</h2><p>{experiment.description}</p>
          <a href={experiment.githubUrl} target="_blank" rel="noopener noreferrer" className="article-source">View MATLAB code <span aria-hidden="true">↗</span></a>
        </div>
        <video controls playsInline preload="metadata" aria-label={`${experiment.title} demonstration`}><source src={experiment.video} type="video/mp4" />Your browser does not support this video.</video>
      </section>)}
      <a href="/projects/matlab" className="article-source">All Computer Science &amp; MATLAB projects <span aria-hidden="true">→</span></a>
    </main>
  </div>
}
