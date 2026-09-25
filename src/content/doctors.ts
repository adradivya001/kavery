// ============================================================
// SRI KAVERY HOSPITAL — VERIFIED DOCTORS & MANAGEMENT DATA
// ============================================================

export interface Doctor {
  slug: string;
  name: string;
  designation: string;
  qualifications: string;
  speciality: string;
  specialitySlug: string;
  phone?: string;
  focusAreas: string[];
  bio: string;
  photo?: string;
  photoAlt: string;
  appointmentLabel: string;
  isVerified: boolean;
}

export const doctors: Doctor[] = [
  {
    slug: 'dr-p-karthik',
    name: 'Dr. P. Karthik',
    designation: 'Pediatrician / Child Specialist',
    qualifications: 'MD Pediatrics',
    speciality: 'Paediatric Care',
    specialitySlug: 'paediatric-care',
    focusAreas: [
      'Child Health & Development',
      'Infant & Newborn Healthcare',
      'Childhood Fever & Illnesses',
      'Vaccination & Preventive Care'
    ],
    bio: 'Senior Pediatrician and Child Specialist at Sri Kavery Hospital, dedicated to providing compassionate medical care and expert guidance for children.',
    photo: '/assets/doctors/doctor-paediatrician.png',
    photoAlt: 'Portrait of Dr. P. Karthik, MD Pediatrics',
    appointmentLabel: 'Book Appointment',
    isVerified: true,
  },
  {
    slug: 'dr-p-dhanunjaya',
    name: 'Dr. P. Dhanunjaya',
    designation: 'Physician',
    qualifications: 'DNB General Medicine',
    speciality: 'General Medicine',
    specialitySlug: 'multi-speciality-support',
    focusAreas: [
      'General Medicine',
      'Adult Primary Healthcare',
      'Preventive Health Monitoring',
      'Family Healthcare Consultations'
    ],
    bio: 'Experienced Physician specializing in General Medicine, leading multi-speciality medical consultations and patient care at Sri Kavery Hospital.',
    photo: '/assets/doctors/doctor-specialist.png',
    photoAlt: 'Portrait of Dr. P. Dhanunjaya, DNB General Medicine',
    appointmentLabel: 'Book Appointment',
    isVerified: true,
  },
  {
    slug: 'tarun-kumar-devarakonda',
    name: 'Tarun Kumar Devarakonda',
    designation: 'Manager',
    qualifications: 'Hospital Administration & Operations Head',
    speciality: 'Hospital Management',
    specialitySlug: 'administration',
    phone: '+91 90142 27690 | 08554 298644',
    focusAreas: [
      'Patient Care & Operations',
      'Hospital Administration',
      'Patient Emergency Helpline',
      'Parent & Patient Assistance'
    ],
    bio: 'Hospital Manager leading administrative operations to ensure high-quality patient care and seamless coordination for families at Sri Kavery Hospital.',
    photo: '/assets/team/hospital-manager.png',
    photoAlt: 'Portrait of Tarun Kumar Devarakonda, Hospital Manager',
    appointmentLabel: 'Contact Manager',
    isVerified: true,
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug);
}
