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
      {/* Background Graphic Blend with Luminous Transparency */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '70%',
          height: '100%',
          backgroundImage: 'url(/assets/hero_parliament.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          opacity: 0.92,
          zIndex: 0,
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 12%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,1) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 12%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,1) 100%)',
        }}
      />

      {/* Luminous Navy overlay gradients */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, #091124 0%, #091124 35%, rgba(9, 17, 36, 0.72) 58%, rgba(9, 17, 36, 0.15) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      
      {/* Subtle top & bottom integration glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(9, 17, 36, 0.45) 0%, transparent 25%, transparent 75%, #091124 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Soft Ambient Cyan Lighting in Hero */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(0, 163, 255, 0.12) 0%, transparent 70%)',
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
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              {t.hero.pillars.map((pillar, index) => (
                <span
                  key={index}
                  style={{
                    color: 'var(--theme-cyan)',
                    textShadow: '0 0 12px rgba(0, 210, 255, 0.35)',
                    opacity: 0.95,
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
