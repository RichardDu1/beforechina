import type { Metadata } from "next";
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
        <footer style={{ borderTop: '1px solid var(--border-color)', padding: '48px 0', marginTop: '64px', backgroundColor: 'var(--bg-surface)' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '14px' }}>
            <div>&copy; {new Date().getFullYear()} BeforeChina. All rights reserved.</div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
