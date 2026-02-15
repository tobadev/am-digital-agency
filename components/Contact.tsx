"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('Design');
  const [budget, setBudget] = useState<string>('');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const services = ['Design', 'Development', 'Strategy'];
  const budgets = ['< 10k', '10k – 25k', '25k – 50k', '50k – 100k', '100k +'];

  return (
    <div className="bg-brand-black min-h-screen px-6 md:px-10 pb-32">
      <div className="max-w-5xl mx-auto">

        {/* Header — massive, commanding */}
        <div
          className="mb-40 mt-16 md:mt-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
          style={{ animationDelay: '100ms', animationFillMode: 'both' }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6 block">Get in touch</span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-12">
            Let's start<br />something new.
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-neutral-500 text-sm uppercase tracking-widest">
            <a href="mailto:hello@amdigital.agency" className="hover:text-white transition-colors duration-300">
              hello@amdigital.agency
            </a>
            <span className="w-1 h-1 rounded-full bg-neutral-700 hidden md:block" />
            <span>London, UK</span>
          </div>
        </div>

        {/* Form — oversized, architectural fields */}
        <form className="space-y-0" onSubmit={(e) => e.preventDefault()}>

          {/* Field 01 — Name */}
          <div
            className={`group border-t border-white/10 py-10 md:py-14 transition-colors duration-500 animate-in fade-in slide-in-from-bottom-4 ${focusedField === 'name' ? 'border-white/30' : ''}`}
            style={{ animationDelay: '250ms', animationFillMode: 'both' }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16">
              <label className="text-xs uppercase tracking-[0.2em] text-neutral-600 w-40 shrink-0 flex items-center gap-3">
                <span className="text-neutral-700">01</span> Name
              </label>
              <input
                type="text"
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className="flex-1 bg-transparent text-2xl md:text-3xl font-light focus:outline-none text-white placeholder-neutral-700 caret-white"
                placeholder="Your full name"
              />
            </div>
          </div>

          {/* Field 02 — Email */}
          <div
            className={`group border-t border-white/10 py-10 md:py-14 transition-colors duration-500 animate-in fade-in slide-in-from-bottom-4 ${focusedField === 'email' ? 'border-white/30' : ''}`}
            style={{ animationDelay: '350ms', animationFillMode: 'both' }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16">
              <label className="text-xs uppercase tracking-[0.2em] text-neutral-600 w-40 shrink-0 flex items-center gap-3">
                <span className="text-neutral-700">02</span> Email
              </label>
              <input
                type="email"
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className="flex-1 bg-transparent text-2xl md:text-3xl font-light focus:outline-none text-white placeholder-neutral-700 caret-white"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Field 03 — Company */}
          <div
            className={`group border-t border-white/10 py-10 md:py-14 transition-colors duration-500 animate-in fade-in slide-in-from-bottom-4 ${focusedField === 'company' ? 'border-white/30' : ''}`}
            style={{ animationDelay: '450ms', animationFillMode: 'both' }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16">
              <label className="text-xs uppercase tracking-[0.2em] text-neutral-600 w-40 shrink-0 flex items-center gap-3">
                <span className="text-neutral-700">03</span> Company
              </label>
              <input
                type="text"
                onFocus={() => setFocusedField('company')}
                onBlur={() => setFocusedField(null)}
                className="flex-1 bg-transparent text-2xl md:text-3xl font-light focus:outline-none text-white placeholder-neutral-700 caret-white"
                placeholder="Your company name"
              />
            </div>
          </div>

          {/* Field 04 — Service */}
          <div
            className="border-t border-white/10 py-10 md:py-14 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '550ms', animationFillMode: 'both' }}
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-16">
              <label className="text-xs uppercase tracking-[0.2em] text-neutral-600 w-40 shrink-0 flex items-center gap-3 md:pt-3">
                <span className="text-neutral-700">04</span> Service
              </label>
              <div className="flex flex-wrap gap-3">
                {services.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedService(s)}
                    className={`px-8 py-4 rounded-full border text-sm font-medium transition-all duration-300 ${
                      selectedService === s
                        ? 'bg-white text-black border-white'
                        : 'bg-transparent text-neutral-500 border-white/10 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Field 05 — Budget */}
          <div
            className="border-t border-white/10 py-10 md:py-14 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '650ms', animationFillMode: 'both' }}
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-16">
              <label className="text-xs uppercase tracking-[0.2em] text-neutral-600 w-40 shrink-0 flex items-center gap-3 md:pt-3">
                <span className="text-neutral-700">05</span> Budget
              </label>
              <div className="flex flex-wrap gap-3">
                {budgets.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBudget(b)}
                    className={`px-8 py-4 rounded-full border text-sm font-medium transition-all duration-300 ${
                      budget === b
                        ? 'bg-white text-black border-white'
                        : 'bg-transparent text-neutral-500 border-white/10 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Field 06 — Message */}
          <div
            className={`border-t border-white/10 py-10 md:py-14 transition-colors duration-500 animate-in fade-in slide-in-from-bottom-4 ${focusedField === 'message' ? 'border-white/30' : ''}`}
            style={{ animationDelay: '750ms', animationFillMode: 'both' }}
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-16">
              <label className="text-xs uppercase tracking-[0.2em] text-neutral-600 w-40 shrink-0 flex items-center gap-3 md:pt-2">
                <span className="text-neutral-700">06</span> Message
              </label>
              <textarea
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                className="flex-1 bg-transparent text-xl md:text-2xl font-light focus:outline-none text-white placeholder-neutral-700 caret-white h-40 resize-none"
                placeholder="Tell us about your project, goals, and timeline..."
              />
            </div>
          </div>

          {/* Submit */}
          <div
            className="border-t border-white/10 pt-16 md:pt-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '850ms', animationFillMode: 'both' }}
          >
            <p className="text-sm text-neutral-700 max-w-xs leading-relaxed">
              By submitting, you agree to our{' '}
              <Link href="/legal" className="text-neutral-500 hover:text-white transition-colors underline underline-offset-4 decoration-white/20">
                Privacy Policy
              </Link>.
            </p>
            <button
              type="submit"
              className="group inline-flex items-center gap-4 bg-white text-black px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Send message
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
