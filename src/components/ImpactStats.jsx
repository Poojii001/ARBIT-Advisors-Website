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
        backgroundColor: '#F8FAFC',
        overflow: 'hidden',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
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
            <div className="gold-badge" style={{ fontSize: '0.7rem', letterSpacing: '0.16em', fontWeight: 700, marginBottom: '0.5rem', color: '#D97706' }}>
              {t.impact.badge}
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)',
                fontWeight: 800,
                color: '#0A1931',
                lineHeight: 1.22,
                letterSpacing: '-0.015em',
                marginBottom: '0.75rem',
              }}
            >
              {t.impact.title1}<br />
              <span style={{ color: '#0084D6' }}>{t.impact.title2}</span>
            </h2>

            {/* Audit Footnote */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#64748B',
                fontSize: '0.74rem',
                marginTop: '0.5rem',
              }}
            >
              <Info size={13} color="#0084D6" style={{ flexShrink: 0 }} />
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
                      padding: '1.4rem 1.2rem',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: '10px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '36px',
                          height: '36px',
                          borderRadius: '8px',
                          backgroundColor: '#EFF6FF',
                          border: '1px solid #DBEAFE',
                          color: '#0084D6',
                          marginBottom: '0.75rem',
                        }}
                      >
                        <IconComponent size={18} strokeWidth={2} />
                      </div>

                      <div
                        style={{
                          fontSize: 'clamp(1.7rem, 2.2vw, 2.2rem)',
                          fontWeight: 800,
                          color: '#0A1931',
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
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          color: '#D97706',
                          textTransform: 'uppercase',
                          marginBottom: '0.25rem',
                        }}
                      >
                        {item.title}
                      </div>

                      <p
                        style={{
                          fontSize: '0.8rem',
                          color: '#64748B',
                          lineHeight: 1.45,
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
