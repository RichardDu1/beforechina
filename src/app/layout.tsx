import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import Analytics from '@/components/Analytics';
import JsonLd from '@/components/JsonLd';
import './globals.css';

const SITE_URL = 'https://beforechina.com';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'BeforeChina — Tailor-Made Journeys & China Intelligence',
    template: '%s | BeforeChina',
  },
  description:
    'Independent travel toolkit, hospital price benchmarks, and tailor-made route guides for visiting China.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'BeforeChina',
    title: 'BeforeChina — Tailor-Made Journeys & China Intelligence',
    description:
      'Private itineraries and independent field benchmarks crafted by UK & China specialists.',
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'BeforeChina — Tailor-Made Journeys to China',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BeforeChina — Tailor-Made Journeys & China Intelligence',
    description:
      'Private itineraries and independent field benchmarks crafted by UK & China specialists.',
    images: ['/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BeforeChina',
  url: SITE_URL,
  description:
    'Independent travel toolkit, hospital price benchmarks, and tailor-made route planning for China.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@beforechina.com',
    contactType: 'Customer Service',
  },
};

const FOOTER_DESTINATIONS = [
  { href: '/golden-triangle/beijing-xian-shanghai', label: 'Golden Triangle' },
  { href: '/yunnan/kunming-dali-lijiang-shangri-la', label: 'Yunnan' },
  { href: '/sichuan/chengdu-jiuzhaigou-huanglong', label: 'Sichuan' },
  { href: '/xinjiang', label: 'Xinjiang' },
  { href: '/tibet/lhasa-shigatse-everest', label: 'Tibet' },
  { href: '/silk-road/xian-lanzhou-dunhuang', label: 'Silk Road' },
  { href: '/guangxi/guilin-yangshuo-lijiang', label: 'Guilin & Yangshuo' },
  { href: '/destinations', label: 'All 14 Regions →' },
];

const FOOTER_EXPERIENCES = [
  { href: '/experiences#culture', label: 'Culture & Heritage' },
  { href: '/experiences#culinary', label: 'Culinary Journeys' },
  { href: '/experiences#nature', label: 'Nature & Wildlife' },
  { href: '/experiences#photography', label: 'Photography' },
  { href: '/experiences#family', label: 'Family Adventures' },
];

