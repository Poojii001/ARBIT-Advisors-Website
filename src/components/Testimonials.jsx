import React from 'react';
import { Quote, Star, ShieldCheck, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = t.testimonials?.items || [];

  return (
    <section
      id="testimonials"
      style={{
        padding: '5.5rem 0',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
          <div className="gold-badge" style={{ fontSize: '0.72rem', letterSpacing: '0.16em', fontWeight: 700, color: '#D97706' }}>
            {t.testimonials?.badge || 'PROVEN LEADERSHIP TRUST'}
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 2.9vw, 2.45rem)',
              fontWeight: 800,
              color: '#0A1931',
              lineHeight: 1.25,
              marginBottom: '1rem',
              letterSpacing: '-0.015em',
            }}
          >
            {t.testimonials?.title || 'Voices of Electoral & Policy Leadership'}
          </h2>
          <p style={{ fontSize: '0.98rem', color: '#475569', lineHeight: 1.68 }}>
            {t.testimonials?.subtitle || 'What campaign chiefs, legislators, and senior strategists say about partnering with Arbit Advisors.'}
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="glass-card"
              style={{
                padding: '2.4rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
              }}
            >
              <div>
                {/* Top Row: 5 Stars & Tag Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '3px', color: '#F59E0B' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#0084D6',
                      backgroundColor: '#EFF6FF',
                      border: '1px solid #DBEAFE',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Quote Text */}
                <p
                  style={{
                    fontSize: '0.94rem',
                    color: '#334155',
                    lineHeight: 1.7,
                    marginBottom: '1.5rem',
                    fontStyle: 'normal',
                  }}
                >
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info & Proven Metric Highlight */}
              <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0A1931' }}>
                      {item.author}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '2px' }}>
                      {item.role} &bull; <span style={{ color: '#0084D6', fontWeight: 600 }}>{item.region}</span>
                    </div>
                  </div>

                  {/* Positive Impact Metric Pill */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      backgroundColor: '#F0FDF4',
                      border: '1px solid #BBF7D0',
                      borderRadius: '6px',
                      padding: '0.35rem 0.65rem',
                      color: '#16A34A',
                      fontSize: '0.76rem',
                      fontWeight: 700,
                    }}
                  >
                    <Award size={14} color="#16A34A" />
                    <span>{item.metric}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* NDA Protocol Verification Banner */}
        <div
          style={{
            marginTop: '3rem',
            padding: '1rem 1.5rem',
            backgroundColor: '#F8FAFC',
            borderRadius: '8px',
            border: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.6rem',
            fontSize: '0.8rem',
            color: '#64748B',
            textAlign: 'center',
          }}
        >
          <ShieldCheck size={16} color="#0084D6" />
          <span>Testimonials presented with verified authorization under strict attorney-client non-disclosure protocols.</span>
        </div>
      </div>
    </section>
  );
}
