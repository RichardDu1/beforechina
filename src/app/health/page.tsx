import { Metadata } from 'next';
import Link from 'next/link';
import Kicker from '@/components/Kicker';
import FactSheet from '@/components/FactSheet';
import HealthcareCostCalculator from '@/components/HealthcareCostCalculator';
import MedicalTrustBar, { MedicalDisclaimerFooter } from '@/components/MedicalTrustBar';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';
import { affiliateProps } from '@/lib/affiliates';

export const metadata: Metadata = {
  title: 'Healthcare & Medical Tourism in China for Foreigners (2026 Price Guide)',
  description:
    'Independent 2026 guide to getting health checkups, MRI scans, dental implants, prescription glasses, and TCM wellness in China. Compare real hospital prices vs US/UK.',
  alternates: { canonical: '/health' },
};

const medicalWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Healthcare & Medical Tourism in China for Foreigners (2026 Guide)',
  url: 'https://beforechina.com/health',
  lastReviewed: '2026-10-28',
  description:
    'Independent cost benchmarks and practical guide for international visitors accessing Tier-3 public hospital international departments, private hospitals, dental clinics, and optical markets in China.',
  publisher: {
    '@type': 'Organization',
    name: 'BeforeChina Research Team',
    url: 'https://beforechina.com',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can foreign tourists use hospitals and get health checkups in China?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Foreign passport holders can access two main tiers of care in major hubs like Shanghai, Beijing, Shenzhen, and Guangzhou: (1) International Medical Departments (IMDs) inside elite Tier-3 Grade-A public hospitals (such as Huashan or Ruijin Hospital in Shanghai), and (2) JCI-accredited private international hospitals (such as Jiahui Health or United Family Healthcare). Both offer English-speaking coordination and accept foreign credit cards or Alipay.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a full-body health check or MRI cost in China compared to the US or UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A comprehensive half-day executive health checkup at a top Shanghai public hospital International Department costs $250 to $600 USD (¥1,800–¥4,300 RMB), compared to $2,000–$3,500+ in the US or £1,000+ privately in the UK. A non-contrast 3.0T MRI scan typically costs $110 to $200 USD in a public international wing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why are dental implants in China 60% to 75% cheaper than in the UK or US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'China implemented national Volume-Based Procurement (VBP) reforms for dental implants, capping public hospital service fees and slashing wholesale component prices for top global brands like Swiss Straumann and Nobel Biocare. A complete single Straumann implant in Shenzhen or Shanghai now averages ¥6,000–¥7,500 RMB ($850–$1,050 USD), compared to £2,200–£3,500 in the UK or $3,500–$5,000 in the US.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does standard travel insurance cover planned dental or medical treatment in China?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Standard travel insurance policies strictly exclude elective or planned medical and dental procedures abroad and any resulting complications. Travelers undergoing planned procedures must purchase specialist medical tourism complication insurance prior to departure.',
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
      name: 'Health & Medical Guide',
      item: 'https://beforechina.com/health',
    },
  ],
};

