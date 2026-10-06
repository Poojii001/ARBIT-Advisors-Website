import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero({ onOpenConsultation }) {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '84vh',
        display: 'flex',
        alignItems: 'center',
        padding: '3.5rem 0 4.5rem 0',
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
      }}
    >
      {/* Clear Background Graphic using home.png (Parliament building) on the right */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '68%',
          height: '100%',
          backgroundImage: 'url(/assets/home.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'right 35%',
          opacity: 0.98,
          zIndex: 0,
        }}
      />

      {/* Seamless Soft Fade Gradient from Pure White to Transparent Image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 36%, rgba(255, 255, 255, 0.88) 54%, rgba(255, 255, 255, 0.2) 80%, transparent 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      
      {/* Subtle Warm Flourish in Top Left Corner */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(254, 243, 199, 0.5) 0%, transparent 70%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ zIndex: 2, position: 'relative', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem', alignItems: 'center' }}>
          
          {/* Left Hero Content Column (7 cols) */}
          <div style={{ gridColumn: 'span 12' }} className="hero-content-col">
            
            {/* Tag Badge */}
            <div
              className="gold-badge animate-fade-in"
              style={{
                letterSpacing: '0.16em',
                marginBottom: '1rem',
                fontSize: '0.74rem',
                fontWeight: 700,
                color: '#D97706',
              }}
            >
              {t.hero.badge}
            </div>

            {/* Main Headline with Deep Navy, Electric Azure & Amber Gold */}
            <h1
              className="animate-fade-in"
              style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3.15rem)',
                lineHeight: 1.2,
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#0A1931',
                marginBottom: '1.25rem',
                maxWidth: '660px',
              }}
            >
              {t.hero.title1}<br />
              <span style={{ color: '#0084D6' }}>{t.hero.title2.split(' ')[0] || t.hero.title2}</span>{' '}
              <span style={{ color: '#D97706' }}>{t.hero.title2.split(' ').slice(1).join(' ')}</span>
            </h1>

            {/* Subtitle / Paragraph */}
            <p
              className="animate-fade-in"
              style={{
                fontSize: '1.02rem',
                lineHeight: 1.72,
                color: '#334155',
                maxWidth: '560px',
                marginBottom: '2rem',
                fontWeight: 400,
              }}
            >
              {t.hero.subtitle}
            </p>

            {/* Hero CTA Button - Electric Azure Blue from Logo */}
            <div>
              <button
                onClick={onOpenConsultation}
                className="btn-gold"
                style={{
                  padding: '0.88rem 1.95rem',
                  fontSize: '0.94rem',
                  fontWeight: 700,
                  backgroundColor: '#0084D6',
                  color: '#FFFFFF',
                  borderRadius: '6px',
                  boxShadow: '0 4px 14px rgba(0, 132, 214, 0.35)',
                }}
              >
                {t.hero.cta}
                <ArrowRight size={16} />
              </button>
            </div>

          </div>

          {/* Right Floating Strategic Pillar Typography */}
          <div className="hero-pillars-watermark">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.95rem',
                textAlign: 'right',
                letterSpacing: '0.22em',
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              {t.hero.pillars.map((pillar, index) => (
                <span
                  key={index}
                  style={{
                    color: '#0A1931',
                    letterSpacing: '0.24em',
                    opacity: 0.82,
                  }}
                >
                  {pillar}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-content-col {
            grid-column: span 7 !important;
          }
          .hero-pillars-watermark {
            grid-column: span 5 !important;
            display: flex !important;
            justify-content: flex-end !important;
            padding-right: 2rem;
          }
        }
        @media (max-width: 991px) {
          .hero-pillars-watermark {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
