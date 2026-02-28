"use client";

import React from 'react';
import { useTranslations } from 'next-intl';

export const Hero: React.FC = () => {
  const t = useTranslations('Hero');

  return (
    <section className="relative h-dvh flex flex-col justify-center items-center text-center px-6 md:px-10">
      <style>{`
        .hero-text-bg {
          background-image: url(/hero-work-640w.webp);
          background-size: cover;
          background-position: center;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
        @media (min-width: 768px) {
          .hero-text-bg { background-image: url(/hero-work-960w.webp); }
        }
        @media (min-width: 1280px) {
          .hero-text-bg { background-image: url(/hero-work-1280w.webp); }
        }
        @media (min-width: 1920px) {
          .hero-text-bg { background-image: url(/hero-work.webp); }
        }
      `}</style>
      <div className="max-w-7xl mx-auto w-full">

        <h1
          className="font-display text-[clamp(3rem,10vw,10rem)] font-bold leading-[0.92] tracking-tighter animate-in fade-in slide-in-from-bottom-6 duration-1000"
          style={{ animationDelay: '300ms', animationFillMode: 'both' }}
        >
          {t('heading_line1')} <br className="hidden md:block" />{t('heading_line2')}{' '}
          <span className="inline-block hero-text-bg">
            {t('heading_highlight')}
          </span>
        </h1>

      </div>

      {/* Bottom info strip */}
      <div
        className="absolute bottom-8 left-6 right-6 md:left-10 md:right-10 flex justify-between items-center animate-in fade-in duration-1000"
        style={{ animationDelay: '1200ms', animationFillMode: 'both' }}
      >
        <span className="text-[10px] text-neutral-600 uppercase tracking-[0.2em]">
          {t('agency')}
        </span>
        <span className="text-[10px] text-neutral-600 uppercase tracking-[0.2em]">
          {t('location')}
        </span>
        <span className="text-[10px] text-neutral-600 uppercase tracking-[0.2em] hidden md:block">
          {t('services')}
        </span>
      </div>
    </section>
  );
};
