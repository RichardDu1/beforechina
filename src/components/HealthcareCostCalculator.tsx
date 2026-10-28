'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { COUNTRIES, HomeCountry, MEDICAL_PROCEDURES, MedicalProcedure } from '@/data/healthData';
import { affiliateProps } from '@/lib/affiliates';
import { trackEvent } from '@/lib/analytics';

export default function HealthcareCostCalculator() {
  const [country, setCountry] = useState<HomeCountry>('UK');
  const [selectedIds, setSelectedIds] = useState<string[]>(() =>
    MEDICAL_PROCEDURES.filter((p) => p.defaultSelected).map((p) => p.id),
  );
  const [includeFlights, setIncludeFlights] = useState(false);

  const currencyInfo = COUNTRIES[country];

  const toggleProcedure = (id: string) => {
    setSelectedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      trackEvent('health_calculator_toggle', { procedure_id: id, count: next.length });
      return next;
    });
  };

  const handleCountryChange = (c: HomeCountry) => {
    setCountry(c);
    trackEvent('health_calculator_country', { country: c });
  };

  const {
    selectedProcedures,
    homeTotalUsd,
    chinaMedicalUsd,
    chinaTotalWithFlightUsd,
    netSavingsUsd,
    savingsPercent,
    hasMultiTripItem,
  } = useMemo(() => {
    const selectedProcedures = MEDICAL_PROCEDURES.filter((p) => selectedIds.includes(p.id));
    const homeTotalUsd = selectedProcedures.reduce((sum, p) => sum + p.homePriceUsd[country], 0);
    const chinaMedicalUsd = selectedProcedures.reduce((sum, p) => sum + p.chinaPriceUsd, 0);
    const flightCost = includeFlights ? currencyInfo.flightEstimateUsd : 0;
    const chinaTotalWithFlightUsd = chinaMedicalUsd + flightCost;
    const netSavingsUsd = homeTotalUsd - chinaTotalWithFlightUsd;
    const savingsPercent =
      homeTotalUsd > 0 ? Math.round(((homeTotalUsd - chinaMedicalUsd) / homeTotalUsd) * 100) : 0;
    const hasMultiTripItem = selectedProcedures.some((p) => !p.singleTripViable);

    return {
      selectedProcedures,
      homeTotalUsd,
      chinaMedicalUsd,
      chinaTotalWithFlightUsd,
      netSavingsUsd,
      savingsPercent,
      hasMultiTripItem,
    };
  }, [selectedIds, country, includeFlights, currencyInfo]);

  const fmtLocal = (usd: number) => {
    const converted = Math.round(usd * currencyInfo.rateFromUsd);
    return `${currencyInfo.symbol}${converted.toLocaleString('en-US')}`;
  };

  return (
    <div
      style={{
        maxWidth: '1040px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '28px',
      }}
    >
      <style>{`
        @media (min-width: 860px) {
          .health-calc-grid { grid-template-columns: 1.35fr 0.85fr !important; }
        }
      `}</style>

      {/* Top Country Selector Bar */}
      <div
        className="article-card"
        style={{
          padding: '20px 24px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <div>
          <div
            style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            Step 1: Compare Against Your Home Healthcare Market
          </div>
          <div style={{ fontSize: '15px', color: 'var(--text-secondary)', marginTop: '2px' }}>
            All estimates reflect 2026 private out-of-pocket benchmarks vs China Tier-3 Hospital
            International Departments.
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {(Object.keys(COUNTRIES) as HomeCountry[]).map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => handleCountryChange(code)}
              className="btn"
              style={{
                padding: '8px 14px',
                fontSize: '13px',
                fontWeight: 600,
                backgroundColor: country === code ? 'var(--primary-color)' : 'var(--bg-color)',
                color: country === code ? 'var(--text-on-primary)' : 'var(--text-primary)',
                border: '1px solid var(--border-color)',
              }}
            >
              {COUNTRIES[code].label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Two-Column Grid */}
      <div
        className="health-calc-grid"
        style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '28px', alignItems: 'start' }}
      >
        {/* Left: Checklist of Procedures */}
        <div className="article-card" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '6px' }}>
            Step 2: Select Procedures or Checkups
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
            Tick the items you are considering during your visit to Shanghai, Shenzhen, or Beijing.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {MEDICAL_PROCEDURES.map((proc: MedicalProcedure) => {
              const checked = selectedIds.includes(proc.id);
              return (
                <div
                  key={proc.id}
                  onClick={() => toggleProcedure(proc.id)}
                  style={{
                    cursor: 'pointer',
                    padding: '14px 16px',
                    borderRadius: 'var(--radius-md)',
                    border: checked
                      ? '1.5px solid var(--primary-color)'
                      : '1px solid var(--border-color)',
                    backgroundColor: checked ? 'rgba(230, 57, 70, 0.04)' : 'var(--bg-color)',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '12px',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => {}}
                        style={{
                          marginTop: '4px',
                          width: '17px',
                          height: '17px',
                          accentColor: 'var(--primary-color)',
                          cursor: 'pointer',
                        }}
                      />
                      <div>
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                            color: 'var(--primary-color)',
                            display: 'block',
                            marginBottom: '2px',
                          }}
                        >
                          {proc.category} · ⏱ {proc.durationInChina}
                        </span>
                        <div
                          style={{
                            fontSize: '15px',
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                            lineHeight: 1.35,
                          }}
                        >
                          {proc.name}
                        </div>
                        <div
                          style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}
                        >
                          {proc.sourceNote}
                        </div>
                      </div>
                    </div>

                    <div style={{ textAlign: 'right', minWidth: '115px' }}>
                      <div
                        style={{
                          fontSize: '12px',
                          color: 'var(--text-muted)',
                          textDecoration: 'line-through',
                        }}
                      >
                        {country}: {fmtLocal(proc.homePriceUsd[country])}
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: 700, color: '#07C160' }}>
                        China: {fmtLocal(proc.chinaPriceUsd)}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                        ({proc.chinaPriceRmb})
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Live Comparison Receipt */}
        <div
          className="article-card"
          style={{
            padding: '28px 24px',
            borderTop: '4px solid var(--primary-color)',
            position: 'sticky',
            top: '92px',
          }}
        >
          <div
            style={{
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--text-muted)',
              marginBottom: '6px',
            }}
          >
            2026 Transparent Receipt Comparison
          </div>
          <h3 style={{ fontSize: '22px', marginBottom: '20px' }}>Your Estimated Savings</h3>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingBottom: '12px',
              marginBottom: '12px',
              borderBottom: '1px solid var(--border-color)',
            }}
          >
            <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
              Private Cost in {country} ({selectedProcedures.length} items)
            </span>
            <span
              style={{
                fontSize: '16px',
                fontWeight: 600,
                textDecoration: 'line-through',
                color: 'var(--text-muted)',
              }}
            >
              {fmtLocal(homeTotalUsd)}
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingBottom: '12px',
              marginBottom: '12px',
              borderBottom: '1px solid var(--border-color)',
            }}
          >
            <span style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: 600 }}>
              China Hospital / Clinic Total
            </span>
            <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)' }}>
              {fmtLocal(chinaMedicalUsd)}
            </span>
          </div>

          {/* Optional Flight Toggle */}
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '10px',
              fontSize: '13px',
              color: 'var(--text-secondary)',
              padding: '10px 12px',
              backgroundColor: 'var(--bg-color)',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '16px',
              cursor: 'pointer',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input
                type="checkbox"
                checked={includeFlights}
                onChange={(e) => setIncludeFlights(e.target.checked)}
                style={{ accentColor: 'var(--primary-color)' }}
              />
              Factor in return flight (~{fmtLocal(currencyInfo.flightEstimateUsd)})
            </span>
            <span style={{ fontWeight: 600 }}>
              {includeFlights ? `+${fmtLocal(currencyInfo.flightEstimateUsd)}` : 'Excluded'}
            </span>
          </label>

          {/* Savings Highlight Box */}
          <div
            style={{
              backgroundColor: 'rgba(7, 193, 96, 0.08)',
              border: '1px solid rgba(7, 193, 96, 0.3)',
              borderRadius: 'var(--radius-md)',
              padding: '16px',
              textAlign: 'center',
              marginBottom: '16px',
            }}
          >
            <div
              style={{
                fontSize: '12px',
                fontWeight: 600,
                color: '#07C160',
                textTransform: 'uppercase',
              }}
            >
              Estimated Net Savings ({savingsPercent}% Lower Medical Fees)
            </div>
            <div
              style={{
                fontSize: '36px',
                fontWeight: 800,
                color: '#07C160',
                letterSpacing: '-0.02em',
                margin: '4px 0',
              }}
            >
              {netSavingsUsd > 0 ? fmtLocal(netSavingsUsd) : fmtLocal(0)}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
              {includeFlights
                ? 'Saved even after paying for your round-trip international flight'
                : `Enough to cover flights + a 10-day stay in China`}
            </div>
          </div>

          {hasMultiTripItem && (
            <div
              style={{
                backgroundColor: 'rgba(230, 57, 70, 0.08)',
                borderLeft: '3px solid var(--primary-color)',
                padding: '10px 12px',
                fontSize: '12px',
                color: 'var(--text-primary)',
                marginBottom: '16px',
                lineHeight: 1.45,
              }}
            >
              <strong>⚠️ Clinical Timeline Note:</strong> Dental implants typically require 2 visits
              spaced 3–6 months apart (fixture placement → osseointegration → crown). Always request
              an international <em>Implant Passport</em> (Straumann/Nobel serial numbers).
            </div>
          )}

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link
              href="/visa"
              className="btn btn-primary"
              style={{ width: '100%', textAlign: 'center', padding: '12px 16px', fontSize: '14px' }}
            >
              Check 30-Day / 240-Hour Visa-Free Eligibility →
            </Link>
            <a
              {...affiliateProps('medicalcomplications', 'health-calculator-insurance-cta')}
              className="btn btn-outline"
              style={{ width: '100%', textAlign: 'center', padding: '11px 16px', fontSize: '13px' }}
            >
              Compare Medical Travel Complication Insurance ↗
            </a>
          </div>

          <p
            style={{
              fontSize: '11px',
              color: 'var(--text-muted)',
              marginTop: '14px',
              lineHeight: 1.45,
            }}
          >
            <strong>Editorial & ASA Compliance Notice:</strong> Informational price comparison only
            — not medical advice. Standard holiday insurance excludes planned treatments abroad. All
            invasive procedures carry clinical risk.
          </p>
        </div>
      </div>
    </div>
  );
}
