"use client";

import React, { useState, useEffect } from 'react';

const Counter = ({ end, duration = 1000, start = 0 }: { end: number, duration?: number, start?: number }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration) {
        const nextCount = Math.floor(start + (end - start) * (progress / duration));
        setCount(nextCount);
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return <>{count}</>;
};

const stats = [
  { num: '01', label: 'Projects delivered', value: <><Counter start={18} end={21} duration={1500} />+</> },
  { num: '02', label: 'Based in', value: 'London, UK' },
  { num: '03', label: 'Working', value: 'Globally' },
];

const team = [
  { name: 'Andrija Milosevic', role: 'Founder', email: 'amilosevic@amdigital.agency', year: '2023' },
  { name: 'Luka Petrovic', role: 'DACH Account Manager', email: 'lpetrovic@amdigital.agency', year: '2023' },
  { name: 'Daria Morozova', role: 'Outreach Specialist', email: 'dmorozova@amdigital.agency', year: '2024' },
  { name: 'Aleksa Velickovic', role: 'Outreach Specialist', email: 'avelickovic@amdigital.agency', year: '2023' },
];

const clients = ['Dachreach', 'Clyra.biz', 'Calem.app', 'CostaeAI', 'Veltrix'];

const values = [
  {
    num: '01',
    title: 'Design that works.',
    desc: 'Aesthetics matter, but clarity always comes first. Every decision is deliberate and supports the user experience.',
  },
  {
    num: '02',
    title: 'Technology with purpose.',
    desc: 'We build scalable, fast, and future-ready solutions. No shortcuts. No unnecessary complexity.',
  },
  {
    num: '03',
    title: 'Real partnership.',
    desc: 'Collaboration happens side by side, with aligned goals and shared accountability at every stage.',
  },
  {
    num: '04',
    title: 'Long-term thinking.',
    desc: 'Solutions built to last. Flexible enough to scale. Stable enough to endure change.',
  },
];

export const About: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen px-6 md:px-10 pb-32">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div
          className="mb-40 mt-16 md:mt-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
          style={{ animationDelay: '100ms', animationFillMode: 'both' }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6 block">About us</span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-12">
            Independent digital<br />agency. Global reach.
          </h1>
          <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl">
            We are a small, focused team that builds digital products for ambitious companies. Strategy, design, and development — delivered with precision and without the overhead.
          </p>
        </div>

        {/* Stats — architectural rows */}
        <div className="mb-40">
          {stats.map((stat, idx) => (
            <div
              key={stat.num}
              className="border-t border-white/10 py-10 md:py-14 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${250 + idx * 100}ms`, animationFillMode: 'both' }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16">
                <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 w-40 shrink-0 flex items-center gap-3">
                  <span className="text-neutral-700">{stat.num}</span> {stat.label}
                </div>
                <span className="font-display text-4xl md:text-5xl font-bold text-white">
                  {stat.value}
                </span>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>

        {/* Team — directory */}
        <div className="mb-40">
          <div
            className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '600ms', animationFillMode: 'both' }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6 block">The team</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight">
              Small team.<br />Senior output.
            </h2>
          </div>

          {team.map((member, idx) => (
            <div
              key={member.name}
              className="group border-t border-white/10 py-8 md:py-10 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${750 + idx * 75}ms`, animationFillMode: 'both' }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                <a href={`mailto:${member.email}`} className="text-xl md:text-2xl font-bold text-white transition-transform duration-300 group-hover:translate-x-3 md:w-64 shrink-0 hover:text-neutral-300">
                  {member.name}
                </a>
                <span className="text-sm text-neutral-500 uppercase tracking-widest flex-1">{member.role}</span>
                <span className="text-[10px] text-neutral-700 uppercase tracking-[0.2em] shrink-0">Since {member.year}</span>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>

        {/* Clients */}
        <div className="mb-40">
          <div
            className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '1150ms', animationFillMode: 'both' }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6 block">Selected clients</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight">
              Companies we&apos;ve<br />worked with.
            </h2>
          </div>

          <div
            className="border-t border-white/10 py-16 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '1300ms', animationFillMode: 'both' }}
          >
            <div className="flex flex-wrap gap-x-16 gap-y-8">
              {clients.map((client) => (
                <span
                  key={client}
                  className="font-display text-2xl md:text-3xl font-bold text-neutral-600 hover:text-white transition-colors duration-300 cursor-default"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10" />
        </div>

        {/* Values — numbered rows */}
        <div className="mb-40">
          <div
            className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '1450ms', animationFillMode: 'both' }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6 block">What drives us</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight">
              Principles, not<br />processes.
            </h2>
          </div>

          {values.map((value, idx) => (
            <div
              key={value.num}
              className="group border-t border-white/10 py-10 md:py-14 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${1550 + idx * 100}ms`, animationFillMode: 'both' }}
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 w-40 shrink-0 flex items-center gap-3 md:pt-1 transition-colors duration-300 group-hover:text-neutral-500">
                  <span className="text-neutral-700">{value.num}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 transition-transform duration-300 group-hover:translate-x-3">{value.title}</h3>
                  <p className="text-neutral-500 text-lg leading-relaxed max-w-2xl">{value.desc}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>

      </div>
    </div>
  );
};
