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
        style={{ padding: 'clamp(1.25rem, 3.5vw, 2.25rem)', maxWidth: '620px', width: '100%', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0' }}
      >
        <button
          onClick={handleReset}
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

        {submitted ? (
          <div style={{ textAlign: 'center', padding: 'clamp(1.5rem, 3vw, 2rem) 0.5rem' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#EFF6FF',
                border: '2px solid #0084D6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto',
                color: '#0084D6',
              }}
            >
              <CheckCircle2 size={30} />
            </div>

            <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)', fontWeight: 800, color: '#0A1931', marginBottom: '0.65rem' }}>
              {t.modal.successTitle}
            </h3>
            <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 1.75rem auto' }}>
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
            <div className="gold-badge" style={{ marginBottom: '0.35rem', color: '#D97706' }}>
              {t.modal.badge}
            </div>

            <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.5rem)', fontWeight: 800, color: '#0A1931', marginBottom: '0.45rem' }}>
              {t.modal.title}
            </h3>
            <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '1.15rem' }}>
              {t.modal.subtitle}
            </p>

            {/* Direct Contact Quick Links */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))',
                gap: '0.5rem',
                padding: '0.65rem',
                backgroundColor: '#EFF6FF',
                borderRadius: '8px',
                border: '1px solid #DBEAFE',
                marginBottom: '1.25rem',
                fontSize: '0.76rem',
              }}
            >
              <a
                href={`tel:${t.contact.phone}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#0A1931', fontWeight: 600, padding: '2px' }}
              >
                <Phone size={13} color="#0084D6" style={{ flexShrink: 0 }} /> {t.contact.phone}
              </a>
              <a
                href={`mailto:${t.contact.email}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#0A1931', fontWeight: 600, padding: '2px' }}
              >
                <Mail size={13} color="#0084D6" style={{ flexShrink: 0 }} /> Email Desk
              </a>
              <a
                href={t.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#16A34A', fontWeight: 700, padding: '2px' }}
              >
                <MessageSquare size={13} color="#16A34A" style={{ flexShrink: 0 }} /> WhatsApp
              </a>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }} className="form-two-cols">
                <div>
                  <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
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
                      padding: '0.65rem 0.8rem',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #CBD5E1',
                      borderRadius: '6px',
                      color: '#0A1931',
                      fontSize: '0.88rem',
                      outline: 'none',
                      minHeight: '40px',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#0084D6')}
                    onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {t.modal.titleLabel}
                  </label>
                  <input
                    type="text"
                    placeholder={t.modal.titlePlaceholder}
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.8rem',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #CBD5E1',
                      borderRadius: '6px',
                      color: '#0A1931',
                      fontSize: '0.88rem',
                      outline: 'none',
                      minHeight: '40px',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#0084D6')}
                    onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }} className="form-two-cols">
                <div>
                  <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
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
                      padding: '0.65rem 0.8rem',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #CBD5E1',
                      borderRadius: '6px',
                      color: '#0A1931',
                      fontSize: '0.88rem',
                      outline: 'none',
                      minHeight: '40px',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#0084D6')}
                    onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
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
                      padding: '0.65rem 0.8rem',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #CBD5E1',
                      borderRadius: '6px',
                      color: '#0A1931',
                      fontSize: '0.88rem',
                      outline: 'none',
                      minHeight: '40px',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#0084D6')}
                    onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {t.modal.serviceLabel}
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.8rem',
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #CBD5E1',
                    borderRadius: '6px',
                    color: '#0A1931',
                    fontSize: '0.88rem',
                    outline: 'none',
                    minHeight: '40px',
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
                <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {t.modal.messageLabel}
                </label>
                <textarea
                  rows={2}
                  placeholder={t.modal.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.8rem',
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

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#64748B', fontSize: '0.72rem' }}>
                <Lock size={12} color="#0084D6" style={{ flexShrink: 0 }} />
                <span>{t.modal.privacyNote}</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-gold"
                style={{ width: '100%', marginTop: '0.25rem', padding: '0.8rem' }}
              >
                {loading ? t.modal.submitting : (
                  <>
                    {t.modal.submitBtn}
                    <ArrowRight size={15} />
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
