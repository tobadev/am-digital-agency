import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export const Capabilities: React.FC = async () => {
  const t = await getTranslations('Capabilities');
  const itemsCount = 3;

  return (
    <section className="bg-brand-black px-6 md:px-10 pb-32">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div
          className="mb-20 md:mb-32 mt-16 md:mt-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
          style={{ animationDelay: '100ms', animationFillMode: 'both' }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6 block">
            {t('label')}
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight break-words">
            {t('title_line1')}<br />{t('title_line2')}
          </h2>
        </div>

        {/* Items */}
        {Array.from({ length: itemsCount }).map((_, idx) => (
          <div
            key={idx}
            className="group border-t border-white/10 py-10 md:py-14 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: `${250 + idx * 120}ms`, animationFillMode: 'both' }}
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-16">
              <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 w-40 shrink-0 flex items-center gap-3 md:pt-3 transition-colors duration-300 group-hover:text-neutral-500">
                <span className="text-neutral-700">{t(`items.${idx}.num`)}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 transition-transform duration-300 group-hover:translate-x-3 break-words">
                  {t(`items.${idx}.title`)}
                </h3>
                <p className="text-neutral-500 text-lg leading-relaxed max-w-2xl">
                  {t(`items.${idx}.desc`)}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="border-t border-white/10" />

        {/* Link to /services */}
        <div
          className="mt-16 flex justify-end animate-in fade-in duration-500"
          style={{ animationDelay: '700ms', animationFillMode: 'both' }}
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 text-neutral-600 hover:text-white transition-colors text-sm uppercase tracking-widest"
          >
            {t('link')}
            <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white group-hover:text-black transition-all duration-300">
              <ArrowUpRight size={16} />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
};
