'use client'

import EditableImage from '@/components/ui/EditableImage'
import EditableText from '@/components/ui/EditableText'
import StatsDisplay from '@/components/ui/StatsDisplay'
import { Star } from 'lucide-react'

export default function TestimonialSection() {
  const testimonials = [
    {
      name: 'JANE SMITH',
      title: 'Marketing Manager',
      handle: '@janesmith',
      image: '/api/placeholder/80/80',
      rating: 5,
      quote: 'I enjoy working in the PosterMyWall editor because the site is user friendly and makes designing simple. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'EMMA WOODHOUSE',
      title: 'Marketing Manager',
      handle: '@emmasocial',
      image: '/api/placeholder/80/80',
      rating: 5,
      quote: 'I enjoy working in the PosterMyWall editor because the site is user friendly and makes designing simple. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ]

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <EditableText 
            content="What our Customers Say"
            contentKey="testimonials-title"
            tag="h2"
            className="text-4xl lg:text-6xl font-heading font-bold text-ghl-neutral-900 mb-8"
          />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              {/* Green Header Block */}
              <div className="relative bg-ghl-primary-600 rounded-lg p-6 mb-4 shadow-lg">
                <div className="flex justify-between items-start">
                  <div className="text-white">
                    <EditableText 
                      content={testimonial.name}
                      contentKey={`testimonial-${index + 1}-name`}
                      tag="h3"
                      className="text-lg font-bold uppercase tracking-wide mb-1"
                    />
                    <EditableText 
                      content={testimonial.title}
                      contentKey={`testimonial-${index + 1}-title`}
                      tag="p"
                      className="text-sm font-medium mb-1"
                    />
                    <EditableText 
                      content={testimonial.handle}
                      contentKey={`testimonial-${index + 1}-handle`}
                      tag="p"
                      className="text-sm font-medium"
                    />
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                {/* Speech bubble tail */}
                <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-ghl-primary-600"></div>
              </div>

              {/* White Content Block */}
              <div className="relative bg-white rounded-lg p-6 shadow-lg ml-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-1">
                    <EditableText 
                      content={testimonial.quote}
                      contentKey={`testimonial-${index + 1}-quote`}
                      tag="p"
                      className="text-ghl-neutral-800 leading-relaxed"
                    />
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white rounded-full border-4 border-white shadow-lg overflow-hidden">
                      <EditableImage 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        contentKey={`testimonial-${index + 1}-image`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <StatsDisplay />
        </div>
      </div>
    </section>
  )
}