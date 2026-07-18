import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Pay in China as a Foreigner (2026 Guide) | Alipay & WeChat Pay',
  description: 'Cash is dead in China. Learn the step-by-step process to link your foreign Visa/Mastercard to Alipay and WeChat Pay before you arrive.',
};

export default function PaymentPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Hero Section */}
      <section style={{ padding: '80px 0 40px', backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', padding: '6px 16px', backgroundColor: 'rgba(7, 193, 96, 0.1)', color: '#07C160', borderRadius: 'var(--radius-pill)', fontWeight: 600, fontSize: '14px', marginBottom: '24px' }}>
            The Cashless Reality
          </div>
          <h1 style={{ fontSize: '48px', marginBottom: '24px', letterSpacing: '-1px' }}>
            How to Pay for Things in China
          </h1>
          <p style={{ fontSize: '20px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            In China, you don&apos;t use cash or physical credit cards. You use your phone. Good news: as of late 2023, foreigners can finally link international credit cards to Chinese payment apps.
          </p>
        </div>
      </section>

      {/* Main Guide */}
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <div className="bento-card" style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#1677FF', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 800, fontSize: '24px' }}>A</div>
              <h2 style={{ fontSize: '32px', margin: 0 }}>Alipay (Our Top Choice)</h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.6' }}>
              Alipay (Zhifubao) is the easiest app for tourists to set up. Its English translation feature is built-in and far superior to WeChat&apos;s, making it easier to order food and buy train tickets directly inside the app.
            </p>
            <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Setup Steps (Do this before you fly):</h3>
            <ol style={{ paddingLeft: '20px', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              <li>Download <strong>Alipay</strong> from the App Store or Google Play.</li>
              <li>Register using your <strong>home country phone number</strong> (e.g., +1, +44).</li>
              <li>Tap "Account" &rarr; "Bank Cards" and add your foreign Visa, Mastercard, or Discover card.</li>
              <li>Complete the quick Identity Verification using your passport.</li>
            </ol>
            <div style={{ backgroundColor: 'rgba(244, 162, 97, 0.1)', padding: '16px', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid #F4A261' }}>
              <strong>Fee Structure:</strong> Transactions under 200 RMB (~$28 USD) have <strong>zero fees</strong>. Transactions over 200 RMB incur a 3% fee from Alipay.
            </div>
          </div>

          <div className="bento-card" style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#07C160', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 800, fontSize: '24px' }}>W</div>
              <h2 style={{ fontSize: '32px', margin: 0 }}>WeChat Pay</h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.6' }}>
              WeChat is the "everything app" of China. While Alipay is slightly easier for payments, WeChat is essential because people will use it to communicate with you. It&apos;s best to have both set up as backups to each other.
            </p>
            <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Setup Steps:</h3>
            <ol style={{ paddingLeft: '20px', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>Download <strong>WeChat</strong>.</li>
              <li>Sign up (You may need a friend who already has WeChat to verify your account by scanning a QR code).</li>
              <li>Go to "Me" &rarr; "Services" &rarr; "Wallet" &rarr; "Cards".</li>
              <li>Add your foreign credit card and verify your identity.</li>
            </ol>
          </div>

          <div style={{ textAlign: 'center', marginTop: '64px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>What about Cash?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              By law, merchants must accept cash. In reality, street vendors or small shops might not have change for a 100 RMB bill. It&apos;s wise to carry ~500 RMB in cash for emergencies, but you will use mobile payments for 99% of your trip.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
