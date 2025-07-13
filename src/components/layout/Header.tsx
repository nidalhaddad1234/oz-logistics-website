'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Search, Package, Phone } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Sea Freight', href: '/services/sea-freight' },
      { name: 'Air Freight', href: '/services/air-freight' },
      { name: 'Land Transport', href: '/services/land-transport' },
      { name: 'Warehousing', href: '/services/warehousing' },
      { name: 'Customs Clearance', href: '/services/customs' },
    ],
  },
  {
    name: 'Company',
    href: '/about',
    children: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about/team' },
      { name: 'Careers', href: '/about/careers' },
      { name: 'News', href: '/news' },
    ],
  },
  { name: 'Track Shipment', href: '/track' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showTrackingDropdown, setShowTrackingDropdown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 text-sm">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              +1 (555) 123-4567
            </span>
            <span>📧 info@oz-logistics.com</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>🕒 24/7 Support Available</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-lg'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">Oz Logistics</div>
                <div className="text-xs text-gray-500">Freight Forwarding</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="nav-link py-2 flex items-center"
                  >
                    {item.name}
                    {item.children && (
                      <svg
                        className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Track Order Widget */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setShowTrackingDropdown(!showTrackingDropdown)}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                >
                  <Search className="w-4 h-4" />
                  <span className="font-medium">Track Order</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      showTrackingDropdown ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Tracking Dropdown */}
                {showTrackingDropdown && (
                  <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 p-4 z-50">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Track Your Shipment
                    </h3>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Enter tracking number..."
                        className="form-input"
                      />
                      <button className="btn btn-primary w-full">
                        Track Package
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">
                      Need help? <Link href="/contact" className="text-blue-600 hover:underline">Contact us</Link>
                    </p>
                  </div>
                )}
              </div>

              <Link href="/quote" className="btn btn-primary">
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="container py-4">
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Track order..."
                    className="form-input flex-1"
                  />
                  <button className="btn btn-primary">Track</button>
                </div>
                <Link
                  href="/quote"
                  className="btn btn-primary w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
