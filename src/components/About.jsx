import React from 'react';
import { Target, Cpu, Eye, ShieldAlert, CheckCircle } from 'lucide-react';

export default function About({ onOpenConsultation }) {
  const pillars = [
    {
      icon: Target,
      title: 'Precision Narrative Architecture',
      desc: 'We construct defensible, resonant political messaging based on granular district-level psycho-demographic data.',
    },
    {
      icon: Cpu,
      title: 'AI & Sentiment Intelligence',
      desc: 'Our real-time social listening and predictive swing-voter analytics track sentiment shifts before mainstream polls catch on.',
    },
    {
      icon: Eye,
      title: 'Dominant Media Positioning',
      desc: 'Deep networks with key national anchors, chief political correspondents, and vernacular print powerhouses.',
    },
    {
      icon: ShieldAlert,
      title: 'Rapid Response Crisis Shield',
      desc: 'Sub-15 minute protocol deployment to neutralize opposition narratives, smear campaigns, and viral misinformation.',
    },
  ];

  return (
    <section
      id="about"
      style={{
        padding: '6rem 0',
        backgroundColor: '#040810',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '720px', marginBottom: '3.5rem' }}>
          <div className="gold-badge">WHO WE ARE</div>
          <h2
            style={{
              fontSize: 'clamp(2.1rem, 3.5vw, 2.9rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.2,
              marginBottom: '1.25rem',
            }}
          >
            Pioneering Strategic Political Communications in India.
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.7 }}>
            Arbit Advisors is a premier political consulting and strategic communications firm. We advise party high-commands, union ministers, chief ministers, and emerging political leaders on navigating modern multi-channel electoral warfare.
          </p>
        </div>

        {/* 4 Strategic Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.8rem',
            marginBottom: '4rem',
          }}
        >
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2rem',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(229, 169, 60, 0.1)',
                    border: '1px solid rgba(229, 169, 60, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-primary)',
                    marginBottom: '1.25rem',
                  }}
                >
                  <Icon size={22} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFF', marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Strategic Overview Showcase with Home Image */}
        <div
          style={{
            position: 'relative',
            borderRadius: '10px',
            overflow: 'hidden',
            border: '1px solid rgba(229, 169, 60, 0.25)',
            marginBottom: '4rem',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
          }}
        >
          <img
            src="/assets/home.png"
            alt="Arbit Strategic Platform"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '480px',
              objectFit: 'cover',
              objectPosition: 'top center',
              display: 'block',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(4, 8, 16, 0.2) 0%, rgba(4, 8, 16, 0.85) 90%, #040810 100%)',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '2.5rem',
            }}
          >
            <div>
              <div className="gold-badge" style={{ marginBottom: '0.4rem' }}>INTEGRATED CAMPAIGN COMMAND</div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFF', marginBottom: '0.5rem' }}>
                Precision-Engineered Electoral War Rooms
              </h3>
              <p style={{ color: '#CBD5E1', fontSize: '0.95rem', maxWidth: '650px', lineHeight: 1.6 }}>
                Combining ground voter pulse, high-frequency media monitoring, and synchronized digital communication for decisive electoral breakthroughs.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement Box */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(14, 23, 42, 0.9) 0%, rgba(6, 12, 24, 0.95) 100%)',
            border: '1px solid var(--border-gold)',
            borderRadius: '8px',
            padding: '2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <span style={{ color: 'var(--gold-light)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              OUR PHILOSOPHY
            </span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FFF', marginTop: '0.4rem', marginBottom: '0.75rem' }}>
              Winning campaigns are built on discipline, data, and relentless storytelling.
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.6 }}>
              We do not rely on guesswork or cookie-cutter templates. Every campaign strategy is forged in real-world ground intelligence and executed with military precision.
            </p>
          </div>
          <button onClick={onOpenConsultation} className="btn-gold" style={{ padding: '0.9rem 1.8rem' }}>
            Schedule a Confidential Briefing
          </button>
        </div>
      </div>
    </section>
  );
}
