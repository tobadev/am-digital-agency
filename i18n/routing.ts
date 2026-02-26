import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/services': {
      en: '/services',
      de: '/dienstleistungen',
    },
    '/work': {
      en: '/work',
      de: '/arbeiten',
    },
    '/work/[slug]': {
      en: '/work/[slug]',
      de: '/arbeiten/[slug]',
    },
    '/about': {
      en: '/about',
      de: '/ueber-uns',
    },
    '/contact': {
      en: '/contact',
      de: '/kontakt',
    },
    '/legal': {
      en: '/legal',
      de: '/rechtliches',
    },
    '/impressum': {
      en: '/impressum',
      de: '/impressum',
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
