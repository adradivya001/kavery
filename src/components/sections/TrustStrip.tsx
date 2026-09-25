import { motion } from 'framer-motion';
import { Baby, Stethoscope, Clock, MapPin, ChevronRight } from 'lucide-react';
import { useInView, useReducedMotion } from '@/hooks';

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  {
    icon: Stethoscope,
    title: 'General Medicine',
    sub: 'Adult & family healthcare',
    color: '#0284C7',
    bg: '#F0F9FF',
    border: '#E0F2FE',
    targetId: 'specialities',
  },
  {
    icon: Baby,
    title: 'Specialized Paediatrics',
    sub: 'Dedicated child healthcare',
    color: '#E11D48',
    bg: '#FFF0F2',
    border: '#FFE4E8',
    targetId: 'specialities',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    sub: 'Emergency & inpatient care',
    color: '#16A34A',
    bg: '#F0FDF4',
    border: '#DCFCE7',
    targetId: 'contact',
  },
  {
    icon: MapPin,
    title: 'Anantapur Center',
    sub: 'Srikantam Circle, Bus Stand Rd',
    color: '#7C3AED',
    bg: '#F5F3FF',
    border: '#EDE9FE',
    targetId: 'contact',
  },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function TrustStrip() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      id="trust-strip"
      aria-label="Hospital quick stats"
      style={{
        padding: '1.75rem 0',
        background: 'var(--bg-alt)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 16,
            alignItems: 'center',
          }}
        >
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.08, ease: EASE }}
                whileHover={reducedMotion ? {} : { y: -3 }}
                onClick={() => scrollTo(item.targetId)}
                style={{
                  background: 'white',
                  borderRadius: 20,
                  padding: '16px 20px',
                  border: '1px solid var(--border)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 14,
                  cursor: 'pointer',
                  transition: 'all 240ms var(--ease-out)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, overflow: 'hidden' }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: item.bg,
                      border: `1px solid ${item.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} color={item.color} />
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <div
                      style={{
                        fontFamily: 'Fraunces, Georgia, serif',
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: 'var(--text)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontSize: '0.8125rem',
                        color: 'var(--text-muted)',
                        marginTop: 2,
                        lineHeight: 1.3,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {item.sub}
                    </div>
                  </div>
                </div>

                <ChevronRight size={18} style={{ color: '#94A3B8', flexShrink: 0 }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
