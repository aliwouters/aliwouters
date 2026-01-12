"use client"

import { useEffect, useState } from "react"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

declare global {
  interface Window {
    google: any
    googleTranslateElementInit: () => void
  }
}

export default function LanguageToggle() {
  const [currentLang, setCurrentLang] = useState<"en" | "fr">("en")
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const checkInitialLanguage = () => {
      const translateCookie = document.cookie.split("; ").find((row) => row.startsWith("googtrans="))
      console.log("[v0] Initial cookie:", translateCookie)

      if (translateCookie && translateCookie.includes("/fr")) {
        console.log("[v0] Setting initial language to French")
        setCurrentLang("fr")
      }
    }

    checkInitialLanguage()

    if (!document.getElementById("google-translate-script")) {
      console.log("[v0] Loading Google Translate script")
      const script = document.createElement("script")
      script.id = "google-translate-script"
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      script.async = true

      window.googleTranslateElementInit = () => {
        console.log("[v0] Google Translate initialized")
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,fr",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element",
        )

        setTimeout(() => {
          console.log("[v0] Toggle ready")
          setIsReady(true)
        }, 2000)
      }

      document.body.appendChild(script)
    } else {
      console.log("[v0] Script already loaded")
      setIsReady(true)
    }
  }, [])

  const changeLanguage = (targetLang: "en" | "fr") => {
    console.log("[v0] ========================================")
    console.log("[v0] Button clicked! Target language:", targetLang)
    console.log("[v0] Current language:", currentLang)
    console.log("[v0] ========================================")

    const domain = window.location.hostname
    console.log("[v0] Domain:", domain)

    // Clear existing cookies
    document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
    document.cookie = `googtrans=; path=/; domain=${domain}; expires=Thu, 01 Jan 1970 00:00:01 GMT`
    document.cookie = `googtrans=; path=/; domain=.${domain}; expires=Thu, 01 Jan 1970 00:00:01 GMT`

    if (targetLang === "fr") {
      console.log("[v0] Setting French cookie and reloading")
      document.cookie = `googtrans=/en/fr; path=/`
      document.cookie = `googtrans=/en/fr; path=/; domain=${domain}`
    } else {
      console.log("[v0] Setting English cookie and reloading")
      document.cookie = `googtrans=/en/en; path=/`
      document.cookie = `googtrans=/en/en; path=/; domain=${domain}`
    }

    console.log("[v0] Cookie after setting:", document.cookie)
    console.log("[v0] Reloading page...")

    setTimeout(() => {
      window.location.reload()
    }, 100)
  }

  const toggleLanguage = () => {
    console.log("[v0] Toggle clicked")
    const newLang = currentLang === "en" ? "fr" : "en"
    console.log("[v0] Switching from", currentLang, "to", newLang)
    changeLanguage(newLang)
  }

  return (
    <>
      <div id="google_translate_element" style={{ display: "none" }} />

      <Button
        onClick={toggleLanguage}
        variant="ghost"
        size="sm"
        className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors"
        disabled={!isReady}
        title={currentLang === "en" ? "Traduire en français" : "Translate to English"}
      >
        <Globe className="w-4 h-4" />
        <span className="font-medium">{currentLang === "en" ? "FR" : "EN"}</span>
      </Button>

      <style jsx global>{`
        .goog-te-banner-frame,
        .goog-te-balloon-frame,
        div#goog-gt-,
        .skiptranslate,
        .goog-te-gadget-icon {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
      `}</style>
    </>
  )
}
