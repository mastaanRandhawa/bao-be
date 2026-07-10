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
2. Deploys via **GitHub Actions** (preferred)
3. Commits the same build to the **`docs/`** folder (fallback if branch deploy is used)

### If you see a blank white page

GitHub Pages is serving the **source** `index.html` (which references `/src/main.jsx`) instead of the **built** site.

**Fix — pick one in [Settings → Pages](https://github.com/mastaanRandhawa/bao-be/settings/pages):**

| Option | Source | Branch | Folder |
|--------|--------|--------|--------|
| **A (recommended)** | GitHub Actions | — | — |
| **B (fallback)** | Deploy from a branch | `main` | `/docs` |

**Do not** use `main` + `/ (root)` — that only publishes source files and causes a blank page.

After saving, wait 1–2 minutes and hard-refresh (`Ctrl+Shift+R`).

### Local production build (matches GitHub Pages)

```bash
# PowerShell
$env:GITHUB_ACTIONS='true'; npm run build; npm run preview

# bash
GITHUB_ACTIONS=true npm run build && npm run preview
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
docs/               # Pre-built site for GitHub Pages branch deploy (auto-updated by CI)
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
- `dist/` is gitignored (CI builds fresh). `docs/` is the committed production build for Pages.
