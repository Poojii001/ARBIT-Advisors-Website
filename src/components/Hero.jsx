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
        minHeight: '82vh',
        display: 'flex',
        alignItems: 'center',
        padding: '3rem 0 4.5rem 0',
        overflow: 'hidden',
      }}
    >
      {/* Background Graphic Blend */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '68%',
          height: '100%',
          backgroundImage: 'url(/assets/hero_parliament.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          opacity: 0.95,
          zIndex: 0,
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 15%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,1) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 15%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,1) 100%)',
        }}
      />

      {/* Dark overlay gradients for contrast */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, #030712 0%, #030712 38%, rgba(3, 7, 18, 0.75) 60%, rgba(3, 7, 18, 0.25) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      
      {/* Subtle top & bottom vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(3, 7, 18, 0.6) 0%, transparent 20%, transparent 80%, #030712 100%)',
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
                letterSpacing: '0.2em',
                marginBottom: '1rem',
                fontSize: '0.74rem',
                fontWeight: 600,
              }}
            >
              {t.hero.badge}
            </div>

            {/* Main Headline */}
            <h1
              className="animate-fade-in"
              style={{
                fontSize: 'clamp(1.9rem, 3.3vw, 2.75rem)',
                lineHeight: 1.25,
                fontWeight: 700,
                letterSpacing: '-0.015em',
                color: '#F8FAFC',
                marginBottom: '1.25rem',
                maxWidth: '620px',
              }}
            >
              {t.hero.title1}<br />
              <span>{t.hero.title2}</span>
            </h1>

            {/* Subtitle / Paragraph */}
            <p
              className="animate-fade-in"
              style={{
                fontSize: '0.94rem',
                lineHeight: 1.68,
                color: '#94A3B8',
                maxWidth: '520px',
                marginBottom: '2rem',
                fontWeight: 400,
              }}
            >
              {t.hero.subtitle}
            </p>

            {/* Hero CTA Button */}
            <div>
              <button
                onClick={onOpenConsultation}
                className="btn-gold"
                style={{
                  padding: '0.85rem 1.85rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                }}
              >
                {t.hero.cta}
                <ArrowRight size={16} />
              </button>
            </div>

          </div>

          {/* Right Floating Strategic Pillar Badges */}
          <div className="hero-pillars-watermark">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
                textAlign: 'right',
                letterSpacing: '0.22em',
                fontSize: '0.68rem',
                fontWeight: 600,
                color: 'rgba(255, 255, 255, 0.4)',
                textTransform: 'uppercase',
              }}
            >
              <span style={{ color: 'var(--theme-cyan)' }}>{t.hero.pillars[0]}</span>
              <span>{t.hero.pillars[1]}</span>
              <span>{t.hero.pillars[2]}</span>
              <span>{t.hero.pillars[3]}</span>
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
            padding-right: 1.5rem;
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
