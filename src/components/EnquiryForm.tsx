'use client';

import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section style={{ padding: 'var(--section-gap-md) 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(24px, 3vw, 32px)',
              fontWeight: 500,
              marginBottom: '12px',
            }}
          >
            Thank You
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6 }}>
            We will be in touch within 24 hours to start planning your journey.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section style={{ padding: 'var(--section-gap-md) 0', backgroundColor: 'var(--bg-surface)' }}>
      <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(26px, 3.5vw, 36px)',
              fontWeight: 500,
              marginBottom: '12px',
            }}
          >
            Ready to Plan Your China Journey?
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.5 }}>
            Tell us about your dream trip. We will send you a personalized proposal — no obligation,
            no pressure.
          </p>
        </div>
        <form
          action="https://formspree.io/f/hello@beforechina.com"
          method="POST"
          onSubmit={() => {
            trackEvent('enquiry_form_submit', {});
            setSubmitted(true);
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label
                htmlFor="name"
                style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 500,
                  marginBottom: '6px',
                  color: 'var(--text-primary)',
                }}
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                style={{
                  width: '100%',
                  padding: '12px 0',
                  border: 'none',
                  borderBottom: '1px solid var(--border-color)',
                  backgroundColor: 'transparent',
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  transition: 'border-color var(--transition-fast)',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderBottomColor = 'var(--primary-color)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderBottomColor = 'var(--border-color)';
                }}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 500,
                  marginBottom: '6px',
                  color: 'var(--text-primary)',
                }}
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                style={{
                  width: '100%',
                  padding: '12px 0',
                  border: 'none',
                  borderBottom: '1px solid var(--border-color)',
                  backgroundColor: 'transparent',
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  transition: 'border-color var(--transition-fast)',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderBottomColor = 'var(--primary-color)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderBottomColor = 'var(--border-color)';
                }}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 500,
                  marginBottom: '6px',
                  color: 'var(--text-primary)',
                }}
              >
                Phone (optional)
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                style={{
                  width: '100%',
                  padding: '12px 0',
                  border: 'none',
                  borderBottom: '1px solid var(--border-color)',
                  backgroundColor: 'transparent',
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  transition: 'border-color var(--transition-fast)',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderBottomColor = 'var(--primary-color)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderBottomColor = 'var(--border-color)';
                }}
              />
            </div>
            <div>
              <label
                htmlFor="destination"
                style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 500,
                  marginBottom: '6px',
                  color: 'var(--text-primary)',
                }}
              >
                Destination Interest
              </label>
              <select
                id="destination"
                name="destination"
                style={{
                  width: '100%',
                  padding: '12px 0',
                  border: 'none',
                  borderBottom: '1px solid var(--border-color)',
                  backgroundColor: 'transparent',
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  borderRadius: 0,
                  WebkitAppearance: 'none',
                  appearance: 'none',
                  cursor: 'pointer',
                }}
              >
                <option value="">Select a region or route...</option>
                <option value="golden-triangle">Golden Triangle (Beijing, Xian, Shanghai)</option>
                <option value="yunnan">Yunnan</option>
                <option value="sichuan">Sichuan</option>
                <option value="xinjiang">Xinjiang & Silk Road</option>
                <option value="tibet">Tibet</option>
                <option value="guangxi">Guilin & Yangshuo</option>
                <option value="zhangjiajie">Zhangjiajie</option>
                <option value="other">Not sure — suggest something</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 500,
                  marginBottom: '6px',
                  color: 'var(--text-primary)',
                }}
              >
                Tell Us About Your Trip
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Dates, group size, interests, pace — anything that helps us understand your vision."
                style={{
                  width: '100%',
                  padding: '12px 0',
                  border: 'none',
                  borderBottom: '1px solid var(--border-color)',
                  backgroundColor: 'transparent',
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'border-color var(--transition-fast)',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderBottomColor = 'var(--primary-color)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderBottomColor = 'var(--border-color)';
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                padding: '16px 32px',
                fontSize: '16px',
                alignSelf: 'flex-start',
                marginTop: '8px',
              }}
            >
              Send Enquiry &rarr;
            </button>
          </div>
        </form>
        <p
          style={{
            textAlign: 'center',
            marginTop: '24px',
            fontSize: '14px',
            color: 'var(--text-muted)',
          }}
        >
          Or call us: +44 20 XXXX XXXX
        </p>
      </div>
    </section>
  );
}
