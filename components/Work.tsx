"use client";

import React, { useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { projects } from '@/data/projects';
import { getSrcSet } from '@/lib/responsive-image';

export const Work: React.FC = () => {
  return (
    <section className="bg-brand-black px-6 md:px-10 pb-32">
      {projects.map((project) => (
        <ProjectRow
          key={project.slug}
          project={project}
        />
      ))}
      <div className="border-t border-white/10" />
    </section>
  );
};

function ProjectRow({ project }: { project: typeof projects[number] }) {
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
      className="group block border-t border-white/10 py-10 md:py-14"
    >
      {/* Title row: number + title left, meta + arrow right */}
      <div className="flex items-end justify-between gap-8 mb-8">
        <div className="flex items-end gap-5 min-w-0">
          <span className="text-[10px] text-neutral-700 uppercase tracking-[0.2em] shrink-0 mb-1.5">
            {project.num}
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tight break-words">
            {project.title}
          </h2>
        </div>
        <div className="flex items-center gap-5 shrink-0">
          <div className="text-right hidden md:block">
            <span className="text-[10px] text-neutral-600 uppercase tracking-widest block mb-1">{project.category}</span>
            <span className="text-[10px] text-neutral-700 uppercase tracking-widest">{project.year}</span>
          </div>
          <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-neutral-700 group-hover:bg-white group-hover:border-white group-hover:text-black transition-all duration-300 shrink-0">
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>

      {/* Thumbnail — full width */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={project.thumbnail}
          srcSet={getSrcSet(project.thumbnail)}
          sizes="calc(100vw - 80px)"
          alt={project.title}
          loading="lazy"
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
      </div>

      {/* Mobile: category + year below image */}
      <div className="flex md:hidden items-center gap-3 mt-6 text-[10px] text-neutral-600 uppercase tracking-widest">
        <span>{project.category}</span>
        <span className="w-1 h-1 rounded-full bg-neutral-700" />
        <span>{project.year}</span>
      </div>
    </Link>
  );
}
