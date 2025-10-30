'use client'

import EditableText from '@/components/ui/EditableText'
import { BadgeCheck, CheckCircle, Sparkles, Star } from 'lucide-react'
import Link from 'next/link'
import { useMemo } from 'react'

type IconType = any

type Service = {
  id: string
  icon: IconType
  title: string
  subtitle: string
  imageURL?: string
  description: string
  features: string[]
  process?: string[]
  benefits?: string[]
  gradient: string
}

// NOTE: This mirrors the data shape used on services listing.
// Minimal subset needed for full-page rendering. If we later extract
// a shared data module, both pages can import from there.
import { Circle, Leaf } from 'lucide-react'

const sesameProducts: Service[] = [
  {
    id: 'humera-sesame',
    icon: Leaf,
    title: 'Humera Sesame',
    subtitle: 'Premium Ethiopian Sesame',
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8wrHHqlc0BU7cnzS1MVE_MyV-wy4udmZklQ&s',
    description: 'The crown jewel of Ethiopian sesame exports, known for its large white seeds, high oil content, and distinctive sweet aroma. Grown in the fertile Humera region, this variety commands premium prices in international markets.',
    features: [
      'Large white seeds with high oil content',
      'Distinctive sweet aroma and flavor profile',
      'Excellent for both culinary and oil extraction purposes',
      "Grown in Ethiopia's prime sesame region",
      'Commands premium prices in international markets',
      'Superior quality from fertile Humera region',
    ],
    process: [
      'Origin assessment and quality control from fertile Humera region',
      'Careful harvesting from prime growing areas',
      'Quality grading and size classification',
      'Testing for oil content and aroma profile',
      'International export compliance verification',
      'Delivery to premium global markets',
    ],
    benefits: [
      'Commands premium prices in international markets',
      'Superior oil content and distinctive sweet aroma',
      'Excellent for both culinary and oil extraction purposes',
      "Grown in Ethiopia's prime fertile Humera region",
    ],
    gradient: 'from-ghl-primary-600 to-ghl-secondary-400',
  },
  {
    id: 'wollega-sesame',
    icon: Leaf,
    title: 'Wollega Sesame',
    subtitle: 'Premium Ethiopian Sesame',
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVh-2gQq9ZdJ7BVG5PgaN2qOwPwpC86baQA&s',
    description: 'Premium quality sesame from the Wollega region, available in both white and brown seed varieties. Known for excellent purity, consistent quality, and versatile applications across food industries.',
    features: [
      'Available in white and brown seed varieties',
      'Consistent size and quality for industrial use',
      'Excellent purity and quality standards',
      'Versatile applications across food industries',
      "Grown in Ethiopia's Wollega region",
      'Known for exceptional quality consistency',
    ],
    process: [
      "Selection from Wollega region's prime growing areas",
      'Separate processing for white and brown varieties',
      'Quality grading and size classification',
      'Testing for purity and consistency',
      'International export compliance',
      'Delivery to global food industry markets',
    ],
    benefits: [
      'Consistent size and quality for industrial use',
      'Versatile applications across food industries',
      'Available in multiple seed varieties',
      'Excellent purity and quality standards',
    ],
    gradient: 'from-ghl-secondary-600 to-ghl-secondary-800',
  },
]

