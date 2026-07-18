import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Richard Du | The Story Behind BeforeChina',
  description: 'Hi, I\'m Richard Du. I\'m a Chinese native living in the UK, and I built this site because I was tired of seeing my friends get ripped off by outdated China travel advice.',
};

export default function AboutPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Hero Section */}
      <section style={{ padding: '80px 0 64px', backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '24px', letterSpacing: '-1px' }}>
            Hi, I&apos;m Richard.
          </h1>
          <p style={{ fontSize: '24px', color: 'var(--text-secondary)', lineHeight: '1.5', fontWeight: 300 }}>
            I&apos;m a Chinese native living in the UK. I built BeforeChina because the travel advice you see online is broken.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <h2 style={{ fontSize: '28px', marginBottom: '16px', color: 'var(--text-primary)' }}>The "Wait, my VPN doesn't work?" Moment</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '18px', marginBottom: '16px' }}>
                A few years ago, my British colleague Tom went to Shanghai for a mix of business and tourism. He did what most people do: he Googled "China travel tips," booked his flights, and downloaded a random free VPN from the App Store.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '18px', marginBottom: '16px' }}>
                When he landed at Pudong Airport, reality hit him like a brick wall. His VPN was blocked by the Great Firewall. He couldn&apos;t open Google Maps to find his hotel. He couldn&apos;t use WhatsApp to tell his family he arrived safely. And when he tried to buy a bottle of water, the cashier waved away his physical cash—they only accepted WeChat Pay or Alipay, which he hadn&apos;t set up.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '18px' }}>
                He spent his first 48 hours in China completely disconnected, frustrated, and relying on the kindness of strangers in hotel lobbies.
              </p>
            </div>

            <div style={{ padding: '32px', backgroundColor: 'rgba(230, 57, 70, 0.05)', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--primary-color)' }}>
              <h2 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--primary-color)' }}>The Problem with China Travel Guides</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '18px' }}>
                When Tom came back to London and told me this, I went online to see what advice he had been reading. I was shocked. Most "China Travel Guides" are written by:
              </p>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '18px', paddingLeft: '24px', marginTop: '16px' }}>
                <li style={{ marginBottom: '8px' }}><strong>Traditional Travel Agencies:</strong> Who just want to sell you a $3,000 guided tour and gloss over the actual day-to-day survival logistics.</li>
                <li style={{ marginBottom: '8px' }}><strong>Outdated Blogs:</strong> Writers who visited China in 2018. China moves fast. What worked in 2018 (or even 2023) is completely irrelevant in 2026.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '28px', marginBottom: '16px', color: 'var(--text-primary)' }}>Why BeforeChina Exists</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '18px', marginBottom: '16px' }}>
                As someone who grew up in China but lives in the West, I understand exactly what foreigners need to know—and more importantly, the cultural context of <em>why</em> things work the way they do in China.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '18px', marginBottom: '16px' }}>
                I created <strong>BeforeChina.com</strong> to be the ultimate pre-travel toolkit. No fluff, no history lessons you can read on Wikipedia. Just the exact, actionable steps you need to take <em>before</em> you board your flight:
              </p>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '18px', paddingLeft: '24px', marginBottom: '24px' }}>
                <li>How to legally bypass the Great Firewall (and which VPNs actually work today).</li>
                <li>How to navigate the confusing 144-Hour Visa-Free Transit rules without getting denied at check-in.</li>
                <li>How to link your foreign Visa/Mastercard to Chinese apps so you can actually buy a coffee.</li>
              </ul>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '18px', fontWeight: 600 }}>
                My goal is simple: I want your first 48 hours in China to be magical, not a logistical nightmare.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
