import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://oz-logistics.com'),
  title: {
    template: '%s | Oz Logistics',
    default: 'Oz Logistics - Professional Freight Forwarding Services',
  },
  description: 'Professional freight forwarding and logistics services. Sea freight, air freight, land transport, and warehousing solutions worldwide. Fast, reliable, and cost-effective shipping.',
  keywords: [
    'freight forwarding',
    'logistics',
    'shipping',
    'sea freight',
    'air freight',
    'land transport',
    'warehousing',
    'international shipping',
    'cargo',
    'supply chain',
    'Oz Logistics'
  ],
  authors: [{ name: 'Oz Logistics' }],
  creator: 'Oz Logistics',
  publisher: 'Oz Logistics',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://oz-logistics.com',
    siteName: 'Oz Logistics',
    title: 'Oz Logistics - Professional Freight Forwarding Services',
    description: 'Professional freight forwarding and logistics services worldwide.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Oz Logistics - Freight Forwarding Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oz Logistics - Professional Freight Forwarding Services',
    description: 'Professional freight forwarding and logistics services worldwide.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  )
}
