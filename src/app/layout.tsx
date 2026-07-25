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
    default: 'Before China - The Ultimate Pre-Travel Toolkit for China',
    template: '%s | Before China',
  },
  description:
    'Essential tools, guides, and insider knowledge for foreigners traveling to China. Visa-free checker, best eSIMs, VPNs, and payment guides — by a UK-based Chinese local.',
  alternates: { canonical: '/' },
  verification: {
    google: 'TODO_google_search_console_verification',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Before China',
    title: 'Before China - The Ultimate Pre-Travel Toolkit for China',
    description:
      'Visa-free checker, best eSIMs, VPNs, and payment guides for foreigners visiting China. Built by a local, designed for you.',
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'BeforeChina - China Travel Toolkit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Before China - The Ultimate Pre-Travel Toolkit for China',
    description:
      'Visa-free checker, best eSIMs, VPNs, and payment guides for foreigners visiting China.',
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
  description: 'Essential tools, guides, and insider knowledge for foreigners traveling to China.',
  founder: {
    '@type': 'Person',
    name: 'Richard Du',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@beforechina.com',
    contactType: 'Customer Service',
  },
};

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
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400&family=Inter:wght@300;400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap"
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
            <div
              style={{
                fontFamily: 'Fraunces',
                fontSize: '24px',
                fontWeight: 500,
                letterSpacing: '-0.5px',
              }}
            >
              Before<span style={{ color: 'var(--primary-color)' }}>China</span>.
            </div>
            <div style={{ display: 'flex', gap: '24px', fontWeight: 500, fontSize: '15px' }}>
              <Link
                href="/#toolkit"
                style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
              >
                Tools
              </Link>
              <Link
                href="/destinations"
                style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
              >
                Destinations
              </Link>
              <Link
                href="/about"
                style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
              >
                About
              </Link>
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
              <div style={{ gridColumn: 'span 1' }}>
                <Link
                  href="/"
                  style={{
                    fontSize: '24px',
                    fontWeight: 800,
                    textDecoration: 'none',
                    color: 'var(--text-primary)',
                    marginBottom: '16px',
                    display: 'inline-block',
                  }}
                >
                  Before<span style={{ color: 'var(--primary-color)' }}>China</span>
                </Link>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '300px' }}>
                  The ultimate pre-travel toolkit for foreigners visiting China. Built by locals,
                  designed for you.
                </p>
              </div>

              <div>
                <h3
                  style={{ fontSize: '16px', marginBottom: '16px', color: 'var(--text-primary)' }}
                >
                  Toolkit
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <li>
                    <Link
                      href="/visa"
                      style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                    >
                      Visa-Free Checker
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/vpn"
                      style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                    >
                      Best VPN for China
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/esim"
                      style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                    >
                      Best eSIM for China
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/payment"
                      style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                    >
                      Alipay & WeChat Pay
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insurance"
                      style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                    >
                      Travel Insurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/budget"
                      style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                    >
                      Trip Cost Calculator
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3
                  style={{ fontSize: '16px', marginBottom: '16px', color: 'var(--text-primary)' }}
                >
                  Destinations
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <li>
                    <Link
                      href="/xinjiang"
                      style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                    >
                      Xinjiang
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/yunnan/kunming-dali-lijiang-shangri-la"
                      style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                    >
                      Yunnan
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sichuan/chengdu-jiuzhaigou-huanglong"
                      style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                    >
                      Sichuan
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/guangxi/guilin-yangshuo-lijiang"
                      style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                    >
                      Guilin & Yangshuo
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tibet/lhasa-shigatse-everest"
                      style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                    >
                      Tibet
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/silk-road/xian-lanzhou-dunhuang"
                      style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                    >
                      Silk Road
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3
                  style={{ fontSize: '16px', marginBottom: '16px', color: 'var(--text-primary)' }}
                >
                  BeforeChina
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <li>
                    <Link
                      href="/about"
                      style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                    >
                      About Richard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cookie"
                      style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                    >
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              style={{
                textAlign: 'center',
                marginTop: '64px',
                paddingTop: '32px',
                borderTop: '1px solid var(--border-color)',
                color: 'var(--text-muted)',
                fontSize: '14px',
              }}
            >
              &copy; {new Date().getFullYear()} BeforeChina.com. All rights reserved. <br />
              Disclaimer: This site contains affiliate links. If you make a purchase, we may earn a
              commission.
            </div>
          </div>
        </footer>
        <Analytics />
        <JsonLd data={organizationSchema} id="organization-schema" />
      </body>
    </html>
  );
}
