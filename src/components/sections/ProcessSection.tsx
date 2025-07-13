'use client'

import { useState } from 'react'
import { FileText, DollarSign, Truck, Package, ArrowRight, CheckCircle } from 'lucide-react'

const processSteps = [
  {
    id: 1,
    icon: FileText,
    title: 'Request Quote',
    subtitle: 'Submit Details',
    description: 'Provide your shipping requirements including origin, destination, cargo details, and preferred delivery timeline.',
    details: [
      'Complete shipping information form',
      'Upload cargo documents if needed',
      'Specify any special requirements',
      'Choose preferred service level'
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    id: 2,
    icon: DollarSign,
    title: 'Get Quote',
    subtitle: 'Instant Pricing',
    description: 'Receive a competitive quote within minutes, including all costs and estimated delivery times for your shipment.',
    details: [
      'Instant pricing calculation',
      'Transparent cost breakdown',
      'Multiple service options',
      'No hidden fees guaranteed'
    ],
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
  },
  {
    id: 3,
    icon: Truck,
    title: 'We Ship',
    subtitle: 'Pickup & Transport',
    description: 'Our team handles pickup, documentation, customs clearance, and transportation using the most efficient route.',
    details: [
      'Professional cargo pickup',
      'Complete documentation handling',
      'Customs clearance assistance',
      'Optimal route planning'
    ],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-600',
  },
  {
    id: 4,
    icon: Package,
    title: 'You Receive',
    subtitle: 'Safe Delivery',
    description: 'Track your shipment in real-time and receive your cargo safely at the destination, on time and in perfect condition.',
    details: [
      'Real-time tracking updates',
      'Proactive delivery notifications',
      'Secure final delivery',
      'Delivery confirmation & documentation'
    ],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
  },
]

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <section className="section bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our streamlined process makes international shipping simple and transparent. 
            From quote to delivery, we handle every detail so you can focus on your business.
          </p>
        </div>

        {/* Process Steps - Desktop */}
        <div className="hidden lg:block">
          {/* Step Indicators */}
          <div className="relative mb-16">
            <div className="absolute top-8 left-0 right-0 h-1 bg-gray-200">
              <div className="h-full bg-gradient-to-r from-blue-500 via-green-500 via-orange-500 to-purple-500 rounded-full"></div>
            </div>
            
            <div className="relative flex justify-between">
              {processSteps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center group">
                  <div 
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg transform transition-all duration-300 group-hover:scale-110 cursor-pointer`}
                    onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                  >
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className="mt-4 text-center">
                    <div className="text-sm text-gray-500 mb-1">{step.id}.</div>
                    <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {step.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  activeStep === step.id 
                    ? `${step.bgColor} border-current ${step.textColor}` 
                    : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center text-white mr-3`}>
                    <step.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{step.subtitle}</div>
                    <div className="font-semibold text-gray-900">{step.title}</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>

                {activeStep === step.id && (
                  <div className="space-y-2 animate-fade-in">
                    {step.details.map((detail, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps - Mobile */}
        <div className="lg:hidden space-y-8">
          {processSteps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connection Line */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-16 bg-gray-200"></div>
              )}
              
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                  <step.icon className="w-8 h-8" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-gray-500 mr-2">{step.id}.</span>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Oz Logistics for their shipping needs. 
              Get your instant quote now and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/quote"
                className="btn btn-lg bg-orange-500 hover:bg-orange-600 text-white shadow-xl"
              >
                Start Your Shipment
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/track"
                className="btn btn-lg border-2 border-white text-white hover:bg-white hover:text-blue-600"
              >
                Track Existing Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
