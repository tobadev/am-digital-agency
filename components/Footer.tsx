import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { getLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

const navLinkKeys = [
  { key: 'home', href: '/' as const },
  { key: 'services', href: '/services' as const },
  { key: 'work', href: '/work' as const },
  { key: 'about', href: '/about' as const },
  { key: 'contact', href: '/contact' as const },
];

const clients = [
  'Calem AI',
  'KRONBERG Zeithaus',
  'Costae AI',
  'Dachreach',
  'Clyra.biz',
];

export const Footer: React.FC = async () => {
  const t = await getTranslations('Footer');
  const locale = await getLocale();

  return (
    <footer className="bg-brand-black text-white px-6 md:px-10">

      {/* CTA */}
      <div className="border-t border-white/10 pt-32 md:pt-44 pb-32 md:pb-44">
        <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-8 block">{t('nextStep')}</span>
        <h2 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold leading-[0.88] tracking-tight mb-16">
          {t('cta_line1')}<br />{t('cta_line2')}
        </h2>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform"
        >
          {t('startProject')}
          <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* Info grid — 4 columns */}
      <div className="border-t border-white/10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 md:gap-8">

        {/* Contact + Offices */}
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/am-logo-footer.svg" alt="AM Digital" className="h-8 w-auto block mb-8" />
          <
            href="mailto:hello@amdigital.agency"
            className="group flex items-center gap-2 text-white text-base font-medium hover:text-neutral-300 transition-colors mb-3"
          >
            hello@amdigital.agency
            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="tel:+447782265977"
            className="text-sm text-neutral-500 hover:text-white transition-colors block mb-10"
          >
            +44 7782 265977
          </a>
          <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 block mb-2 mt-8">Offices</span>
          <p className="text-sm text-neutral-400 tracking-wide">{t('offices')}</p>
        </div>

        {/* Navigation */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 block mb-6">{t('navigation')}</span>
          <div className="flex flex-col gap-3">
            {navLinkKeys.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-400 hover:text-white transition-colors"
              >
                {t(`navLinks.${link.key}`)}
              </Link>
            ))}
          </div>
        </div>

        {/* Selected clients */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 block mb-6">{t('clientsLabel')}</span>
          <div className="flex flex-col gap-3">
            {clients.map((client) => (
              <span key={client} className="text-sm text-neutral-400">
                {client}
              </span>
            ))}
          </div>
        </div>

        {/* Socials */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 block mb-6">{t('socials')}</span>
          <div className="flex flex-col gap-3">
            <a
              href="https://facebook.com/amdigitalagencyuk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/amdigitalagencyuk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/amdigitalagencyuk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-neutral-700 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} {t('copyright')}
        </p>
        <div className="flex items-center gap-6">
          <Link href="/legal" className="text-[10px] text-neutral-700 uppercase tracking-widest hover:text-white transition-colors">
            {t('legal')}
          </Link>
          {locale === 'de' && (
            <Link href="/impressum" className="text-[10px] text-neutral-700 uppercase tracking-widest hover:text-white transition-colors">
              Impressum
            </Link>
          )}
        </div>
      </div>

    </footer>
  );
};
