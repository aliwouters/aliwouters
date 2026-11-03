"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import LanguageToggle from "@/components/LanguageToggle"

const groups = [
  { href: "/research", label: "Research", links: [
    ["/research/anatomical-engineering", "Anatomical Engineering"],
    ["/research/cognitive-science", "Cognitive Science"],
  ] },
  { href: "/work-experience", label: "Work Experience", links: [
    ["/work-experience/psyonic", "Psyonic"], ["/work-experience/auli-tech", "Auli Tech"],
    ["/work-experience/syntermed", "Syntermed"], ["/work-experience/makerspace", "UCLA Makerspace"],
    ["/work-experience/braave", "Braave"],
  ] },
  { href: "/projects", label: "Projects", links: [
    ["/projects/anatomical-engineering", "Anatomical Engineering"],
    ["/projects/data-science-engineering", "Data Science & Engineering"],
    ["/projects/neurotechnology", "Neurotechnology"], ["/projects/matlab", "Computer Science & MATLAB"],
    ["/projects/experimental-design", "Experimental Design"], ["/projects/personal", "Personal Projects"],
  ] },
  { href: "/community", label: "Community", links: [
    ["/community/plato-society", "Plato Society"], ["/community/school-outreach", "School Outreach"],
    ["/community/lasbc", "Los Angeles Ski and Board Club"],
  ] },
]
const labels = new Map<string, string>([
  ["/resume", "Resume"], ["/projects/computer-science", "Computer Science"],
  ["/projects/neurotechnology/phosphene-simulator", "Phosphene Simulator"],
  ...groups.flatMap(g => [[g.href, g.label], ...g.links] as [string, string][]),
])

export default function SiteNav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const root = useRef<HTMLElement>(null)
  const trigger = useRef<HTMLElement | null>(null)
  useEffect(() => { setMobileOpen(false); setOpenGroup(null) }, [pathname])
  useEffect(() => {
    const outside = (event: PointerEvent) => { if (!root.current?.contains(event.target as Node)) setOpenGroup(null) }
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenGroup(null)
        trigger.current?.focus()
        if (!openGroup) setMobileOpen(false)
      }
    }
    document.addEventListener("pointerdown", outside)
    document.addEventListener("keydown", escape)
    return () => { document.removeEventListener("pointerdown", outside); document.removeEventListener("keydown", escape) }
  }, [openGroup])
  const active = (href: string) => pathname === href || pathname.startsWith(href + "/")
  const crumbs = pathname.split("/").filter(Boolean).map((_, i, parts) => {
    const href = "/" + parts.slice(0, i + 1).join("/")
    return { href, label: labels.get(href) || parts[i].replaceAll("-", " ") }
  })
  const groupControl = (group: typeof groups[number], mobile: boolean) => {
    const open = openGroup === group.href
    const id = `${mobile ? "mobile" : "desktop"}-${group.href.slice(1)}-pages`
    return <div key={group.href} className="nav-group" onMouseEnter={() => { if (!mobile && window.matchMedia("(hover: hover)").matches) setOpenGroup(group.href) }} onMouseLeave={event => { if (!mobile && !event.currentTarget.querySelector(":focus-visible")) setOpenGroup(null) }} onBlur={event => {
      if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpenGroup(value => value === group.href ? null : value)
    }}>
      <div className="nav-group-control">
        <a href={group.href} onKeyDown={event => { if (event.key === "ArrowDown") { event.preventDefault(); trigger.current = event.currentTarget; setOpenGroup(group.href) } }} aria-current={active(group.href) ? "page" : undefined}>{group.label}</a>
        <button type="button" aria-label={`${open ? "Hide" : "Show"} ${group.label} pages`} aria-expanded={open} aria-controls={id} onClick={event => {
          trigger.current = event.currentTarget
          setOpenGroup(open ? null : group.href)
        }}><span aria-hidden="true">{open ? "−" : "+"}</span></button>
      </div>
      {open && <div id={id} className="nav-group-pages">
        <a href={group.href} className="nav-overview">All {group.label.toLowerCase()} <span aria-hidden="true">→</span></a>
        {group.links.map(([href, label]) => <a key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</a>)}
      </div>}
    </div>
  }
  return <header ref={root} className="site-nav">
    <a className="skip-navigation" href="#main-content">Skip to content</a>
    <div className="site-nav-row">
      <a href="/" className="site-name" aria-label="Alizee Wouters — Home">Alizee Wouters</a>
      <nav className="site-nav-desktop" aria-label="Main navigation">
        <a href="/" aria-current={pathname === "/" ? "page" : undefined}>Home</a>
        <a href="/resume" aria-current={pathname === "/resume" ? "page" : undefined}>Resume</a>
        {groups.map(group => groupControl(group, false))}
        <LanguageToggle />
      </nav>
      <div className="site-nav-mobile-controls"><LanguageToggle /><button type="button" aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen(v => !v)}>{mobileOpen ? "Close" : "Menu"}</button></div>
    </div>
    {mobileOpen && <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">
      <a href="/" aria-current={pathname === "/" ? "page" : undefined}>Home</a>
      <a href="/resume" aria-current={pathname === "/resume" ? "page" : undefined}>Resume</a>
      {groups.map(group => groupControl(group, true))}
    </nav>}
    {pathname !== "/" && <nav className="site-breadcrumbs" aria-label="Breadcrumb"><ol>
      <li><a href="/">Home</a></li>
      {crumbs.map((crumb, i) => <li key={crumb.href}><span aria-hidden="true">/</span>{i === crumbs.length - 1 ? <span aria-current="page">{crumb.label}</span> : <a href={crumb.href}>{crumb.label}</a>}</li>)}
    </ol></nav>}
  </header>
}
