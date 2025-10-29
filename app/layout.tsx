// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

// ✅ Use your actual domain
const SITE_URL = 'https://appicpsmartservicesuae.com';
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const metadata: Metadata = {
  title: {
    default: 'ICP Smart Services | Federal Authority For Identification and Citizenship',
    template: '%s | ICP Smart Services',
  },
  description:
    'Access ICP Smart Services, Emirates ID, Visa Status, and more. Federal Authority for Identity and Citizenship, UAE.',

  openGraph: {
    type: 'website',
    url: `${SITE_URL}/`,
    title: 'ICP Smart Services | Federal Authority For Identification and Citizenship',
    description:
      'Access ICP Smart Services, Emirates ID, Visa Status, and more.',
    siteName: 'ICP Smart Services',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'ICP Smart Services',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ICP Smart Services | Federal Authority For Identification and Citizenship',
    description:
      'Access ICP Smart Services, Emirates ID, Visa Status, and more.',
    images: [OG_IMAGE],
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
        {/* Preconnects for performance */}
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

        {/* Meta Basics */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href={SITE_URL} />

        {/* Icons */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* ✅ Facebook App ID - Get this from Facebook Developers */}
        <meta property="fb:app_id" content="YOUR_FACEBOOK_APP_ID_HERE" />

        {/* Open Graph / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ICP Smart Services | Federal Authority For Identification and Citizenship" />
        <meta property="og:description" content="Access ICP Smart Services, Emirates ID, Visa Status, and more." />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:secure_url" content={OG_IMAGE} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ICP Smart Services" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ICP Smart Services | Federal Authority For Identification and Citizenship" />
        <meta name="twitter:description" content="Access ICP Smart Services, Emirates ID, Visa Status, and more." />
        <meta name="twitter:image" content={OG_IMAGE} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}