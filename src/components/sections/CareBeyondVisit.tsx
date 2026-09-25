import { motion } from 'framer-motion';
import {
  BellRing,
  Pill,
  HeartHandshake,
  MessageCircle,
  CheckCheck,
  CalendarCheck,
  ShieldCheck,
  Send,
  Sparkles,
  PhoneCall,
  Heart
} from 'lucide-react';
import { useInView, useReducedMotion } from '@/hooks';
import kaveryLogoImg from '@/assets/logo/kavery_logo.png';

const EASE = [0.22, 1, 0.36, 1] as const;

interface JourneyStage {
  step: string;
  title: string;
  desc: string;
  icon: typeof BellRing;
  badge: string;
}

const stages: JourneyStage[] = [
  {
    step: '01',
    title: 'FOLLOW-UP REMINDERS',
    desc: 'Never miss an important follow-up appointment or review for your child.',
    icon: CalendarCheck,
    badge: 'Timely Reviews',
  },
  {
    step: '02',
    title: 'MEDICINE REMINDERS',
    desc: 'Stay on track with timely reminders for your child’s prescribed medicines.',
    icon: Pill,
    badge: 'Dosage Support',
  },
  {
    step: '03',
    title: 'RECOVERY GUIDANCE',
    desc: 'Receive helpful post-care instructions and recovery guidance after your visit.',
    icon: HeartHandshake,
    badge: 'Care Protocol',
  },
  {
    step: '04',
    title: 'STAY CONNECTED',
    desc: 'Get important updates, reports, and emergency contacts directly through WhatsApp.',
    icon: MessageCircle,
    badge: 'Direct WhatsApp Support',
  },
];

const chatMessages = [
  {
    id: 1,
    type: 'incoming',
    text: '👋 Hello! We hope your child is feeling better after today’s consultation at Sri Kavery Hospital.',
    time: '04:30 PM',
    tag: null,
  },
  {
    id: 2,
    type: 'incoming',
    title: '📅 Follow-up Reminder',
    text: 'Your follow-up appointment with Dr. P. Karthik is scheduled for tomorrow at 10:30 AM.',
    time: '04:31 PM',
    tag: 'Appointment Confirmed',
    accent: '#1677A8',
  },
  {
    id: 3,
    type: 'incoming',
    title: '💊 Medication Schedule',
    text: 'Please continue the prescribed course as advised by your physician. Ensure plenty of hydration and rest.',
    time: '04:32 PM',
    tag: 'Prescription Guideline',
    accent: '#0E8A63',
  },
  {
    id: 4,
    type: 'outgoing',
    text: 'Thank you so much! The medication reminders are very helpful for us. 🙏',
    time: '04:35 PM',
    tag: null,
  },
  {
    id: 5,
    type: 'incoming',
    text: '💙 Sri Kavery Hospital — We’re here whenever you need us. Have any questions? Our care desk is always available.',
    time: '04:36 PM',
    tag: null,
  },
];

