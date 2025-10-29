// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'ICP Smart Services | Federal Authority For Identification and Citizenship',
    template: '%s | ICP Smart Services',
  },
  description: 'Access ICP Smart Services, Emirates ID, Visa Status, and more. Federal Authority for Identity and Citizenship, UAE.',
  keywords: 'ICP, Smart Services, Emirates ID, Visa Status, UAE, Federal Authority, Identity, Citizenship',
  authors: [{ name: 'Federal Authority for Identity and Citizenship, UAE' }],
  robots: 'index, follow',
  
  // Open Graph Meta Tags
  openGraph: {
    type: 'website',
    url: 'https://app.icpsmartservicesuae.com/',
    title: 'ICP Smart Services | Federal Authority For Identification and Citizenship',
    description: 'Access ICP Smart Services, Emirates ID, Visa Status, and more.',
    siteName: 'ICP Smart Services',
    images: [
      {
        url: '/og-image.png', // You need to create this image
        width: 1200,
        height: 630,
        alt: 'ICP Smart Services',
      },
    ],
  },

  // Twitter Card Meta Tags
  twitter: {
    card: 'summary_large_image',
    site: '@icp_uae',
    creator: '@icp_uae',
    title: 'ICP Smart Services | Federal Authority For Identification and Citizenship',
    description: 'Access ICP Smart Services, Emirates ID, Visa Status, and more.',
    images: ['/og-image.png'],
  },

  // Additional Meta
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-config': '/browserconfig.xml',
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
        {/* Preconnect to CDNs for better performance */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Font Awesome 4.7.0 for compatibility */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        
        {/* Additional meta tags for better SEO and PWA support */}
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://app.icpsmartservicesuae.com/" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}