import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const faqs = [
    {
      question: "What types of commodities do you handle?",
      answer: "We specialize in temperature-sensitive commodities including coffee beans, olive oil, specialty foods, and other perishable goods that require controlled temperature shipping."
    },
    {
      question: "How do you ensure temperature control during shipping?",
      answer: "We use state-of-the-art refrigerated containers and temperature monitoring systems that provide real-time tracking and alerts. Our facilities are equipped with climate-controlled storage and our team is trained in proper handling procedures."
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
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-ghl-neutral-100 mb-8">
              Find answers to common questions about our logistics services and shipping processes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-ghl-neutral-200">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-ghl-neutral-50 transition-colors">
                      <h3 className="text-lg font-semibold text-ghl-neutral-900 pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDown className="h-5 w-5 text-ghl-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-ghl-neutral-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-ghl-neutral-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-ghl-neutral-600 mb-8">
              Our logistics experts are here to help. Contact us for personalized assistance with your shipping needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn btn-primary">
                Contact Us
              </a>
              <a href="/quote" className="btn btn-secondary">
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
