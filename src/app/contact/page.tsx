"use client"

import type React from "react"

import ContactInfo from "@/components/ui/ContactInfo"
import EditableText from "@/components/ui/EditableText"
import { CheckCircle, MessageCircle, AlertCircle } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    productInterest: "",
    targetMarket: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setSubmitMessage(data.message)
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          productInterest: "",
          targetMarket: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
        setSubmitMessage(data.error || "Failed to send message")
      }
    } catch (error) {
      setSubmitStatus("error")
      setSubmitMessage("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Contact Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Get In Touch Section */}
        <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-100 mb-8 sm:mb-10 lg:mb-12">
          <EditableText
            content="Get In Touch"
            contentKey="contact-section-title"
            tag="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6"
          />
          <EditableText
            content="Your Gateway to Premium Ethiopian Agricultural Exports"
            contentKey="contact-section-subtitle"
            tag="p"
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-4 sm:mb-6 lg:mb-8 font-semibold"
          />
          <EditableText
            content="Ready to source premium Ethiopian sesame, pulses, and beans? Contact our export specialists in Addis Ababa for quotes, samples, and partnership opportunities."
            contentKey="contact-section-description"
            tag="p"
            className="text-base sm:text-lg lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed"
          />
          <div className="flex items-start space-x-3 sm:space-x-4">
            <CheckCircle className="h-6 w-6 sm:h-7 sm:w-7 text-green-600 mt-0.5 flex-shrink-0" />
            <EditableText
              content="Based in the heart of Ethiopia's commercial capital"
              contentKey="contact-section-benefit"
              tag="p"
              className="text-base sm:text-lg lg:text-lg text-gray-700 pt-0.5"
            />
          </div>
        </div>

        {/* Main Layout - Responsive Grid: Stacked on mobile, Side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Left Column - Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-100 lg:sticky lg:top-6">
              <EditableText
                content="Contact Details"
                contentKey="contact-info-title"
                tag="h2"
                className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-8"
              />
              <ContactInfo />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-100">
              <EditableText
                content="Send Us a Message"
                contentKey="contact-form-title"
                tag="h2"
                className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6"
              />
              <EditableText
                content="We typically respond within 24 hours"
                contentKey="contact-form-response-time"
                tag="p"
                className="text-base sm:text-lg lg:text-lg text-gray-600 mb-6 sm:mb-8 lg:mb-10"
              />

              {submitStatus === "success" && (
                <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3 sm:gap-4">
                  <CheckCircle className="h-6 w-6 sm:h-7 sm:w-7 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-900 text-base sm:text-lg">Success!</p>
                    <p className="text-sm sm:text-base text-green-800 mt-1">{submitMessage}</p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 sm:gap-4">
                  <AlertCircle className="h-6 w-6 sm:h-7 sm:w-7 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-red-900 text-base sm:text-lg">Error</p>
                    <p className="text-sm sm:text-base text-red-800 mt-1">{submitMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7 lg:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 lg:gap-8">
                  {/* Name - Full width */}
                  <div className="sm:col-span-2">
                    <EditableText
                      content="Full Name *"
                      contentKey="contact-form-name-label"
                      tag="span"
                      className="block text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-3"
                    />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-200 rounded-lg sm:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base sm:text-lg bg-gray-50 transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div className="sm:col-span-1">
                    <EditableText
                      content="Email Address *"
                      contentKey="contact-form-email-label"
                      tag="span"
                      className="block text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-3"
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-200 rounded-lg sm:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base sm:text-lg bg-gray-50 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Company */}
                  <div className="sm:col-span-1">
                    <EditableText
                      content="Company Name *"
                      contentKey="contact-form-company-label"
                      tag="span"
                      className="block text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-3"
                    />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-200 rounded-lg sm:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base sm:text-lg bg-gray-50 transition-all"
                      placeholder="Your company name"
                    />
                  </div>

                  {/* Phone */}
                  <div className="sm:col-span-1">
                    <EditableText
                      content="Phone Number"
                      contentKey="contact-form-phone-label"
                      tag="span"
                      className="block text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-3"
                    />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-200 rounded-lg sm:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base sm:text-lg bg-gray-50 transition-all"
                      placeholder="+251 911 156 824"
                    />
                  </div>

                  {/* Product Interest */}
                  <div className="sm:col-span-1">
                    <EditableText
                      content="Product Interest *"
                      contentKey="contact-form-product-label"
                      tag="span"
                      className="block text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-3"
                    />
                    <select
                      id="productInterest"
                      name="productInterest"
                      required
                      value={formData.productInterest}
                      onChange={handleChange}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-200 rounded-lg sm:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base sm:text-lg bg-gray-50 transition-all"
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
                      className="block text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-3"
                    />
                    <input
                      type="text"
                      id="targetMarket"
                      name="targetMarket"
                      required
                      value={formData.targetMarket}
                      onChange={handleChange}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-200 rounded-lg sm:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base sm:text-lg bg-gray-50 transition-all"
                      placeholder="Enter your target market or country"
                    />
                  </div>

                  {/* Message - Full width */}
                  <div className="sm:col-span-2">
                    <EditableText
                      content="Message *"
                      contentKey="contact-form-message-label"
                      tag="span"
                      className="block text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-3"
                    />
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-200 rounded-lg sm:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base sm:text-lg bg-gray-50 transition-all resize-y"
                      placeholder="Please include quantity requirements, quality specifications, and any other details..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={
                    isSubmitting ||
                    !formData.name ||
                    !formData.email ||
                    !formData.company ||
                    !formData.productInterest ||
                    !formData.targetMarket ||
                    !formData.message
                  }
                  className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white py-4 sm:py-5 px-6 sm:px-8 rounded-lg sm:rounded-lg font-semibold text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
