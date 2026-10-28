import { Metadata } from 'next';
import Link from 'next/link';
import Kicker from '@/components/Kicker';
import FactSheet from '@/components/FactSheet';
import MedicalTrustBar, { MedicalDisclaimerFooter } from '@/components/MedicalTrustBar';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';
import { affiliateProps } from '@/lib/affiliates';

export const metadata: Metadata = {
  title: 'Dentist in China & Dental Implants Cost (2026 Foreigner Guide)',
  description:
    'Complete 2026 guide to seeing a dentist in China (Shenzhen, Shanghai, Beijing). Real post-VBP dental implant prices ($850–$1,050 for Swiss Straumann), single-trip vs 2-trip procedures, and English clinics.',
  alternates: { canonical: '/health/dental' },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Dentist in China & Dental Implants Cost (2026 Foreigner Guide)',
  url: 'https://beforechina.com/health/dental',
  lastReviewed: '2026-10-28',
  description:
    'Practical guide for foreigners seeking dental care, cleanings, zirconia crowns, and VBP-regulated dental implants in Shanghai, Shenzhen, and Beijing.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much do dental implants cost in China in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Following China’s national Volume-Based Procurement (VBP) reforms, a single tooth implant using Korean systems (Osstem/Dentium) costs ¥4,000–¥5,500 RMB ($550–$760 USD), while top-tier Swiss Straumann or Swedish Nobel Biocare implants cost ¥6,200–¥7,800 RMB ($860–$1,080 USD) all-inclusive (fixture, abutment, zirconia crown, and surgery fee).',
      },
    },
    {
      '@type': 'Question',
      name: 'Which dental treatments can be finished during a single 10-day trip to China?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ultrasonic teeth cleaning ($35–$50), composite fillings ($40–$80), root canal therapy ($180–$350), laser teeth whitening ($150–$280), and CAD/CAM 3D-milled zirconia crowns or porcelain veneers (completed in 48 to 72 hours) can all be safely finished within a single 7-to-10-day trip.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is Shenzhen the biggest dental tourism hub in China?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shenzhen sits directly across the border from Hong Kong, where private dental care is among the most expensive in the world (HK$20,000–$35,000 per implant). Over the past five years, large JCI-standard dental hospitals near Luohu and Futian checkpoints have optimised their entire workflow for international patients — offering English/Cantonese staff, CBCT 3D scans included in consultations, and international warranty passports.',
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
      name: 'Dental Care & Implants in China',
      item: 'https://beforechina.com/health/dental',
    },
  ],
};

