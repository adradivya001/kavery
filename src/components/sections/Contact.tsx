import { motion } from 'framer-motion';
import { MapPin, Phone, MessageSquare, Clock, Navigation } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { useInView, useReducedMotion } from '@/hooks';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  return (
    <section id="contact" ref={ref} className="section" aria-labelledby="contact-heading" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 4vw, 4rem)' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>FIND US IN ANANTAPUR</div>
          <h2 id="contact-heading" style={{
            fontFamily: 'Fraunces, Georgia, serif',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700,
            lineHeight: 1.12, letterSpacing: '-0.02em', color: 'var(--text)', maxWidth: 600, margin: '0 auto',
          }}>
            Conveniently Located{' '}
            <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>For Your Family</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28, alignItems: 'stretch' }}>
          {/* Address Details */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            style={{
              background: 'var(--bg-alt)',
              borderRadius: 28,
              padding: '2.5rem 2rem',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: 'var(--primary-bg)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)' }}>
                    Sri Kavery Hospital
                  </h3>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--primary)', fontWeight: 700 }}>Paediatric & Multi-Speciality</span>
                </div>
              </div>

              <div style={{ fontSize: '0.975rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 24 }}>
                <strong style={{ color: 'var(--text)' }}>Address:</strong><br />
                {siteConfig.name}<br />
                {siteConfig.contact.address.street}<br />
                {siteConfig.contact.address.landmark}<br />
                {siteConfig.contact.address.city}, {siteConfig.contact.address.state} – {siteConfig.contact.address.postalCode}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9375rem', color: 'var(--text)', marginBottom: 12 }}>
                <Phone size={18} color="var(--primary)" />
                <span>Phone: <strong>{siteConfig.contact.phoneDisplay}</strong></span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9375rem', color: 'var(--text)' }}>
                <Clock size={18} color="var(--secondary-dark)" />
                <span>Operating Hours: <strong>24 Hours / 24/7 Availability</strong></span>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 30, paddingTop: 20, borderTop: '1px solid var(--border)' }}>
              <a
                href={siteConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ borderRadius: 22, padding: '10px 18px', fontSize: '0.875rem' }}
              >
                <Navigation size={15} />
                Get Directions
              </a>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="btn btn-ghost"
                style={{ borderRadius: 22, padding: '10px 18px', fontSize: '0.875rem', border: '1px solid var(--border-strong)' }}
              >
                <Phone size={15} color="var(--primary)" />
                Call Hospital
              </a>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ borderRadius: 22, padding: '10px 18px', fontSize: '0.875rem', border: '1px solid var(--border-strong)', color: '#16A34A' }}
              >
                <MessageSquare size={15} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* Map Facade / Embed */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            style={{ borderRadius: 28, overflow: 'hidden', border: '1px solid var(--border)', minHeight: 360 }}
          >
            <iframe
              title="Sri Kavery Paediatric Hospital Location Map"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 380, width: '100%', height: '100%' }}
              loading="lazy"
              allowFullScreen
              src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.contact.mapQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
