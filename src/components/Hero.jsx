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
        minHeight: 'clamp(520px, 82vh, 760px)',
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(2.5rem, 5vw, 4.5rem) 0',
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
      }}
    >
      {/* Parliament Background Image (Responsive width & position) */}
      <div
        className="hero-bg-graphic"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100%',
          backgroundImage: 'url(/assets/home.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'right 35%',
          opacity: 0.95,
          zIndex: 0,
        }}
      />

      {/* Seamless Soft Fade Gradient from Pure White to Transparent Image */}
      <div
        className="hero-gradient-overlay"
        style={{
          position: 'absolute',
          inset: 0,
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
          width: 'clamp(250px, 40vw, 450px)',
          height: 'clamp(250px, 40vw, 450px)',
          background: 'radial-gradient(circle, rgba(254, 243, 199, 0.5) 0%, transparent 70%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ zIndex: 2, position: 'relative', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'clamp(1rem, 3vw, 2rem)', alignItems: 'center' }}>
          
          {/* Left Hero Content Column */}
          <div style={{ gridColumn: 'span 12' }} className="hero-content-col">
            
            {/* Tag Badge */}
            <div
              className="gold-badge animate-fade-in"
              style={{
                letterSpacing: '0.16em',
                marginBottom: 'clamp(0.75rem, 2vw, 1.1rem)',
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
                fontSize: 'clamp(1.95rem, 4.2vw, 3.25rem)',
                lineHeight: 1.2,
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#0A1931',
                marginBottom: 'clamp(1rem, 2.5vw, 1.4rem)',
                maxWidth: '680px',
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
                fontSize: 'clamp(0.92rem, 1.4vw, 1.04rem)',
                lineHeight: 1.7,
                color: '#334155',
                maxWidth: '580px',
                marginBottom: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: 400,
              }}
            >
              {t.hero.subtitle}
            </p>

            {/* Hero CTA Button */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <button
                onClick={onOpenConsultation}
                className="btn-gold"
                style={{
                  padding: 'clamp(0.78rem, 1.8vw, 0.92rem) clamp(1.4rem, 2.5vw, 2rem)',
                }}
              >
                {t.hero.cta}
                <ArrowRight size={16} />
              </button>
            </div>

          </div>

          {/* Right Floating Strategic Pillar Typography (Desktop / Laptop Only) */}
          <div className="hero-pillars-watermark">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(0.7rem, 1.2vw, 1rem)',
                textAlign: 'right',
                letterSpacing: '0.22em',
                fontSize: 'clamp(0.75rem, 1vw, 0.88rem)',
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
        /* Desktop & Laptop */
        @media (min-width: 992px) {
          .hero-bg-graphic {
            width: 68% !important;
          }
          .hero-gradient-overlay {
            background: linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 36%, rgba(255, 255, 255, 0.88) 54%, rgba(255, 255, 255, 0.2) 80%, transparent 100%) !important;
          }
          .hero-content-col {
            grid-column: span 7 !important;
          }
          .hero-pillars-watermark {
            grid-column: span 5 !important;
            display: flex !important;
            justify-content: flex-end !important;
            padding-right: 1.5rem;
          }
        }

        /* Tablet (768px - 991px) */
        @media (min-width: 768px) and (max-width: 991px) {
          .hero-bg-graphic {
            width: 75% !important;
            opacity: 0.7 !important;
          }
          .hero-gradient-overlay {
            background: linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0.95) 45%, rgba(255, 255, 255, 0.45) 85%, transparent 100%) !important;
          }
          .hero-content-col {
            grid-column: span 12 !important;
          }
          .hero-pillars-watermark {
            display: none !important;
          }
        }

        /* Mobile (< 768px) */
        @media (max-width: 767px) {
          .hero-bg-graphic {
            width: 100% !important;
            background-position: center right !important;
            opacity: 0.25 !important;
          }
          .hero-gradient-overlay {
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.88) 100%) !important;
          }
          .hero-content-col {
            grid-column: span 12 !important;
          }
          .hero-pillars-watermark {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
