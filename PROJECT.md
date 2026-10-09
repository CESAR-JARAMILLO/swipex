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
- Problem example: “Use my own numbers” → `#savings` (not a booking offer)
- Calculator: “Review My Processing Costs” → `#book`
- How it works: “Review My Processing Costs” → `#book`
- Booking section: “Review My Processing Costs” opens the scheduler. Heading: “A 30-Minute Look at Your Statement”
- Sticky mobile: “Review My Costs” opens the scheduler
- Final H2: “Ready for the 30-minute review?” The button opens the scheduler
- Footer: “Review My Processing Costs” opens the scheduler

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
2. Hero (headline, copy, CTA, trust line; static review card until a real video exists)
3. Problem / cost of processing (one worked example; yearly cost is the large figure)
4. Savings calculator
5. How it works (4 steps; heading “What the Review Looks Like”; nav label stays “How It Works”)
6. Who it’s for (seven business types, inline icons, no booking button)
7. Social proof (Socorrito Store quote, no photo; two cards labeled temporary templates)
8. Booking / consultation CTA
9. FAQ (four answered questions, centered column; unfinished items stay in this file)
10. Final CTA (“Ready for the 30-minute review?”; button opens the scheduler)
11. Footer

## Hero

Loss-aversion H1 focused on cost visibility. Local relevance in eyebrow + subhead (not keyword-stuffed H1). Do not rewrite the H1 for launch. CTA drives to the statement review.

The headline can be understood quickly. The hero still fails a 5-second trust check: the main visual is a non-functional video placeholder ("Video thumbnail placeholder"), and the primary CTA only scrolls to `#book`. A play button that does nothing must not ship.

Until a real video exists, replace that media with a static card: what the review covers, what to bring, and that there is no obligation to switch. Video becomes the primary visual only when the facade loads a real player.

## Video

- Purpose: short explainer of the problem and the statement review
- Status: **not launch-ready.** `data-video-id` is `PLACEHOLDER_VIDEO_ID`. Click logs a console message and does not load a player.
- Launch rule: video is optional. Do not ship this control. Use the static review card until a real ID, thumbnail, and captions or a short transcript exist.
- Label to soften before a real video ships: “See how businesses reduce processing costs” implies verified results. Prefer “See how a statement review works” unless a real result supports the stronger line.
- When produced: about 60 to 90 seconds. Open on the fee problem and the review. Then why statements are hard to read, what the review includes, what to bring, and how to book. CTA stays on the page before and after the player.
- Hosting: YouTube or Vimeo (facade supports both via `data-video-provider`)
- Thumbnail: WebP or AVIF, with width and height set
- Config: `data-video-id` / `data-video-provider` on `.video-facade`
- Player loads only after user click

## Problem / cost of processing

One worked example between the hero and the calculator. It shows what a rate costs over a year. It does not estimate savings, and it is not a quote.

**Live:**
- H2: “Processing Fees Add Up Faster Than Most Owners Expect”
- Setup: a San Bernardino shop doing about $50,000 a month in card sales, at a 2.9% effective rate
- Math: $50,000 × 2.9% = $1,450 a month
- Dominant figure: **$17,400**, labeled “Annual processing cost in this example”
- Note, once: sample figures, not a quote. Real cost depends on volume, card mix, pricing model, and processor terms
- Bridge: “Use my own numbers” → `#savings`

The yearly figure is the only large number. Do not split the example into equal stat cards, and do not repeat “Placeholder example” on each figure. Do not add a second rate, a savings delta, or a booking button here. The next step is the calculator.

## Savings Calculator

**Inputs:** monthly card sales ($), current processing rate (%)  
**Outputs:** monthly cost as the small math line. Annual cost is the only large figure.  
**Formula:** `monthly = sales × (rate / 100)`; `annual = monthly × 12`  
**Status:** basic estimate only. Savings-delta and program-specific math stay deferred until business rules are defined.  
**Placement:** after the problem section, not in the hero. Do not add a savings estimate.  
**Defaults:** $50,000 and 2.9%, matching the worked example. The label stays “Annual processing cost in this example,” with “These match the example. Change either number.” After the owner edits a field, the label becomes “Your estimated annual processing cost.” Do not clear the defaults.  
**Lead capture:** none in the calculator. The CTA continues to `#book`.  
**Unknown rate:** “If you don't know your rate, a recent statement is enough. You can still book the review.” Do not require the rate to book.  
**CTA:** “Review My Processing Costs” → `#book`  
**Under the button:** “We'll look at a recent statement. There's no pressure to switch.”  
**Note, once, under the yearly figure:** estimate only, not a quote. Does not include card mix, interchange, or monthly fees.  

On small screens the yearly figure sits above the inputs. From the tablet breakpoint, inputs are on the left and the result is on the right. The yearly figure should stay at least as large as it is in the worked example on a phone.

## How it works

Four steps after the calculator. The heading is “What the Review Looks Like.” The nav label stays “How It Works.”

