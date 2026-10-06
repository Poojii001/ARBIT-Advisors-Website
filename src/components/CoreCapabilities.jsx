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
        padding: '5.5rem 0',
        backgroundColor: '#0F1626',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        position: 'relative',
      }}
    >
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2.5rem', alignItems: 'stretch' }}>
          
          {/* Left Column: Heading & Introduction (4 cols) */}
          <div style={{ gridColumn: 'span 12' }} className="capabilities-left-col">
            <div className="gold-badge" style={{ fontSize: '0.72rem', letterSpacing: '0.16em', fontWeight: 700 }}>
              {t.capabilities.badge}
            </div>
            
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 2.9vw, 2.45rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.25,
                marginBottom: '1rem',
                letterSpacing: '-0.015em',
              }}
            >
              {t.capabilities.title}
            </h2>

            <p
              style={{
                fontSize: '0.96rem',
                color: '#94A3B8',
                lineHeight: 1.68,
                marginBottom: '1.8rem',
                maxWidth: '380px',
              }}
            >
              {t.capabilities.description}
            </p>

            <button
              onClick={() => setSelectedServiceIndex(0)}
              className="btn-gold-outline"
              style={{ padding: '0.78rem 1.5rem', fontSize: '0.86rem' }}
            >
              {t.capabilities.exploreBtn}
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
              {t.capabilities.items.map((cap, idx) => {
                const IconComponent = iconMap[idx] || Compass;
                return (
                  <div
                    key={cap.number}
                    className="glass-card"
                    style={{
                      padding: '2.2rem 1.7rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative',
                      borderTop: '2px solid rgba(56, 189, 248, 0.4)',
                    }}
                  >
                    {/* Top Row: Index number */}
                    <div>
                      <div
                        style={{
                          fontSize: '0.8rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700,
                          color: 'var(--theme-light)',
                          marginBottom: '1.25rem',
                        }}
                      >
                        {cap.number}
                      </div>

                      {/* Icon with Subtle Warm & Azure Background */}
                      <div
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '8px',
                          border: '1px solid rgba(56, 189, 248, 0.25)',
                          backgroundColor: 'rgba(0, 163, 255, 0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '1.25rem',
                          color: 'var(--theme-light)',
                        }}
                      >
                        <IconComponent size={22} strokeWidth={1.8} />
                      </div>

                      {/* Title */}
                      <h3
                        style={{
                          fontSize: '1.2rem',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          marginBottom: '0.75rem',
                          lineHeight: 1.35,
                        }}
                      >
                        {cap.title}
                      </h3>

                      {/* Description */}
                      <p
                        style={{
                          fontSize: '0.88rem',
                          lineHeight: 1.62,
                          color: '#94A3B8',
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
                          fontSize: '0.86rem',
                          fontWeight: 600,
                          color: '#E2E8F0',
                          letterSpacing: '0.01em',
                          transition: 'color 0.2s ease, transform 0.2s ease',
                          padding: '4px 0',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--theme-light)';
                          e.currentTarget.style.transform = 'translateX(3px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#E2E8F0';
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        {t.capabilities.learnMore}
                        <ArrowRight size={14} color="var(--theme-light)" />
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
            style={{ padding: '2.5rem' }}
          >
            <button
              onClick={() => setSelectedServiceIndex(null)}
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

            <div className="gold-badge" style={{ marginBottom: '0.5rem' }}>
              {t.capabilities.modalBadge} &bull; {selectedService.number}
            </div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFF', marginBottom: '1rem' }}>
              {selectedService.title}
            </h3>
            <p style={{ color: '#CBD5E1', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '1.8rem' }}>
              {selectedService.description}
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '0.88rem', letterSpacing: '0.08em', color: 'var(--theme-light)', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 700 }}>
                {t.capabilities.deliverablesTitle}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {selectedService.details.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2 size={18} color="var(--theme-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.92rem', color: '#E2E8F0', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <button onClick={() => setSelectedServiceIndex(null)} className="btn-gold-outline" style={{ padding: '0.75rem 1.4rem' }}>
                {t.capabilities.closeBtn}
              </button>
              <button
                onClick={() => {
                  setSelectedServiceIndex(null);
                  onOpenConsultation();
                }}
                className="btn-gold"
                style={{ padding: '0.75rem 1.5rem' }}
              >
                {t.capabilities.inquireBtn}
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
