import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { About } from '@/components/sections/About';
import { Specialities } from '@/components/sections/Specialities';
import { Doctors } from '@/components/sections/Doctors';
import { WhyChoose } from '@/components/sections/WhyChoose';
import { DigitalHealthSection } from '@/components/sections/DigitalHealthSection';
import { CareBeyondVisit } from '@/components/sections/CareBeyondVisit';
import { CareBand } from '@/components/sections/CareBand';
import { PatientJourney } from '@/components/sections/PatientJourney';
import { Appointment } from '@/components/sections/Appointment';
import { Contact } from '@/components/sections/Contact';
import { BlogPreview } from '@/components/sections/BlogPreview';
import { FAQ } from '@/components/sections/FAQ';
import { siteConfig } from '@/content/site.config';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Sri Kavery Paediatric & Multi Speciality Hospital | Anantapur</title>
        <meta name="description" content={siteConfig.description} />
        <link rel="canonical" href={siteConfig.seo.siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.seo.siteUrl} />
        <meta property="og:title" content={`${siteConfig.name} | ${siteConfig.tagline}`} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content={`${siteConfig.seo.siteUrl}/assets/hero-paediatric.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Hospital',
          name: siteConfig.name,
          url: siteConfig.seo.siteUrl,
          telephone: siteConfig.contact.phone,
          address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.contact.address.street,
            addressLocality: siteConfig.contact.address.city,
            addressRegion: siteConfig.contact.address.state,
            addressCountry: siteConfig.contact.address.country,
          },
          areaServed: 'Anantapur',
          medicalSpecialty: [
            'Paediatrics',
            'Newborn & Infant Care',
            'Vaccination & Immunization',
            'Paediatric Emergency Care',
            'General Medicine',
            'Gynaecology',
          ],
        })}</script>
      </Helmet>

      <Hero />
      <TrustStrip />
      <About />
      <Specialities />
      <WhyChoose />
      <Doctors />
      <CareBeyondVisit />
      <CareBand />
      <PatientJourney />
      <Appointment />
      <Contact />
      {siteConfig.features.showBlog && <BlogPreview />}
      {siteConfig.features.showFAQ && <FAQ />}
    </>
  );
}
