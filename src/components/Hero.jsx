import React from 'react';
import { ArrowRight, Shield, Award, Users, TrendingUp } from 'lucide-react';

export default function Hero({ onOpenConsultation }) {
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
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0.9) 60%, rgba(0,0,0,1) 100%), linear-gradient(to bottom, rgba(0,0,0,1) 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 15%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,1) 100%)',
        }}
      />

      {/* Dark overlay gradients for contrast */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, #040810 0%, #040810 38%, rgba(4, 8, 16, 0.75) 60%, rgba(4, 8, 16, 0.25) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      
      {/* Subtle top & bottom vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(4, 8, 16, 0.6) 0%, transparent 20%, transparent 80%, #040810 100%)',
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
                letterSpacing: '0.22em',
                marginBottom: '1.25rem',
                fontSize: '0.8rem',
                fontWeight: 700,
              }}
            >
              POLITICAL PR & STRATEGIC ADVISORY
            </div>

            {/* Main Headline */}
            <h1
              className="animate-fade-in"
              style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                lineHeight: 1.15,
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                marginBottom: '1.5rem',
                maxWidth: '680px',
              }}
            >
              Shaping Political Narratives,<br />
              <span style={{ color: '#FFFFFF' }}>Driving Electoral Success.</span>
            </h1>

            {/* Subtitle / Paragraph */}
            <p
              className="animate-fade-in"
              style={{
                fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
                lineHeight: 1.65,
                color: '#CBD5E1',
                maxWidth: '560px',
                marginBottom: '2.5rem',
                fontWeight: 400,
              }}
            >
              We combine data-driven communication, strategic counsel and reputation management to help leaders, parties and organizations win trust, build influence and create lasting impact.
            </p>

            {/* Hero CTA Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <button
                onClick={onOpenConsultation}
                className="btn-gold"
                style={{
                  padding: '1rem 2.2rem',
                  fontSize: '0.98rem',
                  fontWeight: 700,
                }}
              >
                Book a Consultation
                <ArrowRight size={18} />
              </button>

              <a
                href="#services"
                className="btn-gold-outline"
                style={{
                  padding: '0.95rem 1.8rem',
                  fontSize: '0.95rem',
                }}
              >
                Explore Capabilities
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.8rem',
                marginTop: '3.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                maxWidth: '540px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Shield size={16} color="#E5A93C" />
                <span style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 500 }}>High-Stakes Confidentiality</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <TrendingUp size={16} color="#E5A93C" />
                <span style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 500 }}>Real-Time Intelligence</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={16} color="#E5A93C" />
                <span style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 500 }}>Pan-India Reach</span>
              </div>
            </div>

          </div>

          {/* Right Floating Strategic Pillar Badges (Mockup Right Side Watermark) */}
          <div className="hero-pillars-watermark">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                textAlign: 'right',
                letterSpacing: '0.24em',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'rgba(255, 255, 255, 0.65)',
                textTransform: 'uppercase',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
              }}
            >
              <span style={{ color: 'var(--gold-light)' }}>STRATEGY</span>
              <span>COMMUNICATION</span>
              <span>INFLUENCE</span>
              <span>IMPACT</span>
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
