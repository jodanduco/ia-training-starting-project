# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Use `bun` as the package manager (lockfile is `bun.lock`).

```bash
bun dev        # Start dev server on http://localhost:3000
bun build      # Production build
bun start      # Start production server
bun lint       # Run ESLint
```

No test suite is configured yet.

## Environment

Copy `.env.example` to `.env.local` before running. Required variables:

- `BETTER_AUTH_SECRET` — must be 32+ characters
- `DB_PATH` — path to the SQLite database file (e.g. `data/app.db`)

## Architecture

This is a **Next.js 16 App Router** project with TypeScript, Tailwind CSS v4, and a planned SQLite backend via `better-auth`.

- `app/` — App Router: `layout.tsx` is the root layout (Geist fonts, global CSS), `page.tsx` is the home route.
- `app/globals.css` — Global styles; Tailwind is imported here via PostCSS (`@tailwindcss/postcss`).
- `@/*` path alias maps to the project root.

The project is in early scaffolding state — `better-auth` and the SQLite DB layer are referenced in `.env.example` but not yet wired up in code.