**Live:**
- Intro: “Bring a recent statement. We go through your rates, fees, and volume together.”
- 1. Review your statement. Share a recent statement so we can see your rates, fees, and volume.
- 2. Walk through your numbers. We look at what you are paying now, based on your statement, not a generic average.
- 3. See what fits. If a different setup fits how you take cards, we explain it. If it does not, we say so.
- 4. Decide if a change is worth it. You leave with a clear read of the statement. There is no pressure to switch.
- Close: “Review My Processing Costs” → `#book`, with “Bring a recent statement if you have one.”

No visible step number. Each card has a teal bar across the top. The list stays ordered, so the sequence is still available to assistive tech. Steps stay one per row until the large breakpoint, then four columns. Do not title a step as a savings calculation. Do not end the process on switching. Do not add product options, timelines, or equipment until those are confirmed.

## Who it's for

Seven business types after the review steps. The heading stays “For Businesses That Take Cards Every Day.”

**Live:**
- Intro: “If your San Bernardino business takes cards as part of everyday sales, the review starts with your statement. That includes:”
- Types: Restaurants, Salons / Barbers, Auto Shops, Retail, Contractors, Medical / Dental, Other local services
- Close: “If your type is not listed, you can still book the review.”

Each type uses a small inline stroke icon in the button teal. No icon font, no image request. Do not add a booking button here. Do not add a savings line under any type. The last row stays centered when the count does not fill the grid.

## Social proof

Three cards after the business types, then the booking section. No photo. No second button.

**Live:**
- H2: “From Local Merchants”
- Intro: “A San Bernardino store, in their own words.”
- Real quote, with quotation marks: “SwipeX changed how we take card payments. We've saved thousands in fees, and support has been there when we needed it.” Attribution: Socorrito Store, San Bernardino, CA.
- The other two cards say “Temporary template” and that they are not a customer result. Do not write a fake business or a fake quote in those cards.

The quote spans the full row from tablet width. The two templates sit side by side under it. On a phone everything stacks. Remove the template cards before launch if they are still empty. Do not add review schema.

## FAQ

Four questions, each a `details` disclosure. The heading and the list are centered. Question text stays left-aligned inside each card. No “show all” control.

**Live:**
- Intro: “A few answers before you book the review.”
- What SwipeX does for San Bernardino businesses: a cost review, usually a 30-minute statement review.
- Can you review a statement: yes. Bring a recent statement. 30 minutes. Uses their volume, rates, and fees.
- California fee pass-through: Civil Code §1748.1, cash discounts may be allowed, not legal advice.
- Dual pricing and cash discount: definitions only. Do not say SwipeX offers either until the program model is confirmed.

**Off the page until answered:** how the program works, equipment, accepted card brands, setup time, contract terms, and pricing. Do not invent a rate. A pricing answer can return only as “the 30-minute review is where we look at your numbers,” with no figure attached.

## CTA Strategy

Primary wording: **Review My Processing Costs** (hero, nav, calculator, how it works, final, footer). The sticky bar shortens it to “Review My Costs.” Specific and financially relevant.

The scheduler links use those same words. The `#book` heading is “A 30-Minute Look at Your Statement.” The final heading is “Ready for the 30-minute review?” Do not put “savings” on a button. The call is 30 minutes. Do not claim the review is free.

Path: hero, nav, calculator, and how it works scroll to `#book`. “Use my own numbers” in the problem section scrolls to `#savings` only. The `#book` button, the final button, the sticky bar, and the footer link open the scheduler in the same tab. They share one URL and `data-booking-url`. Do not leave a new-tab link to a placeholder URL.

Phone, once verified, stays in the footer as contact. It is not a second hero button.

Avoid generic “Book a Call.” Do not claim “free” until consultation pricing is verified.

## Lead Capture / Booking

- Provider: **TBD** (Calendly, Cal.com, or other)
- Current URL: `https://example.com/book` (not a real scheduler)
- Swap the shared scheduler URL on the `#book` button, the final CTA, the sticky bar, and the footer link. Keep each `data-booking-url` in sync.
- Prefer the same tab, or embed the scheduler in `#book`. The `#book` link does not use `target="_blank"`.
- Call length: **30 minutes**. Say so on the booking band. Bring a recent statement if they have one. No pressure to switch.
- Qualifying questions belong on the scheduler, not in a long on-page form: business type, monthly card-volume range, city, and whether they have a recent statement. Ask current processor, exact rate, and terminal count on the call.
- Minimum card volume is unknown. Add it as a scheduler question or a disqualifier once the business sets a floor.
- Privacy and Terms: the footer links to `/privacy.html` and `/terms.html`, and those files are not in the project (404). Remove the links or publish real pages before launch.

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

**Local testimonial strategy:** Prioritize verified quotes with business name (or initials), industry, city (San Bernardino or served city), and approved result. The live quote is Socorrito Store, San Bernardino, CA. Two other proof cards are labeled temporary templates and are not results.

