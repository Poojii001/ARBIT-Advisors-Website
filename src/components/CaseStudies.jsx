import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function CaseStudies() {
  const { t } = useLanguage();
  const [activeFilterIndex, setActiveFilterIndex] = useState(0);

  const categories = t.caseStudies.categories;
  const activeCategory = categories[activeFilterIndex] || categories[0];

  const filteredStudies =
    activeFilterIndex === 0
      ? t.caseStudies.items
      : t.caseStudies.items.filter((s, idx) => idx + 1 === activeFilterIndex);

  return (
    <section
      id="case-studies"
      style={{
        padding: '6rem 0',
        backgroundColor: '#0B1632',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="container">
        {/* Section Header & Category Filter */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div>
            <div className="gold-badge" style={{ fontSize: '0.74rem', letterSpacing: '0.18em', fontWeight: 600 }}>
              {t.caseStudies.badge}
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.35rem)', fontWeight: 700, color: '#F8FAFC' }}>
              {t.caseStudies.title}
            </h2>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFilterIndex(idx)}
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  borderRadius: '20px',
                  border: activeFilterIndex === idx ? '1px solid var(--theme-cyan)' : '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: activeFilterIndex === idx ? 'rgba(0, 163, 255, 0.18)' : 'transparent',
                  color: activeFilterIndex === idx ? 'var(--theme-cyan)' : '#94A3B8',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="glass-card"
              style={{
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: 'var(--theme-cyan)',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '0.75rem',
                  }}
                >
                  {study.category}
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFF', lineHeight: 1.35, marginBottom: '0.85rem' }}>
                  {study.title}
                </h3>
                <div style={{ fontSize: '0.82rem', color: '#64748B', marginBottom: '1.25rem', fontStyle: 'italic' }}>
                  {t.caseStudies.clientProfile}: {study.client}
                </div>
                <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.62, marginBottom: '2rem' }}>
                  {study.summary}
                </p>
              </div>

              {/* Metrics Box */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.75rem',
                  padding: '1rem',
                  backgroundColor: 'rgba(3, 7, 18, 0.7)',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                {study.metrics.map((m, idx) => (
                  <div key={idx} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--theme-light)', fontFamily: 'var(--font-mono)' }}>
                      {m.val}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase', marginTop: '2px' }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
