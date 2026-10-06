import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ onOpenConsultation, activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home', id: 'home' },
    { name: t.nav.services, href: '#services', id: 'services' },
    { name: t.nav.about, href: '#about', id: 'about' },
    { name: t.nav.caseStudies, href: '#case-studies', id: 'case-studies' },
    { name: t.nav.insights, href: '#insights', id: 'insights' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: isScrolled ? 'rgba(9, 17, 36, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(0, 163, 255, 0.25)' : '1px solid rgba(255, 255, 255, 0.06)',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '84px' }}>
        {/* Brand Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
          <img
            src="/assets/arbit_logo.png"
            alt="Arbit Advisors"
            style={{
              height: '46px',
              width: 'auto',
              objectFit: 'contain',
              borderRadius: '4px',
              filter: 'drop-shadow(0 2px 10px rgba(0, 162, 255, 0.3))',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '0.08em', color: '#FFF' }}>
                ARBIT
              </span>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.14em', color: 'var(--theme-primary)' }}>
                ADVISORS
              </span>
            </div>
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.22em', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '-2px' }}>
              {t.nav.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ display: 'flex', alignItems: 'center', gap: '2rem', listStyle: 'none' }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id} style={{ position: 'relative' }}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '0.92rem',
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? '#FFF' : '#A0AEC0',
                      letterSpacing: '0.01em',
                      padding: '8px 0',
                      display: 'inline-block',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--theme-cyan)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? '#FFF' : '#A0AEC0')}
                  >
                    {link.name}
                  </a>
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--theme-primary)',
                        borderRadius: '2px',
                        boxShadow: '0 0 10px rgba(0, 163, 255, 0.8)',
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right CTA Button & Language Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Language Switcher Pill */}
          <button
            onClick={toggleLanguage}
            title={language === 'en' ? 'Switch to Hindi (हिंदी)' : 'Switch to English'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.45rem 0.85rem',
              borderRadius: '20px',
              border: '1px solid rgba(0, 163, 255, 0.35)',
              backgroundColor: 'rgba(0, 163, 255, 0.08)',
              color: '#FFF',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 163, 255, 0.18)';
              e.currentTarget.style.borderColor = 'var(--theme-cyan)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 163, 255, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(0, 163, 255, 0.35)';
            }}
          >
            <Globe size={14} color="var(--theme-cyan)" />
            <span style={{ color: language === 'en' ? 'var(--theme-cyan)' : '#94A3B8' }}>EN</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>|</span>
            <span style={{ color: language === 'hi' ? 'var(--theme-cyan)' : '#94A3B8' }}>हिंदी</span>
          </button>

          <button
            onClick={onOpenConsultation}
            className="btn-gold-outline desktop-btn"
            style={{ padding: '0.65rem 1.35rem', fontSize: '0.85rem' }}
          >
            {t.nav.getInTouch}
            <ArrowRight size={15} />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--theme-primary)',
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid rgba(0, 163, 255, 0.3)',
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#070D1A',
            borderBottom: '1px solid var(--border-theme)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#E2E8F0',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {link.name}
            </a>
          ))}

          {/* Language Toggle in Mobile Drawer */}
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
            <button
              onClick={() => setLanguage('en')}
              style={{
                flex: 1,
                padding: '0.6rem',
                borderRadius: '4px',
                border: language === 'en' ? '1px solid var(--theme-cyan)' : '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: language === 'en' ? 'rgba(0, 163, 255, 0.2)' : 'transparent',
                color: language === 'en' ? 'var(--theme-cyan)' : '#94A3B8',
                fontWeight: 600,
                fontSize: '0.9rem',
              }}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('hi')}
              style={{
                flex: 1,
                padding: '0.6rem',
                borderRadius: '4px',
                border: language === 'hi' ? '1px solid var(--theme-cyan)' : '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: language === 'hi' ? 'rgba(0, 163, 255, 0.2)' : 'transparent',
                color: language === 'hi' ? 'var(--theme-cyan)' : '#94A3B8',
                fontWeight: 600,
                fontSize: '0.9rem',
              }}
            >
              हिंदी
            </button>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="btn-gold"
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            {t.nav.getInTouch}
            <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* Responsive media query styles */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 899px) {
          .desktop-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
