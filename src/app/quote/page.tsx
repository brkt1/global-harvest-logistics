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
        <div className="container-custom py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-ghl-neutral-800 mb-4">
                Quote Request Submitted!
              </h1>
              <p className="text-lg text-ghl-neutral-600 mb-8">
                Thank you for your interest in our logistics services. Our team will review your requirements and get back to you within 24 hours with a detailed quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" className="btn btn-primary">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Home
                </Link>
                <Link href="/contact" className="btn btn-secondary">
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
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ghl-primary-600/10 via-ghl-secondary-400/10 to-ghl-primary-600/10"></div>
        <div className="container-custom py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-ghl-primary-200">
              <Calculator className="h-5 w-5 text-ghl-primary-600" />
              <span className="text-sm font-medium text-ghl-primary-600">Get Your Quote</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-ghl-neutral-800 mb-6">
              Request a <span className="bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 bg-clip-text text-transparent">Custom Quote</span>
            </h1>
            <p className="text-xl text-ghl-neutral-600 mb-8 max-w-2xl mx-auto">
              Get a personalized quote for your logistics needs. Our experts will provide you with competitive pricing and tailored solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                  Tell Us About Your Shipment
                </h2>
                <p className="text-white/90">
                  Fill out the form below and we'll get back to you with a detailed quote
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Contact Information */}
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-heading font-semibold text-ghl-neutral-800 mb-4 flex items-center">
                      <Mail className="h-5 w-5 text-ghl-primary-600 mr-2" />
                      Contact Information
                    </h3>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-ghl-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-ghl-neutral-300 rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-ghl-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-ghl-neutral-300 rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-ghl-neutral-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-ghl-neutral-300 rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-ghl-neutral-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-ghl-neutral-300 rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Shipment Details */}
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-heading font-semibold text-ghl-neutral-800 mb-4 flex items-center">
                      <Truck className="h-5 w-5 text-ghl-primary-600 mr-2" />
                      Shipment Details
                    </h3>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-ghl-neutral-700 mb-2">
                      Origin *
                    </label>
                    <input
                      type="text"
                      name="origin"
                      value={formData.origin}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-ghl-neutral-300 rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="City, Country"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-ghl-neutral-700 mb-2">
                      Destination *
                    </label>
                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-ghl-neutral-300 rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="City, Country"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-ghl-neutral-700 mb-2">
                      Cargo Type *
                    </label>
                    <select
                      name="cargoType"
                      value={formData.cargoType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-ghl-neutral-300 rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300"
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
                    <label className="block text-sm font-medium text-ghl-neutral-700 mb-2">
                      Weight/Volume *
                    </label>
                    <input
                      type="text"
                      name="weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-ghl-neutral-300 rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="e.g., 1000 kg, 20 containers"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-ghl-neutral-700 mb-2">
                      Temperature Requirements
                    </label>
                    <input
                      type="text"
                      name="temperature"
                      value={formData.temperature}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-ghl-neutral-300 rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="e.g., 2-8°C, Ambient"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-ghl-neutral-700 mb-2">
                      Timeline *
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-ghl-neutral-300 rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      <option value="urgent">Urgent (1-3 days)</option>
                      <option value="standard">Standard (1-2 weeks)</option>
                      <option value="flexible">Flexible (2-4 weeks)</option>
                      <option value="planning">Planning ahead (1+ months)</option>
                    </select>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-ghl-neutral-700 mb-2">
                    Special Requirements
                  </label>
                  <textarea
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-ghl-neutral-300 rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Any special handling, documentation, or other requirements..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="h-5 w-5 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Calculator className="h-5 w-5 mr-2" />
                        Get My Quote
                      </>
                    )}
                  </button>
                  <Link href="/contact" className="btn btn-secondary text-lg px-8 py-4">
                    <Phone className="h-5 w-5 mr-2" />
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
