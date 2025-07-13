import Link from 'next/link'
import { Package, Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const footerSections = [
  {
    title: 'Services',
    links: [
      { name: 'Sea Freight', href: '/services/sea-freight' },
      { name: 'Air Freight', href: '/services/air-freight' },
      { name: 'Land Transport', href: '/services/land-transport' },
      { name: 'Warehousing', href: '/services/warehousing' },
      { name: 'Customs Clearance', href: '/services/customs' },
      { name: 'Cargo Insurance', href: '/services/insurance' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about/team' },
      { name: 'Careers', href: '/about/careers' },
      { name: 'News & Updates', href: '/news' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Certifications', href: '/certifications' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Track Shipment', href: '/track' },
      { name: 'Get Quote', href: '/quote' },
      { name: 'Shipping Calculator', href: '/calculator' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Terms & Conditions', href: '/terms' },
    ],
  },
]

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@oz-logistics.com',
    href: 'mailto:info@oz-logistics.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    value: '123 Logistics Ave, Port City, PC 12345',
    href: 'https://maps.google.com',
  },
  {
    icon: Clock,
    title: 'Hours',
    value: '24/7 Customer Support',
    href: null,
  },
]

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">Oz Logistics</div>
                <div className="text-sm text-gray-400">Freight Forwarding</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for global freight forwarding and logistics solutions. 
              We deliver excellence in every shipment, ensuring your cargo reaches its 
              destination safely and on time.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact) => (
              <div key={contact.title} className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <contact.icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">{contact.title}</h4>
                  {contact.href ? (
                    <Link
                      href={contact.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {contact.value}
                    </Link>
                  ) : (
                    <p className="text-gray-300 text-sm">{contact.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Subscribe to our newsletter for the latest shipping industry news and updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 Oz Logistics. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
