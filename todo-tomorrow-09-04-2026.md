# Todo — 2026-04-09

Deferred polish from the mobile-readiness audit (commits 96f2eee..HEAD). None of these are breakage; all are perf/UX refinements.

## Perf

### 1. BrandStatement scroll handler
- **File:** `components/BrandStatement.tsx:14`
- **Problem:** `window.addEventListener('scroll', ...)` fires on every scroll event, calls `getBoundingClientRect()` + `setState()`. Janky on mobile.
- **Fix:** Convert to `IntersectionObserver` with multiple thresholds, OR wrap the handler in `requestAnimationFrame`.

### 2. CaseStudy gallery videos autoplay concurrently
- **File:** `components/CaseStudy.tsx:144–152`
- **Problem:** Every `<video>` in a project gallery has `autoPlay` — 5 gallery videos = 5 concurrent decoders on mobile. Battery + memory cost.
- **Fix:** Remove `autoPlay`, use `IntersectionObserver` to `.play()` on intersect and `.pause()` on exit.

### 3. Hero LCP — preload scanner can't see background image
- **File:** `components/Hero.tsx:11–30`
- **Problem:** Inline `<style>` tag with media-query `background-image` means the hero URL isn't discoverable by Next.js's preload scanner or the browser's preloader.
- **Fix:** Add explicit `<link rel="preload" as="image" imagesrcset="..." imagesizes="...">` in the layout `<head>`, OR restructure hero to use a `<picture>` + `background-clip: text` pattern.

## UX nits

### 4. Contact form — autoComplete / inputMode
- **File:** `components/Contact.tsx` (inputs at lines ~93, 115, 136)
- **Problem:** Mobile gets a generic text keyboard; no browser autofill.
- **Fix:**
  - Name: `autoComplete="name"`
  - Email: `autoComplete="email" inputMode="email"`
  - Company: `autoComplete="organization"`
  - Message: (no autoComplete needed)

### 5. Footer grid at 768–900px range
- **File:** `components/Footer.tsx:37`
- **Problem:** `md:grid-cols-[2fr_1fr_1fr]` gives contact column too much room; socials column looks cramped.
- **Fix:** `md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr]` — even split at md, proportional at lg.

## Larger refactors (not urgent)

### 6. Migrate raw `<img>` → `next/image`
- **Files:** `Work.tsx`, `WorkHome.tsx`, `CaseStudy.tsx`
- **Problem:** Hand-rolled `srcSet` via `getSrcSet()` in `lib/responsive-image.ts` works but loses:
  - Automatic AVIF negotiation
  - Built-in blur placeholders
  - Next's LCP detection
  - Automatic `loading="lazy"` heuristics
- **Fix:** Replace with `next/image`, point it at the base `.webp`, let Next handle sizing. The `scripts/generate-responsive-images.mjs` pipeline can be retired.
- **Caveat:** Vercel image optimization uses bandwidth quota — verify the plan limits before migrating.
