"use client";

import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ProjectData, projects } from '@/data/projects';
import { getSrcSet } from '@/lib/responsive-image';

export const CaseStudyContent: React.FC<{ project: ProjectData }> = ({ project }) => {
  const t = useTranslations('CaseStudy');
  const tp = useTranslations('projects');
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const description = tp(`${project.slug}.description`);
  const challenge = tp(`${project.slug}.challenge`);
  const solution = tp(`${project.slug}.solution`);

  const services: string[] = [];
  for (let i = 0; i < project.services.length; i++) {
    services.push(tp(`${project.slug}.services.${i}`));
  }

  const results: { label: string; value: string }[] = [];
  for (let i = 0; i < project.results.length; i++) {
    results.push({
      label: tp(`${project.slug}.results.${i}.label`),
      value: tp(`${project.slug}.results.${i}.value`),
    });
  }

  return (
    <div className="bg-brand-black min-h-screen text-white px-6 md:px-10 pb-32">
      <div>

        {/* Back link */}
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 text-neutral-700 hover:text-white transition-colors uppercase text-[10px] tracking-widest mb-16 py-3 -my-3"
        >
          <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" /> {t('backToWork')}
        </Link>

        {/* Header */}
        <div className="mb-40">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6 block">{project.category}</span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-12 break-words">
            {project.title}
          </h1>
          <p className="text-xl text-neutral-400 leading-relaxed max-w-4xl mb-16">
            {description}
          </p>

          {/* Meta row — fix 6: more visual weight */}
          <div className="border-t border-white/10 pt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 block mb-3">{t('client')}</span>
              <span className="text-lg font-medium text-white">{project.client}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 block mb-3">{t('year')}</span>
              <span className="text-lg font-medium text-white">{project.year}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 block mb-3">{t('servicesLabel')}</span>
              <span className="text-lg font-medium text-white">{services.join(', ')}</span>
            </div>
          </div>
        </div>

        {/* Hero media — fix 1: shorter aspect ratio */}
        <div className="relative aspect-[2/1] max-h-[85vh] overflow-hidden mb-40">
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <img
              src={project.thumbnail}
              srcSet={getSrcSet(project.thumbnail)}
              sizes="calc(100vw - 80px)"
              alt={project.title}
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </div>

        {/* Challenge — fix 5: visible label */}
        <div className="border-t border-white/10 py-16 md:py-20">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 flex items-center gap-3 mb-10">
            <span className="text-neutral-600">01</span> {t('challenge')}
          </span>
          <p className="text-neutral-400 text-lg leading-relaxed md:columns-2 md:gap-16">
            {challenge}
          </p>
        </div>

        {/* Solution — fix 5: visible label */}
        <div className="border-t border-white/10 py-16 md:py-20">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 flex items-center gap-3 mb-10">
            <span className="text-neutral-600">02</span> {t('solution')}
          </span>
          <p className="text-neutral-400 text-lg leading-relaxed md:columns-2 md:gap-16">
            {solution}
          </p>
        </div>

        {/* Gallery — fix 3: side-by-side */}
        {project.gallery.length > 0 && (
          <div className="my-40 grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.gallery.map((item, idx) => (
              <div key={idx} className="relative aspect-[4/3] overflow-hidden">
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={item.src}
                    srcSet={getSrcSet(item.src)}
                    sizes="(max-width: 768px) calc(100vw - 48px), 50vw"
                    alt={`${project.title} — ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Results — fix 2: label above, full-width grid */}
        <div className="border-t border-white/10 py-16 md:py-20">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 flex items-center gap-3 mb-10">
            <span className="text-neutral-600">03</span> {t('results')}
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {results.map((result, idx) => (
              <div key={idx}>
                <span className="font-display text-5xl md:text-6xl font-bold text-white block mb-3">
                  {result.value}
                </span>
                <span className="text-sm text-neutral-500 uppercase tracking-widest">
                  {result.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Next project — fix 4: thumbnail preview */}
        <div className="mt-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 block mb-6">{t('nextProject')}</span>
          <Link
            href={{ pathname: '/work/[slug]', params: { slug: nextProject.slug } }}
            className="group relative block overflow-hidden aspect-[3/1]"
          >
            <img
              src={nextProject.thumbnail}
              srcSet={getSrcSet(nextProject.thumbnail)}
              sizes="calc(100vw - 80px)"
              alt={nextProject.title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500" />
            <div className="absolute inset-6 md:inset-10 flex items-end justify-between">
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tight break-words">
                {nextProject.title}
              </h2>
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center shrink-0 ml-6 group-hover:bg-white group-hover:text-black transition-all duration-300 text-white">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
};
