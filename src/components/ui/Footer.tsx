'use client'

import { ChevronDown, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Truck, Twitter } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({})

  const services = [
    { name: 'Coffee Logistics', href: '/services#coffee' },
    { name: 'Oil Transportation', href: '/services#oil' },
    { name: 'Temperature Control', href: '/services#temperature' },
    { name: 'Custom Solutions', href: '/services#custom' },
  ]

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Certifications', href: '/about#certifications' },
    { name: 'Careers', href: '/careers' },
  ]

  // const support = [
  //   { name: 'Track Shipment', href: '/track' },
  //   { name: 'Get Quote', href: '/quote' },
  //   { name: 'Contact Us', href: '/contact' },
  //   { name: 'FAQ', href: '/faq' },
  // ]

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <footer className="bg-ghl-neutral-900 text-white">
      <div className="container-custom">
        {/* Main footer content */}
        <div className="py-12 md:py-16">
          {/* Mobile-first responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info - Full width on mobile, spans 2 cols on tablet */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-6 group">
                <div className="bg-ghl-secondary-400 p-2 rounded-lg group-hover:bg-ghl-secondary-500 transition-colors duration-200">
                  <Truck className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-heading font-bold">Global Harvest</h3>
                  <p className="text-sm text-ghl-neutral-400">Logistics</p>
                </div>
              </Link>
              <p className="text-ghl-neutral-300 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                Delivering taste, preserving nature. Your trusted partner in temperature-sensitive 
                commodity logistics with a commitment to sustainability and excellence.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-ghl-neutral-400 hover:text-ghl-secondary-400 transition-colors p-2 hover:bg-ghl-neutral-800 rounded-lg">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-ghl-neutral-400 hover:text-ghl-secondary-400 transition-colors p-2 hover:bg-ghl-neutral-800 rounded-lg">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-ghl-neutral-400 hover:text-ghl-secondary-400 transition-colors p-2 hover:bg-ghl-neutral-800 rounded-lg">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-ghl-neutral-400 hover:text-ghl-secondary-400 transition-colors p-2 hover:bg-ghl-neutral-800 rounded-lg">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services - Collapsible on mobile */}
            <div className="lg:col-span-1">
              <button 
                onClick={() => toggleSection('services')}
                className="flex items-center justify-between w-full lg:justify-start lg:mb-6 mb-4"
              >
                <h4 className="text-lg font-heading font-semibold">Services</h4>
                <ChevronDown className={`h-5 w-5 lg:hidden transition-transform duration-200 ${
                  expandedSections.services ? 'rotate-180' : ''
                }`} />
              </button>
              <ul className={`space-y-3 transition-all duration-300 ${
                expandedSections.services ? 'block' : 'hidden lg:block'
              }`}>
                {services.map((service) => (
                  <li key={service.name}>
                    <Link 
                      href={service.href}
                      className="text-ghl-neutral-300 hover:text-ghl-secondary-400 transition-colors text-sm md:text-base block py-1"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company - Collapsible on mobile */}
            <div className="lg:col-span-1">
              <button 
                onClick={() => toggleSection('company')}
                className="flex items-center justify-between w-full lg:justify-start lg:mb-6 mb-4"
              >
                <h4 className="text-lg font-heading font-semibold">Company</h4>
                <ChevronDown className={`h-5 w-5 lg:hidden transition-transform duration-200 ${
                  expandedSections.company ? 'rotate-180' : ''
                }`} />
              </button>
              <ul className={`space-y-3 transition-all duration-300 ${
                expandedSections.company ? 'block' : 'hidden lg:block'
              }`}>
                {company.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-ghl-neutral-300 hover:text-ghl-secondary-400 transition-colors text-sm md:text-base block py-1"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info - Always visible, optimized for mobile */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="text-lg font-heading font-semibold mb-4 md:mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-ghl-secondary-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-ghl-neutral-300 text-sm md:text-base">
                      123 Logistics Drive<br />
                      Port City, PC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-ghl-secondary-400 flex-shrink-0" />
                  <a 
                    href="tel:+15551234567"
                    className="text-ghl-neutral-300 hover:text-ghl-secondary-400 transition-colors text-sm md:text-base"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-ghl-secondary-400 flex-shrink-0" />
                  <a 
                    href="mailto:info@globalharvestlogistics.com"
                    className="text-ghl-neutral-300 hover:text-ghl-secondary-400 transition-colors text-sm md:text-base break-all"
                  >
                    info@globalharvestlogistics.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges - Modern glassy design */}
        <div className="border-t border-ghl-neutral-800 py-6 md:py-8">
          <div className="text-center">
            <h5 className="text-sm font-medium text-ghl-neutral-400 mb-6"></h5>
            <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center items-center gap-3 md:gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-lg text-ghl-neutral-200 font-medium text-xs md:text-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg">ISO 9001</div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-lg text-ghl-neutral-200 font-medium text-xs md:text-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg">HACCP</div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-lg text-ghl-neutral-200 font-medium text-xs md:text-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg">Organic Certified</div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-lg text-ghl-neutral-200 font-medium text-xs md:text-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg">FDA Approved</div>
            </div>
          </div>
        </div>

        {/* Bottom bar - Mobile optimized */}
        <div className="border-t border-ghl-neutral-800 py-4 md:py-6">
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center">
            <p className="text-ghl-neutral-400 text-xs md:text-sm text-center md:text-left">
              © {currentYear} Global Harvest Logistics. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-xs md:text-sm">
              <Link href="/privacy" className="text-ghl-neutral-400 hover:text-ghl-secondary-400 transition-colors text-center sm:text-left">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-ghl-neutral-400 hover:text-ghl-secondary-400 transition-colors text-center sm:text-left">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-ghl-neutral-400 hover:text-ghl-secondary-400 transition-colors text-center sm:text-left">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


