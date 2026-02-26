import React from 'react';
import { getTranslations } from 'next-intl/server';

export const Legal: React.FC = async () => {
  const t = await getTranslations('Legal');

  const sectionsCount = 10;

  return (
    <section className="bg-brand-black px-6 md:px-10 pb-32">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div
          className="mb-40 animate-in fade-in slide-in-from-bottom-6 duration-700"
          style={{ animationDelay: '100ms', animationFillMode: 'both' }}
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tight">
            {t('title')}
          </h1>
        </div>

        {/* Sections */}
        {Array.from({ length: sectionsCount }).map((_, idx) => {
          const contentCounts = [5, 2, 2, 3, 2, 1, 3, 1, 1, 1];
          const contentCount = contentCounts[idx];
          return (
            <div
              key={idx}
              className="border-t border-white/10 py-16 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${200 + idx * 150}ms`, animationFillMode: 'both' }}
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:w-64 shrink-0">
                  <h2 className="text-sm text-white font-bold uppercase tracking-widest">
                    {t(`sections.${idx}.title`)}
                  </h2>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  {Array.from({ length: contentCount }).map((_, pIdx) => (
                    <p key={pIdx} className="text-neutral-400 text-base leading-relaxed">
                      {t(`sections.${idx}.content.${pIdx}`)}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {/* Last updated */}
        <div className="border-t border-white/10 pt-12">
          <p className="text-neutral-700 text-sm">{t('lastUpdated')}</p>
        </div>

      </div>
    </section>
  );
};
