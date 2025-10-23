'use client'

import { Leaf, MapPin, Shield, Thermometer } from 'lucide-react'

export default function ProvenProcessSection() {
  const processSteps = [
    {
      id: 1,
      number: '01',
      title: 'Temperature Control',
      description: 'Advanced monitoring systems ensure optimal conditions.',
      icon: Thermometer,
      status: 'completed'
    },
    {
      id: 2,
      number: '02',
      title: 'Quality Assurance',
      description: 'Rigorous quality checks and compliance standards.',
      icon: Shield,
      status: 'active'
    },
    {
      id: 3,
      number: '03',
      title: 'Sustainable Shipping',
      description: 'Eco-friendly practices and carbon-neutral options.',
      icon: Leaf,
      status: 'pending'
    },
    {
      id: 4,
      number: '04',
      title: 'Real-time Tracking',
      description: '24/7 monitoring with delivery guarantees.',
      icon: MapPin,
      status: 'pending'
    }
  ]

  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-ghl-neutral-800">
      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-4">
            Our Proven Process
          </h2>
          <p className="text-xl text-ghl-neutral-300 max-w-3xl mx-auto">
            Four key steps that ensure your commodities arrive in perfect condition
          </p>
        </div>

        {/* Horizontal Progress Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Progress Line */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-ghl-neutral-600 rounded-full">
            <div className="h-full bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 rounded-full w-1/2"></div>
          </div>

          {/* Process Steps */}
          <div className="relative flex justify-between items-start">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              const isCompleted = step.status === 'completed'
              const isActive = step.status === 'active'
              const isPending = step.status === 'pending'
              
              return (
                <div key={step.id} className="flex flex-col items-center relative">
                  {/* Step Circle */}
                  <div className={`
                    relative w-16 h-16 rounded-full flex items-center justify-center mb-4
                    ${isCompleted || isActive 
                      ? 'bg-ghl-primary-600 text-white' 
                      : 'bg-ghl-neutral-600 text-ghl-neutral-400'
                    }
                    ${isActive ? 'ring-4 ring-ghl-primary-300 ring-opacity-50' : ''}
                  `}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Step Number */}
                  <div className={`
                    absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                    ${isCompleted || isActive 
                      ? 'bg-ghl-primary-600 text-white' 
                      : 'bg-ghl-neutral-500 text-ghl-neutral-300'
                    }
                  `}>
                    {step.number}
                  </div>

                  {/* Step Title */}
                  <h3 className={`
                    text-center mb-2 font-semibold
                    ${isActive 
                      ? 'text-white text-lg' 
                      : 'text-ghl-neutral-300'
                    }
                  `}>
                    {step.title}
                  </h3>

                  {/* Step Description - Hidden on mobile screens */}
                  <p className="hidden md:block text-sm text-ghl-neutral-400 text-center max-w-48 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-ghl-primary-400 font-semibold">
            <span>Trusted by 500+ Global Partners</span>
            <div className="w-2 h-2 bg-ghl-primary-400 rounded-full"></div>
            <span>99.8% On-Time Delivery</span>
          </div>
        </div>
      </div>
    </section>
  )
}
