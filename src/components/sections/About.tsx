import { motion } from 'framer-motion';
import { BedDouble, MapPin, Stethoscope, Users, CheckCircle2, Baby, ShieldCheck, Play } from 'lucide-react';
import { useInView, useReducedMotion } from '@/hooks';

const EASE = [0.22, 1, 0.36, 1] as const;

const checkmarks = [
  'Paediatric Care & Consultation',
  'Child-Focused Healthcare',
  'Multi-Speciality Medical Care',
  'Family-Centered Patient Support',
];

const pillars = [
  { icon: Baby,         label: 'Child-Focused Care', desc: 'Designed around children & families' },
  { icon: Stethoscope,  label: 'Multi-Speciality',   desc: 'Paediatric & general medical care' },
  { icon: MapPin,       label: 'Srikantam Circle',  desc: 'RTC Bus-stand Road, Anantapur' },
  { icon: ShieldCheck,  label: 'Family-Centered',    desc: 'Supportive care for parents & kids' },
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
            <div className="section-label">ABOUT THE HOSPITAL</div>
            <h2 id="about-heading" style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 'clamp(2rem, 3.5vw, 3.25rem)', fontWeight: 700,
              lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: '1.25rem',
            }}>
              Healthcare Built Around{' '}
              <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Every Little Heart</span>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '1rem' }}>
              Sri Kavery Paediatric & Multi-Speciality Hospital is a child-focused healthcare facility in Anantapur dedicated to providing compassionate medical care for children and families.
            </p>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Located at Srikantam Circle on RTC Bus Stand Road, the hospital is positioned to provide accessible healthcare in the heart of Anantapur, with paediatric care at the center of its healthcare identity.
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

          {/* Right Column: Dedicated Video Player & Highlights */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative' }}
          >
            {/* 1. High-Quality Video Tour Card */}
            <div style={{
              borderRadius: 24,
              overflow: 'hidden',
              background: '#071320',
              border: '1px solid rgba(22, 119, 168, 0.25)',
              boxShadow: '0 20px 50px rgba(23, 50, 77, 0.22)',
              position: 'relative',
              width: '100%',
            }}>
              <video
                src="/assets/kavery_hospital_combined.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '16/9',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* 2. Key Highlights Card */}
            <div style={{
              borderRadius: 24,
              background: 'linear-gradient(145deg, #17324D 0%, #0E2135 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 12px 36px rgba(23, 50, 77, 0.18)',
              padding: '1.75rem 2rem',
              color: '#FFFFFF',
              position: 'relative',
            }}>
              <h3 style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontSize: '1.35rem', fontWeight: 700,
                color: '#FFFFFF', marginBottom: '0.4rem', lineHeight: 1.3,
              }}>
                Compassionate, Family-Centered Care
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.72)',
                lineHeight: 1.65,
                fontSize: '0.875rem',
                margin: '0 0 1.25rem 0',
              }}>
                A dedicated team of qualified paediatricians, physicians, and management providing the highest standard of healthcare for children.
              </p>

              {/* Metrics Strip */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 16,
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(255,255,255,0.1)',
              }}>
                <div>
                  <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.35rem', fontWeight: 700, color: '#4AA9C8' }}>24/7</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>Care</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.35rem', fontWeight: 700, color: '#4AA9C8' }}>Multi</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>Speciality</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.35rem', fontWeight: 700, color: '#4AA9C8' }}>AP</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>Registered</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
