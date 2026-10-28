'use client';

import { useState } from 'react';
import Link from 'next/link';

export interface Journey {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  days: string;
  category?: 'first-time' | 'nature' | 'frontier';
  tag?: string;
}

interface FeaturedJourneysProps {
  firstTime: Journey[];
  nature: Journey[];
  adventure: Journey[];
}

type FilterKey = 'essential' | 'first-time' | 'nature' | 'frontier';

export default function FeaturedJourneys({ firstTime, nature, adventure }: FeaturedJourneysProps) {
  const [activeTab, setActiveTab] = useState<FilterKey>('essential');

  // Essential selection picks 6 distinct iconic routes (3x2 balanced grid, zero duplicate photos)
  const essentialJourneys: Journey[] = [
    firstTime[0], // Beijing, Xian & Shanghai
    firstTime[1], // Shanghai, Hangzhou & Suzhou
    nature[0], // Guilin & Yangshuo
    nature[1], // Zhangjiajie
    adventure[0], // Silk Road
    adventure[1], // Tibet Lhasa to Everest
  ].filter(Boolean);

  const TABS: { key: FilterKey; label: string; count: number }[] = [
    { key: 'essential', label: '01 / Essential Selection', count: essentialJourneys.length },
    { key: 'first-time', label: '02 / First-Time Classics', count: firstTime.length },
    { key: 'nature', label: '03 / Karsts & Alpine Lakes', count: nature.length },
    { key: 'frontier', label: '04 / Silk Road & High Plateau', count: adventure.length },
  ];

  const displayed =
    activeTab === 'essential'
      ? essentialJourneys
      : activeTab === 'first-time'
        ? firstTime
        : activeTab === 'nature'
          ? nature
          : adventure;

  return (
    <section
      style={{
        padding: 'var(--section-gap-md) 0',
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
      }}
    >
      <div className="container" style={{ maxWidth: 'var(--content-width-wide)' }}>
        {/* Editorial Header + Filter Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '24px',
            paddingBottom: '28px',
            marginBottom: '40px',
            borderBottom: '1px solid var(--border-color)',
          }}
        >
          <div>
            <div className="kicker">Curated Route Atlas · 2026</div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(28px, 3.8vw, 42px)',
                fontWeight: 400,
                marginBottom: '8px',
              }}
            >
              Tailor-Made Private Itineraries
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-quote)',
                color: 'var(--text-secondary)',
                fontSize: '18px',
                margin: 0,
              }}
            >
              Every route is a flexible blueprint — private drivers, high-speed rail, and handpicked
              local guides adjusted to your pace.
            </p>
          </div>

          <Link href="/destinations" className="text-link">
            View All 14 Regions &rarr;
          </Link>
        </div>

        {/* Interactive Monospace Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '36px',
          }}
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  padding: '10px 16px',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  border: isActive
                    ? '1px solid var(--text-primary)'
                    : '1px solid var(--border-color)',
                  backgroundColor: isActive ? 'var(--text-primary)' : 'var(--bg-color)',
                  color: isActive ? 'var(--bg-color)' : 'var(--text-secondary)',
                  transition: 'all 0.15s ease',
                }}
              >
                {tab.label} <span style={{ opacity: 0.65 }}>({tab.count})</span>
              </button>
            );
          })}
        </div>

        {/* Route Cards Grid — 2 columns when 4 items, 3 columns when 3 or 6 items */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              displayed.length === 4
                ? 'repeat(auto-fit, minmax(420px, 1fr))'
                : 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px 28px',
          }}
        >
          {displayed.map((j, idx) => (
            <Link
              key={j.href}
              href={j.href}
              className="editorial-card"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  border: '1px solid var(--border-color)',
                  overflow: 'hidden',
                  marginBottom: '16px',
                  backgroundColor: 'var(--bg-surface-muted)',
                }}
              >
                <img
                  src={j.image}
                  alt={j.imageAlt}
                  width={800}
                  height={533}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '3/2',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>

              {/* Monospace Meta Line */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  paddingBottom: '8px',
                  marginBottom: '10px',
                  borderBottom: '1px solid var(--border-color)',
                }}
              >
                <span style={{ color: 'var(--text-muted)' }}>ROUTE 0{idx + 1}</span>
                <span style={{ color: 'var(--accent-color)', fontWeight: 600 }}>{j.days}</span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '22px',
                  fontWeight: 500,
                  marginBottom: '8px',
                  lineHeight: 1.22,
                }}
              >
                {j.title}
              </h3>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  marginBottom: '14px',
                  flexGrow: 1,
                }}
              >
                {j.subtitle}
              </p>

              <span className="text-link" style={{ fontSize: '11px' }}>
                Inspect Route Blueprint &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
