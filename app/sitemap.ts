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

  // Static pages × both locales
  for (const route of staticRoutes) {
    entries.push({
      url: `${BASE_URL}${route.en}`,
      alternates: {
        languages: {
          en: `${BASE_URL}${route.en}`,
          de: `${BASE_URL}${route.de}`,
        },
      },
    });
    entries.push({
      url: `${BASE_URL}${route.de}`,
      alternates: {
        languages: {
          en: `${BASE_URL}${route.en}`,
          de: `${BASE_URL}${route.de}`,
        },
      },
    });
  }

  // Project pages × both locales
  for (const project of projects) {
    const en = `/work/${project.slug}`;
    const de = `/de/arbeiten/${project.slug}`;
    entries.push({
      url: `${BASE_URL}${en}`,
      alternates: {
        languages: { en: `${BASE_URL}${en}`, de: `${BASE_URL}${de}` },
      },
    });
    entries.push({
      url: `${BASE_URL}${de}`,
      alternates: {
        languages: { en: `${BASE_URL}${en}`, de: `${BASE_URL}${de}` },
      },
    });
  }

  // DE-only: Impressum
  entries.push({
    url: `${BASE_URL}/de/impressum`,
  });

  return entries;
}
