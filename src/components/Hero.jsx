import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero({ onOpenConsultation }) {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Retrieve slides from translation context or fallback to default 3 slides
  const slides = t.hero?.slides || [
    {
      id: 1,
      image: '/assets/sansadbhavan1.jpg',
      badge: t.hero?.badge || 'POLITICAL PR & STRATEGIC ADVISORY',
      title1: t.hero?.title1 || 'Shaping Political Narratives,',
      title2: t.hero?.title2 || 'Driving Electoral Success.',
      subtitle: t.hero?.subtitle || 'We combine data-driven communication, strategic counsel and reputation management to help leaders, parties and organizations win trust, build influence and create lasting impact.',
      cta: t.hero?.cta || 'Book a Consultation',
      pillars: t.hero?.pillars || ['STRATEGY', 'COMMUNICATION', 'INFLUENCE', 'IMPACT'],
    },
    {
      id: 2,
      image: '/assets/sansadbhavan2.jpg',
      badge: 'DATA-DRIVEN ELECTORAL INTELLIGENCE',
      title1: 'Empowering Visionary Leaders,',
      title2: 'Winning Democratic Mandates.',
      subtitle: 'Granular booth-level psycho-demographics, real-time social listening, and predictive swing-voter analytics to anticipate ground trends before traditional polls.',
      cta: 'Explore Strategic Advisory',
      pillars: ['INTELLIGENCE', 'PRECISION', 'PERCEPTION', 'MANDATE'],
    },
    {
      id: 3,
      image: '/assets/sansadbhavan3.jpg',
      badge: 'MEDIA RELATIONS & CRISIS COMMAND',
      title1: 'Dominating Media Spheres,',
      title2: 'Fortifying Public Trust.',
      subtitle: 'Sub-15 minute crisis neutralization, high-impact Tier-1 broadcast positioning, and syndicated thought leadership across national and regional media ecosystems.',
      cta: 'Schedule Strategic Briefing',
      pillars: ['MEDIA DOMINANCE', 'CRISIS SHIELD', 'REPUTATION', 'VICTORY'],
    },
  ];

  // Auto-advance slider every 5 seconds continuously
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length, currentSlide]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Touch Swipe Handlers for Mobile & Tablet
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const activeSlideData = slides[currentSlide] || slides[0];

  return (
    <section
      id="home"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        position: 'relative',
        minHeight: 'clamp(540px, 84vh, 780px)',
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(2.5rem, 5vw, 4.5rem) 0 clamp(3.5rem, 6vw, 5rem) 0',
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
      }}
    >
      {/* Background Slides with Cross-Fade Transitions */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id || index}
            className="hero-bg-graphic"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              height: '100%',
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'right 30%',
              opacity: isActive ? 0.95 : 0,
              zIndex: isActive ? 0 : -1,
              transition: 'opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 6s ease-out',
              transform: isActive ? 'scale(1.02)' : 'scale(1)',
            }}
          />
        );
      })}

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
      
      {/* Subtle Warm Amber Flourish in Top Left Corner */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: 'clamp(250px, 40vw, 450px)',
          height: 'clamp(250px, 40vw, 450px)',
          background: 'radial-gradient(circle, rgba(254, 243, 199, 0.45) 0%, transparent 70%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ zIndex: 2, position: 'relative', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'clamp(1rem, 3vw, 2rem)', alignItems: 'center' }}>
          
          {/* Left Hero Content Column with Keyed Transition */}
          <div style={{ gridColumn: 'span 12' }} className="hero-content-col" key={currentSlide}>
            
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
              {activeSlideData.badge}
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
              {activeSlideData.title1}<br />
              <span style={{ color: '#0084D6' }}>{activeSlideData.title2.split(' ')[0] || activeSlideData.title2}</span>{' '}
              <span style={{ color: '#D97706' }}>{activeSlideData.title2.split(' ').slice(1).join(' ')}</span>
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
              {activeSlideData.subtitle}
            </p>

            {/* Hero CTA Button & Slider Controls Row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center' }}>
              <button
                onClick={onOpenConsultation}
                className="btn-gold animate-fade-in"
                style={{
                  padding: 'clamp(0.78rem, 1.8vw, 0.92rem) clamp(1.4rem, 2.5vw, 2rem)',
                }}
              >
                {activeSlideData.cta}
                <ArrowRight size={16} />
              </button>

              {/* Slider Arrow Controls */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  onClick={handlePrev}
                  aria-label="Previous slide"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    border: '1px solid #CBD5E1',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0A1931',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#0084D6';
                    e.currentTarget.style.color = '#0084D6';
                    e.currentTarget.style.transform = 'scale(1.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#CBD5E1';
                    e.currentTarget.style.color = '#0A1931';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  onClick={handleNext}
                  aria-label="Next slide"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    border: '1px solid #CBD5E1',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0A1931',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#0084D6';
                    e.currentTarget.style.color = '#0084D6';
                    e.currentTarget.style.transform = 'scale(1.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#CBD5E1';
                    e.currentTarget.style.color = '#0A1931';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

          </div>

          {/* Right Floating Strategic Pillar Typography (Desktop / Laptop Only) */}
          <div className="hero-pillars-watermark" key={`pillars-${currentSlide}`}>
            <div
              className="animate-fade-in"
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
              {activeSlideData.pillars.map((pillar, index) => (
                <span
                  key={index}
                  style={{
                    color: '#0A1931',
                    letterSpacing: '0.24em',
                    opacity: 0.85,
                  }}
                >
                  {pillar}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Slide Indicators (Modern Animated Capsule Pills without numeric text) */}
        <div
          style={{
            position: 'absolute',
            bottom: '-2.5rem',
            left: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            zIndex: 10,
          }}
        >
          {slides.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                style={{
                  position: 'relative',
                  width: isActive ? '38px' : '12px',
                  height: '8px',
                  borderRadius: '999px',
                  border: 'none',
                  backgroundColor: isActive ? 'rgba(0, 132, 214, 0.2)' : '#CBD5E1',
                  cursor: 'pointer',
                  padding: 0,
                  overflow: 'hidden',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease',
                }}
              >
                {isActive && (
                  <div
                    key={`progress-${currentSlide}`}
                    className="hero-progress-active"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      backgroundColor: '#0084D6',
                      borderRadius: '999px',
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

      </div>

      <style>{`
        @keyframes heroProgressBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .hero-progress-active {
          animation: heroProgressBar 5s linear forwards;
        }

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
