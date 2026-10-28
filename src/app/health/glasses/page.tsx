import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import FactSheet from '@/components/FactSheet';
import MedicalTrustBar, { MedicalDisclaimerFooter } from '@/components/MedicalTrustBar';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Buying Prescription Glasses in China (2026): Shanghai & Beijing Optical Markets',
  description:
    'How to buy prescription eyeglasses in China for $35–$95 with 1-hour turnaround. Shanghai International Glasses City & Beijing Panjiayuan address, real bargaining prices, and verifying Zeiss/Essilor lenses.',
  alternates: { canonical: '/health/glasses' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Buy Prescription Glasses in China Without Getting Overcharged',
  description:
    'Step-by-step field guide to getting an eye exam and same-day high-index prescription glasses at Shanghai International Glasses City or Beijing Panjiayuan Optical Market.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Skip Ground-Floor Touts and Go to Floors 2–4',
      text: 'At multi-story optical markets like Shanghai International Glasses City (Zhongxing Rd), ground-floor stalls pay the highest rent. Take the escalator to the 2nd, 3rd, or 4th floor where established workshops have in-house lens edging machines.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Complete the Free Computerised Optometry Exam (15–20 mins)',
      text: 'Every reputable shop performs a free computerised autorefractor test followed by a trial-frame subjective refraction. You can also hand them your home optometrist prescription (SPH, CYL, AXIS, PD).',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Negotiate down to 25%–35% of the Sticker Tag',
      text: 'Wholesale optical markets use inflated sticker tags. A standard titanium or acetate frame with 1.67 high-index domestic anti-reflective lenses should settle around ¥220–¥380 RMB ($30–$53 USD). Branded Zeiss or Essilor lenses carry an official laser engraving and QR authenticity certificate at 40%–50% off official book price.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Collect Single-Vision Glasses in 45–60 Minutes',
      text: 'Standard single-vision lenses (up to -8.00 SPH) are cut and mounted on-site within an hour. Progressive/multifocal or high-astigmatism custom lenses take 48–72 hours and can be delivered to your hotel via SF Express (顺丰) or shipped internationally.',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much should prescription glasses cost in China at Shanghai or Beijing optical markets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After normal bargaining at Shanghai International Glasses City or Beijing Panjiayuan, expect to pay ¥180–¥350 RMB ($25–$48 USD) for quality acetate/titanium frames paired with 1.60 or 1.67 high-index domestic lenses (anti-blue-light/anti-reflective). Ultra-thin 1.74 lenses typically run ¥350–¥550 RMB ($48–$76 USD), and genuine German Zeiss or French Essilor lenses with laser-etched logos run ¥800–¥1,600 RMB ($110–$220 USD).',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is the famous Shanghai Glasses Market located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shanghai Sanjiaodi International Glasses City (上海三叶国际眼镜城) is located at 1688 Zhongxing Road, Jing’an District — directly adjacent to Shanghai Railway Station (Metro Line 1, 3, or 4, North Square exit).',
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
      name: 'Health Guide',
      item: 'https://beforechina.com/health',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Buying Prescription Glasses in China',
      item: 'https://beforechina.com/health/glasses',
    },
  ],
};

