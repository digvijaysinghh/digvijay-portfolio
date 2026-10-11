# Digvijay Singh — Cybersecurity Portfolio (initial concept)

A static-first Next.js + TypeScript + custom CSS starter. This is an early homepage direction, not the final approved design.

## Requirements
- Node.js 20.9+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Static export

`next.config.ts` enables static export. To generate the deployable site:

```bash
npm run build
```

The output is generated in `out/`.

## Current scope
- Editorial, personal-name-led homepage
- Abstract SVG request-path visual (explicitly labelled as illustrative, not a production topology)
- Working full-screen navigation overlay (Escape closes it)
- Responsive layouts and reduced-motion support
- Selected work, personal approach, and public profile links

## Still to do
- Review and revise visual direction with Digvijay
- Add actual project pages and approved case-study content
- Add credentials and recommendations using verified sources
- Replace the temporary email note with a dedicated professional email
- Review accessibility, keyboard focus, responsive behavior, and production metadata
- Decide final domain and hosting

No backend, database, authentication, tracking, or third-party API is included. Google Fonts currently loads externally; self-host fonts if fully self-contained deployment is desired.
