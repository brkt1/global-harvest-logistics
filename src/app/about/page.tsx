'use client'

import TrustedBySection from '@/components/sections/TrustedBySection'
import { useEffect, useRef } from 'react'

export default function About() {
  const videoRef = useRef<HTMLIFrameElement>(null)

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

  return (
    <div className="relative min-h-screen m-0 p-0">
      {/* Full Page Video Background - Hidden on mobile */}
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
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-ghl-primary-600/20 via-ghl-primary-700/15 to-ghl-secondary-500/20" style={{ zIndex: 2 }}></div>
      </div>
      
      {/* Fallback Background for Mobile */}
      <div className="md:hidden fixed inset-0 w-full h-full bg-gradient-to-br from-ghl-primary-600 via-ghl-primary-700 to-ghl-secondary-500 -z-10"></div>
      
      {/* Hero Section */}
      <section className="hero-section relative text-white min-h-auto overflow-hidden m-0 px-4 py-8 sm:px-0 sm:py-0 -mt-16 sm:-mt-20 mb-8 sm:mb-12">
        
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{ zIndex: 3 }}>
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Floating Elements - Hidden on mobile for performance */}
        <div className="hidden sm:block absolute top-20 left-10 w-20 h-20 bg-white/15 rounded-full blur-xl animate-pulse" style={{ zIndex: 4 }}></div>
        <div className="hidden sm:block absolute bottom-20 right-10 w-32 h-32 bg-ghl-secondary-400/25 rounded-full blur-2xl animate-pulse delay-1000" style={{ zIndex: 4 }}></div>
        
        {/* Content Container */}
        <div className="relative h-full flex items-center justify-center px-0 pt-16 sm:pt-20" style={{ zIndex: 5 }}>
          <div className="max-w-6xl mx-auto text-center w-full">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex -space-x-1 mr-2 sm:mr-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white/20 rounded-full border-2 border-white/30 flex items-center justify-center">
                  <span className="text-xs text-white font-bold">G</span>
                </div>
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white/20 rounded-full border-2 border-white/30 flex items-center justify-center">
                  <span className="text-xs text-white font-bold">H</span>
                </div>
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white/20 rounded-full border-2 border-white/30 flex items-center justify-center">
                  <span className="text-xs text-white font-bold">L</span>
                </div>
              </div>
              <span className="font-semibold text-xs sm:text-sm">Trusted by 500+ Partners</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
              <span className="block">About Global</span>
              <span className="block bg-gradient-to-r from-white to-ghl-secondary-200 bg-clip-text text-transparent">
                Harvest Logistics
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
              Delivering taste, preserving nature. Your trusted partner in temperature-sensitive 
              commodity logistics with a commitment to sustainability and excellence.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10">
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-xs sm:text-sm text-white/80">Global Partners</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">99.8%</div>
                <div className="text-xs sm:text-sm text-white/80">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-white/80">Support</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-xs sm:text-sm text-white/80">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative mt-16 sm:mt-20">
        <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-ghl-neutral-900 dark:text-gray-100 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-ghl-neutral-700 dark:text-gray-300 mb-6">
                To provide exceptional temperature-controlled logistics solutions that preserve 
                the quality and integrity of specialty commodities while maintaining the highest 
                standards of sustainability and environmental responsibility.
              </p>
              <p className="text-lg text-ghl-neutral-700 dark:text-gray-300">
                We believe that every shipment represents not just cargo, but the hard work of 
                farmers, the expectations of consumers, and our commitment to excellence.
              </p>
            </div>
            <div className="bg-ghl-primary-50 dark:bg-ghl-primary-900/20 p-8 rounded-2xl border border-ghl-primary-200 dark:border-ghl-primary-700/30">
              <h3 className="text-2xl font-heading font-bold text-ghl-primary-600 dark:text-ghl-primary-400 mb-4">
                Our Vision
              </h3>
              <p className="text-ghl-neutral-700 dark:text-gray-300">
                To be the world&apos;s leading provider of sustainable, temperature-controlled logistics 
                for specialty commodities, setting the standard for quality, reliability, and 
                environmental stewardship in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 relative mt-8 sm:mt-12">
        <div className="absolute inset-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-ghl-neutral-900 dark:text-gray-100 mb-4">
              Our Expert Team
            </h2>
            <p className="text-lg text-ghl-neutral-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our team of logistics professionals brings decades of experience in temperature-controlled 
              shipping, commodity handling, and sustainable supply chain management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-ghl-neutral-50 dark:bg-gray-700/50 p-6 rounded-xl text-center border border-ghl-neutral-200 dark:border-gray-600/30">
              <div className="w-24 h-24 bg-ghl-primary-600 dark:bg-ghl-primary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JD</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-ghl-neutral-900 dark:text-gray-100 mb-2">
                John Davidson
              </h3>
              <p className="text-ghl-primary-600 dark:text-ghl-primary-400 font-medium mb-3">CEO & Founder</p>
              <p className="text-ghl-neutral-600 dark:text-gray-300">
                20+ years in international logistics and supply chain management.
              </p>
            </div>
            
            <div className="bg-ghl-neutral-50 dark:bg-gray-700/50 p-6 rounded-xl text-center border border-ghl-neutral-200 dark:border-gray-600/30">
              <div className="w-24 h-24 bg-ghl-secondary-400 dark:bg-ghl-secondary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">SM</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-ghl-neutral-900 dark:text-gray-100 mb-2">
                Sarah Martinez
              </h3>
              <p className="text-ghl-primary-600 dark:text-ghl-primary-400 font-medium mb-3">Head of Operations</p>
              <p className="text-ghl-neutral-600 dark:text-gray-300">
                Expert in temperature-controlled logistics and quality assurance.
              </p>
            </div>
            
            <div className="bg-ghl-neutral-50 dark:bg-gray-700/50 p-6 rounded-xl text-center border border-ghl-neutral-200 dark:border-gray-600/30">
              <div className="w-24 h-24 bg-ghl-primary-600 dark:bg-ghl-primary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">MR</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-ghl-neutral-900 dark:text-gray-100 mb-2">
                Michael Rodriguez
              </h3>
              <p className="text-ghl-primary-600 dark:text-ghl-primary-400 font-medium mb-3">Sustainability Director</p>
              <p className="text-ghl-neutral-600 dark:text-gray-300">
                Leading our environmental initiatives and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20 relative mt-8 sm:mt-12">
        <div className="absolute inset-0 bg-ghl-neutral-50/95 dark:bg-gray-900/95 backdrop-blur-sm"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-ghl-neutral-900 dark:text-gray-100 mb-4">
              Certifications & Standards
            </h2>
            <p className="text-lg text-ghl-neutral-600 dark:text-gray-300 max-w-3xl mx-auto">
              We maintain the highest industry standards and certifications to ensure the quality 
              and safety of your shipments.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center shadow-sm border border-ghl-neutral-200 dark:border-gray-700/30">
              <div className="text-3xl font-bold text-ghl-primary-600 dark:text-ghl-primary-400 mb-2">ISO 9001</div>
              <p className="text-sm text-ghl-neutral-600 dark:text-gray-300">Quality Management</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center shadow-sm border border-ghl-neutral-200 dark:border-gray-700/30">
              <div className="text-3xl font-bold text-ghl-primary-600 dark:text-ghl-primary-400 mb-2">HACCP</div>
              <p className="text-sm text-ghl-neutral-600 dark:text-gray-300">Food Safety</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center shadow-sm border border-ghl-neutral-200 dark:border-gray-700/30">
              <div className="text-3xl font-bold text-ghl-primary-600 dark:text-ghl-primary-400 mb-2">FDA</div>
              <p className="text-sm text-ghl-neutral-600 dark:text-gray-300">FDA Approved</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center shadow-sm border border-ghl-neutral-200 dark:border-gray-700/30">
              <div className="text-3xl font-bold text-ghl-primary-600 dark:text-ghl-primary-400 mb-2">Organic</div>
              <p className="text-sm text-ghl-neutral-600 dark:text-gray-300">Certified Organic</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 relative mt-8 sm:mt-12">
        <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-ghl-neutral-900 mb-4">
              Our Core Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-ghl-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-ghl-neutral-900 mb-3">
                Sustainability
              </h3>
              <p className="text-ghl-neutral-600">
                Committed to environmentally responsible practices that protect our planet for future generations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-ghl-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-ghl-neutral-900 mb-3">
                Excellence
              </h3>
              <p className="text-ghl-neutral-600">
                Delivering exceptional service through continuous improvement and attention to detail.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-ghl-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-ghl-neutral-900 mb-3">
                Partnership
              </h3>
              <p className="text-ghl-neutral-600">
                Building lasting relationships based on trust, transparency, and mutual success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedBySection />
    </div>
  )
}
