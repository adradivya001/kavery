import { useInView, useReducedMotion } from '@/hooks';
import { motion } from 'framer-motion';
import { Baby, Stethoscope, Heart, MapPin, Clock } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as const;

const whyItems = [
  {
    number: '01',
    icon: Baby,
    title: 'Child-Centered Care',
    desc: 'Healthcare with special attention to the comfort and needs of children.',
    color: '#1677A8',
  },
  {
    number: '02',
    icon: Stethoscope,
    title: 'Paediatric Focus',
    desc: "A healthcare environment centered around children's medical needs.",
    color: '#4AA9C8',
  },
  {
    number: '03',
    icon: Heart,
    title: 'Compassionate Approach',
    desc: 'A supportive experience for both children and their parents.',
    color: '#F4B942',
  },
  {
    number: '04',
    icon: MapPin,
    title: 'Accessible Location',
    desc: 'Conveniently located near the RTC Bus Stand in Anantapur.',
    color: '#17324D',
  },
  {
    number: '05',
    icon: Clock,
    title: '24/7 Availability',
    desc: 'Hospital availability throughout the day and night.',
    color: '#16A34A',
  },
];

export function WhyChoose() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  return (
    <section id="why-choose" ref={ref} className="section" aria-labelledby="why-heading" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>WHY FAMILIES CHOOSE US</div>
          <h2 id="why-heading" style={{
            fontFamily: 'Fraunces, Georgia, serif',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700,
            lineHeight: 1.12, letterSpacing: '-0.02em', color: 'var(--text)', maxWidth: 620, margin: '0 auto',
          }}>
            Care That Puts{' '}
            <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Families First</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 18 }}>
          {whyItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={reducedMotion ? false : { opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                whileHover={reducedMotion ? {} : { y: -5 }}
                style={{ cursor: 'default' }}
              >
                <div style={{
                  background: 'white', borderRadius: 20,
                  padding: '1.5rem 1.25rem', border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)', height: '100%',
                  transition: 'all 280ms var(--ease-out)',
                  position: 'relative', overflow: 'hidden',
                  display: 'flex', flexDirection: 'column',
                }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: item.color }} />

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: `${item.color}15`, color: item.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={20} />
                    </div>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 800, color: item.color, opacity: 0.8 }}>
                      {item.number}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.125rem', fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.6, flexGrow: 1 }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
