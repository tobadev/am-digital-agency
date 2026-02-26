# i18n Implementation — next-intl (Complete)

## Status: Implemented

## Locales
- **EN** (default, no prefix — `/`)
- **DE** (`/de/` with localized paths)

## Route Structure

| Page | EN | DE |
|------|----|----|
| Home | `/` | `/de` |
| Services | `/services` | `/de/dienstleistungen` |
| Work | `/work` | `/de/arbeiten` |
| Case Study | `/work/[slug]` | `/de/arbeiten/[slug]` |
| About | `/about` | `/de/ueber-uns` |
| Contact | `/contact` | `/de/kontakt` |
| Legal | `/legal` | `/de/rechtliches` |
| Impressum | — | `/de/impressum` |

Case study slugs stay the same across both languages.

## Architecture

Using `next-intl` with the following file structure:

### i18n Infrastructure
- `i18n/routing.ts` — `defineRouting()` with locales, `localePrefix: 'as-needed'`, pathname map
- `i18n/navigation.ts` — `createNavigation(routing)` exports `Link`, `usePathname`, `useRouter`, `getPathname`
- `i18n/request.ts` — `getRequestConfig()` that loads `messages/{locale}.json`
- `middleware.ts` — `createMiddleware(routing)` with matcher
- `next.config.ts` — wrapped with `createNextIntlPlugin`

### Message Files
- `messages/en.json` — all UI strings, namespaced by component
- `messages/de.json` — German translations, same structure
- Namespaces: Navbar, Hero, BrandStatement, WorkHome, WorkPage, CaseStudy, Services, About, Contact, Clients, Footer, Legal, Impressum, NotFound, Metadata, projects

### App Directory
```
app/
  layout.tsx              ← passthrough root layout
  globals.css
  sitemap.ts
  robots.ts
  [locale]/
    layout.tsx            ← NextIntlClientProvider, generateStaticParams
    page.tsx              ← home
    not-found.tsx
    services/page.tsx
    work/page.tsx
    work/[slug]/page.tsx
    about/page.tsx
    contact/page.tsx
    legal/page.tsx
    impressum/page.tsx    ← notFound() if locale !== 'de'
```

### Components
- **Client components** use `useTranslations('Namespace')`: Hero, BrandStatement, WorkHome, Work, CaseStudy, Services, About, Contact, Navbar
- **Server components** use `getTranslations('Namespace')`: Footer, Legal, Clients
- All internal links use `Link` from `@/i18n/navigation`
- Navbar language switcher uses `useRouter` from `@/i18n/navigation` + `useLocale()`

### SEO
- `generateMetadata` on every page with locale-specific title/description and hreflang alternates
- `app/sitemap.ts` — all pages × 2 locales + DE-only impressum
- `app/robots.ts` — allow all, reference sitemap
