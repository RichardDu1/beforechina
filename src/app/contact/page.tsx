import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | BeforeChina',
  description: 'Get in touch with the BeforeChina team for questions, partnerships, or media inquiries.',
};

export default function ContactPage() {
  return (
    <div style={{ paddingBottom: '80px', minHeight: '100vh', backgroundColor: 'var(--bg-color)' }}>
      <section style={{ padding: '80px 0 64px', backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '24px', letterSpacing: '-1px' }}>
            Get in Touch
          </h1>
          <p style={{ fontSize: '20px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Have a question about traveling to China? Want to report an outdated visa policy? Or interested in partnering with us? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="bento-card" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>Email Us</h2>
              <p style={{ color: 'var(--text-secondary)' }}>For all general inquiries and support:</p>
              <a href="mailto:hello@beforechina.com" style={{ fontSize: '20px', color: 'var(--primary-color)', fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginTop: '8px' }}>
                hello@beforechina.com
              </a>
            </div>
            
            <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '16px 0' }} />
            
            <div>
              <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>Partnerships & Advertising</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                If you represent a travel brand, VPN provider, or eSIM company that actually works in China, we are open to testing your product. Note: We only recommend products we have personally tested and verified.
              </p>
              <a href="mailto:partners@beforechina.com" style={{ fontSize: '18px', color: 'var(--primary-color)', fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginTop: '8px' }}>
                partners@beforechina.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
