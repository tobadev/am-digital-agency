# Changelog

## 2026-06-24

### Team
- Renamed Aleksa Velickovic → Isabella Smith, updated email to `ismith@amdigital.agency`
- Added David Johnson as Project Manager (`djohnson@amdigital.agency`)
- Bumped `teamCount` from 4 → 5 in `About.tsx`

### Copy
- Values heading: "Principles, not processes." → "The standards we keep."
- Team tagline: "Senior output." → "Big results."

### About Page
- Redesigned all sections with distinct layouts (stats grid, team rows, clients hover reveal, values 2-col grid)
- Removed all entrance slide-in animations site-wide
- Fixed hero: split layout → full-bleed stacked title with description below

### Layout — Full Width
- Removed `max-w` containers from all components: Hero, BrandStatement, Capabilities, WorkHome, Clients, About, Services, Work, Contact, Footer, CaseStudy

### Homepage Work Grid
- Rebuilt WorkHome grid: asymmetric 2×2 with fixed `40vw` row heights (`grid-cols-[3fr_2fr]` / `grid-cols-[2fr_3fr]`)

### Case Study Page
- Hero: `aspect-[16/9]` → `aspect-[2/1] max-h-[85vh]`
- Gallery: stacked full-width → side-by-side `grid-cols-2`
- Results: side-label layout → label above, full-width 3-col grid, numbers at `text-6xl`
- Meta row (client/year/services): tiny text → `text-lg` grid layout
- Section labels: `text-[10px] text-neutral-700` → `text-xs text-neutral-500`
- Next project: title + arrow → full thumbnail preview with overlay

### Project Setup
- Created `CLAUDE.md` with shortcuts and project notes

## 2026-06-24 (continued)

### Footer
- CTA: "Let's build something great." → "Ready when you are." + bumped heading to `text-9xl`
- Layout: 3-col → 4-col grid: Contact+Offices | Navigation | Selected Clients | Socials
- Offices: replaced full UK address with single line "London · New York · Belgrade"
- Added Selected Clients column: Calem AI, KRONBERG Zeithaus, Costae AI, Dachreach, Clyra.biz
- Section labels: `text-neutral-700` → `text-neutral-600`
- New JSON keys: `offices`, `clientsLabel`
