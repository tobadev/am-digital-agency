# i18n + SEO Implementation Plan

## Locales
- EN (default, no prefix — `/`)
- DE (`/de/`)
- FR (`/fr/`)
- IT (`/it/`)

## Route Structure

| Page | EN | DE | FR | IT |
|------|----|----|----|----|
| Home | `/` | `/de` | `/fr` | `/it` |
| Services | `/services` | `/de/dienstleistungen` | `/fr/services` | `/it/servizi` |
| Work | `/work` | `/de/arbeiten` | `/fr/projets` | `/it/lavori` |
| Case Study | `/work/[slug]` | `/de/arbeiten/[slug]` | `/fr/projets/[slug]` | `/it/lavori/[slug]` |
| About | `/about` | `/de/ueber-uns` | `/fr/a-propos` | `/it/chi-siamo` |
| Contact | `/contact` | `/de/kontakt` | `/fr/contact` | `/it/contatto` |
| Legal | `/legal` | `/de/rechtliches` | `/fr/mentions-legales` | `/it/note-legali` |
| Impressum | — | `/de/impressum` | — | — |

Case study slugs (novabank, aura-home, etc.) stay same across all languages.

## Approach — Next.js Built-in (no external library)

Using official Next.js pattern from docs:
1. `[lang]` dynamic segment in app directory
2. JSON dictionary files for translations
3. Middleware for locale detection + localized route rewrites
4. `generateStaticParams` for static generation

## Steps

### 1. Install dependencies
```
npm i negotiator @formatjs/intl-localematcher server-only
npm i -D @types/negotiator
```

### 2. Create i18n config
- `i18n/config.ts` — locales array, default locale, route name mappings
- `i18n/dictionaries.ts` — `getDictionary(locale)` with dynamic imports

### 3. Create middleware.ts
- Detect locale from URL prefix or Accept-Language header
- Rewrite localized paths to internal English paths (e.g. `/de/kontakt` → `/de/contact`)
- EN has no prefix, stays at `/`
- Skip _next, static files, api routes

### 4. Restructure app directory
Move all pages under `app/[lang]/`:
```
app/
  [lang]/
    layout.tsx          ← html lang={lang}, font, navbar, generateStaticParams
    page.tsx            ← homepage
    services/page.tsx
    work/page.tsx
    work/[slug]/page.tsx
    about/page.tsx
    contact/page.tsx
    legal/page.tsx
    impressum/page.tsx  ← returns notFound() if lang !== 'de'
    not-found.tsx
  globals.css
  sitemap.ts
  robots.ts
```

### 5. Create translation files
```
i18n/dictionaries/
  en.json
  de.json
  fr.json
  it.json
```

Namespaced by section:
- common, nav, hero, brandStatement, about, services, contact, work, projects, footer, legal, impressum

ALL content translated — UI text, page copy, case studies (descriptions, challenges, solutions, results).

### 6. Update all components
- Server components: accept `dict` prop, replace hardcoded strings
- Client components: accept `dict` prop (serializable JSON from server)
- Pages call `getDictionary(lang)` and pass to components

### 7. Wire language switcher
- Navbar accepts current `lang` param
- Language buttons navigate to equivalent page in target locale
- Maps current path to localized path for target language

### 8. SEO
- `generateMetadata` per page with locale-specific title/description
- Open Graph tags (title, description, locale, url, siteName)
- `alternates.languages` for hreflang links
- `app/sitemap.ts` — all pages × 4 languages + DE impressum
- `app/robots.ts` — allow all, reference sitemap

### 9. Cleanup
Delete dead files:
- app/terms/, app/privacy/
- components/Terms.tsx, Privacy.tsx, ServicesHome.tsx, Process.tsx, Testimonials.tsx

## Files to Create
- i18n/config.ts
- i18n/dictionaries.ts
- i18n/dictionaries/en.json, de.json, fr.json, it.json
- middleware.ts
- app/[lang]/layout.tsx + all page.tsx files
- app/[lang]/impressum/page.tsx
- app/sitemap.ts
- app/robots.ts

## Files to Modify
- All 12 components — accept dict prop
- data/projects.ts — per-locale content
- components/Navbar.tsx — wire language switcher
