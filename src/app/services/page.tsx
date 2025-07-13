import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { Ship, Plane, Truck, Package, Globe, Shield, Clock, Award, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services - Comprehensive Freight & Logistics Solutions',
  description: 'Explore our complete range of freight forwarding services: sea freight, air freight, land transport, warehousing, and customs clearance. Global logistics solutions you can trust.',
}

const services = [
  {
    icon: Ship,
    title: 'Sea Freight Services',
    description: 'Cost-effective ocean shipping solutions for cargo of all sizes. From FCL to LCL, we handle your maritime logistics with expertise and care.',
    features: [
      'Full Container Load (FCL)',
      'Less than Container Load (LCL)', 
      'RoRo (Roll-on/Roll-off)',
      'Breakbulk Cargo',
      'Project Cargo',
      'Refrigerated Containers'
    ],
    href: '/services/sea-freight',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Plane,
    title: 'Air Freight Services',
    description: 'Fast and secure air cargo services for time-sensitive shipments. Express delivery and specialized handling for all your air freight needs.',
    features: [
      'Express Air Freight',
      'Standard Air Cargo',
      'Charter Services',
      'Dangerous Goods (DG)',
      'Temperature Controlled',
      'Hand Carry Services'
    ],
    href: '/services/air-freight',
    color: 'from-sky-500 to-sky-600'
  },
  {
    icon: Truck,
    title: 'Land Transport',
    description: 'Reliable ground transportation for domestic and cross-border shipments. Full truckload and LTL services across regional networks.',
    features: [
      'Full Truck Load (FTL)',
      'Less than Truck Load (LTL)',
      'Cross-border Transport',
      'Last Mile Delivery',
      'Specialized Vehicles',
      'Intermodal Solutions'
    ],
    href: '/services/land-transport',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Package,
    title: 'Warehousing & Distribution',
    description: 'Modern warehouse facilities with comprehensive storage and distribution services. Inventory management and fulfillment solutions.',
    features: [
      'Climate-controlled Storage',
      'Inventory Management',
      'Pick & Pack Services',
      'Distribution Centers',
      'Cross-docking',
      'Value-added Services'
    ],
    href: '/services/warehousing',
    color: 'from-orange-500 to-orange-600'
  }
]

const additionalServices = [
  {
    icon: Globe,
    title: 'Customs Clearance',
    description: 'Expert customs brokerage and trade compliance services',
    href: '/services/customs'
  },
  {
    icon: Shield,
    title: 'Cargo Insurance',
    description: 'Comprehensive insurance coverage for your valuable cargo',
    href: '/services/insurance'
  },
  {
    icon: Clock,
    title: 'Express Services',
    description: 'Urgent delivery solutions for time-critical shipments',
    href: '/services/express'
  },
  {
    icon: Award,
    title: 'Project Cargo',
    description: 'Specialized handling for oversized and complex shipments',
    href: '/services/project-cargo'
  }
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Comprehensive Freight & Logistics Services
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                From sea to air, land to warehouse - we provide end-to-end logistics solutions 
                tailored to your business needs across the globe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote" className="btn btn-lg bg-orange-500 hover:bg-orange-600 text-white">
                  Get Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/contact" className="btn btn-lg border-2 border-white text-white hover:bg-white hover:text-blue-900">
                  Contact Expert
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="section bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Core Services
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We offer a complete range of freight forwarding and logistics services 
                designed to streamline your supply chain and optimize your shipping operations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service) => (
                <div key={service.title} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link
                      href={service.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:text-blue-700 transition-colors duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="section bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Additional Services
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Complete your logistics solution with our specialized services and support offerings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalServices.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Optimize Your Supply Chain?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Our logistics experts are ready to design a customized solution 
                that meets your specific shipping and warehousing requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote" className="btn btn-lg bg-orange-500 hover:bg-orange-600 text-white">
                  Get Custom Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/contact" className="btn btn-lg border-2 border-white text-white hover:bg-white hover:text-blue-600">
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
