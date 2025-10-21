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
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-ghl-neutral-900 mb-4 sm:mb-6">
            Built on Three Pillars of Excellence
          </h2>
          <p className="text-lg sm:text-xl text-ghl-neutral-600 max-w-3xl mx-auto">
            Our commitment to expertise, reliability, and sustainability ensures your 
            temperature-sensitive commodities reach their destination in perfect condition.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {pillars.map((pillar) => (
            <div 
              key={pillar.title}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-ghl-neutral-100 hover:border-ghl-primary-200"
            >
              {/* Icon */}
              <div className={`inline-flex p-3 sm:p-4 rounded-xl bg-ghl-${pillar.color.replace('ghl-', '').replace('-', '-')} bg-opacity-10 mb-4 sm:mb-6`}>
                <pillar.icon className={`h-6 w-6 sm:h-8 sm:w-8 text-ghl-${pillar.color.replace('ghl-', '').replace('-', '-')}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-ghl-neutral-900 mb-3 sm:mb-4">
                {pillar.title}
              </h3>
              
              <p className="text-ghl-neutral-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {pillar.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 sm:space-y-3">
                {pillar.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-ghl-neutral-600">
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-ghl-${pillar.color.replace('ghl-', '').replace('-', '-')} mr-2 sm:mr-3 flex-shrink-0`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-ghl-primary-200 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Stats Section - Modern glassy design */}
        <div className="relative bg-gradient-to-br from-ghl-primary-600/90 to-ghl-secondary-400/90 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 lg:p-12 text-white shadow-2xl">
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-white/5 rounded-2xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium mb-4">
               
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold mb-3 sm:mb-4">
                Our track record speaks for itself
              </h3>
              <p className="text-base sm:text-lg opacity-90">
                Delivering excellence across the globe
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex p-3 sm:p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl mb-3 sm:mb-4 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                    <stat.icon className="h-4 w-4 sm:h-6 sm:w-6" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 group-hover:scale-105 transition-transform duration-300">{stat.value}</div>
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


