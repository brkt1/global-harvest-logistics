export default function Terms() {
  return (
    <div className="min-h-screen bg-ghl-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-ghl-neutral-100 mb-8">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6">
                Acceptance of Terms
              </h2>
              <p className="text-ghl-neutral-700 mb-6">
                By accessing and using our services, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>

              <h2 className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6">
                Services Description
              </h2>
              <p className="text-ghl-neutral-700 mb-6">
                Global Harvest Logistics provides temperature-controlled shipping and logistics 
                services for specialty commodities including coffee, olive oil, and other perishable goods.
              </p>

              <h2 className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6">
                User Responsibilities
              </h2>
              <p className="text-ghl-neutral-700 mb-6">
                Users are responsible for providing accurate information, complying with applicable 
                laws and regulations, and ensuring proper packaging of shipments.
              </p>

              <h2 className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6">
                Limitation of Liability
              </h2>
              <p className="text-ghl-neutral-700 mb-6">
                Our liability is limited to the extent permitted by law. We are not liable for 
                indirect, incidental, or consequential damages.
              </p>

              <h2 className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6">
                Governing Law
              </h2>
              <p className="text-ghl-neutral-700 mb-6">
                These terms are governed by the laws of the United States and any disputes will 
                be resolved in the appropriate courts.
              </p>

              <h2 className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6">
                Contact Information
              </h2>
              <p className="text-ghl-neutral-700 mb-6">
                For questions about these Terms of Service, please contact us at 
                legal@globalharvestlogistics.com or through our contact page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
