// app/layout.tsx
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

const SITE_URL = "https://appicpsmartservicesuae.com"
const OG_IMAGE = `${SITE_URL}/og-image.jpg`

export const metadata: Metadata = {
  title: {
    default: "Visa Vert | Federal Authority For Identity, Citizenship, Customs & Port Security",
    template: "%s | Visa Vert",
  },
  description: "Access Visa Vert Services, Emirates ID, Visa Status, and more. Federal Authority for Identity, Citizenship, Customs & Port Security, UAE.",
  generator: "v0.app",
  keywords: "visa, immigration, uae visa, emirates id, icp services, federal authority, citizenship, customs, port security",
  authors: [{ name: "Visa Vert Federal Services" }],

  metadataBase: new URL(SITE_URL),

  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Visa Vert | Federal Authority For Identity, Citizenship, Customs & Port Security",
    description: "Access Visa Vert Services, Emirates ID, Visa Status, and more.",
    siteName: "Visa Vert",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Visa Vert - Federal Authority for Identity, Citizenship, Customs & Port Security",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Visa Vert | Federal Authority For Identity, Citizenship, Customs & Port Security",
    description: "Access Visa Vert Services, Emirates ID, Visa Status, and more.",
    images: [OG_IMAGE],
    creator: "@VisaVertGov",
  },

  icons: {
    icon: "/logo1.png",
    apple: "/logo1.png",
  },

  // Additional Meta
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#003366" />

        {/* Favicon */}
        <link rel="icon" href="/logo1.png" />
        <link rel="apple-touch-icon" href="/logo1.png" />
        <link rel="shortcut icon" href="/logo1.png" type="image/png" />
        
        {/* CRITICAL: Additional meta tags for WhatsApp */}
        <meta property="og:title" content="Visa Vert | Federal Authority For Identity, Citizenship, Customs & Port Security" />
        <meta property="og:description" content="Access Visa Vert Services, Emirates ID, Visa Status, and more." />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Visa Vert" />
        
        {/* Additional important tags */}
        <meta name="description" content="Access Visa Vert Services, Emirates ID, Visa Status, and more. Federal Authority for Identity, Citizenship, Customs & Port Security, UAE." />
        
        {/* Additional platform-specific tags */}
        <meta name="author" content="Federal Authority for Identity, Citizenship, Customs & Port Security" />
        <meta name="copyright" content="Visa Vert Federal Services" />
        <meta name="classification" content="Government Services, Visa, Immigration" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="language" content="EN" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        
        {/* Dublin Core Metadata */}
        <meta name="DC.title" content="Visa Vert | Federal Authority For Identity, Citizenship, Customs & Port Security" />
        <meta name="DC.creator" content="Federal Authority for Identity, Citizenship, Customs & Port Security" />
        <meta name="DC.subject" content="Visa; Immigration; Emirates ID; ICP Services" />
        <meta name="DC.description" content="Access Visa Vert Services, Emirates ID, Visa Status, and more." />
        <meta name="DC.publisher" content="Visa Vert Federal Services" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.language" content="EN" />
        
        {/* Facebook Specific */}
        <meta property="fb:app_id" content="123456789012345" />
        <meta property="fb:pages" content="1234567890" />
        
        {/* Twitter Additional */}
        <meta name="twitter:site" content="@VisaVertGov" />
        <meta name="twitter:creator" content="@VisaVertGov" />
        <meta name="twitter:label1" content="Service Type" />
        <meta name="twitter:data1" content="Government Services" />
        <meta name="twitter:label2" content="Location" />
        <meta name="twitter:data2" content="United Arab Emirates" />
        
        {/* WhatsApp Specific */}
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Visa Vert - Federal Authority for Identity, Citizenship, Customs & Port Security" />
        <meta property="og:updated_time" content="2024-01-15T12:00:00+04:00" />
        
        {/* iOS Specific */}
        <meta name="apple-mobile-web-app-title" content="Visa Vert" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Microsoft Specific */}
        <meta name="msapplication-TileColor" content="#0054a6" />
        <meta name="msapplication-TileImage" content="/logo1.png" />
        
        {/* Android Specific */}
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Preconnects for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Load Font Awesome 4.7.0 for compatibility with old icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        
        {/* Preload critical resources */}
        <link rel="preload" href={OG_IMAGE} as="image" />
      </head>
      <body className={`${geist.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}