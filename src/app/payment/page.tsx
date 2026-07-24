import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import NextSteps from '@/components/NextSteps';
import TourCTA from '@/components/TourCTA';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'How to Pay in China as a Foreigner (2026 Guide) | Alipay & WeChat Pay',
  description:
    'China currency (RMB) is rarely used in physical form. Learn the step-by-step process to link your foreign Visa/Mastercard to Alipay and WeChat Pay before you arrive.',
  alternates: { canonical: '/payment' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to set up Alipay with a foreign credit card before travelling to China',
  description:
    'Step-by-step process to link a foreign Visa, Mastercard or Discover card to Alipay so you can pay across China without cash.',
  totalTime: 'PT15M',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Download Alipay',
      text: 'Download Alipay from the App Store or Google Play while still in your home country.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Register with your home number',
      text: 'Register using your home country phone number (e.g. +1 or +44).',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Add your foreign card',
      text: 'Tap "Account" → "Bank Cards" and add your foreign Visa, Mastercard, or Discover card.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Verify identity with passport',
      text: 'Complete the quick identity verification using your passport.',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I use foreign credit cards in China?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Foreign Visa and Mastercard work only when linked to Alipay or WeChat Pay — they are not accepted directly by merchants. Once linked, you scan the merchant's QR code and Alipay/WeChat charge your foreign card in your home currency with a 3% fee on transactions over 200 RMB.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use cash in China?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'By law merchants must accept physical RMB cash, but in practice most no longer carry change. Carry about 500 RMB as an emergency backup, but expect to pay with Alipay or WeChat Pay for 99% of your trip.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Alipay & WeChat Pay Guide',
      item: 'https://beforechina.com/payment',
    },
  ],
};

