import { Metadata } from 'next';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata: Metadata = {
  title: 'About BeforeChina | China Travel Specialists',
  description:
    'BeforeChina is a small team of China specialists designing private tailor-made journeys. Born in China, based in the UK — we know both sides.',
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'website',
    url: 'https://beforechina.com/about',
    title: 'About BeforeChina | China Travel Specialists',
    description:
      'A small team of China specialists designing private journeys for travellers who want more than a tour.',
    images: [
      {
        url: '/images/destinations/golden-triangle-og.webp',
        width: 1200,
        height: 630,
        alt: 'BeforeChina — Tailor-Made Journeys to China',
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Hero */}
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1>We Are BeforeChina</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            A small team of China specialists designing private journeys for travellers who want
            more than a tour.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ padding: 'var(--section-gap-sm) 0' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(24px, 3vw, 32px)',
              fontWeight: 500,
              marginBottom: '24px',
            }}
          >
            Our Story
          </h2>
          <div style={{ color: 'var(--text-secondary)', fontSize: '17px', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '20px' }}>
              BeforeChina was born from a simple frustration: every China travel website for
              Westerners was either a faceless OTA listing the same five hotels, or a government
              tourism portal covered in propaganda about "5,000 years of civilisation."
            </p>
            <p style={{ marginBottom: '20px' }}>
              Richard, our founder, grew up in China and has spent the last decade living in the UK.
              He has guided friends, family, and strangers through China trips for years — and kept
              hearing the same thing: "I wish I had known this before I went."
            </p>
            <p style={{ marginBottom: '20px' }}>
              So he built BeforeChina. Not as another booking engine, but as the resource he wished
              existed when his British friends asked, "Where should I go in China?" — with real
              local knowledge, honest advice, and journeys designed by someone who knows both sides
              of the cultural gap.
            </p>
            <p>
              Today, BeforeChina designs private tailor-made journeys for travellers from the UK,
              the US, Australia, and across Europe. Every itinerary is built from scratch — because
              no two travellers are the same, and neither should their journeys be.
            </p>
          </div>
        </div>
      </section>

      {/* Our Specialists */}
      <section style={{ padding: 'var(--section-gap-sm) 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-width-wide)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(24px, 3.5vw, 34px)',
              fontWeight: 500,
              marginBottom: '40px',
              textAlign: 'center',
            }}
          >
            Our China Specialists
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
            }}
          >
            {/* Richard */}
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--callout-bg-primary)',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '36px',
                }}
              >
                R
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '22px',
                  fontWeight: 500,
                  marginBottom: '6px',
                }}
              >
                Richard Du
              </h3>
              <div
                style={{
                  fontSize: '12px',
                  color: 'var(--accent-color)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '12px',
                }}
              >
                Founder & Lead Specialist
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6 }}>
                Chinese native, based in the UK. 50+ trips back to China. Knows the hidden dumpling
                shop in Beijing, the best sunrise spot on the Great Wall, and which Silk Road
                guesthouse has the softest beds.
              </p>
            </div>

            {/* Yunnan Specialist */}
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--callout-bg-warm)',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '36px',
                }}
              >
                Y
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '22px',
                  fontWeight: 500,
                  marginBottom: '6px',
                }}
              >
                Yunnan & Southwest Specialist
              </h3>
              <div
                style={{
                  fontSize: '12px',
                  color: 'var(--accent-color)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '12px',
                }}
              >
                Based in Dali, Yunnan
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6 }}>
                Has spent the last eight years exploring every corner of Yunnan, from the tea
                mountains of Xishuangbanna to the Tibetan foothills of Shangri-La. Knows the best
                guesthouses in Shaxi and which Tiger Leaping Gorge trail has the fewest crowds.
              </p>
            </div>

            {/* Silk Road Specialist */}
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--callout-bg-warm)',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '36px',
                }}
              >
                S
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '22px',
                  fontWeight: 500,
                  marginBottom: '6px',
                }}
              >
                Silk Road & Northwest Specialist
              </h3>
              <div
                style={{
                  fontSize: '12px',
                  color: 'var(--accent-color)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '12px',
                }}
              >
                Based in Urumqi, Xinjiang
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6 }}>
                Grew up in Xinjiang and has driven the Karakoram Highway more times than he can
                count. Speaks Uyghur and Mandarin, and knows every melon stall at the Kashgar Sunday
                Bazaar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ padding: 'var(--section-gap-sm) 0' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(24px, 3vw, 32px)',
              fontWeight: 500,
              marginBottom: '24px',
            }}
          >
            How We Work
          </h2>
          <div style={{ color: 'var(--text-secondary)', fontSize: '17px', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '20px' }}>
              <strong>Every journey is built from scratch.</strong> We don't have a catalogue of
              fixed departures. When you tell us what moves you — the food, the landscapes, the
              history, the people — we design an itinerary that's yours alone.
            </p>
            <p style={{ marginBottom: '20px' }}>
              <strong>We work with locals, not chains.</strong> Our guides are from the places they
              show you. Our guesthouses are family-run. Our drivers know the back roads. We believe
              the best travel experiences come from real human connections, not corporate contracts.
            </p>
            <p>
              <strong>You're never alone on the road.</strong> From the moment you land to the
              moment you fly home, our team is on WhatsApp. Train cancelled? We'll rebook you. Not
              feeling well? We'll find an English-speaking doctor. Plans change? So does your
              itinerary.
            </p>
          </div>
        </div>
      </section>

      <EnquiryForm />
    </div>
  );
}
