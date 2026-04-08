# Homepage Redesign — 2026-04-09

Honest review verdict: the current homepage is **too thin for a premium agency**. Architecture is right (minimal, editorial, no SaaS patterns) but density is wrong. Reads as "student portfolio polish," needs one more pass to land at "London premium agency."

## Current state (app/[locale]/page.tsx)

1. `<Hero />` — full dvh, headline only, bottom info strip
2. `<BrandStatement />` — one scroll-revealed sentence in `py-40 md:py-56` (~90% negative space)
3. `<WorkHome />` — 1 featured + 2 stacked cards = **3 projects total**
4. `<Clients />` — 5 client names on a single horizontal row (text only)
5. `<Footer />` — CTA, contact grid, bottom bar

Total scroll depth: ~4–5 viewports. Reaches footer in under 3 seconds.

## The problem — measured against reference studios

| Studio | Homepage density |
|---|---|
| Pentagram | Minimal hero + endless work feed (20+) |
| Area 17 | Hero + values + 12+ project grid + clients + capabilities + news |
| ManvsMachine | Minimal hero + **dense** work grid (10+) |
| Locomotive | Hero + about + work grid + services preview + awards + contact |
| Instrument | Hero + featured scroller + philosophy + capabilities + clients |

Common thread across every premium agency: **work volume + capabilities preview**. Even the most minimal studios carry the weight with a large work grid.

amda-f shows **3 projects** and no capabilities preview. Reads as "new agency with 3 clients," not "established studio curating."

## Keep (do not touch)

- Hero with **no CTA** — very right for the brand
- Big typography treatment
- BrandStatement scroll-reveal concept
- No persistent navbar CTA
- Minimal footer CTA
- `border-t border-white/10` editorial rhythm
- Black-on-black palette, Poppins display
- Staggered `animate-in` reveals

## Fixes (ordered by priority)

### 1. Expand WorkHome to 5–6 projects **(non-negotiable)**
- **File:** `components/WorkHome.tsx`, `data/projects.ts` (featured selection logic)
- **Problem:** 3 projects is below the credibility floor for a premium agency.
- **Approach:**
  - Keep the editorial/asymmetric layout — do NOT revert to a boring 3-column grid
  - Option A: 1 hero full-width + 2-up row + 2-up row (5 total)
  - Option B: 1 hero full-width + 2-up row + 3-up row with smaller thumbs (6 total)
  - Option C: Locomotive-style broken grid with offset heights
- **Constraint:** Must stay mobile-readable — already fixed `line-clamp-2 break-words` on title overlays. Verify at 320px with 6 cards.
- **Image pipeline:** Run `npm run generate-images` after adding new project thumbnails.

### 2. Add "What we do" capabilities section **(biggest trust signal for effort)**
- **New component:** `components/Capabilities.tsx`
- **Placement:** Between `<BrandStatement />` and `<WorkHome />`, OR after `<WorkHome />` before `<Clients />`
- **Style:** Editorial index — same large-type treatment as other sections, same `border-t border-white/10` rhythm. **No icons, no cards, no prices, no CTAs.**
- **Structure:**
  ```
  01  STRATEGY
      Positioning, research, brand architecture.

  02  DESIGN
      Identity, product design, art direction.

  03  DEVELOPMENT
      Web, e-commerce, bespoke platforms.
  ```
- **Translations:** Add `Capabilities` namespace to `messages/en.json` + `messages/de.json`.
- **Why it matters:** Right now visitors land on home and have no idea what you actually DO until they click /services. This is THE single biggest credibility lift a premium agency homepage can have.
- **Reference:** Pentagram, Area 17, Locomotive all do this.

### 3. Expand BrandStatement copy
- **File:** `components/BrandStatement.tsx`, `messages/en.json` `BrandStatement` namespace
- **Problem:** One sentence in a `py-40 md:py-56` section is 90% negative space. Reads "ran out of copy," not "confident."
- **Fix:** Add a small editorial label ("Approach" / "Ethos" / "Method") above the reveal text. Consider extending to 2–3 sentences — second sentence could be a specific commitment or differentiator (not a slogan).
- **Keep:** The word-by-word scroll reveal mechanic.

### 4. Decide on Clients section: commit or drop
- **File:** `components/Clients.tsx`
- **Problem:** 5 text-only names on a single row feels like filler.
- **Option A (commit):** Replace text with actual client logos in SVG. Weight, contrast, visual anchor. Arrange as a horizontal strip with equal sizing and generous negative space. Grayscale by default, color on hover (optional).
- **Option B (drop):** Remove entirely. Let the work grid speak — if projects have real client names visible on hover/in the card, that's enough.
- **Recommendation:** Option A if real client permission to use logos; Option B otherwise. Do not leave as-is.

### 5. Optional — Recognition strip
- **Placement:** Just above footer, or between Clients and Footer
- **Content:** "Featured in / Awards" — thin band with publication names or award badges (Awwwards, FWA, CSS Design Awards, etc.)
- **Rules:**
  - **Skip if there's nothing real** — fake recognition is worse than none
  - No self-promotional copy, just badges/names
  - Same `border-t border-white/10` rhythm
  - Zero hover animation — pure static trust signal

## New homepage structure (proposed)

```
1. Hero
2. BrandStatement (expanded copy + label)
3. Capabilities (NEW — editorial "what we do" index)
4. WorkHome (expanded to 5–6 projects)
5. Clients (committed with logos OR removed)
6. Recognition strip (optional, only if real)
7. Footer
```

Still minimal. Still no SaaS patterns. Still trusts the work to sell. Just enough density to establish credibility.

## Implementation plan

1. Expand `featured` array in `WorkHome.tsx` — pick 5–6 strongest projects from `data/projects.ts`. Verify thumbnails exist + run generate-images.
2. Design new layout for WorkHome (sketch first, then code). Consider asymmetric/broken grid.
3. Create `components/Capabilities.tsx` + translations.
4. Wire `<Capabilities />` into `app/[locale]/page.tsx`.
5. Expand `BrandStatement` copy in `messages/en.json` + `messages/de.json`.
6. Clients decision: source logos OR remove the component from homepage.
7. Recognition: collect real press/awards OR skip.
8. Mobile QA at 320/375/768/1024/1440.
9. Build, commit, push.

## Non-goals

- Do NOT add persistent navbar CTA
- Do NOT add hero CTA (was intentionally removed per `project-menu.md`)
- Do NOT add testimonials (SaaS pattern)
- Do NOT add "trusted by" with fake counts
- Do NOT add pop-ups, countdowns, urgency — see `visits-ideas.md`
- Do NOT add pricing on homepage
- Keep the concierge tone throughout