export function CareBeyondVisit() {
  const [ref, inView] = useInView<HTMLElement>();
  const rm = useReducedMotion();

  return (
    <section
      id="care-beyond-visit"
      ref={ref}
      className="section"
      aria-labelledby="care-beyond-heading"
      style={{
        background: 'linear-gradient(180deg, #F8FAFC 0%, #F0F7FB 50%, #FFFFFF 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(4rem, 7vw, 6.5rem) 0',
      }}
    >
      {/* Background Decorative Ambient Circles */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(22, 119, 168, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-8%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(14, 138, 99, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={rm ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(2.5rem, 5vw, 4rem) auto' }}
        >
          <div
            className="section-label"
            style={{
              justifyContent: 'center',
              display: 'inline-flex',
              background: '#E6F4FA',
              borderColor: '#BAE3F5',
              color: '#1677A8',
              letterSpacing: '0.08em',
              fontWeight: 800,
            }}
          >
            <Sparkles size={13} style={{ marginRight: 6 }} color="#1677A8" />
            CARE BEYOND THE VISIT
          </div>

          <h2
            id="care-beyond-heading"
            style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 'clamp(2.1rem, 3.8vw, 3.25rem)',
              fontWeight: 750,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: 'var(--text)',
              marginTop: '1rem',
              marginBottom: '1.25rem',
            }}
          >
            Care that continues{' '}
            <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>after you leave.</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.15vw, 1.125rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              margin: '0 auto',
            }}
          >
            At Kavery Hospital, your child’s care doesn’t stop when you leave the hospital. From follow-up appointments
            and medicines to recovery guidance and important updates, we help families stay connected throughout the care
            journey.
          </p>
        </motion.div>

        {/* Main 2-Column Showcase */}
        <div
          className="care-beyond-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 4vw, 3.75rem)',
            alignItems: 'center',
          }}
        >
          {/* ══ LEFT COLUMN: Vertical Connected Care Journey (7 Cols) ════════════ */}
          <div
            style={{
              gridColumn: 'span 7',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
            className="care-journey-col"
          >
            <div style={{ position: 'relative', paddingLeft: '8px' }}>
              {/* Vertical Connecting Line */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '29px',
                  top: '28px',
                  bottom: '36px',
                  width: '2px',
                  background: 'linear-gradient(180deg, #1677A8 0%, #4AA9C8 50%, #25D366 100%)',
                  opacity: 0.35,
                  zIndex: 0,
                }}
              />

              {stages.map((st, i) => {
                const Icon = st.icon;
                return (
                  <motion.div
                    key={st.step}
                    initial={rm ? false : { opacity: 0, x: -28 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.12, ease: EASE }}
                    style={{
                      position: 'relative',
                      zIndex: 1,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1.25rem',
                      marginBottom: i === stages.length - 1 ? 0 : '1.35rem',
                    }}
                  >
                    {/* Numbered Icon Node */}
                    <div
                      style={{
                        position: 'relative',
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        background: '#FFFFFF',
                        border: '2px solid #1677A8',
                        boxShadow: '0 4px 14px rgba(22, 119, 168, 0.18)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        color: '#1677A8',
                        marginTop: '2px',
                      }}
                    >
                      <Icon size={20} color="#1677A8" />
                      <span
                        style={{
                          position: 'absolute',
                          top: '-6px',
                          right: '-6px',
                          background: '#0E2135',
                          color: '#FFFFFF',
                          fontSize: '0.625rem',
                          fontWeight: 800,
                          padding: '1px 5px',
                          borderRadius: '100px',
                          lineHeight: 1.2,
                          border: '1.5px solid #FFFFFF',
                        }}
                      >
                        {st.step}
                      </span>
                    </div>

                    {/* Stage Card */}
                    <div
                      style={{
                        flex: 1,
                        background: '#FFFFFF',
                        borderRadius: '18px',
                        padding: '1.15rem 1.4rem',
                        border: '1px solid rgba(226, 236, 243, 0.95)',
                        boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '10px',
                          marginBottom: '4px',
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: 'Inter, system-ui, sans-serif',
                            fontSize: '0.9375rem',
                            fontWeight: 800,
                            letterSpacing: '0.04em',
                            color: '#0F172A',
                            margin: 0,
                          }}
                        >
                          {st.title}
                        </h3>
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            color: '#1677A8',
                            background: '#F0F8FC',
                            padding: '3px 9px',
                            borderRadius: '100px',
                            border: '1px solid #D5EDF8',
                          }}
                        >
                          {st.badge}
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--text-muted)',
                          lineHeight: 1.55,
                          margin: 0,
                        }}
                      >
                        {st.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Closing Trust Note */}
            <motion.div
              initial={rm ? false : { opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.65, ease: EASE }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 18px',
                borderRadius: '14px',
                background: 'rgba(22, 119, 168, 0.08)',
                border: '1px solid rgba(22, 119, 168, 0.18)',
                marginTop: '0.5rem',
              }}
            >
              <Heart size={16} color="#1677A8" fill="#1677A8" />
              <span
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 750,
                  color: '#1677A8',
                  fontStyle: 'italic',
                }}
              >
                “Because caring for your child doesn’t end at the hospital door.”
              </span>
            </motion.div>
          </div>

          {/* ══ RIGHT COLUMN: WhatsApp-Style Post-Care Communication UI (5 Cols) ══ */}
          <motion.div
            style={{ gridColumn: 'span 5' }}
            initial={rm ? false : { opacity: 0, scale: 0.95, y: 30 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
            className="care-whatsapp-col"
          >
            {/* Mobile Phone Mockup Frame */}
            <div
              style={{
                position: 'relative',
                borderRadius: '32px',
                padding: '10px',
                background: '#FFFFFF',
                boxShadow:
                  '0 25px 60px -15px rgba(15, 23, 42, 0.18), 0 10px 25px rgba(22, 119, 168, 0.1), 0 0 0 1px rgba(226, 232, 240, 0.9)',
                maxWidth: '430px',
                margin: '0 auto',
              }}
            >
              {/* Inner Mobile Screen Container */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: '#ECE5DD', // Classic WhatsApp subtle background tint
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #D1D5DB',
                }}
              >
                {/* WhatsApp Chat Header */}
                <div
                  style={{
                    background: '#075E54', // WhatsApp Deep Green
                    padding: '12px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: '#FFFFFF',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.12)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {/* Hospital Avatar */}
                    <div
                      style={{
                        position: 'relative',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: '#FFFFFF',
                        padding: '3px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={kaveryLogoImg}
                        alt="Kavery Hospital Official"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                      <span
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          right: 0,
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          background: '#25D366',
                          border: '2px solid #075E54',
                        }}
                      />
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2 }}>
                          Sri Kavery Hospital
                        </span>
                        <ShieldCheck size={14} color="#4ADE80" />
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#D1FAE5', opacity: 0.9 }}>
                        Official Continued Care Support
                      </div>
                    </div>
                  </div>

                  {/* Header Call Action */}
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                    }}
                  >
                    <PhoneCall size={16} />
                  </div>
                </div>

                {/* Sub-header Date / Security Pill */}
                <div
                  style={{
                    textAlign: 'center',
                    padding: '8px 12px 4px 12px',
                    background: 'transparent',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: '#4B5563',
                      background: 'rgba(255, 255, 255, 0.85)',
                      backdropFilter: 'blur(4px)',
                      padding: '3px 10px',
                      borderRadius: '100px',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    🔒 Verified Hospital Post-Care Channel
                  </span>
                </div>

                {/* WhatsApp Messages Scrollable Area */}
                <div
                  style={{
                    padding: '10px 12px 14px 12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    background: 'radial-gradient(circle at center, #F5F1EB 0%, #E8E0D7 100%)',
                  }}
                >
                  {chatMessages.map((msg, idx) => {
                    const isIncoming = msg.type === 'incoming';
                    return (
                      <motion.div
                        key={msg.id}
                        initial={rm ? false : { opacity: 0, y: 12, scale: 0.96 }}
                        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.35 + idx * 0.12, ease: EASE }}
                        style={{
                          alignSelf: isIncoming ? 'flex-start' : 'flex-end',
                          maxWidth: '88%',
                          background: isIncoming ? '#FFFFFF' : '#DCF8C6',
                          borderRadius: isIncoming ? '14px 14px 14px 2px' : '14px 14px 2px 14px',
                          padding: '10px 12px 6px 12px',
                          boxShadow: '0 1.5px 4px rgba(0, 0, 0, 0.08)',
                          position: 'relative',
                        }}
                      >
                        {/* Optional Card Title & Tag */}
                        {msg.title && (
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: '6px',
                              marginBottom: '5px',
                              borderBottom: '1px solid rgba(0,0,0,0.06)',
                              paddingBottom: '4px',
                            }}
                          >
                            <span
                              style={{
                                fontSize: '0.8rem',
                                fontWeight: 800,
                                color: msg.accent || '#1677A8',
                              }}
                            >
                              {msg.title}
                            </span>
                            {msg.tag && (
                              <span
                                style={{
                                  fontSize: '0.62rem',
                                  fontWeight: 750,
                                  background: 'rgba(22, 119, 168, 0.1)',
                                  color: '#1677A8',
                                  padding: '1px 6px',
                                  borderRadius: '6px',
                                }}
                              >
                                {msg.tag}
                              </span>
                            )}
                          </div>
                        )}

                        <p
                          style={{
                            fontSize: '0.82rem',
                            color: '#1F2937',
                            lineHeight: 1.45,
                            margin: 0,
                          }}
                        >
                          {msg.text}
                        </p>

                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            gap: '4px',
                            marginTop: '4px',
                          }}
                        >
                          <span style={{ fontSize: '0.65rem', color: '#6B7280' }}>{msg.time}</span>
                          {!isIncoming && <CheckCheck size={13} color="#34B7F1" />}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* WhatsApp Chat Input Mockup Footer */}
                <div
                  style={{
                    background: '#F0F0F0',
                    padding: '8px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    borderTop: '1px solid #E5E7EB',
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      background: '#FFFFFF',
                      borderRadius: '20px',
                      padding: '7px 14px',
                      fontSize: '0.8rem',
                      color: '#9CA3AF',
                      border: '1px solid #D1D5DB',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>Reply to Kavery Care...</span>
                  </div>
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: '#075E54',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Send size={15} />
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
