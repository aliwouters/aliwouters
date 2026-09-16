"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { createPortal } from "react-dom"
import LanguageToggle from "@/components/LanguageToggle"

/**
 * Injects the language toggle into each inner page's existing top nav bar,
 * next to the "Home" button, so it matches the home page and scrolls away
 * with the page. The home page renders its own toggle directly in its nav.
 */
export default function NavLanguageToggle() {
  const pathname = usePathname()
  const [mount, setMount] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (pathname === "/") {
      setMount(null)
      return
    }

    const nav = document.querySelector("nav")
    const row = nav?.querySelector<HTMLElement>('[class*="justify-between"]')
    if (!row) {
      setMount(null)
      return
    }

    // Reuse the mount if we already injected into this row.
    let mountEl = row.querySelector<HTMLElement>("[data-lang-mount]")
    if (!mountEl) {
      const right = row.lastElementChild as HTMLElement | null
      mountEl = document.createElement("div")
      mountEl.setAttribute("data-lang-mount", "")
      mountEl.style.display = "flex"
      mountEl.style.alignItems = "center"

      if (right && right.tagName === "DIV") {
        // Right side is already a button group; place the toggle beside the buttons.
        mountEl.style.marginLeft = "0.5rem"
        right.appendChild(mountEl)
      } else if (right) {
        // Right side is a single button; wrap it together with the toggle.
        const wrapper = document.createElement("div")
        wrapper.style.display = "flex"
        wrapper.style.alignItems = "center"
        wrapper.style.gap = "1rem"
        row.insertBefore(wrapper, right)
        wrapper.appendChild(right)
        wrapper.appendChild(mountEl)
      } else {
        row.appendChild(mountEl)
      }
    }

    setMount(mountEl)
  }, [pathname])

  if (!mount) return null
  return createPortal(<LanguageToggle />, mount)
}
