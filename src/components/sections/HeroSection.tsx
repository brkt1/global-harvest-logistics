'use client'

import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero.jpg')`,
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] py-8 sm:py-12 lg:py-16">
          {/* Left Content - Mobile optimized */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 border-ghl-primary-200/50 text-ghl-primary-700">
                <div className="flex -space-x-1 mr-2 sm:mr-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-ghl-primary-600 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs text-white font-bold">G</span>
                  </div>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-ghl-secondary-400 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs text-white font-bold">H</span>
                  </div>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-ghl-primary-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs text-white font-bold">L</span>
                  </div>
                </div>
                <span className="font-semibold text-xs sm:text-sm">Trusted by 500+ Global Partners</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-tight">
                <span className="text-white drop-shadow-lg">Welcome to</span>
                <br />
                <span className="text-gradient bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 bg-clip-text text-transparent drop-shadow-lg">Excellence in</span>
                <br />
                <span className="text-ghl-primary-300 drop-shadow-lg">Global Logistics</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl text-white drop-shadow-lg">
                We're delighted to have you here! As your trusted partner in temperature-sensitive commodity logistics, 
                we specialize in coffee, olive oil, and specialty food exports with unmatched expertise, 
                reliability, and sustainability.
              </p>
            </div>

            {/* CTA Buttons - Mobile optimized */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4">
              <Link 
                href="/quote" 
                className="btn btn-primary text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 inline-flex items-center justify-center group"
              >
                <span className="hidden sm:inline">Let's Start Your Journey</span>
                <span className="sm:hidden">Start Journey</span>
                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button 
                onClick={() => setIsVideoPlaying(true)}
                className="btn btn-outline text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 inline-flex items-center justify-center group"
              >
                <Play className="mr-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">Discover Our Story</span>
                <span className="sm:hidden">Our Story</span>
              </button>
            </div>
            
            {/* Subtle Welcome Message */}
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
              <p className="text-sm text-white text-center drop-shadow-lg">
                💚 Every shipment tells a story. Let us help you write yours with care and precision.
              </p>
            </div>

            {/* Trust Indicators - Mobile compact */}
            <div className="pt-4 sm:pt-6 lg:pt-8 border-t border-white/30">
              <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4 lg:gap-6">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-ghl-primary-400"></div>
                  <span className="text-xs sm:text-sm text-white drop-shadow-lg">500+ Partners</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-ghl-secondary-400"></div>
                  <span className="text-xs sm:text-sm text-white drop-shadow-lg">99.8% On-Time</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-ghl-primary-300"></div>
                  <span className="text-xs sm:text-sm text-white drop-shadow-lg">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Video - Mobile optimized */}
          <div className="relative mt-6 sm:mt-8 lg:mt-0">
            <div className="relative bg-gradient-to-br from-ghl-primary-600 to-ghl-secondary-400 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white">
              {/* Placeholder for hero image/video */}
              <div className="aspect-[4/3] sm:aspect-video bg-white/10 rounded-lg sm:rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4">
                    <Play className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 ml-1" />
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg font-medium">See Our Process</p>
                  <p className="text-xs sm:text-sm opacity-80">Temperature-controlled logistics in action</p>
                </div>
              </div>
              
              {/* Floating elements - Mobile optimized */}
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 lg:-top-4 lg:-right-4 bg-white text-ghl-primary-600 px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-md sm:rounded-lg shadow-lg">
                <div className="text-xs sm:text-sm font-medium">ISO 9001</div>
              </div>
              
              <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 lg:-bottom-4 lg:-left-4 bg-ghl-secondary-400 text-white px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-md sm:rounded-lg shadow-lg">
                <div className="text-xs sm:text-sm font-medium">Sustainable</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="rounded-lg p-4 max-w-4xl w-full bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Our Logistics Process</h3>
              <button 
                onClick={() => setIsVideoPlaying(false)}
                className="text-ghl-neutral-500 hover:text-ghl-neutral-700"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video rounded-lg flex items-center justify-center bg-ghl-neutral-100">
              <div className="text-center">
                <Play className="h-16 w-16 mx-auto mb-4 text-ghl-primary-600" />
                <p className="text-ghl-neutral-600">
                  Video content would be embedded here
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}


