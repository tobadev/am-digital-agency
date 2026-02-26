"use client";

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

const Counter = ({ end, duration = 1000, start = 0 }: { end: number, duration?: number, start?: number }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
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
    <div className="bg-brand-black min-h-screen px-6 md:px-10 pb-32">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div
          className="mb-40 mt-16 md:mt-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
          style={{ animationDelay: '100ms', animationFillMode: 'both' }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6 block">{t('label')}</span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-12">
            {t('title_line1')}<br />{t('title_line2')}
          </h1>
          <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl">
            {t('description')}
          </p>
        </div>

        {/* Stats */}
        <div className="mb-40">
          {Array.from({ length: statsCount }).map((_, idx) => (
            <div
              key={idx}
              className="border-t border-white/10 py-10 md:py-14 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${250 + idx * 100}ms`, animationFillMode: 'both' }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16">
                <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 w-40 shrink-0 flex items-center gap-3">
                  <span className="text-neutral-700">{t(`stats.${idx}.num`)}</span> {t(`stats.${idx}.label`)}
                </div>
                <span className="font-display text-4xl md:text-5xl font-bold text-white">
                  {idx === 0 ? <><Counter start={18} end={21} duration={1500} />+</> : t(`stats.${idx}.value`)}
                </span>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>

        {/* Team */}
        <div className="mb-40">
          <div
            className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '600ms', animationFillMode: 'both' }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6 block">{t('teamLabel')}</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight">
              {t('teamTitle_line1')}<br />{t('teamTitle_line2')}
            </h2>
          </div>

          {Array.from({ length: teamCount }).map((_, idx) => (
            <div
              key={idx}
              className="group border-t border-white/10 py-8 md:py-10 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${750 + idx * 75}ms`, animationFillMode: 'both' }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                <a href={`mailto:${t(`team.${idx}.email`)}`} className="text-xl md:text-2xl font-bold text-white transition-transform duration-300 group-hover:translate-x-3 md:w-64 shrink-0 hover:text-neutral-300">
                  {t(`team.${idx}.name`)}
                </a>
                <span className="text-sm text-neutral-500 uppercase tracking-widest flex-1">{t(`team.${idx}.role`)}</span>
                <span className="text-[10px] text-neutral-700 uppercase tracking-[0.2em] shrink-0">{t('since')} {t(`team.${idx}.year`)}</span>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>

        {/* Clients */}
        <div className="mb-40">
          <div
            className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '1150ms', animationFillMode: 'both' }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6 block">{t('clientsLabel')}</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight">
              {t('clientsTitle_line1')}<br />{t('clientsTitle_line2')}
            </h2>
          </div>

          <div
            className="border-t border-white/10 py-16 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '1300ms', animationFillMode: 'both' }}
          >
            <div className="flex flex-wrap gap-x-16 gap-y-8">
              {Array.from({ length: clientsCount }).map((_, idx) => (
                <span
                  key={idx}
                  className="font-display text-2xl md:text-3xl font-bold text-neutral-600 hover:text-white transition-colors duration-300 cursor-default"
                >
                  {t(`clients.${idx}`)}
                </span>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10" />
        </div>

        {/* Values */}
        <div className="mb-40">
          <div
            className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '1450ms', animationFillMode: 'both' }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6 block">{t('valuesLabel')}</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight">
              {t('valuesTitle_line1')}<br />{t('valuesTitle_line2')}
            </h2>
          </div>

          {Array.from({ length: valuesCount }).map((_, idx) => (
            <div
              key={idx}
              className="group border-t border-white/10 py-10 md:py-14 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${1550 + idx * 100}ms`, animationFillMode: 'both' }}
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 w-40 shrink-0 flex items-center gap-3 md:pt-1 transition-colors duration-300 group-hover:text-neutral-500">
                  <span className="text-neutral-700">{t(`values.${idx}.num`)}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 transition-transform duration-300 group-hover:translate-x-3">{t(`values.${idx}.title`)}</h3>
                  <p className="text-neutral-500 text-lg leading-relaxed max-w-2xl">{t(`values.${idx}.desc`)}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>

      </div>
    </div>
  );
};
