'use client'

import EditableText from '@/components/ui/EditableText'
import { useAdmin } from '@/contexts/AdminContext'
import { CONTACT_INFO } from '@/lib/constants'
import { ChevronDown, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({})
  const [showLogin, setShowLogin] = useState(false)
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const { isAdmin, login } = useAdmin()

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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError('')
    
    const success = await login(password)
    
    if (success) {
      setShowLogin(false)
      setPassword('')
    } else {
      setLoginError('Invalid password')
    }
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Glassy background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      {/* Glassy overlay */}
      <div className="relative backdrop-blur-xl bg-white/5 border-t border-white/10">
        <div className="container-custom">
          {/* Main footer content */}
          <div className="py-8 md:py-16 lg:py-20">
            {/* Mobile-first responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-12">
              {/* Company Info - Full width on mobile, spans 2 cols on tablet */}
              <div className="sm:col-span-2 lg:col-span-1">
                <Link href="/" className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6 md:mb-8 group">
                  <Image
                    src="/logo.png"
                    alt="Sam Commodities Logo"
                    width={200}
                    height={60}
                    className="h-12 w-auto sm:h-16 md:h-20 object-contain"
                    priority
                  />
                </Link>
                <EditableText 
                  content="Premium Ethiopian agricultural exports. We combine local agricultural excellence with international trade precision to deliver the finest Ethiopian pulses and sesame to the world."
                  contentKey="footer-company-description"
                  tag="p"
                  className="text-white/80 mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base leading-relaxed"
                />
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
                  <EditableText 
                    content="Services"
                    contentKey="footer-services-title"
                    tag="h4"
                    className="text-base sm:text-lg font-heading font-semibold text-white group-hover:text-ghl-secondary-400 transition-colors"
                  />
                  <ChevronDown className={`h-4 w-4 sm:h-5 sm:w-5 lg:hidden transition-transform duration-300 text-white ${
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
                        className="text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 text-xs sm:text-sm md:text-base block py-1.5 sm:py-2 px-2 sm:px-3 rounded-md sm:rounded-lg hover:backdrop-blur-sm hover:border hover:border-white/10"
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
                  <EditableText 
                    content="Company"
                    contentKey="footer-company-title"
                    tag="h4"
                    className="text-base sm:text-lg font-heading font-semibold text-white group-hover:text-ghl-secondary-400 transition-colors"
                  />
                  <ChevronDown className={`h-4 w-4 sm:h-5 sm:w-5 lg:hidden transition-transform duration-300 text-white ${
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
                        className="text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 text-xs sm:text-sm md:text-base block py-1.5 sm:py-2 px-2 sm:px-3 rounded-md sm:rounded-lg hover:backdrop-blur-sm hover:border hover:border-white/10"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info - Always visible, optimized for mobile */}
              <div className="sm:col-span-2 lg:col-span-1">
                <EditableText 
                  content="Contact"
                  contentKey="footer-contact-title"
                  tag="h4"
                  className="text-base sm:text-lg font-heading font-semibold mb-4 sm:mb-6 md:mb-8 text-white"
                />
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-1.5 sm:p-2 rounded-md sm:rounded-lg">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-ghl-secondary-400" />
                    </div>
                    <div>
                      <EditableText 
                        content={`${CONTACT_INFO.address.street}<br />${CONTACT_INFO.address.city}<br />${CONTACT_INFO.address.country}`}
                        contentKey="footer-address"
                        tag="p"
                        className="text-white/80 text-xs sm:text-sm md:text-base leading-relaxed"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-1.5 sm:p-2 rounded-md sm:rounded-lg">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-ghl-secondary-400" />
                    </div>
                    <EditableText 
                      content={CONTACT_INFO.phone}
                      contentKey="footer-phone"
                      tag="span"
                      className="text-white/80 hover:text-white transition-colors text-xs sm:text-sm md:text-base"
                    />
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-1.5 sm:p-2 rounded-md sm:rounded-lg">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-ghl-secondary-400" />
                    </div>
                    <EditableText 
                      content={CONTACT_INFO.email}
                      contentKey="footer-email"
                      tag="span"
                      className="text-white/80 hover:text-white transition-colors text-xs sm:text-sm md:text-base break-all"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust badges - Enhanced glassy design */}
          <div className="border-t border-white/10 py-6 sm:py-8 md:py-12">
            <div className="text-center">
              <EditableText 
                content="Trusted & Certified"
                contentKey="footer-trusted-title"
                tag="h5"
                className="text-xs sm:text-sm font-medium text-white/60 mb-4 sm:mb-6 md:mb-8"
              />
              <div className="grid grid-cols-2 sm:grid-cols-4 md:flex md:flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                <EditableText 
                  content="ISO 9001"
                  contentKey="footer-cert-iso"
                  tag="span"
                  className="bg-white/10 backdrop-blur-md border border-white/20 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-white font-medium text-xs sm:text-sm hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                />
                <EditableText 
                  content="HACCP"
                  contentKey="footer-cert-haccp"
                  tag="span"
                  className="bg-white/10 backdrop-blur-md border border-white/20 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-white font-medium text-xs sm:text-sm hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                />
                <EditableText 
                  content="Organic Certified"
                  contentKey="footer-cert-organic"
                  tag="span"
                  className="bg-white/10 backdrop-blur-md border border-white/20 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-white font-medium text-xs sm:text-sm hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                />
                <EditableText 
                  content="FDA Approved"
                  contentKey="footer-cert-fda"
                  tag="span"
                  className="bg-white/10 backdrop-blur-md border border-white/20 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-white font-medium text-xs sm:text-sm hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Bottom bar - Enhanced glassy design */}
          <div className="border-t border-white/10 py-4 sm:py-6 md:py-8">
            <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center">
              <EditableText 
                content={`© ${currentYear} Sam Commodities. All rights reserved.`}
                contentKey="footer-copyright"
                tag="p"
                className="text-white/60 text-xs sm:text-sm text-center md:text-left"
              />
              <div className="flex flex-col sm:flex-row space-y-1.5 sm:space-y-0 sm:space-x-6 md:space-x-8 text-xs sm:text-sm">
                <Link 
                  href="/privacy"
                  className="text-white/60 hover:text-white transition-colors text-center sm:text-left hover:underline"
                >
                  <EditableText 
                    content="Privacy Policy"
                    contentKey="footer-privacy-link"
                    tag="span"
                  />
                </Link>
                <Link 
                  href="/terms"
                  className="text-white/60 hover:text-white transition-colors text-center sm:text-left hover:underline"
                >
                  <EditableText 
                    content="Terms of Service"
                    contentKey="footer-terms-link"
                    tag="span"
                  />
                </Link>
                <Link 
                  href="/cookies"
                  className="text-white/60 hover:text-white transition-colors text-center sm:text-left hover:underline"
                >
                  <EditableText 
                    content="Cookie Policy"
                    contentKey="footer-cookies-link"
                    tag="span"
                  />
                </Link>
                {/* Admin Section */}
                {isAdmin ? (
                  <Link 
                    href="/admin/dashboard"
                    className="text-white/60 hover:text-white transition-colors text-center sm:text-left hover:underline flex items-center gap-1"
                  >
                    <EditableText 
                      content="Admin"
                      contentKey="footer-admin-link"
                      tag="span"
                    />
                  </Link>
                ) : (
                  <button
                    onClick={() => setShowLogin(true)}
                    className="text-white/60 hover:text-white transition-colors text-center sm:text-left hover:underline flex items-center gap-1"
                  >
                    <EditableText 
                      content="Admin Login"
                      contentKey="footer-admin-login"
                      tag="span"
                    />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Admin Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl border p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <EditableText 
                content="Admin Login"
                contentKey="footer-login-title"
                tag="h3"
                className="font-semibold text-gray-900"
              />
              <button
                onClick={() => setShowLogin(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <EditableText 
                  content="Password"
                  contentKey="footer-login-password-label"
                  tag="span"
                  className="block text-sm font-medium text-gray-700 mb-1"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter admin password"
                  required
                />
              </div>
              
              {loginError && (
                <p className="text-red-600 text-sm">{loginError}</p>
              )}
              
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  <EditableText 
                    content="Login"
                    contentKey="footer-login-button"
                    tag="span"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => setShowLogin(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <EditableText 
                    content="Cancel"
                    contentKey="footer-login-cancel"
                    tag="span"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </footer>
  )
}


