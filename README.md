# mikemcmillan.ca

Mike McMillan’s editorial product portfolio. The site presents selected work across commerce, financial infrastructure, developer platforms, and applied AI, alongside an active builder’s lab.

## Public experience

- `/` — positioning, selected work, current focus, and operating principles
- `/work` — flagship case studies and a compact career index
- `/work/okra` — open-finance infrastructure and category creation
- `/work/bookmark` — applied AI product positioning and strategic partnership
- `/work/buildable` — agency-to-platform product transformation
- `/lab` — current product experiments and working principles
- `/about` — career narrative and product philosophy

Legacy `/ai-tools` routes redirect to `/lab`.

## Development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm exec tsc -- --noEmit
npm run build
npm audit
```

## Design system

The interface uses a restrained editorial system defined in `src/app/globals.css`: a warm paper canvas, ink typography, one cobalt accent, fine rules, and motion limited to interaction feedback. Pages are statically rendered with Next.js App Router and use server components by default.
