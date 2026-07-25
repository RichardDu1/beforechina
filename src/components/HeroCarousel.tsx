'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

interface HeroSlide {
  image: string;
  imageAlt: string;
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
  const [progress, setProgress] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const tick = 50;
    const step = 100 / (interval / tick);
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          next();
          return 0;
        }
        return prev + step;
      });
    }, tick);
    return () => clearInterval(timer);
  }, [interval, next]);

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - 72px)',
        minHeight: '500px',
        overflow: 'hidden',
        backgroundColor: '#1a1a1a',
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
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(transparent 40%, rgba(0,0,0,0.55))',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '12%',
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
              color: '#fff',
              maxWidth: '700px',
              padding: '0 24px',
            }}
          >
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: 500,
                lineHeight: 1.1,
                marginBottom: '16px',
                color: '#fff',
              }}
            >
              {slide.title}
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-quote)',
                fontSize: 'clamp(16px, 2.5vw, 22px)',
                lineHeight: 1.5,
                marginBottom: '28px',
                opacity: 0.9,
              }}
            >
              {slide.subtitle}
            </p>
            <Link
              href={slide.ctaHref}
              className="text-link"
              style={{
                color: '#fff',
                fontSize: '17px',
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              {slide.ctaText} &rarr;
            </Link>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '10px',
          zIndex: 10,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setActive(i);
              setProgress(0);
            }}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === active ? '28px' : '8px',
              height: '8px',
              borderRadius: '4px',
              border: 'none',
              background: i === active ? '#fff' : 'rgba(255,255,255,0.4)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </section>
  );
}
