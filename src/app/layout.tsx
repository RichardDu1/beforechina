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
    default: 'BeforeChina — Tailor-Made Journeys to China',
    template: '%s | BeforeChina',
  },
  description:
    'Award-winning tailor-made journeys to China. Private itineraries crafted by China specialists — from the Great Wall to the Silk Road.',
  alternates: { canonical: '/' },
  verification: {
    google: 'TODO_google_search_console_verification',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'BeforeChina',
    title: 'BeforeChina — Tailor-Made Journeys to China',
    description:
      'Private itineraries crafted by China specialists. From the Great Wall to the Silk Road, every journey is built around you.',
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
    title: 'BeforeChina — Tailor-Made Journeys to China',
    description:
      'Private itineraries crafted by China specialists. Every journey is built around you.',
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
  description: 'Tailor-made private journeys to China, crafted by China specialists.',
  founder: {
    '@type': 'Person',
    name: 'Richard Du',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+44 20 XXXX XXXX',
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
  { href: '/destinations', label: 'All Destinations →' },
];

const FOOTER_EXPERIENCES = [
  { href: '/experiences#culture', label: 'Culture & Heritage' },
  { href: '/experiences#culinary', label: 'Culinary Journeys' },
  { href: '/experiences#nature', label: 'Nature & Wildlife' },
  { href: '/experiences#photography', label: 'Photography' },
  { href: '/experiences#family', label: 'Family Adventures' },
];

const FOOTER_COMPANY = [
  { href: '/about', label: 'About Us' },
  { href: '/journal', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/cookie', label: 'Cookie Policy' },
];

const FOOTER_TOOLS = [
  { href: '/visa', label: 'Visa-Free Checker' },
  { href: '/vpn', label: 'Best VPN for China' },
  { href: '/esim', label: 'Best eSIM for China' },
  { href: '/payment', label: 'Alipay & WeChat Pay' },
  { href: '/insurance', label: 'Travel Insurance' },
  { href: '/budget', label: 'Trip Cost Calculator' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400&family=Inter:wght@300;400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
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
            borderTop: 'none',
            borderLeft: 'none',
            borderRight: 'none',
            borderRadius: 0,
          }}
        >
          <div
            className="container"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '72px',
            }}
          >
            <Link
              href="/"
              style={{
                fontFamily: 'var(--font-logo)',
                fontSize: '24px',
                fontWeight: 500,
                letterSpacing: '-0.5px',
                textDecoration: 'none',
                color: 'var(--text-primary)',
              }}
            >
              Before<span style={{ color: 'var(--primary-color)' }}>China</span>
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
              <Link href="/destinations" className="nav-link">
                Destinations
              </Link>
              <Link href="/experiences" className="nav-link">
                Experiences
              </Link>
              <Link href="/journal" className="nav-link">
                Journal
              </Link>
              <Link href="/about" className="nav-link">
                About
              </Link>
              <span
                style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  marginLeft: '8px',
                  fontWeight: 400,
                }}
              >
                +44 20 XXXX XXXX
              </span>
            </div>
          </div>
        </nav>
        <main style={{ paddingTop: '72px', minHeight: 'calc(100vh - 100px)' }}>{children}</main>
        <footer
          style={{
            backgroundColor: 'var(--bg-surface)',
            padding: '64px 0 32px',
            borderTop: '1px solid var(--border-color)',
            marginTop: 'auto',
          }}
        >
          <div className="container">
            <div className="footer-grid">
              {/* Column 1: Brand */}
              <div>
                <Link
                  href="/"
                  style={{
                    fontFamily: 'var(--font-logo)',
                    fontSize: '24px',
                    fontWeight: 500,
                    textDecoration: 'none',
                    color: 'var(--text-primary)',
                    marginBottom: '16px',
                    display: 'inline-block',
                  }}
                >
                  Before<span style={{ color: 'var(--primary-color)' }}>China</span>
                </Link>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    maxWidth: '280px',
                    marginBottom: '16px',
                  }}
                >
                  Tailor-made private journeys to China. Crafted by specialists who know every path,
                  every story, every season.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    China Experts
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    100% Tailor-Made
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    24/7 In-Country Support
                  </span>
                </div>
              </div>

              {/* Column 2: Destinations */}
              <div>
                <h3
                  style={{
                    fontSize: '14px',
                    marginBottom: '16px',
                    color: 'var(--text-primary)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Destinations
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
                          color: 'var(--text-secondary)',
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
                    fontSize: '14px',
                    marginBottom: '16px',
                    color: 'var(--text-primary)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Experiences
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
                          color: 'var(--text-secondary)',
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
                    fontSize: '14px',
                    marginBottom: '16px',
                    color: 'var(--text-primary)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  BeforeChina
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
                          color: 'var(--text-secondary)',
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

            {/* Travel Toolkit row */}
            <div
              style={{
                marginTop: '48px',
                paddingTop: '24px',
                borderTop: '1px solid var(--border-color)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 500 }}>
                Travel Toolkit:
              </span>
              {FOOTER_TOOLS.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '13px' }}
                >
                  {t.label}
                </Link>
              ))}
            </div>

            {/* Bottom bar */}
            <div
              style={{
                textAlign: 'center',
                marginTop: '32px',
                paddingTop: '24px',
                borderTop: '1px solid var(--border-color)',
                color: 'var(--text-muted)',
                fontSize: '13px',
              }}
            >
              <p style={{ marginBottom: '8px', fontStyle: 'italic' }}>
                As featured in — (coming soon)
              </p>
              <p>&copy; {new Date().getFullYear()} BeforeChina.com. All rights reserved.</p>
              <p style={{ fontSize: '12px', marginTop: '4px' }}>
                Disclaimer: This site contains affiliate links. If you make a purchase, we may earn
                a commission.
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
