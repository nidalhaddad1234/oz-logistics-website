import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Plane, Clock, Shield, Package, CheckCircle, ArrowRight, Calculator } from 'lucide-react'

const airFreightServices = [
  {
    icon: Clock,
    title: 'Express Air Freight',
    description: 'Fastest delivery option for urgent shipments with next-flight-out service.',
    features: ['Same day & next day delivery', 'Door-to-door service', 'Real-time tracking', 'Priority handling'],
  },
  {
    icon: Package,
    title: 'Standard Air Freight',
    description: 'Cost-effective air cargo solution with reliable delivery times.',
    features: ['2-5 day delivery', 'Consolidation options', 'Competitive rates', 'Regular schedules'],
  },
  {
    icon: Plane,
    title: 'Charter Services',
    description: 'Dedicated aircraft for oversized cargo and specialized requirements.',
    features: ['Dedicated aircraft', 'Oversized cargo', 'Flexible scheduling', 'Direct routing'],
  },
  {
    icon: Shield,
    title: 'Dangerous Goods',
    description: 'Specialized handling for hazardous materials and restricted items.',
    features: ['IATA certified', 'Hazmat expertise', 'Compliance documentation', 'Safety protocols'],
  },
]

export default function AirFreightPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-sky-900 via-sky-800 to-blue-700 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Air freight cargo plane"
              fill
              className="object-cover"
            />
          </div>
          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Plane className="w-5 h-5" />
                <span className="text-sm font-medium">Air Freight Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Fast & Secure Air Freight
              </h1>
              <p className="text-xl text-sky-100 mb-8 max-w-3xl mx-auto">
                When speed matters, trust our air freight services to deliver your cargo quickly and safely 
                to destinations worldwide. From express to standard air cargo solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote" className="btn btn-lg bg-orange-500 hover:bg-orange-600 text-white">
                  Get Air Freight Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/contact" className="btn btn-lg border-2 border-white text-white hover:bg-white hover:text-sky-900">
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
                Air Freight Service Options
              </h2>
              <p className="text-lg text-gray-600">
                Choose the right air freight solution for your timeline and budget requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {airFreightServices.map((service) => (
                <div key={service.title} className="card hover:shadow-xl transition-all duration-300">
                  <div className="card-body">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-sky-600" />
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

        {/* CTA Section */}
        <section className="section bg-gradient-to-r from-sky-600 to-blue-800 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Fast Air Freight?
              </h2>
              <p className="text-xl text-sky-100 mb-8">
                Get instant quotes for air freight shipments with guaranteed delivery times and competitive rates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote" className="btn btn-lg bg-orange-500 hover:bg-orange-600 text-white">
                  Get Instant Quote
                  <Calculator className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/services" className="btn btn-lg border-2 border-white text-white hover:bg-white hover:text-sky-600">
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
