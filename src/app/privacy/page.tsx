import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | BeforeChina',
  description: 'Privacy Policy for BeforeChina.com',
};

export default function PrivacyPage() {
  return (
    <div style={{ padding: '80px 0', minHeight: '100vh', backgroundColor: 'var(--bg-color)' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '40px', marginBottom: '32px' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Last updated: July 2026</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', color: 'var(--text-primary)', lineHeight: '1.7' }}>
          <p>
            At BeforeChina.com, accessible from https://beforechina.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by BeforeChina and how we use it.
          </p>
          
          <h2 style={{ fontSize: '24px', marginTop: '16px' }}>Information We Collect</h2>
          <p>
            We collect information from you when you visit our site, subscribe to our newsletter, or fill out a form. The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>

          <h2 style={{ fontSize: '24px', marginTop: '16px' }}>Log Files and Analytics</h2>
          <p>
            BeforeChina follows a standard procedure of using log files. These files log visitors when they visit websites. We also use third-party analytics tools (such as Google Analytics) to help us measure traffic and usage trends for the service. These tools collect information sent by your device or our service, including the web pages you visit, add-ons, and other information that assists us in improving the service.
          </p>

          <h2 style={{ fontSize: '24px', marginTop: '16px' }}>Cookies and Web Beacons</h2>
          <p>
            Like any other website, BeforeChina uses &quot;cookies&quot;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
          </p>

          <h2 style={{ fontSize: '24px', marginTop: '16px' }}>Affiliate Disclosure</h2>
          <p>
            Some of the links on BeforeChina.com are affiliate links. This means that if you click on the link and make a purchase, we may receive a commission at no extra cost to you. We only recommend products or services we believe will add value to our readers.
          </p>

          <h2 style={{ fontSize: '24px', marginTop: '16px' }}>Contact Us</h2>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at hello@beforechina.com.
          </p>
        </div>
      </div>
    </div>
  );
}
