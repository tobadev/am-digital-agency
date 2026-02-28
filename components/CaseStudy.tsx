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

  // Get translated services array
  const services: string[] = [];
  for (let i = 0; i < project.services.length; i++) {
    services.push(tp(`${project.slug}.services.${i}`));
  }

  // Get translated results array
  const results: { label: string; value: string }[] = [];
  for (let i = 0; i < project.results.length; i++) {
    results.push({
      label: tp(`${project.slug}.results.${i}.label`),
      value: tp(`${project.slug}.results.${i}.value`),
    });
  }

  return (
    <div className="bg-brand-black min-h-screen text-white px-6 md:px-10 pb-32">
      <div className="max-w-5xl mx-auto">

        {/* Back link */}
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 text-neutral-700 hover:text-white transition-colors uppercase text-[10px] tracking-widest mb-16"
        >
          <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" /> {t('backToWork')}
        </Link>

        {/* Header */}
        <div
          className="mb-40 animate-in fade-in slide-in-from-bottom-4 duration-500"
          style={{ animationDelay: '100ms', animationFillMode: 'both' }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6 block">{project.category}</span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-12">
            {project.title}
          </h1>
          <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl mb-16">
            {description}
          </p>

          {/* Meta row */}
          <div className="border-t border-white/10 pt-8 flex flex-wrap gap-12 md:gap-20">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-700 block mb-2">{t('client')}</span>
              <span className="text-sm text-white">{project.client}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-700 block mb-2">{t('year')}</span>
              <span className="text-sm text-white">{project.year}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-700 block mb-2">{t('servicesLabel')}</span>
              <span className="text-sm text-white">{services.join(', ')}</span>
            </div>
          </div>
        </div>

        {/* Hero media */}
        <div
          className="relative aspect-[16/9] overflow-hidden mb-40 animate-in fade-in slide-in-from-bottom-4 duration-500"
          style={{ animationDelay: '250ms', animationFillMode: 'both' }}
        >
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
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1120px"
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          )}
        </div>

        {/* Challenge */}
        <div
          className="border-t border-white/10 py-16 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
          style={{ animationDelay: '400ms', animationFillMode: 'both' }}
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-16">
            <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-700 w-40 shrink-0 flex items-center gap-3 md:pt-1">
              <span className="text-neutral-700">01</span> {t('challenge')}
            </div>
            <div className="flex-1">
              <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl">
                {challenge}
              </p>
            </div>
          </div>
        </div>

        {/* Solution */}
        <div
          className="border-t border-white/10 py-16 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
          style={{ animationDelay: '550ms', animationFillMode: 'both' }}
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-16">
            <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-700 w-40 shrink-0 flex items-center gap-3 md:pt-1">
              <span className="text-neutral-700">02</span> {t('solution')}
            </div>
            <div className="flex-1">
              <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl">
                {solution}
              </p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        {project.gallery.length > 0 && (
          <div
            className="my-40 flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '700ms', animationFillMode: 'both' }}
          >
            {project.gallery.map((item, idx) => (
              <div key={idx} className="relative aspect-[16/9] overflow-hidden">
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1120px"
                    alt={`${project.title} — ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Results */}
        <div
          className="border-t border-white/10 py-16 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
          style={{ animationDelay: '850ms', animationFillMode: 'both' }}
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-16">
            <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-700 w-40 shrink-0 flex items-center gap-3 md:pt-1">
              <span className="text-neutral-700">03</span> {t('results')}
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-12">
              {results.map((result, idx) => (
                <div key={idx}>
                  <span className="font-display text-4xl md:text-5xl font-bold text-white block mb-3">
                    {result.value}
                  </span>
                  <span className="text-sm text-neutral-600 uppercase tracking-widest">
                    {result.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10" />

        {/* Next project */}
        <div
          className="pt-32 md:pt-40 animate-in fade-in slide-in-from-bottom-4 duration-500"
          style={{ animationDelay: '1000ms', animationFillMode: 'both' }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-700 block mb-8">{t('nextProject')}</span>
          <Link
            href={{ pathname: '/work/[slug]', params: { slug: nextProject.slug } }}
            className="group flex items-center justify-between"
          >
            <h2 className="font-display text-5xl md:text-7xl font-bold text-neutral-600 group-hover:text-white transition-all duration-300 group-hover:translate-x-3">
              {nextProject.title}
            </h2>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-white group-hover:border-white group-hover:text-black text-neutral-700">
              <ArrowUpRight size={20} />
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
};
