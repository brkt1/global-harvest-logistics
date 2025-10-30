"use client"

import EditableImage from "@/components/ui/EditableImage"
import EditableText from "@/components/ui/EditableText"
import YouTubeVideo from "@/components/ui/YouTubeVideo"
import { useContent } from "@/hooks/useContent"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  // Get video content using the useContent hook
  const { content: videoSrc } = useContent({
    key: "hero-video",
    defaultValue: "https://www.youtube.com/watch?v=eRaFMlZ1YHA&list=RDvHU6ZRQJ50Q&index=2",
    type: "video",
  })
  const { content: videoTitle } = useContent({
    key: "hero-video-title",
    defaultValue: "Our Logistics Process",
    type: "text",
  })

  return (
    <section className="relative overflow-hidden">
      {/* Soft Background Image */}
      <EditableImage
        src="/hero.jpg"
        alt="Global Harvest Logistics Hero Background"
        contentKey="hero-background"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        isBackground={true}
      />
      {/* Soft overlay to maintain green visibility */}
      <div className="absolute inset-0 bg-white/85"></div>

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Floating Background Elements (hidden on small screens to avoid overlap) */}
      <div className="hidden sm:block absolute top-20 left-10 w-20 h-20 bg-ghl-primary-100 rounded-full blur-xl opacity-60"></div>
      <div className="hidden sm:block absolute bottom-20 right-10 w-32 h-32 bg-ghl-secondary-100 rounded-full blur-2xl opacity-60"></div>
      <div className="hidden sm:block absolute top-1/2 left-1/4 w-16 h-16 bg-ghl-primary-200 rounded-full blur-lg opacity-40"></div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] py-12 sm:py-16 lg:py-20">
          {/* Left Content - Mobile optimized */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 backdrop-blur-sm rounded-full text-xs sm:text-sm lg:text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/90 border-ghl-primary-200 text-ghl-primary-700">
                <div className="flex -space-x-1 mr-3 sm:mr-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-ghl-primary-600 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs text-white font-bold">G</span>
                  </div>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-ghl-secondary-400 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs text-white font-bold">H</span>
                  </div>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-ghl-primary-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs text-white font-bold">L</span>
                  </div>
                </div>
                <span className="font-semibold text-xs sm:text-sm lg:text-base">Trusted by 100+ Global Partners</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight">
                <EditableText
                  content="Welcome to"
                  contentKey="hero-title-1"
                  tag="span"
                  className="text-ghl-neutral-900"
                />
                <br />
                <EditableText
                  content="Excellence in"
                  contentKey="hero-title-2"
                  tag="span"
                  className="text-gradient bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 bg-clip-text text-transparent"
                />
                <br />
                <EditableText
                  content="Global Logistics"
                  contentKey="hero-title-3"
                  tag="span"
                  className="text-ghl-primary-600"
                />
              </h1>

              <EditableText
                content="We're delighted to have you here! As your trusted partner in temperature-sensitive commodity logistics, we specialize in coffee, olive oil, and specialty food exports with unmatched expertise, reliability, and sustainability."
                contentKey="hero-description"
                tag="p"
                className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-2xl text-ghl-neutral-700"
              />
            </div>

            {/* CTA Buttons - Mobile optimized */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6">
              <Link
                href="/quote"
                className="btn btn-primary text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 inline-flex items-center justify-center group"
              >
                <span className="hidden sm:inline">Let&apos;s Start Your Journey</span>
                <span className="sm:hidden">Start Journey</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => setIsVideoPlaying(true)}
                className="btn btn-outline text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 inline-flex items-center justify-center group"
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">Discover Our Story</span>
                <span className="sm:hidden">Our Story</span>
              </button>
            </div>

            {/* Subtle Welcome Message */}
            <div className="bg-gradient-to-r from-ghl-primary-50 to-ghl-secondary-50 backdrop-blur-sm rounded-lg p-4 sm:p-5 lg:p-6 border border-ghl-primary-200">
              <EditableText
                content="💚 Every shipment tells a story. Let us help you write yours with care and precision."
                contentKey="hero-welcome-message"
                tag="p"
                className="text-base sm:text-lg lg:text-lg text-ghl-neutral-700 text-center"
              />
            </div>

            {/* Trust Indicators - Mobile compact */}
            <div className="pt-6 sm:pt-8 lg:pt-10 border-t border-ghl-neutral-200">
              <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-6 lg:gap-8">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-ghl-primary-600"></div>
                  <EditableText
                    content="100+ Partners"
                    contentKey="hero-trust-partners"
                    tag="span"
                    className="text-sm sm:text-base lg:text-lg text-ghl-neutral-700 font-medium"
                  />
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-ghl-secondary-500"></div>
                  <EditableText
                    content="99.8% On-Time"
                    contentKey="hero-trust-ontime"
                    tag="span"
                    className="text-sm sm:text-base lg:text-lg text-ghl-neutral-700 font-medium"
                  />
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-ghl-primary-500"></div>
                  <EditableText
                    content="24/7 Support"
                    contentKey="hero-trust-support"
                    tag="span"
                    className="text-sm sm:text-base lg:text-lg text-ghl-neutral-700 font-medium"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Video - Mobile optimized */}
          <div className="relative mt-8 sm:mt-10 lg:mt-0">
            <div className="relative bg-gradient-to-br from-ghl-primary-600 to-ghl-secondary-400 rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 text-white">
              {/* Placeholder for hero image/video */}
              <div className="aspect-[4/3] sm:aspect-video bg-white/10 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
                    <Play className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 ml-1" />
                  </div>
                  <EditableText
                    content="See Our Process"
                    contentKey="hero-video-placeholder-title"
                    tag="p"
                    className="text-base sm:text-lg lg:text-xl font-medium mb-1 sm:mb-2"
                  />
                  <EditableText
                    content="Temperature-controlled logistics in action"
                    contentKey="hero-video-placeholder-subtitle"
                    tag="p"
                    className="text-xs sm:text-sm lg:text-base opacity-80"
                  />
                </div>
              </div>

              {/* Floating elements - Mobile optimized */}
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 bg-white text-ghl-primary-600 px-3 py-1.5 sm:px-4 sm:py-2 lg:px-5 lg:py-2.5 rounded-md sm:rounded-lg lg:rounded-xl shadow-lg">
                <EditableText
                  content="ISO 9001"
                  contentKey="hero-certification"
                  tag="span"
                  className="text-xs sm:text-sm lg:text-base font-semibold"
                />
              </div>

              <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 lg:-bottom-4 lg:-left-4 bg-ghl-secondary-400 text-white px-3 py-1.5 sm:px-4 sm:py-2 lg:px-5 lg:py-2.5 rounded-md sm:rounded-lg lg:rounded-xl shadow-lg">
                <EditableText
                  content="Sustainable"
                  contentKey="hero-sustainability"
                  tag="span"
                  className="text-xs sm:text-sm lg:text-base font-semibold"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="rounded-lg p-4 sm:p-6 lg:p-8 max-w-4xl w-full bg-white">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <EditableText
                content="Our Logistics Process"
                contentKey="hero-video-title"
                tag="h3"
                className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900"
              />
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="text-ghl-neutral-500 hover:text-ghl-neutral-700 text-2xl sm:text-3xl"
              >
                ✕
              </button>
            </div>
            <YouTubeVideo
              src={videoSrc}
              title={videoTitle}
              contentKey="hero-video"
              className="aspect-video rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}
