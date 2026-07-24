import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div style={{ padding: '120px 0', textAlign: 'center', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div
          style={{
            fontSize: '120px',
            fontWeight: 300,
            color: 'var(--primary-color)',
            lineHeight: 1,
            marginBottom: '24px',
            fontFamily: 'Fraunces, Georgia, serif',
          }}
        >
          404
        </div>
        <h1 style={{ fontSize: '32px', marginBottom: '16px' }}>This page doesn&apos;t exist</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '18px' }}>
          You might have followed a broken link, or the page was moved. Try one of our most-used
          tools instead.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/visa" className="btn btn-primary" style={{ padding: '14px 28px' }}>
            Check Your Visa Status &rarr;
          </Link>
          <Link href="/" className="btn btn-outline" style={{ padding: '14px 28px' }}>
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
