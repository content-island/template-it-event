# General guidelines

- Use Tailwind CSS v4 and DaisyUI for all styling needs.
- Use semantic HTML5 elements and follow accessibility best practices.
- Design for mobile-first, ensuring a responsive experience across all devices.
- Use the astro-pods skill to structure the codebase and define responsibilities by layer.
- Use the content-island skill to fetch and render content, strictly following its security rules and allowed API surface.
- Use colors and theming like a professional designer, ensuring good contrast and a visually appealing palette, do not use IA like apporach.

# AI Logbook Rules

This project uses an **AI Logbook** to track high-impact interactions with AI assistants.

The logbook is located at:

- `ai-log/`

Its purpose is to provide **traceability, historical context, and architectural continuity**.

---

## When to Create a Log Entry

A log entry **MUST be created** when any of the following occurs:

- Architectural decisions or changes
- Introduction or modification of core patterns (e.g. PODS, layering, folder structure)
- Large refactors affecting multiple files or domains
- Cross-cutting concerns (shared utilities, infra, data flow)
- Explicit requests for plans, roadmaps, or step-by-step strategies
- Any request described as _“big”, “structural”, or “foundational”_

Small, tactical, or purely local changes **must NOT** be logged.
