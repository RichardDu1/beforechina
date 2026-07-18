import type { Metadata } from "next";
import Link from 'next/link';
import "./globals.css";

export const metadata: Metadata = {
  title: "Before China - The Ultimate Pre-Travel Toolkit for China",
  description: "Essential tools, guides, and insider knowledge for foreigners traveling to China. Visa-free checker, best eSIMs, VPNs, and payment guides.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, borderBottom: '1px solid var(--border-color)', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: 0 }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '72px' }}>
            <div style={{ fontFamily: 'Outfit', fontSize: '24px', fontWeight: 800, letterSpacing: '-0.5px' }}>
              Before<span style={{ color: 'var(--primary-color)' }}>China</span>.
            </div>
            <div style={{ display: 'flex', gap: '24px', fontWeight: 500, fontSize: '15px' }}>
              <a href="#tools" style={{ color: 'var(--text-secondary)' }}>Tools</a>
              <a href="#guides" style={{ color: 'var(--text-secondary)' }}>Guides</a>
              <a href="#about" style={{ color: 'var(--text-secondary)' }}>About</a>
            </div>
          </div>
        </nav>
        <main style={{ paddingTop: '72px', minHeight: 'calc(100vh - 100px)' }}>
          {children}
        </main>
        <footer style={{ backgroundColor: 'var(--bg-surface)', padding: '64px 0 32px', borderTop: '1px solid var(--border-color)', marginTop: 'auto' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '32px', sm: { gridTemplateColumns: 'repeat(4, 1fr)' } } as any}>
              <div style={{ gridColumn: 'span 2' }}>
                <Link href="/" style={{ fontSize: '24px', fontWeight: 800, textDecoration: 'none', color: 'var(--text-primary)', marginBottom: '16px', display: 'inline-block' }}>
                  Before<span style={{ color: 'var(--primary-color)' }}>China</span>
                </Link>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '300px' }}>
                  The ultimate pre-travel toolkit for foreigners visiting China. Built by locals, designed for you.
                </p>
              </div>
              
              <div>
                <h3 style={{ fontSize: '16px', marginBottom: '16px', color: 'var(--text-primary)' }}>Toolkit</h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li><Link href="/visa" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Visa-Free Checker</Link></li>
                  <li><Link href="/vpn" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Best VPN for China</Link></li>
                  <li><Link href="/esim" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Best eSIM for China</Link></li>
                  <li><Link href="/payment" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Alipay & WeChat Pay</Link></li>
                  <li><Link href="/insurance" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Travel Insurance</Link></li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontSize: '16px', marginBottom: '16px', color: 'var(--text-primary)' }}>BeforeChina</h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li><Link href="/about" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>About Richard</Link></li>
                  <li><Link href="/contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contact Us</Link></li>
                  <li><Link href="/privacy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Privacy Policy</Link></li>
                  <li><Link href="/terms" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Terms of Service</Link></li>
                  <li><Link href="/cookie" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Cookie Policy</Link></li>
                </ul>
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '64px', paddingTop: '32px', borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '14px' }}>
              &copy; {new Date().getFullYear()} BeforeChina.com. All rights reserved. <br/>
              Disclaimer: This site contains affiliate links. If you make a purchase, we may earn a commission.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
