'use client'

import ContactInfo from '@/components/ui/ContactInfo'
import EditableText from '@/components/ui/EditableText'
import TruckLoading from '@/components/ui/TruckLoading'
import { useLoading } from '@/contexts/LoadingContext'
import { CheckCircle, Mail, Phone, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const { showLoading, hideLoading } = useLoading()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
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
              content="Contact Us"
              contentKey="contact-header-title"
              tag="h1"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            />
            <EditableText 
              content="Get in touch with our experts"
              contentKey="contact-header-subtitle"
              tag="p"
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container-custom py-8 space-y-8">
        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Phone className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <EditableText 
                  content="Call Now"
                  contentKey="contact-quick-call-label"
                  tag="p"
                  className="text-xs text-gray-500"
                />
                <EditableText 
                  content="+1 (555) 123-4567"
                  contentKey="contact-quick-call-number"
                  tag="p"
                  className="text-sm font-semibold text-gray-900"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <EditableText 
                  content="Email Us"
                  contentKey="contact-quick-email-label"
                  tag="p"
                  className="text-xs text-gray-500"
                />
                <EditableText 
                  content="info@ghl.com"
                  contentKey="contact-quick-email-address"
                  tag="p"
                  className="text-sm font-semibold text-gray-900"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <EditableText 
            content="Contact Information"
            contentKey="contact-info-title"
            tag="h2"
            className="text-lg font-bold text-gray-900 mb-4"
          />
          <ContactInfo />
        </div>

        {/* Mobile App Contact Form */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <EditableText 
            content="Send us a Message"
            contentKey="contact-form-title"
            tag="h2"
            className="text-lg font-bold text-gray-900 mb-4"
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
                  content="Company"
                  contentKey="contact-form-company-label"
                  tag="span"
                  className="block text-sm font-medium text-gray-700 mb-2"
                />
                <input
                  type="text"
                  id="company"
                  name="company"
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
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div>
                <EditableText 
                  content="Subject *"
                  contentKey="contact-form-subject-label"
                  tag="span"
                  className="block text-sm font-medium text-gray-700 mb-2"
                />
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent text-sm bg-gray-50"
                >
                  <option value="">Select a subject</option>
                  <option value="quote">Request Quote</option>
                  <option value="tracking">Track Shipment</option>
                  <option value="support">Customer Support</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
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
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent text-sm bg-gray-50"
                  placeholder="Tell us how we can help you..."
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

      {/* Emergency Contact */}
      <div className="container-custom py-8">
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <EditableText 
                content="Emergency Support"
                contentKey="contact-emergency-title"
                tag="h2"
                className="text-lg font-bold"
              />
              <EditableText 
                content="24/7 Available"
                contentKey="contact-emergency-subtitle"
                tag="p"
                className="text-sm text-red-100"
              />
            </div>
          </div>
          
          <EditableText 
            content="For urgent shipping issues or emergencies, call our 24/7 support line."
            contentKey="contact-emergency-description"
            tag="p"
            className="text-sm text-red-100 mb-4"
          />
          
          <a 
            href="tel:+15551234567"
            className="w-full bg-white text-red-600 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg"
          >
            <Phone className="h-4 w-4" />
            <EditableText 
              content="Call Emergency Line: +1 (555) 123-4567"
              contentKey="contact-emergency-button"
              tag="span"
              className="w-full bg-white text-red-600 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
