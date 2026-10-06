# Swipex — Payment Processing Lead Gen

Lightweight lead-generation landing page for business owners who want to reduce credit-card processing costs.

**Stack:** Semantic HTML5 · SCSS · Vanilla JavaScript · `sass` (compile only)

## Requirements

- Node.js 18+ (for SCSS compilation)
- A static file server for local preview (optional)

## Installation

```bash
npm install
```

## Development

Watch SCSS and recompile on change:

```bash
npm run dev
```

Serve the site root with any static server, for example:

```bash
npx serve .
```

Then open the printed local URL.

## Production build

Generate compressed CSS:

```bash
npm run build
```

Ship `index.html`, `css/styles.css`, `js/main.js`, and `assets/`.

## File structure

```
/
├── index.html
├── package.json
├── README.md
├── PROJECT.md
├── .gitignore
├── assets/
│   ├── images/
│   ├── icons/
│   └── video/
├── css/
│   └── styles.css      ← compiled output
├── js/
│   └── main.js
└── scss/
    ├── _variables.scss
    ├── _reset.scss
    ├── _base.scss
    ├── _layout.scss
    ├── _components.scss
    ├── _utilities.scss
    └── styles.scss
```

## SCSS compilation

The official [`sass`](https://www.npmjs.com/package/sass) package compiles `scss/styles.scss` → `css/styles.css`.

- `npm run dev` — expanded CSS + watch
- `npm run build` — compressed CSS, no source map

No bundler. The browser receives HTML, CSS, and a small vanilla JS file.

## Theme variables

Edit `scss/_variables.scss` to change brand colors, typography, spacing, radii, and shadows. Then run `npm run build` (or keep `npm run dev` running).

## Project documentation

`PROJECT.md` is the living source of truth for business context, messaging, conversion goals, technical decisions, and open questions. Read and update it when making meaningful changes.
