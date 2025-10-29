// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

const SITE_URL = 'https://appicpsmartservicesuae.com';

// ✅ Consistent image URLs using the same logic
const OG_IMAGE = `${SITE_URL}/og-image.jpg`; // WhatsApp/Facebook image
const FAVICON = `${SITE_URL}/favicon.png`;   // Favicon

export const metadata: Metadata = {
  title: 'ICP Smart Services | Federal Authority For Identification and Citizenship',
  description: 'Access ICP Smart Services, Emirates ID, Visa Status, and more. Federal Authority for Identity and Citizenship, UAE.',
  metadataBase: new URL(SITE_URL),

  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'ICP Smart Services | Federal Authority For Identification and Citizenship',
    description: 'Access ICP Smart Services, Emirates ID, Visa Status, and more.',
    siteName: 'ICP Smart Services',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'ICP Smart Services',
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
  },

  // ✅ Favicon metadata using same logic
  icons: {
    icon: FAVICON,
    shortcut: FAVICON,
    apple: FAVICON,
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />

        {/* Meta Basics */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* ✅ FAVICON TAGS - Using same URL logic */}
        <link rel="icon" type="image/png" href={FAVICON} />
        <link rel="shortcut icon" href={FAVICON} />
        <link rel="apple-touch-icon" href={FAVICON} />
        <link rel="icon" type="image/x-icon" href={FAVICON} />

        {/* ✅ CORRECTED OG TAGS for WhatsApp/Facebook */}
        <meta property="og:title" content="ICP Smart Services | Federal Authority For Identification and Citizenship" />
        <meta property="og:description" content="Access ICP Smart Services, Emirates ID, Visa Status, and more. Federal Authority for Identity and Citizenship, UAE." />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:url" content={OG_IMAGE} />
        <meta property="og:image:secure_url" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="ICP Smart Services" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ICP Smart Services" />
        <meta property="og:locale" content="en_US" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ICP Smart Services | Federal Authority For Identification and Citizenship" />
        <meta name="twitter:description" content="Access ICP Smart Services, Emirates ID, Visa Status, and more." />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* ✅ Additional WhatsApp Optimization */}
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}