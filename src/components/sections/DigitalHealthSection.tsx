import { useInView, useReducedMotion } from '@/hooks';
import { motion } from 'framer-motion';
import { Calendar, Smartphone, MapPin, MessageSquare, ShieldCheck, BarChart3, Users, Clock } from 'lucide-react';
import { siteConfig } from '@/content/site.config';

const EASE = [0.22, 1, 0.36, 1] as const;

export function DigitalHealthSection() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  const patientFeatures = (siteConfig as { digitalCapabilities?: { patientFeatures?: string[] } }).digitalCapabilities?.patientFeatures ?? [
    'Instant OPD & Specialist Doctor Appointment Booking',
    'Digital Prescription & Medical Records Access',
    'Vaccination Schedule & Immunization Reminders',
    'Direct WhatsApp Consultation & Hospital Assistance',
  ];
  const hospitalFeatures = (siteConfig as { digitalCapabilities?: { hospitalFeatures?: string[] } }).digitalCapabilities?.hospitalFeatures ?? [
    'Real-time OPD Token & Queue Management System',
    'Automated Patient Notifications & SMS Alerts',
    'Unified Doctor Consultation Scheduling Dashboard',
  ];

  return (
    <section id="digital-solutions" ref={ref} className="section" style={{ background: 'var(--navy-bg)' }}>
      <div className="container">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 4vw, 4rem)' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Smart Digital Care</div>
          <h2 style={{
            fontFamily: 'Fraunces, Georgia, serif',
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 700,
            lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--text)', maxWidth: 680, margin: '0 auto',
          }}>
            Seamless Digital Healthcare Experience for{' '}
            <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Parents & Hospital Operations</span>
          </h2>
          <p style={{ marginTop: 12, color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 640, margin: '12px auto 0' }}>
            Empowering parents with instant appointment booking and providing hospital administrators with modern digital clinic tools.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {/* Patient Digital Capabilities */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
            style={{
              background: 'white',
              borderRadius: 24,
              padding: '2rem',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: 'var(--primary-bg)', color: 'var(--primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Smartphone size={24} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)' }}>
                  Patient & Parent Features
                </h3>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Digital Convenience at your Fingertips</span>
              </div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {patientFeatures.map((feat, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.9375rem', color: 'var(--text)' }}>
                  <span style={{ color: 'var(--primary)', fontSize: '1.1rem', lineHeight: 1 }}>✔</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Hospital Digital Capabilities */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2, ease: EASE }}
            style={{
              background: 'white',
              borderRadius: 24,
              padding: '2rem',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: 'var(--secondary-bg)', color: 'var(--secondary-dark)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <BarChart3 size={24} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)' }}>
                  Hospital Management Suite
                </h3>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Automated Clinic & Patient Workflow</span>
              </div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {hospitalFeatures.map((feat, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.9375rem', color: 'var(--text)' }}>
                  <span style={{ color: 'var(--secondary-dark)', fontSize: '1.1rem', lineHeight: 1 }}>⚡</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
