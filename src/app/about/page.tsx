"use client"

import EditableText from "@/components/ui/EditableText"
import { Award, Handshake, Heart, Leaf, Shield, Star, Target, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function About() {
  const videoRef = useRef<HTMLIFrameElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleVideoError = () => {
      console.log("Video failed to load, using fallback background")
      if (videoRef.current) {
        videoRef.current.style.display = "none"
      }
    }

    const iframe = videoRef.current
    if (iframe) {
      iframe.addEventListener("error", handleVideoError)
      return () => iframe.removeEventListener("error", handleVideoError)
    }
  }, [])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen m-0 p-0">
      {/* Light Background */}
      <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-ghl-primary-50 via-white to-ghl-secondary-50 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,86,49,0.05),transparent_50%)]"></div>
      </div>

      {/* About hero removed per request */}

      {/* Modern Mission & Vision Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 bg-ghl-primary-100 text-ghl-primary-700 rounded-full text-xs sm:text-sm lg:text-base font-medium mb-6 sm:mb-8">
              <Target className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              <EditableText content="Our Purpose" contentKey="about-mission-badge" tag="span" />
            </div>
            <EditableText
              content="Mission & Vision"
              contentKey="about-mission-title"
              tag="h2"
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-ghl-neutral-900 mb-4 sm:mb-6 lg:mb-8"
            />
            <EditableText
              content="Connecting Ethiopia's agricultural treasures with global markets through quality and partnership"
              contentKey="about-mission-description"
              tag="p"
              className="text-lg sm:text-xl lg:text-2xl text-ghl-neutral-600 max-w-3xl mx-auto leading-relaxed"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Mission Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-ghl-primary-600 to-ghl-primary-700 rounded-2xl flex items-center justify-center mr-4 sm:mr-5">
                    <Target className="w-6 w-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <EditableText
                    content="Our Mission"
                    contentKey="about-mission-card-title"
                    tag="h3"
                    className="text-2xl sm:text-3xl lg:text-3xl font-heading font-bold text-ghl-neutral-900"
                  />
                </div>
                <EditableText
                  content="To be the bridge between Ethiopia's rich agricultural heritage and global markets, delivering premium sesame, pulses, and beans while maintaining the highest standards of quality, reliability, and ethical partnership."
                  contentKey="about-mission-card-description"
                  tag="p"
                  className="text-base sm:text-lg lg:text-lg text-ghl-neutral-700 leading-relaxed"
                />
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-ghl-secondary-400 to-ghl-primary-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-gradient-to-br from-ghl-primary-50 to-ghl-secondary-50 p-6 sm:p-8 lg:p-10 rounded-3xl shadow-xl border border-ghl-primary-200 group-hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-ghl-secondary-400 to-ghl-secondary-500 rounded-2xl flex items-center justify-center mr-4 sm:mr-5">
                    <Zap className="w-6 w-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <EditableText
                    content="Our Vision"
                    contentKey="about-vision-card-title"
                    tag="h3"
                    className="text-2xl sm:text-3xl lg:text-3xl font-heading font-bold text-ghl-primary-700"
                  />
                </div>
                <EditableText
                  content="To be recognized as Ethiopia's most trusted agricultural export partner, celebrated for our commitment to quality, sustainable partnerships with local farmers, and seamless global trade operations."
                  contentKey="about-vision-card-description"
                  tag="p"
                  className="text-base sm:text-lg lg:text-lg text-ghl-neutral-700 leading-relaxed mb-4 sm:mb-6"
                />
                <div className="mt-6 sm:mt-8 flex items-center text-ghl-primary-600 font-medium text-base sm:text-lg">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  <EditableText
                    content="Bridging Ethiopia's agricultural heritage with global markets"
                    contentKey="about-vision-tagline"
                    tag="span"
                    className="text-ghl-primary-600 font-medium"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Products Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-white via-ghl-secondary-50/30 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-ghl-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-ghl-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 bg-white/80 backdrop-blur-sm border border-ghl-secondary-200 text-ghl-secondary-700 rounded-full text-xs sm:text-sm lg:text-base font-medium mb-6 sm:mb-8 shadow-lg">
              <Leaf className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              <EditableText
                content="Premium Ethiopian Agricultural Exports"
                contentKey="about-products-badge"
                tag="span"
              />
            </div>
            <EditableText
              content="Our Products"
              contentKey="about-products-title"
              tag="h2"
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-ghl-neutral-900 mb-4 sm:mb-6 lg:mb-8"
            />
            <EditableText
              content="Sourced from Ethiopia's richest regions, prepared to global standards"
              contentKey="about-products-subtitle"
              tag="p"
              className="text-lg sm:text-xl lg:text-2xl text-ghl-neutral-600 font-semibold max-w-3xl mx-auto mb-4 sm:mb-6 lg:mb-8"
            />
            <EditableText
              content="Discover our range of premium sesame, pulses, and beans each carefully selected and processed to meet international quality requirements."
              contentKey="about-products-description"
              tag="p"
              className="text-base sm:text-lg lg:text-xl text-ghl-neutral-700 max-w-4xl mx-auto leading-relaxed"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {/* Sesame Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-ghl-primary-600 to-ghl-primary-700 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-xl border border-ghl-primary-100 group-hover:shadow-2xl transition-all duration-300 text-center group-hover:scale-105 h-full">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-ghl-primary-600 to-ghl-primary-700 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:rotate-12 transition-transform duration-300">
                  <Leaf className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
                <EditableText
                  content="Premium Sesame"
                  contentKey="about-product-sesame-title"
                  tag="h3"
                  className="text-2xl sm:text-3xl font-heading font-bold text-ghl-neutral-900 mb-4 sm:mb-6"
                />
                <EditableText
                  content="High-quality white and natural sesame seeds sourced from Ethiopia's prime growing regions, meeting international export standards."
                  contentKey="about-product-sesame-description"
                  tag="p"
                  className="text-base sm:text-lg text-ghl-neutral-600 leading-relaxed mb-6 sm:mb-8"
                />
                <div className="flex items-center justify-center text-ghl-primary-600 font-medium text-base sm:text-lg">
                  <div className="w-2 h-2 bg-ghl-primary-500 rounded-full mr-2"></div>
                  <EditableText
                    content="Export Quality"
                    contentKey="about-product-sesame-tagline"
                    tag="span"
                    className="text-ghl-primary-600 font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Pulses Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-ghl-secondary-400 to-ghl-secondary-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-xl border border-ghl-secondary-100 group-hover:shadow-2xl transition-all duration-300 text-center group-hover:scale-105 h-full">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-ghl-secondary-400 to-ghl-secondary-500 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:rotate-12 transition-transform duration-300">
                  <Leaf className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
                <EditableText
                  content="Premium Pulses"
                  contentKey="about-product-pulses-title"
                  tag="h3"
                  className="text-2xl sm:text-3xl font-heading font-bold text-ghl-neutral-900 mb-4 sm:mb-6"
                />
                <EditableText
                  content="Diverse range of high-nutrition pulses including lentils, chickpeas, and faba beans, carefully processed and graded for international markets."
                  contentKey="about-product-pulses-description"
                  tag="p"
                  className="text-base sm:text-lg text-ghl-neutral-600 leading-relaxed mb-6 sm:mb-8"
                />
                <div className="flex items-center justify-center text-ghl-secondary-500 font-medium text-base sm:text-lg">
                  <div className="w-2 h-2 bg-ghl-secondary-400 rounded-full mr-2"></div>
                  <EditableText
                    content="Nutrient Rich"
                    contentKey="about-product-pulses-tagline"
                    tag="span"
                    className="text-ghl-secondary-500 font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Beans Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-xl border border-green-100 group-hover:shadow-2xl transition-all duration-300 text-center group-hover:scale-105 h-full">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:rotate-12 transition-transform duration-300">
                  <Leaf className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
                <EditableText
                  content="Premium Beans"
                  contentKey="about-product-beans-title"
                  tag="h3"
                  className="text-2xl sm:text-3xl font-heading font-bold text-ghl-neutral-900 mb-4 sm:mb-6"
                />
                <EditableText
                  content="High-quality beans sourced from Ethiopia's fertile regions, sorted and processed to meet strict quality specifications for global export."
                  contentKey="about-product-beans-description"
                  tag="p"
                  className="text-base sm:text-lg text-ghl-neutral-600 leading-relaxed mb-6 sm:mb-8"
                />
                <div className="flex items-center justify-center text-green-600 font-medium text-base sm:text-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <EditableText
                    content="Highest Quality"
                    contentKey="about-product-beans-tagline"
                    tag="span"
                    className="text-green-600 font-medium"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Certifications Section */}
      <section
        id="certifications"
        className="py-16 bg-gradient-to-br from-white via-ghl-primary-50/20 to-white relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-ghl-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ghl-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-ghl-primary-200 text-ghl-primary-700 rounded-full text-sm font-medium mb-6 shadow-lg">
              <Award className="w-4 h-4 mr-2" />
              <EditableText content="Quality Assurance" contentKey="about-certifications-badge" tag="span" />
            </div>
            <EditableText
              content="Certifications & Standards"
              contentKey="about-certifications-title"
              tag="h2"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ghl-neutral-900 mb-6"
            />
            <EditableText
              content="We maintain the highest industry standards and certifications to ensure the quality and safety of your shipments."
              contentKey="about-certifications-description"
              tag="p"
              className="text-base sm:text-sm sm:text-base md:text-lg md:text-xl text-ghl-neutral-600 max-w-3xl mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:p-6 lg:p-8">
            {/* ISO 9001 Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-ghl-primary-600 to-ghl-primary-700 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-4 sm:p-6 lg:p-8 rounded-3xl shadow-xl border border-ghl-primary-100 group-hover:shadow-2xl transition-all duration-300 text-center group-hover:scale-105 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-ghl-primary-600 to-ghl-primary-700 rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <EditableText
                  content="ISO 9001"
                  contentKey="about-cert-iso-title"
                  tag="span"
                  className="text-2xl font-bold text-ghl-primary-600 mb-3 group-hover:text-ghl-primary-700 transition-colors duration-300"
                />
                <EditableText
                  content="Quality Management"
                  contentKey="about-cert-iso-description"
                  tag="span"
                  className="text-sm text-ghl-neutral-600 font-medium mb-4"
                />
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-ghl-primary-600 to-ghl-primary-700 h-2 rounded-full w-4/5"></div>
                </div>
              </div>
            </div>

            {/* HACCP Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-ghl-secondary-400 to-ghl-secondary-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-4 sm:p-6 lg:p-8 rounded-3xl shadow-xl border border-ghl-secondary-100 group-hover:shadow-2xl transition-all duration-300 text-center group-hover:scale-105 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-ghl-secondary-400 to-ghl-secondary-500 rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <EditableText
                  content="HACCP"
                  contentKey="about-cert-haccp-title"
                  tag="span"
                  className="text-2xl font-bold text-ghl-secondary-500 mb-3 group-hover:text-ghl-secondary-600 transition-colors duration-300"
                />
                <EditableText
                  content="Food Safety"
                  contentKey="about-cert-haccp-description"
                  tag="span"
                  className="text-sm text-ghl-neutral-600 font-medium mb-4"
                />
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-ghl-secondary-400 to-ghl-secondary-500 h-2 rounded-full w-full"></div>
                </div>
              </div>
            </div>

            {/* FDA Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-4 sm:p-6 lg:p-8 rounded-3xl shadow-xl border border-green-100 group-hover:shadow-2xl transition-all duration-300 text-center group-hover:scale-105 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <EditableText
                  content="FDA"
                  contentKey="about-cert-fda-title"
                  tag="span"
                  className="text-2xl font-bold text-green-600 mb-3 group-hover:text-green-700 transition-colors duration-300"
                />
                <EditableText
                  content="FDA Approved"
                  contentKey="about-cert-fda-description"
                  tag="span"
                  className="text-sm text-ghl-neutral-600 font-medium mb-4"
                />
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full w-5/6"></div>
                </div>
              </div>
            </div>

            {/* Organic Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-4 sm:p-6 lg:p-8 rounded-3xl shadow-xl border border-green-100 group-hover:shadow-2xl transition-all duration-300 text-center group-hover:scale-105 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <EditableText
                  content="Organic"
                  contentKey="about-cert-organic-title"
                  tag="span"
                  className="text-2xl font-bold text-green-700 mb-3 group-hover:text-green-800 transition-colors duration-300"
                />
                <EditableText
                  content="Certified Organic"
                  contentKey="about-cert-organic-description"
                  tag="span"
                  className="text-sm text-ghl-neutral-600 font-medium mb-4"
                />
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-600 to-green-700 h-2 rounded-full w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-16 bg-gradient-to-br from-white via-ghl-primary-50/20 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-ghl-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ghl-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-ghl-primary-200 text-ghl-primary-700 rounded-full text-sm font-medium mb-6 shadow-lg">
              <Heart className="w-4 h-4 mr-2" />
              <EditableText content="Our Values" contentKey="about-values-badge" tag="span" />
            </div>
            <EditableText
              content="Core Values"
              contentKey="about-values-title"
              tag="h2"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ghl-neutral-900 mb-6"
            />
            <EditableText
              content="The principles that guide everything we do, from daily operations to long-term strategic decisions."
              contentKey="about-values-description"
              tag="p"
              className="text-base sm:text-sm sm:text-base md:text-lg md:text-xl text-ghl-neutral-600 max-w-3xl mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 lg:p-8">
            {/* Sustainability Value */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-4 sm:p-6 lg:p-8 rounded-3xl shadow-xl border border-green-100 group-hover:shadow-2xl transition-all duration-300 text-center group-hover:scale-105 h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <Leaf className="w-10 h-10 text-white" />
                </div>
                <EditableText
                  content="Sustainability"
                  contentKey="about-value-sustainability-title"
                  tag="h3"
                  className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-4"
                />
                <EditableText
                  content="Committed to environmentally responsible practices that protect our planet for future generations."
                  contentKey="about-value-sustainability-description"
                  tag="p"
                  className="text-ghl-neutral-600 leading-relaxed mb-6"
                />
                <div className="flex items-center justify-center text-green-600 font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <EditableText
                    content="Carbon Neutral Operations"
                    contentKey="about-value-sustainability-tagline"
                    tag="span"
                    className="text-green-600 font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Excellence Value */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-4 sm:p-6 lg:p-8 rounded-3xl shadow-xl border border-yellow-100 group-hover:shadow-2xl transition-all duration-300 text-center group-hover:scale-105 h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <EditableText
                  content="Excellence"
                  contentKey="about-value-excellence-title"
                  tag="h3"
                  className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-4"
                />
                <EditableText
                  content="Delivering exceptional service through continuous improvement and attention to detail."
                  contentKey="about-value-excellence-description"
                  tag="p"
                  className="text-ghl-neutral-600 leading-relaxed mb-6"
                />
                <div className="flex items-center justify-center text-yellow-600 font-medium">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  <EditableText
                    content="99.8% Success Rate"
                    contentKey="about-value-excellence-tagline"
                    tag="span"
                    className="text-yellow-600 font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Partnership Value */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-4 sm:p-6 lg:p-8 rounded-3xl shadow-xl border border-blue-100 group-hover:shadow-2xl transition-all duration-300 text-center group-hover:scale-105 h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <Handshake className="w-10 h-10 text-white" />
                </div>
                <EditableText
                  content="Partnership"
                  contentKey="about-value-partnership-title"
                  tag="h3"
                  className="text-2xl font-heading font-bold text-ghl-neutral-900 mb-4"
                />
                <EditableText
                  content="Building lasting relationships based on trust, transparency, and mutual success."
                  contentKey="about-value-partnership-description"
                  tag="p"
                  className="text-ghl-neutral-600 leading-relaxed mb-6"
                />
                <div className="flex items-center justify-center text-blue-600 font-medium">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <EditableText
                    content="100+ Trusted Partners"
                    contentKey="about-value-partnership-tagline"
                    tag="span"
                    className="text-blue-600 font-medium"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