const pulsesAndBeans: Service[] = [
  {
    id: 'red-kidney-bean',
    icon: Circle,
    title: 'Red Kidney Bean',
    subtitle: 'Premium Ethiopian Pulses',
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFX9Sz6NabTtlfBAITBMBYjOqL-x4TSc5xZA&s',
    description: 'Characterized by its deep red color and excellent cooking quality, our Red Kidney Beans are rich in protein, fiber, and essential nutrients. They maintain their shape and texture well in various culinary applications.',
    features: [
      'Deep red color with glossy appearance',
      'Excellent cooking quality and texture retention',
      'High protein and fiber content',
      'Preferred by European and Middle Eastern markets',
      'Consistent size and quality grading',
    ],
    process: [
      "Quality selection from Ethiopia's prime regions",
      'Cultivation in ideal climatic conditions',
      'Thorough cleaning and grading',
      'Quality testing and certification',
      'Export to global markets',
      'Delivery to European and Middle Eastern markets',
    ],
    benefits: [
      'Maintains shape and texture in culinary applications',
      'High nutritional value with essential nutrients',
      'Preferred by international markets',
      'Consistent quality for commercial use',
    ],
    gradient: 'from-red-600 to-red-800',
  },
  {
    id: 'white-pea-bean',
    icon: Circle,
    title: 'White Pea Bean',
    subtitle: 'Premium Ethiopian Pulses',
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_XZ0g4a51YWg6Ce8ih_XCcvwUKMqiPuUauA&s',
    description: 'Featuring a creamy white color and uniform size, White Pea Beans are versatile legumes ideal for traditional dishes, soups, and various food processing applications. Known for their mild flavor and smooth texture.',
    features: [
      'Creamy white color with uniform size',
      'Mild flavor and smooth texture',
      'Quick cooking time with good water absorption',
      'Popular in European and Turkish cuisine',
      'Excellent for canning and food processing',
    ],
    process: [
      'Selection from prime Ethiopian growing regions',
      'Careful cultivation for uniform size',
      'Thorough cleaning and processing',
      'Quality grading for commercial use',
      'Export packaging and certification',
      'Delivery to European and Turkish markets',
    ],
    benefits: [
      'Versatile for traditional dishes and soups',
      'Smooth texture ideal for food processing',
      'Popular in European and Turkish cuisine',
      'Excellent for commercial canning operations',
    ],
    gradient: 'from-ghl-primary-600 to-ghl-primary-800',
  },
  {
    id: 'red-speckled-beans',
    icon: Circle,
    title: 'Red Speckled Beans',
    subtitle: 'Premium Ethiopian Pulses',
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV9F0kit9WFBA1nnat48GBz4cYTtVMQpu4_Q&s',
    description: 'Distinguished by their unique speckled appearance and firm texture, these beans offer excellent nutritional value and visual appeal. Their robust flavor makes them ideal for hearty dishes and traditional recipes.',
    features: [
      'Distinctive red speckled appearance',
      'Firm texture that holds shape when cooked',
      'Rich, robust flavor profile',
      'High nutritional value with essential minerals',
      'Growing demand in Middle Eastern and African markets',
    ],
    process: [
      "Selection from Ethiopia's ideal growing conditions",
      'Careful cultivation for unique speckled pattern',
      'Thorough cleaning maintaining visual appeal',
      'Quality grading and mineral testing',
      'Export certification and packaging',
      'Delivery to Middle Eastern and African markets',
    ],
    benefits: [
      'Excellent for hearty dishes and traditional recipes',
      'High nutritional value with essential minerals',
      'Growing demand in international markets',
      'Unique visual appeal and robust flavor',
    ],
    gradient: 'from-ghl-secondary-600 to-ghl-secondary-800',
  },
  {
    id: 'soya-beans',
    icon: Circle,
    title: 'Soya Beans',
    subtitle: 'Premium Ethiopian Pulses',
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThs75vmtjYnGcylA6TPcHPbW9Ab3ufi9y6dQ&s',
    description: 'High-protein soya beans suitable for both food consumption and industrial applications. Our soya beans meet quality standards for tofu production, animal feed, and various processed food products.',
    features: [
      'High protein content',
      'Versatile for food and industrial applications',
      'Consistent quality for tofu and soy milk production',
      'Strong demand from Chinese and Southeast Asian markets',
      'Competitive pricing with reliable supply',
    ],
    process: [
      'Premium selection for high protein content',
      "Ideal cultivation in Ethiopia's climate",
      'Quality testing for industrial standards',
      'Processing for tofu and soy milk production',
      'Export certification for international markets',
      'Delivery to Chinese and Southeast Asian markets',
    ],
    benefits: [
      'Meets quality standards for tofu production',
      'Suitable for animal feed and food processing',
      'Strong demand from Asian markets',
      'Competitive pricing with reliable supply',
    ],
    gradient: 'from-ghl-primary-500 to-ghl-primary-700',
  },
]

const allServices: Service[] = [...sesameProducts, ...pulsesAndBeans]

