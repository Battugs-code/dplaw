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
- Crimson `#a61d30` / dark `#840b1d` (original theme color), ink `#232323`, body `#555`, muted `#999`, soft `#f7f7f7`, footer `#f0f2f0`, line `#eee`
- Fonts: Poppins (headings/nav) + Roboto (body) — same as original theme; Cyrillic falls back to Roboto (same as original)
- Tailwind v4 tokens in `src/app/globals.css`

## Fidelity pass (second iteration)
After comparing against the live original page-by-page, the design was brought back to the original's visual character:
- Header: sentence-case Poppins nav, "Select your language" bordered pill, taller header — like the original
- Hero: single photo (copy.png), moderate left-aligned sentence-case headline, no buttons — like the original
- Homepage sections use the original photo backgrounds (MG_8695-59 for Why us, 3-2_3 and MG_8700-64_2 for the values) with the original dark translucent rounded cards
- News cards: square corners, thin border, semibold dark title, date bottom-right — like the original
- People: photo + white caption block cards; profile pages use the original round photo, gray role, blue Vcard Download link (real .vcf files generated)
- Areas of Practice: original zig-zag photo/text layout with the 5 area photos, centered uppercase anchor menu, plain disc bullets
- Resources: centered uppercase tabs with crimson underline; article pages have centered title + gray date + Suggested news grid — like the original
- Pro Bono requirements: image left + notes right, thin-input form with red asterisks
- Contact: original Regis Place night photo background, big white local-time clock, white contact card with red/green/blue icon circles, outline Get direction button
- Footer: light gray (#f0f2f0) with Disclaimer/Address/Link and "Developed by gerege.agency" — like the original
Kept UX improvements: sticky header, working dropdowns, mobile menu, locale switcher preserving path, hover/focus states, all news on one page, back links, 404, semantic HTML, per-page metadata.

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
