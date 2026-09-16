"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    google: any
    googleTranslateElementInit: () => void
  }
}

/**
 * Loads the Google Translate widget on every page so the `googtrans` cookie
 * (set by LanguageToggle) is applied site-wide, not just on the home page.
 * The visible toggle UI lives in LanguageToggle; this only injects the script
 * and the hidden element Google Translate needs to run.
 */
export default function GoogleTranslateLoader() {
  useEffect(() => {
    if (document.getElementById("google-translate-script")) return

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,fr",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element",
      )
    }

    const script = document.createElement("script")
    script.id = "google-translate-script"
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <div id="google_translate_element" style={{ display: "none" }} />
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
