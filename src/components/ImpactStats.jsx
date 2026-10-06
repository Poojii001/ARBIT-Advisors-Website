import React, { useState, useEffect } from 'react';
import { Users2, Radio, ShieldCheck, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ImpactStats() {
  const [counts, setCounts] = useState({ campaigns: 0, reach: 0, trust: 0 });
  const { t } = useLanguage();

  useEffect(() => {
    let start = 0;
    const duration = 1600;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts({
        campaigns: Math.floor(ease * 150),
        reach: Math.floor(ease * 500),
        trust: Math.floor(ease * 95),
      });

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCounts({ campaigns: 150, reach: 500, trust: 95 });
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
        padding: '5.5rem 0',
        backgroundColor: '#091228',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Background Graphic with rally crowd and flags texture - High Visibility */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/assets/flags_crowd.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          opacity: 0.85,
          filter: 'contrast(1.15) saturate(1.1) brightness(0.72)',
          zIndex: 0,
        }}
      />

      {/* Luminous Soft overlay gradient for high contrast readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(9, 18, 40, 0.84) 0%, rgba(9, 18, 40, 0.6) 40%, rgba(9, 18, 40, 0.55) 70%, rgba(9, 18, 40, 0.78) 100%)',
          zIndex: 1,
        }}
      />
      
      {/* Top and Bottom soft blend */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(9, 18, 40, 0.6) 0%, transparent 20%, transparent 80%, rgba(9, 18, 40, 0.8) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2.5rem',
            alignItems: 'center',
            marginBottom: '2.5rem',
          }}
        >
          {/* Left Column: Heading (4 cols) */}
          <div style={{ gridColumn: 'span 12' }} className="impact-left-col">
            <div className="gold-badge" style={{ fontSize: '0.74rem', letterSpacing: '0.18em', fontWeight: 600 }}>
              {t.impact.badge}
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 2.8vw, 2.35rem)',
                fontWeight: 700,
                color: '#F8FAFC',
                lineHeight: 1.25,
                letterSpacing: '-0.01em',
              }}
            >
              {t.impact.title1}<br />
              <span>{t.impact.title2}</span>
            </h2>
          </div>

          {/* Right Column: 3 Stat Cards (8 cols) */}
          <div style={{ gridColumn: 'span 12' }} className="impact-right-col">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
                borderLeft: '1px solid rgba(0, 163, 255, 0.25)',
                paddingLeft: '2rem',
              }}
              className="impact-stats-grid"
            >
              {stats.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    {/* Top Icon */}
                    <div
                      style={{
                        marginBottom: '0.75rem',
                        color: 'var(--theme-primary)',
                      }}
                    >
                      <IconComponent size={24} strokeWidth={1.8} />
                    </div>

                    {/* Stat Number */}
                    <div
                      style={{
                        fontSize: 'clamp(2.1rem, 2.8vw, 2.6rem)',
                        fontWeight: 700,
                        color: '#F8FAFC',
                        fontFamily: 'var(--font-mono)',
                        lineHeight: 1.1,
                        marginBottom: '0.4rem',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {item.value}
                    </div>

                    {/* Label */}
                    <div
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        color: '#CBD5E1',
                        textTransform: 'uppercase',
                        marginBottom: '0.2rem',
                      }}
                    >
                      {item.title}
                    </div>

                    {/* Subtitle / Definition */}
                    <div
                      style={{
                        fontSize: '0.82rem',
                        color: '#CBD5E1',
                        fontWeight: 400,
                        lineHeight: 1.45,
                      }}
                    >
                      {item.subtitle}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Audit Footnote for Credibility */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            paddingTop: '1.2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            color: '#94A3B8',
            fontSize: '0.76rem',
          }}
        >
          <Info size={14} color="var(--theme-cyan)" style={{ flexShrink: 0 }} />
          <span>{t.impact.auditFootnote}</span>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .impact-left-col {
            grid-column: span 4 !important;
          }
          .impact-right-col {
            grid-column: span 8 !important;
          }
        }
        @media (max-width: 768px) {
          .impact-stats-grid {
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 1px solid rgba(0, 163, 255, 0.25);
            padding-top: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
