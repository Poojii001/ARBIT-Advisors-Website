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
        padding: '6rem 0',
        backgroundColor: '#091124',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
          <div className="gold-badge" style={{ fontSize: '0.74rem', letterSpacing: '0.18em', fontWeight: 600 }}>
            {t.insights.badge}
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.35rem)', fontWeight: 700, color: '#F8FAFC' }}>
            {t.insights.title}
          </h2>
          <p style={{ fontSize: '0.94rem', color: '#94A3B8', marginTop: '0.5rem' }}>
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
                padding: '2.2rem 1.8rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.78rem', color: '#64748B' }}>
                  <span style={{ color: 'var(--theme-cyan)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {article.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <span>{article.date}</span>
                    <span>&bull;</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFF', lineHeight: 1.38, marginBottom: '1rem' }}>
                  {article.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.65, marginBottom: '2rem' }}>
                  {article.excerpt}
                </p>
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
                    color: 'var(--theme-cyan)',
                    padding: '4px 0',
                  }}
                >
                  {t.insights.readBrief}
                  <ArrowRight size={14} />
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
