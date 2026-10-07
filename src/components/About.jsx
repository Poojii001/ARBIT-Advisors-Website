import React from 'react';
import { Target, Cpu, Eye, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About({ onOpenConsultation }) {
  const { t } = useLanguage();

  const iconMap = [Target, Cpu, Eye, ShieldAlert];

  return (
    <section
      id="about"
      style={{
        padding: 'clamp(3.5rem, 6vw, 5.5rem) 0',
        backgroundColor: '#F8FAFC',
        position: 'relative',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '720px', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
          <div className="gold-badge" style={{ fontSize: '0.72rem', letterSpacing: '0.16em', fontWeight: 700, color: '#D97706' }}>
            {t.about.badge}
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3.2vw, 2.7rem)',
              fontWeight: 800,
              color: '#0A1931',
              lineHeight: 1.25,
              marginBottom: '1rem',
              letterSpacing: '-0.015em',
            }}
          >
            {t.about.title}
          </h2>
          <p style={{ fontSize: 'clamp(0.92rem, 1.4vw, 1.02rem)', color: '#475569', lineHeight: 1.75 }}>
            {t.about.desc}
          </p>
        </div>

        {/* 4 Strategic Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: 'clamp(1.2rem, 2vw, 1.8rem)',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          {t.about.pillars.map((item, idx) => {
            const Icon = iconMap[idx] || Target;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: 'clamp(1.5rem, 2.5vw, 2rem)',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    backgroundColor: '#EFF6FF',
                    border: '1px solid #DBEAFE',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0084D6',
                    marginBottom: '1.15rem',
                  }}
                >
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.2rem)', fontWeight: 700, color: '#0A1931', marginBottom: '0.65rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Strategic Overview Showcase with War Room Image */}
        <div
          style={{
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid #E2E8F0',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.12)',
            minHeight: 'clamp(320px, 45vw, 480px)',
          }}
        >
          <img
            src="/assets/war_room.jpg"
            alt="Arbit Campaign War Room"
            style={{
              width: '100%',
              height: '100%',
              minHeight: 'clamp(320px, 45vw, 480px)',
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
              background: 'linear-gradient(180deg, rgba(10, 25, 49, 0.2) 0%, rgba(10, 25, 49, 0.85) 70%, #0A1931 100%)',
              display: 'flex',
              alignItems: 'flex-end',
              padding: 'clamp(1.25rem, 3.5vw, 2.5rem)',
            }}
          >
            <div>
              <div className="gold-badge" style={{ marginBottom: '0.35rem', color: '#F59E0B' }}>
                {t.about.showcaseBadge}
              </div>
              <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                {t.about.showcaseTitle}
              </h3>
              <p style={{ color: '#E2E8F0', fontSize: 'clamp(0.86rem, 1.3vw, 0.96rem)', maxWidth: '650px', lineHeight: 1.65 }}>
                {t.about.showcaseDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement Box */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'clamp(1.25rem, 2.5vw, 2rem)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)',
          }}
        >
          <div style={{ maxWidth: '640px', flex: '1 1 300px' }}>
            <span style={{ color: '#0084D6', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {t.about.philosophyBadge}
            </span>
            <h3 style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.45rem)', fontWeight: 700, color: '#0A1931', marginTop: '0.35rem', marginBottom: '0.65rem' }}>
              {t.about.philosophyTitle}
            </h3>
            <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.65 }}>
              {t.about.philosophyDesc}
            </p>
          </div>
          <button onClick={onOpenConsultation} className="btn-gold" style={{ padding: '0.85rem 1.8rem', whiteSpace: 'nowrap' }}>
            {t.about.briefingBtn}
          </button>
        </div>
      </div>
    </section>
  );
}
