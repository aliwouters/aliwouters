"use client"

import { useEffect } from "react"

declare global {
  interface Window { google: any; googleTranslateElementInit: () => void }
}

export default function GoogleTranslateLoader() {
  useEffect(() => {
    let active = true
    let initialized = false
    const setStatus = (status: string) => {
      if (!active) return
      document.documentElement.dataset.translationStatus = status
      window.dispatchEvent(new Event("translation-status"))
    }
    const initialize = () => {
      if (!active || initialized || !window.google?.translate?.TranslateElement) return
      initialized = true
      try {
        new window.google.translate.TranslateElement({ pageLanguage: "en", includedLanguages: "en,fr", autoDisplay: false }, "google_translate_element")
        setStatus("ready")
      } catch { setStatus("unavailable") }
    }
    setStatus("loading")
    window.googleTranslateElementInit = initialize
    let script = document.getElementById("google-translate-script") as HTMLScriptElement | null
    if (!script) {
      script = document.createElement("script")
      script.id = "google-translate-script"
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      script.async = true
      document.body.appendChild(script)
    }
    script.addEventListener("load", initialize)
    const failed = () => setStatus("unavailable")
    script.addEventListener("error", failed)
    initialize()
    const timeout = window.setTimeout(() => { if (!initialized) failed() }, 15000)
    return () => { active = false; window.clearTimeout(timeout); script?.removeEventListener("load", initialize); script?.removeEventListener("error", failed) }
  }, [])
  return <>
    <div id="google_translate_element" style={{ display: "none" }} />
    <style jsx global>{`
      .goog-te-banner-frame,.goog-te-balloon-frame,div#goog-gt-,.skiptranslate,.goog-te-gadget-icon { display:none !important; }
      body { top:0 !important; }
    `}</style>
  </>
}
