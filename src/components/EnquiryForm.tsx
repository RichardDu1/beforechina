'use client';

import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section style={{ padding: 'var(--section-gap-md) 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div className="kicker">Enquiry Logged</div>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(26px, 3vw, 34px)',
              fontWeight: 400,
              marginBottom: '12px',
            }}
          >
            Your Email Draft is Ready
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6 }}>
            If your email client did not open automatically, please send your enquiry directly to{' '}
            <a
              href="mailto:hello@beforechina.com"
              style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}
            >
              hello@beforechina.com
            </a>
            . Our London &amp; Shanghai desk responds within 24 hours.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      style={{
        padding: 'var(--section-gap-md) 0',
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-color)',
      }}
    >
      <div className="container" style={{ maxWidth: '680px', margin: '0 auto' }}>
        <div
          style={{
            paddingBottom: '28px',
            marginBottom: '36px',
            borderBottom: '2px solid var(--text-primary)',
          }}
        >
          <div className="kicker">Bespoke Route &amp; Concierge Desk</div>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 3.6vw, 40px)',
              fontWeight: 400,
              marginBottom: '10px',
            }}
          >
            Commission a Private China Proposal
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-quote)',
              color: 'var(--text-secondary)',
              fontSize: '18px',
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            Tell us your travel window, interests, or hospital checkup requirements. Our specialists
            will return a tailored route blueprint — zero obligation.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const name = String(data.get('name') || '');
            const email = String(data.get('email') || '');
            const phone = String(data.get('phone') || '');
            const destination = String(data.get('destination') || '');
            const message = String(data.get('message') || '');
            trackEvent('enquiry_form_submit', { destination });
            const subject = encodeURIComponent(
              `China Proposal / Healthcare Enquiry${destination ? ` — ${destination}` : ''}`,
            );
            const body = encodeURIComponent(
              `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nInterest: ${destination || 'General'}\n\nDetails:\n${message}`,
            );
            window.location.href = `mailto:hello@beforechina.com?subject=${subject}&body=${body}`;
            setSubmitted(true);
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '24px',
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                    marginBottom: '6px',
                    color: 'var(--text-secondary)',
                  }}
                >
                  01 / Full Name *
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
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                    marginBottom: '6px',
                    color: 'var(--text-secondary)',
                  }}
                >
                  02 / Email Address *
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
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '24px',
              }}
            >
              <div>
                <label
                  htmlFor="phone"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                    marginBottom: '6px',
                    color: 'var(--text-secondary)',
                  }}
                >
                  03 / WhatsApp or Phone (Optional)
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
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="destination"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                    marginBottom: '6px',
                    color: 'var(--text-secondary)',
                  }}
                >
                  04 / Primary Focus
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
                    cursor: 'pointer',
                  }}
                >
                  <option value="">Select a route or briefing topic...</option>
                  <option value="golden-triangle">Golden Triangle (Beijing, Xian, Shanghai)</option>
                  <option value="healthcare-checkup-dental">
                    Shanghai / Shenzhen Health Checkup, Dental &amp; Travel
                  </option>
                  <option value="yunnan">Yunnan &amp; Shangri-La</option>
                  <option value="sichuan">Sichuan &amp; Jiuzhaigou</option>
                  <option value="xinjiang">Xinjiang &amp; Silk Road</option>
                  <option value="tibet">Tibet Plateau</option>
                  <option value="guangxi">Guilin &amp; Yangshuo</option>
                  <option value="zhangjiajie">Zhangjiajie</option>
                  <option value="other">Custom Multi-Region Proposal</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                  marginBottom: '6px',
                  color: 'var(--text-secondary)',
                }}
              >
                05 / Brief &amp; Dates
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Approximate dates, number of travellers, preferred hotel tier, or medical/dental coordination questions..."
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
                }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px',
                marginTop: '8px',
              }}
            >
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  padding: '15px 28px',
                  fontSize: '12px',
                }}
              >
                Send Proposal Request &rarr;
              </button>

              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                }}
              >
                DIRECT DESK:{' '}
                <a
                  href="mailto:hello@beforechina.com"
                  style={{ color: 'var(--text-primary)', textDecoration: 'underline' }}
                >
                  hello@beforechina.com
                </a>
              </span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
