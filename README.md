# Jamie Ian Genovese — Visual Arts

Photography portfolio for Jamie Ian Genovese, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Tech stack

| Concern | Tool |
|---|---|
| Framework | [Astro 6](https://astro.build) — static output, zero JS by default |
| CSS | [Tailwind CSS 3](https://tailwindcss.com) |
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
├── assets/          # Gallery photos (daniela_*.jpg) — optimised to WebP at build
├── components/
│   └── Nav.astro    # Sidebar navigation with SVG social icons
├── layouts/
│   └── BaseLayout.astro  # HTML shell: meta, OG tags, font preconnect
├── pages/
│   ├── index.astro  # Horizontal-scroll gallery (home page)
│   ├── about.astro  # Bio + CV
│   ├── contact.astro # Contact form (Netlify Forms)
│   └── 404.astro    # Custom 404 page
├── styles/
│   └── global.css   # Tailwind directives + Google Fonts import
└── utils/
    ├── images.ts    # Image path sorting utility
    └── __tests__/
        └── images.test.ts
public/
└── img/             # Static assets: logo, social icons
```

## Deployment

The site deploys automatically to Netlify on every push to `master`.

1. Connect the GitHub repository to Netlify
2. Netlify picks up `netlify.toml` — no manual config needed
3. Set `NODE_VERSION = 20` (already set in `netlify.toml`)

To enable the contact form, make sure **Netlify Forms** is enabled in your Netlify site settings (it is on by default for sites built on Netlify).

## Content guide

### Adding / replacing gallery photos

1. Drop `daniela_N.jpg` files into `src/assets/`
2. The gallery page uses `import.meta.glob` to pick up all matching files automatically — no code changes needed
3. Images are sorted numerically by their filename index

### Updating nav section links

Edit the `navLinks` array in `src/components/Nav.astro`.

### Updating the About / CV page

Edit `src/pages/about.astro` — look for the `<!-- Add ... here -->` comments.

### Social media links

Edit the `<ul>` of social icon `<a>` tags in `src/components/Nav.astro`.
