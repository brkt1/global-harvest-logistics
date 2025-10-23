'use client'

import { CONTACT_INFO } from '@/lib/constants'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

interface ContactInfoProps {
  variant?: 'default' | 'compact' | 'minimal'
  showBusinessHours?: boolean
  className?: string
}

export default function ContactInfo({ 
  variant = 'default', 
  showBusinessHours = true,
  className = ''
}: ContactInfoProps) {
  const containerClasses = {
    default: "space-y-4",
    compact: "space-y-3",
    minimal: "space-y-2"
  }

  const itemClasses = {
    default: "flex items-start space-x-3",
    compact: "flex items-center space-x-2",
    minimal: "flex items-center space-x-1"
  }

  const iconClasses = {
    default: "w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0",
    compact: "w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0",
    minimal: "w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0"
  }

  const textClasses = {
    default: {
      title: "text-sm font-semibold text-gray-900",
      content: "text-sm text-gray-600",
      subtext: "text-xs text-gray-500"
    },
    compact: {
      title: "text-sm font-semibold text-gray-900",
      content: "text-sm text-gray-600",
      subtext: "text-xs text-gray-500"
    },
    minimal: {
      title: "text-xs font-semibold text-gray-900",
      content: "text-xs text-gray-600",
      subtext: "text-xs text-gray-500"
    }
  }

  return (
    <div className={`${containerClasses[variant]} ${className}`}>
      <div className={itemClasses[variant]}>
        <div className={iconClasses[variant]}>
          <Phone className="h-5 w-5 text-red-600" />
        </div>
        <div>
          <h3 className={textClasses[variant].title}>Phone</h3>
          <p className={textClasses[variant].content}>{CONTACT_INFO.phone}</p>
          <p className={textClasses[variant].subtext}>24/7 Emergency Support</p>
        </div>
      </div>
      
      <div className={itemClasses[variant]}>
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Mail className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <h3 className={textClasses[variant].title}>Email</h3>
          <p className={textClasses[variant].content}>{CONTACT_INFO.email}</p>
          <p className={textClasses[variant].subtext}>General inquiries</p>
        </div>
      </div>
      
      <div className={itemClasses[variant]}>
        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
          <MapPin className="h-5 w-5 text-purple-600" />
        </div>
        <div>
          <h3 className={textClasses[variant].title}>Address</h3>
          <p className={textClasses[variant].content}>
            {CONTACT_INFO.address.street}<br />
            {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state}<br />
            {CONTACT_INFO.address.country}
          </p>
        </div>
      </div>
      
      {showBusinessHours && (
        <div className={itemClasses[variant]}>
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Clock className="h-5 w-5 text-orange-600" />
          </div>
          <div>
            <h3 className={textClasses[variant].title}>Business Hours</h3>
            <p className={textClasses[variant].content}>
              {CONTACT_INFO.businessHours.weekdays}<br />
              {CONTACT_INFO.businessHours.saturday}<br />
              {CONTACT_INFO.businessHours.sunday}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
