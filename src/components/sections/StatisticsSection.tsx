'use client'

import { useEffect, useState } from 'react'
import { Package, Globe, Clock, Award, Users, TrendingUp, Ship, Zap } from 'lucide-react'

const statistics = [
  {
    icon: Package,
    number: 10000,
    suffix: '+',
    label: 'Shipments Delivered',
    description: 'Successfully delivered worldwide',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Globe,
    number: 50,
    suffix: '+',
    label: 'Countries Served',
    description: 'Global logistics network',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Clock,
    number: 99.9,
    suffix: '%',
    label: 'On-Time Delivery',
    description: 'Reliable delivery performance',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Award,
    number: 15,
    suffix: '+',
    label: 'Years Experience',
    description: 'Industry expertise',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Users,
    number: 500,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Trusted partnerships',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: TrendingUp,
    number: 95,
    suffix: '%',
    label: 'Customer Satisfaction',
    description: 'Exceptional service quality',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: Ship,
    number: 24,
    suffix: '/7',
    label: 'Support Available',
    description: 'Round-the-clock assistance',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Zap,
    number: 2,
    suffix: 'hrs',
    label: 'Average Response Time',
    description: 'Quick customer support',
    color: 'from-yellow-500 to-yellow-600',
  },
]

function CountUpAnimation({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(`counter-${target}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [target, isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * target)
      
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, target, duration])

  return (
    <span id={`counter-${target}`}>
      {count}{suffix}
    </span>
  )
}

export default function StatisticsSection() {
  return (
    <section className="section bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Oz Logistics by the Numbers
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            Our commitment to excellence is reflected in our track record of success. 
            These numbers tell the story of our dedication to your shipping needs.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div
              key={stat.label}
              className="relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                {/* Number */}
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                  <CountUpAnimation target={stat.number} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-blue-100 leading-relaxed">
                  {stat.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Content */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">ISO 9001</div>
              <div className="text-sm text-blue-100">Certified Quality</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">IATA</div>
              <div className="text-sm text-blue-100">Accredited Agent</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">FMC</div>
              <div className="text-sm text-blue-100">Licensed Forwarder</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
