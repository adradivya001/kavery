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
          {/* Left Column */}
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

          {/* Right Column: Hospital Video Player Card & Floating Badge */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            style={{ position: 'relative' }}
          >
            {/* Navy Card with Video Player */}
            <div style={{
              borderRadius: 28, overflow: 'hidden',
              background: 'linear-gradient(145deg, #17324D 0%, #0E2135 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 24px 60px rgba(23, 50, 77, 0.25)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
            }}>
              {/* Video Player Box */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '300px',
                background: '#071320',
                overflow: 'hidden',
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
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                {/* Floating Video Overlay Tag */}
                <div style={{
                  position: 'absolute',
                  top: 14,
                  left: 14,
                  pointerEvents: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '5px 12px',
                  borderRadius: 100,
                  background: 'rgba(23, 50, 77, 0.85)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#FFFFFF',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.03em',
                }}>
                  <Play size={11} fill="#4AA9C8" color="#4AA9C8" /> Hospital Tour & Facilities
                </div>
              </div>

              {/* Video Card Body Info */}
              <div style={{ padding: '2rem 2rem 2.25rem' }}>
                <h3 style={{
                  fontFamily: 'Fraunces, Georgia, serif',
                  fontSize: '1.45rem', fontWeight: 700,
                  color: 'white', marginBottom: '0.6rem', lineHeight: 1.3,
                }}>
                  Compassionate, Family-Centered Care
                </h3>
                <p style={{
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.75,
                  fontSize: '0.92rem',
                  marginBottom: '1.5rem',
                }}>
                  A team of qualified doctors and management working together to provide the best healthcare experience for your children.
                </p>

                <div style={{
                  display: 'flex',
                  gap: 24,
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                }}>
                  {[{ v: '24/7', l: 'Care' }, { v: 'Multi', l: 'Speciality' }, { v: 'AP', l: 'Registered' }].map(({ v, l }) => (
                    <div key={l}>
                      <div style={{
                        fontFamily: 'Fraunces, Georgia, serif',
                        fontSize: '1.4rem', fontWeight: 700,
                        color: '#69C1DC',
                      }}>{v}</div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 16, rotate: -2 }}
              animate={inView ? { opacity: 1, y: 0, rotate: -2 } : {}}
              transition={{ duration: 0.5, delay: 0.45, ease: EASE }}
              style={{
                position: 'absolute', bottom: -18, left: -18,
                background: 'white', borderRadius: 18, padding: '14px 18px',
                border: '1px solid var(--border)', boxShadow: 'var(--shadow-xl)',
                display: 'flex', alignItems: 'center', gap: 12,
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
                <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Paediatricians & Physicians</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
