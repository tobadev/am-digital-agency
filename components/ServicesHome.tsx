import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const ServicesHome: React.FC = () => {
  return (
    <section className="bg-brand-black px-6 md:px-10 py-40 md:py-56">
      <div className="max-w-6xl mx-auto">

        {/* Three massive service words — poster layout, not rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mb-20">
          <Link
            href="/services"
            className="group animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '100ms', animationFillMode: 'both' }}
          >
            <span className="block font-display text-[8rem] md:text-[6rem] lg:text-[8rem] font-bold leading-[0.8] tracking-tighter text-neutral-800 group-hover:text-white transition-colors duration-500">
              Str<br />ate<br />gy
            </span>
          </Link>

          <Link
            href="/services"
            className="group animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '250ms', animationFillMode: 'both' }}
          >
            <span className="block font-display text-[8rem] md:text-[6rem] lg:text-[8rem] font-bold leading-[0.8] tracking-tighter text-neutral-800 group-hover:text-white transition-colors duration-500">
              Des<br />ign
            </span>
          </Link>

          <Link
            href="/services"
            className="group animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '400ms', animationFillMode: 'both' }}
          >
            <span className="block font-display text-[8rem] md:text-[6rem] lg:text-[8rem] font-bold leading-[0.8] tracking-tighter text-neutral-800 group-hover:text-white transition-colors duration-500">
              Dev<br />elop<br />ment
            </span>
          </Link>
        </div>

        {/* Single line CTA */}
        <div
          className="flex items-center justify-between animate-in fade-in duration-500"
          style={{ animationDelay: '600ms', animationFillMode: 'both' }}
        >
          <p className="text-neutral-500 text-lg max-w-md">
            We partner with ambitious companies to create digital experiences that move the needle.
          </p>
          <Link
            href="/services"
            className="group hidden md:flex items-center gap-3 text-neutral-600 hover:text-white transition-colors text-sm uppercase tracking-widest"
          >
            View all
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white group-hover:text-black transition-all duration-300">
              <ArrowUpRight size={16} />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
};
