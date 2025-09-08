# GEMINI.md

## Project Overview

This project is a personal portfolio website for Tia Mei, a UX Designer. It is a static site built with the [Astro](https://astro.build/) web framework. The site showcases Tia's design projects, provides an "about" section, and links to her resume.

The project uses Node.js for dependency management and running scripts. The styling is done with a combination of CSS and what appears to be a custom design system, with variables defined in `src/layouts/Layout.astro`.

## Building and Running

The following commands are available to work with the project:

*   `npm install`: Installs the necessary dependencies.
*   `npm run dev`: Starts a local development server at `localhost:4321`.
*   `npm run build`: Builds the static site for production. The output is configured to be in the `docs` directory.
*   `npm run preview`: Previews the production build locally.

## Development Conventions

*   **Components:** The site is built using Astro components, which are located in the `src/components` directory.
*   **Layouts:** The main layout for the site is in `src/layouts/Layout.astro`.
*   **Pages:** The site's pages are in the `src/pages` directory.
*   **Static Assets:** Static assets like images and fonts are located in the `src/assets` directory.
*   **Styling:** Global styles and CSS variables are defined in `src/layouts/Layout.astro`. Component-specific styles are co-located within their respective `.astro` files.
