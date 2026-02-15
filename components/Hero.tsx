"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 md:px-10">
      <div className="max-w-6xl mx-auto w-full">

        <h1
          className="font-display text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.85] tracking-tighter mb-16 animate-in fade-in slide-in-from-bottom-6 duration-1000"
          style={{ animationDelay: '300ms', animationFillMode: 'both' }}
        >
          We build digital<br />products that work.
        </h1>

        <div
          className="animate-in fade-in duration-1000"
          style={{ animationDelay: '800ms', animationFillMode: 'both' }}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Start a project
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

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
