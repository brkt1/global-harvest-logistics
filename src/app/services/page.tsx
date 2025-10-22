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
      color: 'ghl-primary-600',
      gradient: 'from-ghl-primary-500 to-ghl-primary-700',
      bgColor: 'bg-ghl-primary-50',
      accentColor: 'text-ghl-primary-600'
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
      color: 'ghl-secondary-400',
      gradient: 'from-ghl-secondary-400 to-ghl-secondary-600',
      bgColor: 'bg-ghl-secondary-50',
      accentColor: 'text-ghl-secondary-600'
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
      gradient: 'from-blue-500 to-cyan-500'
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
    <div className="min-h-screen bg-ghl-neutral-50 dark:bg-gray-900">
      {/* Modern Hero Section - Mobile First */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ghl-primary-600 via-ghl-primary-700 to-ghl-secondary-500 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Mobile-first layout - Enhanced */}
            <div className="pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 xl:pt-24 xl:pb-32">
              <div className="text-center">
                {/* Badge */}
                <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-fade-in">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  Trusted by 500+ Companies
                </div>
                
                {/* Main Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-heading font-bold mb-4 sm:mb-6 leading-tight">
                  <span className="block">Specialized</span>
                  <span className="block bg-gradient-to-r from-white to-ghl-secondary-200 bg-clip-text text-transparent">
                    Logistics Solutions
                  </span>
                </h1>
                
                {/* Subtitle */}
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl opacity-90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
                  Expert temperature-controlled logistics for coffee, oils, and specialty commodities. 
                  <span className="block sm:inline"> Delivering quality with unmatched reliability.</span>
                </p>
                
                {/* CTA Buttons - Mobile Optimized */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12">
                  <Link 
                    href="/quote" 
                    className="w-full sm:w-auto btn bg-white text-ghl-primary-600 hover:bg-ghl-neutral-50 hover:scale-105 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg"
                  >
                    Get Custom Quote
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                  <Link 
                    href="/track" 
                    className="w-full sm:w-auto btn border-2 border-white/30 text-white hover:bg-white hover:text-ghl-primary-600 backdrop-blur-sm text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300"
                  >
                    Track Shipment
                  </Link>
                </div>
                
                {/* Stats - Mobile Responsive */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl mb-2 sm:mb-3">
                        <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-1">{stat.number}</div>
                      <div className="text-xs sm:text-sm opacity-80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-ghl-secondary-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Modern Services Section - Mobile First */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-ghl-primary-50 dark:bg-ghl-primary-900/20 text-ghl-primary-600 dark:text-ghl-primary-400 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Package className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Our Services
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-ghl-neutral-900 dark:text-gray-100 mb-4 sm:mb-6">
              Specialized Solutions for Every Need
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-ghl-neutral-600 dark:text-gray-300 max-w-3xl mx-auto">
              From coffee beans to specialty oils, we provide tailored logistics solutions 
              that preserve quality and ensure timely delivery.
            </p>
          </div>

          {/* Services Grid - Mobile First */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-20 xl:space-y-24">
            {services.map((service, index) => (
              <div key={service.id} className="group">
                <div className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content - Mobile First */}
                  <div className={`space-y-6 sm:space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    {/* Service Badge */}
                    <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-ghl-primary-50 to-ghl-secondary-50 dark:from-ghl-primary-900/20 dark:to-ghl-secondary-900/20 text-ghl-primary-600 dark:text-ghl-primary-400 rounded-full text-xs sm:text-sm font-medium">
                      <service.icon className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                      {service.subtitle}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-heading font-bold text-ghl-neutral-900 dark:text-gray-100 leading-tight">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-base sm:text-lg text-ghl-neutral-600 dark:text-gray-300 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features & Process - Mobile Optimized */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                      {/* Key Features */}
                      <div className="space-y-3 sm:space-y-4">
                        <h4 className="text-base sm:text-lg font-semibold text-ghl-neutral-900 dark:text-gray-100 flex items-center">
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-ghl-secondary-400 mr-2" />
                          Key Features
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start text-xs sm:text-sm text-ghl-neutral-600 dark:text-gray-300">
                              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-ghl-secondary-400 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Our Process */}
                      <div className="space-y-3 sm:space-y-4">
                        <h4 className="text-base sm:text-lg font-semibold text-ghl-neutral-900 dark:text-gray-100 flex items-center">
                          <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-ghl-primary-600 mr-2" />
                          Our Process
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {service.process.slice(0, 3).map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start text-xs sm:text-sm text-ghl-neutral-600 dark:text-gray-300">
                              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-ghl-primary-500 to-ghl-secondary-400 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                                {stepIndex + 1}
                              </div>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Benefits - Modern Card - Mobile optimized */}
                    <div className="bg-gradient-to-r from-ghl-neutral-50 to-ghl-primary-50 dark:from-gray-700/50 dark:to-ghl-primary-900/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-ghl-neutral-200 dark:border-gray-600/30">
                      <h4 className="text-base sm:text-lg font-semibold text-ghl-neutral-900 dark:text-gray-100 mb-3 sm:mb-4 flex items-center">
                        <Star className="h-4 w-4 sm:h-5 sm:w-5 text-ghl-secondary-400 mr-2" />
                        Key Benefits
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center text-xs sm:text-sm text-ghl-neutral-600 dark:text-gray-300">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-ghl-secondary-400 to-ghl-primary-500 rounded-full mr-2 sm:mr-3 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button - Mobile optimized */}
                    <Link 
                      href="/quote"
                      className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 text-white rounded-lg sm:rounded-xl font-semibold hover:from-ghl-primary-700 hover:to-ghl-secondary-500 transition-all duration-300 hover:scale-105 shadow-lg group text-sm sm:text-base"
                    >
                      Get Quote for {service.title}
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Visual - Modern Design - Mobile optimized */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="relative group-hover:scale-105 transition-transform duration-500">
                      {/* Main Visual Card */}
                      <div className="relative bg-gradient-to-br from-ghl-neutral-100 to-ghl-neutral-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 aspect-square flex items-center justify-center overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                        
                        {/* Service Icon */}
                        <div className="relative z-10 text-center">
                          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-ghl-primary-500 to-ghl-secondary-400 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-lg">
                            <service.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white" />
                          </div>
                          <p className="text-xs sm:text-sm text-ghl-neutral-500 dark:text-gray-400 font-medium">Service Visualization</p>
                        </div>
                        
                        {/* Floating Elements */}
                        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white dark:bg-gray-800 text-ghl-primary-600 dark:text-ghl-primary-400 px-2 py-1 sm:px-3 sm:py-2 rounded-md sm:rounded-lg shadow-lg text-xs sm:text-sm font-medium">
                          Specialized
                        </div>
                        
                        <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-gradient-to-r from-ghl-secondary-400 to-ghl-primary-500 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-md sm:rounded-lg shadow-lg text-xs sm:text-sm font-medium">
                          Expert Handling
                        </div>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-ghl-secondary-400 to-ghl-primary-500 rounded-full animate-pulse"></div>
                      <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-ghl-primary-500 to-ghl-secondary-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Proven Process Section - Enhanced UI */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-ghl-neutral-50 via-white to-ghl-primary-50/30 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,86,49,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(76,175,80,0.05),transparent_50%)]"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-ghl-primary-50 to-ghl-secondary-50 dark:from-ghl-primary-900/50 dark:to-ghl-secondary-900/50 text-ghl-primary-600 dark:text-ghl-primary-300 rounded-full text-sm font-semibold mb-8 shadow-lg border border-ghl-primary-200 dark:border-ghl-primary-600/50">
              <Clock className="w-5 h-5 mr-3" />
              Our Proven Process
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-ghl-neutral-900 dark:text-white mb-8 leading-tight">
              <span className="block">How We Deliver</span>
              <span className="block bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-ghl-neutral-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From initial consultation to final delivery, our systematic approach ensures 
              your temperature-sensitive commodities are handled with precision and care.
            </p>
          </div>

          {/* Enhanced Process Steps */}
          <div className="relative">
            {/* Decorative Background Line */}
            <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-ghl-primary-200 to-transparent rounded-full"></div>
            <div className="hidden lg:block absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-ghl-primary-300 via-ghl-secondary-400 to-ghl-primary-300 rounded-full"></div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {[
                {
                  step: '01',
                  title: 'Consultation & Planning',
                  description: 'We assess your specific requirements and design a customized logistics solution tailored to your needs.',
                  icon: '📋',
                  gradient: 'from-ghl-primary-500 to-ghl-primary-700',
                  bgGradient: 'from-ghl-primary-50 to-ghl-primary-100',
                  features: ['Requirements Analysis', 'Custom Solution Design', 'Risk Assessment']
                },
                {
                  step: '02', 
                  title: 'Quality Assessment',
                  description: 'Thorough inspection and quality control to ensure product integrity throughout the process.',
                  icon: '🔍',
                  gradient: 'from-ghl-secondary-400 to-ghl-secondary-600',
                  bgGradient: 'from-ghl-secondary-50 to-ghl-secondary-100',
                  features: ['Product Inspection', 'Quality Testing', 'Compliance Check']
                },
                {
                  step: '03',
                  title: 'Temperature Control',
                  description: 'Advanced monitoring systems maintain optimal conditions throughout the entire transit journey.',
                  icon: '🌡️',
                  gradient: 'from-blue-500 to-cyan-600',
                  bgGradient: 'from-blue-50 to-cyan-50',
                  features: ['Real-time Monitoring', 'Climate Control', 'Backup Systems']
                },
                {
                  step: '04',
                  title: 'Delivery & Support',
                  description: 'Final delivery with comprehensive tracking and ongoing customer support services.',
                  icon: '🚚',
                  gradient: 'from-green-500 to-emerald-600',
                  bgGradient: 'from-green-50 to-emerald-50',
                  features: ['Final Delivery', 'Tracking Updates', 'Customer Support']
                }
              ].map((process, index) => (
                <div key={index} className="relative group">
                  {/* Enhanced Step Number Badge */}
                  <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-r from-ghl-primary-500 to-ghl-secondary-400 rounded-3xl mb-8 mx-auto lg:mx-0 shadow-2xl group-hover:scale-110 transition-all duration-500">
                    <span className="text-white font-bold text-2xl">{process.step}</span>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-ghl-primary-400 to-ghl-secondary-300 rounded-3xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Enhanced Content Card */}
                  <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-ghl-neutral-200 dark:border-gray-600/50 group-hover:border-ghl-primary-300 dark:group-hover:border-ghl-primary-500/70 overflow-hidden">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${process.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">{process.icon}</div>
                      
                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-heading font-bold text-ghl-neutral-900 dark:text-white mb-6 text-center lg:text-left group-hover:text-ghl-primary-600 dark:group-hover:text-ghl-primary-300 transition-colors">
                        {process.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-ghl-neutral-600 dark:text-gray-300 leading-relaxed text-center lg:text-left mb-6">
                        {process.description}
                      </p>
                      
                      {/* Features List */}
                      <div className="space-y-3">
                        {process.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-ghl-neutral-500 dark:text-gray-400">
                            <div className="w-2 h-2 bg-gradient-to-r from-ghl-primary-400 to-ghl-secondary-400 rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-ghl-primary-500/5 to-ghl-secondary-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  
                  {/* Enhanced Connection Arrow */}
                  <div className="hidden lg:block absolute top-10 -right-4 z-20">
                    <div className="w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-xl border-2 border-ghl-primary-200 dark:border-ghl-primary-600/50 group-hover:scale-110 transition-transform duration-300">
                      <ArrowRight className="w-4 h-4 text-ghl-primary-600 dark:text-ghl-primary-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Process Benefits */}
          <div className="mt-24 relative">
            <div className="bg-gradient-to-r from-ghl-neutral-50 via-ghl-primary-50/50 to-ghl-secondary-50 dark:from-gray-700/50 dark:via-ghl-primary-900/30 dark:to-ghl-secondary-900/30 rounded-3xl p-10 lg:p-16 shadow-2xl border border-ghl-neutral-200 dark:border-gray-600/50 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h3 className="text-3xl lg:text-4xl font-heading font-bold text-ghl-neutral-900 dark:text-white mb-4">
                    Why Choose Our Process?
                  </h3>
                  <p className="text-lg text-ghl-neutral-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Our systematic approach delivers consistent results and exceptional value.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-ghl-primary-500 to-ghl-secondary-400 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-ghl-neutral-900 dark:text-white mb-3">Quality Guaranteed</h4>
                    <p className="text-ghl-neutral-600 dark:text-gray-300">Every step monitored for optimal results with ISO 9001 certification</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-ghl-secondary-400 to-ghl-primary-500 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-ghl-neutral-900 dark:text-white mb-3">On-Time Delivery</h4>
                    <p className="text-ghl-neutral-600 dark:text-gray-300">99.8% on-time delivery rate with real-time tracking and updates</p>
                  </div>
                  
                  <div className="text-center sm:col-span-2 lg:col-span-1 group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-ghl-neutral-900 dark:text-white mb-3">Expert Support</h4>
                    <p className="text-ghl-neutral-600 dark:text-gray-300">24/7 customer service with dedicated logistics specialists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Capabilities Section - Mobile First */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-ghl-neutral-50 to-ghl-primary-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-700 text-ghl-primary-600 dark:text-ghl-primary-400 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Our Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-ghl-neutral-900 dark:text-gray-100 mb-6">
              Advanced Technology & Expertise
            </h2>
            <p className="text-lg sm:text-xl text-ghl-neutral-600 dark:text-gray-300 max-w-4xl mx-auto">
              Cutting-edge technology and decades of expertise ensure your temperature-sensitive 
              commodities reach their destination in perfect condition.
            </p>
          </div>

          {/* Capabilities Grid - Mobile First */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {capabilities.map((capability, index) => (
              <div 
                key={index} 
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-ghl-neutral-200 dark:border-gray-700/30"
              >
                {/* Icon with Gradient Background */}
                <div className={`inline-flex p-4 bg-gradient-to-r ${capability.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <capability.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl lg:text-2xl font-heading font-bold text-ghl-neutral-900 dark:text-gray-100 group-hover:text-ghl-primary-600 dark:group-hover:text-ghl-primary-400 transition-colors">
                    {capability.title}
                  </h3>
                  
                  <p className="text-ghl-neutral-600 dark:text-gray-300 leading-relaxed">
                    {capability.description}
                  </p>
                  
                  <div className="pt-4 border-t border-ghl-neutral-200 dark:border-gray-700/30">
                    <p className="text-sm text-ghl-neutral-500 dark:text-gray-400 leading-relaxed">
                      {capability.details}
                    </p>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-ghl-primary-500/5 to-ghl-secondary-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA Section - Mobile First */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ghl-primary-600 via-ghl-primary-700 to-ghl-secondary-500 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`}}></div>
        
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
                  className="w-full sm:w-auto bg-white text-ghl-primary-600 hover:bg-ghl-neutral-50 hover:scale-105 transition-all duration-300 text-lg px-8 py-4 rounded-xl font-semibold shadow-lg inline-flex items-center justify-center"
                >
                  Request Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/contact" 
                  className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white hover:text-ghl-primary-600 backdrop-blur-sm text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center"
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
        <div className="absolute top-10 left-10 w-16 h-16 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-ghl-secondary-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>
    </div>
  )
}

