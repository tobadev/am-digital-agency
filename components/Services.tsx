"use client";

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const Services: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const t = useTranslations('Services');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Build arrays from translations
  const servicesCount = 3;
  const engagementsCount = 2;
  const faqsCount = 5;

  return (
    <section className="relative z-10 bg-brand-black px-6 md:px-10 pb-32">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div
          className="mb-40 mt-16 md:mt-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
          style={{ animationDelay: '100ms', animationFillMode: 'both' }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6 block">{t('label')}</span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-12">
            {t('title_line1')}<br />{t('title_line2')}<br />{t('title_line3')}
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* Services */}
        {Array.from({ length: servicesCount }).map((_, idx) => {
          const deliverableCount = 4;
          return (
            <div
              key={idx}
              className="group border-t border-white/10 py-16 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${250 + idx * 150}ms`, animationFillMode: 'both' }}
            >
              <div className="flex flex-col gap-12">
                <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 w-40 shrink-0 flex items-center gap-3 md:pt-2 transition-colors duration-300 group-hover:text-neutral-500">
                    <span className="text-neutral-700">{t(`items.${idx}.num`)}</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 transition-transform duration-300 group-hover:translate-x-3">{t(`items.${idx}.title`)}</h2>
                    <p className="text-xl text-neutral-400 mb-8">{t(`items.${idx}.subtitle`)}</p>
                    <p className="text-neutral-500 text-lg leading-relaxed max-w-2xl">{t(`items.${idx}.description`)}</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                  <div className="w-40 shrink-0" />
                  <div className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 mb-12">
                      {Array.from({ length: deliverableCount }).map((_, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-3 text-neutral-300 py-2">
                          <span className="w-1 h-1 rounded-full bg-white shrink-0" />
                          <span className="text-sm">{t(`items.${idx}.deliverables.${dIdx}`)}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-12 text-sm">
                      <div>
                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 block mb-2">{t('timeline')}</span>
                        <span className="text-white font-medium">{t(`items.${idx}.timeline`)}</span>
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 block mb-2">{t('idealFor')}</span>
                        <span className="text-neutral-400">{t(`items.${idx}.idealFor`)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="border-t border-white/10" />

        {/* Engagement Models */}
        <div className="mt-40 mb-40">
          <div
            className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '700ms', animationFillMode: 'both' }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6 block">{t('engagementLabel')}</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight">
              {t('engagementTitle_line1')}<br />{t('engagementTitle_line2')}
            </h2>
          </div>

          {Array.from({ length: engagementsCount }).map((_, idx) => (
            <div
              key={idx}
              className="group border-t border-white/10 py-10 md:py-14 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${800 + idx * 100}ms`, animationFillMode: 'both' }}
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 w-40 shrink-0 flex items-center gap-3 md:pt-1 transition-colors duration-300 group-hover:text-neutral-500">
                  <span className="text-neutral-700">{t(`engagements.${idx}.num`)}</span>
                </div>
                <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 transition-transform duration-300 group-hover:translate-x-3">{t(`engagements.${idx}.title`)}</h3>
                    <p className="text-neutral-500 text-lg leading-relaxed max-w-lg mb-3">{t(`engagements.${idx}.description`)}</p>
                    <span className="text-sm text-neutral-600">{t('bestFor')}: {t(`engagements.${idx}.bestFor`)}</span>
                  </div>
                  <span className="font-display text-3xl md:text-4xl font-bold text-white shrink-0 md:pt-1">
                    {t(`engagements.${idx}.price`)}
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>

        {/* FAQ */}
        <div>
          <div
            className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '1050ms', animationFillMode: 'both' }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6 block">{t('faqLabel')}</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight">
              {t('faqTitle_line1')}<br />{t('faqTitle_line2')}
            </h2>
          </div>

          {Array.from({ length: faqsCount }).map((_, index) => (
            <div
              key={index}
              onClick={() => toggleFaq(index)}
              className="border-t border-white/10 py-8 md:py-10 cursor-pointer group"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                <div className="text-xs uppercase tracking-[0.2em] text-neutral-600 w-40 shrink-0 flex items-center gap-3">
                  <span className="text-neutral-700">{t(`faqs.${index}.num`)}</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl md:text-2xl font-bold text-white pr-8 group-hover:text-neutral-300 transition-colors">{t(`faqs.${index}.q`)}</h3>
                    <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === index ? 'rotate-45 bg-white text-black border-white' : 'text-neutral-600'}`}>
                      <Plus size={14} />
                    </div>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                    <p className="text-neutral-500 leading-relaxed text-lg max-w-2xl">{t(`faqs.${index}.a`)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>

        {/* Sectors */}
        <div className="mt-40 mb-40">
          <div
            className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '1200ms', animationFillMode: 'both' }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6 block">{t('industriesLabel')}</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight">
              {t('industriesTitle_line1')}<br />{t('industriesTitle_line2')}
            </h2>
          </div>

          <div
            className="border-t border-white/10 py-16 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '1350ms', animationFillMode: 'both' }}
          >
            <div className="flex flex-wrap gap-3">
              {Array.from({ length: 8 }).map((_, idx) => (
                <span
                  key={idx}
                  className="px-6 py-3 rounded-full border border-white/10 text-sm text-neutral-500 uppercase tracking-widest hover:border-white/30 hover:text-white transition-all duration-300 cursor-default"
                >
                  {t(`sectors.${idx}`)}
                </span>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10" />
        </div>

      </div>
    </section>
  );
};
