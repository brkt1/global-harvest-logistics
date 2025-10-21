'use client'

import { Award, CheckCircle, Globe, Shield, Star, Users } from 'lucide-react'

export default function TrustedBySection() {
  const trustedCompanies = [
    { name: 'Premium Coffee Roasters', logo: '☕', location: 'Colombia' },
    { name: 'Mediterranean Olive Oil Co.', logo: '🫒', location: 'Italy' },
    { name: 'Artisan Food Imports', logo: '🌾', location: 'United States' },
    { name: 'Organic Farms Network', logo: '🌱', location: 'Netherlands' },
    { name: 'Global Spice Traders', logo: '🌶️', location: 'India' },
    { name: 'Sustainable Foods Ltd.', logo: '♻️', location: 'Canada' }
  ]

  const trustStats = [
    { value: '500+', label: 'Global Partners', icon: Users },
    { value: '99.8%', label: 'Success Rate', icon: CheckCircle },
    { value: '50+', label: 'Countries', icon: Globe },
    { value: '15+', label: 'Years Experience', icon: Award }
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient and glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-ghl-primary-50 via-white to-ghl-secondary-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-ghl-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-ghl-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-white/20 rounded-full text-ghl-primary-700 text-sm font-medium mb-6 shadow-lg">
            <Shield className="h-4 w-4 mr-2" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-ghl-neutral-900 mb-4">
          </h2>
          <p className="text-lg text-ghl-neutral-600 max-w-2xl mx-auto">
            Join hundreds of companies worldwide who trust us with their most valuable shipments
          </p>
        </div>

        {/* Glassmorphism Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustStats.map((stat, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Glassmorphism card */}
              <div className="relative bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="inline-flex p-3 bg-white/30 rounded-xl mb-4 group-hover:bg-white/40 transition-colors duration-300">
                    <stat.icon className="h-6 w-6 text-ghl-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-ghl-neutral-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-ghl-neutral-600 font-medium">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted Companies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustedCompanies.map((company, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Glassmorphism company card */}
              <div className="relative bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:bg-white/25 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {company.logo}
                  </div>
                  <div className="text-xs font-medium text-ghl-neutral-700 mb-1 leading-tight">
                    {company.name}
                  </div>
                  <div className="text-xs text-ghl-neutral-500">
                    {company.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-ghl-neutral-700 text-sm font-medium shadow-lg">
            <Star className="h-4 w-4 mr-2 text-ghl-primary-600" />
            Join our network of trusted partners
          </div>
        </div>
      </div>
    </section>
  )
}