**Public page rule (2026-10-06):** Do not leave placeholder testimonials or unanswered FAQ items in indexable HTML. Labeled fake proof and “Answer pending” notes are what Google and answer engines can quote. Keep those notes in this file until the facts exist.

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

**Do not publish unfinished entity facts.** example.com phone and email, pending FAQ notes, and placeholder testimonials must not ship. Once call length, what to bring, and who the owner meets are known, add a short factual block in HTML: what SwipeX is, what the review includes, where it operates, and how to book. That is the useful answer-engine improvement. No extra schema until those facts are verified.

## Claims / Compliance

| Status | Item |
|---|---|
| Allowed | Educational framing; “may reduce what they absorb”; statement review; San Bernardino service-area language |
| Prohibited until verified | Guaranteed savings, zero-fee / free processing claims, fake social proof, invented rates, fake address |
| Needs verification | Exact program model (dual pricing / cash discount / IC+), equipment, contracts, pricing, timelines, card brands, “free” consult |
| Soften before launch | Video label “See how businesses reduce processing costs” implies proven outcomes. Soften it or support it before launch. The booking heading is now “A 30-Minute Look at Your Statement.” |
| Confirm wording | “No-obligation” appears in the hero, meta description, and booking section. Confirm it means no duty to switch, and that it does not mean the analysis is free. |
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
- Placeholder copy must remain clearly marked in this file until verified
- Do not publish internal notes on the public page (pending answers, placeholder testimonials, developer video copy)
- Do not fabricate NAP, GBP addresses, or city pages for markets not served
- Follow **Copywriting Rules** for all user-facing copy (no em dashes, no generic AI phrasing)

## Analytics

Not implemented. Planned for first production launch with the lightest reasonable GA4 tag (no heavy cookie platforms or marketing automation).

**Primary conversion:** `booking_click`, the outbound click to the real scheduler URL (request a processing-cost / savings analysis). Mark that event as the GA4 key event once wired.

`generate_lead` is not a launch event. Use it only after a thank-you URL or a confirmed completion exists, and then make that the key event instead of counting both.

**Event names** (avoid double-firing):

| Event | Trigger | Role |
|---|---|---|
| `page_view` | GA4 default | Baseline |
| `cta_click` | In-page CTA click. `location`: `hero`, `nav`, `problem`, `calculator`, or `how` | Diagnostic. `problem` scrolls to `#savings`. The others scroll to `#book`. None of these is the conversion. |
| `booking_click` | Click on a scheduler link: `#book`, final CTA, sticky bar, or footer. One event per click. | Launch key event |
| `calculator_use` | Once per page view, after the visitor changes an input and a result is shown | Diagnostic. Do not fire on every keystroke. |
| `video_play` | Real video ID loads a player | Diagnostic. Do not wire while the ID is still a placeholder. |
| `generate_lead` | Thank-you page or confirmed scheduler completion | Later key event. Not at launch. |

Do not track FAQ toggles, scroll depth, or heatmaps in v1. Do not add ad pixels until a test booking and GA4 both work.

Do not send phone numbers, emails, statement details, or other personal information as event parameters.

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
- **Launch Checklist** added to PROJECT.md (planning only; launch items not yet complete)
- **2026-10-06 lead-gen audit** recorded in this file (CRO strategy, launch blockers, measurement). No site code was changed in that pass.

## CRO Strategy

Audit date: 2026-10-06. The goal is qualified booked reviews with San Bernardino-area owners, not traffic.

### Recommended flow

Landing page (cost problem, cost calculator, how the review works, answered FAQs only)
→ one CTA, “Review My Processing Costs”
→ `#book` explains what the review is
→ real scheduler with a few qualifying questions
→ appointment

Hero, nav, calculator, and how it works stop at `#book`. The final button, the sticky bar, and the footer link skip that scroll and open the scheduler.

Do not add a second hero CTA. Do not collect a long form on the page in v1.

### Lead quality

Ask on the scheduler: business type, monthly card-volume range, city, and whether they have a statement.

Ask on the call: current processor, exact rate, terminal count.

Set a minimum volume when the business knows it. Until then, the volume range is how you filter after the booking.

### What not to do yet

- Do not estimate savings in the calculator.
- Do not A/B test headlines, button color, or spacing. There is not enough traffic, and the booking path is still a placeholder.
- Do not buy ads before a test booking succeeds and `booking_click` shows in GA4.
- Do not build city pages.

### Phases

**Pre-launch.** Objective: a page a skeptical owner can finish a booking on. Tasks: lock the review facts, remove unfinished public content, connect a real scheduler, write Privacy/Terms or unlink them. Depends on the business facts in **Open Questions**, not on a new framework. Success: one completed test booking on a phone, with no example.com contact, no fake proof, and no dead play button.

**Launch.** Objective: the live URL is indexable and measurable. Tasks: domain and HTTPS, production canonical and Organization `url`, `robots.txt`, `sitemap.xml`, GA4 key event `booking_click`, Search Console, Lighthouse on the production URL (target 90+ in each category without hurting the booking path). Depends on the pre-launch path. Success: a real visit records a page view, a test booking records `booking_click` once, and the homepage can be indexed.

