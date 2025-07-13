import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Ship, Package, Globe, Clock, Shield, CheckCircle, ArrowRight, Calculator, FileText, Truck } from 'lucide-react'

const seaFreightServices = [
  {
    icon: Package,
    title: 'Full Container Load (FCL)',
    description: 'Dedicated container shipping for large volume cargo with maximum security and efficiency.',
    features: ['20ft & 40ft containers', 'Door-to-door service', 'Dedicated container', 'Cost-effective for large shipments'],
  },
  {
    icon: Ship,
    title: 'Less than Container Load (LCL)',
    description: 'Shared container space for smaller shipments, offering flexibility and cost savings.',
    features: ['Shared container space', 'Weekly consolidations', 'Flexible booking', 'Ideal for small to medium cargo'],
  },
  {
    icon: Globe,
    title: 'RoRo Services',
    description: 'Roll-on/Roll-off shipping for vehicles, machinery, and oversized cargo.',
    features: ['Vehicle transportation', 'Heavy machinery', 'Project cargo', 'Direct vessel loading'],
  },
  {
    icon: Truck,
    title: 'Breakbulk Cargo',
    description: 'Specialized handling for oversized and irregular shaped cargo that cannot fit in containers.',
    features: ['Oversized cargo', 'Heavy lift operations', 'Project logistics', 'Specialized equipment'],
  },
]

const benefits = [
  {
    icon: Shield,
    title: 'Cargo Insurance',
    description: 'Comprehensive coverage for your valuable cargo during transit.',
  },
  {
    icon: Clock,
    title: 'Transit Time Optimization',
    description: 'Efficient routing to minimize shipping time and costs.',
  },
  {
    icon: FileText,
    title: 'Documentation Support',
    description: 'Complete assistance with shipping documentation and customs paperwork.',
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Extensive network covering major ports worldwide.',
  },
]

const routes = [
  { from: 'USA', to: 'Europe', time: '12-15 days', frequency: 'Daily' },
  { from: 'Asia', to: 'USA West Coast', time: '14-18 days', frequency: 'Daily' },
  { from: 'Asia', to: 'USA East Coast', time: '20-25 days', frequency: '3x/week' },
  { from: 'Europe', to: 'Asia', time: '18-22 days', frequency: 'Daily' },
  { from: 'Middle East', to: 'Asia', time: '8-12 days', frequency: '5x/week' },
  { from: 'Australia', to: 'Asia', time: '7-10 days', frequency: 'Daily' },
]

export default function SeaFreightPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Sea freight shipping"
              fill
              className="object-cover"
            />
          </div>
          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Ship className="w-5 h-5" />
                <span className="text-sm font-medium">Sea Freight Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Global Ocean Freight Solutions
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Cost-effective and reliable sea freight services connecting major ports worldwide. 
                From FCL to LCL, we handle all your ocean shipping needs with precision and care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote" className="btn btn-lg bg-orange-500 hover:bg-orange-600 text-white">
                  Get Sea Freight Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/contact" className="btn btn-lg border-2 border-white text-white hover:bg-white hover:text-blue-900">
                  Speak to Expert
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="section bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sea Freight Service Options
              </h2>
              <p className="text-lg text-gray-600">
                Choose from our comprehensive range of sea freight services designed to meet your specific shipping requirements and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {seaFreightServices.map((service) => (
                <div key={service.title} className="card hover:shadow-xl transition-all duration-300">
                  <div className="card-body">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Sea Freight Services?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience the advantages of partnering with a trusted sea freight specialist committed to your success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="text-center group">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Routes */}
        <section className="section bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Popular Sea Freight Routes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our most popular shipping routes with competitive transit times and frequent sailing schedules.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">From</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">To</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Transit Time</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Frequency</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {routes.map((route, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">{route.from}</td>
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">{route.to}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{route.time}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{route.frequency}</td>
                        <td className="px-6 py-4">
                          <Link href="/quote" className="btn btn-sm btn-primary">
                            Get Quote
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Ship by Sea?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Get competitive rates for your sea freight shipments with our instant quote system. 
                Professional service, transparent pricing, and reliable delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote" className="btn btn-lg bg-orange-500 hover:bg-orange-600 text-white">
                  Get Instant Quote
                  <Calculator className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/services" className="btn btn-lg border-2 border-white text-white hover:bg-white hover:text-blue-600">
                  All Services
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
