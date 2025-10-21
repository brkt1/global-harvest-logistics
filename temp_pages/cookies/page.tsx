export default function Cookies() {
  return (
    <div className="min-h-screen bg-ghl-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-ghl-neutral-100 mb-8">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6">
                What Are Cookies?
              </h2>
              <p className="text-ghl-neutral-700 mb-6">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience and understand how you use our site.
              </p>

              <h2 className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6">
                Types of Cookies We Use
              </h2>
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-ghl-neutral-900 mb-2">Essential Cookies</h3>
                  <p className="text-ghl-neutral-700">
                    These cookies are necessary for the website to function properly and cannot be disabled.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ghl-neutral-900 mb-2">Analytics Cookies</h3>
                  <p className="text-ghl-neutral-700">
                    These cookies help us understand how visitors interact with our website by collecting 
                    and reporting information anonymously.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ghl-neutral-900 mb-2">Functional Cookies</h3>
                  <p className="text-ghl-neutral-700">
                    These cookies enable enhanced functionality and personalization, such as remembering 
                    your preferences.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6">
                Managing Cookies
              </h2>
              <p className="text-ghl-neutral-700 mb-6">
                You can control and manage cookies through your browser settings. However, disabling 
                certain cookies may affect the functionality of our website.
              </p>

              <h2 className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6">
                Third-Party Cookies
              </h2>
              <p className="text-ghl-neutral-700 mb-6">
                We may use third-party services that set their own cookies. These services have their 
                own privacy policies and cookie practices.
              </p>

              <h2 className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-6">
                Contact Us
              </h2>
              <p className="text-ghl-neutral-700 mb-6">
                If you have any questions about our use of cookies, please contact us at 
                privacy@globalharvestlogistics.com or through our contact page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