**First 30 days.** Objective: learn from real owners. Tasks: direct outreach and existing relationships first; Google Business Profile only if eligible; write down why each person booked or did not, and whether they showed up. Success: a short log of bookings, show rate, and whether volume was a fit. Ads stay off.

**Optimization.** Objective: fix the biggest drop from visit to a qualified booking. Start only after real leads exist. First change to consider: making “what happens next” obvious beside the hero CTA. Then a plain hint on the calculator for owners who do not know their rate. Then a real video against the static card. One change at a time. Keep a winner only if booking rate or lead quality improves. Write the decision in **Decisions**.

**Local growth.** Objective: be a credible San Bernardino option in maps and organic results. Tasks: consistent NAP, GBP if eligible, one verified merchant result, citations and chamber listings after NAP is stable, FAQPage schema only after answers are real. Success: the site, GBP, and citations show the same name, phone, and area.

**Expansion.** Objective: a clearer offer, then nearby markets SwipeX actually serves. Tasks: program-model copy, savings math only if the model supports it, video, statement upload, CRM, paid search, then a city page only with proof. Success: a verified offer and at least one real local result before any new market page.

## Current Work

**Pre-launch lead path.** The landing page strategy is in place: cost-focused hero, cost-only calculator, San Bernardino positioning, lightweight HTML/SCSS/JS. It cannot generate a qualified lead yet.

The scheduler URL is `https://example.com/book`, shared by the booking band, the final CTA, the sticky bar, and the footer link. Footer phone and email are fake. Privacy and Terms links 404. The hero play button does nothing and shows developer placeholder copy. The proof section is the Socorrito Store quote plus two cards labeled temporary templates. The photo is not on the page. Unanswered FAQ items are off the page.

Clear that public page and connect a real scheduler before domain, GA4, and Search Console. Program-model claims stay deferred. The 2026-10-06 audit did not change site code.

See **CRO Strategy** for the flow, lead-quality rules, and phases.

## Next Steps

Do these first. Later phases are in **CRO Strategy**. Do not expand into multi-city SEO, CRM, ads, or a framework.

1. Write down the minimum facts for a real review: who the merchant talks to, phone, email, whether the review is free, and what they receive. Call length is 30 minutes. Confirm “no-obligation” does not mean the review is free.
2. Take unfinished content off the public page: the dead video play button (use a static “what the review covers” card) and the example.com phone and email. Remove Privacy and Terms links until those pages exist. The proof photo is off the page. Two proof cards are still labeled temporary templates and should come off before launch. Unanswered FAQ items are already off the page.
3. Replace `https://example.com/book` with a working scheduler on every link that uses it: the booking band, the final CTA, the sticky bar, and the footer. Put qualifying questions there (business type, monthly volume range, city, statement yes/no). `#book` still explains the review. Complete one real test booking on a phone.
4. After that path works: hosting, HTTPS, production canonical, Open Graph, and schema URLs, `robots.txt`, `sitemap.xml`, GA4 with `booking_click` as the key event, Search Console, then Lighthouse on the live URL.
5. Get the first conversations from people SwipeX already knows or can meet locally. Record why they booked or did not. Use that before any headline test, video production, or ads.

**After a working booking path:** the rest of the **Launch Checklist**. Real explainer video, verified testimonials, program-model copy, GBP only if eligible, LocalBusiness / FAQPage schema, and nearby-city pages only with real service proof. Paid ads only after a test booking and GA4 both work.

## Launch Checklist

Operational checklist for a clean first production launch of this static HTML + SCSS + vanilla JS site. Update checkboxes as work is verified. Do not mark items complete by assumption. Targets below are goals, not guarantees.

### 1. Domain and Hosting

Keep hosting aligned with the static-site architecture (HTML/CSS/JS; no server app).

- [ ] Production hosting selected/configured
- [ ] Custom domain connected
- [ ] HTTPS/SSL enabled
- [ ] Preferred domain format selected (`www` or non-`www`)
- [ ] Redirect alternate domain version to preferred version
- [ ] HTTP redirects to HTTPS
- [ ] Production URL recorded in PROJECT.md (Open Questions / Decisions)
- [ ] Final production build (`npm run build` output) tested on actual hosting

### 2. Google Analytics 4

Use the lightest reasonable Google tag. Prefer one clearly defined primary conversion (booking / lead request). Event names: see **Analytics**.

- [ ] Create or verify GA4 property
- [ ] Add GA4 measurement ID to the project
- [ ] Add Google tag with the lightest reasonable implementation
- [ ] Verify page views in GA4 Realtime
- [ ] Define primary conversion event (`booking_click` at launch; `generate_lead` only after a thank-you URL exists)
- [ ] Track main CTA interaction (`cta_click`)
- [ ] Track successful booking/lead completion where technically possible (else outbound booking click)
- [ ] Verify events are not firing twice
- [ ] Document final analytics event names in PROJECT.md **Analytics**

