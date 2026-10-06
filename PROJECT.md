# Project Overview

Lightweight lead-generation landing page for a payment-processing sales business. Static HTML + SCSS + vanilla JS. Primary goal: convert business owners into booked savings-analysis calls.

## Business

**SwipeX** helps business owners reduce the credit-card processing costs their business absorbs by reviewing current merchant statements and evaluating alternative payment-processing setups. Exact legal entity name, processor relationships, and specific program model (e.g., dual pricing / cash discount / interchange-plus): **TBD**.

## Website Purpose

Generate qualified leads from San Bernardino-area business owners interested in lowering processing costs. Educate → show value → book a consultation / statement review.

## Target Audience

Primary: San Bernardino-area business owners who accept credit/debit card payments and currently absorb processing fees.

Verticals in scope: restaurants, salons/barbers, auto shops, retail, contractors, medical/dental, service businesses, and other card-heavy local merchants.

## Geographic Strategy

**Primary market:** San Bernardino, California  

**Secondary regional relevance:** San Bernardino County / Inland Empire (mentioned only as supporting context; not city-page expansion yet)

**Future expansion:** Only into cities SwipeX genuinely serves (candidates if verified: Rialto, Colton, Redlands, Fontana, Riverside, Ontario). No doorway pages; each market needs real service proof and unique content.

## Primary Conversion

**Request a processing-cost / savings analysis** (scheduler TBD — Calendly or Cal.com).

Funnel: land → understand fee cost → watch explainer → see estimated costs → book review.

## Secondary Conversions

- Watch explainer video
- Use savings calculator
- Expand FAQ items

No competing primary CTAs.

## Core Value Proposition

SwipeX helps merchants see what processing is really costing them and evaluate whether a different payment setup could reduce what they absorb, based on their statement rather than generic averages. Positioning emphasizes clarity and a no-obligation review. It does not promise zero fees or unsupported savings.

## Messaging

**Live (hero):**
- Eyebrow: “Merchant services for San Bernardino-area businesses”
- H1: “How Much Are Credit Card Fees Costing Your Business?”
- Subhead: SwipeX helps San Bernardino merchants review their current processing costs. We look at your statement to see if a different payment setup could reduce what you absorb, instead of giving you a generic sales pitch.
- Primary CTA: “Review My Processing Costs”
- Video label: “See how businesses reduce processing costs”
- Trust: No-obligation statement review · Serving San Bernardino-area merchants · Built around your real numbers

**Other CTAs:**
- Calculator / booking: “Get My Savings Analysis”
- Sticky mobile: “Review My Costs”
- Final H2: “Find Out What Processing Is Really Costing You”

**Local positioning:** Cost-visibility + statement review for San Bernardino merchants (not “zero fee” positioning).

**A/B candidates (not live):**
1. H1: “San Bernardino Businesses: Are Processing Fees Eating Your Margins?” + CTA “Get My Savings Analysis”
2. H1: “Keep More of Every Card Sale” + subhead with San Bernardino + CTA “Check My Current Fees”

**Avoid until verified:** savings guarantees, “zero fees,” “free credit card processing,” specific rate promises, fake testimonials, fabricated merchant counts, unverified “free” consultation pricing.

## Copywriting Rules

Permanent guidelines for all user-facing copy (site, metadata, ads, email, social, future pages) unless explicitly changed later.

### Voice

All copy must sound natural, human, direct, and commercially credible. Write like an experienced human copywriter who understands business owners, not like an AI assistant.

**Default tone:** direct, confident, professional, clear, practical, financially focused, easy to scan.

**Avoid:** hype, exaggerated enthusiasm, corporate jargon, robotic wording, overexplaining, overly formal or overly clever phrasing.

### Do not use

- Em dashes
- Excessive semicolons or colons
- Overly symmetrical sentence structures
- Repetitive “not only… but also…” constructions
- Repetitive “whether you’re…” phrasing
- Overly polished corporate filler
- Generic motivational language
- Unnecessary rhetorical questions
- Excessive three-item lists used only for style
- Repetitive sentence openings
- Unnatural transitions
- Inflated adjectives
- Phrases that sound like generic AI marketing copy

