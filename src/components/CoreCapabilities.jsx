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
        padding: '6rem 0',
        backgroundColor: '#0B1632',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
      }}
    >
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2.5rem', alignItems: 'stretch' }}>
          
          {/* Left Column: Heading & Introduction (4 cols) */}
          <div style={{ gridColumn: 'span 12' }} className="capabilities-left-col">
            <div className="gold-badge" style={{ fontSize: '0.74rem', letterSpacing: '0.18em', fontWeight: 600 }}>
              {t.capabilities.badge}
            </div>
            
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 2.8vw, 2.35rem)',
                fontWeight: 700,
                color: '#F8FAFC',
                lineHeight: 1.25,
                marginBottom: '1rem',
                letterSpacing: '-0.01em',
              }}
            >
              {t.capabilities.title}
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
                      padding: '2rem 1.6rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      backgroundColor: 'rgba(10, 18, 36, 0.7)',
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

                      {/* Icon with Blue Circle Background */}
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          border: '1px solid rgba(0, 163, 255, 0.35)',
                          backgroundColor: 'rgba(0, 163, 255, 0.06)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '1.25rem',
                          color: 'var(--theme-primary)',
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
                        onClick={() => setSelectedServiceIndex(idx)}
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
                          e.currentTarget.style.color = 'var(--theme-cyan)';
                          e.currentTarget.style.transform = 'translateX(4px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#E2E8F0';
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        {t.capabilities.learnMore}
                        <ArrowRight size={14} color="var(--theme-primary)" />
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
