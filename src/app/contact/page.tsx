'use client'

import ContactInfo from '@/components/ui/ContactInfo'
import EditableText from '@/components/ui/EditableText'
import TruckLoading from '@/components/ui/TruckLoading'
import { useLoading } from '@/contexts/LoadingContext'
import { CheckCircle, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const { showLoading, hideLoading } = useLoading()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productInterest: '',
    targetMarket: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    showLoading('Sending your message...')
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Contact form:', formData)
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
      hideLoading()
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <EditableText 
              content="Message Sent!"
              contentKey="contact-success-title"
              tag="h1"
              className="text-2xl font-bold text-gray-900 mb-4"
            />
            <EditableText 
              content="Thank you for contacting us. We'll get back to you within 24 hours."
              contentKey="contact-success-message"
              tag="p"
              className="text-gray-600 mb-8"
            />
            <EditableText 
              content="Send Another Message"
              contentKey="contact-success-button"
              tag="span"
              className="w-full bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 text-white py-3 rounded-xl font-semibold"
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Page Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="container-custom py-8">
          <div className="text-center">
            <EditableText 
              content="Quality You Can Trust"
              contentKey="contact-header-title"
              tag="h1"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            />
            <EditableText 
              content="Every shipment undergoes strict quality control from farm to port. We combine local agricultural excellence with international trade precision to deliver the finest Ethiopian pulses and sesame to the world."
              contentKey="contact-header-subtitle"
              tag="p"
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container-custom py-8 space-y-8">
        {/* Get In Touch Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <EditableText 
            content="Get In Touch"
            contentKey="contact-section-title"
            tag="h2"
            className="text-2xl font-bold text-gray-900 mb-2"
          />
          <EditableText 
            content="Your Gateway to Premium Ethiopian Agricultural Exports"
            contentKey="contact-section-subtitle"
            tag="p"
            className="text-gray-600 mb-6"
          />
          <EditableText 
            content="Ready to source premium Ethiopian sesame, pulses, and beans? Contact our export specialists in Addis Ababa for quotes, samples, and partnership opportunities."
            contentKey="contact-section-description"
            tag="p"
            className="text-gray-700 mb-4"
          />
          <div className="flex items-center space-x-2 mb-6">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <EditableText 
              content="Based in the heart of Ethiopia's commercial capital"
              contentKey="contact-section-benefit"
              tag="p"
              className="text-sm text-gray-700"
            />
          </div>
        </div>

        {/* Contact Information Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <EditableText 
            content="Contact Details"
            contentKey="contact-info-title"
            tag="h2"
            className="text-2xl font-bold text-gray-900 mb-4"
          />
          <ContactInfo />
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <EditableText 
            content="Send Us a Message"
            contentKey="contact-form-title"
            tag="h2"
            className="text-2xl font-bold text-gray-900 mb-2"
          />
          <EditableText 
            content="We typically respond within 24 hours"
            contentKey="contact-form-response-time"
            tag="p"
            className="text-sm text-gray-600 mb-6"
          />
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <EditableText 
                  content="Full Name *"
                  contentKey="contact-form-name-label"
                  tag="span"
                  className="block text-sm font-medium text-gray-700 mb-2"
                />
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent text-sm bg-gray-50"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <EditableText 
                  content="Email Address *"
                  contentKey="contact-form-email-label"
                  tag="span"
                  className="block text-sm font-medium text-gray-700 mb-2"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent text-sm bg-gray-50"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <EditableText 
                  content="Company Name *"
                  contentKey="contact-form-company-label"
                  tag="span"
                  className="block text-sm font-medium text-gray-700 mb-2"
                />
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent text-sm bg-gray-50"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <EditableText 
                  content="Phone Number"
                  contentKey="contact-form-phone-label"
                  tag="span"
                  className="block text-sm font-medium text-gray-700 mb-2"
                />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent text-sm bg-gray-50"
                  placeholder="+251 911 156 824"
                />
              </div>
              
              <div>
                <EditableText 
                  content="Product Interest *"
                  contentKey="contact-form-product-label"
                  tag="span"
                  className="block text-sm font-medium text-gray-700 mb-2"
                />
                <select
                  id="productInterest"
                  name="productInterest"
                  required
                  value={formData.productInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent text-sm bg-gray-50"
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
              
              <div>
                <EditableText 
                  content="Target Market/Country *"
                  contentKey="contact-form-market-label"
                  tag="span"
                  className="block text-sm font-medium text-gray-700 mb-2"
                />
                <input
                  type="text"
                  id="targetMarket"
                  name="targetMarket"
                  required
                  value={formData.targetMarket}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent text-sm bg-gray-50"
                  placeholder="Enter your target market or country"
                />
              </div>
              
              <div>
                <EditableText 
                  content="Message *"
                  contentKey="contact-form-message-label"
                  tag="span"
                  className="block text-sm font-medium text-gray-700 mb-2"
                />
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent text-sm bg-gray-50"
                  placeholder="Please include quantity requirements, quality specifications, and any other details..."
                />
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {isSubmitting ? (
                <>
                  <TruckLoading size="sm" className="!flex-row" />
                  <EditableText 
                    content="Sending..."
                    contentKey="contact-form-submitting"
                    tag="span"
                  />
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <EditableText 
                    content="Send Message"
                    contentKey="contact-form-submit"
                    tag="span"
                  />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}