### Banned filler phrases

Examples (not exhaustive): “Unlock your potential,” “Take your business to the next level,” “Revolutionize your business,” “Empowering businesses,” “Seamless solutions,” “Tailored solutions,” “In today’s fast-paced world,” “At the end of the day,” “Game-changing,” “Cutting-edge,” “Transform the way you…,” “Designed with you in mind.”

### Prefer

- Short sentences
- Natural contractions where appropriate
- Plain business language
- Specific claims (only when verified)
- Concrete examples
- Direct benefits
- Conversational but professional phrasing
- Simple punctuation: periods, commas, parentheses, or short separate sentences (never em dashes)

### AI copy review (required before shipping)

Before finalizing new or revised website copy, check for:

1. Em dashes
2. Repetitive sentence patterns
3. Generic AI-style phrases
4. Excessive adjectives
5. Corporate filler
6. Unnecessarily long sentences
7. Awkward transitions
8. Repeated three-part constructions
9. Claims that sound exaggerated or vague
10. Wording a real business owner would be unlikely to say or understand

Rewrite anything that fails this review. Keep conversion intent, SEO meaning, and verified claims intact.

## Page Structure

1. Header (logo, How It Works, Savings, FAQ, primary CTA)
2. Hero (headline, copy, video facade, CTA, trust line)
3. Problem / cost of processing (illustrative stats)
4. Savings calculator
5. How it works (4 steps)
6. Who it’s for (business-type cards)
7. Social proof (placeholders only)
8. Booking / consultation CTA
9. FAQ
10. Final CTA
11. Footer

## Hero

Loss-aversion H1 focused on cost visibility. Local relevance in eyebrow + subhead (not keyword-stuffed H1). Video remains primary visual (facade). CTA drives to statement/savings review.

## Video

- Purpose: short explainer of the problem and approach
- Status: **placeholder** — no real video yet
- Label: “See how businesses reduce processing costs”
- Hosting: YouTube or Vimeo (facade supports both via `data-video-provider`)
- Thumbnail: replace facade placeholder with WebP/AVIF
- Config: `data-video-id` / `data-video-provider` on `.video-facade`
- Player loads only after user click

## Savings Calculator

**Inputs:** monthly card sales ($), current processing rate (%)  
**Outputs:** estimated monthly expense, estimated annual expense  
**Formula:** `monthly = sales × (rate / 100)`; `annual = monthly × 12`  
**Status:** basic estimate only; savings-delta and program-specific math deferred until business rules defined  
**CTA:** “Get My Savings Analysis” → `#book`

## CTA Strategy

Primary wording: **Review My Processing Costs** (hero/nav/sticky) — low-friction, specific, financially relevant.  
Secondary: **Get My Savings Analysis** (calculator/booking).  
Avoid generic “Book a Call.” Do not claim “free” until consultation pricing is verified.

## Lead Capture / Booking

- Provider: **TBD** (Calendly / Cal.com / other)
- Current URL placeholder: `https://example.com/book`
- Swap via the booking `<a href>` and keep `data-booking-url` in sync
- Privacy / terms pages: placeholders (`/privacy.html`, `/terms.html`)

## Integrations

None yet. Planned: analytics, ad pixels, CRM, scheduler embed/link.

## Design System

**Primary (teal):** `#01808a` (CTA fill) derived from brand `#01a0aa`  
**Secondary (green accent):** `#9bca3b` (highlights, dark-band CTAs, savings cues)

**Supporting palette:**
| Token | Value | Role |
|---|---|---|
| `$color-primary` | `#01808a` | Primary CTAs (AA with white) |
| `$color-primary-hover` / `active` | `#016d75` / `#015f66` | Button states |
| `$color-primary-dark` / `light` | `#014e54` / `#e6f5f6` | Emphasis text / tints |
| `$color-brand-teal` | `#01a0aa` | Raw brand — icons/accents only |
| `$color-secondary` (+ hover/dark/light) | `#9bca3b` family | Accent / savings |
| `$color-background` / `alt` | `#f4f7f8` / `#eaf3f4` | Page + section rhythm |
| `$color-surface` | `#ffffff` | Cards, header, calculator |
| `$color-text` / `muted` / `light` | `#142428` / `#4f5c63` / `#fff` | Hierarchy |
| `$color-ink` | `#142428` | Footer + booking band |
| `$color-border` / `strong` | `#d5dee0` / `#b4c2c5` | Dividers / inputs |
| `$color-focus` | `$color-primary` | Focus rings |
| `$color-success` | `$color-secondary-dark` | Positive cues |
| `$color-error` | `#b42318` | Form errors (ready) |

