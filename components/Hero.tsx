"use client";

import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-dvh flex flex-col px-6 md:px-10">

      {/* Headline — top-anchored on mobile, centered on desktop */}
      <div className="flex-1 flex flex-col justify-start pt-24 md:justify-center md:pt-0 md:items-center max-w-7xl mx-auto w-full">
        <h1
          className="font-display text-[clamp(2.5rem,14vw,10rem)] font-bold leading-[0.88] tracking-tighter text-left md:text-center animate-in fade-in slide-in-from-bottom-6 duration-1000"
          style={{ animationDelay: '300ms', animationFillMode: 'both' }}
        >
          We build digital <br className="hidden md:block" />products that work.
        </h1>
      </div>

      {/* Bottom strip — always anchored to bottom */}
      <div
        className="pb-8 flex justify-end md:justify-between items-center animate-in fade-in duration-1000"
        style={{ animationDelay: '1200ms', animationFillMode: 'both' }}
      >
        <span className="text-[10px] text-neutral-600 uppercase tracking-[0.2em] hidden md:block">
          AM Digital Agency
        </span>
        <span className="text-[10px] text-neutral-600 uppercase tracking-[0.2em] hidden md:block">
          London, UK — Est. 2023
        </span>
        <span className="text-[10px] text-neutral-600 uppercase tracking-[0.2em] hidden md:block">
          Strategy / Design / Development
        </span>

        {/* Scroll indicator — mobile only, bottom-right */}
        <div className="w-px h-6 bg-neutral-600 animate-nudge-down md:hidden" />
      </div>

    </section>
  );
};
