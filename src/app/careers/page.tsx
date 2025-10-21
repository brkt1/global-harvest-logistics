export default function Careers() {
  const positions = [
    {
      title: "Logistics Coordinator",
      department: "Operations",
      location: "Port City, PC",
      type: "Full-time",
      description: "Manage temperature-controlled shipments and coordinate with international partners."
    },
    {
      title: "Quality Assurance Specialist",
      department: "Quality Control",
      location: "Port City, PC",
      type: "Full-time",
      description: "Ensure compliance with food safety standards and temperature control protocols."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Service",
      location: "Remote",
      type: "Full-time",
      description: "Build relationships with clients and ensure exceptional service delivery."
    },
    {
      title: "Sustainability Analyst",
      department: "Environmental",
      location: "Port City, PC",
      type: "Full-time",
      description: "Develop and implement sustainable logistics practices and carbon reduction initiatives."
    }
  ]

  const benefits = [
    "Competitive salary and performance bonuses",
    "Comprehensive health, dental, and vision insurance",
    "401(k) retirement plan with company matching",
    "Flexible work arrangements and remote options",
    "Professional development and training opportunities",
    "Paid time off and company holidays",
    "Employee wellness programs",
    "Career advancement opportunities"
  ]

  return (
    <div className="min-h-screen bg-ghl-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-ghl-neutral-100 mb-8">
              Be part of a company that&apos;s revolutionizing sustainable logistics. 
              We&apos;re looking for passionate individuals to help us deliver excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-ghl-neutral-900 mb-4">
              Why Work at Global Harvest Logistics?
            </h2>
            <p className="text-lg text-ghl-neutral-600 max-w-3xl mx-auto">
              We&apos;re building the future of sustainable logistics. Join a team that values innovation, 
              environmental responsibility, and professional growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-ghl-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-ghl-neutral-900 mb-3">
                Sustainability Focus
              </h3>
              <p className="text-ghl-neutral-600">
                Work for a company committed to environmental responsibility and sustainable practices.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-ghl-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-ghl-neutral-900 mb-3">
                Innovation
              </h3>
              <p className="text-ghl-neutral-600">
                Be part of cutting-edge logistics technology and temperature control systems.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-ghl-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-ghl-neutral-900 mb-3">
                Team Culture
              </h3>
              <p className="text-ghl-neutral-600">
                Join a collaborative team that values diversity, inclusion, and mutual support.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-ghl-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-ghl-neutral-900 mb-3">
                Growth Opportunities
              </h3>
              <p className="text-ghl-neutral-600">
                Advance your career with professional development and leadership opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-ghl-neutral-900 mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-ghl-neutral-600">
              Explore current opportunities to join our growing team.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {positions.map((position, index) => (
              <div key={index} className="bg-ghl-neutral-50 rounded-xl p-6 border border-ghl-neutral-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-ghl-neutral-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-ghl-neutral-600">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <button className="btn btn-primary mt-4 md:mt-0">
                    Apply Now
                  </button>
                </div>
                <p className="text-ghl-neutral-600">
                  {position.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-ghl-neutral-900 mb-4">
              Employee Benefits
            </h2>
            <p className="text-lg text-ghl-neutral-600">
              We offer comprehensive benefits to support our team members and their families.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-ghl-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-ghl-primary-600 text-sm">✓</span>
                  </div>
                  <span className="text-ghl-neutral-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-ghl-neutral-900 mb-4">
              How to Apply
            </h2>
            <p className="text-lg text-ghl-neutral-600">
              Ready to join our team? Here&apos;s how to get started.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-ghl-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-heading font-semibold text-ghl-neutral-900 mb-3">
                  Browse Positions
                </h3>
                <p className="text-ghl-neutral-600">
                  Explore our open positions and find the role that matches your skills and interests.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-ghl-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-heading font-semibold text-ghl-neutral-900 mb-3">
                  Submit Application
                </h3>
                <p className="text-ghl-neutral-600">
                  Complete our online application form and upload your resume and cover letter.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-ghl-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-heading font-semibold text-ghl-neutral-900 mb-3">
                  Interview Process
                </h3>
                <p className="text-ghl-neutral-600">
                  Our team will review your application and contact you to schedule an interview.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-ghl-primary-600 text-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Don&apos;t See the Right Position?
            </h2>
            <p className="text-xl text-ghl-neutral-100 mb-8">
              We&apos;re always looking for talented individuals. Send us your resume and we&apos;ll keep you in mind for future opportunities.
            </p>
            <a href="/contact" className="btn btn-secondary">
              Send Your Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
