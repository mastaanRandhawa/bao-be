# Bao Bei — Website Redesign

A modern rebuild of the [Bao Bei Chinese Brasserie](https://www.bao-bei.ca/) website, built with **React + Vite + Tailwind CSS**.

The redesign preserves the restaurant's documented brand identity — the warm **cream** background, the **seal-red** chop, the **sage-green** accent, the bilingual (Chinese / pinyin / English) voice — while fixing the key UX gaps from the audit:

- **Native, responsive menus** replace the old download-only PDFs (PDF fallback retained).
- **Full brand lockup preserved on mobile** (the old site dropped to plain text).
- Prominent, persistent **Reserve** call-to-action.
- Homepage rebuilt into scannable sections: hero → awards → story → menu preview → family table → visit/map → bilingual motif.
- Michelin recognition surfaced instead of buried.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## GitHub Pages

**Live URL:** [https://mastaanrandhawa.github.io/bao-be/](https://mastaanrandhawa.github.io/bao-be/)  
(The path is `/bao-be/` — not `/bao-bei/`.)

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which:

1. Builds the Vite app with base path `/bao-be/`
2. Syncs the build to **`docs/`**, **`assets/`**, **`images/`**, and root **`index.html`** / **`404.html`**
3. Deploys via **GitHub Actions** (preferred)

The site works with **any** of these Pages sources:

| Source | Settings |
|--------|----------|
| **GitHub Actions** (best) | Settings → Pages → Source: **GitHub Actions** |
| **main / docs** | Branch: `main`, Folder: `/docs` |
| **main / (root)** | Branch: `main`, Folder: `/ (root)` — now works because root `index.html` is the built file |

### If you still see a blank white page

1. **Use the correct URL:** [https://mastaanrandhawa.github.io/bao-be/](https://mastaanrandhawa.github.io/bao-be/) — **`/bao-bei/` does not exist** (404).
2. Hard-refresh: `Ctrl+Shift+R` (clears cached broken HTML).
3. Confirm Pages source is one of the options above (not an old `gh-pages` branch).

### Local production build (matches GitHub Pages)

```bash
npm run build    # production build → dist/ (always uses /bao-be/ base path)
npm run preview  # preview at http://localhost:4173/bao-be/
```

## Project structure

```
src/
├── components/
│   ├── layout/     # Navbar, Footer, Layout shell
│   ├── shared/     # HoursList, MapEmbed, AddressBlock
│   ├── ui/         # Reusable primitives (Button, Logo, Accordion, …)
│   ├── home/       # Homepage sections
│   └── menu/       # Menu item row
├── data/           # Content as data — site config, navigation, menus, copy
├── pages/          # One component per route
├── App.jsx         # Route table
└── main.jsx        # Entry point
docs/               # Pre-built site for GitHub Pages (auto-updated by CI)
assets/             # Built JS/CSS at repo root (main/root Pages fallback)
images/             # Built static images at repo root
index.dev.html      # Vite dev entry — copied to index.html before dev/build
scripts/            # use-dev-index.mjs, sync-pages-assets.mjs
```

## Design tokens

Defined in `tailwind.config.js`:

| Token | Value | Use |
| --- | --- | --- |
| `cream` | `#f1efe4` | Page background |
| `seal` | `#b5241d` | Primary accent / chop |
| `sage` | `#97b88e` | Primary CTA buttons |
| `ink` | `#2b2926` | Text & dark sections |

Type: **Jost** (display, ≈ Brandon Grotesque) · **Inter** (body) · **Noto Serif SC** (Chinese).

## Notes for launch

- Menu data in `src/data/menu.js` is synced from the live bao-bei.ca PDFs — re-check when the kitchen updates menus.
- `NewsletterForm` needs wiring to a real email provider.
- Reservation / gift-card links point to the live Tock pages.
- `dist/` is gitignored (CI builds fresh). `docs/` is the committed production build for Pages.
