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
        maxWidth: '840px',
        margin: '16px auto 32px',
        padding: '14px 20px',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '12px',
        fontSize: '13px',
        color: 'var(--text-secondary)',
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <strong style={{ color: '#07C160' }}>✓ Independent Research:</strong> Zero Public Hospital
          Kickbacks
        </span>
        <span>·</span>
        <span>
          <strong>On-Site Pricing Audits:</strong> {fieldLocation}
        </span>
        <span>·</span>
        <span>
          <strong>Last Verified:</strong> {lastVerified}
        </span>
      </div>
      <Link
        href="#medical-disclaimer"
        style={{
          fontSize: '12px',
          color: 'var(--primary-color)',
          textDecoration: 'underline',
          fontWeight: 600,
        }}
      >
        Editorial & Clinical Disclaimer ↓
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
        maxWidth: '840px',
        margin: '48px auto 0',
        padding: '24px',
        backgroundColor: 'var(--bg-surface)',
        borderLeft: '4px solid var(--text-muted)',
        fontSize: '13px',
        color: 'var(--text-secondary)',
        lineHeight: 1.6,
      }}
    >
      <h3
        style={{
          fontSize: '15px',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '8px',
        }}
      >
        Important Clinical, Legal & Regulatory Disclosure (UK ASA / CAP & Google Healthcare
        Compliance)
      </h3>
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
        <strong>3. Clinical Risk & Continuity of Care:</strong> All surgical and dental procedures
        carry inherent medical risks. Multi-stage restorative treatments (such as dental implants)
        require strict follow-up timelines and osseointegration recovery windows. Standard travel
        insurance policies exclude elective medical treatments abroad; always secure specialist
        medical complication coverage prior to travel.
      </p>
    </div>
  );
}
