import { ArrowRight, CheckCircle, Clock, Coffee, Droplets, Leaf, Package, Shield, Thermometer } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Logistics Services - Coffee, Oil & Specialty Products | Global Harvest Logistics',
  description: 'Specialized logistics services for temperature-sensitive commodities. Coffee export logistics, olive oil transportation, and specialty food shipping with advanced temperature control.',
  keywords: 'coffee logistics, olive oil shipping, temperature controlled transport, specialty food logistics, flexitank technology',
}

export default function ServicesPage() {
  const services = [
    {
      id: 'coffee',
      icon: Coffee,
      title: 'Coffee Logistics',
      subtitle: 'From Bean to Cup',
      description: 'Specialized temperature and humidity control for premium coffee beans from origin to roaster.',
      features: [
        'Temperature-controlled storage (15-25°C)',
        'Humidity monitoring (50-60% RH)',
        'Specialized bagging expertise',
        'Origin logistics coordination',
        'Fumigation compliance',
        'Quality preservation protocols'
      ],
      process: [
        'Origin assessment and quality control',
        'Temperature-controlled container loading',
        'Real-time monitoring during transit',
        'Destination warehouse coordination',
        'Final delivery to roaster'
      ],
      benefits: [
        'Preserves coffee bean quality and flavor',
        'Reduces spoilage and waste',
        'Maintains optimal moisture content',
        'Ensures consistent product quality'
      ],
      color: 'ghl-primary-600'
    },
    {
      id: 'oil',
      icon: Droplets,
      title: 'Oil Transportation',
      subtitle: 'Advanced Flexitank Technology',
      description: 'State-of-the-art flexitank systems for bulk liquid transport with bottling line integration.',
      features: [
        'Flexitank expertise for bulk liquids',
        'Bottling line integration',
        'Quality preservation systems',
        'Custom loading procedures',
        'Temperature monitoring',
        'Contamination prevention'
      ],
      process: [
        'Flexitank installation and testing',
        'Bulk liquid loading procedures',
        'Temperature-controlled transport',
        'Destination unloading coordination',
        'Bottling line integration'
      ],
      benefits: [
        'Eliminates cross-contamination risks',
        'Reduces packaging waste',
        'Maintains oil quality and freshness',
        'Streamlines bottling operations'
      ],
      color: 'ghl-secondary-400'
    },
    {
      id: 'specialty',
      icon: Package,
      title: 'Specialty Products',
      subtitle: 'Versatile Solutions',
      description: 'Comprehensive logistics for dry goods, perishables, and other temperature-sensitive commodities.',
      features: [
        'Custom packaging solutions',
        'Multi-modal transport options',
        'Cold chain management',
        'Documentation support',
        'Quality assurance protocols',
        'Flexible handling requirements'
      ],
      process: [
        'Product assessment and requirements',
        'Custom packaging design',
        'Multi-modal transport planning',
        'Quality monitoring during transit',
        'Final delivery coordination'
      ],
      benefits: [
        'Tailored solutions for unique products',
        'Flexible transport options',
        'Comprehensive quality control',
        'Expert handling of delicate items'
      ],
      color: 'ghl-secondary-500'
    }
  ]

  const capabilities = [
    {
      icon: Thermometer,
      title: 'Temperature Control',
      description: 'Advanced monitoring systems ensure optimal conditions throughout the journey.',
      details: 'Real-time temperature and humidity monitoring with automated alerts and backup systems.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality checks and compliance with international standards.',
      details: 'ISO 9001 certified processes with HACCP compliance and organic certification support.'
    },
    {
      icon: Leaf,
      title: 'Sustainable Shipping',
      description: 'Eco-friendly practices and carbon-neutral shipping options.',
      details: 'Carbon offset programs, fuel-efficient routes, and recyclable packaging materials.'
    },
    {
      icon: Clock,
      title: 'Real-time Tracking',
      description: '24/7 monitoring with real-time updates and delivery guarantees.',
      details: 'Complete visibility into your shipment with GPS tracking and automated notifications.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ghl-primary-600 to-ghl-secondary-400 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              Specialized Logistics Services
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-8">
              Expert solutions for temperature-sensitive commodities with unmatched 
              reliability and sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn bg-white text-ghl-primary-600 hover:bg-ghl-neutral-50">
                Get Custom Quote
              </Link>
              <Link href="/track" className="btn border-2 border-white text-white hover:bg-white hover:text-ghl-primary-600">
                Track Shipment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {services.map((service, index) => (
            <div key={service.id} className={`mb-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center px-4 py-2 bg-ghl-neutral-100 text-ghl-neutral-700 rounded-full text-sm font-medium mb-6">
                    <service.icon className="h-4 w-4 mr-2" />
                    {service.subtitle}
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ghl-neutral-900 mb-6">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-ghl-neutral-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-ghl-neutral-900 mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-ghl-neutral-600">
                            <CheckCircle className="h-4 w-4 text-ghl-secondary-400 mr-3 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-ghl-neutral-900 mb-4">Our Process</h4>
                      <ul className="space-y-3">
                        {service.process.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start text-sm text-ghl-neutral-600">
                            <div className="w-6 h-6 bg-ghl-primary-100 text-ghl-primary-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                              {stepIndex + 1}
                            </div>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-ghl-neutral-50 rounded-xl p-6 mb-8">
                    <h4 className="font-semibold text-ghl-neutral-900 mb-4">Key Benefits</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-ghl-neutral-600">
                          <div className="w-2 h-2 bg-ghl-secondary-400 rounded-full mr-3 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link 
                    href="/quote"
                    className="btn btn-primary inline-flex items-center group"
                  >
                    Get Quote for {service.title}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Image/Visual */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-ghl-neutral-100 to-ghl-neutral-200 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <service.icon className="h-16 w-16 text-ghl-neutral-400 mx-auto mb-4" />
                        <p className="text-ghl-neutral-500">Service visualization</p>
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 bg-white text-ghl-primary-600 px-4 py-2 rounded-lg shadow-lg">
                      <div className="text-sm font-medium">Specialized</div>
                    </div>
                    
                    <div className="absolute -bottom-4 -left-4 bg-ghl-secondary-400 text-white px-4 py-2 rounded-lg shadow-lg">
                      <div className="text-sm font-medium">Expert Handling</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-padding bg-ghl-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ghl-neutral-900 mb-6">
              Our Core Capabilities
            </h2>
            <p className="text-xl text-ghl-neutral-600 max-w-3xl mx-auto">
              Advanced technology and expertise that ensures your temperature-sensitive 
              commodities reach their destination in perfect condition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="inline-flex p-4 bg-ghl-primary-100 rounded-xl mb-6">
                  <capability.icon className="h-8 w-8 text-ghl-primary-600" />
                </div>
                
                <h3 className="text-xl font-heading font-bold text-ghl-neutral-900 mb-4">
                  {capability.title}
                </h3>
                
                <p className="text-ghl-neutral-600 mb-4">
                  {capability.description}
                </p>
                
                <p className="text-sm text-ghl-neutral-500">
                  {capability.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Ready to Ship Your Commodities?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get a custom quote for your temperature-sensitive logistics needs. 
            Our experts are ready to design the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn bg-white text-ghl-primary-600 hover:bg-ghl-neutral-50 text-lg px-8 py-4">
              Request Custom Quote
            </Link>
            <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-ghl-primary-600 text-lg px-8 py-4">
              Contact Our Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

