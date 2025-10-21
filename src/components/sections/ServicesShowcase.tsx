import { ArrowRight, Clock, Coffee, Droplets, Leaf, Package, Shield, Thermometer } from 'lucide-react'
import Link from 'next/link'

export default function ServicesShowcase() {
  const services = [
    {
      icon: Coffee,
      title: 'Coffee Logistics',
      description: 'Specialized temperature and humidity control for premium coffee beans from origin to roaster.',
      features: [
        'Temperature-controlled storage',
        'Humidity monitoring',
        'Bagging expertise',
        'Origin logistics'
      ],
      image: '/api/placeholder/400/300',
      color: 'ghl-primary-600',
      href: '/services#coffee'
    },
    {
      icon: Droplets,
      title: 'Oil Transportation',
      description: 'Advanced flexitank technology for bulk liquid transport with bottling line integration.',
      features: [
        'Flexitank expertise',
        'Bulk liquid transport',
        'Bottling integration',
        'Quality preservation'
      ],
      image: '/api/placeholder/400/300',
      color: 'ghl-secondary-400',
      href: '/services#oil'
    },
    {
      icon: Package,
      title: 'Specialty Products',
      description: 'Versatile solutions for dry goods, perishables, and other temperature-sensitive commodities.',
      features: [
        'Custom packaging',
        'Multi-modal transport',
        'Cold chain management',
        'Documentation support'
      ],
      image: '/api/placeholder/400/300',
      color: 'ghl-secondary-500',
      href: '/services#specialty'
    }
  ]

  const processSteps = [
    {
      icon: Thermometer,
      title: 'Temperature Control',
      description: 'Advanced monitoring systems ensure optimal conditions throughout the journey.',
      step: '01'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality checks and compliance with international standards.',
      step: '02'
    },
    {
      icon: Leaf,
      title: 'Sustainable Shipping',
      description: 'Eco-friendly practices and carbon-neutral shipping options.',
      step: '03'
    },
    {
      icon: Clock,
      title: 'Real-time Tracking',
      description: '24/7 monitoring with real-time updates and delivery guarantees.',
      step: '04'
    }
  ]

  return (
    <section className="section-padding bg-ghl-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-ghl-neutral-900 mb-4 sm:mb-6">
            Specialized Logistics Solutions
          </h2>
          <p className="text-lg sm:text-xl text-ghl-neutral-600 max-w-3xl mx-auto">
            From coffee beans to olive oil, we understand the unique requirements 
            of temperature-sensitive commodities and deliver excellence every step of the way.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-ghl-neutral-100 to-ghl-neutral-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-ghl-primary-600/20 to-ghl-secondary-400/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <service.icon className="h-16 w-16 text-ghl-neutral-400" />
                </div>
                <div className="absolute top-4 right-4">
                  <div className={`bg-ghl-${service.color.replace('ghl-', '').replace('-', '-')} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    Specialized
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className={`inline-flex p-2 sm:p-3 rounded-xl bg-ghl-${service.color.replace('ghl-', '').replace('-', '-')} bg-opacity-10 mb-4 sm:mb-6`}>
                  <service.icon className={`h-5 w-5 sm:h-6 sm:w-6 text-ghl-${service.color.replace('ghl-', '').replace('-', '-')}`} />
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-bold text-ghl-neutral-900 mb-3 sm:mb-4">
                  {service.title}
                </h3>
                
                <p className="text-ghl-neutral-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-ghl-neutral-600">
                      <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-ghl-${service.color.replace('ghl-', '').replace('-', '-')} mr-2 sm:mr-3 flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  href={service.href}
                  className={`inline-flex items-center text-ghl-${service.color.replace('ghl-', '').replace('-', '-')} font-medium hover:underline group text-sm sm:text-base`}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-ghl-neutral-900 mb-3 sm:mb-4">
              Our Proven Process
            </h3>
            <p className="text-base sm:text-lg text-ghl-neutral-600">
              Four key steps that ensure your commodities arrive in perfect condition
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 sm:mb-6">
                  <div className="inline-flex p-3 sm:p-4 bg-ghl-primary-100 rounded-xl mb-3 sm:mb-4 group-hover:bg-ghl-primary-200 transition-colors">
                    <step.icon className="h-6 w-6 sm:h-8 sm:w-8 text-ghl-primary-600" />
                  </div>
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-ghl-primary-600 text-white text-xs sm:text-sm font-bold w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                
                <h4 className="text-base sm:text-lg font-heading font-semibold text-ghl-neutral-900 mb-2 sm:mb-3">
                  {step.title}
                </h4>
                
                <p className="text-ghl-neutral-600 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-8 sm:mt-12">
            <Link 
              href="/services"
              className="btn btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center group"
            >
              <span className="hidden sm:inline">Explore All Services</span>
              <span className="sm:hidden">Explore Services</span>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


