import { motion } from 'framer-motion';
import { User, Calendar, Phone, ShieldCheck } from 'lucide-react';
import { doctors } from '@/content/doctors';
import { useInView, useReducedMotion } from '@/hooks';

const EASE = [0.22, 1, 0.36, 1] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Doctors() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  return (
    <section id="doctors" ref={ref} className="section" aria-labelledby="doctors-heading" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>OUR MEDICAL & MANAGEMENT TEAM</div>
          <h2 id="doctors-heading" style={{
            fontFamily: 'Fraunces, Georgia, serif',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700,
            lineHeight: 1.12, letterSpacing: '-0.02em', color: 'var(--text)', maxWidth: 640, margin: '0 auto',
          }}>
            Meet the Team{' '}
            <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Behind Your Care</span>
          </h2>
          <p style={{ marginTop: 12, color: 'var(--text-muted)', fontSize: '0.975rem', maxWidth: 600, margin: '12px auto 0' }}>
            Experienced doctors and administration dedicated to providing compassionate medical care for children and families.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 24, maxWidth: 1040, margin: '0 auto' }}>
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.slug}
              initial={reducedMotion ? false : { opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              whileHover={reducedMotion ? {} : { y: -5 }}
              style={{
                background: 'white',
                borderRadius: 24,
                padding: '2rem 1.5rem',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              {/* Avatar / Photo */}
              <div style={{
                width: 96, height: 96, borderRadius: '50%',
                background: 'var(--primary-bg)', border: '3px solid var(--primary-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden',
                color: 'var(--primary)', marginBottom: 16,
                boxShadow: '0 4px 14px rgba(22, 119, 168, 0.15)',
              }}>
                {doc.photo ? (
                  <img src={doc.photo} alt={doc.photoAlt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <User size={44} />
                )}
              </div>

              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>
                {doc.name}
              </h3>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--primary)', marginBottom: 6 }}>
                {doc.designation}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-faint)', marginBottom: 10 }}>
                {doc.qualifications}
              </div>

              {doc.phone && (
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.8125rem', fontWeight: 700, color: 'var(--secondary-dark)', background: 'var(--secondary-bg)', padding: '4px 10px', borderRadius: 12, marginBottom: 12 }}>
                  <Phone size={13} />
                  <span>{doc.phone}</span>
                </div>
              )}

              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 20, flexGrow: 1 }}>
                {doc.bio}
              </p>

              <div style={{ display: 'flex', gap: 10, width: '100%' }}>
                <button
                  onClick={() => scrollTo('appointment')}
                  className="btn btn-primary"
                  style={{ flex: 1, borderRadius: 20, padding: '10px 14px', fontSize: '0.84rem' }}
                >
                  <Calendar size={14} />
                  {doc.appointmentLabel}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
