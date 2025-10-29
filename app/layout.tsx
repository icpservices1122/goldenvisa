// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

const SITE_URL = 'https://appicpsmartservicesuae.com';
const OG_IMAGE = `${SITE_URL}/banner.png`; // Using existing banner.png from your site

export const metadata: Metadata = {
  title: {
    default: 'ICP Smart Services | Federal Authority For Identity, Citizenship, Customs & Port Security',
    template: '%s | ICP Smart Services',
  },
  description:
    'Access ICP Smart Services, Emirates ID, Visa Status, and more. Federal Authority for Identity, Citizenship, Customs & Port Security, UAE.',
  keywords: [
    'ICP Smart Services',
    'Emirates ID',
    'UAE Visa',
    'Federal Authority UAE',
    'Identity and Citizenship',
    'Golden Services UAE',
    'UAE Residency',
    'GCC Citizens Services',
  ],

  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'ICP Smart Services | Federal Authority For Identity, Citizenship, Customs & Port Security',
    description:
      'Access ICP Smart Services, Emirates ID, Visa Status, and more. Federal Authority for Identity, Citizenship, Customs & Port Security, UAE.',
    siteName: 'ICP Smart Services',
    locale: 'en_US',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'ICP Smart Services - Federal Authority for Identity, Citizenship, Customs & Port Security',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ICP Smart Services | Federal Authority For Identity, Citizenship, Customs & Port Security',
    description:
      'Access ICP Smart Services, Emirates ID, Visa Status, and more.',
    images: [OG_IMAGE],
  },

  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },

  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <head>
        {/* Preconnects for performance */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

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

        {/* Viewport & Theme */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#003366" />

        {/* Optional: Facebook App ID (only if you have one) */}
        {/* <meta property="fb:app_id" content="YOUR_FACEBOOK_APP_ID_HERE" /> */}
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}