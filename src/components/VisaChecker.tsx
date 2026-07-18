'use client';

import { useState } from 'react';
import { majorCountries, visaRules, visaResults, VisaResult } from '../data/visaRules';

export default function VisaChecker() {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [result, setResult] = useState<VisaResult | null>(null);

  const handleCheck = () => {
    if (!selectedCountry) return;
    
    // Default to VISA_REQUIRED if not found in our specific lists
    const status = visaRules[selectedCountry] || 'VISA_REQUIRED';
    setResult(visaResults[status]);
  };

  return (
    <div className="bento-card" style={{ maxWidth: '600px', margin: '0 auto', borderTop: '4px solid var(--primary-color)' }}>
      <h2 style={{ fontSize: '28px', marginBottom: '8px' }}>Check Your Visa Status</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Select your passport nationality to see the latest 2026 entry rules.</p>
      
      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexDirection: 'column', sm: { flexDirection: 'row' } } as any}>
        <select 
          value={selectedCountry}
          onChange={(e) => {
            setSelectedCountry(e.target.value);
            setResult(null); // Reset result when changing country
          }}
          style={{ 
            flex: 1, 
            padding: '12px 16px', 
            borderRadius: 'var(--radius-sm)', 
            border: '1px solid var(--border-color)',
            fontSize: '16px',
            fontFamily: 'inherit',
            backgroundColor: 'var(--bg-color)',
            color: 'var(--text-primary)'
          }}
        >
          <option value="" disabled>Select Nationality...</option>
          <optgroup label="Popular">
            {majorCountries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </optgroup>
          <optgroup label="Other">
            <option value="Other">Other Country...</option>
          </optgroup>
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
        <div style={{ 
          padding: '24px', 
          backgroundColor: 'var(--bg-color)', 
          borderRadius: 'var(--radius-md)',
          borderLeft: `4px solid ${result.color}`,
          animation: 'fadeIn 0.3s ease-out'
        }}>
          <h3 style={{ fontSize: '20px', color: result.color, marginBottom: '8px' }}>
            {result.title}
          </h3>
          <p style={{ color: 'var(--text-primary)', marginBottom: '16px', lineHeight: '1.5' }}>
            {result.description}
          </p>
          <button className="btn btn-outline" style={{ fontSize: '14px', padding: '8px 16px' }}>
            {result.actionText} &rarr;
          </button>
        </div>
      )}
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
