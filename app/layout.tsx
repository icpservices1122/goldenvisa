// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

const SITE_URL = 'https://appicpsmartservicesuae.com';

export const metadata: Metadata = {
  title: {
    default: 'ICP Smart Services | Federal Authority For Identification and Citizenship',
    template: '%s | ICP Smart Services',
  },
  description: 'Access ICP Smart Services, Emirates ID, Visa Status, and more. Federal Authority for Identity and Citizenship, UAE.',
  
  // Open Graph Meta Tags - FORCE using favicon.png
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/`,
    title: 'ICP Smart Services | Federal Authority For Identification and Citizenship',
    description: 'Access ICP Smart Services, Emirates ID, Visa Status, and more.',
    siteName: 'ICP Smart Services',
    images: [
      {
        url: `${SITE_URL}/favicon.png`, // FORCE using your favicon.png
        width: 512,
        height: 512,
        alt: 'ICP Smart Services',
      },
    ],
  },

  // Twitter Card Meta Tags
  twitter: {
    card: 'summary_large_image',
    title: 'ICP Smart Services | Federal Authority For Identification and Citizenship',
    description: 'Access ICP Smart Services, Emirates ID, Visa Status, and more.',
    images: [`${SITE_URL}/favicon.png`], // FORCE using your favicon.png
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
        {/* Preconnect to CDNs */}
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
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://appicpsmartservicesuae.com/" />
        
        {/* ICONS - Using ONLY favicon.png */}
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        
        {/* FORCE WHATSAPP TO USE FAVICON.PNG - ADD THESE MANUAL META TAGS */}
        <meta property="og:image" content={`${SITE_URL}/favicon.png`} />
        <meta property="og:image:url" content={`${SITE_URL}/favicon.png`} />
        <meta property="og:image:secure_url" content={`${SITE_URL}/favicon.png`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="ICP Smart Services" />
        
        {/* For WhatsApp specifically */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="ICP Smart Services" />
        
        {/* Twitter fallback */}
        <meta name="twitter:image" content={`${SITE_URL}/favicon.png`} />
        <meta name="twitter:image:src" content={`${SITE_URL}/favicon.png`} />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}