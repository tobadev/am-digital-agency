"use client";

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

const Counter = ({ end, duration = 1000, start = 0 }: { end: number, duration?: number, start?: number }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(end);
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration) {
        const nextCount = Math.floor(start + (end - start) * (progress / duration));
        setCount(nextCount);
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return <>{count}</>;
};

export const About: React.FC = () => {
  const t = useTranslations('About');

  const statsCount = 3;
  const teamCount = 5;
  const clientsCount = 5;
  const valuesCount = 4;

  return (
    <div className="bg-brand-black min-h-screen overflow-x-hidden">

      {/* Header — full-bleed stacked */}
      <section className="px-6 md:px-10 pt-24 md:pt-32 pb-32 md:pb-48">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-600 mb-8 block">{t('label')}</span>
          <h1 className="font-display text-[clamp(3rem,11vw,12rem)] font-bold leading-[0.88] tracking-tight mb-12">
            {t('title_line1')}<br />
            <span className="text-neutral-500">{t('title_line2')}</span>
          </h1>
          <div className="flex items-start gap-6">
            <div className="w-12 h-px bg-white/20 mt-3 shrink-0" />
            <p className="text-neutral-400 text-lg leading-relaxed max-w-lg">
              {t('description')}
            </p>
          </div>
          <div className="mt-20 h-px bg-white/10" />
        </div>
      </section>

      {/* Stats — grid of big numbers */}
      <section className="px-6 md:px-10 pb-40">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {Array.from({ length: statsCount }).map((_, idx) => (
              <div
                key={idx}
                className="bg-brand-black p-10 md:p-14 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 mb-6 block">
                  {t(`stats.${idx}.label`)}
                </span>
                <div className="font-display text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-none">
                  {idx === 0 ? <><Counter start={18} end={21} duration={1500} />+</> : t(`stats.${idx}.value`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team — numbered rows with arrow reveal */}
      <section className="px-6 md:px-10 pb-40">
        <div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-600 mb-6 block">{t('teamLabel')}</span>
              <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.9] tracking-tight">
                {t('teamTitle_line1')}<br />{t('teamTitle_line2')}
              </h2>
            </div>
            <span className="font-display text-8xl font-bold text-white/5 leading-none select-none hidden md:block">
              {teamCount.toString().padStart(2, '0')}
            </span>
          </div>

          <div>
            {Array.from({ length: teamCount }).map((_, idx) => (
              <a
                key={idx}
                href={`mailto:${t(`team.${idx}.email`)}`}
                className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-0 border-t border-white/8 py-7 md:py-9 -mx-6 md:-mx-10 px-6 md:px-10 hover:bg-white/[0.02] transition-all duration-300"
              >
                <span className="text-[10px] text-neutral-700 uppercase tracking-[0.25em] md:w-10 shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-xl md:text-2xl font-bold text-white md:w-72 shrink-0 ">
                  {t(`team.${idx}.name`)}
                </span>
                <span className="text-xs text-neutral-500 uppercase tracking-widest flex-1">
                  {t(`team.${idx}.role`)}
                </span>
                <span className="text-[10px] text-neutral-700 uppercase tracking-[0.2em] shrink-0">
                  {t('since')} {t(`team.${idx}.year`)}
                </span>
                <span className="text-white/30 text-sm ml-0 md:ml-10 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  ↗
                </span>
              </a>
            ))}
            <div className="border-t border-white/8" />
          </div>
        </div>
      </section>

      {/* Clients — dim-to-bright reveal on hover */}
      <section className="px-6 md:px-10 pb-40">
        <div>
          <div className="mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-600 mb-6 block">{t('clientsLabel')}</span>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.9] tracking-tight">
              {t('clientsTitle_line1')}<br />{t('clientsTitle_line2')}
            </h2>
          </div>

          <div className="relative border-t border-b border-white/8 py-16 md:py-24 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <span className="font-display text-[20vw] font-bold text-white/[0.025] whitespace-nowrap leading-none">
                CLIENTS
              </span>
            </div>
            <div className="relative flex flex-wrap gap-x-10 gap-y-6 md:gap-x-16 md:gap-y-8">
              {Array.from({ length: clientsCount }).map((_, idx) => (
                <span
                  key={idx}
                  className="font-display text-3xl md:text-4xl xl:text-5xl font-bold text-white/20 hover:text-white transition-all duration-500 cursor-default"
                >
                  {t(`clients.${idx}`)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values — 2-col grid with ghost number accent */}
      <section className="px-6 md:px-10 pb-48">
        <div>
          <div className="mb-20">
            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-600 mb-6 block">{t('valuesLabel')}</span>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.9] tracking-tight">
              {t('valuesTitle_line1')}<br />{t('valuesTitle_line2')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {Array.from({ length: valuesCount }).map((_, idx) => (
              <div
                key={idx}
                className="bg-brand-black p-10 md:p-14 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 font-display text-[9rem] md:text-[11rem] font-bold text-white/[0.03] leading-none select-none pointer-events-none translate-x-6 -translate-y-4">
                  {t(`values.${idx}.num`)}
                </div>
                <div className="relative">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-5 ">
                    {t(`values.${idx}.title`)}
                  </h3>
                  <p className="text-neutral-500 text-base leading-relaxed max-w-sm">
                    {t(`values.${idx}.desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
