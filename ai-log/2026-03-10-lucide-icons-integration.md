# Lucide Icons IntegrationYa, claro

**Date:** 2026-03-10
**Type:** Cross-cutting UI infrastructure

## Summary

Replaced all inline SVG icons with Lucide components and introduced a shared `SocialIcon` component for dynamic social network icon rendering.

## Changes

### Package added
- `lucide-astro` — native Astro components for Lucide icons

### New file
- `src/shared/components/social-icon.astro` — maps social network tag strings (from Content Island API) to their Lucide icon. Falls back to `Globe` for unknown networks. Supported: Twitter/X, LinkedIn, GitHub, Instagram, YouTube, Facebook, Twitch, Slack.

### SVG replacements
| File | Old SVG | Lucide icon |
|------|---------|-------------|
| `header.pod.astro` | Hamburger menu | `Menu` |
| `hero.pod.astro` | Calendar | `Calendar` |
| `info-bar.pod.astro` | Location pin | `MapPin` |
| `info-bar.pod.astro` | Add to calendar | `CalendarPlus` |
| `info-bar.pod.astro` | Share | `Share2` |

### Social links (text → icon)
- `footer.pod.astro` — social link text labels replaced with `SocialIcon` + `aria-label`
- `speakers/components/speaker-card.astro` — badge text labels replaced with `SocialIcon` icon links

## Architectural notes

- `src/shared/` directory created as the canonical location for cross-pod reusable components.
- `SocialIcon` uses dynamic Astro component selection via variable assignment, which Astro supports natively.
- All icon sizes passed as props, keeping components flexible across different contexts.
