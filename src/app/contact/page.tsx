'use client'

import TruckLoading from '@/components/ui/TruckLoading'
import { useLoading } from '@/contexts/LoadingContext'
import { CheckCircle, Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
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
      <div className="min-h-screen bg-ghl-neutral-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-heading font-bold text-ghl-neutral-900 mb-4">
            Message Sent!
          </h1>
          <p className="text-lg text-ghl-neutral-600 mb-8">
            Thank you for contacting us. We&apos;ll get back to you within 24 hours.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="btn btn-primary"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-ghl-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-ghl-neutral-100 mb-8">
              Get in touch with our logistics experts. We&apos;re here to help with your shipping needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-ghl-neutral-900 mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ghl-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-ghl-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ghl-neutral-900 mb-1">Phone</h3>
                    <p className="text-ghl-neutral-600 mb-1">+1 (555) 123-4567</p>
                    <p className="text-sm text-ghl-neutral-500">24/7 Emergency Support</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ghl-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-ghl-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ghl-neutral-900 mb-1">Email</h3>
                    <p className="text-ghl-neutral-600 mb-1">info@globalharvestlogistics.com</p>
                    <p className="text-sm text-ghl-neutral-500">General inquiries</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ghl-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-ghl-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ghl-neutral-900 mb-1">Address</h3>
                    <p className="text-ghl-neutral-600">
                      123 Logistics Drive<br />
                      Port City, PC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ghl-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-ghl-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ghl-neutral-900 mb-1">Business Hours</h3>
                    <p className="text-ghl-neutral-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Emergency Support Only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ghl-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-ghl-neutral-300 rounded-lg focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ghl-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-ghl-neutral-300 rounded-lg focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-ghl-neutral-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-ghl-neutral-300 rounded-lg focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-ghl-neutral-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-ghl-neutral-300 rounded-lg focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-ghl-neutral-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-ghl-neutral-300 rounded-lg focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent"
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
                  <label htmlFor="message" className="block text-sm font-medium text-ghl-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-ghl-neutral-300 rounded-lg focus:ring-2 focus:ring-ghl-primary-500 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <TruckLoading size="sm" className="!flex-row" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-ghl-primary-600 text-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl text-ghl-neutral-100 mb-8">
              For urgent shipping issues or emergencies, call our 24/7 support line.
            </p>
            <a 
              href="tel:+15551234567"
              className="btn btn-secondary btn-lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Emergency Line: +1 (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
