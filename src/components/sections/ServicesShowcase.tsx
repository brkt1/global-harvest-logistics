'use client'

import { ArrowRight, Coffee, Droplets, Package } from 'lucide-react'
import Link from 'next/link'

export default function ServicesShowcase() {
  const services = [
    {
      icon: Coffee,
      title: 'Coffee Logistics',
      description: 'Specialized temperature and humidity control for premium coffee beans from origin to roaster.',
      features: [
        'Temperature-controlled storage',
        'Origin logistics expertise'
      ],
      color: 'ghl-primary-600',
      href: '/services#coffee'
    },
    {
      icon: Droplets,
      title: 'Oil Transportation',
      description: 'Advanced flexitank technology for bulk liquid transport with bottling line integration.',
      features: [
        'Flexitank expertise',
        'Quality preservation'
      ],
      color: 'ghl-secondary-400',
      href: '/services#oil'
    },
    {
      icon: Package,
      title: 'Specialty Products',
      description: 'Versatile solutions for dry goods, perishables, and other temperature-sensitive commodities.',
      features: [
        'Custom packaging',
        'Cold chain management'
      ],
      color: 'ghl-secondary-500',
      href: '/services#specialty'
    }
  ]


  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container-custom">
        {/* Compact Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-3 text-ghl-neutral-900">
            Specialized Logistics Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From coffee beans to olive oil, we understand the unique requirements 
            of temperature-sensitive commodities and deliver excellence every step of the way.
          </p>
        </div>

        {/* Compact Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden bg-white border border-gray-200"
            >
              {/* Compact Content */}
              <div className="p-4">
                <div className={`inline-flex p-2 rounded-lg bg-ghl-${service.color.replace('ghl-', '').replace('-', '-')} bg-opacity-10 mb-3`}>
                  <service.icon className={`h-4 w-4 text-ghl-${service.color.replace('ghl-', '').replace('-', '-')}`} />
                </div>

                <h3 className="text-lg font-heading font-bold mb-2 text-ghl-neutral-900">
                  {service.title}
                </h3>
                
                <p className="mb-3 text-sm text-ghl-neutral-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Compact Features */}
                <ul className="space-y-1 mb-3">
                  {service.features.slice(0, 2).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs text-ghl-neutral-600">
                      <div className={`w-1 h-1 rounded-full bg-ghl-${service.color.replace('ghl-', '').replace('-', '-')} mr-2 flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  href={service.href}
                  className={`inline-flex items-center text-ghl-${service.color.replace('ghl-', '').replace('-', '-')} font-medium hover:underline group text-sm`}
                >
                  Learn More
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Compact CTA */}
        <div className="text-center mt-6">
          <Link 
            href="/services"
            className="btn btn-primary text-sm px-4 py-2 inline-flex items-center group"
          >
            Explore All Services
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}


