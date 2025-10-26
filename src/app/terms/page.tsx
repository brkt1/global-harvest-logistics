'use client'

import EditableText from '@/components/ui/EditableText'

export default function Terms() {
  return (
    <div className="min-h-screen bg-ghl-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <EditableText 
              content="Terms of Service"
              contentKey="terms-hero-title"
              tag="h1"
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            />
            <EditableText 
              content="Last updated: January 2024"
              contentKey="terms-hero-date"
              tag="p"
              className="text-xl text-ghl-neutral-100 mb-8"
            />
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <EditableText 
                content="Acceptance of Terms"
                contentKey="terms-section-1-title"
                tag="h2"
                className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6"
              />
              <EditableText 
                content="By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement."
                contentKey="terms-section-1-content"
                tag="p"
                className="text-ghl-neutral-700 mb-6"
              />

              <EditableText 
                content="Services Description"
                contentKey="terms-section-2-title"
                tag="h2"
                className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6"
              />
              <EditableText 
                content="Global Harvest Logistics provides temperature-controlled shipping and logistics services for specialty commodities including coffee, olive oil, and other perishable goods."
                contentKey="terms-section-2-content"
                tag="p"
                className="text-ghl-neutral-700 mb-6"
              />

              <EditableText 
                content="User Responsibilities"
                contentKey="terms-section-3-title"
                tag="h2"
                className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6"
              />
              <EditableText 
                content="Users are responsible for providing accurate information, complying with applicable laws and regulations, and ensuring proper packaging of shipments."
                contentKey="terms-section-3-content"
                tag="p"
                className="text-ghl-neutral-700 mb-6"
              />

              <EditableText 
                content="Limitation of Liability"
                contentKey="terms-section-4-title"
                tag="h2"
                className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6"
              />
              <EditableText 
                content="Our liability is limited to the extent permitted by law. We are not liable for indirect, incidental, or consequential damages."
                contentKey="terms-section-4-content"
                tag="p"
                className="text-ghl-neutral-700 mb-6"
              />

              <EditableText 
                content="Governing Law"
                contentKey="terms-section-5-title"
                tag="h2"
                className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6"
              />
              <EditableText 
                content="These terms are governed by the laws of the United States and any disputes will be resolved in the appropriate courts."
                contentKey="terms-section-5-content"
                tag="p"
                className="text-ghl-neutral-700 mb-6"
              />

              <EditableText 
                content="Contact Information"
                contentKey="terms-section-6-title"
                tag="h2"
                className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6"
              />
              <EditableText 
                content="For questions about these Terms of Service, please contact us at legal@globalharvestlogistics.com or through our contact page."
                contentKey="terms-section-6-content"
                tag="p"
                className="text-ghl-neutral-700 mb-6"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
