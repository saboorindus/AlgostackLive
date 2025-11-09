import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import logo from '@/assets/algo.png';
import favi from '@/assets/alogIcon.png';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Algostack - Innovative Software Development Company',
  description:
    'Leading software development company specializing in web, mobile, AI, and cloud solutions. Transform your business with cutting-edge technology.',
  keywords:
    'software development, web development, mobile apps, AI solutions, cloud services, Algostack, SaaS development, Android apps, graphic design',
  authors: [{ name: 'Algostack' }],
  openGraph: {
    title: 'Algostack - Innovative Software Development Company',
    description:
      'Leading software development company specializing in web, mobile, AI, and cloud solutions.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Algostack',
    images: [
      {
        url: favi.src,
        width: 512,
        height: 512,
        alt: 'Algostack Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Algostack - Innovative Software Development Company',
    description:
      'Leading software development company specializing in web, mobile, AI, and cloud solutions.',
    images: [favi.src],
  },
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
  metadataBase: new URL('https://www.algostack.com'), // replace with your domain
  icons: {
    icon: favi.src, // favicon
    shortcut: favi.src, // old browsers
    apple: logo.src, // iOS
  },
  alternates: {
    canonical: 'https://www.algostack.co', // replace with your main URL
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Algostack',
              url: 'https://www.algostack.co', // replace
              logo: favi.src,
              sameAs: [
                'https://www.linkedin.com/company/algostack-pvt-ltd',
                'https://twitter.com/algostack',
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
