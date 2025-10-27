'use client'

import TrustedBySection from '@/components/sections/TrustedBySection'
import EditableText from '@/components/ui/EditableText'
import { Award, Handshake, Heart, Leaf, Shield, Star, Target, Users, Zap } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function About() {
  const videoRef = useRef<HTMLIFrameElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleVideoError = () => {
      console.log('Video failed to load, using fallback background')
      if (videoRef.current) {
        videoRef.current.style.display = 'none'
      }
    }

    const iframe = videoRef.current
    if (iframe) {
      iframe.addEventListener('error', handleVideoError)
      return () => iframe.removeEventListener('error', handleVideoError)
    }
  }, [])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen m-0 p-0">
      {/* Light Background */}
      <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-ghl-primary-50 via-white to-ghl-secondary-50 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,86,49,0.05),transparent_50%)]"></div>
      </div>
      
      {/* Modern Hero Section with Glassmorphism */}
      <section className="hero-section relative text-ghl-neutral-900 min-h-screen overflow-hidden m-0 px-4 py-8 sm:px-0 sm:py-0 -mt-16 sm:-mt-20 mb-8 sm:mb-12">
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{ zIndex: 3 }}>
          <div className="absolute inset-0 animate-pulse" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Modern Floating Elements with Animation */}
        <div className="hidden sm:block absolute top-20 left-10 w-20 h-20 bg-ghl-primary-100 rounded-full blur-xl animate-bounce" style={{ zIndex: 4, animationDuration: '3s' }}></div>
        <div className="hidden sm:block absolute bottom-20 right-10 w-32 h-32 bg-ghl-secondary-200 rounded-full blur-2xl animate-pulse" style={{ zIndex: 4, animationDuration: '4s' }}></div>
        <div className="hidden lg:block absolute top-1/2 left-1/4 w-16 h-16 bg-ghl-primary-200 rounded-full blur-lg animate-ping" style={{ zIndex: 4, animationDuration: '2s' }}></div>
        
        {/* Content Container with Modern Animations */}
        <div className="relative h-full flex items-center justify-center px-0 pt-16 sm:pt-20" style={{ zIndex: 5 }}>
          <div className="max-w-7xl mx-auto text-center w-full">
            {/* Modern Glassmorphism Badge */}
            <div className={`inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-ghl-primary-100 backdrop-blur-md border border-ghl-primary-200 text-ghl-primary-700 rounded-2xl text-sm sm:text-base font-medium mb-6 sm:mb-8 hover:bg-ghl-primary-200 hover:scale-105 transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="flex -space-x-2 mr-3 sm:mr-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-ghl-primary-200 rounded-full border-2 border-ghl-primary-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-xs sm:text-sm text-ghl-primary-700 font-bold">G</span>
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-ghl-primary-200 rounded-full border-2 border-ghl-primary-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-xs sm:text-sm text-ghl-primary-700 font-bold">H</span>
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-ghl-primary-200 rounded-full border-2 border-ghl-primary-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-xs sm:text-sm text-ghl-primary-700 font-bold">L</span>
                </div>
              </div>
              <EditableText 
                content="Trusted by 100+ Partners Worldwide"
                contentKey="about-hero-badge"
                tag="span"
                className="font-semibold text-sm sm:text-base"
              />
            </div>
            
            {/* Modern Typography with Enhanced Gradients */}
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-4 sm:mb-6 md:mb-8 leading-tight ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <EditableText 
                content="About Global"
                contentKey="about-hero-title-1"
                tag="span"
                className="block mb-2 text-ghl-neutral-900"
              />
              <EditableText 
                content="Harvest Logistics"
                contentKey="about-hero-title-2"
                tag="span"
                className="block bg-gradient-to-r from-ghl-primary-600 via-ghl-secondary-500 to-ghl-secondary-600 bg-clip-text text-transparent"
              />
            </h1>
            
            {/* Enhanced Description */}
            <EditableText 
              content="Delivering taste, preserving nature. Your trusted partner in temperature-sensitive commodity logistics with a commitment to sustainability and excellence."
              contentKey="about-hero-description"
              tag="p"
              className={`text-base sm:text-lg md:text-xl lg:text-2xl text-ghl-neutral-700 mb-6 sm:mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            />
            
            {/* Modern Stats Grid with Hover Effects */}
            <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <div className="group text-center p-4 sm:p-6 bg-ghl-primary-50 backdrop-blur-sm rounded-2xl border border-ghl-primary-200 hover:bg-ghl-primary-100 hover:scale-105 transition-all duration-300">
                <EditableText 
                  content="100+"
                  contentKey="about-hero-stat-1-value"
                  tag="span"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-ghl-primary-700 mb-2 group-hover:text-ghl-primary-800 transition-colors duration-300"
                />
                <EditableText 
                  content="Global Partners"
                  contentKey="about-hero-stat-1-label"
                  tag="span"
                  className="text-xs sm:text-sm text-ghl-neutral-600 group-hover:text-ghl-neutral-700 transition-colors duration-300"
                />
              </div>
              <div className="group text-center p-4 sm:p-6 bg-ghl-secondary-50 backdrop-blur-sm rounded-2xl border border-ghl-secondary-200 hover:bg-ghl-secondary-100 hover:scale-105 transition-all duration-300">
                <EditableText 
                  content="99.8%"
                  contentKey="about-hero-stat-2-value"
                  tag="span"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-ghl-secondary-700 mb-2 group-hover:text-ghl-secondary-800 transition-colors duration-300"
                />
                <EditableText 
                  content="On-Time Delivery"
                  contentKey="about-hero-stat-2-label"
                  tag="span"
                  className="text-xs sm:text-sm text-ghl-neutral-600 group-hover:text-ghl-neutral-700 transition-colors duration-300"
                />
              </div>
              <div className="group text-center p-4 sm:p-6 bg-ghl-primary-50 backdrop-blur-sm rounded-2xl border border-ghl-primary-200 hover:bg-ghl-primary-100 hover:scale-105 transition-all duration-300">
                <EditableText 
                  content="24/7"
                  contentKey="about-hero-stat-3-value"
                  tag="span"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-ghl-primary-700 mb-2 group-hover:text-ghl-primary-800 transition-colors duration-300"
                />
                <EditableText 
                  content="Support"
                  contentKey="about-hero-stat-3-label"
                  tag="span"
                  className="text-xs sm:text-sm text-ghl-neutral-600 group-hover:text-ghl-neutral-700 transition-colors duration-300"
                />
              </div>
              <div className="group text-center p-4 sm:p-6 bg-ghl-secondary-50 backdrop-blur-sm rounded-2xl border border-ghl-secondary-200 hover:bg-ghl-secondary-100 hover:scale-105 transition-all duration-300">
                <EditableText 
                  content="15+"
                  contentKey="about-hero-stat-4-value"
                  tag="span"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-ghl-secondary-700 mb-2 group-hover:text-ghl-secondary-800 transition-colors duration-300"
                />
                <EditableText 
                  content="Years Experience"
                  contentKey="about-hero-stat-4-label"
                  tag="span"
                  className="text-xs sm:text-sm text-ghl-neutral-600 group-hover:text-ghl-neutral-700 transition-colors duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Mission & Vision Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-ghl-primary-100 text-ghl-primary-700 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              <EditableText 
                content="Our Purpose"
                contentKey="about-mission-badge"
                tag="span"
              />
            </div>
            <EditableText 
              content="Mission & Vision"
              contentKey="about-mission-title"
              tag="h2"
              className="text-4xl md:text-5xl font-heading font-bold text-ghl-neutral-900 mb-6"
            />
            <EditableText 
              content="Driving the future of sustainable logistics with purpose and passion"
              contentKey="about-mission-description"
              tag="p"
              className="text-xl text-ghl-neutral-600 max-w-3xl mx-auto"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mission Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-ghl-primary-600 to-ghl-primary-700 rounded-2xl flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <EditableText 
                    content="Our Mission"
                    contentKey="about-mission-card-title"
                    tag="h3"
                    className="text-2xl font-heading font-bold text-ghl-neutral-900"
                  />
                </div>
                <EditableText 
                  content="To provide exceptional temperature-controlled logistics solutions that preserve the quality and integrity of specialty commodities while maintaining the highest standards of sustainability and environmental responsibility."
                  contentKey="about-mission-card-description-1"
                  tag="p"
                  className="text-lg text-ghl-neutral-700 mb-6 leading-relaxed"
                />
                <EditableText 
                  content="We believe that every shipment represents not just cargo, but the hard work of farmers, the expectations of consumers, and our commitment to excellence."
                  contentKey="about-mission-card-description-2"
                  tag="p"
                  className="text-lg text-ghl-neutral-700 leading-relaxed"
                />
              </div>
            </div>
            
            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-ghl-secondary-400 to-ghl-primary-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-gradient-to-br from-ghl-primary-50 to-ghl-secondary-50 p-8 lg:p-12 rounded-3xl shadow-xl border border-ghl-primary-200 group-hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-ghl-secondary-400 to-ghl-secondary-500 rounded-2xl flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <EditableText 
                    content="Our Vision"
                    contentKey="about-vision-card-title"
                    tag="h3"
                    className="text-2xl font-heading font-bold text-ghl-primary-700"
                  />
                </div>
                <EditableText 
                  content="To be the world's leading provider of sustainable, temperature-controlled logistics for specialty commodities, setting the standard for quality, reliability, and environmental stewardship in the industry."
                  contentKey="about-vision-card-description"
                  tag="p"
                  className="text-lg text-ghl-neutral-700 leading-relaxed"
                />
                <div className="mt-6 flex items-center text-ghl-primary-600 font-medium">
                  <Heart className="w-5 h-5 mr-2" />
                  <EditableText 
                    content="Building a sustainable future, one shipment at a time"
                    contentKey="about-vision-tagline"
                    tag="span"
                    className="text-ghl-primary-600 font-medium"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Team Section */}
      <section id="team" className="py-24 bg-gradient-to-br from-white via-gray-50  relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-ghl-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-ghl-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-ghl-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="container-custom relative z-10 ">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-ghl-primary-100 text-ghl-primary-700 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              <EditableText 
                content="Meet Our Team"
                contentKey="about-team-badge"
                tag="span"
              />
            </div>
            <EditableText 
              content="Expert Leadership"
              contentKey="about-team-title"
              tag="h2"
              className="text-4xl md:text-5xl font-heading font-bold text-ghl-neutral-900 mb-6"
            />
            <EditableText 
              content="Our team of logistics professionals brings decades of experience in temperature-controlled shipping, commodity handling, and sustainable supply chain management."
              contentKey="about-team-description"
              tag="p"
              className="text-xl text-ghl-neutral-600 max-w-3xl mx-auto"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CEO Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-ghl-primary-600 to-ghl-primary-700 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-ghl-primary-600 to-ghl-primary-700 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-3xl font-bold">JD</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-ghl-secondary-400 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>
                <EditableText 
                  content="John Davidson"
                  contentKey="about-team-ceo-name"
                  tag="h3"
                  className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-2"
                />
                <EditableText 
                  content="CEO & Founder"
                  contentKey="about-team-ceo-title"
                  tag="p"
                  className="text-ghl-primary-600 font-semibold mb-4 text-lg"
                />
                <EditableText 
                  content="20+ years in international logistics and supply chain management with a passion for sustainable practices."
                  contentKey="about-team-ceo-description"
                  tag="p"
                  className="text-ghl-neutral-600 leading-relaxed"
                />
                <div className="mt-6 flex justify-center space-x-4">
                  <div className="w-2 h-2 bg-ghl-primary-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-ghl-primary-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-ghl-primary-300 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Operations Head Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-ghl-secondary-400 to-ghl-secondary-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-ghl-secondary-400 to-ghl-secondary-500 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-3xl font-bold">SM</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-ghl-primary-600 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                </div>
                <EditableText 
                  content="Sarah Martinez"
                  contentKey="about-team-ops-name"
                  tag="h3"
                  className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-2"
                />
                <EditableText 
                  content="Head of Operations"
                  contentKey="about-team-ops-title"
                  tag="p"
                  className="text-ghl-secondary-500 font-semibold mb-4 text-lg"
                />
                <EditableText 
                  content="Expert in temperature-controlled logistics and quality assurance with 15+ years of industry experience."
                  contentKey="about-team-ops-description"
                  tag="p"
                  className="text-ghl-neutral-600 leading-relaxed"
                />
                <div className="mt-6 flex justify-center space-x-4">
                  <div className="w-2 h-2 bg-ghl-secondary-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-ghl-secondary-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-ghl-secondary-300 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Sustainability Director Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-ghl-primary-600 to-ghl-secondary-400 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-3xl font-bold">MR</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-white" />
                  </div>
                </div>
                <EditableText 
                  content="Michael Rodriguez"
                  contentKey="about-team-sustainability-name"
                  tag="h3"
                  className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-2"
                />
                <EditableText 
                  content="Sustainability Director"
                  contentKey="about-team-sustainability-title"
                  tag="p"
                  className="text-ghl-primary-600 font-semibold mb-4 text-lg"
                />
                <EditableText 
                  content="Leading our environmental initiatives and sustainable practices with a focus on carbon-neutral operations."
                  contentKey="about-team-sustainability-description"
                  tag="p"
                  className="text-ghl-neutral-600 leading-relaxed"
                />
                <div className="mt-6 flex justify-center space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Certifications Section */}
      <section id="certifications" className="py-24 bg-gradient-to-br from-white/50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-ghl-primary-100 text-ghl-primary-700 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              <EditableText 
                content="Quality Assurance"
                contentKey="about-certifications-badge"
                tag="span"
              />
            </div>
            <EditableText 
              content="Certifications & Standards"
              contentKey="about-certifications-title"
              tag="h2"
              className="text-4xl md:text-5xl font-heading font-bold text-ghl-neutral-900 mb-6"
            />
            <EditableText 
              content="We maintain the highest industry standards and certifications to ensure the quality and safety of your shipments."
              contentKey="about-certifications-description"
              tag="p"
              className="text-xl text-ghl-neutral-600 max-w-3xl mx-auto"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* ISO 9001 Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-ghl-primary-600 to-ghl-primary-700 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 text-center group-hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-ghl-primary-600 to-ghl-primary-700 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <EditableText 
                  content="ISO 9001"
                  contentKey="about-cert-iso-title"
                  tag="span"
                  className="text-2xl font-bold text-ghl-primary-600 mb-3 group-hover:text-ghl-primary-700 transition-colors duration-300"
                />
                <EditableText 
                  content="Quality Management"
                  contentKey="about-cert-iso-description"
                  tag="span"
                  className="text-sm text-ghl-neutral-600 font-medium"
                />
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-ghl-primary-600 to-ghl-primary-700 h-2 rounded-full w-4/5"></div>
                </div>
              </div>
            </div>
            
            {/* HACCP Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-ghl-secondary-400 to-ghl-secondary-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 text-center group-hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-ghl-secondary-400 to-ghl-secondary-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <EditableText 
                  content="HACCP"
                  contentKey="about-cert-haccp-title"
                  tag="span"
                  className="text-2xl font-bold text-ghl-secondary-500 mb-3 group-hover:text-ghl-secondary-600 transition-colors duration-300"
                />
                <EditableText 
                  content="Food Safety"
                  contentKey="about-cert-haccp-description"
                  tag="span"
                  className="text-sm text-ghl-neutral-600 font-medium"
                />
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-ghl-secondary-400 to-ghl-secondary-500 h-2 rounded-full w-full"></div>
                </div>
              </div>
            </div>
            
            {/* FDA Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 text-center group-hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <EditableText 
                  content="FDA"
                  contentKey="about-cert-fda-title"
                  tag="span"
                  className="text-2xl font-bold text-green-600 mb-3 group-hover:text-green-700 transition-colors duration-300"
                />
                <EditableText 
                  content="FDA Approved"
                  contentKey="about-cert-fda-description"
                  tag="span"
                  className="text-sm text-ghl-neutral-600 font-medium"
                />
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full w-5/6"></div>
                </div>
              </div>
            </div>
            
            {/* Organic Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 text-center group-hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <EditableText 
                  content="Organic"
                  contentKey="about-cert-organic-title"
                  tag="span"
                  className="text-2xl font-bold text-green-700 mb-3 group-hover:text-green-800 transition-colors duration-300"
                />
                <EditableText 
                  content="Certified Organic"
                  contentKey="about-cert-organic-description"
                  tag="span"
                  className="text-sm text-ghl-neutral-600 font-medium"
                />
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-600 to-green-700 h-2 rounded-full w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Values Section */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-ghl-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ghl-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-ghl-primary-100 text-ghl-primary-700 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              <EditableText 
                content="Our Values"
                contentKey="about-values-badge"
                tag="span"
              />
            </div>
            <EditableText 
              content="Core Values"
              contentKey="about-values-title"
              tag="h2"
              className="text-4xl md:text-5xl font-heading font-bold text-ghl-neutral-900 mb-6"
            />
            <EditableText 
              content="The principles that guide everything we do, from daily operations to long-term strategic decisions."
              contentKey="about-values-description"
              tag="p"
              className="text-xl text-ghl-neutral-600 max-w-3xl mx-auto"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sustainability Value */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 text-center group-hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <Leaf className="w-10 h-10 text-white" />
                </div>
                <EditableText 
                  content="Sustainability"
                  contentKey="about-value-sustainability-title"
                  tag="h3"
                  className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-4"
                />
                <EditableText 
                  content="Committed to environmentally responsible practices that protect our planet for future generations."
                  contentKey="about-value-sustainability-description"
                  tag="p"
                  className="text-ghl-neutral-600 leading-relaxed mb-6"
                />
                <div className="flex items-center justify-center text-green-600 font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <EditableText 
                    content="Carbon Neutral Operations"
                    contentKey="about-value-sustainability-tagline"
                    tag="span"
                    className="text-green-600 font-medium"
                  />
                </div>
              </div>
            </div>
            
            {/* Excellence Value */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 text-center group-hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <EditableText 
                  content="Excellence"
                  contentKey="about-value-excellence-title"
                  tag="h3"
                  className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-4"
                />
                <EditableText 
                  content="Delivering exceptional service through continuous improvement and attention to detail."
                  contentKey="about-value-excellence-description"
                  tag="p"
                  className="text-ghl-neutral-600 leading-relaxed mb-6"
                />
                <div className="flex items-center justify-center text-yellow-600 font-medium">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  <EditableText 
                    content="99.8% Success Rate"
                    contentKey="about-value-excellence-tagline"
                    tag="span"
                    className="text-yellow-600 font-medium"
                  />
                </div>
              </div>
            </div>
            
            {/* Partnership Value */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 text-center group-hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <Handshake className="w-10 h-10 text-white" />
                </div>
                <EditableText 
                  content="Partnership"
                  contentKey="about-value-partnership-title"
                  tag="h3"
                  className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-4"
                />
                <EditableText 
                  content="Building lasting relationships based on trust, transparency, and mutual success."
                  contentKey="about-value-partnership-description"
                  tag="p"
                  className="text-ghl-neutral-600 leading-relaxed mb-6"
                />
                <div className="flex items-center justify-center text-blue-600 font-medium">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <EditableText 
                    content="100+ Trusted Partners"
                    contentKey="about-value-partnership-tagline"
                    tag="span"
                    className="text-blue-600 font-medium"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedBySection />
    </div>
  )
}
