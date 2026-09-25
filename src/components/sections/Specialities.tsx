import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Stethoscope, Baby, ShieldCheck, Hospital, HeartHandshake, Activity } from 'lucide-react';
import { specialities } from '@/content/specialities';
import { useInView, useReducedMotion } from '@/hooks';

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  Baby, ShieldCheck, Hospital, HeartHandshake, Stethoscope, Activity,
};
const EASE = [0.22, 1, 0.36, 1] as const;

export function Specialities() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();
  const activeSpec = specialities[active] || specialities[0];
  const Icon = iconMap[activeSpec.icon] ?? Baby;

  return (
    <section id="specialities" ref={ref} className="section" aria-labelledby="spec-heading" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>OUR SPECIALITIES</div>
          <h2 id="spec-heading" style={{
            fontFamily: 'Fraunces, Georgia, serif',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700,
            lineHeight: 1.12, letterSpacing: '-0.02em', color: 'var(--text)', maxWidth: 600, margin: '0 auto',
          }}>
            Specialized Care for{' '}
            <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Growing Families</span>
          </h2>
          <p style={{ marginTop: 12, color: 'var(--text-muted)', fontSize: '0.975rem', maxWidth: 640, margin: '12px auto 0', lineHeight: 1.7 }}>
            From everyday childhood healthcare to specialized medical support, our care approach focuses on making every visit comfortable, accessible and reassuring for children and parents.
          </p>
        </motion.div>

        {/* Layout Grid */}
        <div className="spec-desktop" style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 28, alignItems: 'start' }}>
          {/* List panel */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE }}
            style={{ background: 'white', borderRadius: 22, padding: 8, border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' }}
            role="listbox" aria-label="Select a speciality"
          >
            {specialities.map((spec, i) => (
              <div
                key={spec.slug}
                role="option" aria-selected={active === i}
                tabIndex={0}
                onClick={() => setActive(i)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActive(i); }}
                className={`spec-list-item ${active === i ? 'active' : ''}`}
                style={{
                  padding: '12px 16px',
                  borderRadius: 14,
                  cursor: 'pointer',
                  marginBottom: 4,
                  background: active === i ? 'var(--primary)' : 'transparent',
                  color: active === i ? 'white' : 'var(--text)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontWeight: active === i ? 700 : 500,
                  transition: 'all 200ms',
                }}
              >
                <span style={{ fontSize: '0.95rem' }}>{spec.name}</span>
                <ChevronRight size={16} color={active === i ? 'white' : 'var(--primary)'} style={{ opacity: active === i ? 1 : 0.4 }} />
              </div>
            ))}
          </motion.div>

          {/* Detail panel */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE }}
            style={{ position: 'sticky', top: 90 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28, ease: EASE }}
                style={{
                  background: 'white', borderRadius: 28,
                  padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                  border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)',
                  position: 'relative', overflow: 'hidden',
                }}
              >
                {/* Top accent strip */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #1677A8, #4AA9C8, #F4B942)', borderRadius: '28px 28px 0 0' }} />

                <div style={{ width: 60, height: 60, borderRadius: 16, background: 'var(--primary-bg)', border: '1px solid var(--primary-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Icon size={28} color="var(--primary)" />
                </div>

                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: 'var(--text)', marginBottom: '0.875rem', lineHeight: 1.2 }}>
                  {activeSpec.name}
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '1.375rem', fontSize: '0.975rem' }}>
                  {activeSpec.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '2rem' }}>
                  {activeSpec.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '4px 12px',
                        borderRadius: 20,
                        background: 'var(--primary-bg)',
                        border: '1px solid var(--primary-border)',
                        color: 'var(--primary)',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn btn-primary"
                  style={{ borderRadius: 24, padding: '12px 24px' }}
                >
                  Explore {activeSpec.name}
                </button>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
