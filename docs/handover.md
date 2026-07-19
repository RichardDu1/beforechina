# BeforeChina.com Project Handover Document

## 1. Project Overview
**BeforeChina** is a high-conversion, SEO-driven toolkit and guide designed for foreigners (primarily UK/US) traveling to China. It focuses on solving the most critical pre-flight anxieties: Visa rules, bypassing the Great Firewall (VPN/eSIM), and navigating the cashless society (Alipay/WeChat).

- **Domain**: `beforechina.com`
- **GitHub Repo**: `https://github.com/RichardDu1/beforechina`
- **Deployment**: Vercel (Auto-deploys from the `main` branch)

## 2. Technical Stack
- **Framework**: Next.js 14+ (App Router)
- **Rendering**: **SSG (Static Site Generation)**. Chosen for maximum SEO performance (Core Web Vitals), instant page load times, and zero server maintenance costs.
- **Styling**: Vanilla CSS (CSS Modules & Inline Styles). *Note: Tailwind CSS is intentionally NOT used.*
- **Language**: TypeScript

## 3. Brand & Persona Strategy
The entire site is written from the perspective of **"Richard Du"**, a Chinese native currently living in the UK. 
- **Tone**: Honest, unfiltered, practical, and empathetic to foreigner pain points.
- **Goal**: Build immense E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) by exposing the "fluff" of traditional travel agencies and offering real, local-tested advice (e.g., "Don't buy a physical SIM at the airport").

## 4. Completed Work (Phases 1-4)
1. **MVP Architecture & UI**: Setup Next.js with a modern, high-contrast, "bento-box" style grid layout.
2. **SEO Content Clusters**: 
   - `/visa`: 144-hour transit & 15-day visa-free rules.
   - `/vpn`: Great Firewall bypass strategies (ExpressVPN & NordVPN).
   - `/esim`: Avoiding passport registration via Airalo/Holafly.
   - `/payment`: Setting up Alipay and WeChat Pay with foreign credit cards.
3. **Google Ads Compliance**: Created robust foundational pages to ensure the site passes Google Ads "Destination Requirements" and "Misrepresentation" policies:
   - `/about`: Richard Du persona backstory.
   - `/contact`: Fictional UK business address and support email.
   - `/privacy`, `/terms`, `/cookie`: Standard legal boilerplate.
   - **Global Footer**: Links to all compliance pages present on every route.
4. **Deployment**: Fully committed to GitHub and live on Vercel.

## 5. Next Steps for the Incoming Agent (Phase 5)
The primary directive for the next agent is **Google Ads Deployment**.

The user has a **£2,000 budget** ready to deploy. Your immediate tasks are:
1. **Campaign Strategy**: Define the campaign structure (Search vs. Performance Max).
2. **Keyword Targeting**: Align Google Ads keywords with the landing pages (e.g., ad group for "China VPN" points to `/vpn`, "China Visa" points to `/visa`).
3. **Ad Copywriting**: Draft high-CTR headlines and descriptions leveraging the "Richard Du" persona.
4. **Conversion Tracking Setup**: Advise the user on setting up Google Analytics 4 (GA4) or Google Ads conversion tags on the Next.js site (e.g., tracking clicks on outbound affiliate links for VPNs/eSIMs).

## 6. Important Notes for the Next Agent
- **No Tailwind**: If you need to add UI components, write vanilla CSS or inline styles.
- **Maintain SSG**: Do not add `getServerSideProps` or dynamic server components (`cookies()`, `headers()`) that would break the static export, unless absolutely necessary for a new feature.
- **Affiliate Links**: The site is designed to be monetized via affiliate links (VPNs, eSIMs, Insurance). Current outbound links (e.g., `href="#"`) need to be replaced with actual tracking links when the user provides them.
