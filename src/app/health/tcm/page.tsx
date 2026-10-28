import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import FactSheet from '@/components/FactSheet';
import MedicalTrustBar, { MedicalDisclaimerFooter } from '@/components/MedicalTrustBar';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Chinese Massage (Tuina), Acupuncture & TCM in China (2026 Visitor Guide)',
  description:
    'The foreigner guide to authentic Traditional Chinese Medicine (TCM), clinical Tuina orthopedic massage, acupuncture, and cupping in China. Prices ($30–$55), hospital clinics vs massage chains.',
  alternates: { canonical: '/health/tcm' },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Chinese Massage (Tuina), Acupuncture & TCM in China (2026 Visitor Guide)',
  url: 'https://beforechina.com/health/tcm',
  lastReviewed: '2026-10-28',
  description:
    'Practical guide to distinguishing recreational Chinese foot massage from licensed clinical Tuina, acupuncture, and heritage TCM pharmacies in Beijing, Shanghai, Hangzhou, and Chengdu.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between a standard Chinese massage and clinical Tuina (推拿)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard commercial massage or foot reflexology (足疗, $20–$40) at chains like Dragonfly or Green Massage is for relaxation. Clinical Tuina (推拿) is an orthopedic manual therapy performed by five-year medical-school-trained TCM physicians in hospitals or licensed TCM clinics, targeting cervical/lumbar spine alignment, frozen shoulder, and meridian acupoints.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is acupuncture safe for foreign tourists in China?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, when performed at a licensed TCM hospital (such as Shuguang or Longhua Hospital in Shanghai, or Dongzhimen TCM Hospital in Beijing) or a historic apothecary clinic (Tong Ren Tang, Fang Hui Chun Tang). All licensed facilities strictly use single-use, sterile, disposable stainless-steel needles sealed in individual blister packs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I bring Chinese herbal medicine back through customs to the UK, US, or Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Be very cautious. Raw dried herbs, bark, seeds, and any formulas containing animal or CITES-listed ingredients are strictly restricted by biosecurity laws in Australia, New Zealand, the US, and the UK. If prescribed herbal therapy, ask for sealed, commercially manufactured granule sachets (颗粒剂) with printed ingredient labels and never carry animal-derived or endangered plant ingredients.',
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
      name: 'TCM, Tuina Massage & Acupuncture',
      item: 'https://beforechina.com/health/tcm',
    },
  ],
};

