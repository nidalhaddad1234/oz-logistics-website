'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, Ship, Plane, Truck, Package, CheckCircle, Clock, Shield } from 'lucide-react'

const stats = [
  { number: '10,000+', label: 'Shipments Delivered', icon: Package },
  { number: '50+', label: 'Countries Served', icon: Ship },
  { number: '99.9%', label: 'On-Time Delivery', icon: Clock },
  { number: '24/7', label: 'Customer Support', icon: Shield },
]

const features = [
  { icon: Ship, title: 'Sea Freight', description: 'Global ocean shipping' },
  { icon: Plane, title: 'Air Freight', description: 'Fast air transport' },
  { icon: Truck, title: 'Land Transport', description: 'Reliable ground shipping' },
  { icon: Package, title: 'Warehousing', description: 'Secure storage solutions' },
]

export default function HeroSection() {
  const [videoPlaying, setVideoPlaying] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image/Video */}
      <div className="absolute inset-0 z-0">
        {videoPlaying ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <pattern
                    id="shipping-pattern"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect width="20" height="20" fill="none" />
                    <circle cx="10" cy="10" r="1" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#shipping-pattern)" />
              </svg>
            </div>
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Ship className="w-8 h-8 text-white/20" />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <Plane className="w-6 h-6 text-white/20" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <Truck className="w-7 h-7 text-white/20" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Video Play Button */}
          {!videoPlaying && (
            <button
              onClick={() => setVideoPlaying(true)}
              className="group mb-8 mx-auto flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
            >
              <Play className="w-6 h-6 ml-1 group-hover:scale-110 transition-transform duration-300" />
            </button>
          )}

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Always Stay Ahead of{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Schedule
            </span>{' '}
            with Oz Logistics
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto animate-slide-up">
            Cost efficient & always on time freight forwarding solutions. 
            Your trusted partner for global shipping and logistics services.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>ISO Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Insured Shipments</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Real-time Tracking</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
            <Link href="/quote" className="btn btn-lg bg-orange-500 hover:bg-orange-600 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Get Instant Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/services" className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-blue-900 shadow-xl">
              Our Services
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
              >
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-orange-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Services Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="bg-white/95 backdrop-blur-sm border-t border-gray-200">
          <div className="container py-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature) => (
                <Link
                  key={feature.title}
                  href="/services"
                  className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-all duration-200"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                    <feature.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 truncate">
                      {feature.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
