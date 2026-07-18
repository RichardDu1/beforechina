import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | BeforeChina',
  description: 'Terms of Service for BeforeChina.com',
};

export default function TermsPage() {
  return (
    <div style={{ padding: '80px 0', minHeight: '100vh', backgroundColor: 'var(--bg-color)' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '40px', marginBottom: '32px' }}>Terms of Service</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Last updated: July 2026</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', color: 'var(--text-primary)', lineHeight: '1.7' }}>
          <p>
            Please read these terms and conditions carefully before using BeforeChina.com. By using the Website, you agree to be bound by these Terms of Service.
          </p>
          
          <h2 style={{ fontSize: '24px', marginTop: '16px' }}>1. Disclaimer of Liability (Crucial)</h2>
          <p>
            The information provided on BeforeChina.com is for general informational purposes only. While we strive to keep the information up to date and correct (including visa policies, Great Firewall statuses, and payment methods), <strong>we make no representations or warranties of any kind about the completeness, accuracy, or reliability of this information.</strong>
          </p>
          <p>
            China&apos;s visa policies and internet regulations change frequently and without warning. <strong>Any reliance you place on such information is strictly at your own risk.</strong> We are not responsible for denied entry, visa rejections, or any costs incurred during your travel. Always verify entry requirements with your local Chinese embassy or consulate before booking flights.
          </p>

          <h2 style={{ fontSize: '24px', marginTop: '16px' }}>2. Not Professional Advice</h2>
          <p>
            The travel insurance information provided does not constitute financial or medical advice. We are not licensed insurance brokers. Always read the Product Disclosure Statement (PDS) or policy wording from the insurance provider before purchasing.
          </p>

          <h2 style={{ fontSize: '24px', marginTop: '16px' }}>3. Affiliate Links</h2>
          <p>
            BeforeChina participates in various affiliate marketing programs. This means we may get paid commissions on products purchased through our links to retailer sites. This does not affect the price you pay, and we only recommend products we trust.
          </p>

          <h2 style={{ fontSize: '24px', marginTop: '16px' }}>4. Intellectual Property</h2>
          <p>
            The Website and its original content, features, and functionality are owned by BeforeChina and are protected by international copyright, trademark, and other intellectual property laws. You may not reproduce our content without explicit written permission.
          </p>
        </div>
      </div>
    </div>
  );
}
