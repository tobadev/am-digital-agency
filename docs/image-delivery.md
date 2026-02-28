# Image Delivery

Responsive image system for serving optimally-sized images to every device.

## How it works

Each source image in `public/projects/` has pre-generated variants at 3 breakpoints:

| Variant | Width | Use case |
|---------|-------|----------|
| `-640w` | 640px | Mobile phones |
| `-960w` | 960px | Tablets, small laptops |
| `-1280w` | 1280px | Standard desktops |
| original | 1920px | Large/retina displays |

The browser picks the smallest variant that fits the viewport via `srcSet` + `sizes` on each `<img>` tag.

## File structure

```
public/projects/calem-ai/
├── hero.webp          ← original (1920px, ~70KB)
├── hero-640w.webp     ← mobile  (~21KB)
├── hero-960w.webp     ← tablet  (~37KB)
├── hero-1280w.webp    ← desktop (~47KB)
├── 2nd.webp
├── 2nd-640w.webp
├── 2nd-960w.webp
├── 2nd-1280w.webp
└── ...
```

Same pattern for every project folder.

## Components using responsive images

All use the `getSrcSet()` helper from `lib/responsive-image.ts`:

- **`WorkHome.tsx`** — homepage project cards
- **`Work.tsx`** — work listing page thumbnails
- **`CaseStudy.tsx`** — case study hero + gallery images

### sizes attribute per context

| Component | `sizes` value | Reasoning |
|-----------|--------------|-----------|
| WorkHome (cards) | `(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px` | Cards are full-width on mobile, 2-col on desktop |
| Work (listing) | `(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 960px` | Images span most of the page width |
| CaseStudy (hero/gallery) | `(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1120px` | Full-bleed images in max-w-5xl container |

## Adding or updating images

When you add a new project image or replace an existing one:

```bash
npm run generate-images
```

This runs `scripts/generate-responsive-images.mjs` which:
1. Scans `public/projects/` for all `.webp` files
2. Skips files that already match the `-{width}w.webp` naming pattern (variants)
3. Skips variants that are already up-to-date (newer than source)
4. Generates missing/outdated variants using sharp at quality 80

**Commit the generated variants to git.** They are served as static assets on Vercel — no build-time generation needed.

## Deployment (Vercel)

The variants are committed to the repo and deployed as static files. The build command is just `next build` — no image generation step required. Vercel serves them from its edge CDN with automatic caching.

## Helper API

```ts
import { getSrcSet } from '@/lib/responsive-image';

// Input:  "/projects/calem-ai/hero.webp"
// Output: "/projects/calem-ai/hero-640w.webp 640w,
//          /projects/calem-ai/hero-960w.webp 960w,
//          /projects/calem-ai/hero-1280w.webp 1280w,
//          /projects/calem-ai/hero.webp 1920w"
```

## Savings

| Image | Original | 640w | Reduction |
|-------|----------|------|-----------|
| calem-ai/hero | 70KB | 21KB | -70% |
| costae-ai/hero | 90KB | 21KB | -77% |
| kronberg/hero | 53KB | 12KB | -77% |
| dachreach/hero | 37KB | 9KB | -76% |
| clyra-biz/hero | 46KB | 10KB | -78% |

Mobile users download ~70-78% less image data.
