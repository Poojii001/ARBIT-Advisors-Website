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
        padding: '5.5rem 0',
        backgroundColor: '#16274E',
        position: 'relative',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '720px', marginBottom: '3.5rem' }}>
          <div className="gold-badge" style={{ fontSize: '0.72rem', letterSpacing: '0.16em', fontWeight: 700 }}>
            {t.about.badge}
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.9rem, 3.2vw, 2.7rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.25,
              marginBottom: '1.25rem',
              letterSpacing: '-0.015em',
            }}
          >
            {t.about.title}
          </h2>
          <p style={{ fontSize: '1.02rem', color: '#F1F5F9', lineHeight: 1.75 }}>
            {t.about.desc}
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
          {t.about.pillars.map((item, idx) => {
            const Icon = iconMap[idx] || Target;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2rem',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--theme-light)',
                    marginBottom: '1.25rem',
                  }}
                >
                  <Icon size={20} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#F1F5F9', lineHeight: 1.65 }}>
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
            border: '1px solid rgba(255, 255, 255, 0.12)',
            marginBottom: '4rem',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
          }}
        >
          <img
            src="/assets/war_room.jpg"
            alt="Arbit Campaign War Room"
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
              background: 'linear-gradient(180deg, rgba(19, 34, 68, 0.15) 0%, rgba(19, 34, 68, 0.88) 85%, #132244 100%)',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '2.5rem',
            }}
          >
            <div>
              <div className="gold-badge" style={{ marginBottom: '0.4rem' }}>
                {t.about.showcaseBadge}
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                {t.about.showcaseTitle}
              </h3>
              <p style={{ color: '#FFFFFF', fontSize: '0.96rem', maxWidth: '650px', lineHeight: 1.65 }}>
                {t.about.showcaseDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement Box */}
        <div
          style={{
            background: 'rgba(26, 44, 82, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '8px',
            padding: '2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <span style={{ color: 'var(--theme-light)', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {t.about.philosophyBadge}
            </span>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.4rem', marginBottom: '0.75rem' }}>
              {t.about.philosophyTitle}
            </h3>
            <p style={{ color: '#F1F5F9', fontSize: '0.96rem', lineHeight: 1.65 }}>
              {t.about.philosophyDesc}
            </p>
          </div>
          <button onClick={onOpenConsultation} className="btn-gold" style={{ padding: '0.85rem 1.8rem' }}>
            {t.about.briefingBtn}
          </button>
        </div>
      </div>
    </section>
  );
}
