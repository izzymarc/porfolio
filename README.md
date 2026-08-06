# Ezekiel Funom Gwamna — Portfolio Website

A modern, responsive portfolio website for Ezekiel Funom Gwamna, Software Engineer & Data Analyst.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite 5, Tailwind CSS, shadcn/ui (Radix primitives)
- **Routing**: React Router (`HashRouter`)
- **Animation**: Framer Motion
- **Data/Forms**: TanStack Query, React Hook Form, Zod
- **Charts**: Recharts
- **Contact form**: EmailJS (client-side, no backend required)
- **Hosting**: Netlify

An Express + Drizzle server lives in `server/` from an earlier iteration. It is **not**
part of the deployed build — Netlify builds the `client/` directory only.

## Features

- Responsive design across all device sizes
- Light/dark mode toggle
- Contact form that sends email directly from the client via EmailJS
- Scroll-to-top on route change
- Long-lived immutable caching for hashed assets
- SEO metadata

## Project Structure

```
├── client/                  # Vite React app (this is what gets deployed)
│   ├── src/
│   │   ├── components/      # UI components (incl. shadcn/ui)
│   │   ├── pages/           # Route-level pages
│   │   ├── constants/       # data.ts — personal info, projects, skills
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utilities
│   │   └── assets/          # Images
│   ├── public/              # Static files copied verbatim to the build
│   │   ├── resume.pdf
│   │   ├── _routes.json
│   │   └── public/          # _headers and _redirects
│   └── scripts/             # Build helper scripts
├── server/                  # Legacy Express API (not deployed)
├── shared/                  # Shared types
└── dist/public/             # Build output
```

All site content — bio, experience, education, certifications, projects — is edited in
a single file: `client/src/constants/data.ts`.

## Getting Started

### Prerequisites

- Node.js 18+ (Netlify builds with 18.19.0, pinned in `netlify.toml`)
- npm

### Development

```bash
cd client
npm install
npm run dev
```

The site runs at `http://localhost:5000`.

### Production Build

From the repository root:

```bash
npm run build
```

This runs `npm ci` in `client/`, type-checks with `tsc`, builds with Vite, then copies
the result to `dist/public/`. The root `dist/` is cleared first so no stale bundles
survive between builds.

Preview the built output:

```bash
npm run preview
```

## Environment Variables

The contact form needs these set in Netlify (Site settings → Environment variables):

| Variable | Purpose |
| --- | --- |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |

The EmailJS template expects `{{name}}`, `{{email}}`, `{{subject}}`, and `{{message}}`.

Only variables prefixed with `VITE_` are exposed to the client bundle. Never put a
private key or secret in a `VITE_`-prefixed variable — it ships to the browser.

## Deployment

Netlify builds from `netlify.toml`:

- **Base directory**: `client`
- **Build command**: `npm run build`
- **Publish directory**: `dist/public`
- **Node version**: `18.19.0`

Push to `main` and Netlify deploys automatically.

### Demo Projects

The three showcased projects deploy as separate Netlify sites, linked from
`demoUrl` fields in `client/src/constants/data.ts`.

## License

MIT
