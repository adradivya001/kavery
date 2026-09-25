import { motion } from 'framer-motion';
import { BedDouble, MapPin, Stethoscope, Users, CheckCircle2, Baby, ShieldCheck } from 'lucide-react';
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
        <div className="grid-2" style={{ alignItems: 'center' }}>
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

          {/* Right Column: Navy Card & Floating Badge (Matching Yashoda UI Frame) */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            style={{ position: 'relative' }}
          >
            {/* Navy card */}
            <div style={{
              borderRadius: 28, overflow: 'hidden',
              background: 'linear-gradient(145deg, #17324D 0%, #0E2135 100%)',
              border: '1px solid rgba(255,255,255,0.06)',
              boxShadow: 'var(--shadow-xl)',
              padding: '2.5rem',
              position: 'relative',
            }}>
              {/* Decorative circle */}
              <div aria-hidden="true" style={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.06), transparent 70%)', pointerEvents: 'none' }} />
              <div aria-hidden="true" style={{ position: 'absolute', bottom: -30, left: -20, width: 140, height: 140, borderRadius: '50%', background: 'radial-gradient(circle, rgba(22,119,168,0.2), transparent 70%)', pointerEvents: 'none' }} />

              {/* Icon box */}
              <div style={{
                width: 64, height: 64, borderRadius: 18,
                background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem',
              }}>
                <Baby size={32} color="#69C1DC" />
              </div>

              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.5rem', fontWeight: 600, color: 'white', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                Compassionate, Family-Centered Care
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, fontSize: '0.9375rem', marginBottom: '2rem' }}>
                A team of qualified doctors and management working together to provide the best healthcare experience for your children.
              </p>

              <div style={{ display: 'flex', gap: 20, paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                {[{ v: '24/7', l: 'Care' }, { v: 'Multi', l: 'Speciality' }, { v: 'AP', l: 'Registered' }].map(({ v, l }) => (
                  <div key={l}>
                    <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.35rem', fontWeight: 700, color: 'white' }}>{v}</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 16, rotate: -2 }}
              animate={inView ? { opacity: 1, y: 0, rotate: -2 } : {}}
              transition={{ duration: 0.5, delay: 0.45, ease: EASE }}
              style={{
                position: 'absolute', bottom: -18, left: -18,
                background: 'white', borderRadius: 18, padding: '14px 18px',
                border: '1px solid var(--border)', boxShadow: 'var(--shadow-xl)',
                display: 'flex', alignItems: 'center', gap: 12,
              }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 11, background: 'linear-gradient(135deg, #1677A8, #105B82)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(22,119,168,0.3)' }}>
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