export default function GlassesChinaPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[howToSchema, faqSchema, breadcrumbSchema]} id="glasses-china-schema" />

      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <Kicker>Optical &amp; Eyewear Field Guide</Kicker>
          <h1>
            Buying Prescription Glasses in China (2026): Shanghai &amp; Beijing Optical Markets
          </h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            China manufactures over 70% of the world&apos;s eyeglass lenses (centred in Danyang,
            Jiangsu). Walking into Shanghai International Glasses City or Beijing Panjiayuan lets
            you get a computerised eye exam and two pairs of 1.67 high-index glasses in 60 minutes
            for under $95 total.
          </p>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
        <MedicalTrustBar fieldLocation="Shanghai Zhongxing Rd & Beijing Panjiayuan Optical Markets" />

        <FactSheet
          title="2026 China Optical Market Target Prices (After Bargaining)"
          badge="2026 Verified Bargaining Range"
          lastUpdated="October 2026"
          facts={[
            {
              label: '1.60 High-Index + Titanium/Acetate Frame',
              value: '$25 – $40 (¥180 – ¥280 RMB) · 45 mins',
              highlight: true,
            },
            {
              label: '1.67 Thin High-Index + Quality Frame',
              value: '$35 – $55 (¥250 – ¥400 RMB) · 60 mins',
              highlight: true,
            },
            {
              label: '1.74 Ultra-Thin Lenses + Frame',
              value: '$55 – $85 (¥400 – ¥600 RMB) · 1–2 hours',
            },
            {
              label: 'Prescription Sunglasses / Photochromic',
              value: '$40 – $65 (¥280 – ¥460 RMB) · 60 mins',
            },
            {
              label: 'Genuine Zeiss / Essilor (with QR Cert)',
              value: '$110 – $220 (¥800 – ¥1,600 RMB) · 40–50% off book',
            },
            {
              label: 'Progressive / Multifocal Lenses',
              value: '$90 – $180 (¥650 – ¥1,300 RMB) · 48–72 hours',
            },
          ]}
          bottomLine="Do not pay the first price on the calculator. At wholesale optical malls in Shanghai and Beijing, the polite, realistic target price for domestic 1.67 high-index lenses + a solid titanium or acetate frame is ¥250–¥380 RMB ($35–$53 USD) per pair. If you prefer zero bargaining with fixed Japanese-style pricing, visit mall chains like JINS or Owndays ($70–$120)."
          warning="If you have complex progressive prescriptions or severe prism corrections, order on Day 1 of your trip so the shop has 48–72 hours for custom lab surfacing and you have a full day to test-wear them before flying home."
        />

        {/* Top 3 Markets */}
        <div className="article-card" style={{ marginBottom: '28px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>
            Where to Go: The 3 Major Optical Markets for Foreign Visitors
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ paddingBottom: '14px', borderBottom: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>
                1. Shanghai International Glasses City (上海三叶国际眼镜城)
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                <strong>Address:</strong> 1688 Zhongxing Road, Jing&apos;an District (Metro Line
                1/3/4 Shanghai Railway Station, North Square). Four floors of hundreds of optical
                workshops. Many shops on Floors 2–4 have English-speaking staff accustomed to expats
                and airline crews, and will save your PD/prescription on WeChat for future mail
                orders.
              </p>
            </div>
            <div style={{ paddingBottom: '14px', borderBottom: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>
                2. Beijing Panjiayuan Glasses City (北京潘家园眼镜城)
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                <strong>Address:</strong> Dongsanhuan South Road, Chaoyang District (Metro Line 10
                Panjiayuan Station). Right next to the famous Panjiayuan Antique Market — easy to
                combine into a single morning itinerary.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>
                3. Danyang China Glasses City (丹阳国际眼镜城 — The Global Factory Hub)
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                <strong>Location:</strong> Directly opposite Danyang High-Speed Rail Station (1 hour
                from Shanghai or 30 mins from Nanjing on the Beijing–Shanghai HSR line). Literally
                where the lenses are manufactured; prices run another 20–30% lower than Shanghai.
              </p>
            </div>
          </div>
        </div>

        {/* How to Verify Genuine Zeiss / Essilor */}
        <div className="article-card" style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>
            How to Verify Genuine Zeiss or Essilor Lenses (30-Second Check)
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '12px' }}>
            If you upgrade from standard Danyang domestic lenses to German <strong>Zeiss</strong> or
            French <strong>Essilor (Crizal)</strong> lenses, always ask for three proofs before
            paying the balance:
          </p>
          <ol
            style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              paddingLeft: '20px',
              margin: 0,
            }}
          >
            <li>
              <strong>Laser Micro-Engraving:</strong> Hold the finished lens up to a ceiling light —
              genuine Zeiss lenses have a tiny laser-etched &ldquo;Z&rdquo; flag symbol on both
              lenses; Essilor Crizal lenses show a fog-breath watermark.
            </li>
            <li>
              <strong>Original Paper Lens Envelopes:</strong> Ask the technician to hand you the two
              empty paper lens packets with the factory QR code.
            </li>
            <li>
              <strong>WeChat Official Account Scan:</strong> Scan the packet QR code in WeChat to
              register your warranty directly on Zeiss China&apos;s official portal.
            </li>
          </ol>
        </div>

        <NextSteps
          steps={[
            {
              href: '/health',
              label: 'Calculate Your Total Healthcare & Optical Savings',
              description: 'Compare US/UK/CA/AU prices vs China in real time',
            },
            {
              href: '/health/tcm',
              label: 'Authentic TCM Massage & Acupuncture Guide',
              description: 'Where to book licensed clinical Tuina after a long walk',
            },
            {
              href: '/payment',
              label: 'Set Up Alipay Before Visiting the Market',
              description: 'Every optical stall accepts Alipay QR payments',
            },
          ]}
        />

        <MedicalDisclaimerFooter />
      </div>
    </div>
  );
}
