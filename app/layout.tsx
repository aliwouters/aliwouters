import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ClientLayout from "./ClientLayout"


export const metadata: Metadata = {
  title: "Alizee Wouters",
  description:
    "Biomedical Engineering graduate student at Georgia Tech and Emory specializing in neurotechnology, brain-computer interfaces, and cognitive science. Experienced in research, prosthetic development, and assistive technology.",
  keywords: [
    "Alizee Wouters",
    "bioengineering",
    "neurotechnology",
    "brain-computer interfaces",
    "UCLA",
    "cognitive science",
    "prosthetics",
    "research",
    "neuroscience",
    "artificial intelligence",
    "machine learning",
    "signal processing",
    "EEG",
    "assistive technology",
    "robotics",
  ],
  authors: [{ name: "Alizee Wouters" }],
  creator: "Alizee Wouters",
  publisher: "Alizee Wouters",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://alizee.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alizee Wouters",
    description:
      "Biomedical Engineering graduate student at Georgia Tech and Emory specializing in neurotechnology, brain-computer interfaces, and cognitive science.",
    url: "https://alizee.me",
    siteName: "Alizee Wouters",
    images: [
      {
        url: "/images/alizee-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Alizee Wouters - Bioengineering Student & Researcher",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alizee Wouters",
    description:
      "Biomedical Engineering graduate student at Georgia Tech and Emory specializing in neurotechnology, brain-computer interfaces, and cognitive science.",
    images: ["/images/alizee-photo.jpg"],
  },
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
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="portfolio-font">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
