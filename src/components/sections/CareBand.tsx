import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { siteConfig } from '@/content/site.config';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function CareBand() {
  return (
    <section
      id="care-quote"
      style={{
        background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)',
        color: 'white',
        padding: 'clamp(3rem, 5vw, 4.5rem) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 760, margin: '0 auto' }}
        >
          <blockquote style={{
            fontFamily: 'Fraunces, Georgia, serif',
            fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)',
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: '-0.02em',
            marginBottom: '1.25rem',
            fontStyle: 'italic',
          }}>
            “Every child deserves compassionate care, every step of the way.”
          </blockquote>

          <p style={{
            fontSize: 'clamp(1rem, 1.2vw, 1.125rem)',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '2rem',
            lineHeight: 1.6,
          }}>
            At Sri Kavery, we believe healthcare should give children confidence and parents peace of mind.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
            <button
              onClick={() => scrollTo('appointment')}
              style={{
                background: 'white',
                color: 'var(--primary-dark)',
                padding: '14px 28px',
                borderRadius: 30,
                fontSize: '1rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
              }}
            >
              Book an Appointment
              <ArrowRight size={18} />
            </button>

            <a
              href={`tel:${siteConfig.contact.phone}`}
              style={{
                background: 'rgba(255,255,255,0.15)',
                color: 'white',
                padding: '14px 24px',
                borderRadius: 30,
                fontSize: '1rem',
                fontWeight: 600,
                border: '1px solid rgba(255,255,255,0.3)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <Phone size={18} />
              Call Us: {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
