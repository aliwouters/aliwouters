"use client"

import { useEffect, useState } from "react"

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
      if (translateCookie && translateCookie.includes("/fr")) {
        setCurrentLang("fr")
      }
    }

    checkInitialLanguage()

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script")
      script.id = "google-translate-script"
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      script.async = true

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,fr",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element",
        )

        setTimeout(() => {
          setIsReady(true)
        }, 1500)
      }

      document.body.appendChild(script)
    } else {
      setIsReady(true)
    }
  }, [])

  const changeLanguage = (targetLang: "en" | "fr") => {
    const domain = window.location.hostname

    // Clear existing cookies
    document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
    document.cookie = `googtrans=; path=/; domain=${domain}; expires=Thu, 01 Jan 1970 00:00:01 GMT`
    document.cookie = `googtrans=; path=/; domain=.${domain}; expires=Thu, 01 Jan 1970 00:00:01 GMT`

    if (targetLang === "fr") {
      document.cookie = `googtrans=/en/fr; path=/`
      document.cookie = `googtrans=/en/fr; path=/; domain=${domain}`
    } else {
      document.cookie = `googtrans=/en/en; path=/`
      document.cookie = `googtrans=/en/en; path=/; domain=${domain}`
    }

    setTimeout(() => {
      window.location.reload()
    }, 100)
  }

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "fr" : "en"
    setCurrentLang(newLang)
    changeLanguage(newLang)
  }

  return (
    <>
      <div id="google_translate_element" style={{ display: "none" }} />

      <button
        onClick={toggleLanguage}
        disabled={!isReady}
        className={`relative flex items-center w-[68px] h-8 bg-slate-200 rounded-lg p-1 transition-opacity ${!isReady ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-slate-300"}`}
        title={currentLang === "en" ? "Traduire en français" : "Translate to English"}
      >
        {/* Inset sliding square */}
        <div
          className={`absolute w-[30px] h-6 bg-white rounded-md shadow-sm transition-transform duration-300 ease-in-out ${
            currentLang === "fr" ? "translate-x-[30px]" : "translate-x-0"
          }`}
        />
        
        {/* EN label */}
        <span
          className={`relative z-10 w-[30px] text-center text-xs font-semibold transition-all duration-300 ${
            currentLang === "en"
              ? "bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent"
              : "text-slate-400"
          }`}
        >
          EN
        </span>
        
        {/* FR label */}
        <span
          className={`relative z-10 w-[30px] text-center text-xs font-semibold transition-all duration-300 ${
            currentLang === "fr"
              ? "bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent"
              : "text-slate-400"
          }`}
        >
          FR
        </span>
      </button>

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
