'use client'

import EditableText from '@/components/ui/EditableText'
import { MessageCircle } from 'lucide-react'

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

  const formatJobApplicationMessage = (position: typeof positions[0]) => {
    const lines = [
      `Hello! I'm interested in applying for the ${position.title} position.`,
      '',
      `*Position Details:*`,
      `Title: ${position.title}`,
      `Department: ${position.department}`,
      `Location: ${position.location}`,
      `Type: ${position.type}`,
      '',
      `Please let me know the next steps in the application process.`,
      `I'm ready to share my resume and cover letter.`
    ]
    return encodeURIComponent(lines.join('\n'))
  }

  const sendJobApplicationToWhatsApp = (position: typeof positions[0]) => {
    const phoneNumber = '+251912422031'
    const message = formatJobApplicationMessage(position)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const sendResumeToWhatsApp = () => {
    const phoneNumber = '+251912422031'
    const message = encodeURIComponent(
      `Hello! I'm interested in working with Global Harvest Logistics. I don't see a specific position that matches my profile, but I'd like to send my resume for future opportunities.\n\nPlease let me know how I can proceed with my application.`
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-ghl-neutral-50">
      {/* Hero Section - Mobile optimized */}
      <section className="bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 text-white py-12 sm:py-16 lg:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <EditableText 
              content="Join Our Team"
              contentKey="careers-hero-title"
              tag="h1"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6"
            />
            <EditableText 
              content="Be part of a company that's revolutionizing sustainable logistics. We're looking for passionate individuals to help us deliver excellence."
              contentKey="careers-hero-description"
              tag="p"
              className="text-base sm:text-lg lg:text-xl text-ghl-neutral-100 mb-6 sm:mb-8"
            />
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <EditableText 
              content="Why Work at Global Harvest Logistics?"
              contentKey="careers-why-title"
              tag="h2"
              className="text-3xl font-heading font-bold text-ghl-neutral-900 mb-4"
            />
            <EditableText 
              content="We're building the future of sustainable logistics. Join a team that values innovation, environmental responsibility, and professional growth."
              contentKey="careers-why-description"
              tag="p"
              className="text-lg text-ghl-neutral-600 max-w-3xl mx-auto"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-ghl-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <EditableText 
                content="Sustainability Focus"
                contentKey="careers-feature-1-title"
                tag="h3"
                className="text-xl font-heading font-semibold text-ghl-neutral-900 mb-3"
              />
              <EditableText 
                content="Work for a company committed to environmental responsibility and sustainable practices."
                contentKey="careers-feature-1-description"
                tag="p"
                className="text-ghl-neutral-600"
              />
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-ghl-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <EditableText 
                content="Innovation"
                contentKey="careers-feature-2-title"
                tag="h3"
                className="text-xl font-heading font-semibold text-ghl-neutral-900 mb-3"
              />
              <EditableText 
                content="Be part of cutting-edge logistics technology and temperature control systems."
                contentKey="careers-feature-2-description"
                tag="p"
                className="text-ghl-neutral-600"
              />
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-ghl-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <EditableText 
                content="Team Culture"
                contentKey="careers-feature-3-title"
                tag="h3"
                className="text-xl font-heading font-semibold text-ghl-neutral-900 mb-3"
              />
              <EditableText 
                content="Join a collaborative team that values diversity, inclusion, and mutual support."
                contentKey="careers-feature-3-description"
                tag="p"
                className="text-ghl-neutral-600"
              />
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-ghl-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <EditableText 
                content="Growth Opportunities"
                contentKey="careers-feature-4-title"
                tag="h3"
                className="text-xl font-heading font-semibold text-ghl-neutral-900 mb-3"
              />
              <EditableText 
                content="Advance your career with professional development and leadership opportunities."
                contentKey="careers-feature-4-description"
                tag="p"
                className="text-ghl-neutral-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <EditableText 
              content="Open Positions"
              contentKey="careers-positions-title"
              tag="h2"
              className="text-3xl font-heading font-bold text-ghl-neutral-900 mb-4"
            />
            <EditableText 
              content="Explore current opportunities to join our growing team."
              contentKey="careers-positions-description"
              tag="p"
              className="text-lg text-ghl-neutral-600"
            />
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {positions.map((position, index) => (
              <div key={index} className="bg-ghl-neutral-50 rounded-xl p-6 border border-ghl-neutral-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <EditableText 
                      content={position.title}
                      contentKey={`careers-position-${index}-title`}
                      tag="h3"
                      className="text-xl font-heading font-semibold text-ghl-neutral-900 mb-2"
                    />
                    <div className="flex flex-wrap gap-4 text-sm text-ghl-neutral-600">
                      <EditableText 
                        content={position.department}
                        contentKey={`careers-position-${index}-department`}
                        tag="span"
                      />
                      <span>•</span>
                      <EditableText 
                        content={position.location}
                        contentKey={`careers-position-${index}-location`}
                        tag="span"
                      />
                      <span>•</span>
                      <EditableText 
                        content={position.type}
                        contentKey={`careers-position-${index}-type`}
                        tag="span"
                      />
                    </div>
                  </div>
                  <button 
                    onClick={() => sendJobApplicationToWhatsApp(position)}
                    className="btn btn-primary mt-4 md:mt-0 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <EditableText 
                      content="Apply Now via WhatsApp"
                      contentKey="careers-apply-button"
                      tag="span"
                    />
                  </button>
                </div>
                <EditableText 
                  content={position.description}
                  contentKey={`careers-position-${index}-description`}
                  tag="p"
                  className="text-ghl-neutral-600"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <EditableText 
              content="Employee Benefits"
              contentKey="careers-benefits-title"
              tag="h2"
              className="text-3xl font-heading font-bold text-ghl-neutral-900 mb-4"
            />
            <EditableText 
              content="We offer comprehensive benefits to support our team members and their families."
              contentKey="careers-benefits-description"
              tag="p"
              className="text-lg text-ghl-neutral-600"
            />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-ghl-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-ghl-primary-600 text-sm">✓</span>
                  </div>
                  <EditableText 
                    content={benefit}
                    contentKey={`careers-benefit-${index}`}
                    tag="span"
                    className="text-ghl-neutral-700"
                  />
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
            <EditableText 
              content="How to Apply"
              contentKey="careers-apply-title"
              tag="h2"
              className="text-3xl font-heading font-bold text-ghl-neutral-900 mb-4"
            />
            <EditableText 
              content="Ready to join our team? Here's how to get started."
              contentKey="careers-apply-description"
              tag="p"
              className="text-lg text-ghl-neutral-600"
            />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-ghl-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <EditableText 
                  content="Browse Positions"
                  contentKey="careers-step-1-title"
                  tag="h3"
                  className="text-xl font-heading font-semibold text-ghl-neutral-900 mb-3"
                />
                <EditableText 
                  content="Explore our open positions and find the role that matches your skills and interests."
                  contentKey="careers-step-1-description"
                  tag="p"
                  className="text-ghl-neutral-600"
                />
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-ghl-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <EditableText 
                  content="Submit Application"
                  contentKey="careers-step-2-title"
                  tag="h3"
                  className="text-xl font-heading font-semibold text-ghl-neutral-900 mb-3"
                />
                <EditableText 
                  content="Complete our online application form and upload your resume and cover letter."
                  contentKey="careers-step-2-description"
                  tag="p"
                  className="text-ghl-neutral-600"
                />
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-ghl-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <EditableText 
                  content="Interview Process"
                  contentKey="careers-step-3-title"
                  tag="h3"
                  className="text-xl font-heading font-semibold text-ghl-neutral-900 mb-3"
                />
                <EditableText 
                  content="Our team will review your application and contact you to schedule an interview."
                  contentKey="careers-step-3-description"
                  tag="p"
                  className="text-ghl-neutral-600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-ghl-primary-600 text-white">
        <div className="container-custom">
          <div className="text-center">
            <EditableText 
              content="Don't See the Right Position?"
              contentKey="careers-cta-title"
              tag="h2"
              className="text-3xl font-heading font-bold mb-4"
            />
            <EditableText 
              content="We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities."
              contentKey="careers-cta-description"
              tag="p"
              className="text-xl text-ghl-neutral-100 mb-8"
            />
            <button 
              onClick={sendResumeToWhatsApp}
              className="btn btn-secondary flex items-center justify-center gap-2 mx-auto"
            >
              <MessageCircle className="h-4 w-4" />
              <EditableText 
                content="Send Your Resume via WhatsApp"
                contentKey="careers-cta-button"
                tag="span"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
