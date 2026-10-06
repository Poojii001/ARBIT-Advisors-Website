import React, { useState, useEffect } from 'react';
import { Users2, Radio, ShieldCheck, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ImpactStats() {
  const [counts, setCounts] = useState({ campaigns: 0, reach: 0, trust: 0 });
  const { t } = useLanguage();

  useEffect(() => {
    const duration = 1400;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts({
        campaigns: Math.floor(ease * 35),
        reach: Math.floor(ease * 50),
        trust: Math.floor(ease * 92),
      });

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCounts({ campaigns: 35, reach: 50, trust: 92 });
      }
    };

    const animFrame = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  const stats = [
    {
      icon: Users2,
      value: `${counts.campaigns}+`,
      title: t.impact.campaignsTitle,
      subtitle: t.impact.campaignsSub,
    },
    {
      icon: Radio,
      value: `${counts.reach}M+`,
      title: t.impact.reachTitle,
      subtitle: t.impact.reachSub,
    },
    {
      icon: ShieldCheck,
      value: `${counts.trust}%`,
      title: t.impact.trustTitle,
      subtitle: t.impact.trustSub,
    },
  ];

  return (
    <section
      id="impact"
      style={{
        position: 'relative',
        padding: '3.5rem 0',
        backgroundColor: '#090E1A',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      {/* New Subtle Abstract Texture Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/assets/impact_bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          opacity: 0.55,
          filter: 'contrast(1.15) brightness(0.6)',
          zIndex: 0,
        }}
      />

      {/* Dark overlay gradient for maximum clarity */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(9, 14, 26, 0.95) 0%, rgba(9, 14, 26, 0.82) 40%, rgba(9, 14, 26, 0.75) 70%, rgba(9, 14, 26, 0.92) 100%)',
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Heading (4 cols) */}
          <div style={{ gridColumn: 'span 12' }} className="compact-impact-left">
            <div className="gold-badge" style={{ fontSize: '0.7rem', letterSpacing: '0.16em', fontWeight: 700, marginBottom: '0.5rem' }}>
              {t.impact.badge}
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.22,
                letterSpacing: '-0.015em',
                marginBottom: '0.75rem',
              }}
            >
              {t.impact.title1}<br />
              <span>{t.impact.title2}</span>
            </h2>

            {/* Audit Footnote */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#94A3B8',
                fontSize: '0.74rem',
                marginTop: '0.5rem',
              }}
            >
              <Info size={13} color="var(--theme-light)" style={{ flexShrink: 0 }} />
              <span>{t.impact.auditFootnote}</span>
            </div>
          </div>

          {/* Right Column: 3 Compact Metric Cards (8 cols) */}
          <div style={{ gridColumn: 'span 12' }} className="compact-impact-right">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {stats.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    style={{
                      padding: '1.25rem 1.1rem',
                      backgroundColor: 'rgba(15, 23, 42, 0.75)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '8px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '32px',
                          height: '32px',
                          borderRadius: '6px',
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: 'var(--theme-light)',
                          marginBottom: '0.6rem',
                        }}
                      >
                        <IconComponent size={16} strokeWidth={1.8} />
                      </div>

                      <div
                        style={{
                          fontSize: 'clamp(1.7rem, 2.2vw, 2.2rem)',
                          fontWeight: 800,
                          color: '#FFFFFF',
                          fontFamily: 'var(--font-mono)',
                          lineHeight: 1.1,
                          marginBottom: '0.25rem',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {item.value}
                      </div>

                      <div
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          color: 'var(--theme-light)',
                          textTransform: 'uppercase',
                          marginBottom: '0.25rem',
                        }}
                      >
                        {item.title}
                      </div>

                      <p
                        style={{
                          fontSize: '0.78rem',
                          color: '#94A3B8',
                          lineHeight: 1.4,
                        }}
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .compact-impact-left {
            grid-column: span 4 !important;
          }
          .compact-impact-right {
            grid-column: span 8 !important;
          }
        }
      `}</style>
    </section>
  );
}
