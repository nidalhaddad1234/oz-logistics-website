'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Clock, Shield, Award, CheckCircle, Package, Truck, Ship, Plane } from 'lucide-react'

const trustIndicators = [
  {
    icon: Clock,
    title: '60 Second Quote',
    description: 'Get instant pricing',
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Complete protection',
  },
  {
    icon: Award,
    title: 'ISO Certified',
    description: 'Quality guaranteed',
  },
  {
    icon: CheckCircle,
    title: '99.9% On-Time',
    description: 'Reliable delivery',
  },
]

const serviceIcons = [Ship, Truck, Plane, Package]

export default function CTASection() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setEmail('')
    // Show success message
  }

  return (
    <section className="section bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-300 rounded-full blur-2xl"></div>
      </div>

      {/* Floating Service Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {serviceIcons.map((Icon, index) => (
          <div
            key={index}
            className={`absolute opacity-5 ${
              index === 0 ? 'top-20 left-20 animate-float' :
              index === 1 ? 'top-40 right-32 animate-float-delayed' :
              index === 2 ? 'bottom-40 left-32 animate-float' :
              'bottom-20 right-20 animate-float-delayed'
            }`}
          >
            <Icon className="w-16 h-16" />
          </div>
        ))}
      </div>

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Ready to Ship with{' '}
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Confidence?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Get your instant quote in less than 60 seconds and join thousands of businesses 
              who trust Oz Logistics for their global shipping needs.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {trustIndicators.map((indicator, index) => (
                <div
                  key={indicator.title}
                  className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-3">
                    <indicator.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">{indicator.title}</h3>
                  <p className="text-sm text-blue-200">{indicator.description}</p>
                </div>
              ))}
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
              <Link 
                href="/quote" 
                className="btn btn-lg bg-orange-500 hover:bg-orange-600 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group"
              >
                Get Instant Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                href="/track" 
                className="btn btn-lg border-2 border-white text-white hover:bg-white hover:text-blue-900 shadow-xl"
              >
                Track Shipment
              </Link>
            </div>

            {/* Secondary Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <Link 
                href="/contact" 
                className="inline-flex items-center text-blue-200 hover:text-white transition-colors duration-300"
              >
                Talk to an Expert
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <span className="text-blue-300 hidden sm:block">|</span>
              <Link 
                href="/services" 
                className="inline-flex items-center text-blue-200 hover:text-white transition-colors duration-300"
              >
                View All Services
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Urgency Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Time-Sensitive Shipment?
                </h3>
                <p className="text-blue-100 mb-6">
                  Our express services ensure your urgent cargo reaches its destination on time. 
                  Contact our 24/7 support team for immediate assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="tel:+1-800-OZ-LOGISTICS" 
                    className="btn bg-red-500 hover:bg-red-600 text-white"
                  >
                    Call Now: +1-800-OZ-LOGISTICS
                  </a>
                  <Link 
                    href="/services/express" 
                    className="btn btn-outline border-white text-white hover:bg-white hover:text-blue-900"
                  >
                    Express Services
                  </Link>
                </div>
              </div>

              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Need Regular Updates?
                </h3>
                <p className="text-blue-100 mb-6">
                  Subscribe to our newsletter for industry insights, shipping tips, 
                  and exclusive offers for your logistics needs.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 px-4 py-3 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn bg-orange-500 hover:bg-orange-600 text-white disabled:opacity-50"
                    >
                      {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                    </button>
                  </div>
                  <p className="text-xs text-blue-200">
                    No spam, unsubscribe anytime. We respect your privacy.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">10,000+</div>
                <div className="text-blue-200">Successful Shipments</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-200">Customer Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-blue-200">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
