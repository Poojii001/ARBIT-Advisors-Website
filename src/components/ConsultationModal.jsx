import React, { useState } from 'react';
import { X, CheckCircle2, Lock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ConsultationModal({ isOpen, onClose }) {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    title: '',
    organization: '',
    email: '',
    phone: '',
    service: 'Strategic Advisory',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      title: '',
      organization: '',
      email: '',
      phone: '',
      service: 'Strategic Advisory',
      message: '',
    });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleReset}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '2.5rem', maxWidth: '620px' }}
      >
        <button
          onClick={handleReset}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            color: '#94A3B8',
            padding: '0.4rem',
            borderRadius: '50%',
          }}
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 163, 255, 0.15)',
                border: '2px solid var(--theme-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                color: 'var(--theme-primary)',
              }}
            >
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFF', marginBottom: '0.8rem' }}>
              {t.modal.successTitle}
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 2rem auto' }}>
              {t.modal.successDesc}
            </p>
            <button onClick={handleReset} className="btn-gold" style={{ padding: '0.85rem 2rem' }}>
              {t.modal.doneBtn}
            </button>
          </div>
        ) : (
          <div>
            <div className="gold-badge" style={{ marginBottom: '0.4rem', fontSize: '0.74rem' }}>
              <Lock size={14} style={{ marginRight: '4px' }} /> {t.modal.badge}
            </div>
            <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFF', marginBottom: '0.4rem' }}>
              {t.modal.title}
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.88rem', marginBottom: '1.8rem' }}>
              {t.modal.subtitle}
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-two-cols">
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {t.modal.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.modal.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      backgroundColor: 'rgba(3, 8, 20, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '4px',
                      color: '#FFF',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--theme-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {t.modal.titleLabel}
                  </label>
                  <input
                    type="text"
                    placeholder={t.modal.titlePlaceholder}
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      backgroundColor: 'rgba(3, 8, 20, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '4px',
                      color: '#FFF',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--theme-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-two-cols">
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {t.modal.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={t.modal.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      backgroundColor: 'rgba(3, 8, 20, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '4px',
                      color: '#FFF',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--theme-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {t.modal.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={t.modal.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      backgroundColor: 'rgba(3, 8, 20, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '4px',
                      color: '#FFF',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--theme-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {t.modal.serviceLabel}
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.9rem',
                    backgroundColor: '#030814',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '4px',
                    color: '#FFF',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                >
                  {t.modal.serviceOptions.map((opt, i) => (
                    <option key={i} value={opt.val}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {t.modal.messageLabel}
                </label>
                <textarea
                  rows={3}
                  placeholder={t.modal.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.9rem',
                    backgroundColor: 'rgba(3, 8, 20, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '4px',
                    color: '#FFF',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--theme-primary)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748B', fontSize: '0.75rem' }}>
                <Lock size={13} color="var(--theme-primary)" />
                <span>{t.modal.privacyNote}</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-gold"
                style={{ width: '100%', marginTop: '0.4rem', padding: '0.9rem' }}
              >
                {loading ? t.modal.submitting : (
                  <>
                    {t.modal.submitBtn}
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        )}

        <style>{`
          @media (max-width: 540px) {
            .form-two-cols {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
