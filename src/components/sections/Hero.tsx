import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, BedDouble, Phone, ShieldCheck, Activity,
  Stethoscope, Clock, MapPin, HeartPulse, UserCheck,
  CheckCircle2, Sparkles, ChevronRight, Zap, Heart
} from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { useReducedMotion } from '@/hooks';
import { trackEvent } from '@/lib/analytics';

import kaveryHeroImg from '@/assets/kavery-hero.png';
import doc1Img from '@/assets/doctors/doctor-paediatrician.png';
import doc2Img from '@/assets/doctors/doctor-specialist.png';
import managerImg from '@/assets/team/hospital-manager.png';

const EASE = [0.22, 1, 0.36, 1] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* Framer Variants */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } }
};

/* Specialty Ticker Item */
const tickerSpecialties = [
  'General Medicine & Adult Healthcare',
  'Specialized Paediatric Care',
  'Physician Consultations & Chronic Care',
  'Newborn, Infant & Child Health',
  'Fever Clinic & Preventive Health Checkups',
  '24/7 Emergency & Inpatient Support',
];

export function Hero() {
  const rm = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, rm ? 0 : 35]);

  /* Animated Specialty Ticker index */
  const [tickerIndex, setTickerIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex(prev => (prev + 1) % tickerSpecialties.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      aria-label="Hero Section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 60%, #F1F5F9 100%)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '86px',
        paddingBottom: '2rem',
      }}
    >
      {/* ══ PROFESSIONAL ARCHITECTURAL MEDICAL BACKGROUND ADD-ONS ══════════════ */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        
        {/* ADD-ON 1: Soft Ambient Mesh Glow Spheres */}
        <div style={{
          position: 'absolute', top: '-10%', right: '5%', width: '650px', height: '650px',
          background: 'radial-gradient(circle, rgba(22, 119, 168, 0.08) 0%, rgba(255,255,255,0) 70%)',
          borderRadius: '50%', filter: 'blur(50px)',
        }} />

        <div style={{
          position: 'absolute', bottom: '10%', left: '-5%', width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(74, 169, 200, 0.08) 0%, rgba(255,255,255,0) 70%)',
          borderRadius: '50%', filter: 'blur(50px)',
        }} />

        {/* ADD-ON 2: Concentric Medical Focus Rings behind Hospital Frame */}
        <motion.div
          animate={rm ? {} : { rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute', top: '12%', right: '5%', width: '580px', height: '580px',
            borderRadius: '50%', border: '1.5px dashed rgba(22, 119, 168, 0.12)',
          }}
        />
        <motion.div
          animate={rm ? {} : { rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute', top: '18%', right: '9%', width: '460px', height: '460px',
            borderRadius: '50%', border: '1px solid rgba(74, 169, 200, 0.12)',
          }}
        />

        {/* ADD-ON 3: Architectural Hexagonal / Medical Lattice Pattern Grid */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.035 }}>
          <pattern id="hex-grid" width="40" height="69.282" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 20 11.547 L 0 0 L 0 23.094 L 20 34.641 L 40 23.094 Z M 0 34.641 L 20 46.188 L 0 57.735 L 0 80.829 L 20 92.376 L 40 80.829 L 40 57.735 L 20 46.188 Z" fill="none" stroke="#0F172A" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hex-grid)" />
        </svg>

        {/* Top Brand Accent Gradient Bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
          background: 'linear-gradient(90deg, #1677A8 0%, #4AA9C8 50%, #F4B942 100%)'
        }} />
      </div>

      {/* ══ MAIN HERO CONTENT CONTAINER ═══════════════════════════════════ */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: 1340,
        margin: '0 auto',
        width: '100%',
        padding: 'clamp(1.5rem, 3vh, 3rem) clamp(1.25rem, 3vw, 2.5rem)',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 'clamp(2rem, 4vw, 3.5rem)',
          alignItems: 'center',
        }}>

          {/* ══ LEFT COLUMN: High-Contrast Copy & Action Hub (7 Cols) ═════════ */}
          <motion.div
            style={{ gridColumn: 'span 7' }}
            initial={rm ? false : 'hidden'}
            animate="visible"
            variants={containerVariants}
            className="hero-left-col"
          >
            {/* Live Hospital Badge */}
            <motion.div variants={itemVariants} style={{ marginBottom: '1.25rem' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '9px',
                padding: '7px 16px',
                borderRadius: '100px',
                background: '#F0F8FC',
                border: '1px solid #B8E2F5',
                boxShadow: '0 2px 8px rgba(22, 119, 168, 0.05)',
              }}>
                <motion.span
                  animate={rm ? {} : { scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    width: '9px',
                    height: '9px',
                    borderRadius: '50%',
                    background: '#22C55E',
                    boxShadow: '0 0 10px #22C55E',
                  }}
                />
                <span style={{ fontSize: '0.8125rem', fontWeight: 750, color: '#1677A8', letterSpacing: '0.01em' }}>
                  General Medicine & Specialized Paediatric Care in Anantapur
                </span>
                <span style={{ width: '1px', height: '14px', background: '#1677A830', margin: '0 2px' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 650, color: '#0284C7', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Zap size={12} color="#0284C7" /> 24/7 Care Ready
                </span>
              </div>
            </motion.div>

            {/* Dynamic Animated Specialty Ticker Bar */}
            <motion.div variants={itemVariants} style={{ marginBottom: '1.25rem' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '10px',
                background: '#F0F9FF',
                border: '1px solid #BAE6FD',
                color: '#0369A1',
                fontSize: '0.8125rem',
                fontWeight: 650,
              }}>
                <Sparkles size={14} color="#0284C7" />
                <span>Speciality Focus:</span>
                <div style={{ height: '20px', overflow: 'hidden', position: 'relative', width: '280px' }}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={tickerIndex}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      style={{ position: 'absolute', left: 0, top: 0, fontWeight: 750, color: '#1677A8', whiteSpace: 'nowrap' }}
                    >
                      {tickerSpecialties[tickerIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Headline H1 */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                fontSize: 'clamp(2.75rem, 4.5vw, 4.1rem)',
                fontWeight: 850,
                lineHeight: 1.1,
                letterSpacing: '-0.035em',
                color: '#0F172A',
                margin: '0 0 1.25rem 0',
              }}
            >
              Complete Family Healthcare.{' '}
              <span style={{
                background: 'linear-gradient(135deg, #1677A8 0%, #4AA9C8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}>
                Specialized Care for Children.
              </span>
            </motion.h1>

            {/* Subtitle Description */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1rem, 1.2vw, 1.125rem)',
                color: '#475569',
                lineHeight: 1.7,
                maxWidth: '580px',
                margin: '0 0 2.25rem 0',
                fontWeight: 450,
              }}
            >
              Providing expert General Medicine, Physician consultations, and adult primary care alongside Anantapur's dedicated, state-of-the-art Paediatric and newborn care center with 24/7 medical emergency response.
            </motion.p>

            {/* CTA Buttons Row */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '2.5rem',
              }}
            >
              {/* Primary Book Appointment Button */}
              <motion.button
                onClick={() => { trackEvent('cta_book_click'); scrollTo('appointment'); }}
                id="hero-book-btn"
                whileHover={rm ? {} : { scale: 1.03, y: -3, boxShadow: '0 18px 36px rgba(22, 119, 168, 0.4)' }}
                whileTap={rm ? {} : { scale: 0.97 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '16px 34px',
                  borderRadius: '16px',
                  border: 'none',
                  cursor: 'pointer',
                  background: 'linear-gradient(135deg, #1677A8 0%, #105B82 100%)',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  fontWeight: 750,
                  boxShadow: '0 10px 28px rgba(22, 119, 168, 0.3)',
                  fontFamily: 'Inter, system-ui, sans-serif',
                }}
              >
                Book an Appointment <ArrowRight size={18} />
              </motion.button>

              {/* Emergency Call Button */}
              <motion.a
                href={`tel:${siteConfig.contact.phone}`}
                onClick={() => trackEvent('cta_phone_click')}
                id="hero-call-btn"
                whileHover={rm ? {} : { scale: 1.02, y: -2, background: '#F8FAFC' }}
                whileTap={rm ? {} : { scale: 0.98 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '15px 26px',
                  borderRadius: '16px',
                  background: '#FFFFFF',
                  color: '#1E293B',
                  fontSize: '0.9375rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  border: '1.5px solid #CBD5E1',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                }}
              >
                <Phone size={18} color="#1677A8" />
                Call Emergency: {siteConfig.contact.phoneDisplay}
              </motion.a>
            </motion.div>

            {/* Doctor Avatars & Social Proof Pill */}
            <motion.div variants={itemVariants}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '14px',
                padding: '10px 18px',
                borderRadius: '18px',
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={doc1Img}
                    alt="Dr. P. Karthik"
                    style={{ width: '38px', height: '38px', borderRadius: '50%', border: '2.5px solid #FFFFFF', objectFit: 'cover' }}
                  />
                  <img
                    src={doc2Img}
                    alt="Dr. P. Dhanunjaya"
                    style={{ width: '38px', height: '38px', borderRadius: '50%', border: '2.5px solid #FFFFFF', objectFit: 'cover', marginLeft: '-12px' }}
                  />
                  <img
                    src={managerImg}
                    alt="Tarun Kumar Devarakonda"
                    style={{ width: '38px', height: '38px', borderRadius: '50%', border: '2.5px solid #FFFFFF', objectFit: 'cover', marginLeft: '-12px' }}
                  />
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '50%', background: '#17324D', color: '#FFFFFF',
                    fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '2.5px solid #FFFFFF', marginLeft: '-12px'
                  }}>
                    +3
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.2 }}>
                    Verified Specialist Medical Team
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                    <CheckCircle2 size={13} color="#16A34A" />
                    <span>MD Pediatrics, DNB General Medicine & Administration</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* ══ RIGHT COLUMN: Architectural Image Showcase Frame (5 Cols) ═════ */}
          <motion.div
            style={{ gridColumn: 'span 5' }}
            initial={rm ? false : { opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="hero-right-col"
          >
            {/* Outer Elevated White Frame Container */}
            <div style={{
              position: 'relative',
              borderRadius: '32px',
              padding: '10px',
              background: '#FFFFFF',
              boxShadow: '0 25px 60px -12px rgba(15, 23, 42, 0.18), 0 0 0 1px rgba(15, 23, 42, 0.08)',
            }}>
              {/* Inner Image Container */}
              <div style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                background: '#0F172A',
                aspectRatio: '4/4.5',
              }}>
                <img
                  src={kaveryHeroImg}
                  alt="Sri Kavery Paediatric and Multi Speciality Hospital Building"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />

                {/* Top Badge Overlay Row */}
                <div style={{
                  position: 'absolute', top: '16px', left: '16px', right: '16px',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  zIndex: 3,
                }}>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '8px 14px', borderRadius: '100px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(12px)',
                    color: '#0F172A', fontSize: '0.8125rem', fontWeight: 750,
                    boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
                  }}>
                    <BedDouble size={15} color="#1677A8" />
                    <span>Child Care Facility</span>
                  </div>

                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '8px 14px', borderRadius: '100px',
                    background: '#0E2135',
                    color: '#FFFFFF', fontSize: '0.8125rem', fontWeight: 750,
                    boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
                  }}>
                    <ShieldCheck size={15} color="#38BDF8" />
                    <span>Registered Care</span>
                  </div>
                </div>

                {/* Bottom Floating Location Badge */}
                <div style={{
                  position: 'absolute', bottom: '18px', left: '18px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(16px)',
                  padding: '10px 16px',
                  borderRadius: '18px',
                  display: 'flex', alignItems: 'center', gap: '10px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                  border: '1px solid rgba(255,255,255,0.9)',
                  zIndex: 3,
                }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '10px',
                    background: '#F0F8FC', color: '#1677A8',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.2 }}>
                      Srikantam Circle
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                      RTC Bus-stand Road, Anantapuramu
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Dark ECG Status Bar */}
              <div style={{
                background: '#0E2135',
                borderRadius: '0 0 24px 24px',
                margin: '10px -10px -10px -10px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between',
                color: '#FFFFFF',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '10px',
                    background: 'rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#F43F5E',
                  }}>
                    <Heart size={18} />
                  </div>
                  {/* ECG Pulse SVG animation */}
                  <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
                    <path d="M0 10H15L20 3L27 17L34 7L39 10H60" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 750, color: '#F8FAFC', display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'flex-end' }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22C55E', display: 'inline-block' }} />
                    <span>Active Emergency & Care</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94A8C8', marginTop: '2px' }}>
                    24/7 Hospital Operations
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
