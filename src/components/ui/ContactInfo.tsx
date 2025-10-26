'use client'

import { CONTACT_INFO } from '@/lib/constants'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import EditableText from './EditableText'

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
          <EditableText 
            content="Phone"
            contentKey="contact-info-phone-title"
            tag="h3"
            className={textClasses[variant].title}
          />
          <EditableText 
            content={CONTACT_INFO.phone}
            contentKey="contact-info-phone-number"
            tag="p"
            className={textClasses[variant].content}
          />
          <EditableText 
            content="24/7 Emergency Support"
            contentKey="contact-info-phone-subtitle"
            tag="p"
            className={textClasses[variant].subtext}
          />
        </div>
      </div>
      
      <div className={itemClasses[variant]}>
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Mail className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <EditableText 
            content="Email"
            contentKey="contact-info-email-title"
            tag="h3"
            className={textClasses[variant].title}
          />
          <EditableText 
            content={CONTACT_INFO.email}
            contentKey="contact-info-email-address"
            tag="p"
            className={textClasses[variant].content}
          />
          <EditableText 
            content="General inquiries"
            contentKey="contact-info-email-subtitle"
            tag="p"
            className={textClasses[variant].subtext}
          />
        </div>
      </div>
      
      <div className={itemClasses[variant]}>
        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
          <MapPin className="h-5 w-5 text-purple-600" />
        </div>
        <div>
          <EditableText 
            content="Address"
            contentKey="contact-info-address-title"
            tag="h3"
            className={textClasses[variant].title}
          />
          <div className={textClasses[variant].content}>
            <EditableText 
              content={CONTACT_INFO.address.street}
              contentKey="contact-info-address-street"
              tag="span"
            />
            <br />
            <EditableText 
              content={`${CONTACT_INFO.address.city}, ${CONTACT_INFO.address.state}`}
              contentKey="contact-info-address-city-state"
              tag="span"
            />
            <br />
            <EditableText 
              content={CONTACT_INFO.address.country}
              contentKey="contact-info-address-country"
              tag="span"
            />
          </div>
        </div>
      </div>
      
      {showBusinessHours && (
        <div className={itemClasses[variant]}>
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Clock className="h-5 w-5 text-orange-600" />
          </div>
          <div>
            <EditableText 
              content="Business Hours"
              contentKey="contact-info-hours-title"
              tag="h3"
              className={textClasses[variant].title}
            />
            <div className={textClasses[variant].content}>
              <EditableText 
                content={CONTACT_INFO.businessHours.weekdays}
                contentKey="contact-info-hours-weekdays"
                tag="span"
              />
              <br />
              <EditableText 
                content={CONTACT_INFO.businessHours.saturday}
                contentKey="contact-info-hours-saturday"
                tag="span"
              />
              <br />
              <EditableText 
                content={CONTACT_INFO.businessHours.sunday}
                contentKey="contact-info-hours-sunday"
                tag="span"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
