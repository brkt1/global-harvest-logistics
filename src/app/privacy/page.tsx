'use client'

import EditableText from '@/components/ui/EditableText'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-ghl-neutral-50">
      {/* Hero section removed per request */}

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <EditableText 
                content="Information We Collect"
                contentKey="privacy-section-1-title"
                tag="h2"
                className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6"
              />
              <EditableText 
                content="We collect information you provide directly to us, such as when you create an account, request a quote, or contact us for support. This may include your name, email address, phone number, company information, and shipping details."
                contentKey="privacy-section-1-content"
                tag="p"
                className="text-ghl-neutral-700 mb-6"
              />

              <EditableText 
                content="How We Use Your Information"
                contentKey="privacy-section-2-title"
                tag="h2"
                className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6"
              />
              <EditableText 
                content="We use the information we collect to provide, maintain, and improve our services, process transactions, communicate with you, and ensure the security of our platform."
                contentKey="privacy-section-2-content"
                tag="p"
                className="text-ghl-neutral-700 mb-6"
              />

              <EditableText 
                content="Information Sharing"
                contentKey="privacy-section-3-title"
                tag="h2"
                className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6"
              />
              <EditableText 
                content="We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law."
                contentKey="privacy-section-3-content"
                tag="p"
                className="text-ghl-neutral-700 mb-6"
              />

              <EditableText 
                content="Data Security"
                contentKey="privacy-section-4-title"
                tag="h2"
                className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6"
              />
              <EditableText 
                content="We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
                contentKey="privacy-section-4-content"
                tag="p"
                className="text-ghl-neutral-700 mb-6"
              />

              <EditableText 
                content="Your Rights"
                contentKey="privacy-section-5-title"
                tag="h2"
                className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6"
              />
              <EditableText 
                content="You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us."
                contentKey="privacy-section-5-content"
                tag="p"
                className="text-ghl-neutral-700 mb-6"
              />

              <EditableText 
                content="Contact Us"
                contentKey="privacy-section-6-title"
                tag="h2"
                className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6"
              />
              <EditableText 
                content="If you have any questions about this Privacy Policy, please contact us at privacy@globalharvestlogistics.com or through our contact page."
                contentKey="privacy-section-6-content"
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