### 3. Google Search Console

- [ ] Create or verify Google Search Console property
- [ ] Prefer Domain property verification where practical
- [ ] Verify ownership
- [ ] Submit sitemap
- [ ] Inspect homepage URL
- [ ] Request indexing after production launch
- [ ] Confirm Google can access the page
- [ ] Monitor indexing status after launch

### 4. Crawling and Indexing

Important page content is already in HTML (not JS-gated). Preserve that.

- [ ] Create/verify `/robots.txt`
- [ ] Confirm production is not blocked from crawling
- [ ] Confirm there is no accidental `noindex`
- [ ] Create/verify `/sitemap.xml`
- [ ] Include canonical URL on the homepage
- [ ] Confirm canonical points to the production URL
- [ ] Ensure all important content remains available in HTML
- [ ] Ensure important content does not depend on JavaScript to become crawlable
- [ ] Confirm internal links are crawlable `<a>` links
- [ ] Verify there are no broken internal links
- [ ] Verify correct HTTP status codes (homepage 200; redirects 301 as intended)

### 5. Basic SEO

Preserve the San Bernardino local commercial strategy (geo in eyebrow/subhead/meta/FAQ; H1 stays cost-focused). Do not keyword-stuff. No extra city pages for launch.

- [ ] Unique page title (SwipeX + San Bernardino + cost review / merchant services)
- [ ] Useful meta description
- [ ] One clear H1
- [ ] Logical H2/H3 hierarchy
- [ ] Descriptive link text
- [ ] Useful image alt text
- [ ] Canonical tag (production URL)
- [ ] Open Graph title
- [ ] Open Graph description
- [ ] Open Graph image (local headline; asset still needed)
- [ ] Favicon (SVG favicon already in assets; confirm live)
- [ ] Mobile viewport configured
- [ ] Page language set correctly
- [ ] Production URL used in metadata (replace placeholders)

### 6. Local SEO

Aligns with existing **Local SEO** / **Geographic Strategy**. No multi-city doorway pages. Do not invent ratings, reviews, addresses, or service areas.

- [ ] Clearly state San Bernardino, CA service relevance (already in live hero/footer; re-check after any edits)
- [ ] Confirm business name is consistent (legal name / DBA vs SwipeX still TBD)
- [ ] Confirm phone number (replace footer placeholders)
- [ ] Confirm email (replace example.com stubs)
- [ ] Confirm service area language (San Bernardino primary; County / IE secondary only)
- [ ] Add physical address only if legitimate and appropriate
- [ ] Verify Google Business Profile eligibility (office vs service-area)
- [ ] Create/optimize GBP only if eligible
- [ ] Keep NAP / business information consistent across site and profiles
- [ ] Add verified social/business profiles only when real
- [ ] Keep Organization schema accurate; add LocalBusiness only after NAP/GBP model verified
- [ ] Add Service schema only where appropriate and facts are verified
- [ ] Do not invent ratings, reviews, addresses, or service areas

### 7. Privacy and Basic Legal Pages

The footer links to `/privacy.html` and `/terms.html`, and those files are not in the project. Do not claim legal compliance without review. Remove the links until the pages exist, or publish real pages before launch.

- [ ] Privacy Policy content completed for production
- [ ] Terms / Terms of Use content completed for production
- [ ] Contact information on legal/contact surfaces matches verified NAP
- [ ] Analytics disclosure where appropriate (GA4)
- [ ] Confirm whether cookie consent is required for the actual GA4-only implementation (jurisdiction-dependent; do not assume)
- [ ] Verify booking/forms explain how submitted information will be used where needed

### 8. Performance / Lighthouse

Architecture already targets performance (system fonts, video facade, deferred JS, Sass build minify). Re-verify on the **production** URL.

**Targets:** Performance 90+ · Accessibility 90+ · Best Practices 90+ · SEO 90+  
Do not damage usability or tracking simply to chase a perfect score.

- [ ] Run Lighthouse against the production URL
- [ ] Test mobile Lighthouse
- [ ] Test desktop Lighthouse
- [ ] Compress image assets
- [ ] Prefer WebP/AVIF where appropriate (logo already WebP)
- [ ] Use SVG for logos/icons where appropriate (favicon SVG in place)
- [ ] Set image width and height (logo pattern already set; keep for new assets)
- [ ] Lazy-load below-the-fold images
- [ ] Do not lazy-load the critical LCP image if that hurts LCP
- [ ] Lazy-load video/player iframe (facade pattern: load only on click)
- [ ] Continue using lightweight video facade
- [ ] Minify production CSS (`npm run build`)
- [ ] Minify JavaScript if useful
- [ ] Defer non-critical JavaScript
- [ ] Avoid unnecessary third-party scripts (GA4 only unless a clear need)
- [ ] Avoid render-blocking resources where practical
- [ ] Avoid unnecessary font downloads (system stack)
- [ ] Check Largest Contentful Paint (LCP)
- [ ] Check Interaction to Next Paint (INP)
- [ ] Check Cumulative Layout Shift (CLS) / layout shift
- [ ] Check unused CSS/JS where relevant

