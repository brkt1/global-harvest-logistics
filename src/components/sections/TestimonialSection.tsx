'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { Award, ChevronLeft, ChevronRight, Globe, Quote, Star, TrendingUp, Users } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const { resolvedTheme } = useTheme()

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      title: 'Head of Procurement',
      company: 'Premium Coffee Roasters',
      image: '/api/placeholder/80/80',
      rating: 5,
      quote: 'Global Harvest Logistics has been our trusted partner for over 5 years. Their expertise in coffee logistics is unmatched, and their temperature control systems ensure our beans arrive in perfect condition every time.',
      location: 'Colombia'
    },
    {
      name: 'James Chen',
      title: 'Supply Chain Director',
      company: 'Mediterranean Olive Oil Co.',
      image: '/api/placeholder/80/80',
      rating: 5,
      quote: 'The flexitank technology they use for our olive oil shipments is incredible. We\'ve seen a 30% reduction in spoilage and their sustainability initiatives align perfectly with our values.',
      location: 'Italy'
    },
    {
      name: 'Sarah Thompson',
      title: 'Operations Manager',
      company: 'Artisan Food Imports',
      image: '/api/placeholder/80/80',
      rating: 5,
      quote: 'Their real-time tracking system gives us complete visibility into our shipments. The 24/7 support team is always available when we need them, and their on-time delivery rate is exceptional.',
      location: 'United States'
    }
  ]

  const stats = [
    { value: '500+', label: 'Happy Clients', icon: Users },
    { value: '99.8%', label: 'On-Time Delivery', icon: TrendingUp },
    { value: '15+', label: 'Years Experience', icon: Award },
    { value: '50+', label: 'Countries Served', icon: Globe }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className={`section-padding relative overflow-hidden ${
      resolvedTheme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-ghl-neutral-50 via-white to-ghl-primary-50'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e5631' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative">
        {/* Section Header - Mobile optimized */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className={`inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
            resolvedTheme === 'dark' 
              ? 'bg-gray-800/80 border-ghl-primary-600/50 text-ghl-primary-300' 
              : 'bg-white/80 border-ghl-primary-200/50 text-ghl-primary-700'
          }`}>
            Client Testimonials
          </div>
          <h2 className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-heading font-bold mb-3 sm:mb-4 lg:mb-6 ${
            resolvedTheme === 'dark' ? 'text-gray-100' : 'text-ghl-neutral-900'
          }`}>
            Don&apos;t just take our word for it
          </h2>
          <p className={`text-base sm:text-lg lg:text-xl max-w-3xl mx-auto ${
            resolvedTheme === 'dark' ? 'text-gray-300' : 'text-ghl-neutral-600'
          }`}>
            Here&apos;s what our partners say about working with Global Harvest Logistics.
          </p>
        </div>

        {/* Modern Testimonial Card - Mobile optimized */}
        <div className="relative max-w-5xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <div className={`backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12 shadow-2xl border ${
            resolvedTheme === 'dark' 
              ? 'bg-gray-800/80 shadow-gray-900/20 border-gray-700/30' 
              : 'bg-white/80 shadow-ghl-primary-600/10 border-white/50'
          }`}>
            {/* Quote Icon */}
            <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8">
              <div className="bg-gradient-to-br from-ghl-primary-600 to-ghl-secondary-400 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg">
                <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center mb-6 sm:mb-8 lg:mb-10">
              {/* Stars */}
              <div className="flex justify-center mb-3 sm:mb-4 lg:mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-yellow-400 fill-current mx-0.5 sm:mx-1" />
                ))}
              </div>
              
              <blockquote className={`text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed font-medium mb-4 sm:mb-6 lg:mb-8 max-w-4xl mx-auto ${
                resolvedTheme === 'dark' ? 'text-gray-200' : 'text-ghl-neutral-800'
              }`}>
                &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
              </blockquote>

              {/* Author Info - Mobile optimized */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-ghl-primary-600 to-ghl-secondary-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                    {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="text-center sm:text-left">
                  <div className={`font-bold text-base sm:text-lg lg:text-xl ${
                    resolvedTheme === 'dark' ? 'text-gray-100' : 'text-ghl-neutral-900'
                  }`}>
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className={`font-medium text-sm sm:text-base ${
                    resolvedTheme === 'dark' ? 'text-gray-300' : 'text-ghl-neutral-600'
                  }`}>
                    {testimonials[currentTestimonial].title}
                  </div>
                  <div className={`font-semibold text-sm sm:text-base ${
                    resolvedTheme === 'dark' ? 'text-ghl-primary-400' : 'text-ghl-primary-600'
                  }`}>
                    {testimonials[currentTestimonial].company}
                  </div>
                  <div className={`text-xs sm:text-sm ${
                    resolvedTheme === 'dark' ? 'text-gray-400' : 'text-ghl-neutral-500'
                  }`}>
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls - Mobile optimized */}
            <div className="flex items-center justify-center space-x-3 sm:space-x-4">
              <button
                onClick={prevTestimonial}
                className={`rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 ${
                  resolvedTheme === 'dark' 
                    ? 'bg-ghl-primary-900/30 hover:bg-ghl-primary-800/50 text-ghl-primary-400' 
                    : 'bg-ghl-primary-100 hover:bg-ghl-primary-200 text-ghl-primary-600'
                }`}
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex space-x-1.5 sm:space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-ghl-primary-600 scale-125' 
                        : resolvedTheme === 'dark' 
                          ? 'bg-gray-600 hover:bg-gray-500' 
                          : 'bg-ghl-neutral-300 hover:bg-ghl-neutral-400'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className={`rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 ${
                  resolvedTheme === 'dark' 
                    ? 'bg-ghl-primary-900/30 hover:bg-ghl-primary-800/50 text-ghl-primary-400' 
                    : 'bg-ghl-primary-100 hover:bg-ghl-primary-200 text-ghl-primary-600'
                }`}
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Modern Stats Grid - Mobile optimized */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className={`backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 xl:p-8 text-center transition-all duration-300 hover:shadow-lg ${
                resolvedTheme === 'dark' 
                  ? 'bg-gray-800/60 hover:bg-gray-800/80 border-gray-700/50' 
                  : 'bg-white/60 hover:bg-white/80 border-white/50'
              }`}>
                <div className="inline-flex p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-ghl-primary-600 to-ghl-secondary-400 rounded-lg sm:rounded-xl mb-2 sm:mb-3 lg:mb-4 xl:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-white" />
                </div>
                <div className={`text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-1 sm:mb-2 ${
                  resolvedTheme === 'dark' ? 'text-gray-100' : 'text-ghl-neutral-900'
                }`}>
                  {stat.value}
                </div>
                <div className={`font-medium text-xs sm:text-sm lg:text-base ${
                  resolvedTheme === 'dark' ? 'text-gray-300' : 'text-ghl-neutral-600'
                }`}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