const FOOTER_COMPANY = [
  { href: '/about', label: 'Editorial Masthead' },
  { href: '/journal', label: 'Field Dispatches' },
  { href: '/contact', label: 'Enquire & Contact' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/cookie', label: 'Cookie Policy' },
];

const FOOTER_TOOLS = [
  { href: '/visa', label: '01 / Visa-Free Checker' },
  { href: '/health', label: '02 / Hospital & Dental Guide' },
  { href: '/health/dental-china-vs-turkey-uk', label: '03 / Dental: China vs Turkey/UK' },
  { href: '/payment', label: '04 / Alipay & WeChat Pay' },
  { href: '/vpn', label: '05 / Firewall & VPN Guide' },
  { href: '/esim', label: '06 / China eSIM Benchmarks' },
  { href: '/insurance', label: '07 / Travel & Medical Insurance' },
  { href: '/budget', label: '08 / Trip Cost Calculator' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="help" type="text/plain" href="/llms.txt" title="LLMs.txt Context" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <nav
          className="glass"
          style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 100,
            borderBottom: '1px solid var(--border-color)',
            borderTop: '2px solid var(--text-primary)',
            borderLeft: 'none',
            borderRight: 'none',
            borderRadius: 0,
          }}
        >
          <div className="container nav-inner">
            <div className="nav-brand-group">
              <Link
                href="/"
                style={{
                  fontFamily: 'var(--font-logo)',
                  fontSize: '23px',
                  fontWeight: 500,
                  letterSpacing: '-0.03em',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                }}
              >
                Before<span style={{ color: 'var(--primary-color)' }}>China</span>
              </Link>
              <span className="nav-edition-tag">London &amp; Shanghai Desk · 2026</span>
            </div>

            <div className="nav-links">
              <Link href="/destinations" className="nav-link">
                Destinations
              </Link>
              <Link href="/experiences" className="nav-link">
                Experiences
              </Link>
              <Link
                href="/health"
                className="nav-link"
                style={{ color: 'var(--primary-color)', fontWeight: 600 }}
              >
                Health &amp; Dental
              </Link>
              <Link href="/visa" className="nav-link">
                Visa &amp; Tools
              </Link>
              <Link href="/journal" className="nav-link">
                Journal
              </Link>
              <Link href="/about" className="nav-link">
                About
              </Link>
              <a
                href="mailto:hello@beforechina.com"
                className="nav-email-pill"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--text-primary)',
                  marginLeft: '4px',
                  fontWeight: 500,
                  padding: '7px 12px',
                  border: '1px solid var(--text-primary)',
                  borderRadius: 'var(--radius-sm)',
                  textDecoration: 'none',
                }}
              >
                hello@beforechina.com
              </a>
            </div>
          </div>
        </nav>

        <main style={{ paddingTop: '74px', minHeight: 'calc(100vh - 100px)' }}>{children}</main>

        <footer
          style={{
            backgroundColor: 'var(--bg-ink)',
            color: 'var(--text-on-ink)',
            padding: '72px 0 36px',
            borderTop: '3px solid var(--primary-color)',
            marginTop: 'auto',
          }}
        >
          <div className="container">
            <div className="footer-grid">
              {/* Column 1: Editorial Masthead */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    color: 'var(--text-on-ink-muted)',
                    marginBottom: '10px',
                  }}
                >
                  Independent China Briefing &amp; Route Atelier
                </div>
                <Link
                  href="/"
                  style={{
                    fontFamily: 'var(--font-logo)',
                    fontSize: '26px',
                    fontWeight: 500,
                    textDecoration: 'none',
                    color: 'var(--text-on-ink)',
                    marginBottom: '16px',
                    display: 'inline-block',
                  }}
                >
                  Before<span style={{ color: '#d45d5e' }}>China</span>
                </Link>
                <p
                  style={{
                    color: 'var(--text-on-ink-muted)',
                    fontSize: '14px',
                    lineHeight: '1.65',
                    maxWidth: '300px',
                    marginBottom: '20px',
                  }}
                >
                  Bespoke private journeys, hospital tariff audits, and practical pre-trip tools
                  compiled by our bilingual research desk in London and Shanghai.
                </p>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--text-on-ink)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  <span>DESK: LONDON &amp; SHANGHAI</span>
                  <a
                    href="mailto:hello@beforechina.com"
                    style={{ color: '#e6c27a', textDecoration: 'underline' }}
                  >
                    hello@beforechina.com
                  </a>
                </div>
              </div>

              {/* Column 2: Destinations */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    marginBottom: '18px',
                    color: 'var(--text-on-ink)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                  }}
                >
                  01 / Regional Atlas
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {FOOTER_DESTINATIONS.map((d) => (
                    <li key={d.href}>
                      <Link
                        href={d.href}
                        style={{
                          color: 'var(--text-on-ink-muted)',
                          textDecoration: 'none',
                          fontSize: '14px',
                        }}
                      >
                        {d.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Experiences */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    marginBottom: '18px',
                    color: 'var(--text-on-ink)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                  }}
                >
                  02 / Curated Themes
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {FOOTER_EXPERIENCES.map((e) => (
                    <li key={e.href}>
                      <Link
                        href={e.href}
                        style={{
                          color: 'var(--text-on-ink-muted)',
                          textDecoration: 'none',
                          fontSize: '14px',
                        }}
                      >
                        {e.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4: Company */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    marginBottom: '18px',
                    color: 'var(--text-on-ink)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                  }}
                >
                  03 / Editorial &amp; Legal
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {FOOTER_COMPANY.map((c) => (
                    <li key={c.href}>
                      <Link
                        href={c.href}
                        style={{
                          color: 'var(--text-on-ink-muted)',
                          textDecoration: 'none',
                          fontSize: '14px',
                        }}
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Travel & Healthcare Toolkit Dossier Bar */}
            <div
              style={{
                marginTop: '48px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(246, 244, 239, 0.14)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '18px',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#e6c27a',
                  fontWeight: 600,
                }}
              >
                Field Dossiers:
              </span>
              {FOOTER_TOOLS.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-on-ink-muted)',
                    textDecoration: 'none',
                    fontSize: '12px',
                  }}
                >
                  {t.label}
                </Link>
              ))}
            </div>

            {/* Bottom Colophon Bar */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '12px',
                marginTop: '32px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(246, 244, 239, 0.14)',
                color: 'var(--text-on-ink-muted)',
                fontSize: '12px',
              }}
            >
              <p style={{ fontFamily: 'var(--font-mono)' }}>
                &copy; {new Date().getFullYear()} BEFORECHINA.COM · INDEPENDENT EDITORIAL &amp;
                RESEARCH DESK
              </p>
              <p style={{ fontSize: '12px' }}>
                Disclosure: Outbound links to third-party tools may earn an affiliate commission at
                no extra cost to you. Public hospital tariffs carry zero referral fees.
              </p>
            </div>
          </div>
        </footer>
        <Analytics />
        <JsonLd data={organizationSchema} id="organization-schema" />
      </body>
    </html>
  );
}
