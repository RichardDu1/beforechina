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
        gap: '24px',
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
          borderTop: '2px solid var(--text-primary)',
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
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 600,
              color: 'var(--primary-color)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            STEP 01 / SELECT YOUR HOME HEALTHCARE MARKET
          </div>
          <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '4px' }}>
            All figures reflect 2026 private out-of-pocket benchmarks vs China Tier-3 Hospital
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
                padding: '9px 14px',
                fontSize: '12px',
                backgroundColor: country === code ? 'var(--text-primary)' : 'var(--bg-color)',
                color: country === code ? 'var(--bg-color)' : 'var(--text-primary)',
                border:
                  country === code
                    ? '1px solid var(--text-primary)'
                    : '1px solid var(--border-color)',
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
        style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', alignItems: 'start' }}
      >
        {/* Left: Checklist of Procedures */}
        <div className="article-card" style={{ padding: '26px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-muted)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '4px',
            }}
          >
            STEP 02 / CONFIGURE TREATMENT SCHEDULE
          </div>
          <h3 style={{ fontSize: '21px', marginBottom: '6px' }}>Select Procedures or Screenings</h3>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
            Tick the items you are considering during your visit to Shanghai, Shenzhen, or Beijing.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {MEDICAL_PROCEDURES.map((proc: MedicalProcedure) => {
              const checked = selectedIds.includes(proc.id);
              return (
                <div
                  key={proc.id}
                  onClick={() => toggleProcedure(proc.id)}
                  style={{
                    cursor: 'pointer',
                    padding: '15px 16px',
                    borderRadius: 'var(--radius-sm)',
                    border: checked
                      ? '1.5px solid var(--text-primary)'
                      : '1px solid var(--border-color)',
                    backgroundColor: checked ? 'var(--bg-color)' : 'var(--bg-surface)',
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
                          width: '16px',
                          height: '16px',
                          accentColor: 'var(--primary-color)',
                          cursor: 'pointer',
                        }}
                      />
                      <div>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '10px',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            color: 'var(--primary-color)',
                            display: 'block',
                            marginBottom: '3px',
                          }}
                        >
                          {proc.category} &middot; {proc.durationInChina}
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

                    <div
                      style={{
                        textAlign: 'right',
                        minWidth: '120px',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '11px',
                          color: 'var(--text-muted)',
                          textDecoration: 'line-through',
                        }}
                      >
                        {country}: {fmtLocal(proc.homePriceUsd[country])}
                      </div>
                      <div
                        style={{ fontSize: '15px', fontWeight: 600, color: 'var(--accent-color)' }}
                      >
                        China: {fmtLocal(proc.chinaPriceUsd)}
                      </div>
                      <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>
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
            borderTop: '3px solid var(--primary-color)',
            position: 'sticky',
            top: '92px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--primary-color)',
              marginBottom: '6px',
            }}
          >
            [ 2026 TARIFF LEDGER ]
          </div>
          <h3 style={{ fontSize: '22px', marginBottom: '20px' }}>Your Estimated Cost Delta</h3>

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
              Private Cash Quote in {country} ({selectedProcedures.length})
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '15px',
                fontWeight: 500,
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
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '17px',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
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
              border: '1px solid var(--border-color)',
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
              Include return flight (~{fmtLocal(currencyInfo.flightEstimateUsd)})
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 600 }}>
              {includeFlights ? `+${fmtLocal(currencyInfo.flightEstimateUsd)}` : 'EXCLUDED'}
            </span>
          </label>

          {/* Savings Highlight Box */}
          <div
            style={{
              backgroundColor: 'var(--accent-bg)',
              border: '1px solid var(--accent-border)',
              borderRadius: 'var(--radius-sm)',
              padding: '18px 16px',
              textAlign: 'center',
              marginBottom: '16px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--accent-color)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              ESTIMATED NET SAVINGS ({savingsPercent}% LOWER TARIFF)
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '34px',
                fontWeight: 600,
                color: 'var(--accent-color)',
                letterSpacing: '-0.02em',
                margin: '6px 0',
              }}
            >
              {netSavingsUsd > 0 ? fmtLocal(netSavingsUsd) : fmtLocal(0)}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
              {includeFlights
                ? 'Net savings after deducting round-trip international airfare'
                : 'Sufficient to fund international flights + a 10-day China itinerary'}
            </div>
          </div>

          {hasMultiTripItem && (
            <div
              style={{
                backgroundColor: 'var(--callout-bg-primary)',
                border: '1px solid var(--callout-border-primary)',
                padding: '12px 14px',
                fontSize: '12px',
                color: 'var(--text-primary)',
                marginBottom: '16px',
                lineHeight: 1.5,
              }}
            >
              <strong
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--primary-color)',
                  display: 'block',
                  marginBottom: '2px',
                }}
              >
                [ TWO-TRIP CLINICAL PROTOCOL ]
              </strong>
              Dental implants typically require 2 visits spaced 3–6 months apart (fixture placement
              &rarr; osseointegration &rarr; crown). Always request an international{' '}
              <em>Implant Passport</em> (Straumann/Nobel serial numbers).
            </div>
          )}

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link
              href="/visa"
              className="btn btn-primary"
              style={{ width: '100%', textAlign: 'center', padding: '12px 16px' }}
            >
              Check 30-Day / 240-Hour Visa-Free Rules &rarr;
            </Link>
            <a
              {...affiliateProps('medicalcomplications', 'health-calculator-insurance-cta')}
              className="btn btn-outline"
              style={{ width: '100%', textAlign: 'center', padding: '11px 16px' }}
            >
              Compare Medical Complication Insurance ↗
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
            <strong>Editorial &amp; ASA Compliance Notice:</strong> Informational price comparison
            only — not medical advice. Standard holiday insurance excludes planned treatments
            abroad.
          </p>
        </div>
      </div>
    </div>
  );
}
