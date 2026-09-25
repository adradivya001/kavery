import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, ShieldCheck, Stethoscope, Baby, HeartPulse, User } from 'lucide-react';
import { doctors, Doctor } from '@/content/doctors';
import { useInView, useReducedMotion } from '@/hooks';

const EASE = [0.22, 1, 0.36, 1] as const;

function getDoctorIcon(slug: string) {
  if (slug.includes('karthik') || slug.includes('paediatric')) return Baby;
  if (slug.includes('dhanunjaya') || slug.includes('physician')) return Stethoscope;
  if (slug.includes('manager') || slug.includes('tarun')) return User;
  return HeartPulse;
}

export function Doctors() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="doctors"
      ref={ref}
      aria-labelledby="doctors-heading"
      style={{
        padding: 'clamp(4rem, 8vh, 6rem) 0',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F8FC 100%)',
      }}
    >
      <div className="container" style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(1.25rem, 3vw, 2.5rem)' }}>
        {/* Section Header */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '6px 16px', borderRadius: 100, background: 'var(--primary-bg)', border: '1px solid var(--primary-border)',
            fontSize: '0.8125rem', fontWeight: 700, color: 'var(--primary)', marginBottom: 12,
          }}>
            <ShieldCheck size={15} color="var(--primary)" /> Dedicated Medical & Paediatric Specialists
          </div>

          <h2 id="doctors-heading" style={{
            fontFamily: 'Fraunces, Georgia, serif',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700,
            lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--navy)',
            maxWidth: 680, margin: '0 auto',
          }}>
            Meet the Experts{' '}
            <span style={{
              color: 'var(--primary)',
              fontStyle: 'italic',
            }}>
              Behind Your Child's Health
            </span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginTop: '0.875rem', maxWidth: 580, margin: '0.875rem auto 0', lineHeight: 1.6 }}>
            Consult with experienced paediatricians, physicians, and clinical administration providing compassionate, family-centered medical care.
          </p>
        </motion.div>

        {/* Doctor Grid Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '24px',
        }}>
          {doctors.map((doctor: Doctor, i: number) => {
            const DoctorIcon = getDoctorIcon(doctor.slug);
            const hasPhoto = Boolean(doctor.photo);

            return (
              <motion.div
                key={doctor.slug}
                initial={reducedMotion ? false : { opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                whileHover={reducedMotion ? {} : { y: -6, boxShadow: '0 20px 40px -15px rgba(22, 119, 168, 0.16)' }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 250ms ease',
                }}
              >
                {/* Top Image Frame */}
                <div style={{
                  position: 'relative',
                  height: '280px',
                  background: hasPhoto ? '#F0F8FC' : 'linear-gradient(135deg, #17324D 0%, #28496C 100%)',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {hasPhoto ? (
                    <img
                      src={doctor.photo}
                      alt={doctor.photoAlt}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                    />
                  ) : (
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                      <div style={{
                        width: '72px', height: '72px', borderRadius: '50%',
                        background: 'rgba(255,255,255,0.12)',
                        border: '2px solid rgba(255,255,255,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 10px',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                      }}>
                        <DoctorIcon size={34} color="#69C1DC" />
                      </div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.8)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        Sri Kavery Hospital Faculty
                      </div>
                    </div>
                  )}

                  {/* Top-Left Floating Badge: Speciality */}
                  <div style={{ position: 'absolute', top: 14, left: 14 }}>
                    <span style={{
                      display: 'inline-block', padding: '6px 14px', borderRadius: '100px',
                      background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)',
                      fontSize: '0.75rem', fontWeight: 750, color: '#1677A8',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
                      border: '1px solid rgba(226, 236, 243, 0.8)',
                    }}>
                      {doctor.speciality}
                    </span>
                  </div>

                  {/* Top-Right Floating Badge: Registration */}
                  {doctor.apmcReg && (
                    <div style={{ position: 'absolute', top: 14, right: 14 }}>
                      <span style={{
                        display: 'inline-block', padding: '5px 12px', borderRadius: '100px',
                        background: 'rgba(23, 50, 77, 0.88)', backdropFilter: 'blur(8px)',
                        fontSize: '0.72rem', fontWeight: 650, color: '#EBF7FA',
                        border: '1px solid rgba(255,255,255,0.2)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
                      }}>
                        {doctor.apmcReg}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Content Body */}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Doctor Name */}
                  <h3 style={{
                    fontFamily: 'Fraunces, Georgia, serif',
                    fontSize: '1.3rem', fontWeight: 700, color: 'var(--navy)',
                    margin: '0 0 4px 0', lineHeight: 1.3,
                  }}>
                    {doctor.name}
                  </h3>

                  {/* Designation */}
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '6px' }}>
                    {doctor.designation}
                  </div>

                  {/* Qualifications */}
                  <div style={{
                    fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.5,
                    marginBottom: '16px', paddingBottom: '14px', borderBottom: '1px solid var(--border-light)',
                    minHeight: '38px',
                  }}>
                    {doctor.qualifications}
                  </div>

                  {/* Focus Area Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
                    {doctor.focusAreas.map((area: string) => (
                      <span key={area} style={{
                        padding: '5px 11px', borderRadius: '8px',
                        fontSize: '0.75rem', fontWeight: 600,
                        background: 'var(--navy-bg)', color: 'var(--navy)',
                        border: '1px solid var(--border)',
                      }}>
                        {area}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons Row */}
                  <div style={{ display: 'flex', gap: '10px', marginTop: 'auto', paddingTop: '8px' }}>
                    <a
                      href={`/#appointment?doctor=${doctor.slug}`}
                      id={`book-${doctor.slug}`}
                      style={{
                        flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        gap: '6px', padding: '12px 18px', borderRadius: '14px',
                        background: 'linear-gradient(135deg, #1677A8 0%, #105B82 100%)',
                        color: '#FFFFFF', fontSize: '0.875rem', fontWeight: 700,
                        textDecoration: 'none', textAlign: 'center',
                        boxShadow: '0 4px 14px rgba(22, 119, 168, 0.28)',
                        transition: 'all 180ms ease',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(22, 119, 168, 0.38)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 14px rgba(22, 119, 168, 0.28)';
                      }}
                    >
                      {doctor.appointmentLabel}
                    </a>

                    <Link
                      to={`/doctors/${doctor.slug}`}
                      style={{
                        width: '46px', height: '46px', borderRadius: '14px',
                        background: 'var(--bg-alt)', border: '1.5px solid var(--border)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'var(--text-muted)', textDecoration: 'none', flexShrink: 0,
                        transition: 'all 180ms ease',
                      }}
                      aria-label={`View full profile of ${doctor.name}`}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)';
                        (e.currentTarget as HTMLElement).style.color = 'var(--primary)';
                        (e.currentTarget as HTMLElement).style.background = 'var(--primary-bg)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                        (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)';
                        (e.currentTarget as HTMLElement).style.background = 'var(--bg-alt)';
                      }}
                    >
                      <ExternalLink size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
