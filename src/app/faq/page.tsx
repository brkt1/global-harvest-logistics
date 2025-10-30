'use client'

import EditableText from '@/components/ui/EditableText'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const faqs = [
    {
      question: "What types of commodities do you handle?",
      answer: "We specialize in premium Ethiopian agricultural exports including sesame seeds (Humera and Wollega varieties), pulses, and beans (red kidney beans, white pea beans, red speckled beans, soya beans). We ensure quality control and proper handling throughout the export process."
    },
    {
      question: "How do you ensure quality control during shipping?",
      answer: "We implement rigorous quality checks at every stage of the export process. Our Addis Ababa warehouse operations include thorough cleaning, sorting, and grading according to ECX and buyer specifications. All products are quality-checked before shipment via Djibouti port with complete documentation and traceability."
    },
    {
      question: "What certifications do you have?",
      answer: "We are certified with ISO 9001 (Quality Management), HACCP (Food Safety), FDA approved, and Organic certified. These certifications ensure the highest standards of quality and safety for your shipments."
    },
    {
      question: "How long does shipping typically take?",
      answer: "Shipping times vary depending on origin and destination. Domestic shipments typically take 3-7 days, while international shipments can take 7-21 days. We provide detailed timelines when you request a quote."
    },
    {
      question: "Do you provide insurance for shipments?",
      answer: "Yes, we offer comprehensive cargo insurance options to protect your valuable commodities. Our insurance covers loss, damage, and temperature-related issues during transit."
    },
    {
      question: "Can I track my shipment in real-time?",
      answer: "Absolutely! Our advanced tracking system provides real-time updates on your shipment's location, temperature conditions, and estimated delivery time. You can track your shipment using our online portal or mobile app."
    },
    {
      question: "What documentation do I need for international shipping?",
      answer: "Required documentation varies by destination and commodity type. Generally, you'll need commercial invoices, packing lists, certificates of origin, and any required permits. We'll guide you through the specific requirements for your shipment."
    },
    {
      question: "Do you offer sustainable shipping options?",
      answer: "Yes, sustainability is a core value. We offer carbon-neutral shipping options, use eco-friendly packaging materials, and have implemented green logistics practices throughout our operations."
    },
    {
      question: "What happens if my shipment is delayed?",
      answer: "We monitor all shipments closely and will notify you immediately of any delays. Our team works proactively to resolve issues and minimize impact. We also provide alternative solutions when possible."
    },
    {
      question: "How do I get a quote for my shipment?",
      answer: "You can request a quote through our online form, call us directly, or email us with your shipment details. We typically provide detailed quotes within 24 hours of your request."
    }
  ]

  return (
    <div className="min-h-screen bg-ghl-neutral-50">
      {/* Hero section removed per request */}

      {/* FAQ Section - Mobile optimized */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-ghl-neutral-200">
                  <details className="group">
                    <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-ghl-neutral-50 transition-colors">
                      <EditableText 
                        content={faq.question}
                        contentKey={`faq-question-${index}`}
                        tag="h3"
                        className="text-base sm:text-lg font-semibold text-ghl-neutral-900 pr-3 sm:pr-4"
                      />
                      <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-ghl-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <EditableText 
                        content={faq.answer}
                        contentKey={`faq-answer-${index}`}
                        tag="p"
                        className="text-sm sm:text-base text-ghl-neutral-600 leading-relaxed"
                      />
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA - Mobile optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <EditableText 
              content="Still Have Questions?"
              contentKey="faq-cta-title"
              tag="h2"
              className="text-2xl sm:text-3xl font-heading font-bold text-ghl-neutral-900 mb-3 sm:mb-4"
            />
            <EditableText 
              content="Our logistics experts are here to help. Contact us for personalized assistance with your shipping needs."
              contentKey="faq-cta-description"
              tag="p"
              className="text-base sm:text-lg text-ghl-neutral-600 mb-6 sm:mb-8"
            />
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a href="/contact" className="btn btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                <EditableText 
                  content="Contact Us"
                  contentKey="faq-contact-button"
                  tag="span"
                />
              </a>
              <a href="/quote" className="btn btn-secondary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                <EditableText 
                  content="Get Quote"
                  contentKey="faq-quote-button"
                  tag="span"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
