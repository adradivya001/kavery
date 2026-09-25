import { motion } from 'framer-motion';
import { Calendar, UserCheck, HeartPulse, ShieldCheck } from 'lucide-react';
import { useInView, useReducedMotion } from '@/hooks';

const EASE = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    step: 'Step 01',
    icon: Calendar,
    title: 'Easy Appointment',
    desc: 'Schedule a consultation at a time convenient for your family.',
  },
  {
    step: 'Step 02',
    icon: UserCheck,
    title: 'Paediatric Consultation',
    desc: "Meet the doctor and discuss your child's health concerns, symptoms or healthcare needs.",
  },
  {
    step: 'Step 03',
    icon: HeartPulse,
    title: 'Personalized Care',
    desc: "Receive appropriate medical guidance based on your child's individual needs.",
  },
  {
    step: 'Step 04',
    icon: ShieldCheck,
    title: 'Follow-Up Support',
    desc: "Continue your child's healthcare journey with appropriate follow-up and guidance.",
  },
];

export function PatientJourney() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  return (
    <section id="journey" ref={ref} className="section" aria-labelledby="journey-heading" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 4vw, 4rem)' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>YOUR CHILD'S CARE JOURNEY</div>
          <h2 id="journey-heading" style={{
            fontFamily: 'Fraunces, Georgia, serif',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700,
            lineHeight: 1.12, letterSpacing: '-0.02em', color: 'var(--text)', maxWidth: 600, margin: '0 auto',
          }}>
            What to Expect{' '}
            <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>On Your Visit</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                style={{
                  background: 'var(--bg-alt)',
                  borderRadius: 24,
                  padding: '1.75rem 1.25rem',
                  border: '1px solid var(--border)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--primary)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {s.step}
                </div>

                <div style={{ width: 46, height: 46, borderRadius: 14, background: 'var(--primary-bg)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <Icon size={22} />
                </div>

                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.6, flexGrow: 1 }}>
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
