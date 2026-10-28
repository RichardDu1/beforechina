import { Metadata } from 'next';
import Link from 'next/link';
import Kicker from '@/components/Kicker';
import FactSheet from '@/components/FactSheet';
import MedicalTrustBar, { MedicalDisclaimerFooter } from '@/components/MedicalTrustBar';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Executive Health Checkup & Full-Body MRI Cost in China (2026 Guide)',
  description:
    'How to book a 3.5-hour comprehensive health checkup ($250–$650) or 3.0T MRI scan ($145) in Shanghai or Beijing as a foreigner. Public Tier-3 Hospital International Departments vs Jiahui & United Family.',
  alternates: { canonical: '/health/health-check' },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Executive Health Checkup & Full-Body MRI Cost in China (2026 Guide)',
  url: 'https://beforechina.com/health/health-check',
  lastReviewed: '2026-10-28',
  description:
    'Comparing executive health screening packages, 3.0T MRI costs, and English report turnaround across Shanghai Tier-3 public hospital international wings and private international hospitals.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a full-body MRI or executive health check cost in China vs the US and UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the US or UK, private full-body preventive screenings (such as Prenuvo, Ezra, or Bupa executive assessments) cost $1,800 to $3,500+ USD (£1,200–£2,800). In Shanghai or Beijing, an International Medical Department inside a Tier-3 Grade-A public hospital (such as Huashan or Ruijin Hospital) performs a comprehensive half-day screening — blood panels, abdominal/thyroid ultrasound, ECG, low-dose chest CT, and optional 3.0T brain MRI — for $280 to $680 USD (¥2,000–¥4,800 RMB).',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my Chinese hospital health checkup report be in English?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the tier you book. Standard local checkup centers ($100–$180) issue reports strictly in Mandarin Chinese. Public Tier-3 Hospital International Departments ($280–$700) provide bilingual consultation and can issue an English summary for an additional ¥300–¥500 fee if requested at check-in. Private international hospitals like Jiahui Health or United Family ($850–$2,200) issue full English reports natively.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a comprehensive hospital checkup take in China?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Typically 3 to 4 hours in a single morning. You arrive fasting at 7:30–8:00 AM, receive a digital barcode wristband, and nurses guide you through dedicated stations (blood draw, ultrasound, CT/MRI, internal medicine, ophthalmology, followed by a complimentary hot breakfast). Most results are ready digitally within 2 to 5 business days.',
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
      name: 'Executive Health Check & MRI Cost',
      item: 'https://beforechina.com/health/health-check',
    },
  ],
};

