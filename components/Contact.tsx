"use client";

import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export const Contact: React.FC = () => {
  const t = useTranslations('Contact');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>('');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const servicesCount = 3;
  const budgetsCount = 5;

  const toggleService = (s: string) => {
    setSelectedServices(prev =>
      prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company,
          services: selectedServices,
          budget,
          message,
        }),
      });

      if (!res.ok) throw new Error();

      setStatus('success');
      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
      setBudget('');
      setSelectedServices([]);
    } catch {
      setStatus('error');
    }
  };

  const rowClass = (field: string) =>
    `border-t py-10 md:py-14 transition-colors duration-300 ${
      focusedField === field ? 'border-white/30' : 'border-white/10'
    }`;

  return (
    <div className="bg-brand-black min-h-screen px-6 md:px-10 pb-32">

      {/* Header */}
      <div className="pt-40 md:pt-56 pb-32 md:pb-48">
        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-600 mb-8 block">{t('label')}</span>
        <h1 className="font-display text-[clamp(3rem,11vw,12rem)] font-bold leading-[0.88] tracking-tight mb-16 break-words">
          {t('title_line1')}<br />
          <span className="text-neutral-500">{t('title_line2')}</span>
        </h1>
        <div className="flex flex-wrap items-center gap-6 text-neutral-500 text-sm uppercase tracking-widest">
          <a href={`mailto:${t('email')}`} className="hover:text-white transition-colors duration-300">
            {t('email')}
          </a>
          <span className="w-1 h-1 rounded-full bg-neutral-700 hidden md:block" />
          <span>{t('location')}</span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>

        {/* Name */}
        <div className={rowClass('name')}>
          <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 flex items-center gap-3 mb-5">
            <span className="text-neutral-700">01</span> {t('nameLabel')}
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            className="w-full bg-transparent text-3xl md:text-4xl font-light focus:outline-none text-white placeholder-neutral-700 caret-white"
            placeholder={t('namePlaceholder')}
          />
        </div>

        {/* Email */}
        <div className={rowClass('email')}>
          <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 flex items-center gap-3 mb-5">
            <span className="text-neutral-700">02</span> {t('emailLabel')}
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            className="w-full bg-transparent text-3xl md:text-4xl font-light focus:outline-none text-white placeholder-neutral-700 caret-white"
            placeholder={t('emailPlaceholder')}
          />
        </div>

        {/* Company */}
        <div className={rowClass('company')}>
          <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 flex items-center gap-3 mb-5">
            <span className="text-neutral-700">03</span> {t('companyLabel')}
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            onFocus={() => setFocusedField('company')}
            onBlur={() => setFocusedField(null)}
            className="w-full bg-transparent text-3xl md:text-4xl font-light focus:outline-none text-white placeholder-neutral-700 caret-white"
            placeholder={t('companyPlaceholder')}
          />
        </div>

        {/* Services — multi-select */}
        <div className="border-t border-white/10 py-10 md:py-14">
          <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 flex items-center gap-3 mb-6">
            <span className="text-neutral-700">04</span> {t('serviceLabel')}
          </label>
          <div className="flex flex-wrap gap-3">
            {Array.from({ length: servicesCount }).map((_, idx) => {
              const s = t(`services.${idx}`);
              const active = selectedServices.includes(s);
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => toggleService(s)}
                  className={`px-8 py-4 rounded-full border text-sm font-medium transition-all duration-300 ${
                    active
                      ? 'bg-white text-black border-white'
                      : 'bg-transparent text-neutral-500 border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {s}
                </button>
              );
            })}
          </div>
        </div>

        {/* Budget */}
        <div className="border-t border-white/10 py-10 md:py-14">
          <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 flex items-center gap-3 mb-6">
            <span className="text-neutral-700">05</span> {t('budgetLabel')}
          </label>
          <div className="flex flex-wrap gap-3">
            {Array.from({ length: budgetsCount }).map((_, idx) => {
              const b = t(`budgets.${idx}`);
              return (
                <button
                  key={idx}
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
              );
            })}
          </div>
        </div>

        {/* Message */}
        <div className={rowClass('message')}>
          <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 flex items-center gap-3 mb-5">
            <span className="text-neutral-700">06</span> {t('messageLabel')}
          </label>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            className="w-full bg-transparent text-2xl md:text-3xl font-light focus:outline-none text-white placeholder-neutral-700 caret-white h-48 resize-none"
            placeholder={t('messagePlaceholder')}
          />
        </div>

        {/* Status */}
        {status === 'success' && (
          <div className="border-t border-white/10 pt-8">
            <p className="text-green-400 text-sm">{t('success')}</p>
          </div>
        )}
        {status === 'error' && (
          <div className="border-t border-white/10 pt-8">
            <p className="text-red-400 text-sm">{t('error')}</p>
          </div>
        )}

        {/* Submit */}
        <div className="border-t border-white/10 pt-16 md:pt-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <p className="text-sm text-neutral-700 leading-relaxed">
            {t('privacyText')}{' '}
            <Link href="/legal" className="text-neutral-500 hover:text-white transition-colors underline underline-offset-4 decoration-white/20">
              {t('privacyLink')}
            </Link>.
          </p>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="group inline-flex items-center justify-center gap-4 bg-white text-black px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100 w-full md:w-auto"
          >
            {status === 'sending' ? t('sending') : t('submit')}
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </form>

    </div>
  );
};
