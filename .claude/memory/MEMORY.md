# Project Memory: events-template-content-island

## Stack
- Astro 5 + TypeScript
- Tailwind CSS v4 (@tailwindcss/vite plugin)
- DaisyUI v5 (@plugin "daisyui" in CSS)
- Content Island CMS (@content-island/api-client)
- Path alias: `#/` → `./src/`

## Architecture
- Pods pattern: `src/pods/{pod-name}/`
  - `api/{name}.api-model.ts` — CMS DTOs
  - `api/{name}.api.ts` — API fetchers (always wrap in try/catch)
  - `{name}.model.ts` — view models
  - `{name}.mapper.ts` — pure mapping functions
  - `{name}.pod.astro` — main component
  - `components/*.astro` — sub-components

## CMS Content Types (IT Event V1)
- Header: eventName, NavigationItems[], ctaText, ctaUrl
- NavigationItem: label, url
- InfoBar: venueName, venueLocation, addToCalendarUrl, shareLinkUrl
- SpeakersSection: title, SpeakersItems[]
- SpeakerItem: name, jobTitle, company, description, imageUrl (Media), SocialLinks[]
- FAQSection, ScheduleSection, SponsorsSection, Theme, Font, Footer, StatsBar also available

## Key Files
- `src/lib/client.ts` — Content Island client (uses CONTENT_ISLAND_ACCESS_TOKEN)
- `src/styles/global.css` — Tailwind + DaisyUI + CSS variables
- `src/layouts/layout.astro` — base layout with Navbar pod
- `src/pages/index.astro` — composes Hero + Speakers pods

## Design System
- Theme: "jsconf" (dark)
- Background: #111111, Accent: #f7df20, Text: #fff, Secondary text: #8c8c8c
- Fonts: Space Grotesk (titles), Inter (body)
- DaisyUI custom theme defined via `@plugin "daisyui/theme"`

## Notes
- API calls must be wrapped in try/catch — CMS returns empty body (not null) when no content
- `@import url(...)` for Google Fonts must come BEFORE `@import "tailwindcss"` in CSS
- TS path alias errors in IDE are false positives — build works correctly
