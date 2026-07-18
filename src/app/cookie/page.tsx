import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | BeforeChina',
  description: 'Cookie Policy for BeforeChina.com',
};

export default function CookiePage() {
  return (
    <div style={{ padding: '80px 0', minHeight: '100vh', backgroundColor: 'var(--bg-color)' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '40px', marginBottom: '32px' }}>Cookie Policy</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Last updated: July 2026</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', color: 'var(--text-primary)', lineHeight: '1.7' }}>
          <p>
            This Cookie Policy explains how BeforeChina ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website at https://beforechina.com. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>
          
          <h2 style={{ fontSize: '24px', marginTop: '16px' }}>What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>

          <h2 style={{ fontSize: '24px', marginTop: '16px' }}>Why do we use cookies?</h2>
          <p>We use first and third-party cookies for several reasons:</p>
          <ul style={{ paddingLeft: '24px' }}>
            <li style={{ marginBottom: '8px' }}><strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our Website.</li>
            <li style={{ marginBottom: '8px' }}><strong>Analytics and Performance Cookies:</strong> These cookies are used to collect information about traffic to our Website and how users use our Website (e.g., Google Analytics). The information gathered does not identify any individual visitor.</li>
            <li style={{ marginBottom: '8px' }}><strong>Affiliate Cookies:</strong> We use affiliate links (e.g., VPNs, eSIMs). When you click an affiliate link, a cookie is placed in your browser to track that we referred you to the service, allowing us to earn a small commission.</li>
          </ul>

          <h2 style={{ fontSize: '24px', marginTop: '16px' }}>How can I control cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
          </p>
        </div>
      </div>
    </div>
  );
}