**Typography:** System font stack (no web fonts). Tight heading tracking (`-0.02em`).  
**Spacing:** `$section-spacing-mobile: 2.75rem` → `$section-spacing: 4.25rem`; `$container-width: 70rem`.  
**Radius:** sm `0.25rem` / default `0.5rem` / lg `0.75rem` / buttons `0.375rem`.  
**Shadows:** Soft `$shadow-sm` / `$shadow-md` only — no heavy elevation.

## SCSS Variables

All theme controls live in `scss/_variables.scss`. Significant visual changes should start there.

## Assets

- `assets/images/swipex-logo.webp` / `swipex-logo-sm.webp` — transparent logo for light backgrounds (~4–7KB)
- `assets/images/swipex-logo-on-dark.webp` / `-sm.webp` — light wordmark for dark footer (~4–8KB)
- PNG fallbacks at 200px for older browsers
- `assets/images/swipex-logo-source.jpg` — original export (archive; not linked on page)
- `assets/icons/favicon.svg` — dual-chevron X mark (~300B)
- `assets/icons/swipex-logo.svg` (+ `-on-dark`) — vector fallback / future use
- `scripts/knockout-logo.swift` — regenerates transparent PNG from source if logo updates
- Header + footer use `<picture>` WebP with width/height (no CLS); footer logo is `loading="lazy"`

## SEO

**Primary intent:** Local commercial — San Bernardino merchants seeking lower / clearer credit card processing costs or a statement review.

**Primary location:** San Bernardino, CA  

**Keyword themes (natural use, not stuffing):**
- credit card processing San Bernardino
- merchant services San Bernardino
- payment processing San Bernardino
- processing statement review / effective rate

**Metadata approach:** Title + description name SwipeX, San Bernardino, cost review / merchant services; H1 focuses on cost question; geo reinforced in eyebrow, subhead, FAQ, footer.

**Local content strategy:** One strong San Bernardino landing page first; FAQ covers merchant questions + CA pricing nuances without legal advice; testimonials later with city + industry; expand cities only with real service proof.

**Research notes (2026-10-05):** Organic SERPs for local queries are dominated by city-landing pages from QuadraPay, Local Payments, BizTech, etc., often with aggressive savings/rate claims. Map pack mixes payment agents with unrelated check-cashing / print shops—entity clarity and GBP (if eligible) matter. Merchants search around rates, POS, cash discount / dual pricing, and statement reviews.

## Local SEO

**Google Business Profile:** Status unknown. Recommend creating a GBP only if SwipeX qualifies (physical office customers can visit, or legitimate service-area business with policy-compliant coverage). **Do not fabricate an office address for rankings.**

**NAP:** Phone, email, and street address are **placeholders / unverified**. Footer currently uses example.com contact stubs.

**Service-area strategy:** Lead with San Bernardino; County / Inland Empire as secondary context only. No multi-city doorway pages yet.

**Citation opportunities (after NAP verified):** Apple Business Connect, Bing Places, relevant CA / Inland Empire directories, chamber listings, industry associations—consistent NAP only.

**Local testimonial strategy:** Prioritize verified quotes with business name (or initials), industry, city (San Bernardino or served city), and approved result. Placeholders already structured for city + industry.

## AI Search Optimization

