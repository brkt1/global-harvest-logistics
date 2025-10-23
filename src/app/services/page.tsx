import { ArrowRight, CheckCircle, Clock, Coffee, Droplets, Globe, Leaf, Package, Shield, Star, Thermometer, Truck, Zap } from 'lucide-react'
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
      subtitle: 'From Ethiopian Highlands',
      description: 'Specialized temperature and humidity control for premium Ethiopian coffee beans from highland farms to global markets.',
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
      color: 'ghl-primary-600',
      gradient: 'from-ghl-primary-500 to-ghl-primary-700',
      bgColor: 'bg-ghl-primary-50',
      accentColor: 'text-ghl-primary-600'
    },
    {
      id: 'oil',
      icon: Droplets,
      title: 'Oil Transportation',
      subtitle: 'Traditional Oil Heritage',
      description: 'State-of-the-art flexitank systems for traditional Ethiopian oils and specialty liquids with cultural preservation.',
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
      color: 'ghl-secondary-400',
      gradient: 'from-ghl-secondary-400 to-ghl-secondary-600',
      bgColor: 'bg-ghl-secondary-50',
      accentColor: 'text-ghl-secondary-600'
    },
    {
      id: 'specialty',
      icon: Package,
      title: 'Specialty Products',
      subtitle: 'Cultural Commodities',
      description: 'Comprehensive logistics for traditional Ethiopian goods, spices, and other temperature-sensitive cultural commodities.',
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
      color: 'ghl-secondary-500',
      gradient: 'from-ghl-secondary-500 to-ghl-primary-600',
      bgColor: 'bg-ghl-neutral-50',
      accentColor: 'text-ghl-secondary-600'
    }
  ]

  const capabilities = [
    {
      icon: Thermometer,
      title: 'Temperature Control',
      description: 'Advanced monitoring systems ensure optimal conditions throughout the journey.',
      details: 'Real-time temperature and humidity monitoring with automated alerts and backup systems.',
      gradient: 'from-green-800 to-green-600'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality checks and compliance with international standards.',
      details: 'ISO 9001 certified processes with HACCP compliance and organic certification support.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Leaf,
      title: 'Sustainable Shipping',
      description: 'Eco-friendly practices and carbon-neutral shipping options.',
      details: 'Carbon offset programs, fuel-efficient routes, and recyclable packaging materials.',
      gradient: 'from-green-400 to-green-600'
    },
    {
      icon: Clock,
      title: 'Real-time Tracking',
      description: '24/7 monitoring with real-time updates and delivery guarantees.',
      details: 'Complete visibility into your shipment with GPS tracking and automated notifications.',
      gradient: 'from-purple-500 to-pink-500'
    }
  ]

  const stats = [
    { number: '99.8%', label: 'On-Time Delivery', icon: Clock },
    { number: '50+', label: 'Countries Served', icon: Globe },
    { number: '24/7', label: 'Customer Support', icon: Star },
    { number: '15+', label: 'Years Experience', icon: Zap }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Hero Section - Mobile First */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ghl-primary-50 via-white to-ghl-secondary-50 text-ghl-neutral-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M40 40c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm20 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z'/%3E%3Cpath d='M40 20l-4 8h8l-4-8zm0 40l-4-8h8l-4 8zm20-20l-8-4v8l8-4zm-40 0l8-4v8l-8-4z'/%3E%3Cpath d='M40 10c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 20c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Mobile-first layout - Enhanced */}
            <div className="pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 xl:pt-24 xl:pb-32">
              <div className="text-center">
                {/* Badge */}
                <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-ghl-primary-100 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 text-ghl-primary-700">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  Trusted by 500+ Companies
                </div>
                
                {/* Main Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-heading font-bold mb-4 sm:mb-6 leading-tight">
                  <span className="block text-ghl-neutral-900">Specialized</span>
                  <span className="block bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 bg-clip-text text-transparent">
                    Logistics Solutions
                  </span>
                </h1>
                
                {/* Subtitle */}
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-ghl-neutral-700 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
                  Expert temperature-controlled logistics for Ethiopian coffee, specialty oils, and traditional commodities. 
                  <span className="block sm:inline"> Preserving heritage with modern reliability.</span>
                </p>
                
                {/* CTA Buttons - Mobile Optimized */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12">
                  <Link 
                    href="/quote" 
                    className="w-full sm:w-auto btn bg-ghl-primary-600 text-white hover:bg-ghl-primary-700 hover:scale-105 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg"
                  >
                    Get Custom Quote
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                  <Link 
                    href="/track" 
                    className="w-full sm:w-auto btn border-2 border-ghl-primary-600 text-ghl-primary-600 hover:bg-ghl-primary-600 hover:text-white backdrop-blur-sm text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300"
                  >
                    Track Shipment
                  </Link>
                </div>
                
                {/* Stats - Mobile Responsive */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-ghl-primary-100 backdrop-blur-sm rounded-lg sm:rounded-xl mb-2 sm:mb-3">
                        <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-ghl-primary-600" />
                      </div>
                      <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-1 text-ghl-neutral-900">{stat.number}</div>
                      <div className="text-xs sm:text-sm text-ghl-neutral-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-800/20 rounded-full blur-2xl"></div>
      </section>

      {/* Attractive Services Section - Mobile First */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 text-white rounded-full text-sm font-semibold mb-8 shadow-lg">
              <Package className="w-5 h-5 mr-3" />
              Our Premium Services
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              <span className="block">Why People Choose</span>
              <span className="block bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience the difference with our specialized logistics solutions. 
              <span className="font-semibold text-gray-800"> Trusted by 500+ companies worldwide.</span>
            </p>
          </div>

          {/* Attractive Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="group relative">
                {/* Service Card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Service Icon */}
                  <div className="relative z-10 mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Service Badge */}
                  <div className="relative z-10 mb-4">
                    <span className={`inline-flex items-center px-3 py-1.5 bg-gradient-to-r ${service.gradient} text-white rounded-full text-xs font-semibold`}>
                      {service.subtitle}
                    </span>
                  </div>
                  
                  {/* Title & Description */}
                  <div className="relative z-10 mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-ghl-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Key Features */}
                  <div className="relative z-10 mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      What's Included
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-green-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Benefits Highlight */}
                  <div className="relative z-10 mb-6">
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4">
                      <div className="flex items-center mb-2">
                        <Star className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-sm font-semibold text-gray-800">Key Benefits</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {service.benefits[0]}
                      </p>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="relative z-10">
                    <Link 
                      href="/quote"
                      className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg group`}
                    >
                      Get Quote
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-ghl-primary-500/5 to-ghl-secondary-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                
                {/* Floating Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-ghl-primary-500 to-ghl-secondary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 "></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-ghl-secondary-400 to-ghl-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 " style={{ animationDelay: '0.5s' }}></div>
              </div>
            ))}
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Why People Love Our Services</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">99.8%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">50+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Proven Process Section - Enhanced UI */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.02),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.02),transparent_50%)]"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold mb-8 shadow-lg border border-gray-200">
              <Clock className="w-5 h-5 mr-3" />
              Our Proven Process
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-black mb-8 leading-tight">
              <span className="block">How We Deliver</span>
              <span className="block bg-gradient-to-r from-gray-800 to-green-800 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From initial consultation to final delivery, our systematic approach ensures 
              your temperature-sensitive commodities are handled with precision and care.
            </p>
          </div>

          {/* Enhanced Process Steps */}
          <div className="relative">
            {/* Decorative Background Line */}
            <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent rounded-full"></div>
            <div className="hidden lg:block absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-300 via-green-800 to-gray-300 rounded-full"></div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {[
                {
                  step: '01',
                  title: 'Consultation & Planning',
                  description: 'We assess your specific requirements and design a customized logistics solution tailored to your needs.',
                  icon: '☕',
                  gradient: 'from-ghl-primary-500 to-ghl-primary-700',
                  bgGradient: 'from-ghl-primary-50 to-ghl-primary-100',
                  features: ['Requirements Analysis', 'Custom Solution Design', 'Risk Assessment']
                },
                {
                  step: '02', 
                  title: 'Quality Assessment',
                  description: 'Thorough inspection and quality control to ensure product integrity throughout the process.',
                  icon: '🌾',
                  gradient: 'from-ghl-secondary-400 to-ghl-secondary-600',
                  bgGradient: 'from-ghl-secondary-50 to-ghl-secondary-100',
                  features: ['Product Inspection', 'Quality Testing', 'Compliance Check']
                },
                {
                  step: '03',
                  title: 'Temperature Control',
                  description: 'Advanced monitoring systems maintain optimal conditions throughout the entire transit journey.',
                  icon: '🌡️',
                  gradient: 'from-green-800 to-green-600',
                  bgGradient: 'from-green-50 to-green-100',
                  features: ['Real-time Monitoring', 'Climate Control', 'Backup Systems']
                },
                {
                  step: '04',
                  title: 'Delivery & Support',
                  description: 'Final delivery with comprehensive tracking and ongoing customer support services.',
                  icon: '🏛️',
                  gradient: 'from-green-500 to-emerald-600',
                  bgGradient: 'from-green-50 to-emerald-50',
                  features: ['Final Delivery', 'Tracking Updates', 'Customer Support']
                }
              ].map((process, index) => {
                // Define Ethiopian-themed background images for each process step
                const backgroundImages = [
                  'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', // Consultation/Planning - Ethiopian coffee ceremony
                  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', // Quality Assessment - Ethiopian coffee beans
                  'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', // Temperature Control - Ethiopian coffee processing
                  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'  // Delivery & Support - Ethiopian coffee export
                ];

                return (
                <div key={index} className="relative group">
                  {/* Enhanced Step Number Badge */}
                  <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-r from-gray-800 to-black rounded-3xl mb-8 mx-auto lg:mx-0 shadow-2xl group-hover:scale-110 transition-all duration-500">
                    <span className="text-white font-bold text-2xl">{process.step}</span>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-green-800 rounded-3xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Enhanced Content Card with Ethiopian Background Image */}
                  <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-200 group-hover:border-gray-400 overflow-hidden h-96 lg:h-[28rem]">
                    {/* Ethiopian Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${backgroundImages[index]})` }}
                    ></div>
                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/50"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-6 text-center lg:text-left group-hover:text-gray-100 transition-colors">
                        {process.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-100 leading-relaxed text-center lg:text-left mb-6">
                        {process.description}
                      </p>
                      
                      {/* Features List */}
                      <div className="space-y-3">
                        {process.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-200">
                            <div className="w-2 h-2 bg-gradient-to-r from-white to-green-300 rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-500/5 to-green-800/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  
                  {/* Enhanced Connection Arrow */}
                  <div className="hidden lg:block absolute top-10 -right-4 z-20">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-gray-200 group-hover:scale-110 transition-transform duration-300">
                      <ArrowRight className="w-4 h-4 text-gray-800" />
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
          </div>

          {/* Compact Process Benefits */}
          <div className="mt-16 relative">
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Why Choose Our Process?
                </h3>
                <p className="text-gray-600 max-w-xl mx-auto">
                  Our systematic approach delivers consistent results and exceptional value.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gray-800 to-black rounded-xl mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Guaranteed</h4>
                  <p className="text-sm text-gray-600">ISO 9001 certification with monitored processes</p>
                </div>
                
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-800 to-gray-800 rounded-xl mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">On-Time Delivery</h4>
                  <p className="text-sm text-gray-600">99.8% success rate with real-time tracking</p>
                </div>
                
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-800 to-green-600 rounded-xl mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h4>
                  <p className="text-sm text-gray-600">24/7 customer service with specialists</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attractive Capabilities Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 text-white rounded-full text-sm font-semibold mb-8 shadow-lg">
              <Shield className="w-5 h-5 mr-3" />
              Our Advanced Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              <span className="block">Technology That</span>
              <span className="block bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 bg-clip-text text-transparent">
                Delivers Excellence
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Cutting-edge technology and decades of expertise ensure your temperature-sensitive 
              commodities reach their destination in perfect condition.
              <span className="font-semibold text-gray-800"> Trusted by industry leaders worldwide.</span>
            </p>
          </div>

          {/* Professional Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="group">
                {/* Capability Card - Uniform Height */}
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full flex flex-col">
                  {/* Capability Icon */}
                  <div className="mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${capability.gradient} rounded-xl shadow-md`}>
                      <capability.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Title & Description */}
                  <div className="mb-4 flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                  
                  {/* Technical Details - Consistent Height */}
                  <div className="mt-auto">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center mb-2">
                        <div className="w-1.5 h-1.5 bg-ghl-primary-500 rounded-full mr-2"></div>
                        <span className="text-xs font-semibold text-gray-700">Technical Details</span>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {capability.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Professional Technology Stats */}
          <div className="mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Technology Advantage</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Advanced monitoring systems and cutting-edge logistics technology ensure optimal results.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Thermometer className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-lg font-bold text-gray-900 mb-1">Real-time</div>
                  <div className="text-sm text-gray-600">Temperature Monitoring</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-lg font-bold text-gray-900 mb-1">ISO 9001</div>
                  <div className="text-sm text-gray-600">Quality Certified</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Leaf className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="text-lg font-bold text-gray-900 mb-1">Eco-Friendly</div>
                  <div className="text-sm text-gray-600">Sustainable Practices</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="text-lg font-bold text-gray-900 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern CTA Section - Mobile First */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ghl-primary-600 via-ghl-primary-700 to-ghl-secondary-500 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3Cpath d='M30 15l-3 6h6l-3-6zm0 30l-3-6h6l-3 6zm15-15l-6-3v6l6-3zm-30 0l6-3v6l-6-3z'/%3E%3Cpath d='M30 7.5c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 12.5c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2z'/%3E%3Cpath d='M30 30c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm0-6c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
        
        <div className="container-custom relative z-10">
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <Truck className="w-4 h-4 mr-2" />
                Ready to Ship?
              </div>
              
              {/* Main Content */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
                Ready to Ship Your Commodities?
              </h2>
              
              <p className="text-lg sm:text-xl lg:text-2xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Get a custom quote for your temperature-sensitive logistics needs. 
                Our experts are ready to design the perfect solution for your business.
              </p>
              
              {/* CTA Buttons - Mobile Optimized */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link 
                  href="/quote" 
                  className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-lg px-8 py-4 rounded-xl font-semibold shadow-lg inline-flex items-center justify-center"
                >
                  Request Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/contact" 
                  className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-sm text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center"
                >
                  Contact Our Experts
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold mb-1">99.8%</div>
                  <div className="text-sm opacity-80">On-Time Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold mb-1">24/7</div>
                  <div className="text-sm opacity-80">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold mb-1">50+</div>
                  <div className="text-sm opacity-80">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold mb-1">15+</div>
                  <div className="text-sm opacity-80">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-white/5 rounded-full blur-xl "></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-500/20 rounded-full blur-2xl"></div>
      </section>
    </div>
  )
}

