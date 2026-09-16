"use client"

import type React from "react"
import { Inter } from "next/font/google"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import "./globals.css"
import GoogleTranslateLoader from "@/components/GoogleTranslateLoader"
import NavLanguageToggle from "@/components/NavLanguageToggle"

const inter = Inter({ subsets: ["latin"] })

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
    <html lang="en">
      <body className={inter.className}>
        <GoogleTranslateLoader />
        {children}
        {/* Places the language toggle into each inner page's top nav bar. */}
        <NavLanguageToggle />
      </body>
    </html>
  )
}
