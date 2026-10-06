import React, { useState } from 'react';
import { Calendar, MapPin, TrendingUp, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function CaseStudies() {
  const { t } = useLanguage();
  const [activeFilterIndex, setActiveFilterIndex] = useState(0);

  const categories = t.caseStudies.categories;

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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
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
                {/* Top Category & Year/Region Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      color: 'var(--theme-cyan)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {study.category}
                  </span>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.75rem', color: '#94A3B8' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Calendar size={13} color="var(--theme-light)" /> {study.year}
                    </span>
                    <span>&bull;</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <MapPin size={13} color="var(--theme-light)" /> {study.region}
                    </span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFF', lineHeight: 1.35, marginBottom: '0.85rem' }}>
                  {study.title}
                </h3>
                
                <div style={{ fontSize: '0.82rem', color: '#94A3B8', marginBottom: '1.25rem', fontStyle: 'italic' }}>
                  {t.caseStudies.clientProfile}: {study.client}
                </div>

                <p style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: 1.62, marginBottom: '1.5rem' }}>
                  {study.summary}
                </p>

                {/* Baseline vs Result Comparison Card */}
                <div
                  style={{
                    backgroundColor: 'rgba(10, 20, 44, 0.7)',
                    borderRadius: '6px',
                    border: '1px solid rgba(0, 163, 255, 0.2)',
                    padding: '1rem',
                    marginBottom: '1.5rem',
                    fontSize: '0.82rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>
                      {t.caseStudies.baselineLabel}
                    </div>
                    <div style={{ color: '#E2E8F0', lineHeight: 1.45 }}>
                      {study.baseline}
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.5rem' }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--theme-cyan)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <CheckCircle2 size={12} /> {t.caseStudies.resultLabel}
                    </div>
                    <div style={{ color: '#FFF', fontWeight: 600, lineHeight: 1.45 }}>
                      {study.result}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                {/* 3 Metric counters */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0.75rem',
                    padding: '0.9rem',
                    backgroundColor: 'rgba(5, 12, 28, 0.8)',
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    marginBottom: '1rem',
                  }}
                >
                  {study.metrics.map((m, idx) => (
                    <div key={idx} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--theme-light)', fontFamily: 'var(--font-mono)' }}>
                        {m.val}
                      </div>
                      <div style={{ fontSize: '0.65rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', marginTop: '2px' }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Consent & Permission Disclaimer */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.7rem', color: '#64748B' }}>
                  <ShieldCheck size={12} color="var(--theme-cyan)" />
                  <span>{t.caseStudies.permissionBadge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
