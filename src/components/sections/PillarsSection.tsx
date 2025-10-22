'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { Award, Globe, Leaf, Shield, TrendingUp, Users } from 'lucide-react'

export default function PillarsSection() {
  const { resolvedTheme } = useTheme()
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
    <section className={`section-padding ${
      resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-heading font-bold mb-4 sm:mb-6 ${
            resolvedTheme === 'dark' ? 'text-gray-100' : 'text-ghl-neutral-900'
          }`}>
            Built on Three Pillars of Excellence
          </h2>
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
            resolvedTheme === 'dark' ? 'text-gray-300' : 'text-ghl-neutral-600'
          }`}>
            Our commitment to expertise, reliability, and sustainability ensures your 
            temperature-sensitive commodities reach their destination in perfect condition.
          </p>
        </div>

        {/* Pillars Grid - Mobile-first with compact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {pillars.map((pillar) => (
            <div 
              key={pillar.title}
              className={`group relative rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-md hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 ${
                resolvedTheme === 'dark' 
                  ? 'bg-gray-800 border-gray-700/30 hover:border-ghl-primary-600/50' 
                  : 'bg-white border-ghl-neutral-100 hover:border-ghl-primary-200'
              }`}
            >
              {/* Icon */}
              <div className={`inline-flex p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl bg-ghl-${pillar.color.replace('ghl-', '').replace('-', '-')} bg-opacity-10 mb-3 sm:mb-4 lg:mb-6`}>
                <pillar.icon className={`h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-ghl-${pillar.color.replace('ghl-', '').replace('-', '-')}`} />
              </div>

              {/* Content */}
              <h3 className={`text-lg sm:text-xl lg:text-2xl font-heading font-bold mb-2 sm:mb-3 lg:mb-4 ${
                resolvedTheme === 'dark' ? 'text-gray-100' : 'text-ghl-neutral-900'
              }`}>
                {pillar.title}
              </h3>
              
              <p className={`mb-3 sm:mb-4 lg:mb-6 leading-relaxed text-sm sm:text-base ${
                resolvedTheme === 'dark' ? 'text-gray-300' : 'text-ghl-neutral-600'
              }`}>
                {pillar.description}
              </p>

              {/* Features List - Compact on mobile */}
              <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                {pillar.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={`flex items-center text-xs sm:text-sm ${
                    resolvedTheme === 'dark' ? 'text-gray-300' : 'text-ghl-neutral-600'
                  }`}>
                    <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 rounded-full bg-ghl-${pillar.color.replace('ghl-', '').replace('-', '-')} mr-2 sm:mr-3 flex-shrink-0`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-ghl-primary-200 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Stats Section - Mobile optimized glassy design */}
        <div className="relative bg-gradient-to-br from-ghl-primary-600/90 to-ghl-secondary-400/90 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12 text-white shadow-2xl">
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-white/5 rounded-xl sm:rounded-2xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-4 sm:mb-6 lg:mb-8">
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                Trusted Worldwide
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-heading font-bold mb-2 sm:mb-3 lg:mb-4">
                Our track record speaks for itself
              </h3>
              <p className="text-sm sm:text-base lg:text-lg opacity-90">
                Delivering excellence across the globe
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex p-2 sm:p-3 lg:p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg sm:rounded-xl mb-2 sm:mb-3 lg:mb-4 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                    <stat.icon className="h-3 w-3 sm:h-4 sm:w-4 lg:h-6 lg:w-6" />
                  </div>
                  <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2 group-hover:scale-105 transition-transform duration-300">{stat.value}</div>
                  <div className="text-xs sm:text-sm opacity-90 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


