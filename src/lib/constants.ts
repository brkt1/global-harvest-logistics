// Shared constants and data to eliminate duplication across the website

export const COMPANY_STATS = [
  { value: '100+', label: 'Global Partners', icon: 'Users' },
  { value: '99.8%', label: 'On-Time Delivery', icon: 'TrendingUp' },
  { value: '15+', label: 'Countries Served', icon: 'Globe' },
  { value: '12+', label: 'Years Experience', icon: 'Award' }
] as const;

export const CONTACT_INFO = {
  phone: '+251 911 156 824',
  email: 'samagricomm@gmail.com',
  wechat: 'Ktnany',
  website: 'samcommodities.org',
  address: {
    street: 'Office 22, Ribka Bldg, 1st Floor, Office #12A',
    city: 'Addis Ababa',
    state: '',
    country: 'Ethiopia'
  },
  businessHours: {
    weekdays: 'Monday - Friday: 8:30 AM - 5:30 PM',
    saturday: 'Saturday: 9:00 AM - 1:00 PM',
    sunday: 'Sunday: Closed'
  }
} as const;

export const COMMON_GRADIENTS = {
  primary: 'bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400',
  primaryText: 'bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 bg-clip-text text-transparent',
  secondary: 'bg-gradient-to-r from-ghl-secondary-400 to-ghl-primary-600'
} as const;

export const SERVICES_DATA = [
  {
    id: 'coffee',
    icon: 'Coffee',
    title: 'Coffee Logistics',
    subtitle: 'From Ethiopian Highlands',
    description: 'Specialized temperature and humidity control for premium Ethiopian coffee beans from highland farms to global markets.',
    features: [
      'Temperature-controlled storage (15-25°C)',
      'Humidity monitoring (50-60% RH)',
      'Specialized bagging expertise',
      'Origin logistics coordination',
      'Fumigation compliance',
      'Quality preservation protocols'
    ],
    color: 'ghl-primary-600',
    gradient: 'from-ghl-primary-500 to-ghl-primary-700'
  },
  {
    id: 'oil',
    icon: 'Droplets',
    title: 'Oil Transportation',
    subtitle: 'Traditional Oil Heritage',
    description: 'State-of-the-art flexitank systems for traditional Ethiopian oils and specialty liquids with cultural preservation.',
    features: [
      'Flexitank expertise for bulk liquids',
      'Bottling line integration',
      'Quality preservation systems',
      'Custom loading procedures',
      'Temperature monitoring',
      'Contamination prevention'
    ],
    color: 'ghl-secondary-400',
    gradient: 'from-ghl-secondary-400 to-ghl-secondary-600'
  },
  {
    id: 'specialty',
    icon: 'Package',
    title: 'Specialty Products',
    subtitle: 'Cultural Commodities',
    description: 'Comprehensive logistics for traditional Ethiopian goods, spices, and other temperature-sensitive cultural commodities.',
    features: [
      'Custom packaging solutions',
      'Multi-modal transport options',
      'Cold chain management',
      'Documentation support',
      'Quality assurance protocols',
      'Flexible handling requirements'
    ],
    color: 'ghl-secondary-500',
    gradient: 'from-ghl-secondary-500 to-ghl-primary-600'
  }
] as const;

export const PROVEN_PROCESS_STEPS = [
  {
    id: 1,
    number: '01',
    title: 'Temperature Control',
    description: 'Advanced monitoring systems ensure optimal conditions.',
    icon: 'Thermometer',
    position: 'bottom'
  },
  {
    id: 2,
    number: '02',
    title: 'Quality Assurance',
    description: 'Rigorous quality checks and compliance standards.',
    icon: 'Shield',
    position: 'top'
  },
  {
    id: 3,
    number: '03',
    title: 'Sustainable Shipping',
    description: 'Eco-friendly practices and carbon-neutral options.',
    icon: 'Leaf',
    position: 'bottom'
  },
  {
    id: 4,
    number: '04',
    title: 'Real-time Tracking',
    description: '24/7 monitoring with delivery guarantees.',
    icon: 'MapPin',
    position: 'top'
  }
] as const;
