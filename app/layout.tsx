import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const SITE_URL = "https://appicpsmartservicesuae.com"
const OG_IMAGE = `${SITE_URL}/og-image.jpg`

export const metadata: Metadata = {
  title: {
    default: "ICP Smart Services | Federal Authority For Identity, Citizenship, Customs & Port Security",
    template: "%s | ICP Smart Services",
  },
  description:
    "Access ICP Smart Services, Emirates ID, Visa Status, and more. Federal Authority for Identity, Citizenship, Customs & Port Security, UAE.",
  generator: "v0.app",

  metadataBase: new URL(SITE_URL),

  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "ICP Smart Services | Federal Authority For Identity, Citizenship, Customs & Port Security",
    description: "Access ICP Smart Services, Emirates ID, Visa Status, and more.",
    siteName: "ICP Smart Services",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "ICP Smart Services - Federal Authority for Identity, Citizenship, Customs & Port Security",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ICP Smart Services | Federal Authority For Identity, Citizenship, Customs & Port Security",
    description: "Access ICP Smart Services, Emirates ID, Visa Status, and more.",
    images: [OG_IMAGE],
    creator: "@ICPSmartServices",
  },

  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#003366" />

        {/* Preconnects for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
