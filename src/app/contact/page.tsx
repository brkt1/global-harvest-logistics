'use client'

import ContactInfo from '@/components/ui/ContactInfo'
import EditableText from '@/components/ui/EditableText'
import { CheckCircle, MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productInterest: '',
    targetMarket: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const formatWhatsAppMessage = () => {
    const lines = [
      `Hello! I'm interested in your services.`,
      '',
      `*Name:* ${formData.name}`,
      `*Email:* ${formData.email}`,
      `*Company:* ${formData.company}`,
      ...(formData.phone ? [`*Phone:* ${formData.phone}`] : []),
      `*Product Interest:* ${formData.productInterest}`,
      `*Target Market:* ${formData.targetMarket}`,
      '',
      `*Message:*`,
      formData.message
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Page header removed per request */}

      {/* Contact Content */}
      <div className="container-custom py-6 sm:py-8 lg:py-12">
        {/* Get In Touch Section */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-100 mb-6 sm:mb-8 lg:mb-10">
          <EditableText 
            content="Get In Touch"
            contentKey="contact-section-title"
            tag="h2"
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3"
          />
          <EditableText 
            content="Your Gateway to Premium Ethiopian Agricultural Exports"
            contentKey="contact-section-subtitle"
            tag="p"
            className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6"
          />
          <EditableText 
            content="Ready to source premium Ethiopian sesame, pulses, and beans? Contact our export specialists in Addis Ababa for quotes, samples, and partnership opportunities."
            contentKey="contact-section-description"
            tag="p"
            className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed"
          />
          <div className="flex items-start space-x-2 sm:space-x-3">
            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <EditableText 
              content="Based in the heart of Ethiopia's commercial capital"
              contentKey="contact-section-benefit"
              tag="p"
              className="text-xs sm:text-sm text-gray-700"
            />
          </div>
        </div>

        {/* Main Layout - Responsive Grid: Stacked on mobile/tablet, Side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column - Contact Information (Desktop) / Top (Mobile) */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-100 lg:sticky lg:top-6">
              <EditableText 
                content="Contact Details"
                contentKey="contact-info-title"
                tag="h2"
                className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6"
              />
              <ContactInfo />
            </div>
          </div>

          {/* Right Column - Contact Form (Desktop) / Bottom (Mobile) */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl sm:rounded-2xl p-複雑sm:p-6 lg:p-8 shadow-sm border border-gray-100">
              <EditableText 
                content="Send Us a Message"
                contentKey="contact-form-title"
                tag="h2"
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3"
              />
              <EditableText 
                content="We typically respond within 24 hours"
                contentKey="contact-form-response-time"
                tag="p"
                className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 lg:mb-8"
              />
              
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4 sm:space-y-5 lg:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                  {/* Name - Full width on mobile, half on tablet+ */}
                  <div className="sm:col-span-2">
                    <EditableText 
                      content="Full Name *"
                      contentKey="contact-form-name-label"
                      tag="span"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
                    />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent text-sm sm:text-base bg-gray-50 transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  {/* Email */}
                  <div className="sm:col-span-1">
                    <EditableText 
                      content="Email Address *"
                      contentKey="contact-form-email-label"
                      tag="span"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent text-sm sm:text-base bg-gray-50 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  {/* Company */}
                  <div className="sm:col-span-1">
                    <EditableText 
                      content="Company Name *"
                      contentKey="contact-form-company-label"
                      tag="span"
                      className="block text-xs sm:text-sm font-medium text-gray സൂചന
-700 mb-2"
                    />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent text-sm sm:text-base bg-gray-50 transition-all"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  {/* Phone */}
                  <div className="sm:col-span-1">
                    <EditableText 
                      content="Phone Number"
                      contentKey="contact-form-phone-label"
                      tag="span"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
                    />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent text-sm sm:text-base bg-gray-50 transition-all"
                      placeholder="+251 911 156 824"
                    />
                  </div>
                  
                  {/* Product Interest */}
                  <div className="sm:col-span-1">
                    <EditableText 
                      content="Product Interest *"
                      contentKey="contact-form-product-label"
                      tag="span"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
                    />
                    <select
                      id="productInterest"
                      name="productInterest"
                      required
                      value={formData.productInterest}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent text-sm sm:text-base bg-gray-50 transition-all"
                    >
                      <option value="">Please Select</option>
                      <option value="humera-sesame">Humera Sesame</option>
                      <option value="wollega-sesame">Wollega Sesame</option>
                      <option value="red-kidney-beans">Red Kidney Beans</option>
                      <option value="white-pea-beans">White Pea Beans</option>
                      <option value="red-speckled-beans">Red Speckled Beans</option>
                      <option value="soya-beans">Soya Beans</option>
                      <option value="multiple">Multiple Products</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  {/* Target Market */}
                  <div className="sm:col-span-1">
                    <EditableText 
                      content="Target Market/Country *"
                      contentKey="contact-form-market-label"
                      tag="span"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
                    />
                    <input
                      type="text"
                      id="targetMarket"
                      name="targetMarket"
                      required
                      value={formData.targetMarket}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent text-sm sm:text-base bg-gray-50 transition-all"
                      placeholder="Enter your target market or country"
                    />
                  </div>
                  
                  {/* Message - Full width */}
                  <div className="sm:col-span-2">
                    <EditableText 
                      content="Message *"
                      contentKey="contact-form-message-label"
                      tag="span"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
                    />
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent text-sm sm:text-base bg-gray-50 transition-all resize-y"
                      placeholder="Please include quantity requirements, quality specifications, and any other details..."
                    />
                  </div>
                </div>
                
                <button
                  type="button"
                  onClick={sendToWhatsApp}
                  disabled={!formData.name || !formData.email || !formData.company || !formData.productInterest || !formData.targetMarket || !formData.message}
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] active:bg-[#1DA851] text-white py-3 sm:py-4 lg:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                  <EditableText 
                    content="Send via WhatsApp disentangle"
                    contentKey="contact-form-whatsapp"
                    tag="span"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
