'use client'

import EditableText from '@/components/ui/EditableText'
import { ArrowRight, CheckCircle, Circle, Clock, Globe, Leaf, Shield, Star, Thermometer, Truck, Zap } from 'lucide-react'
import Link from 'next/link'


export default function ServicesPage() {
  
  // Organize products into sections
  const sesameProducts = [
    {
      id: 'humera-sesame',
      icon: Leaf,
      title: 'Humera Sesame',
      subtitle: 'Premium Ethiopian Sesame',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8wrHHqlc0BU7cnzS1MVE_MyV-wy4udmZklQ&s',
      description: 'The crown jewel of Ethiopian sesame exports, known for its large white seeds, high oil content, and distinctive sweet aroma. Grown in the fertile Humera region, this variety commands premium prices in international markets.',
      features: [
        'Large white seeds with high oil content',
        'Distinctive sweet aroma and flavor profile',
        'Excellent for both culinary and oil extraction purposes',
        'Grown in Ethiopia\'s prime sesame region',
        'Commands premium prices in international markets',
        'Superior quality from fertile Humera region'
      ],
      process: [
        'Origin assessment and quality control from fertile Humera region',
        'Careful harvesting from prime growing areas',
        'Quality grading and size classification',
        'Testing for oil content and aroma profile',
        'International export compliance verification',
        'Delivery to premium global markets'
      ],
      benefits: [
        'Commands premium prices in international markets',
        'Superior oil content and distinctive sweet aroma',
        'Excellent for both culinary and oil extraction purposes',
        'Grown in Ethiopia\'s prime fertile Humera region'
      ],
      color: 'ghl-primary-600',
      gradient: 'from-ghl-primary-600 to-ghl-secondary-400',
      bgColor: 'bg-ghl-primary-50',
      accentColor: 'text-ghl-primary-600'
    },
    {
      id: 'wollega-sesame',
      icon: Leaf,
      title: 'Wollega Sesame',
      subtitle: 'Premium Ethiopian Sesame',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVh-2gQq9ZdJ7BVG5PgaN2qOwPwpC86baQA&s',
      description: 'Premium quality sesame from the Wollega region, available in both white and brown seed varieties. Known for excellent purity, consistent quality, and versatile applications across food industries.',
      features: [
        'Available in white and brown seed varieties',
        'Consistent size and quality for industrial use',
        'Excellent purity and quality standards',
        'Versatile applications across food industries',
        'Grown in Ethiopia\'s Wollega region',
        'Known for exceptional quality consistency'
      ],
      process: [
        'Selection from Wollega region\'s prime growing areas',
        'Separate processing for white and brown varieties',
        'Quality grading and size classification',
        'Testing for purity and consistency',
        'International export compliance',
        'Delivery to global food industry markets'
      ],
      benefits: [
        'Consistent size and quality for industrial use',
        'Versatile applications across food industries',
        'Available in multiple seed varieties',
        'Excellent purity and quality standards'
      ],
      color: 'ghl-secondary-600',
      gradient: 'from-ghl-secondary-600 to-ghl-secondary-800',
      bgColor: 'bg-ghl-secondary-50',
      accentColor: 'text-ghl-secondary-600'
    }
  ]

  const pulsesAndBeans = [
    {
      id: 'red-kidney-bean',
      icon: Circle,
      title: 'Red Kidney Bean',
      subtitle: 'Premium Ethiopian Pulses',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFX9Sz6NabTtlfBAITBMBYjOqL-x4TSc5xZA&s',
      description: 'Characterized by its deep red color and excellent cooking quality, our Red Kidney Beans are rich in protein, fiber, and essential nutrients. They maintain their shape and texture well in various culinary applications.',
      features: [
        'Deep red color with glossy appearance',
        'Excellent cooking quality and texture retention',
        'High protein and fiber content',
        'Preferred by European and Middle Eastern markets',
        'Consistent size and quality grading'
      ],
      process: [
        'Quality selection from Ethiopia\'s prime regions',
        'Cultivation in ideal climatic conditions',
        'Thorough cleaning and grading',
        'Quality testing and certification',
        'Export to global markets',
        'Delivery to European and Middle Eastern markets'
      ],
      benefits: [
        'Maintains shape and texture in culinary applications',
        'High nutritional value with essential nutrients',
        'Preferred by international markets',
        'Consistent quality for commercial use'
      ],
      color: 'ghl-secondary-600',
      gradient: 'from-red-600 to-red-800',
      bgColor: 'bg-red-50',
      accentColor: 'text-red-600'
    },
    {
      id: 'white-pea-bean',
      icon: Circle,
      title: 'White Pea Bean',
      subtitle: 'Premium Ethiopian Pulses',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_XZ0g4a51YWg6Ce8ih_XCcvwUKMqiPuUauA&s',
      description: 'Featuring a creamy white color and uniform size, White Pea Beans are versatile legumes ideal for traditional dishes, soups, and various food processing applications. Known for their mild flavor and smooth texture.',
      features: [
        'Creamy white color with uniform size',
        'Mild flavor and smooth texture',
        'Quick cooking time with good water absorption',
        'Popular in European and Turkish cuisine',
        'Excellent for canning and food processing'
      ],
      process: [
        'Selection from prime Ethiopian growing regions',
        'Careful cultivation for uniform size',
        'Thorough cleaning and processing',
        'Quality grading for commercial use',
        'Export packaging and certification',
        'Delivery to European and Turkish markets'
      ],
      benefits: [
        'Versatile for traditional dishes and soups',
        'Smooth texture ideal for food processing',
        'Popular in European and Turkish cuisine',
        'Excellent for commercial canning operations'
      ],
      color: 'ghl-primary-600',
      gradient: 'from-ghl-primary-600 to-ghl-primary-800',
      bgColor: 'bg-ghl-primary-50',
      accentColor: 'text-ghl-primary-600'
    },
    {
      id: 'red-speckled-beans',
      icon: Circle,
      title: 'Red Speckled Beans',
      subtitle: 'Premium Ethiopian Pulses',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV9F0kit9WFBA1nnat48GBz4cYTtVMQpu4_Q&s',
      description: 'Distinguished by their unique speckled appearance and firm texture, these beans offer excellent nutritional value and visual appeal. Their robust flavor makes them ideal for hearty dishes and traditional recipes.',
      features: [
        'Distinctive red speckled appearance',
        'Firm texture that holds shape when cooked',
        'Rich, robust flavor profile',
        'High nutritional value with essential minerals',
        'Growing demand in Middle Eastern and African markets'
      ],
      process: [
        'Selection from Ethiopia\'s ideal growing conditions',
        'Careful cultivation for unique speckled pattern',
        'Thorough cleaning maintaining visual appeal',
        'Quality grading and mineral testing',
        'Export certification and packaging',
        'Delivery to Middle Eastern and African markets'
      ],
      benefits: [
        'Excellent for hearty dishes and traditional recipes',
        'High nutritional value with essential minerals',
        'Growing demand in international markets',
        'Unique visual appeal and robust flavor'
      ],
      color: 'ghl-secondary-600',
      gradient: 'from-ghl-secondary-600 to-ghl-secondary-800',
      bgColor: 'bg-ghl-secondary-50',
      accentColor: 'text-ghl-secondary-600'
    },
    {
      id: 'soya-beans',
      icon: Circle,
      title: 'Soya Beans',
      subtitle: 'Premium Ethiopian Pulses',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThs75vmtjYnGcylA6TPcHPbW9Ab3ufi9y6dQ&s',
      description: 'High-protein soya beans suitable for both food consumption and industrial applications. Our soya beans meet quality standards for tofu production, animal feed, and various processed food products.',
      features: [
        'High protein content',
        'Versatile for food and industrial applications',
        'Consistent quality for tofu and soy milk production',
        'Strong demand from Chinese and Southeast Asian markets',
        'Competitive pricing with reliable supply'
      ],
      process: [
        'Premium selection for high protein content',
        'Ideal cultivation in Ethiopia\'s climate',
        'Quality testing for industrial standards',
        'Processing for tofu and soy milk production',
        'Export certification for international markets',
        'Delivery to Chinese and Southeast Asian markets'
      ],
      benefits: [
        'Meets quality standards for tofu production',
        'Suitable for animal feed and food processing',
        'Strong demand from Asian markets',
        'Competitive pricing with reliable supply'
      ],
      color: 'ghl-primary-600',
      gradient: 'from-ghl-primary-500 to-ghl-primary-700',
      bgColor: 'bg-ghl-primary-50',
      accentColor: 'text-ghl-primary-600'
    }
  ]

  // All services combined for backward compatibility
  const services = [...sesameProducts, ...pulsesAndBeans]

  const capabilities = [
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
    { number: '15+', label: 'Countries Served', icon: Globe },
    { number: '24/7', label: 'Customer Support', icon: Star },
    { number: '12+', label: 'Years Experience', icon: Zap }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section removed per request */}

      {/* Attractive Services Section - Mobile First */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 text-white rounded-full text-sm font-semibold mb-8 shadow-lg">
              <Leaf className="w-5 h-5 mr-3" />
              <EditableText 
                content="Our Premium Services"
                contentKey="services-section-badge"
                tag="span"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              <span className="block">
                <EditableText 
                  content="Why People Choose"
                  contentKey="services-section-title-1"
                  tag="span"
                />
              </span>
              <span className="block bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 bg-clip-text text-transparent">
                <EditableText 
                  content="Our Services"
                  contentKey="services-section-title-2"
                  tag="span"
                />
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              <EditableText 
                content="Experience the difference with our specialized logistics solutions. Trusted by 100+ companies worldwide."
                contentKey="services-section-description"
                tag="span"
              />
            </p>
          </div>

          {/* Attractive Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={service.id} href={`/services/${service.id}`} className="group relative block">
                {/* Service Card */}
                <div 
                  className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden group"
                >
                  {/* Hero Image Section */}
                  {service.imageURL && (
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.imageURL} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent`}></div>
                      
                      {/* Badge Overlay */}
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold shadow-lg`}>
                          <service.icon className="h-4 w-4 mr-2 text-gray-800" />
                          <EditableText 
                            content={service.subtitle}
                            contentKey={`service-${service.id}-subtitle`}
                            tag="span"
                            className="text-gray-800"
                          />
                        </span>
                      </div>
                      
                      {/* Icon Badge */}
                      <div className="absolute bottom-4 right-4">
                        <div className={`w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <service.icon className={`h-6 w-6`} style={{ color: '#059669' }} />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6 relative z-10">
                  {/* Title & Description */}
                  <div className="relative z-10 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-ghl-primary-600 transition-colors">
                      <EditableText 
                        content={service.title}
                        contentKey={`service-${service.id}-title`}
                        tag="span"
                      />
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
                      <EditableText 
                        content={service.description}
                        contentKey={`service-${service.id}-description`}
                        tag="span"
                      />
                    </p>
                  </div>
                  
                  {/* Key Features */}
                  <div className="relative z-10 mb-4">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      <EditableText 
                        content="Key Features"
                        contentKey={`service-${service.id}-features-title`}
                        tag="span"
                      />
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-xs text-gray-600">
                          <CheckCircle className="h-3 w-3 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="line-clamp-1">
                            <EditableText 
                              content={feature}
                              contentKey={`service-${service.id}-feature-${featureIndex + 1}`}
                              tag="span"
                            />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Benefits Highlight */}
                  <div className="relative z-10">
                    <div className={`bg-gradient-to-r ${service.gradient} rounded-xl p-4 text-white`}>
                      <div className="flex items-center mb-2">
                        <Star className="h-4 w-4 text-yellow-300 mr-2" />
                        <span className="text-xs font-semibold uppercase tracking-wide">
                          <EditableText 
                            content="Why Choose"
                            contentKey={`service-${service.id}-benefits-title`}
                            tag="span"
                          />
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed">
                        <EditableText 
                          content={service.benefits[0]}
                          contentKey={`service-${service.id}-benefit-1`}
                          tag="span"
                        />
                      </p>
                    </div>
                  </div>
                  
                  {/* View Details Button (links to full page) */}
                  <div className="relative z-10 mt-4">
                    <div
                      className={`w-full bg-white border-2 border-gray-300 text-gray-900 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 group-hover:scale-105 group-hover:border-ghl-primary-600 group-hover:text-ghl-primary-600 transition-all duration-300 shadow-md group-hover:shadow-xl`}
                    >
                      View Details
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-ghl-primary-500/5 to-ghl-secondary-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                
                {/* Floating Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-ghl-primary-500 to-ghl-secondary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 "></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-ghl-secondary-400 to-ghl-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 " style={{ animationDelay: '0.5s' }}></div>
              </Link>
            ))}
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <EditableText 
                content="Why People Love Our Services"
                contentKey="services-trust-title"
                tag="h3"
                className="text-xl font-bold text-gray-900 mb-6"
              />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <EditableText 
                    content="99.8%"
                    contentKey="services-trust-success-rate"
                    tag="span"
                    className="text-2xl font-bold text-gray-900 mb-1"
                  />
                  <EditableText 
                    content="Success Rate"
                    contentKey="services-trust-success-label"
                    tag="span"
                    className="text-sm text-gray-600"
                  />
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <EditableText 
                    content="24/7"
                    contentKey="services-trust-support-value"
                    tag="span"
                    className="text-2xl font-bold text-gray-900 mb-1"
                  />
                  <EditableText 
                    content="Support"
                    contentKey="services-trust-support-label"
                    tag="span"
                    className="text-sm text-gray-600"
                  />
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="h-6 w-6 text-purple-600" />
                  </div>
                  <EditableText 
                    content="15+"
                    contentKey="services-trust-countries-value"
                    tag="span"
                    className="text-2xl font-bold text-gray-900 mb-1"
                  />
                  <EditableText 
                    content="Countries"
                    contentKey="services-trust-countries-label"
                    tag="span"
                    className="text-sm text-gray-600"
                  />
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="h-6 w-6 text-orange-600" />
                  </div>
                  <EditableText 
                    content="100+"
                    contentKey="services-trust-clients-value"
                    tag="span"
                    className="text-2xl font-bold text-gray-900 mb-1"
                  />
                  <EditableText 
                    content="Happy Clients"
                    contentKey="services-trust-clients-label"
                    tag="span"
                    className="text-sm text-gray-600"
                  />
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
              <EditableText 
                content="Our Proven Process"
                contentKey="services-process-badge"
                tag="span"
              />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-black mb-8 leading-tight">
              <EditableText 
                content="How We Deliver"
                contentKey="services-process-title-1"
                tag="span"
                className="block"
              />
              <EditableText 
                content="Ethiopia to the World"
                contentKey="services-process-title-2"
                tag="span"
                className="block bg-gradient-to-r from-gray-800 to-green-800 bg-clip-text text-transparent"
              />
            </h2>
            <EditableText 
              content="At Sam Commodities, we manage the full export journey with precision and care. Through long-standing partnerships with logistics providers and port authorities, we guarantee that every container leaves Ethiopia swiftly, safely, and with complete traceability."
              contentKey="services-process-description"
              tag="p"
              className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            />
          </div>

          {/* Enhanced Process Steps */}
          <div className="relative">
            {/* Decorative Background Line */}
            <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent rounded-full"></div>
            <div className="hidden lg:block absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-300 via-green-800 to-gray-300 rounded-full"></div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
              {[
                {
                  step: '01',
                  title: 'Products Sourced',
                  description: 'Products sourced from top Ethiopian growing regions',
                  icon: '🌾',
                  gradient: 'from-green-600 to-green-800',
                  bgGradient: 'from-green-50 to-green-100',
                  features: ['Premium Growing Regions', 'Direct from Farmers', 'Ethiopian Origin']
                },
                {
                  step: '02', 
                  title: 'Cleaned & Packed',
                  description: 'Cleaned, sorted, and packed at our Addis Ababa warehouse',
                  icon: '📦',
                  gradient: 'from-ghl-primary-500 to-ghl-primary-700',
                  bgGradient: 'from-ghl-primary-50 to-ghl-primary-100',
                  features: ['Thorough Cleaning', 'Quality Sorting', 'Addis Ababa Warehouse']
                },
                {
                  step: '03',
                  title: 'Quality Checked',
                  description: 'Quality-checked per ECX and buyer specifications',
                  icon: '✓',
                  gradient: 'from-green-500 to-emerald-600',
                  bgGradient: 'from-green-50 to-emerald-50',
                  features: ['ECX Standards', 'Buyer Specifications', 'Quality Certification']
                },
                {
                  step: '04',
                  title: 'Transported to Port',
                  description: 'Loaded and transported via road to Djibouti port',
                  icon: '🚚',
                  gradient: 'from-blue-600 to-blue-800',
                  bgGradient: 'from-blue-50 to-blue-100',
                  features: ['Road Transport', 'Djibouti Port', 'Secure Loading']
                },
                {
                  step: '05',
                  title: 'Shipped Globally',
                  description: 'Customs-cleared, documented, and shipped to international buyers',
                  icon: '🌍',
                  gradient: 'from-ghl-secondary-600 to-ghl-secondary-800',
                  bgGradient: 'from-ghl-secondary-50 to-ghl-secondary-100',
                  features: ['Customs Clearance', 'Complete Documentation', 'International Shipping']
                }
              ].map((process, index) => {
                // Background images based on each step's title
                const backgroundImages = [
                  'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Step 1 - Products Sourced - farming fields
                  'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Step 2 - Cleaned & Packed - warehouse
                  'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Step 3 - Quality Checked - quality control
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThs75vmtjYnGcylA6TPcHPbW9Ab3ufi9y6dQ&s', // Step 4 - Transported to Port - trucks
                  'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'  // Step 5 - Shipped Globally - cargo ships
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
                    {/* Light overlay for better text readability */}
                    <div className="absolute inset-0 bg-white/80"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-heading font-bold text-ghl-neutral-900 mb-6 text-center lg:text-left group-hover:text-ghl-neutral-800 transition-colors">
                        <EditableText 
                          content={process.title}
                          contentKey={`services-process-step-${process.step}-title`}
                          tag="span"
                        />
                      </h3>
                      
                      {/* Description */}
                      <p className="text-ghl-neutral-700 leading-relaxed text-center lg:text-left mb-6">
                        <EditableText 
                          content={process.description}
                          contentKey={`services-process-step-${process.step}-description`}
                          tag="span"
                        />
                      </p>
                      
                      {/* Features List */}
                      <div className="space-y-3">
                        {process.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-ghl-neutral-600">
                            <div className="w-2 h-2 bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 rounded-full mr-3 flex-shrink-0"></div>
                            <EditableText 
                              content={feature}
                              contentKey={`services-process-step-${process.step}-feature-${featureIndex + 1}`}
                              tag="span"
                            />
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
                  <EditableText 
                    content="Why Choose Our Process?"
                    contentKey="services-process-benefits-title"
                    tag="span"
                  />
                </h3>
                <p className="text-gray-600 max-w-xl mx-auto">
                  <EditableText 
                    content="Our systematic approach delivers consistent results and exceptional value."
                    contentKey="services-process-benefits-description"
                    tag="span"
                  />
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gray-800 to-black rounded-xl mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    <EditableText 
                      content="Quality Guaranteed"
                      contentKey="services-process-benefit-1-title"
                      tag="span"
                    />
                  </h4>
                  <p className="text-sm text-gray-600">
                    <EditableText 
                      content="ISO 9001 certification with monitored processes"
                      contentKey="services-process-benefit-1-description"
                      tag="span"
                    />
                  </p>
                </div>
                
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-800 to-gray-800 rounded-xl mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    <EditableText 
                      content="On-Time Delivery"
                      contentKey="services-process-benefit-2-title"
                      tag="span"
                    />
                  </h4>
                  <p className="text-sm text-gray-600">
                    <EditableText 
                      content="99.8% success rate with real-time tracking"
                      contentKey="services-process-benefit-2-description"
                      tag="span"
                    />
                  </p>
                </div>
                
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-800 to-green-600 rounded-xl mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    <EditableText 
                      content="Expert Support"
                      contentKey="services-process-benefit-3-title"
                      tag="span"
                    />
                  </h4>
                  <p className="text-sm text-gray-600">
                    <EditableText 
                      content="24/7 customer service with specialists"
                      contentKey="services-process-benefit-3-description"
                      tag="span"
                    />
                  </p>
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
              <EditableText 
                content="Our Advanced Capabilities"
                contentKey="services-capabilities-badge"
                tag="span"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              <span className="block">
                <EditableText 
                  content="Technology That"
                  contentKey="services-capabilities-title-1"
                  tag="span"
                />
              </span>
              <span className="block bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 bg-clip-text text-transparent">
                <EditableText 
                  content="Delivers Excellence"
                  contentKey="services-capabilities-title-2"
                  tag="span"
                />
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              <EditableText 
                content="Cutting-edge technology and decades of expertise ensure your temperature-sensitive commodities reach their destination in perfect condition. Trusted by industry leaders worldwide."
                contentKey="services-capabilities-description"
                tag="span"
              />
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
                      <EditableText 
                        content={capability.title}
                        contentKey={`services-capability-${index + 1}-title`}
                        tag="span"
                      />
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <EditableText 
                        content={capability.description}
                        contentKey={`services-capability-${index + 1}-description`}
                        tag="span"
                      />
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
                        <EditableText 
                          content={capability.details}
                          contentKey={`services-capability-${index + 1}-details`}
                          tag="span"
                        />
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
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  <EditableText 
                    content="Our Technology Advantage"
                    contentKey="services-tech-title"
                    tag="span"
                  />
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  <EditableText 
                    content="Advanced monitoring systems and cutting-edge logistics technology ensure optimal results."
                    contentKey="services-tech-description"
                    tag="span"
                  />
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Thermometer className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-lg font-bold text-gray-900 mb-1">
                    <EditableText 
                      content="Real-time"
                      contentKey="services-tech-stat-1-value"
                      tag="span"
                    />
                  </div>
                  <div className="text-sm text-gray-600">
                    <EditableText 
                      content="Temperature Monitoring"
                      contentKey="services-tech-stat-1-label"
                      tag="span"
                    />
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-lg font-bold text-gray-900 mb-1">
                    <EditableText 
                      content="ISO 9001"
                      contentKey="services-tech-stat-2-value"
                      tag="span"
                    />
                  </div>
                  <div className="text-sm text-gray-600">
                    <EditableText 
                      content="Quality Certified"
                      contentKey="services-tech-stat-2-label"
                      tag="span"
                    />
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Leaf className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="text-lg font-bold text-gray-900 mb-1">
                    <EditableText 
                      content="Eco-Friendly"
                      contentKey="services-tech-stat-3-value"
                      tag="span"
                    />
                  </div>
                  <div className="text-sm text-gray-600">
                    <EditableText 
                      content="Sustainable Practices"
                      contentKey="services-tech-stat-3-label"
                      tag="span"
                    />
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="text-lg font-bold text-gray-900 mb-1">
                    <EditableText 
                      content="24/7"
                      contentKey="services-tech-stat-4-value"
                      tag="span"
                    />
                  </div>
                  <div className="text-sm text-gray-600">
                    <EditableText 
                      content="Monitoring"
                      contentKey="services-tech-stat-4-label"
                      tag="span"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Import Services Section - Enhanced Modern Design */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-ghl-primary-50 via-white to-ghl-secondary-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.03),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.03),transparent_50%)]"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 text-white rounded-full text-sm font-semibold mb-8 shadow-lg">
              <Truck className="w-5 h-5 mr-3" />
              <EditableText 
                content="Our Import Services"
                contentKey="imports-badge"
                tag="span"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              <span className="block">
                <EditableText 
                  content="Our Import Services"
                  contentKey="imports-title-1"
                  tag="span"
                />
              </span>
              <span className="block bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 bg-clip-text text-transparent">
                <EditableText 
                  content="Connecting Ethiopia to Trusted Global Suppliers"
                  contentKey="imports-title-2"
                  tag="span"
                />
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              <EditableText 
                content="At Sam Commodities, our import division focuses on sourcing high-quality products from international manufacturers and delivering them efficiently to Ethiopian businesses. With a deep understanding of customs regulations, logistics, and supplier management, we make importing into Ethiopia seamless and dependable."
                contentKey="imports-description"
                tag="span"
              />
            </p>
          </div>

          {/* Product Categories - Modern Card Design */}
          <div className="mb-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12 text-center">
              <EditableText 
                content="Product Categories We Import"
                contentKey="imports-categories-title"
                tag="span"
              />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Bathroom Accessories */}
              <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                {/* Background Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Bathroom Accessories"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 via-blue-500/50 to-transparent"></div>
                  
                  {/* Icon Badge Overlay */}
                  <div className="absolute top-4 left-4">
                    <div className="w-16 h-16 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl border-2 border-white/50 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-4xl">🚿</span>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                      <h4 className="text-lg font-bold text-gray-900">
                        <EditableText 
                          content="Bathroom Accessories & Elements"
                          contentKey="imports-category-1-title"
                          tag="span"
                        />
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    <EditableText 
                      content="Modern, durable, and design-driven products sourced from reputable manufacturers in China and Turkey, ideal for construction and interior projects."
                      contentKey="imports-category-1-description"
                      tag="span"
                    />
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-ghl-primary-500/5 to-ghl-secondary-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              
              {/* Electric Automobiles */}
              <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                {/* Background Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src="https://www.e-spincorp.com/wp-content/uploads/2021/09/electric-vehicle-car-ev.jpeg"
                    alt="Electric Automobiles"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/90 via-green-500/50 to-transparent"></div>
                  
                  {/* Icon Badge Overlay */}
                  <div className="absolute top-4 left-4">
                    <div className="w-16 h-16 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl border-2 border-white/50 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-4xl">⚡</span>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                      <h4 className="text-lg font-bold text-gray-900">
                        <EditableText 
                          content="Electric Automobiles"
                          contentKey="imports-category-2-title"
                          tag="span"
                        />
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    <EditableText 
                      content="Sustainable mobility solutions — compact electric vehicles and charging components — supporting Ethiopia's transition to clean energy."
                      contentKey="imports-category-2-description"
                      tag="span"
                    />
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-ghl-primary-500/5 to-ghl-secondary-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              
              {/* Industrial Chemicals */}
              <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                {/* Background Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Industrial Chemicals"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/90 via-purple-500/50 to-transparent"></div>
                  
                  {/* Icon Badge Overlay */}
                  <div className="absolute top-4 left-4">
                    <div className="w-16 h-16 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl border-2 border-white/50 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-4xl">⚗️</span>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                      <h4 className="text-lg font-bold text-gray-900">
                        <EditableText 
                          content="Industrial Chemicals"
                          contentKey="imports-category-3-title"
                          tag="span"
                        />
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    <EditableText 
                      content="Reliable imports of essential industrial and agricultural chemicals that meet global safety and performance standards."
                      contentKey="imports-category-3-description"
                      tag="span"
                    />
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-ghl-primary-500/5 to-ghl-secondary-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* How We Work - Enhanced Modern Cards */}
          <div className="mb-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12 text-center">
              <EditableText 
                content="How We Work"
                contentKey="imports-how-we-work-title"
                tag="span"
              />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200">
                {/* Step Number Badge */}
                <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 rounded-2xl mb-6 mx-auto lg:mx-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">01</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-4 text-center lg:text-left group-hover:text-ghl-primary-600 transition-colors">
                  <EditableText 
                    content="Supplier Sourcing & Verification"
                    contentKey="imports-step-1-title"
                    tag="span"
                  />
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed text-center lg:text-left">
                  <EditableText 
                    content="We identify trusted international manufacturers, verify quality certifications, and negotiate competitive terms for our clients."
                    contentKey="imports-step-1-description"
                    tag="span"
                  />
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-ghl-primary-500/5 to-ghl-secondary-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              
              {/* Step 2 */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200">
                <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 rounded-2xl mb-6 mx-auto lg:mx-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">02</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-4 text-center lg:text-left group-hover:text-ghl-primary-600 transition-colors">
                  <EditableText 
                    content="Import Documentation & Compliance"
                    contentKey="imports-step-2-title"
                    tag="span"
                  />
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed text-center lg:text-left">
                  <EditableText 
                    content="Our logistics team manages all necessary documentation, including import permits, certificates of conformity, and customs declarations."
                    contentKey="imports-step-2-description"
                    tag="span"
                  />
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-ghl-primary-500/5 to-ghl-secondary-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              
              {/* Step 3 */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200">
                <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 rounded-2xl mb-6 mx-auto lg:mx-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">03</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-4 text-center lg:text-left group-hover:text-ghl-primary-600 transition-colors">
                  <EditableText 
                    content="Freight & Delivery Coordination"
                    contentKey="imports-step-3-title"
                    tag="span"
                  />
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed text-center lg:text-left">
                  <EditableText 
                    content="We handle shipping, insurance, and customs clearance to ensure products reach Ethiopia quickly and safely."
                    contentKey="imports-step-3-description"
                    tag="span"
                  />
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-ghl-primary-500/5 to-ghl-secondary-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              
              {/* Step 4 */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200">
                <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 rounded-2xl mb-6 mx-auto lg:mx-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">04</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-4 text-center lg:text-left group-hover:text-ghl-primary-600 transition-colors">
                  <EditableText 
                    content="Local Distribution Support"
                    contentKey="imports-step-4-title"
                    tag="span"
                  />
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed text-center lg:text-left">
                  <EditableText 
                    content="Upon arrival, we provide end-to-end support from warehouse handling to delivery at your business or project site."
                    contentKey="imports-step-4-description"
                    tag="span"
                  />
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-ghl-primary-500/5 to-ghl-secondary-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Why Choose - Enhanced Modern Design */}
          <div className="relative bg-gradient-to-br from-ghl-primary-50 to-ghl-secondary-50 rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-gradient-to-r from-ghl-primary-200 to-ghl-secondary-200 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.08'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12 text-center">
                <EditableText 
                  content="Why Choose Sam Commodities for Imports"
                  contentKey="imports-why-title"
                  tag="span"
                />
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start group bg-white/50 backdrop-blur-sm rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">
                      <EditableText 
                        content="Trusted Global Network"
                        contentKey="imports-why-1-title"
                        tag="span"
                      />
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <EditableText 
                        content="Strong partnerships with certified suppliers in Asia, Europe, and the Middle East."
                        contentKey="imports-why-1-description"
                        tag="span"
                      />
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group bg-white/50 backdrop-blur-sm rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">
                      <EditableText 
                        content="Compliance Expertise"
                        contentKey="imports-why-2-title"
                        tag="span"
                      />
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <EditableText 
                        content="Full adherence to Ethiopian import laws and standards."
                        contentKey="imports-why-2-description"
                        tag="span"
                      />
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group bg-white/50 backdrop-blur-sm rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Star className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">
                      <EditableText 
                        content="Competitive Pricing"
                        contentKey="imports-why-3-title"
                        tag="span"
                      />
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <EditableText 
                        content="Leveraging bulk procurement and efficient shipping for cost advantages."
                        contentKey="imports-why-3-description"
                        tag="span"
                      />
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group bg-white/50 backdrop-blur-sm rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Clock className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">
                      <EditableText 
                        content="Reliability"
                        contentKey="imports-why-4-title"
                        tag="span"
                      />
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <EditableText 
                        content="Transparent updates from order confirmation to local delivery."
                        contentKey="imports-why-4-description"
                        tag="span"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-ghl-primary-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-ghl-secondary-400/10 rounded-full blur-2xl"></div>
      </section>

      {/* Shipping Information Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-full text-sm font-semibold mb-8 shadow-lg">
              <Truck className="w-5 h-5 mr-3" />
              <EditableText 
                content="Shipping Information"
                contentKey="shipping-badge"
                tag="span"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              <span className="block bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                <EditableText 
                  content="Reliable Export Logistics"
                  contentKey="shipping-title"
                  tag="span"
                />
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              <EditableText 
                content="All products are prepared in our Addis Ababa warehouse and shipped via Djibouti port with complete documentation and quality assurance."
                contentKey="shipping-description"
                tag="span"
              />
            </p>
          </div>

          {/* Markets Grid - Enhanced Modern Design */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
              <EditableText 
                content="International Markets"
                contentKey="shipping-markets-title"
                tag="span"
              />
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-12 text-center leading-relaxed">
              <EditableText 
                content="Sam Commodities serves a wide range of international buyers. Our exports reach customers across Asia, the Middle East, Africa, and Europe."
                contentKey="shipping-markets-intro"
                tag="span"
              />
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Asia */}
              <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                {/* Background Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Asia"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  {/* Flag Emoji Overlay */}
                  <div className="absolute top-4 right-4">
                    <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-3xl">🌏</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-ghl-primary-600 transition-colors">
                    <EditableText 
                      content="Asia"
                      contentKey="shipping-market-asia-title"
                      tag="span"
                    />
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <EditableText 
                      content="China and Southeast Asian markets that highly value our sesame and soya beans."
                      contentKey="shipping-market-asia-description"
                      tag="span"
                    />
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-ghl-primary-500/5 to-ghl-secondary-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Middle East & North Africa */}
              <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                {/* Background Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Middle East & Africa"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  {/* Flag Emoji Overlay */}
                  <div className="absolute top-4 right-4">
                    <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-3xl">🏜️</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-ghl-primary-600 transition-colors">
                    <EditableText 
                      content="Middle East & Africa"
                      contentKey="shipping-market-mena-title"
                      tag="span"
                    />
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <EditableText 
                      content="Key destinations for our grains, pulses, and agricultural products."
                      contentKey="shipping-market-mena-description"
                      tag="span"
                    />
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-ghl-primary-500/5 to-ghl-secondary-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Europe */}
              <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                {/* Background Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Europe"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  {/* Flag Emoji Overlay */}
                  <div className="absolute top-4 right-4">
                    <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-3xl">🇪🇺</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-ghl-primary-600 transition-colors">
                    <EditableText 
                      content="Europe"
                      contentKey="shipping-market-europe-title"
                      tag="span"
                    />
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <EditableText 
                      content="EU and Turkey markets prefer Wollega sesame. Our white pea beans and kidney beans supply European food industries."
                      contentKey="shipping-market-europe-description"
                      tag="span"
                    />
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-ghl-primary-500/5 to-ghl-secondary-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Global Reach */}
              <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                {/* Background Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Global Reach"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  {/* Flag Emoji Overlay */}
                  <div className="absolute top-4 right-4">
                    <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-3xl">🌍</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-ghl-primary-600 transition-colors">
                    <EditableText 
                      content="Global Reach"
                      contentKey="shipping-market-global-title"
                      tag="span"
                    />
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <EditableText 
                      content="We tailor shipments to meet each region's quality and labeling requirements. No matter where you are, Sam Commodities positions Ethiopia's finest pulses and sesame within reach."
                      contentKey="shipping-market-global-description"
                      tag="span"
                    />
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-ghl-primary-500/5 to-ghl-secondary-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Quality Assurance */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 md:p-12 border-2 border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              <EditableText 
                content="Quality You Can Trust"
                contentKey="shipping-quality-title"
                tag="span"
              />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <EditableText 
                    content="Strict Quality Control"
                    contentKey="shipping-quality-1-title"
                    tag="span"
                  />
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  <EditableText 
                    content="Every shipment undergoes strict quality control from farm to port. We combine local agricultural excellence with international trade precision to deliver the finest Ethiopian pulses and sesame to the world."
                    contentKey="shipping-quality-1-description"
                    tag="span"
                  />
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-green-600 mr-3" />
                  <EditableText 
                    content="Complete Documentation"
                    contentKey="shipping-quality-2-title"
                    tag="span"
                  />
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  <EditableText 
                    content="All products are prepared in our Addis Ababa warehouse and shipped via Djibouti port with complete documentation, quality assurance, and full traceability for your peace of mind."
                    contentKey="shipping-quality-2-description"
                    tag="span"
                  />
                </p>
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
                <EditableText 
                  content="Interested in Our Premium Ethiopian Products?"
                  contentKey="services-cta-badge"
                  tag="span"
                />
              </div>
              
              {/* Main Content */}
              <EditableText 
                content="Interested in Our Premium Ethiopian Products?"
                contentKey="services-cta-title"
                tag="h2"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight"
              />
              
              <EditableText 
                content="Contact us for detailed specifications, current pricing, and samples."
                contentKey="services-cta-description"
                tag="p"
                className="text-lg sm:text-xl lg:text-2xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed"
              />
              
              {/* CTA Buttons - Mobile Optimized */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link 
                  href="/quote" 
                  className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-lg px-8 py-4 rounded-xl font-semibold shadow-lg inline-flex items-center justify-center"
                >
                  <EditableText 
                    content="Request Product Catalog"
                    contentKey="services-cta-primary-button-text"
                    tag="span"
                  />
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/quote" 
                  className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-sm text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center"
                >
                  <EditableText 
                    content="Get Quote"
                    contentKey="services-cta-secondary-button-text"
                    tag="span"
                  />
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <EditableText 
                    content="99.8%"
                    contentKey="services-cta-stat-1-value"
                    tag="span"
                    className="text-2xl lg:text-3xl font-bold mb-1"
                  />
                  <EditableText 
                    content="On-Time Delivery"
                    contentKey="services-cta-stat-1-label"
                    tag="span"
                    className="text-sm opacity-80"
                  />
                </div>
                <div className="text-center">
                  <EditableText 
                    content="24/7"
                    contentKey="services-cta-stat-2-value"
                    tag="span"
                    className="text-2xl lg:text-3xl font-bold mb-1"
                  />
                  <EditableText 
                    content="Support"
                    contentKey="services-cta-stat-2-label"
                    tag="span"
                    className="text-sm opacity-80"
                  />
                </div>
                <div className="text-center">
                  <EditableText 
                    content="15+"
                    contentKey="services-cta-stat-3-value"
                    tag="span"
                    className="text-2xl lg:text-3xl font-bold mb-1"
                  />
                  <EditableText 
                    content="Countries"
                    contentKey="services-cta-stat-3-label"
                    tag="span"
                    className="text-sm opacity-80"
                  />
                </div>
                <div className="text-center">
                  <EditableText 
                    content="15+"
                    contentKey="services-cta-stat-4-value"
                    tag="span"
                    className="text-2xl lg:text-3xl font-bold mb-1"
                  />
                  <EditableText 
                    content="Years Experience"
                    contentKey="services-cta-stat-4-label"
                    tag="span"
                    className="text-sm opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-white/5 rounded-full blur-xl "></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-500/20 rounded-full blur-2xl"></div>
      </section>

      {/* Using full-page product details; modal removed */}
    </div>
  )
}

