// ============================================================
// SRI KAVERY HOSPITAL — PARENT HEALTH GUIDE ARTICLES
// ============================================================

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: string;
  content: string;
  imageAlt: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'understanding-your-childs-fever',
    title: "Understanding Your Child's Fever",
    excerpt: 'When should parents seek medical attention and what symptoms should they watch for?',
    category: 'Parent Health Guide',
    readTime: '3 min read',
    publishedDate: 'September 2026',
    author: 'Sri Kavery Clinical Team',
    imageAlt: 'Mother taking care of child with fever',
    content: `
# Understanding Your Child's Fever

Fever is a natural response as a child's body builds immunity. Knowing when to consult a paediatrician ensures safety and peace of mind for parents.

### When to Seek Medical Attention:
- Infant under 3 months with elevated temperature.
- Fever accompanied by lethargy, breathing difficulty, or poor feeding.
- Persistent fever lasting beyond 48 hours.

*Note: Always consult a qualified paediatrician for clinical guidance.*
    `,
  },
  {
    slug: 'keeping-your-child-healthy',
    title: 'Keeping Your Child Healthy',
    excerpt: 'Simple healthcare practices that can support your child’s everyday wellbeing.',
    category: 'Parent Health Guide',
    readTime: '4 min read',
    publishedDate: 'September 2026',
    author: 'Sri Kavery Clinical Team',
    imageAlt: 'Healthy child playing outdoors',
    content: `
# Keeping Your Child Healthy

Building daily wellness habits helps protect children against common seasonal illnesses and promotes healthy developmental growth.

### Essential Everyday Practices:
- Balanced nutrition rich in fresh fruits, vegetables, and fluids.
- Consistent hand hygiene before meals and after playing outdoors.
- Adequate sleep routines tailored to your child's age group.
- Regular wellness checkups with your family doctor.
    `,
  },
  {
    slug: 'childhood-vaccination-guide',
    title: 'Childhood Vaccination Guide',
    excerpt: 'Understanding the importance of routine childhood immunization.',
    category: 'Parent Health Guide',
    readTime: '4 min read',
    publishedDate: 'September 2026',
    author: 'Sri Kavery Clinical Team',
    imageAlt: 'Child receiving routine immunization',
    content: `
# Childhood Vaccination Guide

Immunization provides vital protection against serious childhood diseases.

### Why Vaccination Matters:
- Safeguards infants from preventable infections during early developmental years.
- Helps build community immunity in school and childcare environments.
- Follows standard paediatric health schedules for optimal protection.
    `,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
