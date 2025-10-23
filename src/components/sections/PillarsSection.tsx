'use client'

import { Award, Globe, Leaf, Shield, TrendingUp, Users } from 'lucide-react'

export default function PillarsSection() {
  const pillars = [
    {
      icon: Award,
      title: 'Expertise',
      description: 'Deep knowledge in temperature-sensitive commodity logistics with specialized handling for coffee, olive oil, and specialty foods.',
      features: [
        'Temperature & humidity control',
        'Origin logistics expertise',
        'Fumigation compliance',
        'Custom packaging solutions'
      ],
      color: 'ghl-primary-600'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: '99.8% on-time delivery rate with 24/7 monitoring and real-time tracking for complete peace of mind.',
      features: [
        'Real-time shipment tracking',
        '24/7 global support',
        'Insurance coverage',
        'Quality guarantees'
      ],
      color: 'ghl-secondary-400'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Committed to environmental responsibility through optimized routes, carbon offset programs, and eco-friendly packaging.',
      features: [
        'Carbon-neutral shipping options',
        'Recyclable packaging materials',
        'Fuel-efficient routes',
        'Environmental impact reporting'
      ],
      color: 'ghl-secondary-500'
    }
  ]

  const stats = [
    { icon: TrendingUp, value: '500+', label: 'Global Partners' },
    { icon: Users, value: '50+', label: 'Countries Served' },
    { icon: Globe, value: '99.8%', label: 'On-Time Delivery' },
    { icon: Award, value: '15+', label: 'Years Experience' }
  ]

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3Cpath d='M30 15l-3 6h6l-3-6zm0 30l-3-6h6l-3 6zm15-15l-6-3v6l6-3zm-30 0l6-3v6l-6-3z'/%3E%3Cpath d='M30 7.5c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 12.5c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2z'/%3E%3Cpath d='M30 30c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm0-6c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-ghl-primary-600/10 to-ghl-secondary-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-ghl-secondary-400/10 to-ghl-primary-600/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-ghl-primary-600/5 to-ghl-secondary-400/5 rounded-full blur-lg"></div>
      
      <div className="container-custom relative z-10">
        {/* Compact Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Award className="w-4 h-4 mr-2" />
            Our Foundation
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-4">
            Built on Three Pillars of Excellence
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our commitment to expertise, reliability, and sustainability ensures your 
            temperature-sensitive commodities reach their destination in perfect condition.
          </p>
        </div>

        {/* Compact Pillars Grid with Background Images */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar, index) => {
            // Define background images for each pillar
            const backgroundImages = [
              'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', // Expertise - Business/Professional
              'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', // Reliability - Quality Control
              'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'  // Sustainability - Eco-friendly
            ];

            return (
            <div key={pillar.title} className="group relative">
              {/* Pillar Card with Background Image */}
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden h-80">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${backgroundImages[index]})` }}
                ></div>
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50"></div>
                
                {/* Pillar Number */}
                <div className="relative z-10 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 text-white rounded-full text-sm font-bold">
                    {index + 1}
                  </span>
                </div>
                
                {/* Title & Description */}
                <div className="relative z-10 mb-4">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                
                {/* Key Features */}
                <div className="relative z-10">
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-white to-gray-300 rounded-full mr-2"></div>
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {pillar.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-xs text-gray-200">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-white to-gray-300 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-ghl-primary-500/10 to-ghl-secondary-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Compact Stats Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Track Record</h3>
            <p className="text-gray-600 text-sm">
              Delivering excellence across the globe with proven results.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 rounded-lg mb-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
                <div className="text-lg font-bold text-gray-900 mb-1 group-hover:scale-105 transition-transform duration-300">{stat.value}</div>
                <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


