"use client"

import { useEffect, useState } from "react"

export default function LanguageToggle() {
  const [language, setLanguage] = useState<"en" | "fr">("en")
  const [translationStatus, setTranslationStatus] = useState("loading")
  useEffect(() => {
    const cookie = document.cookie.split("; ").find(value => value.startsWith("googtrans="))
    if (cookie?.includes("/fr")) setLanguage("fr")
    const update = () => setTranslationStatus(document.documentElement.dataset.translationStatus || "loading")
    update()
    window.addEventListener("translation-status", update)
    return () => window.removeEventListener("translation-status", update)
  }, [])
  function changeLanguage(next: "en" | "fr") {
    if (next === language) return
    const hostname = window.location.hostname
    for (const domain of ["", `; domain=${hostname}`, `; domain=.${hostname}`]) {
      document.cookie = `googtrans=; path=/; max-age=0${domain}`
      document.cookie = `googtrans=/en/${next}; path=/; SameSite=Lax${domain}`
    }
    setLanguage(next)
    window.location.reload()
  }
  return <div className="language-control"><div className="language-switch notranslate" translate="no" role="group" aria-label="Website language">
    <button type="button" lang="en" aria-label="View site in English" aria-pressed={language === "en"} onClick={() => changeLanguage("en")}>EN</button>
    <button type="button" lang="fr" aria-label="Voir le site en français" aria-pressed={language === "fr"} onClick={() => changeLanguage("fr")}>FR</button>
  </div>
    {language === "fr" && translationStatus === "unavailable" && <span className="translation-unavailable" role="status">French translation couldn't load. <button type="button" onClick={() => window.location.reload()}>Retry</button></span>}
  </div>
}
