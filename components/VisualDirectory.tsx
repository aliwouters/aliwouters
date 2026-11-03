"use client"

import { useEffect, useState } from "react"
import type { CategoryTileItem } from "@/components/category-tile"

type Media = { src: string; alt: string; fit?: "contain" | "cover"; type?: "video"; credit?:string; source?:string; position?:string }
const media: Record<string, Media> = {
  "/projects/data-science-engineering": { src: "/images/psych-20119d-20poster-20-281-29-1.jpeg", alt: "U-Net image colorization research poster", fit: "contain" },
  "/projects/anatomical-engineering": { src: "/images/ankle-exo-side-view.png", alt: "Ankle exoskeleton from the first anatomical engineering project", fit: "contain" },
  "/projects/neurotechnology": { src: "/images/phosphene-simulator.png", alt: "Phosphene vision simulator", fit: "contain" },
  "/projects/matlab": { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Recording%202026-01-11%20143008%20%281%29%20%281%29-BwiqkcP1hmr9yRhiiDGoi76FzieFCl.mp4", alt: "Monster Maze ASCII game demonstration", type: "video", fit: "contain" },
  "/projects/experimental-design": { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Recording%202025-09-06%20195651-Mcm7rvXFNPhCnYvtfipVh4jI3xOCuq.mp4", alt: "Audiovisual perception experiment demonstration", type: "video", fit: "contain" },
  "/projects/personal": { src: "/images/personal-knife-box.jpeg", alt: "Handmade wooden knife box" },
  "/community/plato-society": { src: "/images/plato-society-meeting.jpeg", alt: "Plato Society discussion meeting" },
  "/community/school-outreach": { src: "/images/workshop-wooden-maze.jpeg", alt: "Wooden maze project from the makerspace workshops" },
  "/community/lasbc": { src: "/images/lasbc-group-photo.png", alt: "Los Angeles Ski and Board Club group" },
  "/research/cognitive-science": { src: "/images/sourced/zili-lab-banner.jpg", alt: "Perceptual Processing and Computational Lab, principal investigator Zili Liu", fit: "contain", credit: "Zili Lab, UCLA", source: "https://zililab.psych.ucla.edu/" },
  "/research/anatomical-engineering": { src: "/images/lab-motion-capture.png", alt: "Motion capture in the anatomical engineering lab" },
  "/work-experience/psyonic": { src: "/images/psyonic-lab-setup.png", alt: "Psyonic laboratory and Ability Hand", fit: "contain" },
  "/work-experience/auli-tech": { src: "/images/cato-device.png", alt: "Cato assistive device", fit: "contain" },
  "/work-experience/syntermed": { src: "/images/fdg-pet-montage.png", alt: "FDG-PET brain imaging analysis", fit: "contain" },
  "/work-experience/makerspace": { src: "/images/sourced/olympic-makerspace-team.png", alt: "Makerspace on the Hill team at UCLA Olympic Hall", position: "center bottom", credit: "UCLA Residential Life", source: "https://reslife.ucla.edu/learning-centers" },
  "/work-experience/braave": { src: "/images/braave-sensor-bra.png", alt: "Braave wearable sensor garment", fit: "contain" },
}
const textPreviews: Record<string, string[]> = {
  "/projects/experimental-design": ["Audiovisual Perception", "Auditory Reaction Time", "Visual Change Detection"],
}
export type DirectoryItem = CategoryTileItem & { eyebrow?: string; logo?: string }

export default function VisualDirectory({ items, label }: { items: DirectoryItem[]; label: string }) {
  const [reducedMotion, setReducedMotion] = useState(true)
  useEffect(() => { const preference = window.matchMedia("(prefers-reduced-motion: reduce)"); const update = () => setReducedMotion(preference.matches); update(); preference.addEventListener("change",update); return () => preference.removeEventListener("change",update) }, [])
  const renderMedia = (item: Media, mobile = false) => item.type === "video" ? <video key={item.src} src={item.src} muted loop playsInline autoPlay={!reducedMotion} preload="metadata" className={mobile ? "directory-mobile-image" : "media-contained"} aria-label={item.alt} /> : <img key={item.src} src={item.src} alt={mobile ? item.alt : ""} className={mobile ? "directory-mobile-image" : item.fit === "contain" ? "media-contained" : ""} style={{objectPosition:item.position}} loading={mobile ? "lazy" : "eager"} />
  const [selected, setSelected] = useState(0)
  const current = items[selected]
  const currentMedia = media[current.href]
  return <div className="visual-directory" aria-label={label}>
    <figure className="directory-preview" aria-hidden="true">
      <div className="directory-preview-image">
        {currentMedia ? renderMedia(currentMedia) : <div className="directory-text-preview"><span className="directory-preview-title">{current.title}</span>{(textPreviews[current.href] || current.tags).map(line => <span key={line}>{line}</span>)}</div>}
      </div>
      <figcaption><span>{current.eyebrow || current.title}{currentMedia?.credit && <small className="directory-credit">Image: {currentMedia.credit}</small>}</span><span className="directory-count">{String(selected + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span></figcaption>
    </figure>
    <div className="directory-entries">
      {items.map((item, index) => <a key={item.href} href={item.href} className="directory-entry" data-selected={index === selected} onMouseEnter={() => setSelected(index)} onFocus={() => setSelected(index)}>
        <span className="directory-entry-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        <div className="directory-entry-content">
          {item.logo && <img className="directory-company-logo" src={item.logo} alt={item.eyebrow || ""} />}
          {item.eyebrow && <p className="directory-eyebrow">{item.eyebrow}</p>}
          <h2>{item.title}</h2>
          <p className="directory-description">{item.description}</p>
          {item.tags.length > 0 && <p className="directory-topics">{item.tags.join(" · ")}</p>}
          {media[item.href] && renderMedia(media[item.href], true)}
          <span className="directory-action">View {label === "Work experience" ? "experience" : label === "Projects" ? "projects" : label === "Research" ? "research" : "details"}<span aria-hidden="true">→</span></span>
        </div>
      </a>)}
    </div>
  </div>
}
