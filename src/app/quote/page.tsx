'use client'

import { ArrowLeft, Calculator, CheckCircle, Clock, Mail, Phone, Truck } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    origin: '',
    destination: '',
    cargoType: '',
    weight: '',
    temperature: '',
    timeline: '',
    specialRequirements: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-ghl-primary-50 via-white to-ghl-secondary-50">
        <div className="container-custom py-12 sm:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 bg-white">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3 sm:mb-4 text-ghl-neutral-800">
                Quote Request Submitted!
              </h1>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 text-ghl-neutral-600">
                Thank you for your interest in our logistics services. Our team will review your requirements and get back to you within 24 hours with a detailed quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link href="/" className="btn btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                  <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Back to Home
                </Link>
                <Link href="/contact" className="btn btn-secondary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-ghl-primary-50 via-white to-ghl-secondary-50">
      {/* Hero Section - Mobile optimized */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ghl-primary-600/10 via-ghl-secondary-400/10 to-ghl-primary-600/10"></div>
        <div className="container-custom py-12 sm:py-16 md:py-20 lg:py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 bg-white/80 border-ghl-primary-200">
              <Calculator className="h-4 w-4 sm:h-5 sm:w-5 text-ghl-primary-600" />
              <span className="text-xs sm:text-sm font-medium text-ghl-primary-600">Get Your Quote</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-4 sm:mb-6 text-ghl-neutral-800">
              Request a <span className="bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 bg-clip-text text-transparent">Custom Quote</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto text-ghl-neutral-600">
              Get a personalized quote for your logistics needs. Our experts will provide you with competitive pricing and tailored solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form - Mobile optimized */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden bg-white">
              <div className="bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 p-6 sm:p-8 text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white mb-3 sm:mb-4">
                  Tell Us About Your Shipment
                </h2>
                <p className="text-sm sm:text-base text-white/90">
                  Fill out the form below and we&apos;ll get back to you with a detailed quote
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {/* Contact Information */}
                  <div className="md:col-span-2">
                    <h3 className={`text-lg sm:text-xl font-heading font-semibold mb-3 sm:mb-4 flex items-center ${
                      text-ghl-neutral-800
                    }`}>
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-ghl-primary-600 mr-2" />
                      Contact Information
                    </h3>
                  </div>
                  
                  <div>
                    <label className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                      text-ghl-neutral-700
                    }`}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base ${
                        'border-ghl-neutral-300 bg-white text-gray-900'
                      }`}
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                      text-ghl-neutral-700
                    }`}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base ${
border-ghl-neutral-300 bg-white text-gray-900
                      }`}
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                      text-ghl-neutral-700
                    }`}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base ${
border-ghl-neutral-300 bg-white text-gray-900
                      }`}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                      text-ghl-neutral-700
                    }`}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base ${
border-ghl-neutral-300 bg-white text-gray-900
                      }`}
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {/* Shipment Details */}
                  <div className="md:col-span-2">
                    <h3 className={`text-lg sm:text-xl font-heading font-semibold mb-3 sm:mb-4 flex items-center ${
                      text-ghl-neutral-800
                    }`}>
                      <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-ghl-primary-600 mr-2" />
                      Shipment Details
                    </h3>
                  </div>
                  
                  <div>
                    <label className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                      text-ghl-neutral-700
                    }`}>
                      Origin *
                    </label>
                    <input
                      type="text"
                      name="origin"
                      value={formData.origin}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base ${
border-ghl-neutral-300 bg-white text-gray-900
                      }`}
                      placeholder="City, Country"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                      text-ghl-neutral-700
                    }`}>
                      Destination *
                    </label>
                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base ${
border-ghl-neutral-300 bg-white text-gray-900
                      }`}
                      placeholder="City, Country"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                      text-ghl-neutral-700
                    }`}>
                      Cargo Type *
                    </label>
                    <select
                      name="cargoType"
                      value={formData.cargoType}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base ${
border-ghl-neutral-300 bg-white text-gray-900
                      }`}
                    >
                      <option value="">Select cargo type</option>
                      <option value="coffee">Coffee Beans</option>
                      <option value="oil">Edible Oils</option>
                      <option value="temperature-controlled">Temperature Controlled</option>
                      <option value="general">General Cargo</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                      text-ghl-neutral-700
                    }`}>
                      Weight/Volume *
                    </label>
                    <input
                      type="text"
                      name="weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base ${
border-ghl-neutral-300 bg-white text-gray-900
                      }`}
                      placeholder="e.g., 1000 kg, 20 containers"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                      text-ghl-neutral-700
                    }`}>
                      Temperature Requirements
                    </label>
                    <input
                      type="text"
                      name="temperature"
                      value={formData.temperature}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base ${
border-ghl-neutral-300 bg-white text-gray-900
                      }`}
                      placeholder="e.g., 2-8°C, Ambient"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                      text-ghl-neutral-700
                    }`}>
                      Timeline *
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base ${
border-ghl-neutral-300 bg-white text-gray-900
                      }`}
                    >
                      <option value="">Select timeline</option>
                      <option value="urgent">Urgent (1-3 days)</option>
                      <option value="standard">Standard (1-2 weeks)</option>
                      <option value="flexible">Flexible (2-4 weeks)</option>
                      <option value="planning">Planning ahead (1+ months)</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6 sm:mb-8">
                  <label className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                    text-ghl-neutral-700
                  }`}>
                    Special Requirements
                  </label>
                  <textarea
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base border-ghl-neutral-300 bg-white text-gray-900"
                    placeholder="Any special handling, documentation, or other requirements..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Calculator className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        Get My Quote
                      </>
                    )}
                  </button>
                  <Link href="/contact" className="btn btn-secondary text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Contact Us Instead
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
