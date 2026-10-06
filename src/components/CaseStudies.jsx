import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle, BarChart3, TrendingUp, Users } from 'lucide-react';

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState('All');

  const studies = [
    {
      id: 1,
      category: 'Electoral Strategy',
      title: 'State Assembly Victory: Multi-Phased Perception Overhaul',
      client: 'Major State Regional Party',
      metrics: [
        { label: 'Seat Swing', val: '+42 Seats' },
        { label: 'Youth Vote Share', val: '+18.4%' },
        { label: 'Digital Engagement', val: '120M+' },
      ],
      summary:
        'Engineered an aggressive, grassroots-focused narrative countering anti-incumbency sentiment through localized development townhalls and viral digital micro-campaigns.',
    },
    {
      id: 2,
      category: 'Crisis Mitigation',
      title: 'Neutralizing Coordinated Disinformation in 48 Hours',
      client: 'Union Cabinet Minister',
      metrics: [
        { label: 'Response Velocity', val: '< 18 Mins' },
        { label: 'Media Neutrality Ratio', val: '89%' },
        { label: 'Positive Sentiment Recovery', val: '76%' },
      ],
      summary:
        'Deployed our Rapid Response Command Center to deconstruct opposition allegations with verifiable audit proofs and primed prime-time debates across 14 broadcast networks.',
    },
    {
      id: 3,
      category: 'Brand PR & Positioning',
      title: 'National Leadership Positioning & Policy Vision Rollout',
      client: 'National Political Figure',
      metrics: [
        { label: 'Op-Ed Syndications', val: '45+ Papers' },
        { label: 'Public Approval Shift', val: '+22.5%' },
        { label: 'Prime Time Footprint', val: '320+ Hours' },
      ],
      summary:
        'Curated a 12-month national intellectual outreach tour, high-profile podcast appearances, and flagship policy whitepapers establishing domain authority in economic policy.',
    },
  ];

  const categories = ['All', 'Electoral Strategy', 'Crisis Mitigation', 'Brand PR & Positioning'];

  const filteredStudies =
    activeFilter === 'All' ? studies : studies.filter((s) => s.category === activeFilter);

  return (
    <section
      id="case-studies"
      style={{
        padding: '6rem 0',
        backgroundColor: '#060B16',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="container">
        {/* Section Header & Category Filter */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div>
            <div className="gold-badge">PROVEN TRACK RECORD</div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#FFF' }}>
              Strategic Case Studies
            </h2>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  borderRadius: '20px',
                  border: activeFilter === cat ? '1px solid var(--gold-primary)' : '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: activeFilter === cat ? 'rgba(229, 169, 60, 0.15)' : 'transparent',
                  color: activeFilter === cat ? 'var(--gold-primary)' : '#94A3B8',
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
                    color: 'var(--gold-primary)',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '0.75rem',
                  }}
                >
                  {study.category}
                </span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FFF', lineHeight: 1.35, marginBottom: '0.85rem' }}>
                  {study.title}
                </h3>
                <div style={{ fontSize: '0.82rem', color: '#64748B', marginBottom: '1.25rem', fontStyle: 'italic' }}>
                  Client Profile: {study.client}
                </div>
                <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '2rem' }}>
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
                  backgroundColor: 'rgba(4, 8, 16, 0.6)',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                {study.metrics.map((m, idx) => (
                  <div key={idx} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--gold-light)', fontFamily: 'var(--font-mono)' }}>
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
