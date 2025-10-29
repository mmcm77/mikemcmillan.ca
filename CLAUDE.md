# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Mike McMillan, a product manager with 10+ years of experience. The site is built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. The primary goal is to showcase professional experience, work history, and eventually detailed case studies.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Architecture

### Routing Structure
This project uses Next.js 14 App Router. All routes are defined in `src/app/`:
- `/` - Home page (introduction, CTAs)
- `/work` - Work experience timeline
- `/form-test` - Form validation testing page (development/testing only)

### Layout System
- `src/app/layout.tsx` - Root layout that wraps all pages
  - Sets global metadata (title, description)
  - Includes `<Nav>` component
  - Applies container constraints: `max-w-4xl` centered with horizontal padding
  - Dark theme by default (`bg-black`)

### Component Organization
Components live in `src/components/`:
- `Nav.tsx` - Shared navigation component (center-aligned, 2 links: Home, Work)

Most page content is currently colocated in page files rather than extracted to components. As the site grows, extract reusable UI patterns into components.

### Styling Approach
- **Tailwind CSS** utility-first approach with inline classes
- Global styles in `src/app/globals.css` (Tailwind directives only)
- Color scheme: Black background, white text, blue accents (`blue-400`, `blue-600`)
- Responsive breakpoints using Tailwind's `sm:` prefix
- No custom Tailwind theme extensions currently defined

### Form Handling Pattern
The form-test page demonstrates the form handling pattern used in this codebase:
- **React Hook Form** for form state management
- **Zod** for schema validation
- **@hookform/resolvers** to connect Zod with React Hook Form
- Error messages display below each field
- Loading states during submission

When building forms, follow this pattern for consistency.

### Import Path Aliases
TypeScript is configured with path alias `@/*` mapping to `./src/*`:
```typescript
import Nav from "@/components/Nav"  // instead of relative paths
```

## Content Strategy

**Current state:** The site focuses on listing work experience chronologically.

**Planned improvements** (see `/docs/portfolio-transformation-plan.md`):
- Add detailed case studies for major projects (Okra, Buildable, Bookmark)
- Transform work page into interactive timeline
- Add impact metrics and data visualizations
- Implement modern hero section with animations
- Create proper design system with component library

When adding new content, prioritize showcasing **impact and outcomes** over just responsibilities. Product managers are evaluated on results.

## Deployment

The site is designed to deploy on Vercel (Next.js native platform). No special configuration required - standard Next.js deployment flow applies.

## Key Dependencies

- **Next.js 14.1.4** - Framework with App Router
- **React 18** - UI library
- **TypeScript 5** - Type safety (strict mode enabled)
- **Tailwind CSS 3.4.1** - Utility-first CSS
- **React Hook Form 7.51.0** - Form state management
- **Zod 3.22.4** - Schema validation
- **@radix-ui** packages - Unstyled accessible components (installed but not yet fully utilized)

## Planning Documents

Reference `/docs/portfolio-transformation-plan.md` for comprehensive redesign roadmap including:
- Modern design patterns (Bento grid, glassmorphism, animations)
- Case study framework
- Component library recommendations (shadcn/ui)
- Animation libraries (Framer Motion, GSAP)
- Phase-by-phase implementation plan