export default function ProductDetailsPage({ params }: { params: { id: string } }) {
  const product = useMemo(() => allServices.find((s) => s.id === params.id) || null, [params.id])
  const relatedProducts = useMemo(() => {
    if (!product) return [] as Service[]
    return allServices.filter((s) => s.icon === product.icon && s.id !== product.id).slice(0, 3)
  }, [product])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Product not found</h1>
          <p className="text-gray-600 mb-6">The product you are looking for does not exist.</p>
          <Link href="/services" className="inline-block px-5 py-3 rounded-xl border border-gray-300 hover:bg-gray-100">Back to Services</Link>
        </div>
      </div>
    )
  }

  const IconComponent = product.icon

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className={`relative bg-gradient-to-r ${product.gradient} text-white`}>
        <div className="container-custom">
          <div className="py-10 sm:py-14 lg:py-16 relative">
            <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm opacity-90 mb-2">
                  <EditableText content={product.subtitle} contentKey={`product-${product.id}-subtitle`} tag="span" />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  <EditableText content={product.title} contentKey={`product-${product.id}-title`} tag="span" />
                </h1>
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
        </div>
      </div>

      {/* Content */}
      <div className="container-custom">
        <div className="py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main */}
          <div className="lg:col-span-2">
            {product.imageURL && (
              <div className="mb-8 rounded-2xl overflow-hidden ring-1 ring-gray-200/60">
                <img src={product.imageURL} alt={product.title} className="w-full h-64 sm:h-80 lg:h-[28rem] object-cover" />
              </div>
            )}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Product Description</h2>
              <p className="text-gray-700 leading-relaxed">
                <EditableText content={product.description} contentKey={`product-${product.id}-description`} tag="span" />
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Key Features</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="group rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow bg-white">
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 rounded-full p-1.5 text-white bg-gradient-to-r ${product.gradient}`}>
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        <EditableText content={feature} contentKey={`product-${product.id}-feature-${index + 1}`} tag="span" />
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {product.process && product.process.length > 0 && (
              <section className="mb-10">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Processing & Quality</h2>
                <ul className="space-y-4">
                  {product.process.map((step, index) => (
                    <li key={index} className="relative pl-10">
                      <div className={`absolute left-0 top-0 w-7 h-7 rounded-full bg-gradient-to-r ${product.gradient} text-white flex items-center justify-center text-xs font-bold`}>{index + 1}</div>
                      <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        <EditableText content={step} contentKey={`product-${product.id}-process-${index + 1}`} tag="span" />
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {product.benefits && product.benefits.length > 0 && (
              <section className={`mb-10 p-6 rounded-2xl bg-gradient-to-r ${product.gradient} bg-opacity-10 ring-1 ring-gray-200/60`}>
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-xl font-bold text-gray-900">Why Choose This Product</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {product.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className={`relative rounded-3xl p-6 bg-white border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 `}
                      style={{ borderImage: `linear-gradient(to right, var(--tw-gradient-stops)) 1` }}
                    >
                      <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-xl bg-gradient-to-r ${product.gradient} opacity-10`} />
                      <div className="flex items-start gap-4">
                        <div className={`rounded-2xl p-2.5 text-white bg-gradient-to-r ${product.gradient} shadow-md`}>
                          <Star className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug">
                            <EditableText content={benefit} contentKey={`product-${product.id}-benefit-${index + 1}`} tag="span" />
                          </h3>
                          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                            <EditableText
                              content="Add a short explanation for this advantage to give buyers more clarity."
                              contentKey={`product-${product.id}-benefit-${index + 1}-desc`}
                              tag="span"
                            />
                          </p>
                          <div className="mt-3 inline-flex items-center gap-2 text-xs text-gray-600">
                            <span className="inline-flex items-center gap-1">
                              <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                              Verified advantage
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={`pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r ${product.gradient}`} style={{ opacity: 0.03 }} />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-4">
              <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Next Steps</h3>
                <div className="flex flex-col gap-3">
                  <Link href={`/quote?productId=${encodeURIComponent(product.id)}&productTitle=${encodeURIComponent(product.title)}${product.imageURL ? `&productImage=${encodeURIComponent(product.imageURL)}` : ''}`} className={`w-full text-center bg-gradient-to-r ${product.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity`}>
                    Get Quote
                  </Link>
                  <Link href="/contact" className="w-full text-center border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p>
                  Need a tailored specification? Our team will provide samples, current pricing, and shipping options.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Similar Products */}
      <div className="container-custom">
        <section className="py-8 sm:py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Similar Products</h2>
            <Link href="/services" className="text-sm font-semibold text-ghl-primary-700 hover:underline">View all</Link>
          </div>
          {relatedProducts.length === 0 ? (
            <p className="text-gray-600">No similar products found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((item) => {
                const ItemIcon = item.icon
                return (
                  <Link key={item.id} href={`/services/${item.id}`} className="group block">
                    <div className="relative bg-white rounded-2xl shadow hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden">
                      {item.imageURL && (
                        <div className="relative h-40 overflow-hidden">
                          <img src={item.imageURL} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                          <div className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow flex items-center justify-center">
                            <ItemIcon className="w-5 h-5" />
                          </div>
                        </div>
                      )}
                      <div className="p-5">
                        <div className="text-xs font-medium text-gray-600 mb-1">
                          <EditableText content={item.subtitle} contentKey={`similar-${item.id}-subtitle`} tag="span" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-ghl-primary-700 transition-colors">
                          <EditableText content={item.title} contentKey={`similar-${item.id}-title`} tag="span" />
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          <EditableText content={item.description} contentKey={`similar-${item.id}-description`} tag="span" />
                        </p>
                        <div className="mt-4 inline-flex items-center text-sm font-semibold text-ghl-primary-700">
                          View details
                        </div>
                      </div>
                      <div className={`absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r ${item.gradient}`} style={{ opacity: 0.03 }} />
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
