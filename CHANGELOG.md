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

## 2026-06-24 (session 3)

### Footer
- Contact column: email → `text-white text-base font-medium` (primary action), phone demoted to `text-neutral-500`, offices get own labeled sub-section with `border-t` separator

### Services Page
- Removed `w-40` spacer column — replaced with `grid-cols-[1fr_3fr]` ghost number accent (later removed entirely)
- Ghost "01" number column removed after fe review — user confirmed it looked bad
- Description: removed `md:columns-2` split (was cutting text mid-sentence)
- Final layout per fe: number+meta in top row (number tiny left, timeline+idealFor right), title at `md:w-3/4`, 2-col below (description left, deliverables as bordered list right)
- Removed all `animate-in slide-in-from-bottom-4` entrance animations
- Removed all `group-hover:translate-x-*` from text site-wide: Capabilities, Work, About (×2), Navbar, CaseStudy

### Contact Page
- Labels moved above inputs (was `w-40` side column) — inputs now full width
- Services changed from single-select (`string`) to multi-select (`string[]`) with toggle logic
- API payload: `service` → `services` (array)
- All entrance animations removed

### Work Page
- `w-12` spacer column removed — number now inline with title
- Thumbnail: full width, `sizes="calc(100vw - 80px)"`, no indent
- Title row: `flex justify-between items-end` — number+title left, category+year+arrow right
- Description: 2-col grid, left empty, description right — editorial caption alignment under meta
- All entrance animations removed

### Spacing
- All inner pages (`pt-24 md:pt-32` → `pt-40 md:pt-56`): Services, Contact, About, Work, CaseStudy

### Rules
- Added to `CLAUDE.md`: always consult `fe` skill before any UI/layout change

## 2026-06-25

### About Page — Hero
- Description: dropped `flex items-start gap-6` + `w-12 h-px` line accent + `max-w-lg` constraint
- New: `flex justify-end mt-12` — description right-anchored with `border-l border-white/15 pl-6 max-w-sm md:max-w-md`
- Editorial tension: massive left headline vs right-offset descriptor

### About Page — Stats
- Removed equal-weight card grid (`gap-px bg-white/5`, hover bg, `p-10 md:p-14`)
- New: borderless editorial strip — `divide-x divide-white/8 border-t border-white/8`
- `21+` stays at `text-9xl` display with counter; `London, UK` and `Globally` at `text-3xl` as plain facts (not metrics)
- Removed `statsCount` variable (no longer needed)

### Hero — Bottom Strip
- Dropped "AM Digital Agency" label — redundant on your own homepage
- Kept: `London, UK — Est. 2023` (left) + `Strategy / Design / Development` (right)

### Hero — Heading
- Added `mb-2 md:mb-4` breath between line 1 ("We build digital") and line 2 ("products that work.")
- Lines 2–3 stay tight at `leading-[0.92]` — set-up / payoff rhythm

### Services — Sectors
- Trimmed from 8 → 5: dropped Healthcare, Real Estate, Enterprise (unproven for a 5-person agency)
- Kept: SaaS & Platforms, FinTech, B2B, Startups, E-commerce — matches actual client roster
- Tested slash-separated display text format; reverted — user preferred pills
- Pills restored at 5 items

## 2026-06-24 (session 4)

### Work Page
- Hero was in `app/[locale]/work/page.tsx` — had `max-w-5xl mx-auto` container, wrong heading size, entrance animation, `max-w-3xl` on description
- Fixed: removed `max-w-5xl`, heading → `clamp(3rem,11vw,12rem)`, second line dimmed `text-neutral-500`, label → `text-[10px] tracking-[0.4em]`, description full width, animation removed
- Removed `pt-40 md:pt-56` from `Work.tsx` component (was double-padding with the page hero)
