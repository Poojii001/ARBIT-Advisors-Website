import React, { useState, useEffect } from 'react';
import { Users2, Radio, ShieldCheck, Award } from 'lucide-react';

export default function ImpactStats() {
  const [counts, setCounts] = useState({ campaigns: 0, reach: 0, trust: 0 });

  useEffect(() => {
    // Smooth number animation
    let start = 0;
    const duration = 1600;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
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
      title: 'CAMPAIGNS MANAGED',
      subtitle: 'From local to national',
    },
    {
      icon: Radio,
      value: `${counts.reach}M+`,
      title: 'TOTAL REACH',
      subtitle: 'Across traditional & digital media',
    },
    {
      icon: ShieldCheck,
      value: `${counts.trust}%`,
      title: 'CLIENT TRUST FACTOR',
      subtitle: 'Built on results, not promises',
    },
  ];

  return (
    <section
      id="impact"
      style={{
        position: 'relative',
        padding: '5rem 0',
        backgroundColor: '#050A14',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Background Graphic with rally crowd and flags texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/assets/flags_crowd.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          opacity: 0.22,
          zIndex: 0,
        }}
      />

      {/* Dark overlay gradients */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, #050A14 0%, rgba(5, 10, 20, 0.88) 40%, rgba(5, 10, 20, 0.92) 100%)',
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Heading (4 cols) */}
          <div style={{ gridColumn: 'span 12' }} className="impact-left-col">
            <div className="gold-badge" style={{ fontSize: '0.74rem', letterSpacing: '0.18em', fontWeight: 600 }}>
              OUR IMPACT
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 2.8vw, 2.35rem)',
                fontWeight: 700,
                color: '#F8FAFC',
                lineHeight: 1.22,
                letterSpacing: '-0.01em',
              }}
            >
              Real Strategies.<br />
              <span>Measurable Results.</span>
            </h2>
          </div>

          {/* Right Column: 3 Stat Cards (8 cols) */}
          <div style={{ gridColumn: 'span 12' }} className="impact-right-col">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
                borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
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
                        color: 'var(--gold-primary)',
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

                    {/* Subtitle */}
                    <div
                      style={{
                        fontSize: '0.82rem',
                        color: '#8B9BB4',
                        fontWeight: 400,
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
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding-top: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
