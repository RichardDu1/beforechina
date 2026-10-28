'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

interface HeroSlide {
  image: string;
  imageAlt: string;
  kicker?: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  interval?: number;
}

export default function HeroCarousel({ slides, interval = 7000 }: HeroCarouselProps) {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, interval);
    return () => clearInterval(timer);
  }, [interval, next]);

  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#141413',
        borderBottom: '1px solid var(--border-color)',
      }}
    >
      {/* Visual Cover Stage */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(480px, 76vh, 720px)',
          overflow: 'hidden',
          backgroundColor: '#141413',
        }}
      >
        {slides.map((slide, i) => (
          <div key={i} className={`carousel-slide${i === active ? ' active' : ''}`}>
            <img
              src={slide.image}
              alt={slide.imageAlt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                filter: 'contrast(1.03) brightness(0.9)',
              }}
            />
            {/* Editorial asymmetric vignette */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(180deg, rgba(20,20,19,0.2) 0%, rgba(20,20,19,0.45) 48%, rgba(20,20,19,0.88) 100%)',
              }}
            />

            <div
              className="container"
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                paddingBottom: '44px',
              }}
            >
              <div style={{ maxWidth: '720px' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    color: '#e6c27a',
                    marginBottom: '12px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span>
                    DISPATCH 0{i + 1} / 0{slides.length}
                  </span>
                  <span style={{ opacity: 0.5 }}>·</span>
                  <span>{slide.kicker || 'BESPOKE ROUTES & INBOUND FIELD INTELLIGENCE'}</span>
                </div>

                <h1
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(32px, 5vw, 60px)',
                    fontWeight: 400,
                    lineHeight: 1.06,
                    letterSpacing: '-0.025em',
                    marginBottom: '16px',
                    color: '#f6f4ef',
                  }}
                >
                  {slide.title}
                </h1>

                <p
                  style={{
                    fontFamily: 'var(--font-quote)',
                    fontSize: 'clamp(16px, 2.2vw, 22px)',
                    lineHeight: 1.5,
                    marginBottom: '24px',
                    color: 'rgba(246, 244, 239, 0.88)',
                    maxWidth: '600px',
                  }}
                >
                  {slide.subtitle}
                </p>

                <div
                  style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px' }}
                >
                  <Link
                    href={slide.ctaHref}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: '#141413',
                      backgroundColor: '#f6f4ef',
                      padding: '12px 22px',
                      borderRadius: '2px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                    }}
                  >
                    {slide.ctaText} &rarr;
                  </Link>

                  {/* Numbered Monospace Slide Switcher */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActive(idx)}
                        aria-label={`Slide ${idx + 1}`}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          padding: '6px 9px',
                          border:
                            idx === active
                              ? '1px solid #f6f4ef'
                              : '1px solid rgba(246,244,239,0.25)',
                          background: idx === active ? 'rgba(246,244,239,0.16)' : 'transparent',
                          color: idx === active ? '#f6f4ef' : 'rgba(246,244,239,0.6)',
                          cursor: 'pointer',
                          borderRadius: '2px',
                        }}
                      >
                        0{idx + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Docked Editorial Quick-Access Bar Below Stage */}
      <div
        style={{
          backgroundColor: '#141413',
          borderTop: '1px solid rgba(246, 244, 239, 0.16)',
        }}
      >
        <div className="container hero-dispatch-grid">
          <Link href="/visa" className="hero-dispatch-item">
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: '#e6c27a',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                01 / ENTRY POLICY
              </div>
              <div style={{ fontSize: '14px', fontWeight: 500, marginTop: '2px' }}>
                30-Day &amp; 240-Hour Visa-Free Checker
              </div>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', opacity: 0.7 }}>
              &rarr;
            </span>
          </Link>

          <Link href="/health" className="hero-dispatch-item">
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: '#e6c27a',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                02 / 2026 HOSPITAL &amp; DENTAL AUDIT
              </div>
              <div style={{ fontSize: '14px', fontWeight: 500, marginTop: '2px' }}>
                China vs US/UK Healthcare Cost Calculator
              </div>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', opacity: 0.7 }}>
              &rarr;
            </span>
          </Link>

          <Link href="/destinations" className="hero-dispatch-item">
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: '#e6c27a',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                03 / PRIVATE ITINERARIES
              </div>
              <div style={{ fontSize: '14px', fontWeight: 500, marginTop: '2px' }}>
                14 Regions &amp; Tailor-Made Route Atlas
              </div>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', opacity: 0.7 }}>
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
