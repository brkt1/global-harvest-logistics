'use client'

import EditableText from '@/components/ui/EditableText'
import { MessageCircle } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

export default function QuotePage() {
  const searchParams = useSearchParams()
  const selectedProduct = useMemo(() => {
    const productId = searchParams.get('productId') || ''
    const productTitle = searchParams.get('productTitle') || ''
    const productImage = searchParams.get('productImage') || ''
    if (!productId && !productTitle) return null
    return { id: productId, title: productTitle, image: productImage }
  }, [searchParams])

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

  // Infer cargo type from selected product (if present)
  useEffect(() => {
    if (!selectedProduct) return
    if (formData.cargoType) return
    const idAndTitle = `${selectedProduct.id} ${selectedProduct.title}`.toLowerCase()
    let inferred: string = ''
    if (idAndTitle.includes('sesame')) inferred = 'sesame'
    else if (idAndTitle.includes('bean')) inferred = 'beans'
    else inferred = 'general'
    setFormData(prev => ({ ...prev, cargoType: inferred }))
  }, [selectedProduct, formData.cargoType])

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
      ...(selectedProduct ? [
        `*Selected Product:*`,
        `Product: ${selectedProduct.title || selectedProduct.id}`,
        ...(selectedProduct.id ? [`Product ID: ${selectedProduct.id}`] : []),
        ''
      ] : []),
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
    <div className="min-h-screen bg-gradient-to-br from-ghl-primary-50 via-white to-ghl-secondary-50 relative">
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]">
        <div className="absolute -top-24 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-ghl-primary-200/50 to-ghl-secondary-200/50 blur-3xl" />
      </div>

      <section className="relative z-10 py-10 sm:py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <EditableText
              content="Request a Modern Logistics Quote"
              contentKey="quote-form-title"
              tag="h2"
              className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-ghl-primary-700 to-ghl-secondary-600"
            />
            <EditableText
              content="Share your shipment details and we'll respond with a tailored estimate."
              contentKey="quote-form-subtitle"
              tag="p"
              className="mt-2 text-sm sm:text-base text-ghl-neutral-700"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* form card */}
            <form onSubmit={(e) => e.preventDefault()} className="lg:col-span-2">
              <div className="rounded-2xl border border-ghl-neutral-200/70 bg-white/80 backdrop-blur shadow-xl">
                <div className="p-5 sm:p-8">
                  {/* section: contact */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-ghl-primary-100 text-ghl-primary-700 text-xs font-semibold">1</span>
                      <EditableText
                        content="Contact Information"
                        contentKey="quote-form-contact-title"
                        tag="h3"
                        className="text-lg sm:text-xl font-heading font-semibold text-ghl-neutral-900"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wide font-medium text-ghl-neutral-600 mb-2">
                          <EditableText content="Full Name *" contentKey="quote-form-name-label" tag="span" />
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl border border-ghl-neutral-300 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-ghl-primary-100 focus:border-ghl-primary-500 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wide font-medium text-ghl-neutral-600 mb-2">
                          <EditableText content="Email Address *" contentKey="quote-form-email-label" tag="span" />
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-ghl-neutral-300 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-ghl-primary-100 focus:border-ghl-primary-500 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wide font-medium text-ghl-neutral-600 mb-2">
                          <EditableText content="Phone Number" contentKey="quote-form-phone-label" tag="span" />
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567"
                          className="w-full px-4 py-3 rounded-xl border border-ghl-neutral-300 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-ghl-primary-100 focus:border-ghl-primary-500 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wide font-medium text-ghl-neutral-600 mb-2">
                          <EditableText content="Company Name" contentKey="quote-form-company-label" tag="span" />
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company"
                          className="w-full px-4 py-3 rounded-xl border border-ghl-neutral-300 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-ghl-primary-100 focus:border-ghl-primary-500 transition"
                        />
                      </div>
                    </div>
                  </div>

                  {/* section: shipment */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-ghl-secondary-100 text-ghl-secondary-700 text-xs font-semibold">2</span>
                      <EditableText
                        content="Shipment Details"
                        contentKey="quote-form-shipment-title"
                        tag="h3"
                        className="text-lg sm:text-xl font-heading font-semibold text-ghl-neutral-900"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wide font-medium text-ghl-neutral-600 mb-2">
                          <EditableText content="Origin *" contentKey="quote-form-origin-label" tag="span" />
                        </label>
                        <input
                          type="text"
                          name="origin"
                          value={formData.origin}
                          onChange={handleInputChange}
                          required
                          placeholder="City, Country"
                          className="w-full px-4 py-3 rounded-xl border border-ghl-neutral-300 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-ghl-primary-100 focus:border-ghl-primary-500 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wide font-medium text-ghl-neutral-600 mb-2">
                          <EditableText content="Destination *" contentKey="quote-form-destination-label" tag="span" />
                        </label>
                        <input
                          type="text"
                          name="destination"
                          value={formData.destination}
                          onChange={handleInputChange}
                          required
                          placeholder="City, Country"
                          className="w-full px-4 py-3 rounded-xl border border-ghl-neutral-300 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-ghl-primary-100 focus:border-ghl-primary-500 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wide font-medium text-ghl-neutral-600 mb-2">
                          <EditableText content="Cargo Type *" contentKey="quote-form-cargo-label" tag="span" />
                        </label>
                        <select
                          name="cargoType"
                          value={formData.cargoType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-ghl-neutral-300 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-ghl-primary-100 focus:border-ghl-primary-500 transition"
                        >
                          <option value="">Select cargo type</option>
                          <option value="sesame">Sesame</option>
                          <option value="beans">Beans & Pulses</option>
                          <option value="general">General Cargo</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wide font-medium text-ghl-neutral-600 mb-2">
                          <EditableText content="Weight/Volume *" contentKey="quote-form-weight-label" tag="span" />
                        </label>
                        <input
                          type="text"
                          name="weight"
                          value={formData.weight}
                          onChange={handleInputChange}
                          required
                          placeholder="e.g., 1000 kg, 20 containers"
                          className="w-full px-4 py-3 rounded-xl border border-ghl-neutral-300 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-ghl-primary-100 focus:border-ghl-primary-500 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wide font-medium text-ghl-neutral-600 mb-2">
                          <EditableText content="Temperature Requirements" contentKey="quote-form-temperature-label" tag="span" />
                        </label>
                        <input
                          type="text"
                          name="temperature"
                          value={formData.temperature}
                          onChange={handleInputChange}
                          placeholder="e.g., 2-8°C, Ambient"
                          className="w-full px-4 py-3 rounded-xl border border-ghl-neutral-300 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-ghl-primary-100 focus:border-ghl-primary-500 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wide font-medium text-ghl-neutral-600 mb-2">
                          <EditableText content="Timeline *" contentKey="quote-form-timeline-label" tag="span" />
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-ghl-neutral-300 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-ghl-primary-100 focus:border-ghl-primary-500 transition"
                        >
                          <option value="">Select timeline</option>
                          <option value="urgent">Urgent (1-3 days)</option>
                          <option value="standard">Standard (1-2 weeks)</option>
                          <option value="flexible">Flexible (2-4 weeks)</option>
                          <option value="planning">Planning ahead (1+ months)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* section: special requirements */}
                  <div className="mb-8">
                    <label className="block text-[11px] uppercase tracking-wide font-medium text-ghl-neutral-600 mb-2">
                      <EditableText content="Special Requirements" contentKey="quote-form-special-label" tag="span" />
                    </label>
                    <textarea
                      name="specialRequirements"
                      value={formData.specialRequirements}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Any special handling, documentation, or other requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-ghl-neutral-300 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-ghl-primary-100 focus:border-ghl-primary-500 transition"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={sendToWhatsApp}
                      disabled={!formData.name || !formData.email || !formData.origin || !formData.destination || !formData.cargoType || !formData.weight || !formData.timeline}
                      className="inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] active:bg-[#1DA851] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#25D366]/20 hover:shadow-xl transition"
                    >
                      <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                      <EditableText content="Send via WhatsApp" contentKey="quote-form-whatsapp" tag="span" />
                    </button>
                  </div>
                </div>
              </div>
            </form>

            {/* summary card */}
            <aside className="lg:sticky lg:top-6 h-fit">
              <div className="rounded-2xl border border-ghl-neutral-200/70 bg-white/80 backdrop-blur shadow-xl p-5 sm:p-6">
                <div className="text-sm font-semibold text-ghl-neutral-900 mb-4">Summary</div>
                {selectedProduct ? (
                  <div className="flex items-center gap-4 mb-5">
                    {selectedProduct.image ? (
                      <img src={selectedProduct.image} alt={selectedProduct.title || 'Selected product'} className="w-16 h-16 rounded-lg object-cover" />
                    ) : (
                      <div className="w-16 h-16 rounded-lg bg-ghl-neutral-100 flex items-center justify-center text-xs text-ghl-neutral-500">No image</div>
                    )}
                    <div className="min-w-0">
                      <div className="text-xs text-ghl-neutral-600">Selected Product</div>
                      <div className="text-base font-semibold text-ghl-neutral-900 truncate">{selectedProduct.title || selectedProduct.id}</div>
                      {selectedProduct.id && <div className="text-xs text-ghl-neutral-500 truncate">ID: {selectedProduct.id}</div>}
                    </div>
                  </div>
                ) : (
                  <div className="text-sm text-ghl-neutral-600 mb-5">No product selected. You can still request a general quote.</div>
                )}

                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between"><span className="text-ghl-neutral-600">From</span><span className="font-medium text-ghl-neutral-900 truncate max-w-[60%]">{formData.origin || '—'}</span></div>
                  <div className="flex items-center justify-between"><span className="text-ghl-neutral-600">To</span><span className="font-medium text-ghl-neutral-900 truncate max-w-[60%]">{formData.destination || '—'}</span></div>
                  <div className="flex items-center justify-between"><span className="text-ghl-neutral-600">Cargo</span><span className="font-medium text-ghl-neutral-900 truncate max-w-[60%]">{formData.cargoType || '—'}</span></div>
                  <div className="flex items-center justify-between"><span className="text-ghl-neutral-600">Weight</span><span className="font-medium text-ghl-neutral-900 truncate max-w-[60%]">{formData.weight || '—'}</span></div>
                  <div className="flex items-center justify-between"><span className="text-ghl-neutral-600">Timeline</span><span className="font-medium text-ghl-neutral-900 truncate max-w-[60%]">{formData.timeline || '—'}</span></div>
                </div>

                <div className="mt-5 text-xs text-ghl-neutral-500">We usually respond within 24 hours.</div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
