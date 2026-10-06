import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Insights() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const { t } = useLanguage();

  return (
    <section
      id="insights"
      style={{
        padding: '5.5rem 0',
        backgroundColor: '#16274E',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
          <div className="gold-badge" style={{ fontSize: '0.72rem', letterSpacing: '0.16em', fontWeight: 700 }}>
            {t.insights.badge}
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 2.9vw, 2.45rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.015em' }}>
            {t.insights.title}
          </h2>
          <p style={{ fontSize: '0.96rem', color: '#F1F5F9', marginTop: '0.5rem' }}>
            {t.insights.subtitle}
          </p>
        </div>

        {/* Insights Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {t.insights.items.map((article) => (
            <article
              key={article.id}
              className="glass-card"
              style={{
                padding: '2.4rem 1.9rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.78rem', color: '#CBD5E1' }}>
                  <span style={{ color: 'var(--theme-light)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {article.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <span>{article.date}</span>
                    <span>&bull;</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.38, marginBottom: '0.85rem' }}>
                  {article.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: '#E2E8F0', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {article.excerpt}
                </p>

                {/* Author Byline in Card */}
                {article.author && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.07)',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: 'var(--theme-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        flexShrink: 0,
                      }}
                    >
                      {article.avatar || 'AA'}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.86rem', fontWeight: 600, color: '#F1F5F9' }}>
                        {article.author}
                      </div>
                      <div style={{ fontSize: '0.74rem', color: '#94A3B8', lineHeight: 1.3 }}>
                        {article.role}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setSelectedArticle(article)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    color: '#E2E8F0',
                    padding: '4px 0',
                    transition: 'color 0.2s ease, transform 0.2s ease',
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
                  {t.insights.readBrief}
                  <ArrowRight size={14} color="var(--theme-light)" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '2.5rem', maxWidth: '680px' }}>
            <button
              onClick={() => setSelectedArticle(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                color: '#94A3B8',
                padding: '0.3rem',
              }}
            >
              <X size={20} />
            </button>

            <div className="gold-badge" style={{ marginBottom: '0.5rem' }}>{selectedArticle.category}</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFF', lineHeight: 1.3, marginBottom: '0.8rem' }}>
              {selectedArticle.title}
            </h3>

            {/* Author Profile Header in Modal */}
            {selectedArticle.author && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0.85rem 1rem',
                  backgroundColor: 'rgba(0, 163, 255, 0.06)',
                  border: '1px solid rgba(0, 163, 255, 0.2)',
                  borderRadius: '6px',
                  marginBottom: '1.5rem',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 163, 255, 0.2)',
                    border: '1.5px solid var(--theme-cyan)',
                    color: 'var(--theme-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {selectedArticle.avatar || 'AA'}
                </div>
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#FFF' }}>
                    {selectedArticle.author}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>
                    {selectedArticle.role} &bull; <span style={{ color: 'var(--theme-cyan)' }}>Arbit Senior Advisory Council</span>
                  </div>
                </div>
              </div>
            )}

            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.82rem', color: '#64748B', marginBottom: '1.8rem', paddingBottom: '0.8rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span>{selectedArticle.date}</span>
              <span>&bull;</span>
              <span>{selectedArticle.readTime}</span>
              <span>&bull;</span>
              <span style={{ color: 'var(--theme-light)' }}>Arbit Intelligence Desk</span>
            </div>

            <div style={{ color: '#CBD5E1', fontSize: '0.94rem', lineHeight: 1.7, whiteSpace: 'pre-line', marginBottom: '2rem' }}>
              {selectedArticle.fullContent}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <button onClick={() => setSelectedArticle(null)} className="btn-gold" style={{ padding: '0.75rem 1.6rem' }}>
                {t.insights.closeBrief}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
