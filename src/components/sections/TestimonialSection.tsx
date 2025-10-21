'use client'

import { Award, ChevronLeft, ChevronRight, Globe, Quote, Star, TrendingUp, Users } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

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
    <section className="section-padding bg-gradient-to-br from-ghl-neutral-50 via-white to-ghl-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e5631' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-ghl-primary-200/50 dark:border-ghl-primary-600/50 text-ghl-primary-700 dark:text-ghl-primary-300 rounded-full text-sm font-medium mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-ghl-neutral-900 dark:text-gray-100 mb-4 sm:mb-6">
            Don&apos;t just take our word for it
          </h2>
          <p className="text-lg sm:text-xl text-ghl-neutral-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here&apos;s what our partners say about working with Global Harvest Logistics.
          </p>
        </div>

        {/* Modern Testimonial Card */}
        <div className="relative max-w-5xl mx-auto mb-12 sm:mb-16">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl shadow-ghl-primary-600/10 dark:shadow-gray-900/20 border border-white/50 dark:border-gray-700/30">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="bg-gradient-to-br from-ghl-primary-600 to-ghl-secondary-400 p-4 rounded-2xl shadow-lg">
                <Quote className="h-8 w-8 text-white" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center mb-8 sm:mb-10">
              {/* Stars */}
              <div className="flex justify-center mb-4 sm:mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 fill-current mx-1" />
                ))}
              </div>
              
              <blockquote className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-ghl-neutral-800 dark:text-gray-200 font-medium mb-6 sm:mb-8 max-w-4xl mx-auto">
                &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-ghl-primary-600 to-ghl-secondary-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl sm:text-2xl font-bold text-white">
                    {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-bold text-lg sm:text-xl text-ghl-neutral-900 dark:text-gray-100">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-ghl-neutral-600 dark:text-gray-300 font-medium">
                    {testimonials[currentTestimonial].title}
                  </div>
                  <div className="text-ghl-primary-600 dark:text-ghl-primary-400 font-semibold">
                    {testimonials[currentTestimonial].company}
                  </div>
                  <div className="text-ghl-neutral-500 dark:text-gray-400 text-sm">
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="bg-ghl-primary-100 dark:bg-ghl-primary-900/30 hover:bg-ghl-primary-200 dark:hover:bg-ghl-primary-800/50 text-ghl-primary-600 dark:text-ghl-primary-400 rounded-full p-3 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-ghl-primary-600 scale-125' 
                        : 'bg-ghl-neutral-300 hover:bg-ghl-neutral-400'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="bg-ghl-primary-100 hover:bg-ghl-primary-200 text-ghl-primary-600 rounded-full p-3 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Modern Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center hover:bg-white/80 transition-all duration-300 hover:shadow-lg border border-white/50">
                <div className="inline-flex p-3 sm:p-4 bg-gradient-to-br from-ghl-primary-600 to-ghl-secondary-400 rounded-xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ghl-neutral-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-ghl-neutral-600 font-medium text-sm sm:text-base">
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


