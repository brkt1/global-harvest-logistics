'use client'

import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="relative bg-gradient-to-br from-ghl-neutral-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e5631' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh] sm:min-h-[80vh] py-12 sm:py-16">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-ghl-primary-200/50 dark:border-ghl-primary-600/50 text-ghl-primary-700 dark:text-ghl-primary-300 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex -space-x-1 mr-3">
                  <div className="w-5 h-5 bg-ghl-primary-600 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs text-white font-bold">G</span>
                  </div>
                  <div className="w-5 h-5 bg-ghl-secondary-400 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs text-white font-bold">H</span>
                  </div>
                  <div className="w-5 h-5 bg-ghl-primary-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs text-white font-bold">L</span>
                  </div>
                </div>
                <span className="font-semibold">Trusted by 500+ Global Partners</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold leading-tight">
                <span className="text-ghl-neutral-900 dark:text-gray-100">Delivering</span>
                <br />
                <span className="text-gradient">Taste, Preserving</span>
                <br />
                <span className="text-ghl-primary-600 dark:text-ghl-primary-400">Nature</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-ghl-neutral-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                Your trusted partner in temperature-sensitive commodity logistics. 
                We specialize in coffee, olive oil, and specialty food exports with 
                unmatched expertise, reliability, and sustainability.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link 
                href="/quote" 
                className="btn btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center justify-center group"
              >
                <span className="hidden sm:inline">Request a Custom Quote</span>
                <span className="sm:hidden">Get Quote</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button 
                onClick={() => setIsVideoPlaying(true)}
                className="btn btn-outline text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center justify-center group"
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">Watch Our Story</span>
                <span className="sm:hidden">Watch Video</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 sm:pt-8 border-t border-ghl-neutral-200 dark:border-gray-700">
              <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ghl-primary-600 dark:bg-ghl-primary-400 rounded-full"></div>
                  <span className="text-sm text-ghl-neutral-600 dark:text-gray-300">500+ Global Partners</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ghl-secondary-400 dark:bg-ghl-secondary-300 rounded-full"></div>
                  <span className="text-sm text-ghl-neutral-600 dark:text-gray-300">99.8% On-Time Delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ghl-primary-500 dark:bg-ghl-primary-400 rounded-full"></div>
                  <span className="text-sm text-ghl-neutral-600 dark:text-gray-300">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Video */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-gradient-to-br from-ghl-primary-600 to-ghl-secondary-400 rounded-2xl p-6 sm:p-8 text-white">
              {/* Placeholder for hero image/video */}
              <div className="aspect-video bg-white/10 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Play className="h-6 w-6 sm:h-8 sm:w-8 ml-1" />
                  </div>
                  <p className="text-base sm:text-lg font-medium">See Our Process</p>
                  <p className="text-xs sm:text-sm opacity-80">Temperature-controlled logistics in action</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white text-ghl-primary-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-lg">
                <div className="text-xs sm:text-sm font-medium">ISO 9001</div>
              </div>
              
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-ghl-secondary-400 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-lg">
                <div className="text-xs sm:text-sm font-medium">Sustainable</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 max-w-4xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Our Logistics Process</h3>
              <button 
                onClick={() => setIsVideoPlaying(false)}
                className="text-ghl-neutral-500 hover:text-ghl-neutral-700"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video bg-ghl-neutral-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Play className="h-16 w-16 text-ghl-primary-600 mx-auto mb-4" />
                <p className="text-ghl-neutral-600">Video content would be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}


