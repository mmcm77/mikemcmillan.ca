# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Mike McMillan, a product manager with 10+ years of experience. The site is built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. The portfolio showcases professional experience, comprehensive case studies, and work history with modern animations and interactions.

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
This project uses Next.js 16 App Router. All routes are defined in `src/app/`:
- `/` - Home page with hero, stats, and CTAs
- `/work` - Work experience timeline with featured case studies
- `/work/okra` - Okra case study (Africa's open finance platform)
- `/work/buildable` - Buildable case study (agency-to-product pivot)
- `/work/bookmark` - Bookmark case study (AI website builder acquisition)
- `/form-test` - Form validation testing page (development/testing only)

### Layout System
- `src/app/layout.tsx` - Root layout that wraps all pages
  - Sets global metadata (title, description)
  - Includes `<Nav>` component
  - Applies container constraints: `max-w-4xl` centered with horizontal padding
  - Dark theme by default (`bg-black`)

### Component Organization
Components live in `src/components/`:
- `Nav.tsx` - Scroll-responsive navigation with minimalist design
- `AnimatedCounter.tsx` - Animated stat counters with custom easing
- `ui/spotlight-new.tsx` - Animated spotlight effects and grid backgrounds
- `ui/timeline.tsx` - Scroll-triggered timeline with Framer Motion
- `ui/button.tsx` - shadcn/ui button component
- `ui/card.tsx` - shadcn/ui card component
- `ui/badge.tsx` - shadcn/ui badge component
- `ui/separator.tsx` - shadcn/ui separator component

Page content is primarily colocated in page files, with reusable UI patterns extracted to the component library as needed.

### Styling Approach
- **Tailwind CSS v4** utility-first approach with inline classes
- **CSS Custom Properties** for design tokens in `globals.css`
- **Color System:**
  - Dark theme with purple brand color (`--color-brand-primary: #8B5CF6`)
  - Blue accent color (`--color-accent-blue: #3B82F6`)
  - Semantic color tokens (text, background, border variants)
- **Typography System:**
  - Fluid typography using `clamp()` for responsive scaling
  - Custom classes: `text-display-hero`, `text-heading-section`, `text-body-enhanced`
  - Geist font family
- **Component Styles:**
  - `.stat-card` - Glassmorphism stat cards with hover effects
  - `.card-hover` - Interactive cards with transforms
  - `.text-gradient` - Purple-to-blue gradient text
  - `.glass-card-hover` - Enhanced glassmorphism with animations
- **Animations:**
  - Custom keyframes: `fade-in`, `slide-up`, `ping`
  - Framer Motion for scroll-triggered and interactive animations
  - Reduced motion support via `prefers-reduced-motion`

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

**Current state:** Modern portfolio with comprehensive case studies and impact-driven storytelling.

**Completed:**
- ✅ 3 detailed case studies (Okra, Buildable, Bookmark) with frameworks and metrics
- ✅ Interactive timeline with scroll animations on /work page
- ✅ Featured case studies section with journey overview
- ✅ Modern hero section with animated stats and spotlight effects
- ✅ Complete design system with glassmorphism and animations

**Next opportunities** (see `/docs/portfolio-roadmap.md`):
- SEO optimization (Open Graph, Twitter Cards, sitemap, robots.txt)
- Testimonials/recommendations section
- Dark/light mode toggle (next-themes installed but not implemented)
- Additional case studies for Lightspeed and Interac
- Blog/writing section for thought leadership
- Analytics tracking

When adding new content, prioritize showcasing **impact and outcomes** over just responsibilities. Product managers are evaluated on results.

## Deployment

The site is designed to deploy on Vercel (Next.js native platform). No special configuration required - standard Next.js deployment flow applies.

## Key Dependencies

- **Next.js 16.0.1** - Framework with App Router and Turbopack
- **React 19.2.0** - UI library with latest features
- **TypeScript 5** - Type safety (strict mode enabled)
- **Tailwind CSS 4.1.16** - Utility-first CSS (v4 with native support)
- **Framer Motion 12.23.24** - Animation library for interactive effects
- **React Hook Form 7.51.0** - Form state management
- **Zod 4.1.12** - Schema validation
- **next-themes 0.4.6** - Theme management (installed but not yet implemented)
- **Geist 1.5.1** - Modern font family
- **lucide-react 0.548.0** - Icon library
- **@radix-ui** packages - Unstyled accessible components (used for shadcn/ui)
- **react-intersection-observer 10.0.0** - Scroll-triggered animations

## Planning Documents

Reference `/docs/portfolio-roadmap.md` for the current prioritized roadmap including:
- **P0 priorities:** Testimonials, SEO metadata, performance optimizations
- **P1 priorities:** Additional case studies, product philosophy section, blog
- **P2 priorities:** Data visualizations, dark/light mode, advanced animations
- **P3 priorities:** Analytics, A/B testing, newsletter, search functionality

The `/docs/portfolio-transformation-plan.md` contains the original comprehensive transformation vision (mostly completed).

Case study templates and frameworks are available in `/docs/case-studies-README.md`.
