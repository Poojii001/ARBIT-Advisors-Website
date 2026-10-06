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
        backgroundColor: '#F8FAFC',
        position: 'relative',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
          <div className="gold-badge" style={{ fontSize: '0.72rem', letterSpacing: '0.16em', fontWeight: 700, color: '#D97706' }}>
            {t.insights.badge}
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 2.9vw, 2.45rem)', fontWeight: 800, color: '#0A1931', letterSpacing: '-0.015em' }}>
            {t.insights.title}
          </h2>
          <p style={{ fontSize: '0.98rem', color: '#475569', marginTop: '0.5rem' }}>
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.78rem', color: '#64748B' }}>
                  <span style={{ color: '#0084D6', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {article.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <span>{article.date}</span>
                    <span>&bull;</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0A1931', lineHeight: 1.38, marginBottom: '0.85rem' }}>
                  {article.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.5rem' }}>
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
                      borderTop: '1px solid #E2E8F0',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: '#EFF6FF',
                        border: '1px solid #DBEAFE',
                        color: '#0084D6',
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
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0A1931' }}>
                        {article.author}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748B', lineHeight: 1.3 }}>
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
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: '#0084D6',
                    padding: '4px 0',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  {t.insights.readBrief}
                  <ArrowRight size={14} color="#0084D6" />
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
                color: '#64748B',
                padding: '0.3rem',
              }}
            >
              <X size={20} />
            </button>

            <div className="gold-badge" style={{ marginBottom: '0.5rem', color: '#D97706' }}>{selectedArticle.category}</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0A1931', lineHeight: 1.3, marginBottom: '0.8rem' }}>
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
                  backgroundColor: '#EFF6FF',
                  border: '1px solid #DBEAFE',
                  borderRadius: '8px',
                  marginBottom: '1.5rem',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: '#DBEAFE',
                    border: '1.5px solid #0084D6',
                    color: '#0084D6',
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
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0A1931' }}>
                    {selectedArticle.author}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#64748B' }}>
                    {selectedArticle.role} &bull; <span style={{ color: '#0084D6' }}>Arbit Senior Advisory Council</span>
                  </div>
                </div>
              </div>
            )}

            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.82rem', color: '#64748B', marginBottom: '1.8rem', paddingBottom: '0.8rem', borderBottom: '1px solid #E2E8F0' }}>
              <span>{selectedArticle.date}</span>
              <span>&bull;</span>
              <span>{selectedArticle.readTime}</span>
              <span>&bull;</span>
              <span style={{ color: '#0084D6', fontWeight: 600 }}>Arbit Intelligence Desk</span>
            </div>

            <div style={{ color: '#334155', fontSize: '0.96rem', lineHeight: 1.7, whiteSpace: 'pre-line', marginBottom: '2rem' }}>
              {selectedArticle.fullContent}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '1rem', borderTop: '1px solid #E2E8F0' }}>
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