### 9. Accessibility

Preserve existing patterns: skip link, landmarks, one H1, native controls, `:focus-visible`, `prefers-reduced-motion`, theme contrast targets.

- [ ] Sufficient color contrast
- [ ] Accessible CTA contrast (primary teal AA with white)
- [ ] Correct heading hierarchy
- [ ] Meaningful image alt text
- [ ] Decorative images handled appropriately
- [ ] Proper form labels (calculator inputs)
- [ ] Accessible error states (if/when forms validate)
- [ ] Keyboard-accessible interactions (nav, video play, calculator, FAQ)
- [ ] Visible focus states
- [ ] Buttons implemented as buttons
- [ ] Navigation links implemented as links
- [ ] Accessible video play control
- [ ] Adequate tap targets (including sticky mobile CTA)
- [ ] No obvious ARIA misuse

### 10. Functional QA

- [ ] Test header/navigation
- [ ] Test all CTA buttons
- [ ] Test booking link (real URL, not `example.com`)
- [ ] Test booking flow on mobile
- [ ] Test the video facade only if a real video is live (do not ship a play button that does nothing)
- [ ] Test savings calculator
- [ ] Test calculator with realistic edge cases (0, very high sales, odd rates)
- [ ] Test forms if present
- [ ] Test success/confirmation states (scheduler-side if outbound booking)
- [ ] Test mobile layout
- [ ] Test tablet layout
- [ ] Test desktop layout
- [ ] Check browser console for errors
- [ ] Check network requests for failures
- [ ] Check broken links
- [ ] Check 404 behavior on hosting
- [ ] Test at least current Chrome, Safari, and Firefox where practical

### 11. Analytics QA

- [ ] Verify GA4 loads once
- [ ] Verify page view
- [ ] Verify CTA event (`cta_click`)
- [ ] Verify video event if implemented (`video_play`)
- [ ] Verify calculator event if implemented (`calculator_use`)
- [ ] Verify booking conversion path (`booking_click` once; do not also count `generate_lead` until a thank-you URL exists)
- [ ] Confirm event parameters do not contain sensitive data
- [ ] Confirm no personal information is sent accidentally to analytics
- [ ] Mark the primary lead event as a key event / conversion in GA4

### 12. Final Pre-Launch Review

- [ ] Remove unfinished public content (placeholder proof, dead video, pending FAQ notes). Keep deferred ideas in PROJECT.md, not on the live page.
- [ ] Remove test URLs
- [ ] Remove dummy email/phone information
- [ ] Remove placeholder testimonials from the public page (labeling them is not enough). Two proof cards are still marked “Temporary template.”
- [ ] Confirm internal notes are absent from public HTML (“Answer pending”, “Placeholder testimonial”, developer video copy)
- [ ] Remove unsupported claims (no zero-fee / guaranteed savings / unverified “free”)
- [ ] Confirm copy follows PROJECT.md **Copywriting Rules**
- [ ] Search site copy for em dashes
- [ ] Confirm San Bernardino targeting is natural (not stuffed)
- [ ] Confirm logo/favicon are production-ready
- [ ] Confirm social sharing metadata
- [ ] Confirm production canonical URL
- [ ] Confirm `robots.txt`
- [ ] Confirm `sitemap.xml`
- [ ] Confirm analytics
- [ ] Confirm Search Console

### 13. Post-Launch

- [ ] Verify site is publicly reachable
- [ ] Verify GA4 production traffic
- [ ] Verify Search Console access
- [ ] Submit sitemap
- [ ] Request homepage indexing
- [ ] Check indexing status after Google processes the site
- [ ] Review Lighthouse on live production URL
- [ ] Fix high-priority production issues
- [ ] Confirm lead/booking flow with a real test
- [ ] Review analytics after first real traffic arrives

## Backlog

- Pre-launch: replace the hero video facade with a static “what the review covers” card until a real video exists
- More proof cards only after the next quote has a business name, city, and an approved result, same as Socorrito Store
- FAQ items for equipment, card brands, setup time, contracts, pricing, and how the program works, only after each answer is real
- Scheduler qualifying questions (business type, monthly volume range, city, statement yes/no)
- Short “what happens on the call” block once length, materials, and the no-switch commitment are confirmed
- Thank-you page so `generate_lead` can replace `booking_click` as the key event
- Savings-delta calculator math only after the program model is verified
- Local video file fallback (in addition to YT/Vimeo)
- Statement-upload lead form
- A/B test hero variants documented in Messaging (only after real lead volume; see CRO Strategy)
- LocalBusiness schema once NAP/GBP model confirmed
- FAQPage schema after more answers verified
- Custom brand fonts (self-hosted, subsetted) only if brand requires it
- Hide sticky CTA when booking section is in view (minor UX polish)
- Chamber / citation builds after NAP lock
- Ad pixels / CRM (only after launch measurement is stable)
- Nearby-city pages only after San Bernardino proof + real service coverage

