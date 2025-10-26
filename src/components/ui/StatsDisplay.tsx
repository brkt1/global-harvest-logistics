'use client'

import EditableText from '@/components/ui/EditableText'
import { COMPANY_STATS } from '@/lib/constants'
import { Award, Globe, TrendingUp, Users } from 'lucide-react'

interface StatsDisplayProps {
  variant?: 'default' | 'compact' | 'minimal'
  className?: string
  showIcons?: boolean
}

const iconMap = {
  Users,
  TrendingUp,
  Globe,
  Award
}

export default function StatsDisplay({ 
  variant = 'default', 
  className = '',
  showIcons = true 
}: StatsDisplayProps) {
  const baseClasses = "grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
  
  const variantClasses = {
    default: "gap-3 sm:gap-4 lg:gap-6",
    compact: "gap-2 sm:gap-3",
    minimal: "gap-1 sm:gap-2"
  }

  const cardClasses = {
    default: "backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 xl:p-8 text-center transition-all duration-300 hover:shadow-lg bg-white/60 hover:bg-white/80 border-white/50",
    compact: "bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center shadow-sm border border-gray-100",
    minimal: "text-center"
  }

  const iconClasses = {
    default: "inline-flex p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-ghl-primary-600 to-ghl-secondary-400 rounded-lg sm:rounded-xl mb-2 sm:mb-3 lg:mb-4 xl:mb-6 group-hover:scale-110 transition-transform duration-300",
    compact: "inline-flex p-2 bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 rounded-lg mb-2 group-hover:scale-110 transition-transform duration-300",
    minimal: "inline-flex p-1 bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 rounded mb-1"
  }

  const valueClasses = {
    default: "text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-1 sm:mb-2 text-ghl-neutral-900",
    compact: "text-lg sm:text-xl font-bold mb-1 text-gray-900",
    minimal: "text-sm sm:text-base font-bold text-gray-900"
  }

  const labelClasses = {
    default: "font-medium text-xs sm:text-sm lg:text-base text-ghl-neutral-600",
    compact: "text-xs sm:text-sm text-gray-600",
    minimal: "text-xs text-gray-500"
  }

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {COMPANY_STATS.map((stat, index) => {
        const IconComponent = iconMap[stat.icon as keyof typeof iconMap]
        
        return (
          <div key={index} className="group">
            <div className={cardClasses[variant]}>
              {showIcons && IconComponent && (
                <div className={iconClasses[variant]}>
                  <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-white" />
                </div>
              )}
              <EditableText 
                content={stat.value}
                contentKey={`stats-display-${index + 1}-value`}
                tag="span"
                className={valueClasses[variant]}
              />
              <EditableText 
                content={stat.label}
                contentKey={`stats-display-${index + 1}-label`}
                tag="span"
                className={labelClasses[variant]}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
