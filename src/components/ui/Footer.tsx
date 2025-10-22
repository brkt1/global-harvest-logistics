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
    <footer className="relative overflow-hidden">
      {/* Glassy background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent dark:from-gray-900/20"></div>
      
      {/* Glassy overlay */}
      <div className="relative backdrop-blur-xl bg-white/5 dark:bg-gray-900/5 border-t border-white/10 dark:border-gray-800/10">
        <div className="container-custom">
          {/* Main footer content */}
          <div className="py-8 md:py-16 lg:py-20">
            {/* Mobile-first responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-12">
              {/* Company Info - Full width on mobile, spans 2 cols on tablet */}
              <div className="sm:col-span-2 lg:col-span-1">
                <Link href="/" className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6 md:mb-8 group">
                  <div className="bg-gradient-to-br from-ghl-secondary-400 to-ghl-secondary-600 p-2 sm:p-3 rounded-lg sm:rounded-xl group-hover:from-ghl-secondary-500 group-hover:to-ghl-secondary-700 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-105">
                    <Truck className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-white">Global Harvest</h3>
                    <p className="text-xs sm:text-sm text-white/70 font-medium">Logistics</p>
                  </div>
                </Link>
                <p className="text-white/80 mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base leading-relaxed">
                  Delivering taste, preserving nature. Your trusted partner in temperature-sensitive 
                  commodity logistics with a commitment to sustainability and excellence.
                </p>
                <div className="flex space-x-2 sm:space-x-3">
                  <a href="#" className="text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 p-2 sm:p-3 rounded-lg sm:rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/30 hover:scale-110">
                    <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a href="#" className="text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 p-2 sm:p-3 rounded-lg sm:rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/30 hover:scale-110">
                    <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a href="#" className="text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 p-2 sm:p-3 rounded-lg sm:rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/30 hover:scale-110">
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a href="#" className="text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 p-2 sm:p-3 rounded-lg sm:rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/30 hover:scale-110">
                    <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </div>
              </div>

              {/* Services - Collapsible on mobile */}
              <div className="lg:col-span-1">
                <button 
                  onClick={() => toggleSection('services')}
                  className="flex items-center justify-between w-full lg:justify-start lg:mb-8 mb-4 sm:mb-6 group"
                >
                  <h4 className="text-base sm:text-lg font-heading font-semibold text-white dark:text-gray-100 group-hover:text-ghl-secondary-400 dark:group-hover:text-ghl-secondary-300 transition-colors">Services</h4>
                  <ChevronDown className={`h-4 w-4 sm:h-5 sm:w-5 lg:hidden transition-transform duration-300 text-white dark:text-gray-300 ${
                    expandedSections.services ? 'rotate-180' : ''
                  }`} />
                </button>
                <ul className={`space-y-2 sm:space-y-4 transition-all duration-300 ${
                  expandedSections.services ? 'block' : 'hidden lg:block'
                }`}>
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link 
                        href={service.href}
                        className="text-white/70 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 hover:bg-white/5 dark:hover:bg-gray-800/20 transition-all duration-300 text-xs sm:text-sm md:text-base block py-1.5 sm:py-2 px-2 sm:px-3 rounded-md sm:rounded-lg hover:backdrop-blur-sm hover:border hover:border-white/10 dark:hover:border-gray-700/20"
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
                  className="flex items-center justify-between w-full lg:justify-start lg:mb-8 mb-4 sm:mb-6 group"
                >
                  <h4 className="text-base sm:text-lg font-heading font-semibold text-white dark:text-gray-100 group-hover:text-ghl-secondary-400 dark:group-hover:text-ghl-secondary-300 transition-colors">Company</h4>
                  <ChevronDown className={`h-4 w-4 sm:h-5 sm:w-5 lg:hidden transition-transform duration-300 text-white dark:text-gray-300 ${
                    expandedSections.company ? 'rotate-180' : ''
                  }`} />
                </button>
                <ul className={`space-y-2 sm:space-y-4 transition-all duration-300 ${
                  expandedSections.company ? 'block' : 'hidden lg:block'
                }`}>
                  {company.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href}
                        className="text-white/70 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 hover:bg-white/5 dark:hover:bg-gray-800/20 transition-all duration-300 text-xs sm:text-sm md:text-base block py-1.5 sm:py-2 px-2 sm:px-3 rounded-md sm:rounded-lg hover:backdrop-blur-sm hover:border hover:border-white/10 dark:hover:border-gray-700/20"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info - Always visible, optimized for mobile */}
              <div className="sm:col-span-2 lg:col-span-1">
                <h4 className="text-base sm:text-lg font-heading font-semibold mb-4 sm:mb-6 md:mb-8 text-white dark:text-gray-100">Contact</h4>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 p-1.5 sm:p-2 rounded-md sm:rounded-lg">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-ghl-secondary-400 dark:text-ghl-secondary-300" />
                    </div>
                    <div>
                      <p className="text-white/80 dark:text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                        123 Logistics Drive<br />
                        Port City, PC 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 p-1.5 sm:p-2 rounded-md sm:rounded-lg">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-ghl-secondary-400 dark:text-ghl-secondary-300" />
                    </div>
                    <a 
                      href="tel:+15551234567"
                      className="text-white/80 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors text-xs sm:text-sm md:text-base"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 p-1.5 sm:p-2 rounded-md sm:rounded-lg">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-ghl-secondary-400 dark:text-ghl-secondary-300" />
                    </div>
                    <a 
                      href="mailto:info@globalharvestlogistics.com"
                      className="text-white/80 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors text-xs sm:text-sm md:text-base break-all"
                    >
                      info@globalharvestlogistics.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust badges - Enhanced glassy design */}
          <div className="border-t border-white/10 dark:border-gray-800/20 py-6 sm:py-8 md:py-12">
            <div className="text-center">
              <h5 className="text-xs sm:text-sm font-medium text-white/60 dark:text-gray-400 mb-4 sm:mb-6 md:mb-8">Trusted & Certified</h5>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:flex md:flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-md border border-white/20 dark:border-gray-700/20 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-white dark:text-gray-100 font-medium text-xs sm:text-sm hover:bg-white/20 dark:hover:bg-gray-700/30 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">ISO 9001</div>
                <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-md border border-white/20 dark:border-gray-700/20 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-white dark:text-gray-100 font-medium text-xs sm:text-sm hover:bg-white/20 dark:hover:bg-gray-700/30 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">HACCP</div>
                <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-md border border-white/20 dark:border-gray-700/20 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-white dark:text-gray-100 font-medium text-xs sm:text-sm hover:bg-white/20 dark:hover:bg-gray-700/30 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">Organic Certified</div>
                <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-md border border-white/20 dark:border-gray-700/20 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-white dark:text-gray-100 font-medium text-xs sm:text-sm hover:bg-white/20 dark:hover:bg-gray-700/30 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">FDA Approved</div>
              </div>
            </div>
          </div>

          {/* Bottom bar - Enhanced glassy design */}
          <div className="border-t border-white/10 dark:border-gray-800/20 py-4 sm:py-6 md:py-8">
            <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center">
              <p className="text-white/60 dark:text-gray-400 text-xs sm:text-sm text-center md:text-left">
                © {currentYear} Global Harvest Logistics. All rights reserved.
              </p>
              <div className="flex flex-col sm:flex-row space-y-1.5 sm:space-y-0 sm:space-x-6 md:space-x-8 text-xs sm:text-sm">
                <Link href="/privacy" className="text-white/60 dark:text-gray-400 hover:text-white dark:hover:text-gray-100 transition-colors text-center sm:text-left hover:underline">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-white/60 dark:text-gray-400 hover:text-white dark:hover:text-gray-100 transition-colors text-center sm:text-left hover:underline">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-white/60 dark:text-gray-400 hover:text-white dark:hover:text-gray-100 transition-colors text-center sm:text-left hover:underline">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


