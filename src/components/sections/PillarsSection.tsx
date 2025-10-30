"use client"

import EditableImage from "@/components/ui/EditableImage"
import EditableText from "@/components/ui/EditableText"
import { Award, Globe, Leaf, Shield, TrendingUp, Users } from "lucide-react"

export default function PillarsSection() {
  const pillars = [
    {
      icon: Award,
      title: "Agricultural Expertise",
      description:
        "Deep understanding of Ethiopian sesame, pulses, and beans from soil selection to international market requirements.",
      features: [
        "Humera sesame quality specialization",
        "Pulse variety identification & grading",
        "International quality standards knowledge",
        "Ethiopian growing region expertise",
      ],
      color: "ghl-primary-600",
    },
    {
      icon: Shield,
      title: "Supply Chain Reliability",
      description: "Seamless logistics, ensuring product integrity and timely deliveries.",
      features: [
        "Warehouse quality control",
        "Djibouti shipping coordination",
        "Documentation accuracy",
        "Shipment timeline adherence",
      ],
      color: "ghl-secondary-400",
    },
    {
      icon: Leaf,
      title: "Ethical Partnership",
      description:
        "Building sustainable relationships between Ethiopian farmers and international buyers through fair practices and quality focus.",
      features: [
        "Direct farmer engagement",
        "Quality-based pricing",
        "Long-term supply assurance",
        "Transparent business practices",
      ],
      color: "ghl-secondary-500",
    },
  ]

  const stats = [
    { icon: TrendingUp, value: "100+", label: "Global Partners" },
    { icon: Users, value: "15+", label: "Countries Served" },
    { icon: Globe, value: "99.8%", label: "On-Time Delivery" },
    { icon: Award, value: "12+", label: "Years Experience" },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3Cpath d='M30 15l-3 6h6l-3-6zm0 30l-3-6h6l-3 6zm15-15l-6-3v6l6-3zm-30 0l6-3v6l-6-3z'/%3E%3Cpath d='M30 7.5c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 12.5c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2z'/%3E%3Cpath d='M30 30c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm0-6c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-ghl-primary-600/10 to-ghl-secondary-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-ghl-secondary-400/10 to-ghl-primary-600/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-ghl-primary-600/5 to-ghl-secondary-400/5 rounded-full blur-lg"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 text-white rounded-full text-xs sm:text-sm lg:text-base font-semibold mb-6 sm:mb-8 shadow-lg">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
            <EditableText content="Our Foundation" contentKey="pillars-badge" tag="span" />
          </div>
          <EditableText
            content="Built on Three Pillars of Excellence"
            contentKey="pillars-title"
            tag="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8"
          />
          <EditableText
            content="Our commitment to agricultural expertise, supply chain reliability, and ethical partnerships ensures excellence in every shipment from Ethiopia."
            contentKey="pillars-description"
            tag="p"
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          />
        </div>

        {/* Compact Pillars Grid with Background Images */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-16 sm:mb-20 lg:mb-24">
          {pillars.map((pillar, index) => {
            // Define background images matching the Ethiopian agricultural export theme
            const backgroundImages = [
              "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80", // Agricultural Expertise - Sesame/pulses/beans field
              "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", // Supply Chain Reliability - Warehouses and logistics
              "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80", // Ethical Partnership - Hands harvesting crops/sustainable farming
            ]

            return (
              <div key={pillar.title} className="group relative">
                {/* Pillar Card with Background Image */}
                <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden h-96 sm:h-[28rem] lg:h-[32rem]">
                  {/* Background Image */}
                  <EditableImage
                    src={backgroundImages[index]}
                    alt={`${pillar.title} background`}
                    contentKey={`pillar-${index + 1}-background`}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    isBackground={true}
                  />
                  {/* Light overlay for better text readability */}
                  <div className="absolute inset-0 bg-white/80"></div>

                  {/* Pillar Number */}
                  <div className="relative z-10 mb-4 sm:mb-6">
                    <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 text-white rounded-full text-base sm:text-lg font-bold">
                      {index + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="relative z-10 mb-4 sm:mb-6">
                    <EditableText
                      content={pillar.title}
                      contentKey={`pillar-${index + 1}-title`}
                      tag="h3"
                      className="text-xl sm:text-2xl lg:text-2xl font-bold text-ghl-neutral-900 mb-2 sm:mb-3 group-hover:text-ghl-neutral-800 transition-colors"
                    />
                    <EditableText
                      content={pillar.description}
                      contentKey={`pillar-${index + 1}-description`}
                      tag="p"
                      className="text-base sm:text-lg lg:text-lg text-ghl-neutral-700 leading-relaxed"
                    />
                  </div>

                  {/* Key Features */}
                  <div className="relative z-10">
                    <h4 className="text-sm sm:text-base font-semibold text-ghl-neutral-800 mb-3 sm:mb-4 flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 rounded-full mr-2"></div>
                      <EditableText
                        content="Key Features"
                        contentKey={`pillar-${index + 1}-features-title`}
                        tag="span"
                      />
                    </h4>
                    <ul className="space-y-2 sm:space-y-2.5">
                      {pillar.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm sm:text-base text-ghl-neutral-600">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                          <EditableText
                            content={feature}
                            contentKey={`pillar-${index + 1}-feature-${featureIndex + 1}`}
                            tag="span"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-ghl-primary-500/10 to-ghl-secondary-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Compact Stats Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 shadow-lg border border-gray-200">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <EditableText
              content="Our Track Record"
              contentKey="stats-title"
              tag="h3"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4"
            />
            <EditableText
              content="Delivering excellence across the globe with proven results."
              contentKey="stats-description"
              tag="p"
              className="text-base sm:text-lg lg:text-xl text-gray-600"
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 rounded-lg sm:rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300 mb-3 sm:mb-4 lg:mb-6">
                  <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                </div>
                <EditableText
                  content={stat.value}
                  contentKey={`stat-${index + 1}-value`}
                  tag="span"
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:scale-105 transition-transform duration-300 block"
                />
                <EditableText
                  content={stat.label}
                  contentKey={`stat-${index + 1}-label`}
                  tag="span"
                  className="text-sm sm:text-base lg:text-lg text-gray-600 font-medium block"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
