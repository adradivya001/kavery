// ============================================================
// SRI KAVERY PAEDIATRIC & MULTI-SPECIALITY HOSPITAL — Site Configuration
// "Your Health, Our Priority"
// ============================================================

export const siteConfig = {
  name: 'Sri Kavery Paediatric and Multi Speciality Hospital',
  shortName: 'Sri Kavery Hospital',
  tagline: 'Comprehensive Healthcare for Adults & Families · Specialized Care for Children',
  heroLabel: 'SRI KAVERY PAEDIATRIC & MULTI-SPECIALITY HOSPITAL',
  heroHeadingLine1: 'Complete Family Healthcare.',
  heroHeadingLine2: 'Specialized Care for Children.',
  description:
    'Sri Kavery Paediatric & Multi Speciality Hospital in Anantapur provides complete General Medicine, Adult Primary Care, Physician consultations, alongside specialized paediatric and newborn healthcare.',

  manager: {
    name: 'Tarun Kumar Devarakonda',
    role: 'Hospital Manager',
    phone: '+919014227690',
    phoneDisplay: '+91 90142 27690',
    landline: '08554 298644',
  },

  contact: {
    phone: '+919014227690',
    phoneDisplay: '+91 90142 27690',
    landline: '08554 298644',
    landlineDisplay: '08554 298644',
    whatsapp: '919014227690',
    email: 'info@srikaveryhospital.in',
    address: {
      doorNo: '#13-3-341',
      street: 'RTC Bus-stand Road',
      landmark: 'Beside Khazana Jewellers, Opp. IDBI Bank, Srikantam Circle',
      city: 'Anantapuramu',
      state: 'Andhra Pradesh',
      country: 'India',
      postalCode: '515001',
    },
    mapQuery: 'Sri+Kavery+Paediatric+and+Multi+Speciality+Hospital+Srikantam+Circle+Anantapur',
    googleMapsUrl: 'https://maps.google.com/?q=Sri+Kavery+Paediatric+and+Multi+Speciality+Hospital+Anantapur',
  },

  pillars: [
    'CHILD CARE EXPERTS',
    'MULTI SPECIALITY CARE',
    'COMPASSIONATE & TRUSTED',
    'ADVANCED CARE BETTER OUTCOMES',
  ],

  features: {
    showEmergency: true,
    showDiagnostics: true,
    showInsurance: true,
    showOpenHours: true,
    showSecondPhone: true,
    showEmail: true,
    showBlog: true,
    showFAQ: true,
    showMap: true,
    showDigitalSolutions: true,
  },

  digitalCapabilities: {
    patientFeatures: [
      'Instant OPD & Specialist Doctor Appointment Booking',
      'Digital Prescription & Medical Records Access',
      'Vaccination Schedule & Immunization Reminders',
      'Direct WhatsApp Consultation & Hospital Assistance',
      'Emergency Paediatric Hotline & Ambulance Support',
    ],
    hospitalFeatures: [
      'Real-time OPD Token & Queue Management System',
      'Automated Patient Notifications & SMS Alerts',
      'Digital Bed Allocation & Inpatient Workflow',
      'Unified Doctor Consultation Scheduling Dashboard',
    ],
  },

  legal: {
    privacyPolicy: '/privacy',
    termsOfService: '/terms',
    copyrightYear: 2026,
    websiteBy: 'Digital Healthcare Solutions',
  },

  seo: {
    siteUrl: 'https://srikaveryhospital.in',
    ogImage: '/assets/kavery-hero.png',
    twitterHandle: '@SriKaveryHosp',
  },
} as const;

export type SiteConfig = typeof siteConfig;
