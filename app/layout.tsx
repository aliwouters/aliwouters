import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Alizee Wouters - Bioengineering Student & Researcher",
  description:
    "Alizee Wouters is a UCLA Bioengineering student specializing in neurotechnology, cognitive science, and anatomical engineering. Explore her research, projects, and professional experience in biomedical engineering and AI.",
  keywords: [
    "Alizee Wouters",
    "bioengineering",
    "neurotechnology",
    "cognitive science",
    "UCLA",
    "biomedical engineering",
    "research",
    "anatomical engineering",
    "prosthetics",
    "brain-computer interfaces",
    "MATLAB",
    "Python",
    "CAD design",
    "3D modeling",
  ],
  authors: [{ name: "Alizee Wouters" }],
  creator: "Alizee Wouters",
  publisher: "Alizee Wouters",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alizeewouters.com",
    siteName: "Alizee Wouters Portfolio",
    title: "Alizee Wouters - Bioengineering Student & Researcher",
    description:
      "UCLA Bioengineering student specializing in neurotechnology, cognitive science, and anatomical engineering. Explore research, projects, and professional experience.",
    images: [
      {
        url: "/images/alizee-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Alizee Wouters - Bioengineering Student",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alizee Wouters - Bioengineering Student & Researcher",
    description:
      "UCLA Bioengineering student specializing in neurotechnology, cognitive science, and anatomical engineering.",
    images: ["/images/alizee-photo.jpg"],
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code when available
  },
  category: "portfolio",
  classification: "bioengineering portfolio",
  generator: "Next.js",
  applicationName: "Alizee Wouters Portfolio",
  referrer: "origin-when-cross-origin",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.png",
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}

import "./globals.css"
