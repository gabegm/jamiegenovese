# Jamie Ian Genovese — Visual Arts

Photography portfolio for Jamie Ian Genovese, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Tech stack

| Concern | Tool |
|---|---|
| Framework | [Astro 6](https://astro.build) — static output, zero JS by default |
| CSS | [Tailwind CSS 4](https://tailwindcss.com) — theme tokens defined in `global.css` via `@theme` |
| Image optimisation | Astro `<Image>` + [sharp](https://sharp.pixelplumbing.com) — JPGs → WebP at build time |
| Contact form | [Netlify Forms](https://docs.netlify.com/forms/setup/) — no backend required |
| Testing | [Vitest](https://vitest.dev) |
| Hosting | [Netlify](https://netlify.com) (config in `netlify.toml`) |

## Getting started

```bash
npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # production build → dist/
npm run preview   # preview the production build locally
npm test          # run unit tests
```

## Project structure

```
src/
├── assets/
│   └── galleries/           # One folder per gallery section
│       ├── portraits/        # Drop photos here — picked up automatically
│       ├── fashion/
│       ├── landscape/
│       ├── street/
│       ├── abstract/
│       ├── editorial/
│       ├── events/
│       └── projects/
├── components/
│   └── Nav.astro             # Sidebar navigation with SVG social icons
├── data/
│   └── sections.ts           # Single source of truth for gallery sections
├── layouts/
│   └── BaseLayout.astro      # HTML shell: meta, OG tags, font preconnect
├── pages/
│   ├── gallery/
│   │   └── [slug].astro      # Dynamic route — generates all 8 section pages
│   ├── index.astro           # Horizontal-scroll gallery (home page, all photos)
│   ├── about.astro           # Bio + CV
│   ├── contact.astro         # Contact form (Netlify Forms)
│   └── 404.astro             # Custom 404 page
├── styles/
│   └── global.css            # Tailwind v4 entry point: @theme tokens, dark mode variant, base styles
└── utils/
    ├── images.ts             # Image sorting utilities
    └── __tests__/
        └── images.test.ts
public/
└── img/                      # Static assets: logo, social icons
```

## CI / CD

### GitHub Actions

| Workflow | Trigger | What it does |
|---|---|---|
| `ci.yml` | Every push & PR | Install → test → build; acts as a merge gate |
| `deploy.yml` | Push to `master` | Same as CI, then deploys to **GitHub Pages** |

**To enable GitHub Pages deployment:**
1. Go to **Settings → Pages** in your GitHub repo
2. Set *Source* to **GitHub Actions**
3. Push to `master` — the `deploy.yml` workflow handles the rest

The deploy workflow uses `actions/configure-pages` to automatically set the correct
`base` path (e.g. `/jamiegenovese`) so asset URLs work whether the site lives at a
subdirectory or a custom domain.

### Dependabot

`.github/dependabot.yml` opens weekly PRs to keep dependencies current:

- **npm** packages — Astro and Tailwind updates are grouped into single PRs
- **GitHub Actions** — workflow action versions are updated separately

## Deployment

### Netlify (alternative)

The repo also includes `netlify.toml` for one-click Netlify deployment:

1. Connect the GitHub repository to Netlify
2. Netlify picks up `netlify.toml` — no manual config needed

To enable the contact form, make sure **Netlify Forms** is enabled in your Netlify site settings (it is on by default for sites built on Netlify).

## Content guide

### Adding photos to a gallery section

Each section has its own folder under `src/assets/galleries/`:

```
src/assets/galleries/
├── portraits/    ← drop portrait photos here
├── fashion/
├── landscape/
├── street/
├── abstract/
├── editorial/
├── events/
└── projects/
```

**To add photos:**
1. Copy your image files (`.jpg`, `.jpeg`, `.png`, or `.webp`) into the relevant folder
2. Commit and push — the site rebuilds automatically on Netlify

Photos are sorted alphabetically by filename, so prefix them to control order:
```
001_studio-shoot.jpg
002_outdoor.jpg
003_closeup.jpg
```

The site automatically converts all images to WebP and applies lazy loading — no extra steps needed.

**Empty sections** show a "No photos yet" message until photos are added.

### Updating nav section links or labels

Edit `src/data/sections.ts` — this is the single source of truth for the 8 gallery sections (slug, label, page description).

### Updating the About / CV page

Edit `src/pages/about.astro` — look for the `<!-- Add ... here -->` comments.

### Social media links

Edit the social icon `<ul>` in `src/components/Nav.astro`.
