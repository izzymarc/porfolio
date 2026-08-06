# Ezekiel Funom Gwamna — Portfolio Website

A modern, responsive portfolio website for Ezekiel Funom Gwamna, Software Engineer & Data Analyst.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite 5, Tailwind CSS, shadcn/ui (Radix primitives)
- **Routing**: React Router (`HashRouter`)
- **Animation**: Framer Motion
- **Data/Forms**: TanStack Query, React Hook Form, Zod
- **Charts**: Recharts
- **Contact form**: EmailJS (client-side, no backend required)
- **Hosting**: Cloudflare Pages (auto-deploys on push to `main`)

An Express + Drizzle server lives in `server/` from an earlier iteration. It is **not**
part of the deployed build — Cloudflare builds the client only.

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

- Node.js 18+ (Cloudflare Pages builds with Node 18)
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

The contact form needs these set in the Cloudflare Pages project
(Settings → Environment variables):

| Variable | Purpose |
| --- | --- |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |

The EmailJS template expects `{{name}}`, `{{email}}`, `{{subject}}`, and `{{message}}`.

Only variables prefixed with `VITE_` are exposed to the client bundle. Never put a
private key or secret in a `VITE_`-prefixed variable — it ships to the browser.

## Deployment

### Main site — Cloudflare Pages

The portfolio is hosted on **Cloudflare Pages** at `ezekielgwamna.pages.dev`, connected
directly to this GitHub repo (`izzymarc/porfolio`). Pushing to `main` triggers an
automatic build and deploy — there is no manual deploy step.

Build settings configured in the Cloudflare dashboard:

- **Build command**: `npm run build`
- **Build output directory**: `dist/public`
- **Production branch**: `main`
- **Node version**: `18`

Client-side routing is handled by `_redirects` (`/* /index.html 200`), and security
plus caching headers come from `_headers`. Both live in `client/public/public/` and are
emitted to the root of the build output. See `CLOUDFLARE_DEPLOYMENT.md` for full setup.

### Demo projects — Netlify

The three showcased projects are **separate repositories** deployed independently on
Netlify. The portfolio links out to them via the `demoUrl` fields in
`client/src/constants/data.ts`:

| Project | Repository | Live demo |
| --- | --- | --- |
| E-Commerce (ShopSphere) | `izzymarc/ecommerce` | `grand-marzipan-bfe7f4.netlify.app` |
| AI Content Manager | `izzymarc/ai-cms` | `timely-mochi-688563.netlify.app` |
| Finance Dashboard | `izzymarc/finance-dashboard` | `gilded-kringle-e999bc.netlify.app` |

Each of those repos owns its own `netlify.toml` and Netlify site ID. Nothing in this
repository deploys to Netlify — the root `netlify.toml` here is a leftover from an
earlier hosting experiment.

## License

MIT
