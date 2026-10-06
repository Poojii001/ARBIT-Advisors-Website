import React, { useState } from 'react';
import { X, CheckCircle2, Lock, ArrowRight, Phone, Mail, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ConsultationModal({ isOpen, onClose }) {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    title: '',
    organization: '',
    email: '',
    phone: '',
    service: 'Brand PR & Leadership Positioning',
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
      service: 'Brand PR & Leadership Positioning',
      message: '',
    });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleReset}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '2.4rem', maxWidth: '640px', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0' }}
      >
        <button
          onClick={handleReset}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            color: '#64748B',
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
                backgroundColor: '#EFF6FF',
                border: '2px solid #0084D6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                color: '#0084D6',
              }}
            >
              <CheckCircle2 size={32} />
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0A1931', marginBottom: '0.75rem' }}>
              {t.modal.successTitle}
            </h3>
            <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 2rem auto' }}>
              {t.modal.successDesc}
            </p>

            <button
              onClick={handleReset}
              className="btn-gold"
              style={{ padding: '0.75rem 2rem' }}
            >
              {t.modal.doneBtn}
            </button>
          </div>
        ) : (
          <div>
            <div className="gold-badge" style={{ marginBottom: '0.4rem', color: '#D97706' }}>
              {t.modal.badge}
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0A1931', marginBottom: '0.5rem' }}>
              {t.modal.title}
            </h3>
            <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.55, marginBottom: '1.25rem' }}>
              {t.modal.subtitle}
            </p>

            {/* Direct Contact Quick Links */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.6rem',
                padding: '0.75rem',
                backgroundColor: '#EFF6FF',
                borderRadius: '8px',
                border: '1px solid #DBEAFE',
                marginBottom: '1.5rem',
                fontSize: '0.78rem',
              }}
            >
              <a
                href={`tel:${t.contact.phone}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#0A1931', fontWeight: 600 }}
              >
                <Phone size={13} color="#0084D6" /> {t.contact.phone}
              </a>
              <a
                href={`mailto:${t.contact.email}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#0A1931', fontWeight: 600 }}
              >
                <Mail size={13} color="#0084D6" /> Email Desk
              </a>
              <a
                href={t.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#16A34A', fontWeight: 700 }}
              >
                <MessageSquare size={13} color="#16A34A" /> WhatsApp
              </a>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem' }} className="form-two-cols">
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
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
                      padding: '0.7rem 0.85rem',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #CBD5E1',
                      borderRadius: '6px',
                      color: '#0A1931',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#0084D6')}
                    onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {t.modal.titleLabel}
                  </label>
                  <input
                    type="text"
                    placeholder={t.modal.titlePlaceholder}
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.85rem',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #CBD5E1',
                      borderRadius: '6px',
                      color: '#0A1931',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#0084D6')}
                    onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem' }} className="form-two-cols">
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
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
                      padding: '0.7rem 0.85rem',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #CBD5E1',
                      borderRadius: '6px',
                      color: '#0A1931',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#0084D6')}
                    onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
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
                      padding: '0.7rem 0.85rem',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #CBD5E1',
                      borderRadius: '6px',
                      color: '#0A1931',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#0084D6')}
                    onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {t.modal.serviceLabel}
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.85rem',
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #CBD5E1',
                    borderRadius: '6px',
                    color: '#0A1931',
                    fontSize: '0.88rem',
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
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {t.modal.messageLabel}
                </label>
                <textarea
                  rows={2}
                  placeholder={t.modal.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.85rem',
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #CBD5E1',
                    borderRadius: '6px',
                    color: '#0A1931',
                    fontSize: '0.88rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#0084D6')}
                  onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748B', fontSize: '0.74rem' }}>
                <Lock size={12} color="#0084D6" />
                <span>{t.modal.privacyNote}</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-gold"
                style={{ width: '100%', marginTop: '0.3rem', padding: '0.85rem' }}
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
