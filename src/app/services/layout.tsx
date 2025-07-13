import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Freight Forwarding Services',
  description: 'Comprehensive freight forwarding and logistics services including sea freight, air freight, land transport, and warehousing solutions worldwide.',
  keywords: [
    'freight forwarding services',
    'sea freight',
    'air freight', 
    'land transport',
    'warehousing',
    'logistics services',
    'international shipping',
    'cargo services'
  ],
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
