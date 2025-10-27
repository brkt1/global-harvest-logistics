'use client'

import EditableText from '@/components/ui/EditableText'
import { Leaf, MapPin, Search, Shield } from 'lucide-react'

export default function ProvenProcessSection() {
  const processSteps = [
    {
      id: 1,
      number: '01',
      title: 'Careful Sourcing',
      description: 'We begin by partnering directly with trusted farmers and cooperatives in Ethiopia\'s top growing regions. Every batch of sesame, pulses, and beans is selected for purity, size, and moisture consistency before entering our export pipeline.',
      icon: Search,
      status: 'completed'
    },
    {
      id: 2,
      number: '02',
      title: 'Precision Preparation',
      description: 'At our Addis Ababa warehouse, products are cleaned, graded, and packed under controlled conditions. Using ECX-aligned procedures, we verify moisture levels, remove impurities, and prepare export-grade packaging to meet international standards.',
      icon: Shield,
      status: 'active'
    },
    {
      id: 3,
      number: '03',
      title: 'Reliable Logistics',
      description: 'Each shipment is transported safely through the Addis–Djibouti trade corridor, Ethiopia\'s main export route. We coordinate documentation, customs clearance, and freight forwarding to guarantee secure and timely arrival at destination ports worldwide.',
      icon: MapPin,
      status: 'pending'
    },
    {
      id: 4,
      number: '04',
      title: 'Transparent Tracking',
      description: 'From warehouse to port, every container is tracked in real time. Our export team provides continuous updates, ensuring clients have full visibility and confidence in every delivery.',
      icon: Leaf,
      status: 'pending'
    }
  ]

  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-ghl-neutral-800">
      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <EditableText 
            content="Our Proven Process"
            contentKey="process-title"
            tag="h2"
            className="text-4xl lg:text-6xl font-heading font-bold text-white mb-4"
          />
          <EditableText 
            content="Four key steps that ensure every shipment from Ethiopia arrives in perfect condition"
            contentKey="process-description"
            tag="p"
            className="text-xl text-ghl-neutral-300 max-w-3xl mx-auto"
          />
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
                  <EditableText 
                    content={step.title}
                    contentKey={`process-step-${step.id}-title`}
                    tag="h3"
                    className={`text-center mb-2 font-semibold ${
                      isActive 
                        ? 'text-white text-lg' 
                        : 'text-ghl-neutral-300'
                    }`}
                  />

                  {/* Step Description - Hidden on mobile screens */}
                  <EditableText 
                    content={step.description}
                    contentKey={`process-step-${step.id}-description`}
                    tag="p"
                    className="hidden md:block text-sm text-ghl-neutral-400 text-center max-w-48 leading-relaxed"
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-ghl-primary-400 font-semibold">
            <EditableText 
              content="Trusted by 100+ Global Partners"
              contentKey="process-trusted-partners"
              tag="span"
            />
            <div className="w-2 h-2 bg-ghl-primary-400 rounded-full"></div>
            <EditableText 
              content="99.8% On-Time Delivery"
              contentKey="process-delivery-rate"
              tag="span"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
