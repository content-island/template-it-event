# Design Token System — Complete Style Review

**Date:** 2026-03-09
**Type:** Architecture / Cross-cutting Concern
**Scope:** `src/styles/global.css` + all pods

---

## Context

Full style audit of the events-template-content-island project. The codebase was using raw Tailwind utility classes directly in every component, leading to:
- Scattered opacity variants (`/40`, `/50`, `/60`, `/70`) for text hierarchy
- Inconsistent transition durations (`200ms` vs `300ms` on similar interactions)
- Duplicated section layout patterns across 7+ pods
- No single source of truth for design decisions

---

## Decision

Introduce a **design token layer** in `global.css` using Tailwind CSS v4 `@utility` and CSS custom properties in `:root`. This replaces repeated inline patterns with semantic, named utilities.

---

## Token System Defined

### CSS Custom Properties (`:root`)

| Token | Value | Intent |
|---|---|---|
| `--border-subtle` | `base-300 @ 40%` | Card borders, section dividers |
| `--border-medium` | `base-300 @ 60%` | Header, avatar rings |
| `--border-focus`  | `primary @ 30%`  | Hover state borders |
| `--duration-ui`   | `200ms` | Color/opacity changes |
| `--duration-hover`| `300ms` | Card borders, backgrounds |
| `--duration-motion`| `500ms` | Scale/transform animations |

### `@utility` Classes

**Layout**
- `section-container` → `max-w-6xl mx-auto px-6`
- `section-padding` → `py-24`
- `section-header` → `text-center mb-16`

**Typography**
- `section-title` → `text-4xl font-bold text-base-content font-(--font-title) tracking-tight`
  (pair with `md:text-5xl` on the element for responsive sizing)
- `section-description` → `text-base-content/60 mt-4 leading-relaxed`
- `text-muted` → `text-base-content/60` (descriptions, secondary info)
- `text-subtle` → `text-base-content/50` (labels, metadata)
- `text-faint` → `text-base-content/40` (footer copyright, disabled)

**Cards / Surfaces**
- `card-surface` → neutral card (bg-base-200, border-base-300/40, rounded-lg)
- `card-interactive` → card-surface + hover border lift (duration-300)
- `card-elevated` → bg-base-300/30 tint, same hover (used for FAQ, elevated surfaces)

**Interaction**
- `link-hover-primary` → `transition-colors duration-200 hover:text-primary`
- `divider-fade` → `h-px flex-1 bg-base-300/40` (tier separators, section rules)

---

## Inconsistencies Fixed

1. **Text opacity standardized** — `/70` occurrences normalized to `/60` (`text-muted`)
2. **Transition durations** — `duration-200` on card interactions → `duration-300`
3. **Border opacity** — speaker card `/60` border → `/40` (consistent with other cards; ring kept at `/60`)
4. **`prefers-reduced-motion`** — Added global media query for accessibility

---

## Files Changed

- `src/styles/global.css` — token definitions + new `@utility` classes
- `src/pods/hero/hero.pod.astro`
- `src/pods/speakers/speakers.pod.astro`
- `src/pods/speakers/components/speaker-card.astro`
- `src/pods/schedule/schedule.pod.astro`
- `src/pods/schedule/components/schedule-item.astro`
- `src/pods/faq/faq.pod.astro`
- `src/pods/faq/components/faq-item.astro`
- `src/pods/sponsors/sponsors.pod.astro`
- `src/pods/sponsors/components/sponsor-logo.astro`
- `src/pods/footer/footer.pod.astro`
- `src/pods/info-bar/info-bar.pod.astro`
- `src/pods/stats-bar/components/stat-item.astro`
- `src/pods/header/components/nav-item.astro`

---

## Future Notes

- Responsive section titles use `section-title` as base + `md:text-5xl` on the element
- Sponsor tier `cardBorder` strings remain inline in the pod (tier-specific, intentional)
- Hero section keeps unique spacing (`py-28 md:py-36`) — not using `section-padding`
