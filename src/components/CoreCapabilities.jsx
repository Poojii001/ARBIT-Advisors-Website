import React, { useState } from 'react';
import { ArrowRight, Megaphone, Newspaper, Compass, ChevronRight, X, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function CoreCapabilities({ onOpenConsultation }) {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(null);
  const { t } = useLanguage();

  const iconMap = [Megaphone, Newspaper, Compass];

  const selectedService =
    selectedServiceIndex !== null ? t.capabilities.items[selectedServiceIndex] : null;

  return (
    <section
      id="services"
      style={{
        padding: 'clamp(3.5rem, 6vw, 5.5rem) 0',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        position: 'relative',
      }}
    >
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'clamp(1.75rem, 3vw, 2.5rem)', alignItems: 'stretch' }}>
          
          {/* Left Column: Heading & Introduction (4 cols on desktop) */}
          <div style={{ gridColumn: 'span 12' }} className="capabilities-left-col">
            <div className="gold-badge" style={{ fontSize: '0.72rem', letterSpacing: '0.16em', fontWeight: 700, color: '#D97706' }}>
              {t.capabilities.badge}
            </div>
            
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.2vw, 2.45rem)',
                fontWeight: 800,
                color: '#0A1931',
                lineHeight: 1.25,
                marginBottom: '1rem',
                letterSpacing: '-0.015em',
              }}
            >
              {t.capabilities.title}
            </h2>

            <p
              style={{
                fontSize: 'clamp(0.92rem, 1.3vw, 0.98rem)',
                color: '#475569',
                lineHeight: 1.68,
                marginBottom: '1.8rem',
                maxWidth: '420px',
              }}
            >
              {t.capabilities.description}
            </p>

            <button
              onClick={() => setSelectedServiceIndex(0)}
              className="btn-gold-outline"
              style={{ padding: '0.75rem 1.5rem', fontSize: '0.86rem' }}
            >
              {t.capabilities.exploreBtn}
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Right Column: Capability Cards (8 cols on desktop) */}
          <div style={{ gridColumn: 'span 12' }} className="capabilities-right-col">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: 'clamp(1.2rem, 2vw, 1.5rem)',
                height: '100%',
              }}
            >
              {t.capabilities.items.map((cap, idx) => {
                const IconComponent = iconMap[idx] || Compass;
                return (
                  <div
                    key={cap.number}
                    className="glass-card"
                    style={{
                      padding: 'clamp(1.5rem, 3vw, 2.2rem) clamp(1.25rem, 2.5vw, 1.7rem)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative',
                    }}
                  >
                    {/* Top Row: Index number */}
                    <div>
                      <div
                        style={{
                          fontSize: '0.82rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700,
                          color: '#0084D6',
                          marginBottom: '1rem',
                        }}
                      >
                        {cap.number}
                      </div>

                      {/* Icon with Electric Azure Background */}
                      <div
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '8px',
                          border: '1px solid #DBEAFE',
                          backgroundColor: '#EFF6FF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '1.15rem',
                          color: '#0084D6',
                        }}
                      >
                        <IconComponent size={22} strokeWidth={2} />
                      </div>

                      {/* Title */}
                      <h3
                        style={{
                          fontSize: 'clamp(1.15rem, 2vw, 1.25rem)',
                          fontWeight: 700,
                          color: '#0A1931',
                          marginBottom: '0.75rem',
                          lineHeight: 1.35,
                        }}
                      >
                        {cap.title}
                      </h3>

                      {/* Description */}
                      <p
                        style={{
                          fontSize: '0.9rem',
                          lineHeight: 1.62,
                          color: '#475569',
                          marginBottom: '1.5rem',
                        }}
                      >
                        {cap.description}
                      </p>
                    </div>

                    {/* Card Footer Link */}
                    <div>
                      <button
                        onClick={() => setSelectedServiceIndex(idx)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          fontSize: '0.88rem',
                          fontWeight: 700,
                          color: '#0084D6',
                          letterSpacing: '0.01em',
                          transition: 'all 0.2s ease',
                          padding: '6px 0',
                          minHeight: '36px',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateX(4px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        {t.capabilities.learnMore}
                        <ArrowRight size={14} color="#0084D6" />
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
        <div className="modal-overlay" onClick={() => setSelectedServiceIndex(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)', maxWidth: '620px' }}
          >
            <button
              onClick={() => setSelectedServiceIndex(null)}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: '1.2rem',
                right: '1.2rem',
                color: '#64748B',
                padding: '0.4rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F1F5F9',
              }}
            >
              <X size={18} />
            </button>

            <div className="gold-badge" style={{ marginBottom: '0.5rem', color: '#D97706' }}>
              {t.capabilities.modalBadge} &bull; {selectedService.number}
            </div>
            <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0A1931', marginBottom: '0.85rem' }}>
              {selectedService.title}
            </h3>
            <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {selectedService.description}
            </p>

            <div style={{ marginBottom: '1.8rem' }}>
              <h4 style={{ fontSize: '0.84rem', letterSpacing: '0.08em', color: '#0084D6', textTransform: 'uppercase', marginBottom: '0.85rem', fontWeight: 700 }}>
                {t.capabilities.deliverablesTitle}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {selectedService.details.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <CheckCircle2 size={17} color="#0084D6" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'flex-end', paddingTop: '1rem', borderTop: '1px solid #E2E8F0' }}>
              <button onClick={() => setSelectedServiceIndex(null)} className="btn-gold-outline" style={{ padding: '0.7rem 1.3rem' }}>
                {t.capabilities.closeBtn}
              </button>
              <button
                onClick={() => {
                  setSelectedServiceIndex(null);
                  onOpenConsultation();
                }}
                className="btn-gold"
                style={{ padding: '0.7rem 1.4rem' }}
              >
                {t.capabilities.inquireBtn}
                <ArrowRight size={15} />
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
