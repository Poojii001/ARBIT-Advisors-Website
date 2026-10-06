import React, { useState } from 'react';
import { ArrowRight, Megaphone, Newspaper, Compass, ChevronRight, X, CheckCircle2 } from 'lucide-react';

export default function CoreCapabilities({ onOpenConsultation }) {
  const [selectedService, setSelectedService] = useState(null);

  const capabilities = [
    {
      number: '01',
      icon: Megaphone,
      title: 'Brand PR',
      description:
        'Build a strong, credible and positive public image with targeted campaigns, thought leadership and reputation management.',
      details: [
        'Candidate Personality & Narrative Sculpting',
        'High-Impact Digital & Broadcast Campaigns',
        'Reputation Fortification & Crisis Pre-emption',
        'Constituency Perception Tracking & Poll Analysis',
        'Strategic Speechwriting & Keynote Positioning',
      ],
    },
    {
      number: '02',
      icon: Newspaper,
      title: 'Media Relations',
      description:
        'Get the right stories, in the right media, at the right time. We help you build lasting relationships with key journalists and media outlets.',
      details: [
        'National & Regional Tier-1 Media Placement',
        'Press Conference Management & Media Briefings',
        'Editorial Opinion-Pieces (Op-Ed) Placement',
        '24/7 Rapid Response Media War Room',
        'Journalist & Political Editor Engagement Networks',
      ],
    },
    {
      number: '03',
      icon: Compass,
      title: 'Strategic Advisory',
      description:
        'Actionable insights, political intelligence and strategy support to help you make informed decisions and stay ahead of the curve.',
      details: [
        'Electoral War Room Setup & Oversight',
        'Opposition Intelligence & Vulnerability Audits',
        'Coalition & Stakeholder Strategic Alignment',
        'Micro-Targeted Demographic Voter Messaging',
        'Post-Election Policy & Governance Positioning',
      ],
    },
  ];

  return (
    <section
      id="services"
      style={{
        padding: '6rem 0',
        backgroundColor: '#060C18',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        position: 'relative',
      }}
    >
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2.5rem', alignItems: 'stretch' }}>
          
          {/* Left Column: Heading & Introduction (4 cols) */}
          <div style={{ gridColumn: 'span 12' }} className="capabilities-left-col">
            <div className="gold-badge" style={{ fontSize: '0.74rem', letterSpacing: '0.18em', fontWeight: 600 }}>
              OUR CORE CAPABILITIES
            </div>
            
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 2.8vw, 2.35rem)',
                fontWeight: 700,
                color: '#F8FAFC',
                lineHeight: 1.22,
                marginBottom: '1rem',
                letterSpacing: '-0.01em',
              }}
            >
              Strategy. Media. Advisory.
            </h2>

            <p
              style={{
                fontSize: '0.94rem',
                color: '#94A3B8',
                lineHeight: 1.68,
                marginBottom: '1.8rem',
                maxWidth: '360px',
              }}
            >
              We craft powerful narratives, build media relationships and provide strategic guidance to help political leaders, parties and organizations achieve their goals.
            </p>

            <button
              onClick={() => setSelectedService(capabilities[0])}
              className="btn-gold-outline"
              style={{ padding: '0.78rem 1.5rem', fontSize: '0.86rem' }}
            >
              Explore Our Services
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Right Column: 3 Capability Cards (8 cols) */}
          <div style={{ gridColumn: 'span 12' }} className="capabilities-right-col">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.5rem',
                height: '100%',
              }}
            >
              {capabilities.map((cap) => {
                const IconComponent = cap.icon;
                return (
                  <div
                    key={cap.number}
                    className="glass-card"
                    style={{
                      padding: '2rem 1.6rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      backgroundColor: 'rgba(10, 18, 34, 0.65)',
                    }}
                  >
                    {/* Top Row: Index number */}
                    <div>
                      <div
                        style={{
                          fontSize: '0.82rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 500,
                          color: '#64748B',
                          marginBottom: '1.25rem',
                        }}
                      >
                        {cap.number}
                      </div>

                      {/* Icon with Gold Circle Background */}
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          border: '1px solid rgba(229, 169, 60, 0.3)',
                          backgroundColor: 'rgba(229, 169, 60, 0.05)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '1.25rem',
                          color: 'var(--gold-primary)',
                        }}
                      >
                        <IconComponent size={22} strokeWidth={1.8} />
                      </div>

                      {/* Title */}
                      <h3
                        style={{
                          fontSize: '1.2rem',
                          fontWeight: 700,
                          color: '#F8FAFC',
                          marginBottom: '0.75rem',
                        }}
                      >
                        {cap.title}
                      </h3>

                      {/* Description */}
                      <p
                        style={{
                          fontSize: '0.86rem',
                          lineHeight: 1.62,
                          color: '#8B9BB4',
                          marginBottom: '1.5rem',
                        }}
                      >
                        {cap.description}
                      </p>
                    </div>

                    {/* Card Footer Link */}
                    <div>
                      <button
                        onClick={() => setSelectedService(cap)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          color: '#E2E8F0',
                          letterSpacing: '0.02em',
                          transition: 'color 0.2s ease, transform 0.2s ease',
                          padding: '4px 0',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--gold-primary)';
                          e.currentTarget.style.transform = 'translateX(4px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#E2E8F0';
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        Learn More
                        <ArrowRight size={14} color="var(--gold-primary)" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ padding: '2.5rem' }}
          >
            <button
              onClick={() => setSelectedService(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                color: '#94A3B8',
                padding: '0.3rem',
                borderRadius: '50%',
              }}
            >
              <X size={20} />
            </button>

            <div className="gold-badge" style={{ marginBottom: '0.5rem' }}>CAPABILITY BRIEF &bull; {selectedService.number}</div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFF', marginBottom: '1rem' }}>
              {selectedService.title}
            </h3>
            <p style={{ color: '#CBD5E1', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '1.8rem' }}>
              {selectedService.description}
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '0.88rem', letterSpacing: '0.08em', color: 'var(--gold-primary)', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 700 }}>
                Core Strategic Deliverables
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {selectedService.details.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2 size={18} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.92rem', color: '#E2E8F0', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <button onClick={() => setSelectedService(null)} className="btn-gold-outline" style={{ padding: '0.75rem 1.4rem' }}>
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenConsultation();
                }}
                className="btn-gold"
                style={{ padding: '0.75rem 1.5rem' }}
              >
                Inquire for Campaign
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .capabilities-left-col {
            grid-column: span 4 !important;
          }
          .capabilities-right-col {
            grid-column: span 8 !important;
          }
        }
      `}</style>
    </section>
  );
}
