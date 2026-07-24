'use client';

import { useMemo, useState } from 'react';
import {
  dailyCosts,
  oneOffCosts,
  styleDescriptions,
  styleLabels,
  TravelStyle,
  USD_TO_CNY,
} from '../data/budgetData';
import { trackEvent } from '@/lib/analytics';

const STYLES: TravelStyle[] = ['backpacker', 'midrange', 'comfort'];

interface LineItem {
  label: string;
  amount: number;
  note?: string;
}

export default function BudgetCalculator() {
  const [days, setDays] = useState(10);
  const [people, setPeople] = useState(2);
  const [style, setStyle] = useState<TravelStyle>('midrange');

  const { dailyItems, oneOffItems, grandTotal, grandTotalCny } = useMemo(() => {
    const d = dailyCosts[style];
    const dailyItems: LineItem[] = [
      { label: 'Accommodation', amount: d.accommodation * days * people },
      { label: 'Food & drink', amount: d.food * days * people },
      { label: 'Local transport', amount: d.transport * days * people },
      { label: 'Sightseeing & activities', amount: d.activities * days * people },
      { label: 'Misc (SIM, water, etc.)', amount: d.misc * days * people },
    ];

    const oneOffItems: LineItem[] = oneOffCosts.map((c) => ({
      label: c.label,
      amount: c[style] * people,
      note: c.note,
    }));

    const grandTotal =
      dailyItems.reduce((s, i) => s + i.amount, 0) + oneOffItems.reduce((s, i) => s + i.amount, 0);
    const grandTotalCny = grandTotal * USD_TO_CNY;

    return { dailyItems, oneOffItems, grandTotal, grandTotalCny };
  }, [days, people, style]);

  const fmt = (n: number) =>
    n.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    });

  const handleStyleChange = (s: TravelStyle) => {
    setStyle(s);
    trackEvent('budget_style_change', { style: s });
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '32px',
        maxWidth: '1000px',
        margin: '0 auto',
      }}
    >
      <style>{`
        @media (min-width: 768px) {
          .budget-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
      <div
        className="budget-grid"
        style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}
      >
        {/* Inputs */}
        <div className="article-card" style={{ borderLeft: '3px solid var(--primary-color)' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '24px' }}>Your Trip</h2>

          {/* Style selector */}
          <label
            style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '8px',
              color: 'var(--text-secondary)',
            }}
          >
            Travel style
          </label>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
            {STYLES.map((s) => (
              <button
                key={s}
                onClick={() => handleStyleChange(s)}
                className="btn"
                style={{
                  flex: 1,
                  minWidth: '110px',
                  padding: '10px 12px',
                  fontSize: '14px',
                  backgroundColor: style === s ? 'var(--primary-color)' : 'transparent',
                  color: style === s ? 'var(--text-on-primary)' : 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                }}
              >
                {styleLabels[s]}
              </button>
            ))}
          </div>
          <p
            style={{
              fontSize: '13px',
              color: 'var(--text-muted)',
              marginBottom: '24px',
              minHeight: '36px',
            }}
          >
            {styleDescriptions[style]}
          </p>

          {/* Days slider */}
          <label
            style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '8px',
              color: 'var(--text-secondary)',
            }}
          >
            Trip length: <strong style={{ color: 'var(--text-primary)' }}>{days} days</strong>
          </label>
          <input
            type="range"
            min={3}
            max={30}
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            style={{
              width: '100%',
              marginBottom: '24px',
              accentColor: 'var(--primary-color)',
            }}
          />

          {/* People slider */}
          <label
            style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '8px',
              color: 'var(--text-secondary)',
            }}
          >
            Travellers: <strong style={{ color: 'var(--text-primary)' }}>{people}</strong>
          </label>
          <input
            type="range"
            min={1}
            max={6}
            value={people}
            onChange={(e) => setPeople(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--primary-color)' }}
          />
        </div>

        {/* Result summary */}
        <div
          className="article-card"
          style={{
            borderLeft: '3px solid var(--accent-color)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
            Estimated total for {people} {people === 1 ? 'traveller' : 'travellers'}, {days} days
          </div>
          <div
            style={{
              fontSize: '48px',
              fontWeight: 800,
              color: 'var(--accent-color)',
              marginBottom: '8px',
              letterSpacing: '-1px',
            }}
          >
            {fmt(grandTotal)}
          </div>
          <div
            style={{
              fontSize: '16px',
              color: 'var(--text-muted)',
              marginBottom: '16px',
            }}
          >
            ≈ ¥{Math.round(grandTotalCny).toLocaleString('en-US')} CNY
          </div>
          <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
            That&apos;s roughly <strong>{fmt(grandTotal / (people * days))}</strong> per person per
            day, including flights and one-off costs.
          </div>
        </div>
      </div>

      {/* Breakdown */}
      <div className="article-card">
        <h2 style={{ fontSize: '24px', marginBottom: '24px' }}>Where Your Money Goes</h2>

        <h3
          style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            marginBottom: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          Daily costs ({days} days × {people} {people === 1 ? 'person' : 'people'})
        </h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            marginBottom: '24px',
          }}
        >
          {dailyItems.map((item) => (
            <Row key={item.label} label={item.label} amount={item.amount} total={grandTotal} />
          ))}
        </div>

        <h3
          style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            marginBottom: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          One-off costs
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {oneOffItems.map((item) => (
            <Row
              key={item.label}
              label={item.label}
              amount={item.amount}
              total={grandTotal}
              note={item.note}
            />
          ))}
        </div>

        <div
          style={{
            marginTop: '24px',
            paddingTop: '24px',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '18px', fontWeight: 700 }}>Total</span>
          <span style={{ fontSize: '24px', fontWeight: 800, color: 'var(--accent-color)' }}>
            {fmt(grandTotal)}
          </span>
        </div>
      </div>

      <p
        style={{
          fontSize: '13px',
          color: 'var(--text-muted)',
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto',
        }}
      >
        Estimates use 2025-2026 average Tier-1/Tier-2 city pricing at ~¥7.2/USD. Actual costs vary
        by city (Shanghai and Beijing run higher than Chengdu or Xi&apos;an) and season. China is
        cashless — set up Alipay and WeChat Pay before you arrive.
      </p>
    </div>
  );
}

function Row({
  label,
  amount,
  total,
  note,
}: {
  label: string;
  amount: number;
  total: number;
  note?: string;
}) {
  const pct = total > 0 ? Math.round((amount / total) * 100) : 0;
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: '4px',
        }}
      >
        <span style={{ fontSize: '15px' }}>{label}</span>
        <span style={{ fontSize: '15px', fontWeight: 600 }}>
          {amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
          })}
          <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: '8px' }}>
            {pct}%
          </span>
        </span>
      </div>
      <div
        style={{
          height: '6px',
          backgroundColor: 'var(--bg-color)',
          borderRadius: '9999px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${pct}%`,
            backgroundColor: 'var(--primary-color)',
            borderRadius: '9999px',
          }}
        />
      </div>
      {note && (
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>{note}</p>
      )}
    </div>
  );
}
