# Aya - AI Empowerment Platform for Women

Live site: https://cmcg2020.github.io/aya-ai-platform/

Aya is a platform designed to empower women to use AI confidently in everyday life. From discovery to mastery, Aya provides approachable tools, resources, and guidance.

## Features

- Spark Quiz: Interactive onboarding that personalizes your AI journey by goals and experience.
- Discovery Hub: Card-based “quick wins,” tool spotlights, and inspiring success stories.
- Sandbox: Guided “recipes” for common AI tasks with practical, repeatable templates.
- Pathways: Structured learning roadmaps for bigger goals (career growth, side hustles, etc.).
- AI Toolkit: Filterable directory of vetted AI tools with plain English descriptions and pricing.
- Latest Developments: Curated AI news and updates, explained simply.

## Tech Stack

- Framework: Next.js 14 (App Router), static export for GitHub Pages
- Styling: Tailwind CSS
- UI: Radix UI + custom components
- Animations: Framer Motion
- Icons: Lucide
- Testing: Jest + Testing Library
- Linting/Formatting: ESLint + Prettier
- DB Client (future): Prisma (retained for planned non-static migration)

## Repository Structure

```
.
├── app/                     # Next.js App Router pages & global app setup
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── quiz/
│   ├── discovery/
│   ├── sandbox/
│   ├── pathways/
│   ├── toolkit/
│   └── news/
├── public/                  # Static assets
├── prisma/                  # Prisma schema & client (kept for future non-static architecture)
├── scripts/                 # Project scripts (build, maintenance, etc.)
├── __tests__/               # Jest tests (e.g., components/toolkit)
├── .github/workflows/       # CI/CD (GitHub Pages, optional checks)
├── components.json          # shadcn/ui scaffolding metadata (if used)
├── jest.config.js
├── jest.setup.ts
├── lighthouse-config.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.jest.json
├── package.json
├── package-lock.json
├── LICENSE                  # Apache-2.0
└── README.md
```

## Quick Start

Prerequisites: Node.js 18+

You can use npm (default) or Yarn. The repo currently includes `package-lock.json`; if you prefer Yarn, remove `package-lock.json` and commit `yarn.lock`.

### Using npm

```bash
npm install
npm run dev
npm run build           # static export
npx serve ./out         # preview static export
```

### Using Yarn

```bash
yarn
yarn dev
yarn build
```

Then open http://localhost:3000

## Deployment (GitHub Pages)

The site is built as a static export and deployed via GitHub Actions to GitHub Pages.

- Push to `main` to trigger the Pages workflow.
- Ensure Pages is enabled in Settings → Pages and set to GitHub Actions.
- Static files are generated under `out/`.

### Manual deployment to other static hosts

```bash
npm run build   # or: yarn build
# Upload the 'out/' directory to your host
```

## Configuration

### Environment variables (optional)

Create `app/.env.local` if you integrate a news API or other public-only keys:

```bash
NEXT_PUBLIC_NEWS_API_KEY=your_api_key
```

### Next.js configuration (pre-set for static export)

- `images.unoptimized: true`
- `trailingSlash: true`
- `output: 'export'` (via `next export`)

## Testing

- Run tests: `npm test` or `yarn test`
- Coverage (optional): `npx jest --coverage`

Tip: Enable a test job in `.github/workflows` if you want tests to run on PRs.

## Design System

- Palette: Purple → Pink gradient (primary), Blues (secondary), Greens (success), Yellow/Orange (warning)
- Typography: Playfair Display (headings), Inter (body)
- Patterns: Animated cards, gradient buttons, responsive grids, progressive disclosure

## Performance & SEO

- Optimized Core Web Vitals for static hosting
- Semantic HTML, proper meta/Open Graph tags
- Accessible components (WCAG 2.1 AA in mind)

## Architecture Notes

This repo is currently deployed as a static export. The `prisma` directory and Prisma dependency are intentionally retained because Aya will migrate to a non-static architecture in the future. For now, Prisma is not required for the static build and is not used at runtime.

If you want to keep the dependency lightweight during static-only phases, you can mark Prisma as a devDependency and document that it’s for the planned server-backed version.

## Contributing

- Fork the repo
- Create a feature branch: `git checkout -b feature/amazing-feature`
- Commit: `git commit -m "Add amazing feature"`
- Push: `git push origin feature/amazing-feature`
- Open a Pull Request

Content lives either under `lib/` or in route-specific folders within `app/`:

- Quiz: `app/quiz/`
- Discovery: `app/discovery/`
- Sandbox: `app/sandbox/`
- Pathways: `app/pathways/`
- Toolkit: `app/toolkit/`
- News: `app/news/`

## Troubleshooting

- TypeScript issues: `npm run type-check` or `yarn type-check` (if configured)
- Styles not applying: rebuild and inspect `out/_next/static/css`
- Images on Pages: ensure `images.unoptimized: true` and paths are correct for static hosting

## License

Apache-2.0. See `LICENSE`.

## Acknowledgments

- Design inspiration from Mattie James
- UI components: Radix UI
- Icons: Lucide
- Animations: Framer Motion

Built with ❤️ to help women use AI confidently in work, home, learning, and play.
