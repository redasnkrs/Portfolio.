# Reda Dahmani — Portfolio (React + TypeScript + Vite + Tailwind v4)

A minimalist, glassmorphism-inspired portfolio that showcases projects, experience, and about info. Built with React 18+, Vite, TypeScript, and Tailwind CSS v4, following the specs in `../instructions.md`.

## Quick Start

1. Install dependencies

```bash
npm i
```

2. Start the dev server

```bash
npm run dev
```

Open the URL printed in the terminal (e.g. http://localhost:5173).

3. Build for production

```bash
npm run build
npm run preview
```

## Tech Stack

- React 18 + TypeScript
- Vite 7
- Tailwind CSS v4 via `@tailwindcss/postcss`
- lucide-react icons

## Project Structure

```text
web/
  index.html              # HTML shell + SEO meta
  postcss.config.js       # Tailwind v4 PostCSS plugin
  vite.config.ts          # Vite configuration
  src/
    main.tsx              # App bootstrap
    index.css             # Tailwind import + global tokens
    App.tsx               # Sections + floating navigation
```

## Customization

- Hero text: edit the `Hero` component in `src/App.tsx`.
- Projects: update the `projects` array in `src/App.tsx` (title, description, technologies, link).
- Experience: update the `experiences` array in `src/App.tsx` (company, position, period, description, technologies).
- About/Skills/Contact: edit the `About` component in `src/App.tsx`.
- Global styles/glass tokens: edit `src/index.css` (`.glass-card`, `.pill`, `.container-*`, `.section`).

## Design/Behavior Highlights

- Floating bottom navigation with active section detection and smooth scrolling.
- Glassmorphism cards with backdrop blur and subtle hover.
- Responsive grid (1 column mobile, 2 columns desktop for projects).
- Typography: monospace, large hero headings, relaxed body leading.

## Accessibility

- Semantic sections and `nav` landmark.
- Visible active states; keyboard operable navigation buttons.

## Deployment

This is a static build. Deploy the `dist/` folder to any static host:

- Vercel: `vercel --prod`
- Netlify: drag-and-drop `dist/` or use CLI
- GitHub Pages: push `dist/` to `gh-pages` branch

## Notes

- Tailwind v4 is enabled via `@import "tailwindcss";` in `src/index.css` and `@tailwindcss/postcss` in `postcss.config.js`.
- If styles don’t appear in dev after config changes, restart the dev server.
