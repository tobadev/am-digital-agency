"use client";

import React, { useRef, useEffect } from 'react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const fitText = () => {
      const h1 = h1Ref.current;
      const container = containerRef.current;
      if (!h1 || !container) return;

      if (window.innerWidth >= 768) {
        h1.style.fontSize = '';
        return;
      }

      // Set a base size, measure each line, scale to widest one filling container
      h1.style.fontSize = '100px';
      const spans = Array.from(h1.querySelectorAll<HTMLElement>('.fit-line'));
      const maxScrollWidth = Math.max(...spans.map(s => s.scrollWidth));
      const ratio = container.clientWidth / maxScrollWidth;
      h1.style.fontSize = `${100 * ratio}px`;
    };

    fitText();
    window.addEventListener('resize', fitText);
    return () => window.removeEventListener('resize', fitText);
  }, []);

  return (
    <section className="relative h-dvh flex flex-col justify-center items-start md:items-center text-left md:text-center px-6 md:px-10">
      <div ref={containerRef} className="max-w-7xl mx-auto w-full">

        <h1
          ref={h1Ref}
          className="font-display md:text-[clamp(2.5rem,10vw,10rem)] font-bold leading-[0.88] tracking-tighter animate-in fade-in slide-in-from-bottom-6 duration-1000"
          style={{ animationDelay: '300ms', animationFillMode: 'both' }}
        >
          <span className="fit-line block md:inline whitespace-nowrap">We build digital</span>
          <br className="hidden md:block" />
          <span className="fit-line block md:inline whitespace-nowrap">products that work.</span>
        </h1>

      </div>

      {/* Bottom info strip */}
      <div
        className="absolute bottom-8 left-6 right-6 md:left-10 md:right-10 flex justify-between items-center animate-in fade-in duration-1000"
        style={{ animationDelay: '1200ms', animationFillMode: 'both' }}
      >
        <span className="text-[10px] text-neutral-600 uppercase tracking-[0.2em]">
          AM Digital Agency
        </span>
        <span className="text-[10px] text-neutral-600 uppercase tracking-[0.2em]">
          London, UK — Est. 2023
        </span>
        <span className="text-[10px] text-neutral-600 uppercase tracking-[0.2em] hidden md:block">
          Strategy / Design / Development
        </span>
      </div>
    </section>
  );
};