export default function HealthCheckPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[pageSchema, faqSchema, breadcrumbSchema]} id="health-check-schema" />

      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <Kicker>Preventive Diagnostics &amp; Imaging</Kicker>
          <h1>Executive Health Checkups &amp; Full-Body MRI Cost in China (2026 Guide)</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            What takes 3 months of referrals and $3,000+ in Boston or London is completed in 3.5
            hours before lunch in Shanghai for $350. Here is how the 3 hospital tiers compare — and
            how to make sure you leave with an English report.
          </p>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
        <MedicalTrustBar fieldLocation="Shanghai (Huashan, Ruijin, Jiahui) & Beijing (PUMCH, United Family)" />

        <FactSheet
          title="2026 Health Checkup & MRI Cost Breakdown (Shanghai & Beijing)"
          badge="2026 Hospital Tariffs"
          lastUpdated="October 2026"
          facts={[
            {
              label: 'Tier 1: Local Public Checkup Center',
              value: '$100 – $200 (¥700 – ¥1,500) · Mandarin only',
            },
            {
              label: 'Tier 2: Public Hospital VIP / Intl Wing',
              value: '$280 – $680 (¥2,000 – ¥4,800) · Best Value',
              highlight: true,
            },
            {
              label: 'Tier 3: Private Intl Hospital (Jiahui/UFH)',
              value: '$850 – $2,400 (¥6,000 – ¥17,000) · Full English',
            },
            {
              label: '3.0T Brain or Spine MRI Add-On',
              value: '$110 – $200 (¥800 – ¥1,400) vs $1,850+ in US',
              highlight: true,
            },
            {
              label: 'Low-Dose Chest CT Scan',
              value: '$35 – $65 (¥250 – ¥450) · 5-minute scan',
            },
            {
              label: 'On-Site Time Required',
              value: '3.5 hours (7:30 AM – 11:00 AM, fasting)',
            },
          ]}
          bottomLine="For 90% of English-speaking visitors paying out-of-pocket, Tier 2 — the International Medical Department (国际医疗部) of an elite public university hospital like Ruijin or Huashan in Shanghai — hits the sweet spot: Siemens/GE 3.0T scanners, chief physicians, VIP lounge routing, and 75% savings over Western private clinics."
          warning="Never book a direct-billing private international hospital package using insurance without checking your policy cap first — Reddit expat threads frequently warn of aggressive test upselling when private clinics bill insurers directly. If paying cash, select a fixed-price checkup package upfront."
        />

        {/* 3 Tiers Comparison Table */}
        <div className="article-card" style={{ marginBottom: '28px', overflowX: 'auto' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>
            Comparing China&apos;s 3 Checkup Tiers for Foreigners
          </h2>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '14px',
              textAlign: 'left',
            }}
          >
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
                <th style={{ padding: '12px 8px' }}>Feature</th>
                <th style={{ padding: '12px 8px' }}>Local Public Dept (普通体检部)</th>
                <th style={{ padding: '12px 8px', color: 'var(--primary-color)' }}>
                  Public Hospital International Wing (三甲国际部)
                </th>
                <th style={{ padding: '12px 8px' }}>
                  Private International Hospital (嘉会 / 和睦家)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px 8px', fontWeight: 600 }}>Typical Package Cost</td>
                <td style={{ padding: '12px 8px' }}>$100 – $200</td>
                <td
                  style={{
                    padding: '12px 8px',
                    fontWeight: 700,
                    color: 'var(--accent-color)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  $280 – $680
                </td>
                <td style={{ padding: '12px 8px' }}>$850 – $2,400+</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px 8px', fontWeight: 600 }}>Representative Facilities</td>
                <td style={{ padding: '12px 8px' }}>
                  General district hospitals, Meinian Onehealth
                </td>
                <td style={{ padding: '12px 8px' }}>
                  <strong>Huashan IMD, Ruijin VIP, Zhongshan VIP</strong> (Shanghai)
                </td>
                <td style={{ padding: '12px 8px' }}>
                  <strong>Jiahui Health, United Family (UFH), Parkway</strong>
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px 8px', fontWeight: 600 }}>English Spoken</td>
                <td style={{ padding: '12px 8px' }}>None (translation app required)</td>
                <td style={{ padding: '12px 8px' }}>Bilingual concierge nurses + senior doctors</td>
                <td style={{ padding: '12px 8px' }}>100% fluent English throughout</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px 8px', fontWeight: 600 }}>Written Report Language</td>
                <td style={{ padding: '12px 8px' }}>Chinese only</td>
                <td style={{ padding: '12px 8px' }}>
                  Chinese + optional English summary (+$50–$70)
                </td>
                <td style={{ padding: '12px 8px' }}>Native English medical dossier</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 8px', fontWeight: 600 }}>Lead Time to Book</td>
                <td style={{ padding: '12px 8px' }}>3–7 days (WeChat mini-program)</td>
                <td style={{ padding: '12px 8px' }}>3–5 business days via phone/email</td>
                <td style={{ padding: '12px 8px' }}>24–48 hours online in English</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Step-by-Step Morning Timeline */}
        <div className="article-card" style={{ marginBottom: '28px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '14px' }}>
            What Actually Happens During a 3.5-Hour Chinese Hospital Checkup
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '14px' }}>
            First-time Western visitors often describe China&apos;s checkup centers as &ldquo;sci-fi
            efficiency.&rdquo; Instead of visiting five different clinics over six weeks, every
            diagnostic modality is housed on a single floor:
          </p>
          <ol style={{ color: 'var(--text-secondary)', lineHeight: 1.7, paddingLeft: '20px' }}>
            <li style={{ marginBottom: '8px' }}>
              <strong>07:30 AM — Passport Check-In (Fasting):</strong> Arrive on an empty stomach
              (no food or water after 10 PM the night before) with your physical passport. You are
              issued a smart barcode folder or RFID wristband.
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>07:45 AM — Fasting Stations First:</strong> Automated routing sends you
              immediately to venipuncture (comprehensive metabolic, lipid, liver/kidney, thyroid,
              and tumor marker blood panels), C13/C14 breath test for <em>H. pylori</em>, and
              abdominal ultrasound (liver, gallbladder, pancreas, spleen, kidneys).
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>08:45 AM — Complimentary Hot Breakfast:</strong> Once fasting tests finish,
              VIP wings provide a hot breakfast lounge (congee, eggs, dim sum, soy milk) before
              non-fasting checks.
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>09:15 AM — Imaging &amp; Specialist Rooms:</strong> 12-lead ECG, carotid
              artery &amp; thyroid ultrasound, retinal fundus photography, audiometry, bone
              densitometry, and low-dose spiral chest CT (or 3.0T brain MRI).
            </li>
            <li>
              <strong>10:45 AM — Checkout &amp; Digital Delivery:</strong> Hand back your folder.
              Full lab values and radiologist summaries are generated in 3–5 working days (and raw
              DICOM imaging can be exported for your doctor back home).
            </li>
          </ol>
        </div>

        <NextSteps
          steps={[
            {
              href: '/health',
              label: 'Compare Checkup & MRI Costs in Your Currency',
              description: 'Use our interactive China vs US/UK/CA/AU calculator',
            },
            {
              href: '/health/dental',
              label: 'Add a $42 Dental Cleaning & 3D Scan',
              description: 'Complete your checkup day with an ultrasonic dental scaling',
            },
            {
              href: '/health/glasses',
              label: 'Same-Day Prescription Glasses in Shanghai ($45+)',
              description: 'Use your new eye exam numbers at Shanghai Glasses City',
            },
          ]}
        />

        <MedicalDisclaimerFooter />
      </div>
    </div>
  );
}
