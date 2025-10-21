import TrustedBySection from '@/components/sections/TrustedBySection'

export default function About() {
  return (
    <div className="min-h-screen bg-ghl-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About Global Harvest Logistics
            </h1>
            <p className="text-xl text-ghl-neutral-100 mb-8">
              Delivering taste, preserving nature. Your trusted partner in temperature-sensitive 
              commodity logistics with a commitment to sustainability and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-ghl-neutral-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-ghl-neutral-700 mb-6">
                To provide exceptional temperature-controlled logistics solutions that preserve 
                the quality and integrity of specialty commodities while maintaining the highest 
                standards of sustainability and environmental responsibility.
              </p>
              <p className="text-lg text-ghl-neutral-700">
                We believe that every shipment represents not just cargo, but the hard work of 
                farmers, the expectations of consumers, and our commitment to excellence.
              </p>
            </div>
            <div className="bg-ghl-primary-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-heading font-bold text-ghl-primary-600 mb-4">
                Our Vision
              </h3>
              <p className="text-ghl-neutral-700">
                To be the world&apos;s leading provider of sustainable, temperature-controlled logistics 
                for specialty commodities, setting the standard for quality, reliability, and 
                environmental stewardship in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-ghl-neutral-900 mb-4">
              Our Expert Team
            </h2>
            <p className="text-lg text-ghl-neutral-600 max-w-3xl mx-auto">
              Our team of logistics professionals brings decades of experience in temperature-controlled 
              shipping, commodity handling, and sustainable supply chain management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-ghl-neutral-50 p-6 rounded-xl text-center">
              <div className="w-24 h-24 bg-ghl-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JD</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-ghl-neutral-900 mb-2">
                John Davidson
              </h3>
              <p className="text-ghl-primary-600 font-medium mb-3">CEO & Founder</p>
              <p className="text-ghl-neutral-600">
                20+ years in international logistics and supply chain management.
              </p>
            </div>
            
            <div className="bg-ghl-neutral-50 p-6 rounded-xl text-center">
              <div className="w-24 h-24 bg-ghl-secondary-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">SM</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-ghl-neutral-900 mb-2">
                Sarah Martinez
              </h3>
              <p className="text-ghl-primary-600 font-medium mb-3">Head of Operations</p>
              <p className="text-ghl-neutral-600">
                Expert in temperature-controlled logistics and quality assurance.
              </p>
            </div>
            
            <div className="bg-ghl-neutral-50 p-6 rounded-xl text-center">
              <div className="w-24 h-24 bg-ghl-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">MR</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-ghl-neutral-900 mb-2">
                Michael Rodriguez
              </h3>
              <p className="text-ghl-primary-600 font-medium mb-3">Sustainability Director</p>
              <p className="text-ghl-neutral-600">
                Leading our environmental initiatives and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20 bg-ghl-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-ghl-neutral-900 mb-4">
              Certifications & Standards
            </h2>
            <p className="text-lg text-ghl-neutral-600 max-w-3xl mx-auto">
              We maintain the highest industry standards and certifications to ensure the quality 
              and safety of your shipments.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="text-3xl font-bold text-ghl-primary-600 mb-2">ISO 9001</div>
              <p className="text-sm text-ghl-neutral-600">Quality Management</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="text-3xl font-bold text-ghl-primary-600 mb-2">HACCP</div>
              <p className="text-sm text-ghl-neutral-600">Food Safety</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="text-3xl font-bold text-ghl-primary-600 mb-2">FDA</div>
              <p className="text-sm text-ghl-neutral-600">FDA Approved</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="text-3xl font-bold text-ghl-primary-600 mb-2">Organic</div>
              <p className="text-sm text-ghl-neutral-600">Certified Organic</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-ghl-neutral-900 mb-4">
              Our Core Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-ghl-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-ghl-neutral-900 mb-3">
                Sustainability
              </h3>
              <p className="text-ghl-neutral-600">
                Committed to environmentally responsible practices that protect our planet for future generations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-ghl-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-ghl-neutral-900 mb-3">
                Excellence
              </h3>
              <p className="text-ghl-neutral-600">
                Delivering exceptional service through continuous improvement and attention to detail.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-ghl-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-ghl-neutral-900 mb-3">
                Partnership
              </h3>
              <p className="text-ghl-neutral-600">
                Building lasting relationships based on trust, transparency, and mutual success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedBySection />
    </div>
  )
}
