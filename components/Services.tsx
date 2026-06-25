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

  const servicesCount = 3;
  const engagementsCount = 2;
  const faqsCount = 5;
  const deliverableCount = 4;

  return (
    <section className="relative z-10 bg-brand-black px-6 md:px-10 pb-32">

      {/* Header */}
      <div className="pt-40 md:pt-56 pb-32 md:pb-48">
        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-600 mb-8 block">{t('label')}</span>
        <h1 className="font-display text-[clamp(3rem,11vw,12rem)] font-bold leading-[0.88] tracking-tight mb-16">
          {t('title_line1')}<br />
          {t('title_line2')}<br />
          <span className="text-neutral-500">{t('title_line3')}</span>
        </h1>
        <p className="text-xl text-neutral-400 leading-relaxed md:columns-2 md:gap-16">
          {t('description')}
        </p>
      </div>

      {/* Services */}
      {Array.from({ length: servicesCount }).map((_, idx) => (
        <div key={idx} className="border-t border-white/10 py-20 md:py-28">

          {/* Top row: number left, meta right */}
          <div className="flex items-center justify-between mb-12">
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-700">
              {t(`items.${idx}.num`)}
            </span>
            <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-neutral-700">
              <span>{t('timeline')}: <span className="text-neutral-500">{t(`items.${idx}.timeline`)}</span></span>
              <span className="hidden md:inline text-neutral-800">·</span>
              <span className="hidden md:inline">{t('idealFor')}: <span className="text-neutral-500">{t(`items.${idx}.idealFor`)}</span></span>
            </div>
          </div>

          {/* Title + description left, deliverables right */}
          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 md:gap-20">
            <div>
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.88] tracking-tight mb-10">
                {t(`items.${idx}.title`)}
              </h2>
              <p className="text-base text-neutral-400 font-medium mb-4">{t(`items.${idx}.subtitle`)}</p>
              <p className="text-neutral-500 text-base leading-relaxed">{t(`items.${idx}.description`)}</p>
            </div>
            <div>
              {Array.from({ length: deliverableCount }).map((_, dIdx) => (
                <div key={dIdx} className="flex items-start gap-4 py-4 border-t border-white/5">
                  <span className="text-[10px] text-neutral-700 uppercase tracking-[0.2em] pt-0.5 shrink-0">
                    {String(dIdx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm text-neutral-300 leading-relaxed">
                    {t(`items.${idx}.deliverables.${dIdx}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      ))}
      <div className="border-t border-white/10" />

      {/* Engagement Models */}
      <div className="mt-40 mb-40">
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-600 mb-6 block">{t('engagementLabel')}</span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.9] tracking-tight">
            {t('engagementTitle_line1')}<br />
            <span className="text-neutral-500">{t('engagementTitle_line2')}</span>
          </h2>
        </div>

        {Array.from({ length: engagementsCount }).map((_, idx) => (
          <div key={idx} className="border-t border-white/10 py-12 md:py-16 grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8 items-start">
            <div>
              <span className="text-[10px] text-neutral-700 uppercase tracking-[0.2em] block mb-5">{t(`engagements.${idx}.num`)}</span>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{t(`engagements.${idx}.title`)}</h3>
              <p className="text-neutral-500 text-lg leading-relaxed mb-3">{t(`engagements.${idx}.description`)}</p>
              <span className="text-sm text-neutral-600">{t('bestFor')}: {t(`engagements.${idx}.bestFor`)}</span>
            </div>
            <div className="md:text-right">
              <span className="font-display text-4xl md:text-5xl font-bold text-white">{t(`engagements.${idx}.price`)}</span>
            </div>
          </div>
        ))}
        <div className="border-t border-white/10" />
      </div>

      {/* FAQ */}
      <div className="mb-40">
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-600 mb-6 block">{t('faqLabel')}</span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.9] tracking-tight">
            {t('faqTitle_line1')}<br />
            <span className="text-neutral-500">{t('faqTitle_line2')}</span>
          </h2>
        </div>

        {Array.from({ length: faqsCount }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => toggleFaq(index)}
            aria-expanded={openFaq === index}
            className="w-full text-left border-t border-white/10 py-8 md:py-10 group focus:outline-none focus-visible:bg-white/5"
          >
            <div className="flex items-start justify-between gap-8">
              <div className="flex items-start gap-6 flex-1 min-w-0">
                <span className="text-[10px] text-neutral-700 uppercase tracking-[0.2em] shrink-0 pt-2">{t(`faqs.${index}.num`)}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-neutral-300 transition-colors">{t(`faqs.${index}.q`)}</h3>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                    <p className="text-neutral-500 leading-relaxed text-lg">{t(`faqs.${index}.a`)}</p>
                  </div>
                </div>
              </div>
              <div className={`w-11 h-11 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === index ? 'rotate-45 bg-white text-black border-white' : 'text-neutral-600'}`}>
                <Plus size={16} />
              </div>
            </div>
          </button>
        ))}
        <div className="border-t border-white/10" />
      </div>

      {/* Sectors */}
      <div className="mb-40">
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-600 mb-6 block">{t('industriesLabel')}</span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.9] tracking-tight">
            {t('industriesTitle_line1')}<br />
            <span className="text-neutral-500">{t('industriesTitle_line2')}</span>
          </h2>
        </div>
        <div className="border-t border-white/10 py-16 md:py-20">
          <p className="font-display text-2xl md:text-3xl font-bold text-neutral-400 leading-relaxed">
            {Array.from({ length: 5 }).map((_, idx) => (
              <React.Fragment key={idx}>
                {t(`sectors.${idx}`)}
                {idx < 4 && <span className="text-white/20 mx-4">·</span>}
              </React.Fragment>
            ))}
          </p>
        </div>
        <div className="border-t border-white/10" />
      </div>

    </section>
  );
};
