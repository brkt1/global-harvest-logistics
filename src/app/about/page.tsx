'use client'

import TrustedBySection from '@/components/sections/TrustedBySection'
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
      {/* Modern Animated Background */}
      <div className="hidden md:block fixed inset-0 w-full h-full overflow-hidden -z-10">
        <div className="video-background">
          <iframe
            ref={videoRef}
            src="https://www.youtube.com/embed/HUozIpTODZQ?autoplay=1&mute=1&start=3&end=12&loop=1&playlist=HUozIpTODZQ&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&playsinline=1&enablejsapi=1&cc_load_policy=0&cc_lang_pref=en&hl=en&origin=*&wmode=opaque&theme=dark&color=white"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            title="Background Video"
            loading="eager"
            frameBorder="0"
            sandbox="allow-scripts allow-same-origin allow-presentation"
          />
        </div>
        {/* Enhanced Video Overlay with Glassmorphism */}
        <div className="absolute inset-0 bg-gradient-to-br from-ghl-primary-600/20 via-ghl-primary-700/10 to-ghl-secondary-500/15 backdrop-blur-[1px]" style={{ zIndex: 2 }}></div>
      </div>
      
      {/* Modern Fallback Background for Mobile */}
      <div className="md:hidden fixed inset-0 w-full h-full bg-gradient-to-br from-ghl-primary-600 via-ghl-primary-700 to-ghl-secondary-500 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Modern Hero Section with Glassmorphism */}
      <section className="hero-section relative text-white min-h-screen overflow-hidden m-0 px-4 py-8 sm:px-0 sm:py-0 -mt-16 sm:-mt-20 mb-8 sm:mb-12">
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{ zIndex: 3 }}>
          <div className="absolute inset-0 animate-pulse" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Modern Floating Elements with Animation */}
        <div className="hidden sm:block absolute top-20 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl animate-bounce" style={{ zIndex: 4, animationDuration: '3s' }}></div>
        <div className="hidden sm:block absolute bottom-20 right-10 w-32 h-32 bg-ghl-secondary-400/30 rounded-full blur-2xl animate-pulse" style={{ zIndex: 4, animationDuration: '4s' }}></div>
        <div className="hidden lg:block absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg animate-ping" style={{ zIndex: 4, animationDuration: '2s' }}></div>
        
        {/* Content Container with Modern Animations */}
        <div className="relative h-full flex items-center justify-center px-0 pt-16 sm:pt-20" style={{ zIndex: 5 }}>
          <div className="max-w-7xl mx-auto text-center w-full">
            {/* Modern Glassmorphism Badge */}
            <div className={`inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-2xl text-sm sm:text-base font-medium mb-6 sm:mb-8 hover:bg-white/20 hover:scale-105 transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="flex -space-x-2 mr-3 sm:mr-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/30 rounded-full border-2 border-white/40 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-xs sm:text-sm text-white font-bold">G</span>
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/30 rounded-full border-2 border-white/40 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-xs sm:text-sm text-white font-bold">H</span>
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/30 rounded-full border-2 border-white/40 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-xs sm:text-sm text-white font-bold">L</span>
                </div>
              </div>
              <span className="font-semibold text-sm sm:text-base">Trusted by 500+ Partners Worldwide</span>
            </div>
            
            {/* Modern Typography with Enhanced Gradients */}
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-4 sm:mb-6 md:mb-8 leading-tight ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <span className="block mb-2">About Global</span>
              <span className="block bg-gradient-to-r from-white via-ghl-secondary-200 to-ghl-secondary-300 bg-clip-text text-transparent">
                Harvest Logistics
              </span>
            </h1>
            
            {/* Enhanced Description */}
            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              Delivering taste, preserving nature. Your trusted partner in temperature-sensitive 
              commodity logistics with a commitment to sustainability and excellence.
            </p>
            
            {/* Modern Stats Grid with Hover Effects */}
            <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <div className="group text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-ghl-secondary-200 transition-colors duration-300">500+</div>
                <div className="text-xs sm:text-sm text-white/80 group-hover:text-white transition-colors duration-300">Global Partners</div>
              </div>
              <div className="group text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-ghl-secondary-200 transition-colors duration-300">99.8%</div>
                <div className="text-xs sm:text-sm text-white/80 group-hover:text-white transition-colors duration-300">On-Time Delivery</div>
              </div>
              <div className="group text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-ghl-secondary-200 transition-colors duration-300">24/7</div>
                <div className="text-xs sm:text-sm text-white/80 group-hover:text-white transition-colors duration-300">Support</div>
              </div>
              <div className="group text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-ghl-secondary-200 transition-colors duration-300">15+</div>
                <div className="text-xs sm:text-sm text-white/80 group-hover:text-white transition-colors duration-300">Years Experience</div>
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
              Our Purpose
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ghl-neutral-900 mb-6">
              Mission & Vision
            </h2>
            <p className="text-xl text-ghl-neutral-600 max-w-3xl mx-auto">
              Driving the future of sustainable logistics with purpose and passion
            </p>
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
                  <h3 className="text-2xl font-heading font-bold text-ghl-neutral-900">Our Mission</h3>
                </div>
                <p className="text-lg text-ghl-neutral-700 mb-6 leading-relaxed">
                  To provide exceptional temperature-controlled logistics solutions that preserve 
                  the quality and integrity of specialty commodities while maintaining the highest 
                  standards of sustainability and environmental responsibility.
                </p>
                <p className="text-lg text-ghl-neutral-700 leading-relaxed">
                  We believe that every shipment represents not just cargo, but the hard work of 
                  farmers, the expectations of consumers, and our commitment to excellence.
                </p>
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
                  <h3 className="text-2xl font-heading font-bold text-ghl-primary-700">Our Vision</h3>
                </div>
                <p className="text-lg text-ghl-neutral-700 leading-relaxed">
                  To be the world&apos;s leading provider of sustainable, temperature-controlled logistics 
                  for specialty commodities, setting the standard for quality, reliability, and 
                  environmental stewardship in the industry.
                </p>
                <div className="mt-6 flex items-center text-ghl-primary-600 font-medium">
                  <Heart className="w-5 h-5 mr-2" />
                  <span>Building a sustainable future, one shipment at a time</span>
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
              Meet Our Team
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ghl-neutral-900 mb-6">
              Expert Leadership
            </h2>
            <p className="text-xl text-ghl-neutral-600 max-w-3xl mx-auto">
              Our team of logistics professionals brings decades of experience in temperature-controlled 
              shipping, commodity handling, and sustainable supply chain management.
            </p>
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
                <h3 className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-2">
                  John Davidson
                </h3>
                <p className="text-ghl-primary-600 font-semibold mb-4 text-lg">CEO & Founder</p>
                <p className="text-ghl-neutral-600 leading-relaxed">
                  20+ years in international logistics and supply chain management with a passion for sustainable practices.
                </p>
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
                <h3 className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-2">
                  Sarah Martinez
                </h3>
                <p className="text-ghl-secondary-500 font-semibold mb-4 text-lg">Head of Operations</p>
                <p className="text-ghl-neutral-600 leading-relaxed">
                  Expert in temperature-controlled logistics and quality assurance with 15+ years of industry experience.
                </p>
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
                <h3 className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-2">
                  Michael Rodriguez
                </h3>
                <p className="text-ghl-primary-600 font-semibold mb-4 text-lg">Sustainability Director</p>
                <p className="text-ghl-neutral-600 leading-relaxed">
                  Leading our environmental initiatives and sustainable practices with a focus on carbon-neutral operations.
                </p>
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
              Quality Assurance
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ghl-neutral-900 mb-6">
              Certifications & Standards
            </h2>
            <p className="text-xl text-ghl-neutral-600 max-w-3xl mx-auto">
              We maintain the highest industry standards and certifications to ensure the quality 
              and safety of your shipments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* ISO 9001 Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-ghl-primary-600 to-ghl-primary-700 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 text-center group-hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-ghl-primary-600 to-ghl-primary-700 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-ghl-primary-600 mb-3 group-hover:text-ghl-primary-700 transition-colors duration-300">ISO 9001</div>
                <p className="text-sm text-ghl-neutral-600 font-medium">Quality Management</p>
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
                <div className="text-2xl font-bold text-ghl-secondary-500 mb-3 group-hover:text-ghl-secondary-600 transition-colors duration-300">HACCP</div>
                <p className="text-sm text-ghl-neutral-600 font-medium">Food Safety</p>
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
                <div className="text-2xl font-bold text-green-600 mb-3 group-hover:text-green-700 transition-colors duration-300">FDA</div>
                <p className="text-sm text-ghl-neutral-600 font-medium">FDA Approved</p>
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
                <div className="text-2xl font-bold text-green-700 mb-3 group-hover:text-green-800 transition-colors duration-300">Organic</div>
                <p className="text-sm text-ghl-neutral-600 font-medium">Certified Organic</p>
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
              Our Values
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ghl-neutral-900 mb-6">
              Core Values
            </h2>
            <p className="text-xl text-ghl-neutral-600 max-w-3xl mx-auto">
              The principles that guide everything we do, from daily operations to long-term strategic decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sustainability Value */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 text-center group-hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <Leaf className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-4">
                  Sustainability
                </h3>
                <p className="text-ghl-neutral-600 leading-relaxed mb-6">
                  Committed to environmentally responsible practices that protect our planet for future generations.
                </p>
                <div className="flex items-center justify-center text-green-600 font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>Carbon Neutral Operations</span>
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
                <h3 className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-4">
                  Excellence
                </h3>
                <p className="text-ghl-neutral-600 leading-relaxed mb-6">
                  Delivering exceptional service through continuous improvement and attention to detail.
                </p>
                <div className="flex items-center justify-center text-yellow-600 font-medium">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  <span>99.8% Success Rate</span>
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
                <h3 className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-4">
                  Partnership
                </h3>
                <p className="text-ghl-neutral-600 leading-relaxed mb-6">
                  Building lasting relationships based on trust, transparency, and mutual success.
                </p>
                <div className="flex items-center justify-center text-blue-600 font-medium">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>500+ Trusted Partners</span>
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
