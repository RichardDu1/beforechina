import React from 'react';

export interface FactItem {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface FactSheetProps {
  title: string;
  badge?: string;
  lastUpdated?: string;
  facts: FactItem[];
  bottomLine?: string;
  warning?: string;
}

export default function FactSheet({
  title,
  badge = '2026 Verified Data',
  lastUpdated = 'October 2026',
  facts,
  bottomLine,
  warning,
}: FactSheetProps) {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-color)',
        borderTop: '2px solid var(--text-primary)',
        borderRadius: 'var(--radius-sm)',
        padding: '28px 30px',
        margin: '28px auto 44px',
        maxWidth: '860px',
      }}
    >
      {/* Header with Dossier Tag and Monospace Timestamp */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          gap: '12px',
          marginBottom: '22px',
          paddingBottom: '16px',
          borderBottom: '1px solid var(--border-color)',
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--primary-color)',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '6px',
            }}
          >
            [ DOSSIER &middot; {badge} ]
          </div>
          <h2
            style={{
              fontSize: '22px',
              fontWeight: 500,
              margin: 0,
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.015em',
            }}
          >
            {title}
          </h2>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: 'var(--text-muted)',
          }}
        >
          AUDIT DATE: {lastUpdated}
        </span>
      </div>

      {/* 1px Hairline Fact Grid */}
      <dl
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1px',
          backgroundColor: 'var(--border-color)',
          border: '1px solid var(--border-color)',
          margin: '0 0 22px 0',
          padding: 0,
        }}
      >
        {facts.map((fact, index) => (
          <div
            key={index}
            style={{
              backgroundColor: fact.highlight ? 'var(--bg-color)' : 'var(--bg-surface)',
              padding: '16px 18px',
            }}
          >
            <dt
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 500,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '6px',
              }}
            >
              0{index + 1} / {fact.label}
            </dt>
            <dd
              style={{
                fontSize: '15px',
                fontWeight: 600,
                color: fact.highlight ? 'var(--primary-color)' : 'var(--text-primary)',
                margin: 0,
                lineHeight: 1.45,
              }}
            >
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>

      {/* BLUF (Bottom Line Up Front) */}
      {bottomLine && (
        <div
          style={{
            backgroundColor: 'var(--accent-bg)',
            border: '1px solid var(--accent-border)',
            borderRadius: 'var(--radius-sm)',
            padding: '14px 18px',
            fontSize: '14px',
            lineHeight: 1.6,
            color: 'var(--text-primary)',
            marginBottom: warning ? '12px' : 0,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--accent-color)',
              display: 'block',
              marginBottom: '4px',
            }}
          >
            [ KEY BRIEFING TAKEAWAY · BLUF ]
          </span>
          {bottomLine}
        </div>
      )}

      {/* Critical Rule / Caution */}
      {warning && (
        <div
          style={{
            backgroundColor: 'var(--callout-bg-primary)',
            border: '1px solid var(--callout-border-primary)',
            borderRadius: 'var(--radius-sm)',
            padding: '14px 18px',
            fontSize: '14px',
            lineHeight: 1.6,
            color: 'var(--text-primary)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--primary-color)',
              display: 'block',
              marginBottom: '4px',
            }}
          >
            [ REGULATORY &amp; CLINICAL CAUTION ]
          </span>
          {warning}
        </div>
      )}
    </div>
  );
}
