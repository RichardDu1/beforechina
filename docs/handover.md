# BeforeChina.com Project Handover Document

> Last updated: 2026-07-20. This document supersedes the Phase 4 version.
> Read top-to-bottom before making changes — the stack and conventions have evolved.

## 1. Project Overview

**BeforeChina** is a high-conversion, SEO-driven toolkit and guide for foreigners
(primarily UK/US) traveling to China. It focuses on the most critical pre-flight
anxieties: Visa rules, bypassing the Great Firewall (VPN/eSIM), navigating the
cashless society (Alipay/WeChat Pay), and budgeting.

- **Domain**: `beforechina.com`
- **GitHub Repo**: `https://github.com/RichardDu1/beforechina`
- **Deployment**: Vercel (auto-deploys from `main`, SSG export)

## 2. Technical Stack

- **Framework**: Next.js **16.2.10** (App Router, Turbopack). ⚠️ This is a newer
  Next.js than many agents know — read `node_modules/next/dist/docs/` before
  writing code (see `AGENTS.md`). Key conventions (sitemap/robots/Script/metadata)
  are stable but verify before assuming.
- **Rendering**: **SSG** (every route is `○ (Static)`). Do NOT add
  `cookies()`/`headers()`/dynamic server APIs that break the static export
  unless a feature truly requires it.
- **Styling**: **Vanilla CSS** (CSS Modules + inline styles). Tailwind is
  intentionally NOT used. Inline `style={{}}` cannot express breakpoints —
  use a class in `globals.css` for responsive behaviour (see `.footer-grid`).
- **Language**: TypeScript (strict, `tsc --noEmit` clean).

## 3. Brand & Persona Strategy

The entire site is written as **"Richard Du"**, a Chinese native living in the UK.
Tone: honest, unfiltered, practical, empathetic to foreigner pain points. Goal:
build E-E-A-T by exposing travel-agency "fluff" and offering real, local-tested
advice. ⚠️ This persona is currently a written fiction — see §6 Open Issue #2.

## 4. Site Map & Page Inventory

| Route                           | Type                           | Status                    |
| ------------------------------- | ------------------------------ | ------------------------- |
| `/`                             | Home (bento toolkit grid)      | Phase 4                   |
| `/visa`                         | Tool: Visa-Free Checker + FAQ  | **Phase 5 (rewritten)**   |
| `/vpn`                          | Guide: Best VPN for China      | Phase 5 (affiliate wired) |
| `/esim`                         | Guide: Best eSIM for China     | Phase 5 (affiliate wired) |
| `/payment`                      | Guide: Alipay & WeChat Pay     | Phase 5 (HowTo schema)    |
| `/insurance`                    | Guide: Travel Insurance        | Phase 5 (affiliate wired) |
| `/budget`                       | **Tool: Trip Cost Calculator** | **Phase 5 (new)**         |
| `/about`, `/contact`            | Google Ads compliance pages    | Phase 4                   |
| `/privacy`, `/terms`, `/cookie` | Legal boilerplate              | Phase 4                   |
| `/sitemap.xml`, `/robots.txt`   | SEO infrastructure             | **Phase 5 (new)**         |

## 5. Completed Work

### Phases 1-4 (prior agent) — MVP architecture, UI, SEO content clusters, compliance pages, deployment.

### Phase 5 (2026-07-20) — Monetisation loop + real tools + SEO foundation

This phase closed the gap between "MVP skeleton" and "a site that can actually
earn from traffic". Detail:

1. **Affiliate link registry** — `src/lib/affiliates.ts`. Every outbound
   monetised link reads from this single config. Currently `?ref=beforechina`
   placeholders; when real Impact/PartnerStack tracking URLs arrive, edit ONE
   file. All links carry `rel="noopener noreferrer sponsored nofollow"` (Google
   affiliate policy) + `data-affiliate`/`data-location` for tracking.

