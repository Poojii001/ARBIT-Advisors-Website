import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowUp, 
  Check, 
  Phone, 
  Mail, 
  MessageSquare, 
  ShieldCheck, 
  Lock, 
  ChevronRight,
  Send
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer({ onOpenConsultation }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState(null); // 'privacy' | 'terms' | null
  const { language, t } = useLanguage();

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
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

  const quickNav = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.caseStudies, href: '#case-studies' },
    { label: t.nav.insights, href: '#insights' },
  ];

  const servicesList = language === 'hi' ? [
    'ब्रांड पीआर एवं जनछवि निर्माण',
    '24/7 मीडिया वॉर रूम व संबंध',
    'एआई एवं जनभावना विश्लेषण',
    'त्वरित संकट प्रबंधन कवच',
    'बूथ-स्तरीय चुनावी रणनीति',
  ] : [
    'Brand PR & Leadership Positioning',
    '24/7 Media Relations & War Room',
    'AI & Sentiment Intelligence',
    'Rapid Crisis Mitigation Shield',
    'Booth-Level Campaign Strategy',
  ];

  return (
    <footer
      id="contact"
      style={{
        backgroundColor: '#071026',
        color: '#94A3B8',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        fontSize: '0.86rem',
      }}
    >
      {/* Sleek Top Action Strip */}
      <div
        style={{
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          backgroundColor: '#050D1D',
          padding: '0.85rem 0',
        }}
      >
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
          {/* Active Desk Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.76rem', color: '#CBD5E1' }}>
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                boxShadow: '0 0 8px #10B981',
                display: 'inline-block',
              }}
            />
            <span style={{ fontWeight: 600, letterSpacing: '0.04em' }}>
              {language === 'hi' ? 'गोपनीय कमान डेस्क सक्रिय' : 'Strategic Advisory War Room Active'}
            </span>
            <span style={{ color: '#475569' }}>•</span>
            <span style={{ color: '#94A3B8' }}>New Delhi, India</span>
          </div>

          {/* Quick Direct Contacts & Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap', fontSize: '0.8rem' }}>
            <a
              href={`tel:${t.contact.phone}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#E2E8F0', fontWeight: 600, transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00A3FF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#E2E8F0')}
            >
              <Phone size={14} color="#0084D6" />
              <span>{t.contact.phone}</span>
            </a>

            <a
              href={t.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#25D366', fontWeight: 600, transition: 'opacity 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              <MessageSquare size={14} />
              <span>{language === 'hi' ? 'व्हाट्सएप' : 'WhatsApp'}</span>
            </a>

            <button
              onClick={onOpenConsultation}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.38rem 0.85rem',
                backgroundColor: '#0084D6',
                color: '#FFFFFF',
                borderRadius: '5px',
                fontSize: '0.78rem',
                fontWeight: 700,
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0070B8')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0084D6')}
            >
              <span>{language === 'hi' ? 'परामर्श बुक करें' : 'Book Briefing'}</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Streamlined Grid */}
      <div className="container" style={{ padding: '2.5rem 1.25rem 1.5rem 1.25rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(1.5rem, 2.5vw, 2.2rem)',
            marginBottom: '2rem',
          }}
        >
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="footer-col-brand" style={{ gridColumn: 'span 12' }}>
            <a href="#home" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none', marginBottom: '0.85rem' }}>
              <img
                src="/assets/arbit_logo.png"
                alt="Arbit Advisors"
                style={{
                  height: '34px',
                  width: 'auto',
                  objectFit: 'contain',
                  borderRadius: '3px',
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '0.06em', color: '#FFFFFF' }}>
                    ARBIT
                  </span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', color: '#0084D6' }}>
                    ADVISORS
                  </span>
                </div>
                <span style={{ fontSize: '0.52rem', letterSpacing: '0.18em', color: '#64748B', textTransform: 'uppercase', marginTop: '-2px' }}>
                  {t.nav.tagline}
                </span>
              </div>
            </a>

            <p style={{ fontSize: '0.82rem', lineHeight: 1.55, color: '#94A3B8', maxWidth: '300px', marginBottom: '0.9rem' }}>
              {t.footer.brandDesc}
            </p>

            {/* Strict NDA Tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.72rem',
                color: '#64748B',
                marginBottom: '1rem',
              }}
            >
              <Lock size={12} color="#00A3FF" />
              <span>{language === 'hi' ? 'सख्त NDA प्रोटोकॉल संरक्षित' : '256-Bit Encrypted & NDA Protected'}</span>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '5px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94A3B8',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#0084D6';
                    e.currentTarget.style.color = '#00A3FF';
                    e.currentTarget.style.backgroundColor = 'rgba(0, 132, 214, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.color = '#94A3B8';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                  }}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services (3 cols) */}
          <div className="footer-col-services" style={{ gridColumn: 'span 6' }}>
            <h4
              style={{
                fontSize: '0.76rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                marginBottom: '0.85rem',
              }}
            >
              {t.footer.ourServices}
            </h4>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.82rem' }}>
              {servicesList.map((serviceName, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    style={{ color: '#94A3B8', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00A3FF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    {serviceName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation (2 cols) */}
          <div className="footer-col-links" style={{ gridColumn: 'span 6' }}>
            <h4
              style={{
                fontSize: '0.76rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                marginBottom: '0.85rem',
              }}
            >
              {t.footer.quickLinks}
            </h4>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.82rem' }}>
              {quickNav.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    style={{ color: '#94A3B8', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00A3FF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter (3 cols) */}
          <div className="footer-col-newsletter" style={{ gridColumn: 'span 12' }}>
            <h4
              style={{
                fontSize: '0.76rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                marginBottom: '0.85rem',
              }}
            >
              {language === 'hi' ? 'रणनीतिक बुलेटिन' : 'INTELLIGENCE BRIEF'}
            </h4>

            <p style={{ fontSize: '0.8rem', color: '#94A3B8', lineHeight: 1.5, marginBottom: '0.75rem' }}>
              {t.footer.stayUpdatedSub}
            </p>

            <form onSubmit={handleSubscribe} style={{ display: 'flex', width: '100%', maxWidth: '320px' }}>
              <input
                type="email"
                required
                placeholder={t.footer.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  minWidth: 0,
                  padding: '0.55rem 0.75rem',
                  backgroundColor: 'rgba(10, 25, 49, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRight: 'none',
                  borderRadius: '5px 0 0 5px',
                  fontSize: '0.8rem',
                  color: '#FFFFFF',
                  outline: 'none',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#0084D6')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
              />
              <button
                type="submit"
                aria-label="Subscribe"
                style={{
                  padding: '0.55rem 0.85rem',
                  backgroundColor: '#0084D6',
                  color: '#FFFFFF',
                  borderRadius: '0 5px 5px 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                }}
              >
                {subscribed ? <Check size={16} /> : <Send size={14} />}
              </button>
            </form>

            {subscribed && (
              <span style={{ fontSize: '0.72rem', color: '#00D2FF', display: 'block', marginTop: '0.35rem' }}>
                {t.footer.subscribedMsg}
              </span>
            )}
          </div>
        </div>

        {/* Compact Regulatory Disclaimer Text (Slim & Unobtrusive) */}
        <div
          style={{
            padding: '0.75rem 0.95rem',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '6px',
            marginBottom: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            fontSize: '0.72rem',
            color: '#64748B',
            lineHeight: 1.45,
          }}
        >
          <ShieldCheck size={15} color="#0084D6" style={{ flexShrink: 0 }} />
          <div>
            <strong style={{ color: '#94A3B8', fontWeight: 600 }}>{t.disclaimer.title}: </strong>
            <span>{t.disclaimer.text}</span>
          </div>
        </div>

        {/* Bottom Bar (Copyright + Legal + Back to Top) */}
        <div
          style={{
            paddingTop: '1rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
            fontSize: '0.75rem',
            color: '#64748B',
          }}
        >
          <div>&copy; {new Date().getFullYear()} Arbit Advisors. {t.footer.rights}</div>

          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <button
              onClick={() => setActiveLegalModal('privacy')}
              style={{ color: '#64748B', fontSize: '0.75rem', padding: 0 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#CBD5E1')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
            >
              {t.footer.privacyPolicy}
            </button>
            <button
              onClick={() => setActiveLegalModal('terms')}
              style={{ color: '#64748B', fontSize: '0.75rem', padding: 0 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#CBD5E1')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
            >
              {t.footer.termsConditions}
            </button>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: '#94A3B8',
              fontSize: '0.74rem',
              padding: '0.2rem 0.4rem',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#00A3FF')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
          >
            <span>{language === 'hi' ? 'ऊपर जाएं' : 'Back to top'}</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>

      {/* Modal for Privacy & Terms */}
      {activeLegalModal && (
        <div
          className="modal-overlay"
          onClick={() => setActiveLegalModal(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(7, 16, 38, 0.85)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem',
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '520px',
              width: '100%',
              backgroundColor: '#0A1931',
              color: '#F8FAFC',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              padding: '1.5rem',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.65rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Lock size={16} color="#00A3FF" />
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>
                  {activeLegalModal === 'privacy' && (language === 'hi' ? 'गोपनीयता नीति' : 'Privacy Policy')}
                  {activeLegalModal === 'terms' && (language === 'hi' ? 'नियम एवं शर्तें' : 'Terms & Conditions')}
                </h3>
              </div>
              <button onClick={() => setActiveLegalModal(null)} style={{ color: '#94A3B8', fontSize: '1.1rem' }}>✕</button>
            </div>

            <div style={{ fontSize: '0.84rem', lineHeight: 1.6, color: '#CBD5E1' }}>
              {activeLegalModal === 'privacy' ? (
                <p>
                  {language === 'hi'
                    ? 'आर्बिट एडवाइजर्स आपके संगठनात्मक डेटा की पूर्ण गोपनीयता बनाए रखने के लिए प्रतिबद्ध है। किसी भी राजनीतिक दल या प्रत्याशी का डेटा तीसरे पक्ष को साझा नहीं किया जाता।'
                    : 'Arbit Advisors maintains strict confidentiality protocols. All client communication and electoral strategy datasets are privileged and protected under enterprise-grade encryption.'}
                </p>
              ) : (
                <p>
                  {language === 'hi'
                    ? 'हमारी सभी सेवाएं द्विपक्षीय परामर्श अनुबंध के तहत संचालित होती हैं। फर्म निर्वाचन आयोग के सभी दिशा-निर्देशों का पूर्णतः पालन करती है।'
                    : 'All advisory engagements are governed by bilateral professional agreements in full compliance with applicable statutory regulations and election commission guidelines.'}
                </p>
              )}
            </div>

            <div style={{ marginTop: '1.25rem', textAlign: 'right' }}>
              <button
                onClick={() => setActiveLegalModal(null)}
                style={{
                  padding: '0.5rem 1.2rem',
                  backgroundColor: '#0084D6',
                  color: '#FFFFFF',
                  borderRadius: '5px',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                }}
              >
                {language === 'hi' ? 'बंद करें' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Responsive Breakpoints */}
      <style>{`
        @media (min-width: 992px) {
          .footer-col-brand { grid-column: span 4 !important; }
          .footer-col-services { grid-column: span 3 !important; }
          .footer-col-links { grid-column: span 2 !important; }
          .footer-col-newsletter { grid-column: span 3 !important; }
        }
        @media (min-width: 600px) and (max-width: 991px) {
          .footer-col-brand { grid-column: span 6 !important; }
          .footer-col-newsletter { grid-column: span 6 !important; }
          .footer-col-services { grid-column: span 6 !important; }
          .footer-col-links { grid-column: span 6 !important; }
        }
        @media (max-width: 599px) {
          .footer-col-brand, .footer-col-services, .footer-col-links, .footer-col-newsletter {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </footer>
  );
}
