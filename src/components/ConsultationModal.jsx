import React, { useState } from 'react';
import { X, CheckCircle2, Shield, Lock, Send, ArrowRight } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose }) {
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
    }, 1000);
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
                backgroundColor: 'rgba(229, 169, 60, 0.15)',
                border: '2px solid var(--gold-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                color: 'var(--gold-primary)',
              }}
            >
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFF', marginBottom: '0.8rem' }}>
              Briefing Request Received
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 2rem auto' }}>
              Our Senior Managing Partner will review your inquiry with strict non-disclosure compliance and contact your office within 2 hours.
            </p>
            <button onClick={handleReset} className="btn-gold" style={{ padding: '0.85rem 2rem' }}>
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="gold-badge" style={{ marginBottom: '0.4rem' }}>
              <Lock size={14} style={{ marginRight: '4px' }} /> STRICTLY CONFIDENTIAL
            </div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFF', marginBottom: '0.4rem' }}>
              Book a Strategic Consultation
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.88rem', marginBottom: '1.8rem' }}>
              Engage our senior advisory council for discreet campaign strategy, narrative positioning, or rapid crisis mitigation.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-two-cols">
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Rajesh Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      backgroundColor: 'rgba(5, 10, 20, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '4px',
                      color: '#FFF',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--gold-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Title / Political Office
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. MLA / MP Office / Campaign Chief"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      backgroundColor: 'rgba(5, 10, 20, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '4px',
                      color: '#FFF',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--gold-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-two-cols">
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Confidential Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="official@office.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      backgroundColor: 'rgba(5, 10, 20, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '4px',
                      color: '#FFF',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--gold-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Phone / Direct Line *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      backgroundColor: 'rgba(5, 10, 20, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '4px',
                      color: '#FFF',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--gold-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Primary Advisory Requirement
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.9rem',
                    backgroundColor: '#050A14',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '4px',
                    color: '#FFF',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                >
                  <option value="Brand PR">Brand PR & Leadership Positioning</option>
                  <option value="Media Relations">Media Relations & Prime-Time Strategy</option>
                  <option value="Strategic Advisory">Strategic Advisory & War Room Setup</option>
                  <option value="Crisis Management">24/7 Rapid Crisis Management</option>
                  <option value="Full Campaign">End-to-End Electoral Campaign Management</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Brief Strategic Objective (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details regarding constituency, upcoming election timeline, or key objectives..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.9rem',
                    backgroundColor: 'rgba(5, 10, 20, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '4px',
                    color: '#FFF',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--gold-primary)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748B', fontSize: '0.75rem', marginTop: '0.2rem' }}>
                <Shield size={14} color="var(--gold-primary)" />
                <span>Protected by non-disclosure legal protocols. Data is never shared.</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-gold"
                style={{ width: '100%', marginTop: '0.5rem', padding: '0.95rem' }}
              >
                {loading ? 'Transmitting Secure Request...' : (
                  <>
                    Submit Confidential Briefing Request
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