**Entity description AI systems should understand:**
- **Who:** SwipeX (also styled SWIPEX)
- **What:** Payment-processing / merchant-services provider (or sales representative—confirm exact role) that reviews merchant statements and helps evaluate alternative processing setups
- **Who it serves:** Business owners / merchants who accept cards
- **Where:** San Bernardino, California (primary); San Bernardino County / Inland Empire (secondary)
- **Problem:** Merchants often absorb substantial card-processing costs; effective rate is unclear from statements
- **Solution:** Statement-based cost review and evaluation of alternative payment setups that may reduce absorbed fees
- **Action:** Request a processing-cost / savings analysis

**Structured data:** Minimal `Organization` JSON-LD on homepage with name, description, `areaServed`, `knowsAbout`. No address, phone, ratings, or prices until verified. FAQPage schema deferred until more answers are verified. LocalBusiness subtype deferred until NAP / GBP model confirmed.

## Claims / Compliance

| Status | Item |
|---|---|
| Allowed | Educational framing; “may reduce what they absorb”; statement review; San Bernardino service-area language |
| Prohibited until verified | Guaranteed savings, zero-fee / free processing claims, fake social proof, invented rates, fake address |
| Needs verification | Exact program model (dual pricing / cash discount / IC+), equipment, contracts, pricing, timelines, card brands, “free” consult |
| CA note | Civil Code §1748.1 restricts surcharges historically while allowing cash discounts; Italian Colors affects enforcement nuance; SB 478 honest-pricing rules also relevant. Site gives general info only—not legal advice. |

## Technical Architecture

- Semantic HTML5 (`index.html`)
- SCSS → compiled CSS (`scss/` → `css/styles.css`) via official `sass` package
- Vanilla JS (`js/main.js`): nav, video facade, calculator, year stamp
- No frameworks, no bundler, no CSS framework
- Prod ship: HTML + CSS + minimal JS

## Performance Requirements

- Minimal JS, deferred script
- Video facade (no eager third-party iframe)
- System fonts
- Lazy-ready patterns for below-fold images (add `loading="lazy"` + dimensions when assets land)
- Compressed CSS via `npm run build`
- Prefer WebP/AVIF + SVG when real assets are added

## Accessibility Requirements

- Skip link, semantic landmarks, one H1
- Native `<button>`, labeled form inputs, `<details>`/`<summary>` FAQ
- Visible `:focus-visible` styles
- `prefers-reduced-motion` respected
- Sufficient contrast targeted via theme variables

## Business Rules

- Do not invent rates, savings, testimonials, partnerships, or compliance claims
- Calculator results are estimates only, not quotes or guarantees
- Placeholder copy must remain clearly marked until verified
- Do not fabricate NAP, GBP addresses, or city pages for markets not served
- Follow **Copywriting Rules** for all user-facing copy (no em dashes, no generic AI phrasing)

## Analytics

Not implemented. Recommended later: page view, video play, calculator use, CTA clicks, booking outbound click, geo landing intent.

## Completed

- Project scaffold (HTML / SCSS / JS / assets)
- Sass `dev` + `build` scripts
- Theme variables system
- Full landing section markup
- Video facade pattern
- Savings calculator (basic expense estimate)
- Mobile nav
- Accessible FAQ (`details`/`summary`)
- SEO meta placeholders
- `PROJECT.md` + `README.md`
- Brand color system + visual UI pass
- Sticky mobile CTA
- SWIPEX logo (WebP + favicon)
- San Bernardino hero rewrite + local/AI SEO messaging
- Minimal Organization JSON-LD (verified facts only)
- FAQ updates for CA fee/dual-pricing education + SwipeX entity clarity
- **Copywriting Rules** added to PROJECT.md (permanent)
- **Full site copy review:** em dashes removed from user-facing copy; AI-sounding phrasing cleaned; San Bernardino intent preserved

## Current Work

Copywriting rules documented and applied. Next: verify NAP, program model, and booking URL.

## Next Steps

1. Verify NAP (phone, email, address if any) and whether SwipeX qualifies for Google Business Profile as office or service-area business
2. Confirm exact payment program model (dual pricing / cash discount / IC+ / other)
3. Replace booking URL with real scheduler
4. Produce explainer video + thumbnail aligned to hero copy
5. Collect San Bernardino-area testimonials (name, industry, city, approved result)
6. Add OG image with local headline
7. Wire analytics + conversion events
8. Create Privacy / Terms pages
9. Optional: FAQPage schema after more answers verified
10. Expand to nearby cities only after San Bernardino proof + real service coverage

