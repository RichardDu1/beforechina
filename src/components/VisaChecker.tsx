'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  allCountries,
  majorCountries,
  visaResults,
  visaRules,
  VisaResult,
  VISA_DATA_LAST_VERIFIED,
} from '../data/visaRules';
import { trackEvent } from '@/lib/analytics';

export default function VisaChecker() {
  const [query, setQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [result, setResult] = useState<VisaResult | null>(null);

  // Filter the full country list by the search box. Empty = show all.
  const filteredCountries = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allCountries;
    return allCountries.filter((c) => c.toLowerCase().includes(q));
  }, [query]);

  const handleCheck = () => {
    if (!selectedCountry) return;
    const status = visaRules[selectedCountry] || 'VISA_REQUIRED';
    const res = visaResults[status];
    setResult(res);
    trackEvent('visa_check', {
      country: selectedCountry,
      result_status: status,
    });
  };

  const popularInFilter = majorCountries.filter((c) => filteredCountries.includes(c));
  const otherInFilter = filteredCountries.filter((c) => !majorCountries.includes(c));

  return (
    <div
      className="article-card"
      style={{
        maxWidth: '640px',
        margin: '0 auto',
        borderLeft: '3px solid var(--primary-color)',
      }}
    >
      <h2 style={{ fontSize: '28px', marginBottom: '8px' }}>Check Your Visa Status</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
        Select your passport nationality to see the latest 2026 entry rules.
      </p>

      {/* Search box — type to narrow the list */}
      <input
        type="text"
        placeholder="Search country (e.g. United Kingdom)..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: '100%',
          padding: '12px 16px',
          marginBottom: '12px',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-color)',
          fontSize: '16px',
          fontFamily: 'inherit',
          backgroundColor: 'var(--bg-color)',
          color: 'var(--text-primary)',
        }}
      />

      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <select
          value={selectedCountry}
          onChange={(e) => {
            setSelectedCountry(e.target.value);
            setResult(null);
          }}
          style={{
            flex: 1,
            padding: '12px 16px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-color)',
            fontSize: '16px',
            fontFamily: 'inherit',
            backgroundColor: 'var(--bg-color)',
            color: 'var(--text-primary)',
          }}
        >
          <option value="" disabled>
            {filteredCountries.length === 0
              ? 'No country matches your search'
              : 'Select Nationality...'}
          </option>
          {popularInFilter.length > 0 && (
            <optgroup label="Popular">
              {popularInFilter.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </optgroup>
          )}
          {otherInFilter.length > 0 && (
            <optgroup label="All countries">
              {otherInFilter.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </optgroup>
          )}
        </select>

        <button
          onClick={handleCheck}
          className="btn btn-primary"
          style={{ padding: '12px 24px', minWidth: '120px' }}
          disabled={!selectedCountry}
        >
          Check Now
        </button>
      </div>

      {/* Result Area */}
      {result && (
        <div
          style={{
            padding: '24px',
            backgroundColor: 'var(--bg-color)',
            borderRadius: 'var(--radius-md)',
            borderLeft: `4px solid ${result.color}`,
            animation: 'fadeIn 0.3s ease-out',
          }}
        >
          <h3
            style={{
              fontSize: '20px',
              color: result.color,
              marginBottom: '8px',
            }}
          >
            {result.title}
          </h3>
          <p
            style={{
              color: 'var(--text-primary)',
              marginBottom: '16px',
              lineHeight: '1.5',
            }}
          >
            {result.description}
          </p>

          {result.caveats.length > 0 && (
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              {result.caveats.map((caveat, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '8px',
                    color: 'var(--text-secondary)',
                    fontSize: '14px',
                    lineHeight: '1.5',
                  }}
                >
                  <span style={{ color: result.color }}>•</span>
                  <span>{caveat}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Contextual next-step CTA based on result status */}
          <Link
            href={result.status === 'VISA_REQUIRED' ? '/visa#apply' : '/esim'}
            className="btn btn-outline"
            style={{ fontSize: '14px', padding: '8px 16px' }}
          >
            {result.actionText} &rarr;
          </Link>
        </div>
      )}

      <div
        style={{
          marginTop: '20px',
          fontSize: '12px',
          color: 'var(--text-muted)',
          textAlign: 'center',
        }}
      >
        Policy data last verified {VISA_DATA_LAST_VERIFIED}. Always confirm with your airline and
        the{' '}
        <a
          href="https://www.nia.gov.cn"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--text-secondary)', textDecoration: 'underline' }}
        >
          National Immigration Administration
        </a>
        .
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `,
        }}
      />
    </div>
  );
}
