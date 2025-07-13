import { Clock, DollarSign, Shield, Globe, Headphones, BarChart3 } from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Same day and next day delivery options available for urgent shipments.',
    features: ['Express shipping', '24/7 operations', 'Priority handling'],
  },
  {
    icon: DollarSign,
    title: 'Cost Effective',
    description: 'Competitive pricing with transparent rates and no hidden fees.',
    features: ['Best market rates', 'Volume discounts', 'Flexible payment terms'],
  },
  {
    icon: Shield,
    title: 'Secure & Insured',
    description: 'Full insurance coverage and advanced security measures for your cargo.',
    features: ['Comprehensive insurance', 'Secure facilities', 'Chain of custody'],
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Worldwide shipping network with local expertise in key markets.',
    features: ['50+ countries', 'Local partnerships', 'Regional expertise'],
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer service and dedicated account management.',
    features: ['24/7 helpdesk', 'Dedicated managers', 'Multi-language support'],
  },
  {
    icon: BarChart3,
    title: 'Real-time Tracking',
    description: 'Live tracking and updates throughout your shipment journey.',
    features: ['GPS tracking', 'Status updates', 'Delivery notifications'],
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="section bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Oz Logistics?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We combine decades of industry experience with cutting-edge technology 
            to deliver exceptional freight forwarding services that exceed expectations.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <benefit.icon className="w-8 h-8 text-blue-600 group-hover:text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {benefit.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {benefit.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-blue-50 rounded-full">
            <span className="text-blue-600 font-medium mr-2">Ready to experience the difference?</span>
            <a
              href="/contact"
              className="text-blue-600 hover:text-blue-700 font-semibold underline underline-offset-4 transition-colors duration-200"
            >
              Get started today →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
