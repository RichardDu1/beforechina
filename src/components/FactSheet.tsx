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
      className="bento-card"
      style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        padding: '28px',
        margin: '24px auto 40px',
        maxWidth: '840px',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {/* Header with Title and Badges */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '20px',
          paddingBottom: '16px',
          borderBottom: '1px solid var(--border-color)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '3px 10px',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'rgba(230, 57, 70, 0.1)',
              color: 'var(--primary-color)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            {badge}
          </span>
          <h2
            style={{
              fontSize: '20px',
              fontWeight: 700,
              margin: 0,
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </h2>
        </div>
        <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Updated: {lastUpdated}</span>
      </div>

      {/* Structured Key-Value Triplets / Fact Grid (Optimised for AI Citability) */}
      <dl
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          margin: '0 0 20px 0',
          padding: 0,
        }}
      >
        {facts.map((fact, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'var(--bg-color)',
              borderRadius: 'var(--radius-md)',
              padding: '14px 16px',
              border: fact.highlight
                ? '1px solid rgba(230, 57, 70, 0.3)'
                : '1px solid var(--border-color)',
            }}
          >
            <dt
              style={{
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: '4px',
              }}
            >
              {fact.label}
            </dt>
            <dd
              style={{
                fontSize: '15px',
                fontWeight: 600,
                color: fact.highlight ? 'var(--primary-color)' : 'var(--text-primary)',
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>

      {/* BLUF (Bottom Line Up Front) / Golden Takeaway */}
      {bottomLine && (
        <div
          style={{
            backgroundColor: 'rgba(7, 193, 96, 0.08)',
            borderLeft: '4px solid #07C160',
            borderRadius: 'var(--radius-sm)',
            padding: '12px 16px',
            fontSize: '14px',
            lineHeight: 1.5,
            color: 'var(--text-primary)',
            marginBottom: warning ? '12px' : 0,
          }}
        >
          <strong style={{ color: '#07C160', display: 'block', marginBottom: '2px' }}>
            ⚡ Bottom Line Up Front (BLUF):
          </strong>
          {bottomLine}
        </div>
      )}

      {/* Critical Rule / Caution */}
      {warning && (
        <div
          style={{
            backgroundColor: 'rgba(230, 57, 70, 0.08)',
            borderLeft: '4px solid var(--primary-color)',
            borderRadius: 'var(--radius-sm)',
            padding: '12px 16px',
            fontSize: '14px',
            lineHeight: 1.5,
            color: 'var(--text-primary)',
          }}
        >
          <strong style={{ color: 'var(--primary-color)', display: 'block', marginBottom: '2px' }}>
            ⚠️ Critical Limitation:
          </strong>
          {warning}
        </div>
      )}
    </div>
  );
}