export default function PaymentPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[howToSchema, faqSchema, breadcrumbSchema]} id="payment-schema" />

      {/* Hero */}
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Money in China</Kicker>
          <h1>How to Pay for Things in China</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            If you bring a fat stack of cash to China, you are going to starve. Street vendors, taxi
            drivers, and even high-end restaurants don&apos;t keep change anymore. Here is the exact
            setup you need to survive.
          </p>
        </div>
      </section>

      {/* Main Guide */}
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Alipay */}
          <div className="article-card" style={{ marginBottom: '32px' }}>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#1677FF',
                  borderRadius: '4px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'var(--text-on-primary)',
                  fontWeight: 800,
                  fontSize: '24px',
                }}
              >
                A
              </div>
              <h2 style={{ fontSize: '32px', margin: 0 }}>Alipay (Our Top Choice)</h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.6' }}>
              Alipay (Zhifubao) is the easiest app for tourists to set up. Its English translation
              feature is built-in and far superior to WeChat&apos;s, making it easier to order food
              and buy train tickets directly inside the app.
            </p>
            <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>
              Setup Steps (Do this before you fly):
            </h3>
            <ol
              style={{
                paddingLeft: '20px',
                color: 'var(--text-primary)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: '24px',
              }}
            >
              <li>
                Download <strong>Alipay</strong> from the App Store or Google Play.
              </li>
              <li>
                Register using your <strong>home country phone number</strong> (e.g., +1, +44).
              </li>
              <li>
                Tap &ldquo;Account&rdquo; → &ldquo;Bank Cards&rdquo; and add your foreign Visa,
                Mastercard, or Discover card.
              </li>
              <li>Complete the quick Identity Verification using your passport.</li>
            </ol>
            <div
              style={{
                backgroundColor: 'var(--callout-bg-warm)',
                padding: '16px',
                borderRadius: 'var(--radius-sm)',
                borderLeft: '3px solid var(--accent-warm)',
              }}
            >
              <strong>The Fee Structure:</strong> Transactions under 200 RMB (~$28 USD) have{' '}
              <strong>zero fees</strong> from Alipay. Transactions over 200 RMB incur a 3% fee. Tip:
              Ask the merchant to split large bills into two payments!
            </div>
          </div>

          {/* WeChat Pay */}
          <div className="article-card" style={{ marginBottom: '32px' }}>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'var(--accent-color)',
                  borderRadius: '4px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'var(--text-on-primary)',
                  fontWeight: 800,
                  fontSize: '24px',
                }}
              >
                W
              </div>
              <h2 style={{ fontSize: '32px', margin: 0 }}>WeChat Pay</h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.6' }}>
              WeChat is the &ldquo;everything app&rdquo; of China. While Alipay is slightly easier
              for payments, WeChat is essential because everyone will use it to communicate with
              you. It&apos;s best to have both set up as backups to each other.
            </p>
            <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Setup Steps:</h3>
            <ol
              style={{
                paddingLeft: '20px',
                color: 'var(--text-primary)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: '16px',
              }}
            >
              <li>
                Download <strong>WeChat</strong>.
              </li>
              <li>
                Sign up (You may need a friend who already has WeChat to verify your account by
                scanning a QR code).
              </li>
              <li>
                Go to &ldquo;Me&rdquo; → &ldquo;Services&rdquo; → &ldquo;Wallet&rdquo; →
                &ldquo;Cards&rdquo;.
              </li>
              <li>Add your foreign credit card and verify your identity.</li>
            </ol>
            <div
              style={{
                backgroundColor: 'var(--callout-bg-primary)',
                padding: '16px',
                borderRadius: 'var(--radius-sm)',
                borderLeft: '3px solid var(--primary-color)',
              }}
            >
              <strong>WeChat Friend Verification Workaround:</strong> If you don&apos;t know anyone
              with WeChat who can scan your QR code, try asking in a China travel Facebook group or
              Reddit r/travelchina. Many people are willing to help. Alternatively, Alipay skips
              this requirement entirely — which is why we recommend it as your primary payment app.
            </div>
          </div>

          {/* Comparison Table */}
          <div className="article-card" style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>
              Alipay vs WeChat Pay: Quick Comparison
            </h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
                    <th
                      style={{
                        textAlign: 'left',
                        padding: '12px 16px',
                        color: 'var(--text-secondary)',
                        fontWeight: 600,
                      }}
                    >
                      Feature
                    </th>
                    <th
                      style={{
                        textAlign: 'center',
                        padding: '12px 16px',
                        color: 'var(--text-secondary)',
                        fontWeight: 600,
                      }}
                    >
                      Alipay
                    </th>
                    <th
                      style={{
                        textAlign: 'center',
                        padding: '12px 16px',
                        color: 'var(--text-secondary)',
                        fontWeight: 600,
                      }}
                    >
                      WeChat Pay
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['English Interface', 'Built-in, excellent', 'Partial, clunky'],
                    ['Foreign Card Setup', 'Easy — no verification needed', 'Needs friend QR scan'],
                    ['Merchant Acceptance', 'Nearly universal', 'Nearly universal'],
                    ['Transaction Fee (&gt;200 RMB)', '3%', '3%'],
                    [
                      'In-app Services',
                      'Train tickets, food delivery, bike rental',
                      'Messaging, mini-programs, ride hailing',
                    ],
                    ['Offline Mode', 'Limited', 'Better offline support'],
                  ].map(([feature, alipay, wechat]) => (
                    <tr key={feature} style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '12px 16px', fontWeight: 500 }}>{feature}</td>
                      <td
                        style={{
                          padding: '12px 16px',
                          textAlign: 'center',
                          color: 'var(--accent-color)',
                        }}
                      >
                        {alipay}
                      </td>
                      <td style={{ padding: '12px 16px', textAlign: 'center' }}>{wechat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="article-card" style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>Common Problems &amp; Fixes</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>
                  &ldquo;My card was rejected&rdquo;
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Some banks block transactions to Chinese payment platforms by default. Call your
                  bank and tell them you&apos;re traveling to China. Visa and Mastercard have the
                  highest acceptance; Amex and Discover work sporadically. If one card fails, try
                  another.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>
                  &ldquo;Identity verification keeps failing&rdquo;
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Make sure your passport photo is well-lit and all four corners are visible. The
                  name on your Alipay/WeChat account must match your passport exactly — including
                  middle names. Try in good natural light; the AI rejects blurry or shadowed images.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>
                  &ldquo;My phone died / no internet&rdquo;
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  This is why you carry ~500 RMB in cash as backup. Also: set up Alipay and WeChat
                  Pay on a second device (tablet, partner&apos;s phone) before you leave. Most
                  hotels have backup power banks you can borrow.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>
                  &ldquo;How do I get a refund when leaving China?&rdquo;
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Any remaining balance in Alipay or WeChat Pay can be withdrawn to your linked
                  foreign card. Go to &ldquo;Wallet&rdquo; → &ldquo;Balance&rdquo; →
                  &ldquo;Withdraw.&rdquo; Processing takes 1-3 business days. Do this before you
                  leave China — some features are geo-restricted once you&apos;re abroad.
                </p>
              </div>
            </div>
          </div>

          {/* More FAQs */}
          <div className="article-card" style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>More Questions Answered</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>
                  Does Apple Pay or Google Pay work in China?
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  No. Apple Pay and Google Pay are not accepted by Chinese merchants. You must use
                  Alipay or WeChat Pay. However, you can add your foreign card to Apple Wallet and
                  use it to pay via Alipay — the card is the bridge, but the app is the gate.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>
                  Do I need to tip in China?
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  No. Tipping is not part of Chinese culture and is sometimes refused. The only
                  exception is high-end international hotels (e.g., the Ritz-Carlton) where
                  Western-style tipping is sometimes expected for concierge or bellhop service. In
                  restaurants, taxis, and for tour guides — no tip is expected.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>
                  How much cash should I carry?
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  About 500 RMB (~$70) for emergencies. Get it from an ATM at the airport using your
                  foreign debit card (Bank of China and ICBC ATMs are reliable). Do not exchange
                  cash at your home bank — the rates are terrible. ATMs in China give the mid-market
                  rate with a small fixed fee.
                </p>
              </div>
            </div>
          </div>

          {/* Cash */}
          <div style={{ textAlign: 'center', marginTop: '64px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>
              What about China Currency (Cash)?
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              China&apos;s currency is the RMB (or CNY). By law, merchants must accept physical
              cash. However, in reality, if you try to buy a 15 RMB coffee with a 100 RMB bill, the
              barista will likely stare at you because they haven&apos;t seen physical cash in
              months and have zero change in the register. It&apos;s wise to carry ~500 RMB in cash
              for absolute emergencies, but you will use mobile apps for 99.9% of your trip.
            </p>
          </div>
        </div>
      </section>

      <TourCTA />

      <NextSteps
        steps={[
          {
            href: '/visa',
            label: 'Check your visa status',
            description: 'Visa-free entry now covers 30+ countries',
          },
          {
            href: '/esim',
            label: 'Get an eSIM',
            description: 'Land with data — skip the airport SIM line',
          },
          {
            href: '/vpn',
            label: 'Set up a VPN',
            description: 'Access Google, WhatsApp, Instagram in China',
          },
          {
            href: '/budget',
            label: 'Calculate your budget',
            description: 'Interactive trip cost calculator',
          },
        ]}
      />

      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <SignatureCard />
      </div>
    </div>
  );
}
