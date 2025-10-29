'use client'

import EditableText from '@/components/ui/EditableText'
import { Calculator, MessageCircle } from 'lucide-react'
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const formatWhatsAppMessage = () => {
    const lines = [
      `Hello! I would like to request a quote for logistics services.`,
      '',
      `*Contact Information:*`,
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      ...(formData.phone ? [`Phone: ${formData.phone}`] : []),
      ...(formData.company ? [`Company: ${formData.company}`] : []),
      '',
      `*Shipment Details:*`,
      `Origin: ${formData.origin}`,
      `Destination: ${formData.destination}`,
      `Cargo Type: ${formData.cargoType}`,
      `Weight/Volume: ${formData.weight}`,
      ...(formData.temperature ? [`Temperature: ${formData.temperature}`] : []),
      `Timeline: ${formData.timeline}`,
      ...(formData.specialRequirements ? [`\n*Special Requirements:*\n${formData.specialRequirements}`] : [])
    ]
    return encodeURIComponent(lines.join('\n'))
  }

  const sendToWhatsApp = () => {
    const phoneNumber = '+251912422031'
    const message = formatWhatsAppMessage()
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
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
              <EditableText 
                content="Get Your Quote"
                contentKey="quote-hero-badge"
                tag="span"
                className="text-xs sm:text-sm font-medium text-ghl-primary-600"
              />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-4 sm:mb-6 text-ghl-neutral-800">
              <EditableText 
                content="Request a"
                contentKey="quote-hero-title-1"
                tag="span"
              />
              <EditableText 
                content="Custom Quote"
                contentKey="quote-hero-title-2"
                tag="span"
                className="bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 bg-clip-text text-transparent"
              />
            </h1>
            <EditableText 
              content="Get a personalized quote for your logistics needs. Our experts will provide you with competitive pricing and tailored solutions."
              contentKey="quote-hero-description"
              tag="p"
              className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto text-ghl-neutral-600"
            />
          </div>
        </div>
      </section>

      {/* Quote Form - Mobile optimized */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden bg-white">
              <div className="bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 p-6 sm:p-8 text-center">
                <EditableText 
                  content="Tell Us About Your Shipment"
                  contentKey="quote-form-title"
                  tag="h2"
                  className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white mb-3 sm:mb-4"
                />
                <EditableText 
                  content="Fill out the form below and we'll get back to you with a detailed quote"
                  contentKey="quote-form-subtitle"
                  tag="p"
                  className="text-sm sm:text-base text-white/90"
                />
              </div>
              
              <form onSubmit={(e) => e.preventDefault()} className="p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {/* Contact Information */}
                  <div className="md:col-span-2">
                    <EditableText 
                      content="Contact Information"
                      contentKey="quote-form-contact-title"
                      tag="h3"
                      className={`text-lg sm:text-xl font-heading font-semibold mb-3 sm:mb-4 flex items-center ${
                          'text-ghl-neutral-800'
                      }`}
                    />
                  </div>
                  
                  <div>
                    <EditableText 
                      content="Full Name *"
                      contentKey="quote-form-name-label"
                      tag="span"
                      className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                          'text-ghl-neutral-700'
                      }`}
                    />
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
                    <EditableText 
                      content="Email Address *"
                      contentKey="quote-form-email-label"
                      tag="span"
                      className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                          'text-ghl-neutral-700'
                      }`}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base ${
                        'border-ghl-neutral-300 bg-white text-gray-900'
                      }`}
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <EditableText 
                      content="Phone Number"
                      contentKey="quote-form-phone-label"
                      tag="span"
                      className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                          'text-ghl-neutral-700'
                      }`}
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base ${
                        'border-ghl-neutral-300 bg-white text-gray-900'
                      }`}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <EditableText 
                      content="Company Name"
                      contentKey="quote-form-company-label"
                      tag="span"
                      className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                          'text-ghl-neutral-700'
                      }`}
                    />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base ${
                        'border-ghl-neutral-300 bg-white text-gray-900'
                      }`}
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {/* Shipment Details */}
                  <div className="md:col-span-2">
                    <EditableText 
                      content="Shipment Details"
                      contentKey="quote-form-shipment-title"
                      tag="h3"
                      className={`text-lg sm:text-xl font-heading font-semibold mb-3 sm:mb-4 flex items-center ${
                          'text-ghl-neutral-800'
                      }`}
                    />
                  </div>
                  
                  <div>
                    <EditableText 
                      content="Origin *"
                      contentKey="quote-form-origin-label"
                      tag="span"
                      className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                          'text-ghl-neutral-700'
                      }`}
                    />
                    <input
                      type="text"
                      name="origin"
                      value={formData.origin}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base ${
                        'border-ghl-neutral-300 bg-white text-gray-900'
                      }`}
                      placeholder="City, Country"
                    />
                  </div>
                  
                  <div>
                    <EditableText 
                      content="Destination *"
                      contentKey="quote-form-destination-label"
                      tag="span"
                      className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                          'text-ghl-neutral-700'
                      }`}
                    />
                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base ${
                        'border-ghl-neutral-300 bg-white text-gray-900'
                      }`}
                      placeholder="City, Country"
                    />
                  </div>
                  
                  <div>
                    <EditableText 
                      content="Cargo Type *"
                      contentKey="quote-form-cargo-label"
                      tag="span"
                      className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                          'text-ghl-neutral-700'
                      }`}
                    />
                    <select
                      name="cargoType"
                      value={formData.cargoType}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base ${
                        'border-ghl-neutral-300 bg-white text-gray-900'
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
                    <EditableText 
                      content="Weight/Volume *"
                      contentKey="quote-form-weight-label"
                      tag="span"
                      className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                          'text-ghl-neutral-700'
                      }`}
                    />
                    <input
                      type="text"
                      name="weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base ${
                        'border-ghl-neutral-300 bg-white text-gray-900'
                      }`}
                      placeholder="e.g., 1000 kg, 20 containers"
                    />
                  </div>
                  
                  <div>
                    <EditableText 
                      content="Temperature Requirements"
                      contentKey="quote-form-temperature-label"
                      tag="span"
                      className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                          'text-ghl-neutral-700'
                      }`}
                    />
                    <input
                      type="text"
                      name="temperature"
                      value={formData.temperature}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base ${
                        'border-ghl-neutral-300 bg-white text-gray-900'
                      }`}
                      placeholder="e.g., 2-8°C, Ambient"
                    />
                  </div>
                  
                  <div>
                    <EditableText 
                      content="Timeline *"
                      contentKey="quote-form-timeline-label"
                      tag="span"
                      className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                          'text-ghl-neutral-700'
                      }`}
                    />
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base ${
                        'border-ghl-neutral-300 bg-white text-gray-900'
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
                  <EditableText 
                    content="Special Requirements"
                    contentKey="quote-form-special-label"
                    tag="span"
                    className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                      'text-ghl-neutral-700'
                    }`}
                  />
                  <textarea
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base                         'border-ghl-neutral-300 bg-white text-gray-900'"
                    placeholder="Any special handling, documentation, or other requirements..."
                  />
                </div>

                <button
                  type="button"
                  onClick={sendToWhatsApp}
                  disabled={!formData.name || !formData.email || !formData.origin || !formData.destination || !formData.cargoType || !formData.weight || !formData.timeline}
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] active:bg-[#1DA851] text-white py-3 sm:py-4 lg:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                  <EditableText 
                    content="Send Quote Request via WhatsApp"
                    contentKey="quote-form-whatsapp"
                    tag="span"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
