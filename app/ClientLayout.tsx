"use client"

import type React from "react"
import { Inter } from "next/font/google"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { Globe } from "lucide-react"
import "./globals.css"
import GoogleTranslateLoader from "@/components/GoogleTranslateLoader"
import LanguageToggle from "@/components/LanguageToggle"

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

  useEffect(() => {
    // The real <body> is owned by the root layout, so toggle the clearance
    // class directly on it. Inner pages get room in their nav for the fixed toggle.
    document.body.classList.toggle("with-fixed-lang", pathname !== "/")
  }, [pathname])

  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleTranslateLoader />
        {children}
        {/* Global language toggle in the top-right corner. The home page keeps its own toggle in the nav bar. */}
        {pathname !== "/" && (
          <div className="fixed top-4 right-4 z-[70] flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md py-1.5 pl-3 pr-2 shadow-lg border border-slate-200/70">
            <Globe className="w-4 h-4 text-slate-500" />
            <LanguageToggle />
          </div>
        )}
      </body>
    </html>
  )
}