## Decisions

| Decision | Why |
|---|---|
| No React/Next/Tailwind/etc. | Max performance, low overhead, easy maintainability |
| Sass-only tooling (`@use` modules) | Theme variables without a bundler; no deprecated `@import` |
| Official `sass` package only | Zero runtime deps; browser gets HTML/CSS/JS only |
| Video facade | Avoid third-party JS/iframe until interaction |
| System fonts first | Core Web Vitals; brand fonts later if needed |
| `details`/`summary` FAQ | Accessible, no JS required |
| One verified quote, templates labeled as templates | Labeled fake quotes still reduce trust. Socorrito Store is the only real note, with no photo. The other two cards say they are temporary templates and are not customer results. |
| Teal primary / green secondary | Trust + AA CTAs; green as accent/savings |
| Hero = left copy / right proof of the review | Video returns on the right when a real player exists. Until then, a static “what the review covers” card. |
| Sticky mobile CTA | Social/ad traffic often mobile |
| Logo = transparent WebP + SVG favicon | Speed + CLS control |
| **Primary market = San Bernardino before city expansion** | Build authority where service is focused; avoid doorway pages |
| **H1 = cost question (not city-stuffed)** | Stronger conversion clarity; geo in eyebrow/subhead/meta/FAQ |
| **CTA = “Review My Processing Costs”** | Lower friction than “Book a Call”; matches statement-review intent in SERPs |
| **No “free” / “zero fee” claims in live copy** | Pricing and program model not verified |
| **Organization schema only (no LocalBusiness yet)** | Avoid fabricating address/phone/ratings |
| **Do not invent GBP office address** | Policy risk; use service-area model only if legitimate |
| **No em dashes / anti-AI phrasing in site copy** | Permanent Copywriting Rules for human, credible merchant messaging |
| **First launch = measurable static site on custom domain** | Domain + crawl/index + GA4 + Search Console + primary booking conversion + Lighthouse targets; no framework/CRM expansion |
| **Launch key event = booking_click** | Outbound click to the real scheduler. generate_lead waits for a thank-you or completion URL. |
| Calculator shows cost, not savings | Savings math waits until the program model is verified. The yearly cost is the only large figure. Defaults stay filled and read as the example until the owner edits a field. A missing rate does not block the review. |
| Booking button = “Review My Processing Costs” | Same words as the buttons that scroll to `#book`. The heading names the 30-minute statement review. “Get My Savings Analysis” read like a second offer. |
| Final close and sticky bar open the scheduler | After the FAQ, another scroll to `#book` is an extra step. The final button, sticky bar, and footer link use the same scheduler URL. Hero, nav, calculator, and how it works still scroll to `#book`. |
| Problem section = one worked example | The yearly cost ($17,400 in the sample) is the only large figure. Four equal cards buried it, and “Placeholder example” on each card undercut the number. Still an example, not a quote or a savings claim. |
| Problem bridge = “Use my own numbers” → `#savings` | The next step is the calculator. This is not a second booking offer. |
| How it works = the review, then the same booking CTA | The section answers what the call is. Step 2 does not promise a savings calculation. Step 4 ends on the decision, with no pressure to switch. The close uses “Review My Processing Costs” → `#book`. |
| Business types = recognition, not a second offer | Inline stroke icons, no letter tiles and no extra request. “Other local services” plus “you can still book” covers owners who do not see their type. No button and no per-type savings claim. |
| Short checkmark lists stay one per row on narrow screens | A wrapped 2 + 1 row is harder to scan. The hero trust list stays one column on desktop too, because the copy column is too narrow for a clean row. |
| Qualification lives on the scheduler | A few questions there. No long on-site form in v1. |
| Phone is contact, not a second hero CTA | One primary action: the processing-cost review. |
| No dead hero video at launch | A play button that does not load a player is a dead end. |
| First traffic is direct outreach, then GBP if eligible | Paid ads wait until a test booking and GA4 both work. |
| No headline A/B until real leads exist | Learn from the first conversations before testing copy. |

## Open Questions

Ranked by impact on whether a business owner will book a qualified review.

**Highest impact (blocks a real lead):**

- Booking provider and production URL (replace `https://example.com/book`)?
- What does the owner receive on the 30-minute review, beyond a walkthrough of rates, fees, and volume? Call length is 30 minutes.
- Who does the merchant talk to (name and role)?
- Is the savings analysis free? Confirm that “no-obligation” does not mean the review is free.
- Verified phone and email (replace footer stubs)?
- Minimum monthly card volume, if any? Any industries or volumes SwipeX will not take?

**Needed before public launch:**

- Final domain / canonical URL?
- Preferred host format (`www` vs non-`www`) and production hosting provider?
- Privacy Policy and Terms content? (`privacy.html` and `terms.html` are linked and missing.)
- GA4 measurement ID / property?
- Google Search Console property and ownership method (Domain vs URL-prefix)?
- Does the GA4-only setup require a cookie consent banner for the jurisdictions you serve?