const HEALTH_GUIDES = [
  {
    href: '/health/health-check',
    badge: 'Most Popular · Half-Day',
    title: 'Executive Health Checkups & Full-Body MRI in China',
    priceTag: 'From $250–$600 (vs $2,400+ in US)',
    summary:
      'How to book a 3.5-hour comprehensive screening (blood panels, ultrasound, low-dose CT, 3.0T MRI) at Shanghai Tier-3 Hospital International Departments (Huashan, Ruijin) or Jiahui Health — and how to get an English report.',
  },
  {
    href: '/health/dental',
    badge: 'VBP Regulated Pricing',
    title: 'Dental Work & Implants in China: The 2026 Foreigner Guide',
    priceTag: 'Straumann Implant: ~$920 · Cleaning: ~$42',
    summary:
      "How China's national Volume-Based Procurement slashed Swiss Straumann & Nobel Biocare implant prices by 60%, which procedures fit a single trip vs two trips, and why you must request an Implant Passport.",
  },
  {
    href: '/health/dental-china-vs-turkey-uk',
    badge: 'Global Comparison',
    title: 'Dental Implants Abroad: UK & US vs Turkey, Hungary & China (2026)',
    priceTag: 'Save 65–75% on Swiss/German Hardware',
    summary:
      'Over 600,000 UK patients go abroad for dental care each year. We compare clinical regulation, implant brand transparency, and real all-in costs across Turkey, Hungary, and Shenzhen/Shanghai.',
  },
  {
    href: '/health/glasses',
    badge: '1-Hour Turnaround',
    title: 'Buying Prescription Glasses in China: Shanghai & Beijing Optical Markets',
    priceTag: '$35–$95 for High-Index 1.67 Lenses + Frames',
    summary:
      'Why Shanghai International Glasses City has become a top-rated stop for international visitors. Computerised eye exams, verifying genuine Zeiss/Essilor lenses, and real bargaining benchmarks.',
  },
  {
    href: '/health/tcm',
    badge: 'Authentic Wellness',
    title: 'Traditional Chinese Medicine (TCM), Tuina Massage & Acupuncture',
    priceTag: '$30–$50 per Clinical Session',
    summary:
      'How to tell a tourist foot-massage parlour apart from a licensed TCM hospital outpatient department or a 150-year-old heritage apothecary like Fang Hui Chun Tang and Tong Ren Tang.',
  },
];

