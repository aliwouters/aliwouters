"use client"

import type React from "react"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import "./globals.css"
import GoogleTranslateLoader from "@/components/GoogleTranslateLoader"


export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top whenever the route changes
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
        <GoogleTranslateLoader />
        {children}
      </>
  )
}
