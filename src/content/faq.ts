// ============================================================
// SRI KAVERY HOSPITAL — FAQ DATA
// ============================================================

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How can I book an appointment?',
    answer: 'You can contact the hospital directly at 093465 59426 or use the appointment request form on the website.',
  },
  {
    id: 'faq-2',
    question: 'Does the hospital provide paediatric care?',
    answer: 'Yes. Sri Kavery is publicly listed as a paediatric and multi-speciality hospital.',
  },
  {
    id: 'faq-3',
    question: 'Where is Sri Kavery Hospital located?',
    answer: 'The hospital is located at Srikantam Circle on RTC Bus Stand Road in Anantapur.',
  },
  {
    id: 'faq-4',
    question: 'Is the hospital available 24/7?',
    answer: 'The current public business listing shows the hospital as open 24 hours.',
  },
  {
    id: 'faq-5',
    question: 'How can I contact the hospital?',
    answer: 'The current public listing displays 093465 59426 as the hospital contact number.',
  },
];