export default function HealthHubPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[medicalWebPageSchema, faqSchema, breadcrumbSchema]} id="health-hub-schema" />

      {/* Editorial Hero */}
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <Kicker>Independent Healthcare & Wellness Guide</Kicker>
          <h1>Healthcare in China for Foreigners: Real Prices, Zero Agency Fluff</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            From half-day executive health checkups and $145 MRI scans in Shanghai to VBP-regulated
            Swiss dental implants in Shenzhen and same-day prescription glasses. Here is what
            actually works for international visitors — and what to avoid.
          </p>
        </div>
      </section>

      <div className="container">
        <MedicalTrustBar />

        <FactSheet
          title="China Inbound Healthcare & Checkup Benchmarks (2026)"
          badge="2026 Verified Tariffs"
          lastUpdated="October 2026"
          facts={[
            {
              label: 'Executive Health Check',
              value: '$250–$650 at Shanghai Tier-3 Hospital International Dept (3.5 hours)',
              highlight: true,
            },
            {
              label: 'Single Dental Implant',
              value: '$850–$1,050 (¥6,000–¥7,500) post-VBP for Swiss Straumann',
              highlight: true,
            },
            {
              label: '3.0T MRI Scan Cost',
              value: '$110–$200 out-of-pocket (same or next-day scheduling)',
            },
            {
              label: 'Prescription Glasses',
              value: '$35–$95 per pair (1.67 high-index lenses, 1-hour pickup)',
            },
            {
              label: 'Hainan Medical Visa-Free',
              value: '30-day visa-free entry for 61 countries (medical care explicitly permitted)',
            },
            {
              label: 'Public Hospital Kickbacks',
              value: 'Strictly illegal in China — avoid brokers claiming "secret VIP access"',
            },
          ]}
          bottomLine="For non-urgent preventive screenings (executive checkups, MRI/CT imaging), routine dental work (cleanings, zirconia crowns), optical fitting, and TCM physical therapy, Tier-1 Chinese hubs offer zero waitlists and 60–80% cost savings compared to US/UK private care."
          warning="Do not compress complex surgeries or multi-stage dental implants into a single short tourist trip without planning for follow-up care. Standard travel insurance does NOT cover elective procedures abroad."
        />
      </div>

      {/* Interactive Calculator Section */}
      <section style={{ padding: '32px 0 64px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <Kicker>Interactive Cost Benchmarking</Kicker>
            <h2 style={{ fontSize: '32px', marginBottom: '8px' }}>
              China vs US / UK / CA / AU Healthcare Cost Calculator
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '680px', margin: '0 auto' }}>
              Select your home currency and tick the checkups or dental treatments you are
              researching to compare published Chinese hospital rates against Western private
              quotes.
            </p>
          </div>
          <HealthcareCostCalculator />
        </div>
      </section>

      {/* Deep-Dive Cluster Guides */}
      <section style={{ padding: '48px 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container" style={{ maxWidth: '920px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Kicker>Step-by-Step Practical Guides</Kicker>
            <h2 style={{ fontSize: '32px' }}>What Works in a Single Visit (And What Takes Two)</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {HEALTH_GUIDES.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="article-card"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block',
                  borderLeft: '3px solid var(--primary-color)',
                  transition: 'transform 0.15s ease',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '8px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'var(--primary-color)',
                    }}
                  >
                    {g.badge}
                  </span>
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#07C160',
                      backgroundColor: 'rgba(7, 193, 96, 0.1)',
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-pill)',
                    }}
                  >
                    {g.priceTag}
                  </span>
                </div>
                <h3 style={{ fontSize: '22px', marginBottom: '8px', color: 'var(--text-primary)' }}>
                  {g.title} →
                </h3>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '15px',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {g.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The 3-Tier Hospital System Explained + On-Site Verification Box */}
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <Kicker>Understanding the System</Kicker>
            <h2 style={{ fontSize: '32px' }}>
              Which Chinese Hospital Tier Should Foreigners Actually Use?
            </h2>
          </div>

          <div className="article-card" style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>
              Tier A: Public Tier-3 Hospital &ldquo;International Medical Departments&rdquo; (Best
              Value & Clinical Depth)
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '12px' }}>
              China&apos;s top clinical specialists work predominantly inside elite state-run{' '}
              <strong>Grade III-A (三甲) university hospitals</strong> — such as Huashan Hospital,
              Ruijin Hospital, and Zhongshan Hospital in Shanghai, or Peking Union Medical College
              Hospital in Beijing.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Skip the chaotic general outpatient hall. Instead, book directly with their dedicated{' '}
              <strong>International Medical Department (国际医疗部 / 特需部)</strong>. You get the
              same chief physicians and 3.0T MRI/CT scanners in a quiet wing with bilingual nurses,
              at roughly <strong>20% to 30% of US private rates</strong>.
            </p>
          </div>

          <div className="article-card" style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>
              Tier B: Private International Hospitals (Best English Fluency & Direct Insurance
              Billing)
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Facilities like <strong>Jiahui International Hospital (Shanghai)</strong> and{' '}
              <strong>United Family Healthcare (Beijing/Shanghai/Guangzhou)</strong> operate exactly
              like private hospitals in London or New York. Every doctor speaks fluent English and
              reports are issued natively in English. Prices are 2–3× higher than public
              International Departments ($800–$2,200 for comprehensive checkups), but still
              competitive against US cash prices.
            </p>
          </div>

          {/* Honest Risks & Insurance Box */}
          <div
            className="article-card"
            style={{
              borderLeft: '4px solid var(--primary-color)',
              marginBottom: '32px',
            }}
          >
            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>
              The Insurance Trap: Why Standard Travel Insurance Denies Medical Tourists
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
              If you travel to China with the intention of getting dental implants, an endoscopy, or
              any elective procedure,{' '}
              <strong>
                standard travel insurance (including SafetyWing and World Nomads) will not cover
                complications
              </strong>{' '}
              arising from that planned treatment. Always pair a general travel policy with
              dedicated medical travel complication coverage.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a
                {...affiliateProps('medicalcomplications', 'health-hub-complications-box')}
                className="btn btn-primary"
              >
                Check Medical Complication Coverage ↗
              </a>
              <Link href="/insurance" className="btn btn-outline">
                Read Our China Insurance Guide →
              </Link>
            </div>
          </div>

          <NextSteps
            steps={[
              {
                href: '/health/health-check',
                label: 'Executive Health Checks & MRI Guide',
                description: 'Compare Shanghai public VIP wings vs private international hospitals',
              },
              {
                href: '/health/dental-china-vs-turkey-uk',
                label: 'UK/US vs Turkey vs China Dental Comparison',
                description: 'Why post-VBP Swiss Straumann implants cost $920 in China',
              },
              {
                href: '/visa',
                label: 'Check 30-Day & Hainan Medical Visa-Free Rules',
                description: 'Verify if your passport qualifies for visa-free entry',
              },
            ]}
          />

          <MedicalDisclaimerFooter />
        </div>
      </section>
    </div>
  );
}