export default function DentalChinaPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[pageSchema, faqSchema, breadcrumbSchema]} id="dental-china-schema" />

      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <Kicker>Dental Care &amp; VBP Price Guide</Kicker>
          <h1>Getting Dental Work in China as a Foreigner (2026 Guide)</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            From a $40 ultrasonic cleaning and panoramic CBCT scan during a layover in Shanghai to
            $920 Swiss Straumann implants in Shenzhen. Here is the exact price list, clinical
            timeline, and how to choose an English-speaking clinic safely.
          </p>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
        <MedicalTrustBar fieldLocation="Shenzhen (Luohu/Futian) & Shanghai Accredited Dental Chains" />

        <FactSheet
          title="2026 China Dental Price Menu (Foreigner-Friendly Clinics)"
          badge="2026 VBP Audited"
          lastUpdated="October 2026"
          facts={[
            {
              label: 'Ultrasonic Cleaning + CBCT X-Ray',
              value: '$35 – $55 (¥250 – ¥400) · 45 mins',
              highlight: true,
            },
            {
              label: '3M Resin Cavity Filling',
              value: '$40 – $85 (¥280 – ¥600) per tooth · 1 visit',
            },
            {
              label: 'CAD/CAM Full Zirconia Crown',
              value: '$250 – $380 (¥1,800 – ¥2,700) · 48–72 hours',
              highlight: true,
            },
            {
              label: 'Swiss Straumann Implant (All-In)',
              value: '$860 – $1,080 (¥6,200 – ¥7,800) · Needs 2 trips',
              highlight: true,
            },
            {
              label: 'Korean Osstem / Dentium Implant',
              value: '$550 – $760 (¥4,000 – ¥5,500) · Needs 2 trips',
            },
            {
              label: 'Microscopic Root Canal (Molar)',
              value: '$220 – $420 (¥1,600 – ¥3,000) · 1–2 visits',
            },
          ]}
          bottomLine="Single-visit treatments (cleanings, fillings, 48-hour digital zirconia crowns) are a no-brainer to add to a Shanghai, Beijing, or Shenzhen itinerary. For dental implants, only proceed if you are willing to return in 3–6 months for Stage 2 crown seating and you insist on globally serviceable hardware (Straumann or Nobel Biocare)."
          warning="Avoid street-side budget clinics that do not use sealed autoclave pouches or offer suspiciously cheap '¥1,999 all-in' implants using unverified domestic fixtures that no Western dentist can maintain."
        />

        {/* Single Trip vs Two Trips */}
        <div className="article-card" style={{ marginBottom: '28px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>
            Rule #1: Match Your Procedure to Your Visa &amp; Trip Length
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '16px' }}>
            The biggest mistake medical tourists make is trying to force a 4-month biological
            healing process into a 10-day holiday. Before booking an appointment, separate dental
            care into two strict buckets:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
            }}
          >
            <div
              style={{
                padding: '18px',
                backgroundColor: 'rgba(7, 193, 96, 0.06)',
                border: '1px solid rgba(7, 193, 96, 0.25)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <h3 style={{ fontSize: '17px', color: '#07C160', marginBottom: '10px' }}>
                ✓ Safe for a Single Trip (3–10 Days)
              </h3>
              <ul
                style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  paddingLeft: '18px',
                  margin: 0,
                }}
              >
                <li>Ultrasonic scaling, Airflow polishing &amp; 3D CBCT checkup (1 hour)</li>
                <li>3M nano-resin fillings &amp; ceramic inlays/onlays (1–2 days)</li>
                <li>CAD/CAM digital zirconia crowns — scanned on Day 1, seated on Day 3</li>
                <li>Simple wisdom tooth extraction (allow 3–4 days before flying)</li>
              </ul>
            </div>

            <div
              style={{
                padding: '18px',
                backgroundColor: 'rgba(230, 57, 70, 0.06)',
                border: '1px solid rgba(230, 57, 70, 0.25)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <h3 style={{ fontSize: '17px', color: 'var(--primary-color)', marginBottom: '10px' }}>
                ⚠️ Requires Two Trips (or Home Dentist Handoff)
              </h3>
              <ul
                style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  paddingLeft: '18px',
                  margin: 0,
                }}
              >
                <li>
                  <strong>Standard Dental Implants:</strong> Trip 1 (5–7 days) places the titanium
                  post. Bone integration takes 3–6 months before Trip 2 (5 days) fits the abutment
                  &amp; crown.
                </li>
                <li>
                  <strong>Sinus Lifts &amp; Major Bone Grafts:</strong> Adds 4–6 months of healing
                  before implant loading.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Public vs Private Dental Clinics */}
        <div className="article-card" style={{ marginBottom: '28px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>
            Public Stomatology Hospitals vs Private Bilingual Dental Chains
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '14px' }}>
            Unlike general surgery (where China&apos;s public Tier-3 hospitals dominate),{' '}
            <strong>
              dentistry is the one field where accredited private chains are vastly easier for
              foreigners
            </strong>
            :
          </p>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.65, paddingLeft: '20px' }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>
                Public Stomatology Hospitals (公立口腔医院, e.g., Shanghai Ninth People&apos;s
                Hospital, Peking University Stomatology):
              </strong>{' '}
              World-class maxillofacial surgeons and strict VBP baseline prices (~¥6,000 for
              Straumann), but registration requires Chinese WeChat mini-programs weeks in advance,
              minimal English is spoken at chairside, and appointments move at breakneck speed.
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>
                Tier-1 Bilingual Private Chains (e.g., Arrail Dental 瑞尔齿科, PureSmile,
                Vickong/Meiya in Shenzhen):
              </strong>{' '}
              Many doctors trained in the US, UK, or Hong Kong; appointments can be booked via
              WhatsApp or English email 48 hours ahead; and since 2024–2026 they have lowered their
              implant package prices to within 10–15% of public VBP rates.
            </li>
          </ul>
        </div>

        {/* 4 Non-Negotiable Safety Checks */}
        <div
          className="article-card"
          style={{ borderLeft: '4px solid var(--primary-color)', marginBottom: '32px' }}
        >
          <h2 style={{ fontSize: '22px', marginBottom: '12px' }}>
            4 Non-Negotiable Checklist Items Before Sitting in the Chair
          </h2>
          <ol
            style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              paddingLeft: '20px',
              marginBottom: '16px',
            }}
          >
            <li>
              <strong>Demand an &ldquo;Implant Passport&rdquo; &amp; Box Sticker:</strong> Only use
              globally distributed hardware (Swiss <em>Straumann</em> or <em>Nobel Biocare</em>).
              Have the nurse peel the holographic authenticity barcode sticker from the sterile box
              and stick it onto your English treatment record.
            </li>
            <li>
              <strong>Export Your DICOM 3D Scan:</strong> Ask the clinic to email or copy your raw
              CBCT 3D scan files and panoramic X-ray JPEG onto a USB drive so your dentist back home
              has a complete baseline.
            </li>
            <li>
              <strong>Get Itemised Written Quotes Before Anesthesia:</strong> Confirm whether bone
              powder (0.25g typically adds ¥1,200–¥1,800) and collagen membranes are included.
            </li>
            <li>
              <strong>Carry Medical Complication Insurance:</strong> Standard travel insurance will
              not cover post-op dental infections or flight changes caused by elective dental work.
            </li>
          </ol>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Link href="/health/dental-china-vs-turkey-uk" className="btn btn-primary">
              Compare China vs Turkey &amp; Hungary Prices →
            </Link>
            <a
              {...affiliateProps('medicalcomplications', 'dental-page-complications')}
              className="btn btn-outline"
            >
              Check Dental Travel Complication Cover ↗
            </a>
          </div>
        </div>

        <NextSteps
          steps={[
            {
              href: '/health/dental-china-vs-turkey-uk',
              label: 'UK/US vs Turkey vs China Dental Comparison',
              description: 'Full side-by-side matrix of hardware, warranties & costs',
            },
            {
              href: '/health/health-check',
              label: 'Add a Half-Day Executive Health Check ($250+)',
              description: 'Combine your trip with a 3.5-hour Shanghai hospital checkup',
            },
            {
              href: '/payment',
              label: 'How to Pay Hospital & Clinic Bills in China',
              description: 'Set up Alipay & foreign Visa/Mastercard before arrival',
            },
          ]}
        />

        <MedicalDisclaimerFooter />
      </div>
    </div>
  );
}
