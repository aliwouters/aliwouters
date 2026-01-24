"use client"

import React from "react"

import { useEffect, useState, useRef, useCallback } from "react"

declare global {
  interface Window {
    google: any
    googleTranslateElementInit: () => void
  }
}

export default function LanguageToggle() {
  const [currentLang, setCurrentLang] = useState<"en" | "fr">("en")
  const [isReady, setIsReady] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const startXRef = useRef(0)
  const startOffsetRef = useRef(0)

  const SLIDER_WIDTH = 30
  const MAX_OFFSET = 30

  useEffect(() => {
    const checkInitialLanguage = () => {
      const translateCookie = document.cookie.split("; ").find((row) => row.startsWith("googtrans="))
      if (translateCookie && translateCookie.includes("/fr")) {
        setCurrentLang("fr")
        setDragOffset(MAX_OFFSET)
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

  const snapToPosition = useCallback((offset: number) => {
    const midpoint = MAX_OFFSET / 2
    const newLang = offset > midpoint ? "fr" : "en"
    const newOffset = offset > midpoint ? MAX_OFFSET : 0
    
    setDragOffset(newOffset)
    
    if (newLang !== currentLang) {
      setCurrentLang(newLang)
      changeLanguage(newLang)
    }
  }, [currentLang])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isReady) return
    e.preventDefault()
    setIsDragging(true)
    startXRef.current = e.clientX
    startOffsetRef.current = dragOffset
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isReady) return
    setIsDragging(true)
    startXRef.current = e.touches[0].clientX
    startOffsetRef.current = dragOffset
  }

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging) return
    const delta = clientX - startXRef.current
    const newOffset = Math.max(0, Math.min(MAX_OFFSET, startOffsetRef.current + delta))
    setDragOffset(newOffset)
  }, [isDragging])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    handleMove(e.clientX)
  }, [handleMove])

  const handleTouchMove = useCallback((e: TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }, [handleMove])

  const handleEnd = useCallback(() => {
    if (!isDragging) return
    setIsDragging(false)
    snapToPosition(dragOffset)
  }, [isDragging, dragOffset, snapToPosition])

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleEnd)
      window.addEventListener("touchmove", handleTouchMove)
      window.addEventListener("touchend", handleEnd)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleEnd)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleEnd)
    }
  }, [isDragging, handleMouseMove, handleTouchMove, handleEnd])

  const handleClick = (e: React.MouseEvent) => {
    if (!isReady) return
    // Only toggle on click if we weren't dragging
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    
    const clickX = e.clientX - rect.left
    const midpoint = rect.width / 2
    const newLang = clickX > midpoint ? "fr" : "en"
    const newOffset = clickX > midpoint ? MAX_OFFSET : 0
    
    setDragOffset(newOffset)
    
    if (newLang !== currentLang) {
      setCurrentLang(newLang)
      changeLanguage(newLang)
    }
  }

  // Calculate which language appears selected based on current drag position
  const visualLang = dragOffset > MAX_OFFSET / 2 ? "fr" : "en"

  return (
    <>
      <div id="google_translate_element" style={{ display: "none" }} />

      <div
        ref={containerRef}
        onClick={handleClick}
        className={`relative flex items-center w-[68px] h-8 bg-slate-200 rounded-lg p-1 select-none ${!isReady ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-slate-300"}`}
        title={currentLang === "en" ? "Traduire en français" : "Translate to English"}
      >
        {/* Inset sliding square */}
        <div
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          className={`absolute w-[30px] h-6 bg-white rounded-md shadow-sm ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          style={{
            transform: `translateX(${dragOffset}px)`,
            transition: isDragging ? "none" : "transform 300ms ease-in-out",
          }}
        />
        
        {/* EN label */}
        <span
          className={`relative z-10 w-[30px] text-center text-xs font-semibold pointer-events-none ${
            visualLang === "en"
              ? "bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent"
              : "text-slate-400"
          }`}
          style={{ transition: isDragging ? "none" : "all 300ms" }}
        >
          EN
        </span>
        
        {/* FR label */}
        <span
          className={`relative z-10 w-[30px] text-center text-xs font-semibold pointer-events-none ${
            visualLang === "fr"
              ? "bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent"
              : "text-slate-400"
          }`}
          style={{ transition: isDragging ? "none" : "all 300ms" }}
        >
          FR
        </span>
      </div>

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