2. **GA4 + outbound-click conversion tracking** — `src/lib/analytics.ts` +
   `src/components/Analytics.tsx`. Loads gtag.js via `next/script`
   `afterInteractive`. One delegated document-level click listener fires an
   `affiliate_click` GA4 event for any `data-affiliate` link site-wide — no
   per-link wiring. VisaChecker and BudgetCalculator also fire `visa_check` /
   `budget_style_change` events. **No-ops when `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   is unset**, so local dev and unconfigured prod never break. The Analytics
   component is mounted at the end of `<body>` in `layout.tsx`.

3. **SEO foundation** — `src/app/sitemap.ts` (12 URLs, priority-weighted),
   `src/app/robots.ts`, and `src/components/JsonLd.tsx` (JSON-LD helper).
   Schema shipped: Visa (FAQPage + BreadcrumbList), VPN/eSIM/Insurance (FAQPage),
   Payment (HowTo + FAQPage), Budget (FAQPage + Breadcrumb).

4. **Visa Checker rewritten as a real tool** — `src/components/VisaChecker.tsx`
   - `src/data/visaRules.ts`. Expanded from ~20 to 90+ countries, with a search
     box, two optgroups (Popular / All countries), result caveats, contextual
     next-step CTA, and a data-verified date stamp. **Fixed a serious data bug**:
     the old data marked UK/Canada/Japan/Australia as "144-hour transit only" —
     they are actually 30-day visa-free (unilateral regime until 2026-12-31). The
     240-hour transit exemption replaced the old 72/144-hour regime. US is the
     notable major country with transit-only.

5. **Budget Calculator (new)** — `src/app/budget/page.tsx` +
   `src/components/BudgetCalculator.tsx` + `src/data/budgetData.ts`. Three
   travel styles × days × party size → live total in USD + CNY, per-line
   percentage breakdown bars, one-off costs (flights, visa, eSIM, insurance,
   HSR). Cross-links to Visa/eSIM/Payment tools.

6. **Minor fixes** — root `metadata` got `metadataBase`, canonical/OpenGraph/
   Twitter/robots. Footer grid's invalid inline `sm:{}` object replaced with a
   responsive `.footer-grid` class in `globals.css`. Home "Coming Soon" card
   replaced with a Budget Calculator card.

### Verification

- `npx tsc --noEmit` → clean.
- `npm run build` → 17/17 static pages, `/robots.txt` + `/sitemap.xml`
  generated, all routes `○ (Static)`.

## 6. Open Issues (for the next agent)

1. **Affiliate links are still placeholders.** Get real tracking URLs from each
   programme and drop them into `src/lib/affiliates.ts`. Until then, traffic is
   tracked but no commission is earned.
2. **GA4 not yet wired in Vercel.** Add env var `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   (format `G-XXXXXXXX`). Without it, no tracking fires.
3. **The "Richard Du" persona is unverified content.** E-E-A-T claims rest on a
   real person's real experience; right now the site is well-written copy. This
   is the single biggest strategic risk — see the design strategy doc
   (`docs/英文中国旅游网站：竞品深度分析 × 错位竞争策略 × 可执行方案.md`) §five
   "Phase 3 content" and the Helpful Content Update warning. Real first-person
   content (photos, screenshots, named experiences) is the moat, not the code.
4. **Cosmetic residual:** `insurance/page.tsx` line ~29 has an invalid inline
   `lg:{}` style object (harmless, ignored by React, but inconsistent).
5. **Visual design is functional but flat** — see Phase 6 below.

## 7. Phase 6 — Visual / UX Redesign (in progress, 2026-07-20)

The current design is a clean but generic bento-box light/dark theme. It works
but does not communicate the brand promise ("a local who figured China out")
visually, and is weaker than the best competitor (WildChina) on brand identity.
A redesign pass is underway based on a fresh competitor design audit
(`chinahighlights`, `travelchinaguide`, `wildchina`, `240hoursinchina`).

**Redesign goals (draft, to be finalised with the audit):**

- A signature visual language that no competitor uses (likely editorial /
  magazine-style with strong typography + real photography, since most
  competitors are either dated-encyclopaedia or generic-corporate).
- Hero that foregrounds the persona + trust, not just feature cards.
- Treat tools (Visa Checker, Budget Calculator) as first-class hero objects,
  not buried below the fold.
- Real photography / screenshots (Alipay UI, train ticket, street scene) — the
  "evidence" that differentiates from agency marketing copy.

> When the redesign lands, update this section with the implemented design
> system and remove this "in progress" note.

## 8. Conventions to Maintain

- **No Tailwind.** Vanilla CSS / inline styles only. For breakpoints, add a
  class in `src/app/globals.css`.
- **Maintain SSG.** No request-time APIs unless a feature truly needs them.
- **Affiliate links** go through `affiliateProps()` from `src/lib/affiliates.ts`
  — never hand-write `href="#"` or bare vendor URLs in pages.
- **Structured data** goes through the `<JsonLd>` component.
- **Tracking calls** go through `trackEvent()` from `src/lib/analytics.ts` —
  safe to call anywhere (no-ops server-side and when GA unconfigured).
- **Verify with** `npx tsc --noEmit && npm run build` before committing.
