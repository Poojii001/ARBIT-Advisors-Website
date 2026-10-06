import React, { useState } from 'react';
import { ArrowRight, Check, Phone, Mail, MessageSquare, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer({ onOpenConsultation }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { t } = useLanguage();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      svg: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
    {
      name: 'X (Twitter)',
      href: 'https://twitter.com',
      svg: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com',
      svg: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      svg: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer
      id="contact"
      style={{
        backgroundColor: '#071026',
        color: '#94A3B8',
        padding: '5rem 0 2rem 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Direct Contact Cards Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
            marginBottom: '4rem',
            padding: '1.6rem 1.8rem',
            backgroundColor: '#0A1931',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* Phone */}
          <a
            href={`tel:${t.contact.phone}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              color: '#FFFFFF',
              padding: '0.5rem',
              borderRadius: '6px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '8px',
                backgroundColor: 'rgba(0, 132, 214, 0.15)',
                border: '1px solid rgba(0, 132, 214, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0084D6',
                flexShrink: 0,
              }}
            >
              <Phone size={18} />
            </div>
            <div>
              <div style={{ fontSize: '0.74rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                {t.contact.phoneLabel}
              </div>
              <div style={{ fontSize: '0.96rem', fontWeight: 700, color: '#FFFFFF' }}>
                {t.contact.phone}
              </div>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${t.contact.email}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              color: '#FFFFFF',
              padding: '0.5rem',
              borderRadius: '6px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--theme-light)',
                flexShrink: 0,
              }}
            >
              <Mail size={18} />
            </div>
            <div>
              <div style={{ fontSize: '0.74rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                {t.contact.emailLabel}
              </div>
              <div style={{ fontSize: '0.96rem', fontWeight: 700, color: '#FFFFFF' }}>
                {t.contact.email}
              </div>
            </div>
          </a>

          {/* WhatsApp Direct */}
          <a
            href={t.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              color: '#FFF',
              padding: '0.5rem',
              borderRadius: '6px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(37, 211, 102, 0.15)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'rgba(37, 211, 102, 0.15)',
                border: '1px solid #25D366',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#25D366',
                flexShrink: 0,
              }}
            >
              <MessageSquare size={18} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                {t.contact.whatsappLabel}
              </div>
              <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#25D366' }}>
                {t.contact.chatOnWhatsapp} &rarr;
              </div>
            </div>
          </a>
        </div>

        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2.5rem',
            marginBottom: '2.25rem',
          }}
        >
          {/* Col 1: Brand & Identity (3.5 cols) */}
          <div style={{ gridColumn: 'span 12' }} className="footer-brand-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.25rem' }}>
              <img
                src="/assets/arbit_logo.png"
                alt="Arbit Advisors"
                style={{
                  height: '44px',
                  width: 'auto',
                  objectFit: 'contain',
                  borderRadius: '4px',
                }}
              />

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '0.08em', color: '#FFF' }}>
                    ARBIT
                  </span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', color: 'var(--theme-primary)' }}>
                    ADVISORS
                  </span>
                </div>
                <span style={{ fontSize: '0.55rem', letterSpacing: '0.22em', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '-2px' }}>
                  {t.nav.tagline}
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#94A3B8', maxWidth: '300px' }}>
              {t.footer.brandDesc}
            </p>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div style={{ gridColumn: 'span 6' }} className="footer-links-col">
            <h4 style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em', color: '#FFF', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              {t.footer.quickLinks}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
              <li><a href="#home" style={{ color: '#94A3B8' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--theme-cyan)')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}>{t.nav.home}</a></li>
              <li><a href="#about" style={{ color: '#94A3B8' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--theme-cyan)')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}>{t.nav.about}</a></li>
              <li><a href="#services" style={{ color: '#94A3B8' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--theme-cyan)')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}>{t.nav.services}</a></li>
              <li><a href="#case-studies" style={{ color: '#94A3B8' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--theme-cyan)')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}>{t.nav.caseStudies}</a></li>
              <li><a href="#insights" style={{ color: '#94A3B8' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--theme-cyan)')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}>{t.nav.insights}</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); onOpenConsultation(); }} style={{ color: '#94A3B8' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--theme-cyan)')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}>{t.nav.getInTouch}</a></li>
            </ul>
          </div>

          {/* Col 3: Our Services (Harmonized with Homepage Cards) (2.5 cols) */}
          <div style={{ gridColumn: 'span 6' }} className="footer-services-col">
            <h4 style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em', color: '#FFF', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              {t.footer.ourServices}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
              {t.capabilities.items.map((item, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    style={{ color: '#94A3B8' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--theme-cyan)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Connect & Newsletter (4 cols) */}
          <div style={{ gridColumn: 'span 12' }} className="footer-stay-updated-col">
            {/* Social Icons */}
            <div style={{ marginBottom: '1.25rem' }}>
              <h4 style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em', color: '#FFF', textTransform: 'uppercase', marginBottom: '1rem' }}>
                {t.footer.connectWithUs}
              </h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '4px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#94A3B8',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--theme-primary)';
                      e.currentTarget.style.color = 'var(--theme-cyan)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.color = '#94A3B8';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {social.svg}
                  </a>
                ))}
              </div>
            </div>

            {/* Stay Updated Newsletter Box */}
            <div>
              <h4 style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em', color: '#FFF', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                {t.footer.stayUpdated}
              </h4>
              <p style={{ fontSize: '0.82rem', color: '#94A3B8', marginBottom: '0.85rem' }}>
                {t.footer.stayUpdatedSub}
              </p>

              <form onSubmit={handleSubscribe} style={{ display: 'flex', maxWidth: '340px' }}>
                <input
                  type="email"
                  required
                  placeholder={t.footer.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '0.75rem 1rem',
                    backgroundColor: 'rgba(10, 18, 36, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRight: 'none',
                    borderRadius: '4px 0 0 4px',
                    fontSize: '0.85rem',
                    color: '#FFF',
                    outline: 'none',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--theme-primary)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)')}
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  style={{
                    padding: '0.75rem 1.1rem',
                    backgroundColor: 'var(--theme-primary)',
                    color: '#FFFFFF',
                    borderRadius: '0 4px 4px 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                  }}
                >
                  {subscribed ? <Check size={18} color="#FFFFFF" /> : <ArrowRight size={18} />}
                </button>
              </form>
              {subscribed && (
                <span style={{ fontSize: '0.75rem', color: 'var(--theme-cyan)', display: 'block', marginTop: '0.4rem' }}>
                  {t.footer.subscribedMsg}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Regulatory & No Government Affiliation Disclaimer */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            backgroundColor: 'rgba(14, 26, 56, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '6px',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
          }}
        >
          <ShieldAlert size={20} color="var(--theme-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--theme-light)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>
              {t.disclaimer.title}
            </div>
            <p style={{ fontSize: '0.78rem', lineHeight: 1.55, color: '#94A3B8' }}>
              {t.disclaimer.text}
            </p>
          </div>
        </div>

        {/* Security & Confidentiality Trust Badges */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            padding: '1.25rem',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '6px',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            marginBottom: '2rem',
            fontSize: '0.78rem',
            color: '#94A3B8',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <span style={{ color: '#10B981' }}>✓</span>
            <span>Strict Attorney-Client Non-Disclosure Protocols</span>
          </div>
          <span>&bull;</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <span style={{ color: '#0084D6' }}>✓</span>
            <span>Certified Data Confidentiality Standards</span>
          </div>
          <span>&bull;</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <span style={{ color: '#F59E0B' }}>✓</span>
            <span>Independent Strategic & Electoral Counsel</span>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div
          style={{
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.78rem',
            color: '#64748B',
          }}
        >
          <div>&copy; 2026 Arbit Advisors. {t.footer.rights}</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#privacy" style={{ color: '#64748B' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FFF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}>{t.footer.privacyPolicy}</a>
            <a href="#terms" style={{ color: '#64748B' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FFF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}>{t.footer.termsConditions}</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .footer-brand-col {
            grid-column: span 4 !important;
          }
          .footer-links-col {
            grid-column: span 2 !important;
          }
          .footer-services-col {
            grid-column: span 2 !important;
          }
          .footer-stay-updated-col {
            grid-column: span 4 !important;
          }
        }
      `}</style>
    </footer>
  );
}
