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
        padding: '5.5rem 0',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      <div className="container">
        {/* Section Header & Category Filter */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div>
            <div className="gold-badge" style={{ fontSize: '0.72rem', letterSpacing: '0.16em', fontWeight: 700, color: '#D97706' }}>
              {t.caseStudies.badge}
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 2.9vw, 2.45rem)', fontWeight: 800, color: '#0A1931', letterSpacing: '-0.015em' }}>
              {t.caseStudies.title}
            </h2>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {categories.map((cat, idx) => {
              const isActive = activeFilterIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveFilterIndex(idx)}
                  style={{
                    padding: '0.5rem 1.1rem',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    borderRadius: '20px',
                    border: isActive ? '1px solid #0084D6' : '1px solid #E2E8F0',
                    backgroundColor: isActive ? '#0084D6' : '#F8FAFC',
                    color: isActive ? '#FFFFFF' : '#475569',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="glass-card"
              style={{
                padding: '2.4rem 1.9rem',
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
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#0084D6',
                      textTransform: 'uppercase',
                    }}
                  >
                    {study.category}
                  </span>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.78rem', color: '#64748B' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Calendar size={14} color="#0084D6" /> {study.year}
                    </span>
                    <span>&bull;</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <MapPin size={14} color="#0084D6" /> {study.region}
                    </span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0A1931', lineHeight: 1.35, marginBottom: '0.75rem' }}>
                  {study.title}
                </h3>
                
                <div style={{ fontSize: '0.84rem', color: '#64748B', marginBottom: '1.2rem', fontStyle: 'italic' }}>
                  {t.caseStudies.clientProfile}: {study.client}
                </div>

                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.62, marginBottom: '1.5rem' }}>
                  {study.summary}
                </p>

                {/* Baseline vs Result Comparison Card */}
                <div
                  style={{
                    backgroundColor: '#F8FAFC',
                    borderRadius: '8px',
                    border: '1px solid #E2E8F0',
                    padding: '1.1rem',
                    marginBottom: '1.5rem',
                    fontSize: '0.86rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '3px' }}>
                      {t.caseStudies.baselineLabel}
                    </div>
                    <div style={{ color: '#334155', lineHeight: 1.45 }}>
                      {study.baseline}
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '0.55rem' }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#0084D6', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '3px', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <CheckCircle2 size={14} /> {t.caseStudies.resultLabel}
                    </div>
                    <div style={{ color: '#0A1931', fontWeight: 700, lineHeight: 1.45 }}>
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
                    backgroundColor: '#F8FAFC',
                    borderRadius: '8px',
                    border: '1px solid #E2E8F0',
                    marginBottom: '1rem',
                  }}
                >
                  {study.metrics.map((m, idx) => (
                    <div key={idx} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0A1931', fontFamily: 'var(--font-mono)' }}>
                        {m.val}
                      </div>
                      <div style={{ fontSize: '0.68rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase', marginTop: '2px' }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Consent & Permission Disclaimer */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.74rem', color: '#64748B' }}>
                  <ShieldCheck size={14} color="#0084D6" />
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
