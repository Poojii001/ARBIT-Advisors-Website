import React, { useState } from 'react';
import { BookOpen, ArrowRight, Calendar, Clock, X } from 'lucide-react';

export default function Insights() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: 'The Anatomy of Narrative Warfare in High-Density Indian Elections',
      date: 'October 2026',
      readTime: '6 min read',
      category: 'Electoral Intelligence',
      excerpt:
        'How rapid sentiment shifts across regional broadcast television and dark social networks determine swing votes in critical state assembly seats.',
      fullContent: `Modern election warfare in India is fought concurrently across three battlegrounds: mainstream broadcast television, regional vernacular print, and high-velocity digital messaging networks.
      
      To establish dominance, political leaders must maintain narrative agility. A delay of merely three hours in responding to an opposition salvo can allow adverse perception to solidify across millions of households.
      
      At Arbit Advisors, we implement the 15-Minute Rebuttal Protocol, deploying synchronized counter-narratives with factual infographics, spokesperson talking points, and localized video soundbites simultaneously across all channels.`,
    },
    {
      id: 2,
      title: 'Micro-Targeting vs Mass Broadcasts: The 2026 Voter Demographics Report',
      date: 'September 2026',
      readTime: '8 min read',
      category: 'Data & Analytics',
      excerpt:
        'An empirical analysis of why pan-constituency generic promises fail to convert undecided voters compared to booth-level demographic tailoring.',
      fullContent: `Analyzing voting trends across over 150 constituencies reveals a stark transformation: generic mass rallies now serve primarily as morale boosters for core party cadres, while decisive victory margins are determined by localized micro-promises.
      
      Segmenting voter lists by localized civic pain points (water drainage, localized youth employment, regional MSP demands) allows campaigns to achieve a 3.4x higher conversion efficiency per media rupee spent.`,
    },
    {
      id: 3,
      title: 'Managing 24/7 Digital Crisis: The Political Commander’s Playbook',
      date: 'August 2026',
      readTime: '5 min read',
      category: 'Crisis Advisory',
      excerpt:
        'Essential protocols for political spokespersons and campaign chiefs facing coordinated online smear operations and deepfake media.',
      fullContent: `In an era of synthetic media and viral distortion, political campaigns face asymmetric threats. When an unverified video clip begins gaining traction, traditional PR approaches that wait for morning press briefings are fatal.
      
      Our crisis framework establishes immediate forensic verification, direct escalation channels with platform compliance officers, and swift contextualization before the media narrative slips away.`,
    },
  ];

  return (
    <section
      id="insights"
      style={{
        padding: '6rem 0',
        backgroundColor: '#040810',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
          <div className="gold-badge">INTELLIGENCE & ANALYSIS</div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#FFF' }}>
            Latest Political Insights
          </h2>
          <p style={{ fontSize: '0.98rem', color: '#94A3B8', marginTop: '0.5rem' }}>
            Strategic briefs, election analytics, and media intelligence authored by our senior advisory council.
          </p>
        </div>

        {/* Insights Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {articles.map((article) => (
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
                  <span style={{ color: 'var(--gold-primary)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {article.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <span>{article.date}</span>
                    <span>&bull;</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFF', lineHeight: 1.38, marginBottom: '1rem' }}>
                  {article.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.65, marginBottom: '2rem' }}>
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
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: 'var(--gold-primary)',
                    padding: '4px 0',
                  }}
                >
                  Read Intelligence Brief
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
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFF', lineHeight: 1.3, marginBottom: '0.8rem' }}>
              {selectedArticle.title}
            </h3>

            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.82rem', color: '#64748B', marginBottom: '1.8rem', paddingBottom: '0.8rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span>Published: {selectedArticle.date}</span>
              <span>&bull;</span>
              <span>{selectedArticle.readTime}</span>
              <span>&bull;</span>
              <span style={{ color: 'var(--gold-light)' }}>Arbit Intelligence Desk</span>
            </div>

            <div style={{ color: '#CBD5E1', fontSize: '0.96rem', lineHeight: 1.7, whiteSpace: 'pre-line', marginBottom: '2rem' }}>
              {selectedArticle.fullContent}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <button onClick={() => setSelectedArticle(null)} className="btn-gold" style={{ padding: '0.75rem 1.6rem' }}>
                Close Briefing
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
