import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenConsultation, activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Insights', href: '#insights' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: isScrolled ? 'rgba(4, 8, 16, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(229, 169, 60, 0.15)' : '1px solid rgba(255, 255, 255, 0.04)',
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
              <span style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.14em', color: 'var(--gold-primary)' }}>
                ADVISORS
              </span>
            </div>
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.22em', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '-2px' }}>
              STRATEGY &bull; IMPACT
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ display: 'flex', alignItems: 'center', gap: '2.2rem', listStyle: 'none' }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase().replace(' ', '-');
              return (
                <li key={link.name} style={{ position: 'relative' }}>
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
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#E5A93C')}
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
                        backgroundColor: 'var(--gold-primary)',
                        borderRadius: '2px',
                        boxShadow: '0 0 8px rgba(229, 169, 60, 0.6)',
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={onOpenConsultation}
            className="btn-gold-outline desktop-btn"
            style={{ padding: '0.65rem 1.35rem', fontSize: '0.85rem' }}
          >
            Get in Touch
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
              color: '#E5A93C',
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid rgba(229, 169, 60, 0.2)',
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
            borderBottom: '1px solid var(--border-gold)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
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
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="btn-gold"
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            Get in Touch
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
