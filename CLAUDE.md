# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Corporate website for 研翌数据科技 (Yanyi Data Technology) — an industrial AI company. Bilingual (Chinese default / English), dark+light themes, built as a **block-based page builder** on Payload CMS. The entire app lives in `web/`; the repo root only holds `web/` and `docs/`.

## Commands

All commands run from `web/`. Package manager is **pnpm** (`pnpm-lock.yaml`).

| Command | Purpose |
|---|---|
| `pnpm dev` | Dev server — frontend at `http://localhost:3000`, Payload admin at `/admin` |
| `pnpm build` | Production build (raises Node heap to 8 GB) |
| `pnpm start` | Serve production build |
| `pnpm seed` | **Wipes and re-seeds** all bilingual sample content (`src/seed/index.ts`) |
| `pnpm generate:types` | Regenerate `src/payload-types.ts` — run after any collection/block/field change |
| `pnpm generate:importmap` | Regenerate Payload admin import map |
| `pnpm test` | Vitest unit tests |
| `pnpm type-check` | `tsc --noEmit` |
| `pnpm lint` | ESLint |

Run a single test: `pnpm exec vitest run path/to/file.test.ts` (or `pnpm exec vitest -t "name"`).

First-time local setup: `docker compose up -d` (Postgres) → `cp .env.example .env` (fill `DATABASE_URL`, `PAYLOAD_SECRET`, `NEXT_PUBLIC_SITE_URL`) → `pnpm dev` → create admin with `NODE_OPTIONS="--import=tsx/esm" npx tsx scripts/create-admin.ts` → `pnpm seed`.

## Architecture

**Single Next.js 16 app serves both the public site and the Payload 3 admin**, split by route groups under `src/app/`:
- `(frontend)/[locale]/…` — public pages, all locale-prefixed (`/zh`, `/en`)
- `(payload)/admin` and `(payload)/api` — Payload admin UI + REST/GraphQL

### The block-builder pipeline (central concept)

Marketing pages are assembled from reusable blocks, not hand-coded. A block flows through three coordinated places — **when you add or rename a block you must edit all three, then regenerate types**:

1. **Schema** — `src/blocks/blocks.ts` defines each `Block` (fields, `interfaceName`) and exports the `layoutBlocks` array consumed by the `Pages` collection's `layout` field.
2. **Renderer** — `src/components/blocks/index.tsx` (`RenderBlocks`) switches on `block.blockType` and dispatches to a component in `src/components/blocks/*.tsx`.
3. **Types** — `pnpm generate:types` writes `src/payload-types.ts`; components import block interfaces from `@/payload-types`.

The dynamic page route `(frontend)/[locale]/[slug]/page.tsx` loads a Pages doc via `getPage()` and renders `<RenderBlocks blocks={page.layout} />`. Current block types: `hero`, `valueProps`, `techArchitecture`, `capabilityGrid`, `scenarioShowcase`, `productMatrix`, `statsMetrics`, `caseHighlights`, `logoWall`, `contentMedia`, `timeline`, `teamPreview`, `faq`, `ctaBanner`, `richTextBlock`.

### Data access

**Never call `getPayload` directly in pages.** Use the `cache()`-wrapped helpers in `src/lib/payload.ts` (`getPage`, `getProducts`, `getCases`, `getPosts`, `getSiteSettings`, …). They all pass `locale` + `fallbackLocale: 'zh'` and filter `status: 'published'`, so drafts never leak to the frontend.

Collections (`src/collections/`): `Pages`, `Posts`, `Categories`, `Products`, `Cases`, `Partners`, `Team`, `Jobs`, `FormSubmissions`, `Media`, `Users`. Globals (`src/globals/`): `SiteSettings`, `Header`, `Footer` (in `Navigation.ts`).

### Localization

Two layers, don't confuse them:
- **Payload content localization** (`payload.config.ts` → `localization`): editor-managed content per locale. Mark fields `localized: true`. Default `zh`, fallback to `zh`.
- **next-intl UI strings**: static UI labels in `src/messages/{zh,en}.json`, routed by `src/middleware.ts` + `src/i18n/`. Middleware excludes `admin`, `api`, `_next`, `_payload`.

### Shared field & seed conventions

- Reusable field builders live in `src/fields/`: `slugField`, `statusField`, `orderField`, `publicRead` (`slug.ts`); `linkField`, `iconField` (`link.ts`); `seoField` (`seo.ts`).
- **Icons are stored as lucide names** (a `select` from `iconField`'s fixed option list) and rendered by name on the frontend via `src/lib/icons.tsx`. Only values in that list are valid.
- The seed script creates each doc in `zh` first, then re-updates it in `en` with IDs re-attached (`src/seed/helpers.ts` `attachIds`) so localized array/block items line up. Follow this pattern for bilingual seed data. Content builders are in `src/seed/content.ts` and `src/seed/pages.ts`.

### Forms

The contact form uses a Next server action (`src/app/actions/contact.ts`) that writes to the `form-submissions` collection and optionally emails `NOTIFY_EMAIL`. It has a honeypot (`website` field) and email failure is non-fatal. Email is only wired when `SMTP_HOST` is set (`payload.config.ts`); otherwise it no-ops without breaking submissions.

## Deployment

Dockerized (`web/Dockerfile`, `docker-compose.prod.yml`), needs PostgreSQL. Container startup runs `scripts/docker-entrypoint.sh` → `scripts/auto-init.ts`, which is **idempotent**: it waits for the DB, seeds content + admin only if empty (never overwrites existing edits), then `next start`. Note `auto-init.ts` runs under `NODE_ENV=development` because Payload's Postgres schema `push` is hard-blocked in production — schema auto-create only happens with `PAYLOAD_DB_PUSH=1`. Set `NEXT_STANDALONE=1` only if you want a standalone output bundle (the prod image uses `next start` instead).

## Notes

- `src/payload-types.ts` is **generated** — never hand-edit it; run `pnpm generate:types`.
- The one-off `scripts/*.ts` (e.g. `update-products.ts`, `update-team.ts`, `add-capabilities.ts`) are content-migration utilities run manually with `tsx --import=tsx/esm`, not part of the app runtime.
- Design specs and the build plan for this site are in `docs/superpowers/specs/` and `docs/superpowers/plans/`.
