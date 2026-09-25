import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';
import kaveryLogo from '@/assets/logo/kavery_logo.png';
import { siteConfig } from '@/content/site.config';
import { specialities } from '@/content/specialities';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        background: 'var(--dark-bg)',
        color: 'var(--dark-text)',
        paddingTop: 'clamp(3rem, 6vw, 5rem)',
        paddingBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
      }}
    >
      <div className="container">
        {/* Top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 'clamp(2rem, 4vw, 3rem)',
          paddingBottom: '3rem',
          borderBottom: '1px solid var(--dark-border)',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '10px 16px',
              borderRadius: '16px',
              background: '#FFFFFF',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
              marginBottom: '1.25rem',
            }}>
              <img
                src={kaveryLogo}
                alt="Sri Kavery Hospital Logo"
                style={{ height: 50, width: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </div>

            <p style={{ color: 'var(--dark-text-muted)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: 300 }}>
              Compassionate paediatric and multi-speciality healthcare for children and families in Anantapur.
            </p>
            <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--dark-text-muted)', fontSize: '0.875rem' }}
              >
                <Phone size={15} style={{ color: '#69C1DC' }} />
                {siteConfig.contact.phoneDisplay}
              </a>
              <span style={{ display: 'flex', alignItems: 'flex-start', gap: 8, color: 'var(--dark-text-muted)', fontSize: '0.875rem' }}>
                <MapPin size={15} style={{ flexShrink: 0, marginTop: 2, color: '#69C1DC' }} />
                RTC Bus Stand Road, Srikantam Circle, Anantapur – 515001
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--dark-text)' }}>
              Quick Links
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, listStyle: 'none', padding: 0, margin: 0 }}>
              {['/', '/#about', '/#specialities', '/#doctors', '/#appointment', '/#contact'].map((href, i) => {
                const labels = ['Home', 'About', 'Specialities', 'Doctors', 'Appointments', 'Contact'];
                return (
                  <li key={href}>
                    <Link
                      to={href}
                      style={{ color: 'var(--dark-text-muted)', fontSize: '0.875rem', textDecoration: 'none' }}
                    >
                      {labels[i]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Patient Care */}
          <div>
            <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--dark-text)' }}>
              Patient Care
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, listStyle: 'none', padding: 0, margin: 0 }}>
              {['/#appointment', '/#doctors', '/#about', '/#faq'].map((href, i) => {
                const labels = ['Book Appointment', 'Doctor Consultation', 'Patient Information', 'FAQs'];
                return (
                  <li key={href}>
                    <Link
                      to={href}
                      style={{ color: 'var(--dark-text-muted)', fontSize: '0.875rem', textDecoration: 'none' }}
                    >
                      {labels[i]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--dark-text)' }}>
              Contact Us
            </h3>
            <div style={{ fontSize: '0.875rem', color: 'var(--dark-text-muted)', lineHeight: 1.7 }}>
              <p style={{ marginBottom: 12 }}>
                📍 <strong>Sri Kavery Paediatric & Multi-Speciality Hospital</strong><br />
                Srikantam Circle, RTC Bus Stand Road, Anantapur – 515001.
              </p>
              <p>
                📞 Phone: <strong style={{ color: '#F4B942' }}>093465 59426</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.8125rem',
          color: 'var(--dark-text-muted)',
        }}>
          <div>
            © {year} {siteConfig.name}. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/privacy" style={{ color: 'var(--dark-text-muted)', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link to="/terms" style={{ color: 'var(--dark-text-muted)', textDecoration: 'none' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
