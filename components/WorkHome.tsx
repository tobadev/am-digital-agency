"use client";

import React, { useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { projects } from '@/data/projects';
import { getSrcSet } from '@/lib/responsive-image';

const featured = [projects[0], projects[1], projects[3], projects[2]];

export const WorkHome: React.FC = () => {
  const t = useTranslations('WorkHome');

  return (
    <section className="bg-brand-black px-6 md:px-10 pb-32">
      <div className="max-w-6xl mx-auto">

        {/* Row 1 — Hero project, full width */}
        <div
          className="mb-4 animate-in fade-in slide-in-from-bottom-6 duration-700"
          style={{ animationDelay: '100ms', animationFillMode: 'both' }}
        >
          <ProjectCard
            project={featured[0]}
            aspect="aspect-[16/9]"
            titleSize="text-4xl md:text-6xl lg:text-7xl"
            sizes="(max-width: 768px) calc(100vw - 48px), (max-width: 1200px) calc(100vw - 80px), 1152px"
            priority
          />
        </div>

        {/* Row 2 — Two projects side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div
            className="animate-in fade-in slide-in-from-bottom-6 duration-700"
            style={{ animationDelay: '250ms', animationFillMode: 'both' }}
          >
            <ProjectCard
              project={featured[1]}
              aspect="aspect-[4/3]"
              titleSize="text-3xl md:text-4xl lg:text-5xl"
              sizes="(max-width: 768px) calc(100vw - 48px), (max-width: 1200px) calc((100vw - 80px - 16px) / 2), 568px"
            />
          </div>
          <div
            className="animate-in fade-in slide-in-from-bottom-6 duration-700"
            style={{ animationDelay: '400ms', animationFillMode: 'both' }}
          >
            <ProjectCard
              project={featured[2]}
              aspect="aspect-[4/3]"
              titleSize="text-3xl md:text-4xl lg:text-5xl"
              sizes="(max-width: 768px) calc(100vw - 48px), (max-width: 1200px) calc((100vw - 80px - 16px) / 2), 568px"
            />
          </div>
        </div>

        {/* Row 3 — Offset right card, 2/3 width on desktop */}
        <div
          className="md:w-2/3 md:ml-auto animate-in fade-in slide-in-from-bottom-6 duration-700"
          style={{ animationDelay: '550ms', animationFillMode: 'both' }}
        >
          <ProjectCard
            project={featured[3]}
            aspect="aspect-[16/9]"
            titleSize="text-3xl md:text-5xl lg:text-6xl"
            sizes="(max-width: 768px) calc(100vw - 48px), (max-width: 1200px) calc((100vw - 80px) * 2 / 3), 768px"
          />
        </div>

        {/* View all link */}
        <div
          className="mt-16 flex justify-end animate-in fade-in duration-500"
          style={{ animationDelay: '750ms', animationFillMode: 'both' }}
        >
          <Link
            href="/work"
            className="group inline-flex items-center gap-3 text-neutral-600 hover:text-white transition-colors text-sm uppercase tracking-widest"
          >
            {t('allWork')}
            <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white group-hover:text-black transition-all duration-300">
              <ArrowUpRight size={16} />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
};

function ProjectCard({
  project,
  aspect,
  titleSize,
  sizes,
  priority = false,
}: {
  project: typeof projects[number];
  aspect: string;
  titleSize: string;
  sizes: string;
  priority?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Link
      href={{ pathname: '/work/[slug]', params: { slug: project.slug } }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative block overflow-hidden"
    >
      <div className={`relative ${aspect} overflow-hidden`}>
        <img
          src={project.thumbnail}
          srcSet={getSrcSet(project.thumbnail)}
          sizes={sizes}
          alt={project.title}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        />
        {project.video && (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />

        {/* Title + category overlaid */}
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 right-6 md:right-10">
          <h3 className={`font-display ${titleSize} font-bold text-white leading-[0.9] tracking-tight mb-3 line-clamp-2 break-words`}>
            {project.title}
          </h3>
          <span className="text-sm text-white/50 uppercase tracking-widest">
            {project.category}
          </span>
        </div>
      </div>
    </Link>
  );
}
