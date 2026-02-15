"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';

const featured = [projects[0], projects[1], projects[3]]; // Clyra.biz, Dachreach, KRONBERG Zeithaus

export const WorkHome: React.FC = () => {
  return (
    <section className="bg-brand-black px-6 md:px-10 pb-32">
      <div className="max-w-6xl mx-auto">

        {/* Hero project — full width, oversized */}
        <div
          className="mb-4 animate-in fade-in slide-in-from-bottom-6 duration-700"
          style={{ animationDelay: '100ms', animationFillMode: 'both' }}
        >
          <ProjectCard project={featured[0]} aspect="aspect-[16/9]" titleSize="text-4xl md:text-6xl lg:text-7xl" />
        </div>

        {/* Two projects side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="animate-in fade-in slide-in-from-bottom-6 duration-700"
            style={{ animationDelay: '250ms', animationFillMode: 'both' }}
          >
            <ProjectCard project={featured[1]} aspect="aspect-[4/3]" titleSize="text-3xl md:text-4xl lg:text-5xl" />
          </div>
          <div
            className="animate-in fade-in slide-in-from-bottom-6 duration-700"
            style={{ animationDelay: '400ms', animationFillMode: 'both' }}
          >
            <ProjectCard project={featured[2]} aspect="aspect-[4/3]" titleSize="text-3xl md:text-4xl lg:text-5xl" />
          </div>
        </div>

        {/* View all link */}
        <div
          className="mt-16 flex justify-end animate-in fade-in duration-500"
          style={{ animationDelay: '600ms', animationFillMode: 'both' }}
        >
          <Link
            href="/work"
            className="group inline-flex items-center gap-3 text-neutral-600 hover:text-white transition-colors text-sm uppercase tracking-widest"
          >
            All work
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white group-hover:text-black transition-all duration-300">
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
}: {
  project: typeof projects[number];
  aspect: string;
  titleSize: string;
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
      href={`/work/${project.slug}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative block overflow-hidden"
    >
      <div className={`relative ${aspect} overflow-hidden`}>
        <img
          src={project.thumbnail}
          alt={project.title}
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

        {/* Gradient overlay — always visible, darkens on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />

        {/* Title + category overlaid */}
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 right-6 md:right-10">
          <h3 className={`font-display ${titleSize} font-bold text-white leading-[0.9] tracking-tight mb-3`}>
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
