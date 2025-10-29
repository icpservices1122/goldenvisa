// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

const SITE_URL = 'https://appicpsmartservicesuae.com';
const OG_IMAGE = `${SITE_URL}/logo-200.png`; // ✅ Use proper OG image

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <head>
        {/* Your existing head content */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        
        {/* ✅ CORRECTED OG TAGS */}
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

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ICP Smart Services | Federal Authority For Identification and Citizenship" />
        <meta name="twitter:description" content="Access ICP Smart Services, Emirates ID, Visa Status, and more." />
        <meta name="twitter:image" content={OG_IMAGE} />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}