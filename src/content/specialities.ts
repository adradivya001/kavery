// ============================================================
// SRI KAVERY HOSPITAL — SPECIALITIES DATA
// Comprehensive General Medicine & Specialized Paediatric Care
// ============================================================

export interface Speciality {
  slug: string;
  name: string;
  shortName?: string;
  badge?: string;
  description: string;
  icon: string;
  tags: string[];
}

export const specialities: Speciality[] = [
  {
    slug: 'general-medicine',
    name: 'General Medicine & Physician Care',
    badge: 'Adult & Family Care',
    description:
      'Comprehensive primary healthcare, physician consultations, diagnosis and long-term management of adult illnesses, diabetes, hypertension, infectious fevers, and chronic disorders.',
    icon: 'Stethoscope',
    tags: ['Adult Health', 'Physician Care', 'Chronic Care', 'Fever Clinic'],
  },
  {
    slug: 'paediatric-care',
    name: 'Specialized Paediatric Care',
    badge: 'Child Health Excellence',
    description:
      'Dedicated child specialist consultations, diagnosis and compassionate treatment of acute & chronic childhood illnesses, respiratory conditions, and pediatric emergencies.',
    icon: 'Baby',
    tags: ['Child Health', 'Paediatrics', 'Specialist Care', 'Pediatric OPD'],
  },
  {
    slug: 'newborn-infant-care',
    name: 'Newborn & Infant Care',
    badge: 'Neonatal Care',
    description:
      'Specialized care and monitoring for newborns and infants during critical developmental stages, including neonatal health assessments, feeding support, and infant growth tracking.',
    icon: 'HeartHandshake',
    tags: ['Newborn Health', 'Infant Care', 'Development', 'Neonatology'],
  },
  {
    slug: 'preventive-health-checkups',
    name: 'Preventive Health & Diagnostics',
    badge: 'All Age Groups',
    description:
      'Comprehensive preventive health checkups for adults and children, routine laboratory investigations, vital screenings, and personalized wellness guidance.',
    icon: 'ShieldCheck',
    tags: ['Health Screenings', 'Diagnostics', 'Prevention', 'Wellness'],
  },
  {
    slug: 'vaccination-immunization',
    name: 'Vaccination & Immunization Centre',
    badge: 'Preventive Care',
    description:
      'Complete national and international immunization schedules for infants, children, and adolescents, administered in a safe, hygienic environment.',
    icon: 'Activity',
    tags: ['Immunization', 'Child Vaccines', 'Preventive Health'],
  },
  {
    slug: 'multi-speciality-support',
    name: '24/7 Emergency & Multi-Speciality Care',
    badge: 'Round-the-Clock',
    description:
      'Immediate medical evaluation, emergency stabilization, inpatient hospital wards, and collaborative multi-speciality consultations for patients of all age groups.',
    icon: 'Hospital',
    tags: ['Emergency 24/7', 'Inpatient Wards', 'Pharmacy', 'Multi-Speciality'],
  },
];

export function getSpecialityBySlug(slug: string): Speciality | undefined {
  return specialities.find((s) => s.slug === slug);
}
