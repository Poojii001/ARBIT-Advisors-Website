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
      {/* Clear, High-Visibility Background Graphic using home.png */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/assets/home.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          opacity: 0.95,
          zIndex: 0,
        }}
      />

      {/* Clean Gradient Overlay: Lighter Royal Navy on Left, Clear & Visible on Right */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, #132244 0%, #132244 28%, rgba(19, 34, 68, 0.72) 50%, rgba(19, 34, 68, 0.22) 85%, rgba(19, 34, 68, 0.1) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      
      {/* Clean Ambient Illumination */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '15%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, transparent 70%)',
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
              }}
            >
              {t.hero.badge}
            </div>

            {/* Main Headline with Radiant Positive Gradient */}
            <h1
              className="animate-fade-in"
              style={{
                fontSize: 'clamp(2.1rem, 3.5vw, 2.95rem)',
                lineHeight: 1.22,
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                maxWidth: '650px',
              }}
            >
              {t.hero.title1}<br />
              <span className="gradient-highlight">{t.hero.title2}</span>
            </h1>

            {/* Subtitle / Paragraph with High Contrast */}
            <p
              className="animate-fade-in"
              style={{
                fontSize: '1rem',
                lineHeight: 1.72,
                color: '#CBD5E1',
                maxWidth: '560px',
                marginBottom: '2rem',
                fontWeight: 400,
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)',
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
                  padding: '0.88rem 1.95rem',
                  fontSize: '0.94rem',
                  fontWeight: 700,
                }}
              >
                {t.hero.cta}
                <ArrowRight size={16} />
              </button>
            </div>

          </div>

          {/* Right Floating Strategic Pillar Typography - Clean normal text, no box, no dots */}
          <div className="hero-pillars-watermark">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                textAlign: 'right',
                letterSpacing: '0.22em',
                fontSize: '0.82rem',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              {t.hero.pillars.map((pillar, index) => (
                <span
                  key={index}
                  style={{
                    color: '#CBD5E1',
                    letterSpacing: '0.24em',
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
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
