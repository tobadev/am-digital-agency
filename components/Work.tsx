"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';

export const Work: React.FC = () => {
  return (
    <section className="bg-brand-black px-6 md:px-10 pb-32">
      <div className="max-w-5xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={project.slug}
            className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'both' }}
          >
            <ProjectRow project={project} />
          </div>
        ))}
        <div className="border-t border-white/10" />
      </div>
    </section>
  );
};

function ProjectRow({ project }: { project: typeof projects[number] }) {
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
      href={`/work/${project.slug}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group block border-t border-white/10 py-12 md:py-16 transition-all duration-300"
    >
      <div className="flex flex-col gap-8">
        {/* Top: number + title + arrow */}
        <div className="flex items-start gap-6 md:gap-12">
          <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-700 w-12 shrink-0 pt-3 transition-colors duration-300 group-hover:text-neutral-500">
            {project.num}
          </span>
          <div className="flex-1">
            <div className="flex items-start justify-between gap-8">
              <div>
                <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-3 transition-all duration-300 group-hover:translate-x-3">
                  {project.title}
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 uppercase tracking-widest">
                  <span>{project.category}</span>
                  <span className="w-1 h-1 rounded-full bg-neutral-700" />
                  <span>{project.year}</span>
                </div>
              </div>
              <div className="hidden md:flex w-12 h-12 rounded-full border border-white/10 items-center justify-center shrink-0 mt-2 transition-all duration-300 group-hover:bg-white group-hover:border-white group-hover:text-black text-neutral-700">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Media: image/video thumbnail */}
        <div className="flex items-start gap-6 md:gap-12">
          <div className="w-12 shrink-0 hidden md:block" />
          <div className="flex-1 relative aspect-[16/9] overflow-hidden bg-brand-dark">
            <img
              src={project.thumbnail}
              alt={project.title}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
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
        </div>

        {/* Description */}
        <div className="flex items-start gap-6 md:gap-12">
          <div className="w-12 shrink-0 hidden md:block" />
          <p className="text-neutral-500 text-lg leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
