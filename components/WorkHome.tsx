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
      <div className="flex flex-col gap-3">

        {/* Row 1: 60% left, 40% right */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-3 md:h-[40vw]">
          <ProjectCard
            project={featured[0]}
            titleSize="text-4xl md:text-5xl lg:text-6xl"
            sizes="(max-width: 768px) calc(100vw - 48px), 60vw"
            priority
          />
          <ProjectCard
            project={featured[1]}
            titleSize="text-2xl md:text-3xl lg:text-4xl"
            sizes="(max-width: 768px) calc(100vw - 48px), 40vw"
          />
        </div>

        {/* Row 2: 40% left, 60% right */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-3 md:h-[40vw]">
          <ProjectCard
            project={featured[2]}
            titleSize="text-2xl md:text-3xl lg:text-4xl"
            sizes="(max-width: 768px) calc(100vw - 48px), 40vw"
          />
          <ProjectCard
            project={featured[3]}
            titleSize="text-4xl md:text-5xl lg:text-6xl"
            sizes="(max-width: 768px) calc(100vw - 48px), 60vw"
          />
        </div>

      </div>

      <div className="mt-16 flex justify-end">
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
    </section>
  );
};

function ProjectCard({
  project,
  titleSize,
  sizes,
  priority = false,
}: {
  project: typeof projects[number];
  titleSize: string;
  sizes: string;
  priority?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) videoRef.current.play().catch(() => {});
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
      {/* Mobile: aspect-ratio driven. Desktop: fills the grid row height */}
      <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />
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
