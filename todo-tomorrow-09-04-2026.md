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

## SEO / branding

### 7. Fix favicon — appears small on Google search results
- **Files:** `public/favicon.svg`, `app/[locale]/layout.tsx:19`
- **Problem:** Google shows a tiny dark blob instead of a full-width mark because:
  1. SVG has `rx="15"` (rounded corners) → Google applies its own circular mask on top, so the visible area shrinks twice.
  2. The "Am" glyph only fills ~45% of the 64×64 canvas (sits around y=25–43) → barely legible at 16px.
  3. No `/favicon.ico` at public root → Google's crawler fetches this URL by convention regardless of `<link>` tags.
  4. No PNG variants or `apple-touch-icon.png` → mobile Google sometimes prefers a 180×180 PNG for result cards.
- **Fix:**
  1. Rewrite `favicon.svg`: remove `rx="15"` (fill whole square), scale the "Am" glyph to fill ~75–80% of the canvas.
  2. Export raster variants to `public/`:
     - `favicon.ico` (multi-res 16/32/48, at public root)
     - `favicon-96x96.png`
     - `favicon-192x192.png`
     - `apple-touch-icon.png` (180×180)
  3. Update `metadata.icons` in `app/[locale]/layout.tsx`:
     ```ts
     icons: {
       icon: [
         { url: '/favicon.ico', sizes: 'any' },
         { url: '/favicon.svg', type: 'image/svg+xml' },
         { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
         { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
       ],
       apple: '/apple-touch-icon.png',
     }
     ```
  4. After deploy, resubmit sitemap in Google Search Console to nudge recrawl. Google favicon updates take days to weeks — no instant refresh.
- **Note:** Can generate all PNG/ICO variants with a one-off sharp script, similar to `scripts/generate-responsive-images.mjs` but for the favicon.

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
