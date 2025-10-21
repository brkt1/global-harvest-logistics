export default function Privacy() {
  return (
    <div className="min-h-screen bg-ghl-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-ghl-neutral-100 mb-8">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6">
                Information We Collect
              </h2>
              <p className="text-ghl-neutral-700 mb-6">
                We collect information you provide directly to us, such as when you create an account, 
                request a quote, or contact us for support. This may include your name, email address, 
                phone number, company information, and shipping details.
              </p>

              <h2 className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6">
                How We Use Your Information
              </h2>
              <p className="text-ghl-neutral-700 mb-6">
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, communicate with you, and ensure the security of our platform.
              </p>

              <h2 className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6">
                Information Sharing
              </h2>
              <p className="text-ghl-neutral-700 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy or as required by law.
              </p>

              <h2 className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6">
                Data Security
              </h2>
              <p className="text-ghl-neutral-700 mb-6">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6">
                Your Rights
              </h2>
              <p className="text-ghl-neutral-700 mb-6">
                You have the right to access, update, or delete your personal information. You may also 
                opt out of certain communications from us.
              </p>

              <h2 className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6">
                Contact Us
              </h2>
              <p className="text-ghl-neutral-700 mb-6">
                If you have any questions about this Privacy Policy, please contact us at 
                privacy@globalharvestlogistics.com or through our contact page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
