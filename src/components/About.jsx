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
        padding: '6rem 0',
        backgroundColor: '#091124',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '720px', marginBottom: '3.5rem' }}>
          <div className="gold-badge" style={{ fontSize: '0.74rem', letterSpacing: '0.18em', fontWeight: 600 }}>
            {t.about.badge}
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.9rem, 3.2vw, 2.7rem)',
              fontWeight: 700,
              color: '#F8FAFC',
              lineHeight: 1.25,
              marginBottom: '1.25rem',
            }}
          >
            {t.about.title}
          </h2>
          <p style={{ fontSize: '1.02rem', color: '#94A3B8', lineHeight: 1.7 }}>
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
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(0, 163, 255, 0.1)',
                    border: '1px solid rgba(0, 163, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--theme-primary)',
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
            border: '1px solid rgba(0, 163, 255, 0.25)',
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
              background: 'linear-gradient(180deg, rgba(9, 17, 36, 0.15) 0%, rgba(9, 17, 36, 0.8) 85%, #091124 100%)',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '2.5rem',
            }}
          >
            <div>
              <div className="gold-badge" style={{ marginBottom: '0.4rem' }}>
                {t.about.showcaseBadge}
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFF', marginBottom: '0.5rem' }}>
                {t.about.showcaseTitle}
              </h3>
              <p style={{ color: '#CBD5E1', fontSize: '0.95rem', maxWidth: '650px', lineHeight: 1.6 }}>
                {t.about.showcaseDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement Box */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(10, 18, 36, 0.9) 0%, rgba(5, 11, 24, 0.95) 100%)',
            border: '1px solid var(--border-theme)',
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
            <span style={{ color: 'var(--theme-cyan)', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {t.about.philosophyBadge}
            </span>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#FFF', marginTop: '0.4rem', marginBottom: '0.75rem' }}>
              {t.about.philosophyTitle}
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.6 }}>
              {t.about.philosophyDesc}
            </p>
          </div>
          <button onClick={onOpenConsultation} className="btn-gold" style={{ padding: '0.9rem 1.8rem' }}>
            {t.about.briefingBtn}
          </button>
        </div>
      </div>
    </section>
  );
}
