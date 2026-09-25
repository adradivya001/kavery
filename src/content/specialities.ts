// ============================================================
// SRI KAVERY HOSPITAL — SPECIALITIES DATA
// ============================================================

export interface Speciality {
  slug: string;
  name: string;
  shortName?: string;
  description: string;
  icon: string;
  tags: string[];
}

export const specialities: Speciality[] = [
  {
    slug: 'paediatric-care',
    name: 'Paediatric Care',
    description:
      'Comprehensive healthcare focused on the physical health, development and wellbeing of children, delivered with a child-friendly and family-centered approach.',
    icon: 'Baby',
    tags: ['Child Health', 'Paediatrics', 'Family Care'],
  },
  {
    slug: 'preventive-child-healthcare',
    name: 'Preventive Child Healthcare',
    description:
      'Supporting parents with healthcare guidance and regular attention to children’s wellbeing.',
    icon: 'ShieldCheck',
    tags: ['Wellness', 'Prevention', 'Child Care'],
  },
  {
    slug: 'multi-speciality-support',
    name: 'Multi-Speciality Support',
    description:
      'Access to broader medical care when children or family members require consultation beyond routine paediatric care.',
    icon: 'Hospital',
    tags: ['Consultation', 'Specialist Care', 'Patient Support'],
  },
  {
    slug: 'newborn-infant-care',
    name: 'Newborn & Infant Care',
    description:
      'Specialized care and attention for newborns and infants during their early stages of growth.',
    icon: 'HeartHandshake',
    tags: ['Newborn Health', 'Infant Care', 'Development'],
  },
  {
    slug: 'child-wellness',
    name: 'Child Wellness & Growth',
    description:
      'Routine monitoring, growth assessment, and developmental milestones tracking for children.',
    icon: 'Stethoscope',
    tags: ['Growth', 'Wellness', 'Checkups'],
  },
  {
    slug: 'general-healthcare',
    name: 'General Healthcare',
    description:
      'Primary medical consultations and support for family members alongside paediatric services.',
    icon: 'Activity',
    tags: ['Family Care', 'Consultation', 'General Health'],
  },
];

export function getSpecialityBySlug(slug: string): Speciality | undefined {
  return specialities.find((s) => s.slug === slug);
}