export default function TcmChinaPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[pageSchema, faqSchema, breadcrumbSchema]} id="tcm-china-schema" />

      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <Kicker>Traditional Chinese Medicine &amp; Wellness</Kicker>
          <h1>Chinese Massage (Tuina), Acupuncture &amp; TCM in China: The Visitor&apos;s Guide</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            From 300-year-old imperial apothecaries in Beijing and Hangzhou to clinical orthopedic{' '}
            <em>Tuina</em> and fire cupping after a long-haul flight. Here is how to find genuine,
            medically licensed TCM — and avoid tourist traps.
          </p>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
        <MedicalTrustBar fieldLocation="Shanghai, Beijing & Hangzhou Licensed TCM Clinics" />

        <FactSheet
          title="2026 TCM, Tuina Massage & Acupuncture Price Benchmarks"
          badge="2026 Verified Rates"
          lastUpdated="October 2026"
          facts={[
            {
              label: 'Boutique Relaxation / Foot Massage',
              value: '$25 – $48 (¥180 – ¥350) · 60–90 mins',
              highlight: true,
            },
            {
              label: 'Clinical Orthopedic Tuina (推拿)',
              value: '$30 – $55 (¥220 – ¥400) · 45–60 mins',
              highlight: true,
            },
            {
              label: 'Acupuncture Session (Single-Use Needles)',
              value: '$28 – $60 (¥200 – ¥430) per session',
            },
            {
              label: 'Fire Cupping (拔罐) / Gua Sha (刮痧)',
              value: '$15 – $30 (¥100 – ¥220) · 20–30 mins',
            },
            {
              label: 'Blind Practitioner Massage (盲人按摩)',
              value: '$18 – $28 (¥130 – ¥200) · 60 mins deep tissue',
            },
            {
              label: 'Pulse & Tongue Diagnostic Consultation',
              value: '$15 – $45 (¥100 – ¥320) at heritage halls',
            },
          ]}
          bottomLine="For jet lag, stiff shoulders from long flights, or lower-back fatigue after hiking the Great Wall, China offers two distinct tracks: high-end spa chains (like Green Massage or Dragonfly in Shanghai/Beijing) for English-friendly relaxation, and licensed TCM clinics or heritage pharmacies (Tong Ren Tang, Fang Hui Chun Tang) for clinical acupuncture and orthopedic Tuina."
          warning="Never accept unsolicited 'free pulse readings' from touts near tourist sites that pressure you into buying $400 bags of unidentified loose herbs. Only visit established hospital TCM wings, state-certified heritage pharmacies, or reputable wellness chains with printed price menus."
        />

        {/* The 3 Types of Venues */}
        <div className="article-card" style={{ marginBottom: '28px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>
            The 3 Tiers of Chinese Massage &amp; TCM Venues Explained
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ paddingBottom: '14px', borderBottom: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '6px' }}>
                1. Premium Urban Wellness Chains (Best for First-Timers &amp; Jet Lag)
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Chains like <strong>Green Massage (青籁养身)</strong> and{' '}
                <strong>Dragonfly (悠庭)</strong> in Shanghai and Beijing offer spotless private
                rooms, English-speaking receptionists, digital acupressure preference tablets, and
                hot herbal foot baths paired with 60–90 minutes of meridian body work (¥280–¥480 RMB
                / $38–$66 USD).
              </p>
            </div>

            <div style={{ paddingBottom: '14px', borderBottom: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '6px' }}>
                2. Historic TCM Apothecary Halls (百年国医馆 — Best Cultural &amp; Clinical
                Experience)
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Historic halls such as{' '}
                <strong>Tong Ren Tang (同仁堂, founded 1669 in Beijing)</strong>,{' '}
                <strong>
                  Fang Hui Chun Tang (方回春堂, founded 1649 on Hefang Street in Hangzhou)
                </strong>
                , and <strong>Hu Qing Yu Tang (胡庆余堂)</strong> combine wooden architectural
                museums with active licensed outpatient clinics offering pulse diagnosis,
                acupuncture, moxibustion, and fire cupping.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '18px', marginBottom: '6px' }}>
                3. Tier-3 TCM Hospital International Wings (Best for Clinical Acupuncture)
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                University hospitals like <strong>Shanghai Shuguang Hospital</strong>,{' '}
                <strong>Longhua Hospital</strong>, and{' '}
                <strong>Beijing Dongzhimen TCM Hospital</strong> operate dedicated international
                acupuncture and rehabilitation clinics staffed by senior professors.
              </p>
            </div>
          </div>
        </div>

        {/* Customs & Herbal Medicine Warning */}
        <div
          className="article-card"
          style={{ borderLeft: '4px solid var(--primary-color)', marginBottom: '32px' }}
        >
          <h2 style={{ fontSize: '22px', marginBottom: '10px' }}>
            Crucial Customs Rule Before Buying Chinese Herbs
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
            If a TCM physician prescribes an herbal formula, ask for{' '}
            <strong>factory-sealed single-dose concentrated granules (免煎颗粒)</strong> with full
            botanical Latin/English labels rather than bags of raw roots and bark. Border
            biosecurity in <strong>Australia, New Zealand, the US, and the UK</strong> frequently
            confiscates unlabelled raw plant matter, and you must strictly refuse any product
            containing protected wildlife or CITES-listed ingredients.
          </p>
        </div>

        <NextSteps
          steps={[
            {
              href: '/health',
              label: 'Healthcare & Wellness Cost Calculator',
              description: 'Compare TCM, dental, optical & checkup prices vs home',
            },
            {
              href: '/health/health-check',
              label: 'Combine TCM with a Modern 3.5-Hour Hospital Checkup',
              description: 'Why visitors pair modern MRI/blood panels with TCM recovery',
            },
            {
              href: '/health/glasses',
              label: 'Shanghai & Beijing Optical Market Guide',
              description: 'Complete the "China Travel Triad": TCM + Dental + Glasses',
            },
          ]}
        />

        <MedicalDisclaimerFooter />
      </div>
    </div>
  );
}