**Affects offer strength, schema, and later SEO:**

- Legal business name / DBA beyond SwipeX?
- Exact role: independent agent, ISO, or processor relationship?
- Exact payment program model (dual pricing, cash discount, surcharge-compliant structure, interchange-plus, etc.)?
- Do customers visit an office, or is SwipeX service-area only?
- Physical address, only if it is a real location customers can use (affects GBP and schema)?
- Full list of cities/counties actually served?
- Google Business Profile exists / eligible?
- Typical setup time, equipment needs, contract terms, pricing?
- Which card brands / payment methods are supported?
- More San Bernardino / Inland Empire testimonials? Socorrito Store is the first live quote. Do not add another until it has a name, city, and an approved result.
- Explainer video script, length, and host? Video can wait. A dead play button cannot ship.
- Ad accounts to connect after a test booking and GA4 both work?
- Official vector logo with exact brand font paths?
- Final FAQ answers for equipment, contracts, card brands, and pricing? Keep those items off the public page until answered.

**Decided (2026-10-06 audit):** the launch key event is `booking_click`. `generate_lead` waits for a thank-you or completion URL.

## Change Log

- **2026-10-08** - Final CTA is “Ready for the 30-minute review?” Its button, the sticky bar, and the footer link open the scheduler. “Savings analysis” is off that close. Updated Messaging, Page Structure, CTA Strategy, Booking, Analytics, Next Steps, and Decisions.
- **2026-10-08** - FAQ is four answered questions in a centered column. Pending items and internal notes are off the page. Updated Page Structure, FAQ, Current Work, Next Steps, and Backlog.
- **2026-10-08** - Booking band is “A 30-Minute Look at Your Statement.” The button matches the other review CTAs. The developer call-length note is gone. Updated Messaging, CTA Strategy, Booking, Decisions, and Open Questions.
- **2026-10-08** - Social proof intro is “A San Bernardino store, in their own words.” The Socorrito quote is set as a quote and spans the row. The two template cards stay labeled and sit underneath. Updated Social proof.
- **2026-10-08** - Business types use inline teal stroke icons instead of letter tiles. The close says an unlisted type can still book. No second button and no per-type savings line. Updated Page Structure, Who it's for, and Decisions.
- **2026-10-08** - How it works is “What the Review Looks Like”: teal bar across the top of each card, no visible step number, one column until the large breakpoint, and the same “Review My Processing Costs” close to `#book`. Step 2 no longer says “calculate potential savings,” and step 4 no longer assumes a switch. Updated Messaging, Page Structure, How it works, CTA Strategy, Analytics, and Decisions.
- **2026-10-08** - Calculator leads with the yearly cost, keeps the $50,000 / 2.9% example until a field is edited, and uses “Review My Processing Costs” to reach `#book`. A missing rate no longer reads as required. Updated Messaging, Calculator, CTA Strategy, and Decisions.
- **2026-10-08** - Problem section is one worked example ($50,000 × 2.9% = $1,450 a month, $17,400 a year), with “Use my own numbers” scrolling to `#savings`. Narrow screens stack checkmark lists. Calculator results stack on small screens, and business types are a list on phones. Updated Messaging, Page Structure, Problem, CTA Strategy, Analytics, and Decisions.
- **2026-10-06** - Lead-gen audit recorded in PROJECT.md only (no site code). Updated Hero, Video, Calculator, CTA, Booking, Claims, Local SEO, AI Search, Business Rules, Analytics, CRO Strategy, Current Work, Next Steps, Launch Checklist, Backlog, Decisions, and Open Questions. Public launch now waits on a real scheduler and removal of unfinished proof, video, and FAQ notes.
- **2026-10-06** - Added Launch Checklist (domain/hosting, GA4, Search Console, crawl/index, SEO, local SEO, privacy, Lighthouse, a11y, QA, post-launch). Updated Analytics planned events, Current Work, Next Steps, Decisions, Open Questions, and Backlog for a clean first production launch without expanding architecture.
- **2026-10-05** - Added permanent Copywriting Rules to PROJECT.md. Reviewed and updated all user-facing site copy (removed em dashes, humanized phrasing, kept San Bernardino SEO intent and verified claims only).
- **2026-10-05** - San Bernardino local SEO + AI entity pass: hero rewrite, metadata, Organization schema, FAQ/entity copy, footer service-area language, PROJECT.md Local SEO / AI Search / Geographic Strategy.
- **2026-10-05** - Added SWIPEX logo: transparent WebP (light + on-dark), PNG fallbacks, SVG favicon/X, header + footer placement. Optimized for transfer size and CLS.
- **2026-10-05** - Visual design system: teal primary / green secondary, supporting palette, CTA states, calculator hierarchy, section backgrounds, video facade polish, sticky mobile CTA.
- **2026-10-05** - Initial boilerplate: architecture, theme system, landing sections, calculator, video facade, docs, Sass workflow. Sole dependency: `sass` (dev).
