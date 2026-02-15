"use client";

import React, { useRef, useEffect, useState } from 'react';

const HEADLINE = "An independent London digital agency";
const REVEAL_WORDS = "helping ambitious companies define strategy, shape brands, and build products people actually use.".split(' ');

export const BrandStatement: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // Reveal starts when section is 70% down viewport, ends at 20%
      const start = vh * 0.7;
      const end = vh * 0.2;
      const raw = (start - rect.top) / (start - end);
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-brand-black px-6 md:px-10 py-40 md:py-56">
      <div className="max-w-5xl mx-auto">
        <p className="md:max-w-[75%] font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight">
          <span className="text-white">{HEADLINE}</span>{' '}
          {REVEAL_WORDS.map((word, idx) => {
            const threshold = idx / REVEAL_WORDS.length;
            const revealed = progress > threshold;
            return (
              <span
                key={idx}
                className="transition-colors duration-500"
                style={{ color: revealed ? '#ffffff' : '#404040' }}
              >
                {word}{idx < REVEAL_WORDS.length - 1 ? ' ' : ''}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
};
