# Astro + Content Island — Events Template

A template for building event websites powered by [Astro](https://astro.build) and [Content Island](https://contentisland.io). Includes pre-built sections for hero, schedule, speakers, sponsors, FAQ, and more.

## Stack

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [DaisyUI](https://daisyui.com)
- [Content Island API Client](https://contentisland.net/)

## Project Structure

```
src/
├── layouts/        # Base HTML layouts
├── lib/            # Shared utilities and API clients
├── pages/          # Astro pages (routes)
├── pods/           # Feature pods (UI + logic by section)
│   ├── hero/
│   ├── header/
│   ├── footer/
│   ├── schedule/
│   ├── speakers/
│   ├── sponsors/
│   ├── stats-bar/
│   ├── info-bar/
│   ├── faq/
│   └── theme/
├── shared/         # Shared components
└── styles/         # Global styles
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Create a `.env` file at the root:

```env
CONTENT_ISLAND_ACCESS_TOKEN=your_token_here
```

You can obtain an access token from your Content Island project settings.

### 3. Run the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

## Architecture

This project follows the **PODS pattern** — each section of the site is an isolated pod with its own UI components, API mapping, and business logic. See `src/pods/` for examples.

Content is fetched server-side via the `@content-island/api-client` package and mapped to typed models before being passed to Astro components.
