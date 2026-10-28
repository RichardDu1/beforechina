import React from 'react';
import Link from 'next/link';

export interface MedicalTrustBarProps {
  lastVerified?: string;
  fieldLocation?: string;
}

export default function MedicalTrustBar({
  lastVerified = 'October 2026',
  fieldLocation = 'Shanghai & Shenzhen Tier-3 International Departments',
}: MedicalTrustBarProps) {
  return (
    <div
      style={{
        maxWidth: '860px',
        margin: '20px auto 32px',
        padding: '14px 20px',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-sm)',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '12px',
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        letterSpacing: '0.03em',
        color: 'var(--text-secondary)',
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px' }}>
        <span style={{ color: 'var(--accent-color)', fontWeight: 600 }}>
          [ ✓ INDEPENDENT RESEARCH: ZERO HOSPITAL KICKBACKS ]
        </span>
        <span style={{ opacity: 0.4 }}>|</span>
        <span>
          <strong>SCOPE:</strong> {fieldLocation}
        </span>
        <span style={{ opacity: 0.4 }}>|</span>
        <span>
          <strong>VERIFIED:</strong> {lastVerified}
        </span>
      </div>
      <Link
        href="#medical-disclaimer"
        style={{
          fontSize: '11px',
          color: 'var(--primary-color)',
          textDecoration: 'underline',
          fontWeight: 600,
        }}
      >
        CLINICAL DISCLAIMER &darr;
      </Link>
    </div>
  );
}

export function MedicalDisclaimerFooter() {
  return (
    <div
      id="medical-disclaimer"
      className="article-card"
      style={{
        maxWidth: '860px',
        margin: '48px auto 0',
        padding: '24px 28px',
        backgroundColor: 'var(--bg-surface)',
        borderTop: '2px solid var(--text-primary)',
        fontSize: '13px',
        color: 'var(--text-secondary)',
        lineHeight: 1.6,
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'var(--text-muted)',
          marginBottom: '8px',
        }}
      >
        [ STATUTORY DISCLOSURE &middot; UK ASA / CAP &amp; GOOGLE HEALTHCARE COMPLIANCE ]
      </div>
      <p style={{ marginBottom: '8px' }}>
        <strong>1. Informational Purposes Only (Not Medical Advice):</strong> All content, fee
        schedules, and calculators published under <code>beforechina.com/health</code> are compiled
        by our bilingual research team for informational and cost-benchmarking purposes only.
        Nothing on this website constitutes clinical advice, diagnosis, or treatment
        recommendations. Always consult a qualified physician or dentist in your home country before
        planning cross-border healthcare.
      </p>
      <p style={{ marginBottom: '8px' }}>
        <strong>2. No Public Hospital Commissions:</strong> Under Chinese healthcare regulations,
        Grade III-A (三甲) public hospitals and their International Medical Departments (IMDs) are
        strictly prohibited from paying referral kickbacks. Our public hospital price benchmarks are
        cited directly from published municipal tariff schedules and on-site receipt audits.
      </p>
      <p style={{ marginBottom: '0' }}>
        <strong>3. Clinical Risk &amp; Continuity of Care:</strong> All surgical and dental
        procedures carry inherent medical risks. Multi-stage restorative treatments (such as dental
        implants) require strict follow-up timelines and osseointegration recovery windows. Standard
        travel insurance policies exclude elective medical treatments abroad; always secure
        specialist medical complication coverage prior to travel.
      </p>
    </div>
  );
}
