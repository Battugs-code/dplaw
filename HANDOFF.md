# Dashnyam Partners LLC — Redesign Handoff

## Source
- Original: https://dplaw.mn/ (WordPress, gerege theme)
- Strategy: `improve-site` — exact structural copy, small UI/UX refinements only
- Full content audit: `../dplaw-audit/` (source-audit.json, people.json, news.json, updates.json, i18n.json, assets.json, image-map.json)

## What was preserved (nothing omitted)
- All 3 locales: **en** (default, no prefix), **mn** (/mn), **ru** (/ru)
- Homepage sections in original order: hero tagline → Why us → Our Mission → Our Community → 8 values → Legal updates & News → Awards → footer (disclaimer, address, links, copyright)
- Our people: all 10 members with photos, roles, phones, emails, full bios, education/publications/experience sections
- Areas of Practice: all 5 areas, every sub-service item, all 6 testimonials
- Resources: News (14 posts), Legal Update (10), Archived Legal Update (5) — every post with full body, featured image, PDF attachments
- Pro Bono: social impact page + requirements page (form + 3 notes + banner image)
- Contact: local time, address, get-direction link, 3 phones, email
- External links: Laws (legalinfo.mn), Foreign Investment PDF, LEXUB, ITGEMJ, GOWU
- All 45 images downloaded locally to `public/images/`

## Small UI/UX changes applied
- Sticky blurred header with working dropdowns (Resources, Pro Bono), active-page states, mobile accordion menu
- Language switcher preserving current path; locale pills on mobile
- Hero: slow crossfade of the 4 original photos, slide indicators
- Scroll-reveal animations (subtle fade-up, framer-motion)
- Numbered value cards (01–08) with hover tint
- Practice page: sticky anchor side-nav, numbered sections
- Resources: tab bar (News / Legal Update / Archived / Laws↗), all posts on one page (original had broken pagination on /news)
- Article pages: prev/next navigation, PDF download buttons, back links
- Contact: live Ulaanbaatar clock
- Fixed stale data: RU locale now shows the current Regis Place address (original RU page still showed the old Park Place address)
- Custom 404 page, focus-visible rings, skip-to-content, semantic HTML, per-page metadata

## Design tokens (same base as original)
- Crimson `#a61d30` / dark `#840b1d` (original theme color), ink `#22252a`, cream `#faf8f7`, night `#1b1517`
- Fonts: Poppins (headings) + Roboto (body) — same as original theme; Cyrillic falls back to Roboto (same as original)
- Tailwind v4 tokens in `src/app/globals.css`

## Content model (ready for erxes CMS later)
- `src/data/people.ts` — 10 people (en content + mn/ru name & role)
- `src/data/news.ts` — 14 news posts
- `src/data/updates.ts` — 10 legal updates + 5 archived
- `src/data/site.ts` — logo, hero images, awards, contact, external links
- `messages/{en,mn,ru}.json` — all UI + page copy per locale
- Note: post/person body text is English on all locales (fallback); mn/ru post translations exist on the original site and can be seeded when erxes is connected.

## Routes
`/` `/people` `/people/[slug]` `/areas-of-practice` `/resources/news` `/resources/legal-update` `/resources/archived-legal-update` `/news/[slug]` `/legal-update/[slug]` `/pro-bono` `/pro-bono-requirements` `/contact` — each in en/mn/ru.

## Build
`pnpm build` — 147 static pages, all passing.
