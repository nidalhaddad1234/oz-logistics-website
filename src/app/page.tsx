import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import StatisticsSection from '@/components/sections/StatisticsSection'
import TeamSection from '@/components/sections/TeamSection'
import NewsSection from '@/components/sections/NewsSection'
import CTASection from '@/components/sections/CTASection'
import { organizationStructuredData, serviceStructuredData } from '@/lib/structured-data'

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
        }}
      />

      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <StatisticsSection />
        <TeamSection />
        <NewsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
