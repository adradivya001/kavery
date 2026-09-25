import { motion } from 'framer-motion';
import { BedDouble, MapPin, Stethoscope, Users, CheckCircle2, Baby, ShieldCheck, Play, HeartPulse, Activity } from 'lucide-react';
import { useInView, useReducedMotion } from '@/hooks';
import kaveryHeroImg from '@/assets/kavery-hero.png';

const EASE = [0.22, 1, 0.36, 1] as const;

const checkmarks = [
  'General Medicine & Physician Consultations',
  'Specialized Paediatric & Neonatal Care',
  'Chronic Illness & Health Monitoring',
  '24/7 Emergency & Inpatient Facilities',
];

const pillars = [
  { icon: Stethoscope, label: 'General Medicine',    desc: 'Adult primary healthcare & physician care' },
  { icon: Baby,        label: 'Specialized Child Care', desc: 'Expert paediatricians & dedicated child wing' },
  { icon: Activity,    label: 'Multi-Speciality Care',  desc: 'Emergency, fever clinic & diagnostics' },
  { icon: MapPin,      label: 'Srikantam Circle',     desc: 'RTC Bus-stand Road, central Anantapur' },
];

export function About() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      ref={ref}
      className="section"
      aria-labelledby="about-heading"
      style={{ background: 'var(--bg-alt)' }}
    >
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center', gap: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
          {/* Left Column: Hospital Introduction */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="section-label">ABOUT SRI KAVERY HOSPITAL</div>
            <h2 id="about-heading" style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 'clamp(2rem, 3.5vw, 3.25rem)', fontWeight: 700,
              lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: '1.25rem',
            }}>
              Comprehensive Family Care,{' '}
              <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Specialized for Children</span>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '1rem' }}>
              Sri Kavery Paediatric & Multi-Speciality Hospital is an advanced healthcare facility in Anantapur providing comprehensive General Medicine, Physician consultations, and family healthcare alongside a dedicated Centre of Excellence for Paediatric and child care.
            </p>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
              From adult primary care, hypertension, and chronic disease management to specialized newborn care, childhood illnesses, and pediatric emergencies, we combine experienced medical specialists with compassionate care for all age groups.
            </p>

            {/* Checkmarks Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: '2rem' }}>
              {checkmarks.map((h) => (
                <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <CheckCircle2 size={16} color="var(--primary)" />
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)' }}>{h}</span>
                </div>
              ))}
            </div>

            {/* Pillars Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {pillars.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08, ease: EASE }}
                  style={{
                    padding: '14px 16px', borderRadius: 16,
                    background: 'white', border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow-xs)',
                    transition: 'box-shadow 250ms, transform 250ms',
                  }}
                  whileHover={reducedMotion ? {} : { y: -2, boxShadow: 'var(--shadow-md)' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--primary-bg)', border: '1px solid var(--primary-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={14} color="var(--primary)" />
                    </div>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text)' }}>{label}</span>
                  </div>
                  <p style={{ fontSize: '0.775rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Portrait Video Showcase & Floating Badges */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              padding: '1.5rem 0',
            }}
          >
            {/* Hospital Image Card Frame */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '480px',
              height: 'clamp(480px, 58vh, 580px)',
              borderRadius: '32px',
              overflow: 'hidden',
              background: '#071320',
              border: '4px solid rgba(255, 255, 255, 0.95)',
              boxShadow: '0 24px 64px -12px rgba(22, 119, 168, 0.35), 0 8px 24px rgba(23, 50, 77, 0.2)',
            }}>
              {/* Hospital Image */}
              <img
                src={kaveryHeroImg}
                alt="Sri Kavery Hospital Building"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 35%',
                  display: 'block',
                }}
              />

              {/* Floating Video Tour Tag */}
              <div style={{
                position: 'absolute',
                top: 16,
                left: 16,
                pointerEvents: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 14px',
                borderRadius: 100,
                background: 'rgba(23, 50, 77, 0.88)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#FFFFFF',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.03em',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              }}>
                <MapPin size={11} color="#4AA9C8" /> Sri Kavery Hospital, Anantapur
              </div>
            </div>

            {/* Floating Badge 1: Specialist Doctors */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 18, x: -10 }}
              animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45, ease: EASE }}
              style={{
                position: 'absolute',
                bottom: '10px',
                left: 'clamp(-20px, -2vw, 0px)',
                background: 'white',
                borderRadius: 20,
                padding: '14px 18px',
                border: '1px solid var(--border)',
                boxShadow: '0 16px 36px rgba(23, 50, 77, 0.16)',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                zIndex: 2,
              }}
            >
              <div style={{
                width: 42, height: 42, borderRadius: 12,
                background: 'linear-gradient(135deg, #1677A8, #105B82)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, boxShadow: '0 4px 14px rgba(22,119,168,0.3)',
              }}>
                <Users size={20} color="white" />
              </div>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text)' }}>Specialist Doctors</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Physicians & Paediatricians</div>
              </div>
            </motion.div>

            {/* Floating Badge 2: 24/7 Active Care */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: -18, x: 10 }}
              animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55, ease: EASE }}
              style={{
                position: 'absolute',
                top: '20px',
                right: 'clamp(-20px, -2vw, 0px)',
                background: 'rgba(23, 50, 77, 0.94)',
                backdropFilter: 'blur(10px)',
                borderRadius: 18,
                padding: '10px 16px',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                zIndex: 2,
              }}
            >
              <div style={{
                width: 10, height: 10, borderRadius: '50%', background: '#22C55E',
                boxShadow: '0 0 10px #22C55E',
              }} />
              <div style={{ fontSize: '0.8125rem', fontWeight: 700 }}>24/7 General & Child OPD</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
