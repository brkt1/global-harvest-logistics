'use client'

import { BadgeCheck, CheckCircle, Sparkles, Star, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import EditableText from './EditableText'

interface ProductDetailModalProps {
  product: {
    id: string
    icon: any
    title: string
    subtitle: string
    imageURL?: string
    description: string
    features: string[]
    process?: string[]
    benefits?: string[]
    gradient: string
  } | null
  isOpen: boolean
  onClose: () => void
}

// Helper component for "See More" functionality
function DescriptionWithSeeMore({ text, contentKey, maxLength = 200 }: { text: string; contentKey: string; maxLength?: number }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const shouldTruncate = text.length > maxLength
  const displayText = isExpanded || !shouldTruncate ? text : text.slice(0, maxLength) + '...'

  return (
    <div>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        <EditableText 
          content={displayText}
          contentKey={contentKey}
          tag="span"
        />
      </p>
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-sm sm:text-base font-semibold text-green-600 hover:text-green-700 transition-colors"
        >
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      )}
    </div>
  )
}

export default function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  const tabs = ['Overview', 'Features', 'Process', 'Benefits'] as const
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('Overview')
  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !product) return null

  const IconComponent = product.icon

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl transform animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`relative bg-gradient-to-r ${product.gradient} p-6 sm:p-8 text-white`}>
          {/* Ambient blob */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-white/15 blur-3xl" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <div className="flex items-start gap-4 sm:gap-6 pr-12">
            <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center">
              <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs sm:text-sm font-medium opacity-90 mb-1 sm:mb-2">
                <EditableText 
                  content={product.subtitle}
                  contentKey={`product-modal-${product.id}-subtitle`}
                  tag="span"
                />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                <EditableText 
                  content={product.title}
                  contentKey={`product-modal-${product.id}-title`}
                  tag="span"
                />
              </h2>
              <div className="mt-3 flex items-center gap-3 text-white/90">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
                  <BadgeCheck className="h-4 w-4" />
                  Quality Assured
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
                  <Sparkles className="h-4 w-4" />
                  Premium Logistics
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Tabs */}
          <div className="px-6 sm:px-8 pt-4 bg-white border-b border-gray-100 sticky top-0 z-10">
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? `text-white bg-gradient-to-r ${product.gradient}`
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* Overview */}
            {activeTab === 'Overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Product Description</h3>
                  <DescriptionWithSeeMore
                    text={product.description}
                    contentKey={`product-modal-${product.id}-description`}
                    maxLength={240}
                  />
                </div>
                {product.imageURL && (
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-gray-200/60">
                    <img 
                      src={product.imageURL} 
                      alt={product.title}
                      className="w-full h-56 sm:h-72 lg:h-80 object-cover"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Features */}
            {activeTab === 'Features' && (
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="group rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow bg-white">
                      <div className="flex items-start gap-3">
                        <div className={`mt-0.5 rounded-full p-1.5 text-white bg-gradient-to-r ${product.gradient}`}>
                          <CheckCircle className="w-4 h-4" />
                        </div>
                        <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                          <EditableText 
                            content={feature}
                            contentKey={`product-modal-${product.id}-feature-${index + 1}`}
                            tag="span"
                          />
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Process */}
            {activeTab === 'Process' && product.process && product.process.length > 0 && (
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Processing & Quality</h3>
                <ul className="space-y-4">
                  {product.process.map((step, index) => (
                    <li key={index} className="relative pl-10">
                      <div className={`absolute left-0 top-0 w-7 h-7 rounded-full bg-gradient-to-r ${product.gradient} text-white flex items-center justify-center text-xs sm:text-sm font-bold`}>{index + 1}</div>
                      <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        <EditableText 
                          content={step}
                          contentKey={`product-modal-${product.id}-process-${index + 1}`}
                          tag="span"
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits */}
            {activeTab === 'Benefits' && product.benefits && product.benefits.length > 0 && (
              <div className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r ${product.gradient} bg-opacity-10 ring-1 ring-gray-200/60`}>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose This Product</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Star className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 text-yellow-500" />
                      <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        <EditableText 
                          content={benefit}
                          contentKey={`product-modal-${product.id}-benefit-${index + 1}`}
                          tag="span"
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4 sm:p-6 bg-gray-50">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={`/quote?productId=${encodeURIComponent(product.id)}&productTitle=${encodeURIComponent(product.title)}${product.imageURL ? `&productImage=${encodeURIComponent(product.imageURL)}` : ''}`}
              className={`flex-1 bg-gradient-to-r ${product.gradient} text-white px-6 py-3 rounded-xl font-semibold text-center hover:opacity-90 transition-opacity`}
            >
              Get Quote
            </a>
            <a
              href="/contact"
              className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold text-center hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