## Backlog

- Local video file fallback (in addition to YT/Vimeo)
- Statement-upload lead form
- A/B test hero variants documented in Messaging
- LocalBusiness schema once NAP/GBP model confirmed
- Custom brand fonts (self-hosted, subsetted) only if brand requires it
- Hide sticky CTA when booking section is in view (minor UX polish)
- Chamber / citation builds after NAP lock

## Decisions

| Decision | Why |
|---|---|
| No React/Next/Tailwind/etc. | Max performance, low overhead, easy maintainability |
| Sass-only tooling (`@use` modules) | Theme variables without a bundler; no deprecated `@import` |
| Official `sass` package only | Zero runtime deps; browser gets HTML/CSS/JS only |
| Video facade | Avoid third-party JS/iframe until interaction |
| System fonts first | Core Web Vitals; brand fonts later if needed |
| `details`/`summary` FAQ | Accessible, no JS required |
| Placeholder social proof clearly labeled | Compliance: no invented testimonials |
| Teal primary / green secondary | Trust + AA CTAs; green as accent/savings |
| Hero = left copy / right video | Conversion-first layout |
| Sticky mobile CTA | Social/ad traffic often mobile |
| Logo = transparent WebP + SVG favicon | Speed + CLS control |
| **Primary market = San Bernardino before city expansion** | Build authority where service is focused; avoid doorway pages |
| **H1 = cost question (not city-stuffed)** | Stronger conversion clarity; geo in eyebrow/subhead/meta/FAQ |
| **CTA = “Review My Processing Costs”** | Lower friction than “Book a Call”; matches statement-review intent in SERPs |
| **No “free” / “zero fee” claims in live copy** | Pricing and program model not verified |
| **Organization schema only (no LocalBusiness yet)** | Avoid fabricating address/phone/ratings |
| **Do not invent GBP office address** | Policy risk; use service-area model only if legitimate |
| **No em dashes / anti-AI phrasing in site copy** | Permanent Copywriting Rules for human, credible merchant messaging |

## Open Questions

- Legal business name / DBA beyond SwipeX?
- Exact role: independent agent, ISO, or processor relationship?
- Exact payment program model (dual pricing, cash discount, surcharge-compliant structure, interchange-plus, etc.)?
- Final domain / canonical URL?
- Verified phone, email, physical address (if any)?
- Do customers visit an office, or is SwipeX service-area only?
- Full list of cities/counties actually served?
- Google Business Profile exists?
- Booking provider and URL?
- Explainer video script, length, hosting?
- Typical setup time, equipment needs, contract terms, pricing?
- Which card brands / payment methods are supported?
- Is the savings analysis free? (do not claim until confirmed)
- Real San Bernardino / Inland Empire testimonials or case studies?
- Analytics / ad accounts to connect?
- Official vector logo with exact brand font paths?
- Final FAQ answers for equipment, contracts, card brands, and pricing (still pending, so copy stays marked incomplete)

## Change Log

- **2026-10-05** - Added permanent Copywriting Rules to PROJECT.md. Reviewed and updated all user-facing site copy (removed em dashes, humanized phrasing, kept San Bernardino SEO intent and verified claims only).
- **2026-10-05** - San Bernardino local SEO + AI entity pass: hero rewrite, metadata, Organization schema, FAQ/entity copy, footer service-area language, PROJECT.md Local SEO / AI Search / Geographic Strategy.
- **2026-10-05** - Added SWIPEX logo: transparent WebP (light + on-dark), PNG fallbacks, SVG favicon/X, header + footer placement. Optimized for transfer size and CLS.
- **2026-10-05** - Visual design system: teal primary / green secondary, supporting palette, CTA states, calculator hierarchy, section backgrounds, video facade polish, sticky mobile CTA.
- **2026-10-05** - Initial boilerplate: architecture, theme system, landing sections, calculator, video facade, docs, Sass workflow. Sole dependency: `sass` (dev).
