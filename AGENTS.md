## Project Summary
This project is a high-fidelity clone of the MadeByShape agency website (https://madebyshape.co.uk/). It features a sophisticated, minimalist "Modern Creative Agency" aesthetic with high-contrast sections, bold typography, and smooth animations. The goal is to replicate the agency's premium feel and technical expertise in web design and branding.

## Tech Stack
- Framework: Next.js 15 (App Router)
- Styling: Tailwind CSS 4, styled-jsx (for specific component animations)
- Icons: Lucide React
- Components: Custom React components for each section

## Architecture
- `src/components/sections/`: Contains the modular sections of the website (Hero, Navigation, Footer, etc.)
- `src/app/`: Next.js App Router pages and global layouts
- `src/app/globals.css`: Core styling and theme configuration
- `src/visual-edits/`: Integration for Orchids Visual Edits

## User Preferences
- Follow the MadeByShape visual identity (Lime neon accents, high contrast black/white)
- Use large-radius rounded corners (rounded-3xl, rounded-4xl)
- Sophisticated minimalist typography using Inter

## Project Guidelines
- Components using `styled-jsx` must be marked with `"use client"`
- Maintain high visual accuracy to the original website's layout and transitions
- Use relative URLs for internal navigation

## Common Patterns
- Floating pill-shaped navigation
- Alternating light/dark sections for visual rhythm
- Masonry-style asymmetrical project grids
- Horizontal scrolling marquees for dynamic impact
