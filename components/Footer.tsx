import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

const navLinkKeys = [
  { key: 'home', href: '/' as const },
  { key: 'services', href: '/services' as const },
  { key: 'work', href: '/work' as const },
  { key: 'about', href: '/about' as const },
  { key: 'contact', href: '/contact' as const },
];

export const Footer: React.FC = async () => {
  const t = await getTranslations('Footer');

  return (
    <footer className="bg-brand-black text-white px-6 md:px-10">
      <div className="max-w-5xl mx-auto">

        {/* CTA */}
        <div className="border-t border-white/10 pt-32 md:pt-44 pb-32 md:pb-44">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-8 block">{t('nextStep')}</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-12">
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

        {/* Info grid */}
        <div className="border-t border-white/10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-16 md:gap-12">

          {/* Contact + Address */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-700 block mb-6">{t('contact')}</span>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@amdigital.agency"
                className="text-sm text-neutral-400 hover:text-white transition-colors"
              >
                hello@amdigital.agency
              </a>
              <div className="text-sm text-neutral-400 leading-relaxed mt-2">
                <span className="block">{t('address_line1')}</span>
                <span className="block">{t('address_line2')}</span>
                <span className="block">{t('address_line3')}</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-700 block mb-6">{t('navigation')}</span>
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

          {/* Socials */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-700 block mb-6">{t('socials')}</span>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-neutral-700 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} {t('copyright')}
          </p>
          <Link href="/legal" className="text-[10px] text-neutral-700 uppercase tracking-widest hover:text-white transition-colors">
            {t('legal')}
          </Link>
        </div>

      </div>
    </footer>
  );
};
