import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ArrowRight, Heart } from 'lucide-react';
import kaveryLogo from '@/assets/logo/kavery_logo.png';
import { siteConfig } from '@/content/site.config';
import { trackEvent } from '@/lib/analytics';

const E = [0.22, 1, 0.36, 1] as const;

type NavItem = { label: string; href: string; sectionId?: string };

const navLinks: NavItem[] = [
  { label: 'Home',         href: '/',              sectionId: 'home' },
  { label: 'About',        href: '/#about',        sectionId: 'about' },
  { label: 'Paediatric Care', href: '/#specialities', sectionId: 'specialities' },
  { label: 'Doctors',      href: '/#doctors',      sectionId: 'doctors' },
  { label: 'Why Choose Us', href: '/#why-choose',   sectionId: 'why-choose' },
  { label: 'Digital Care',  href: '/#digital-solutions', sectionId: 'digital-solutions' },
  { label: 'Contact',      href: '/#contact',      sectionId: 'contact' },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [activeSection,  setActiveSection]  = useState('home');
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sectionIds = navLinks.map(n => n.sectionId).filter(Boolean) as string[];
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 130) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection('home');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleClick = useCallback((item: NavItem) => {
    setMobileOpen(false);
    if (item.sectionId && location.pathname === '/') scrollTo(item.sectionId);
  }, [location.pathname]);

  const isItemActive = (item: NavItem) =>
    item.sectionId ? activeSection === item.sectionId : location.pathname === item.href;

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.94)',
          borderBottom: `1px solid ${scrolled ? '#E2ECF3' : 'rgba(226,236,243,0.6)'}`,
          boxShadow: scrolled ? '0 4px 20px rgba(22,119,168,0.08)' : 'none',
          backdropFilter: 'blur(18px) saturate(180%)',
          transition: 'all 300ms var(--ease-out)',
        }}
      >
        <div style={{ maxWidth: 1380, margin: '0 auto', padding: '0 clamp(1.25rem, 3vw, 2.5rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', height: 72, gap: 8, justifyContent: 'space-between' }}>

            {/* Logo */}
            <Link
              to="/"
              onClick={() => scrollTo('home')}
              aria-label={siteConfig.name}
              style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}
            >
              <img
                src={kaveryLogo}
                alt="Sri Kavery Hospital Logo"
                style={{ height: 52, width: 'auto', objectFit: 'contain', display: 'block' }}
              />

            </Link>

            {/* Desktop Nav Links */}
            <nav className="desktop-nav">
              <ul style={{ display: 'flex', alignItems: 'center', gap: 6, listStyle: 'none', margin: 0, padding: 0 }}>
                {navLinks.map((item) => {
                  const active = isItemActive(item);
                  return (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        onClick={() => handleClick(item)}
                        style={{
                          display: 'inline-flex', alignItems: 'center',
                          padding: '8px 14px', borderRadius: 20,
                          fontSize: '0.90rem', fontWeight: active ? 700 : 500,
                          color: active ? 'var(--primary)' : 'var(--text)',
                          background: active ? 'var(--primary-bg)' : 'transparent',
                          textDecoration: 'none', transition: 'all 200ms',
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Right CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                onClick={() => trackEvent('click_call', { source: 'navbar' })}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '9px 16px', borderRadius: 24,
                  fontSize: '0.875rem', fontWeight: 600,
                  color: 'var(--primary)', background: 'var(--primary-bg)',
                  textDecoration: 'none', border: '1px solid var(--primary-border)',
                }}
              >
                <Phone size={15} />
                <span>Call Us</span>
              </a>

              <button
                onClick={() => {
                  trackEvent('click_appointment', { source: 'navbar' });
                  scrollTo('appointment');
                }}
                className="btn btn-primary"
                style={{
                  padding: '10px 20px', borderRadius: 24,
                  fontSize: '0.875rem', fontWeight: 600,
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <span>Book Appointment</span>
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle Menu"
                className="mobile-toggle"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 40, height: 40, borderRadius: 10,
                  border: '1px solid var(--border)', background: 'white',
                  color: 'var(--text)', cursor: 'pointer',
                }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: E }}
            style={{
              position: 'fixed', top: 72, left: 0, right: 0, bottom: 0,
              background: 'white', zIndex: 999, padding: '1.5rem',
              display: 'flex', flexDirection: 'column', gap: 16, overflowY: 'auto',
            }}
          >
            <nav>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      onClick={() => handleClick(item)}
                      style={{
                        display: 'block', padding: '12px 16px', borderRadius: 12,
                        fontSize: '1.05rem', fontWeight: 600, color: 'var(--text)',
                        textDecoration: 'none', background: 'var(--bg-alt)',
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
