'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Ship, Plane, Truck, Package, ArrowRight, Globe, Clock, Shield, Award } from 'lucide-react'

const services = [
  {
    icon: Ship,
    title: 'Sea Freight',
    description: 'Cost-effective ocean shipping for large volume cargo worldwide.',
    features: ['Full Container Load (FCL)', 'Less than Container Load (LCL)', 'RoRo Services', 'Breakbulk Cargo'],
    color: 'from-blue-500 to-blue-600',
    href: '/services/sea-freight',
  },
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Fast and secure air cargo services for time-sensitive shipments.',
    features: ['Express Delivery', 'Standard Air Freight', 'Charter Services', 'Dangerous Goods'],
    color: 'from-sky-500 to-sky-600',
    href: '/services/air-freight',
  },
  {
    icon: Truck,
    title: 'Land Transport',
    description: 'Reliable ground transportation for regional and domestic deliveries.',
    features: ['Full Truck Load (FTL)', 'Less than Truck Load (LTL)', 'Cross-border Transport', 'Last Mile Delivery'],
    color: 'from-green-500 to-green-600',
    href: '/services/land-transport',
  },
  {
    icon: Package,
    title: 'Warehousing',
    description: 'Secure storage and distribution solutions with modern facilities.',
    features: ['Climate-controlled Storage', 'Inventory Management', 'Pick & Pack', 'Distribution Services'],
    color: 'from-orange-500 to-orange-600',
    href: '/services/warehousing',
  },
]

const additionalServices = [
  {
    icon: Globe,
    title: 'Customs Clearance',
    description: 'Expert customs brokerage and compliance services.',
  },
  {
    icon: Shield,
    title: 'Cargo Insurance',
    description: 'Comprehensive insurance coverage for your valuable cargo.',
  },
  {
    icon: Clock,
    title: 'Express Services',
    description: 'Urgent delivery solutions for time-critical shipments.',
  },
  {
    icon: Award,
    title: 'Specialized Cargo',
    description: 'Handling of oversized, hazardous, and project cargo.',
  },
]

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <section className="section bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Freight & Logistics Services
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From sea to air, land to warehouse - we provide end-to-end logistics solutions 
            tailored to your business needs. Trust Oz Logistics for reliable, efficient, 
            and cost-effective freight forwarding services.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="card h-full overflow-hidden transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                {/* Service Icon & Title */}
                <div className="card-body text-center relative">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className={`service-icon group-hover:bg-gradient-to-br group-hover:${service.color} group-hover:text-white transition-all duration-300`}>
                    <service.icon className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className={`space-y-2 mb-6 transition-all duration-300 ${
                    hoveredService === index ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
                  }`}>
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Link */}
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:text-blue-700 transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Additional Services
            </h3>
            <p className="text-gray-600">
              Complete logistics solutions to support your supply chain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Ship with Confidence?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get a customized quote for your shipping needs in less than 60 seconds. 
              Our experts are ready to help you find the perfect logistics solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn btn-lg bg-orange-500 hover:bg-orange-600 text-white">
                Get Instant Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/contact" className="btn btn-lg border-2 border-white text-white hover:bg-white hover:text-blue-600">
                Talk to Expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
