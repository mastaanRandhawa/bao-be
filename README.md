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
(Note: the path is `/bao-be/`, not `/bao-bei/`.)

On every push to `main`, [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the site and publishes `dist/` to the **`gh-pages`** branch.

### Repo settings (required once)

1. Open **Settings → Pages** on GitHub.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Set **Branch** to **`gh-pages`** / **`/ (root)`**, then Save.
4. Wait ~1 minute after the workflow finishes, then hard-refresh the site.

Do **not** deploy from the `main` branch root — that serves the raw Vite source (`/src/main.jsx`) and produces a blank page.

```bash
# PowerShell
$env:GITHUB_PAGES='true'; npm run build; npm run preview

# bash
GITHUB_PAGES=true npm run build && npm run preview
```

Client-side routes (`/menus`, `/about`, etc.) work on GitHub Pages via a generated `404.html` SPA fallback.

## Project structure

```
src/
├── components/
│   ├── layout/     # Navbar, Footer, Layout shell
│   ├── ui/         # Reusable primitives (Button, Logo, Accordion, …)
│   ├── home/       # Homepage sections
│   └── menu/       # Menu item row
├── data/           # Content as data — site config, navigation, menus, copy
├── pages/          # One component per route
├── App.jsx         # Route table
└── main.jsx        # Entry point
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

- Menu prices in `src/data/menu.js` are illustrative — sync with the current kitchen menu.
- `NewsletterForm` needs wiring to a real email provider.
- Reservation / gift-card links point to the live Tock pages.
