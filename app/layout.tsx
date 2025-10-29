// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

const SITE_URL = 'https://appicpsmartservicesuae.com';
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL), // ✅ CRITICAL for Next.js 14+
  title: 'ICP Smart Services | Federal Authority For Identification and Citizenship',
  description: 'Access ICP Smart Services, Emirates ID, Visa Status, and more. Federal Authority for Identity and Citizenship, UAE.',
  keywords: ['ICP Smart Services', 'Emirates ID', 'UAE Visa', 'Federal Authority', 'Identity and Citizenship'],
  
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'ICP Smart Services | Federal Authority For Identification and Citizenship',
    description: 'Access ICP Smart Services, Emirates ID, Visa Status, and more. Federal Authority for Identity and Citizenship, UAE.',
    siteName: 'ICP Smart Services',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'ICP Smart Services - Federal Authority For Identification and Citizenship',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ICP Smart Services | Federal Authority For Identification and Citizenship',
    description: 'Access ICP Smart Services, Emirates ID, Visa Status, and more.',
    images: [OG_IMAGE],
    site: '@icpuae', // Replace with your actual Twitter handle
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <head>
        {/* Preconnects */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#003366" />

        {/* Canonical */}
        <link rel="canonical" href={SITE_URL} />

        {/* ✅ MANUAL OG TAGS - Critical for WhatsApp/Facebook */}
        <meta property="og:title" content="ICP Smart Services | Federal Authority For Identification and Citizenship" />
        <meta property="og:description" content="Access ICP Smart Services, Emirates ID, Visa Status, and more. Federal Authority for Identity and Citizenship, UAE." />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:url" content={OG_IMAGE} />
        <meta property="og:image:secure_url" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="ICP Smart Services - Federal Authority For Identification and Citizenship" />
        <meta property="og:site_name" content="ICP Smart Services" />
        <meta property="og:locale" content="en_US" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ICP Smart Services | Federal Authority For Identification and Citizenship" />
        <meta name="twitter:description" content="Access ICP Smart Services, Emirates ID, Visa Status, and more." />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content="ICP Smart Services" />

        {/* ✅ WhatsApp Specific */}
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}