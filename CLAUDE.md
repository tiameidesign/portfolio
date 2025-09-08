# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based portfolio website using TypeScript. It follows the standard Astro project structure with components, layouts, and pages in the `src/` directory.

## Development Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro check` | Run Astro's type checker (requires `@astrojs/check` and `typescript` packages) |

## Architecture

- **Framework**: Astro v5.x with strict TypeScript configuration
- **Structure**: Standard Astro project layout
  - `src/pages/` - File-based routing (currently just `index.astro`)
  - `src/layouts/` - Reusable page templates (`Layout.astro`)
  - `src/components/` - Astro components (`Welcome.astro`)
  - `src/assets/` - Static assets (SVG files)
  - `public/` - Static files served directly

## Key Files

- `astro.config.mjs` - Minimal Astro configuration
- `tsconfig.json` - Extends Astro's strict TypeScript config
- `src/layouts/Layout.astro` - Base HTML layout with minimal styling
- `src/components/Welcome.astro` - Main welcome component with extensive styling

## Development Notes

- Uses Astro's component format with frontmatter and template sections
- Styling is component-scoped using Astro's `<style>` blocks
- TypeScript strict mode is enabled
- No testing framework currently configured
- No linting tools currently configured (ESLint, Prettier, etc.)