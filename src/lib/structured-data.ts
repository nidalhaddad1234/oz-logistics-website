export const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Oz Logistics',
  url: 'https://oz-logistics.com',
  logo: 'https://oz-logistics.com/logo.png',
  description: 'Professional freight forwarding and logistics services worldwide. Sea freight, air freight, land transport, and warehousing solutions.',
  foundingDate: '2020',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Logistics Ave',
    addressLocality: 'Port City',
    addressRegion: 'PC',
    postalCode: '12345',
    addressCountry: 'US'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567',
    contactType: 'customer service',
    areaServed: 'Worldwide',
    availableLanguage: ['English']
  },
  sameAs: [
    'https://www.facebook.com/ozlogistics',
    'https://www.linkedin.com/company/oz-logistics',
    'https://twitter.com/ozlogistics'
  ],
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide'
  },
  serviceType: [
    'Freight Forwarding',
    'Sea Freight',
    'Air Freight',
    'Land Transport',
    'Warehousing',
    'Customs Clearance',
    'Logistics Services'
  ]
}

export const serviceStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freight Forwarding',
  provider: {
    '@type': 'Organization',
    name: 'Oz Logistics'
  },
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Logistics Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sea Freight',
          description: 'Cost-effective ocean shipping for large volume cargo worldwide.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Air Freight',
          description: 'Fast and secure air cargo services for time-sensitive shipments.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Land Transport',
          description: 'Reliable ground transportation for regional and domestic deliveries.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Warehousing',
          description: 'Secure storage and distribution solutions with modern facilities.'
        }
      }
    ]
  }
}

export const breadcrumbStructuredData = (items: Array<{name: string, item: string}>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.item
  }))
})
