import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';

const BASE_URL = 'https://amdigital.agency';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { en: '/', de: '/de' },
    { en: '/services', de: '/de/dienstleistungen' },
    { en: '/work', de: '/de/arbeiten' },
    { en: '/about', de: '/de/ueber-uns' },
    { en: '/contact', de: '/de/kontakt' },
    { en: '/legal', de: '/de/rechtliches' },
  ];

  const entries: MetadataRoute.Sitemap = [];

  // Static pages — both EN and DE entries with alternates
  for (const route of staticRoutes) {
    const alternates = {
      languages: {
        en: `${BASE_URL}${route.en}`,
        de: `${BASE_URL}${route.de}`,
        'x-default': `${BASE_URL}${route.en}`,
      },
    };
    entries.push({ url: `${BASE_URL}${route.en}`, alternates });
    entries.push({ url: `${BASE_URL}${route.de}`, alternates });
  }

  // Project pages — both EN and DE entries with alternates
  for (const project of projects) {
    const en = `/work/${project.slug}`;
    const de = `/de/arbeiten/${project.slug}`;
    const alternates = {
      languages: {
        en: `${BASE_URL}${en}`,
        de: `${BASE_URL}${de}`,
        'x-default': `${BASE_URL}${en}`,
      },
    };
    entries.push({ url: `${BASE_URL}${en}`, alternates });
    entries.push({ url: `${BASE_URL}${de}`, alternates });
  }

  // DE-only: Impressum
  entries.push({
    url: `${BASE_URL}/de/impressum`,
  });

  return entries;
}
