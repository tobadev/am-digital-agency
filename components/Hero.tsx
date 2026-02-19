"use client";

import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-dvh flex flex-col justify-center items-start md:items-center text-left md:text-center px-6 md:px-10">
      <div className="max-w-7xl mx-auto w-full">

        <h1
          className="font-display text-[clamp(2.5rem,20vw,10rem)] font-bold leading-[0.88] tracking-tighter animate-in fade-in slide-in-from-bottom-6 duration-1000"
          style={{ animationDelay: '300ms', animationFillMode: 'both' }}
        >
          We build digital <br className="hidden md:block" />products that work.
        </h1>

      </div>

      {/* Bottom info strip */}
      <div
        className="absolute bottom-8 left-6 right-6 md:left-10 md:right-10 flex justify-center md:justify-between items-center animate-in fade-in duration-1000"
        style={{ animationDelay: '1200ms', animationFillMode: 'both' }}
      >
        <span className="text-[10px] text-neutral-600 uppercase tracking-[0.2em] hidden md:block">
          AM Digital Agency
        </span>

        {/* Scroll indicator — all sizes, centered on mobile */}
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[9px] text-neutral-700 uppercase tracking-[0.25em]">Scroll</span>
          <div className="w-px h-5 bg-neutral-700 animate-nudge-down" />
        </div>

        <span className="text-[10px] text-neutral-600 uppercase tracking-[0.2em] hidden md:block">
          London, UK — Est. 2023
        </span>
        <span className="text-[10px] text-neutral-600 uppercase tracking-[0.2em] hidden md:block">
          Strategy / Design / Development
        </span>
      </div>
    </section>
  );
};
