# Project Overview

Lightweight lead-generation landing page for a payment-processing sales business. Static HTML + SCSS + vanilla JS. Primary goal: convert business owners into booked savings-analysis calls.

Launch execution order lives in `IMPLEMENTATION.md` when that local file is present. See **Implementation Workflow**. This file remains the source of truth without it.

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

**Request a processing-cost / savings analysis** on Calendly: `https://calendly.com/vicbarrios24/30min`.

Funnel: land → understand fee cost → watch explainer → see estimated costs → book review.

## Secondary Conversions

- Watch explainer video
- Use savings calculator
- Expand FAQ items

No competing primary CTAs.

## Core Value Proposition

SwipeX helps merchants see what processing is really costing them and evaluate whether a different payment setup could reduce what they absorb, based on their statement rather than generic averages. Positioning emphasizes clarity and a no-obligation review. “No-obligation” means no duty to switch. It does not mean the review is free. The positioning does not promise zero fees or unsupported savings.

## Messaging

**Live (hero):**
- Eyebrow: “Merchant services for San Bernardino-area businesses”
- H1: “How Much Are Credit Card Fees Costing Your Business?”
- Subhead: SwipeX helps San Bernardino merchants review their current processing costs. We look at your statement to see if a different payment setup could reduce what you absorb, instead of giving you a generic sales pitch.
- Primary CTA: “Review My Processing Costs”
- Video label: removed. The hero media is a static review card until a real video exists. Do not use “See how businesses reduce processing costs.”
- Trust: No-obligation statement review · Serving San Bernardino-area merchants · Built around your real numbers. Keep the hero line. “No-obligation” means no duty to switch, not a free review.

**Other CTAs:**
- Every “Review My Processing Costs” button, and the sticky “Review My Costs” button, opens `https://calendly.com/vicbarrios24/30min` in the same tab. That includes the hero, nav, calculator, how it works, booking band, final CTA, sticky bar, and footer.
- Problem example: “Use my own numbers” → `#savings` (not a booking offer)
- Booking section heading: “A 30-Minute Look at Your Statement”
- Final H2: “Ready for the 30-minute review?”

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
7. Social proof (Socorrito Store quote only, no photo)
8. Booking / consultation CTA
9. FAQ (four answered questions, centered column; unfinished items stay in this file)
10. Final CTA (“Ready for the 30-minute review?”; button opens the scheduler)
11. Footer
12. Privacy (`privacy.html`) and Terms (`terms.html`). These pages describe this website only. They list no phone and no email. The preferred origin is `https://www.swipexthefee.com`. Canonical tags on the homepage, `privacy.html`, and `terms.html` use that origin. `robots.txt` allows crawling and points at `sitemap.xml`. The sitemap lists those three pages.

## Hero

Loss-aversion H1 focused on cost visibility. Local relevance in eyebrow + subhead (not keyword-stuffed H1). Do not rewrite the H1 for launch. CTA drives to the statement review.

The headline can be understood quickly. The hero media is a static review card: what the review covers, what to bring, device choice, and no pressure to switch. A play button that does not load a player must not ship. Video becomes the primary visual only when a real player exists.

**Live card:**
- Dark header with a statement graphic. Kicker: “30-minute review.” Title: “What the review covers.”
- Rates, fees, and card volume
- Device: “You choose the device.” Detail: countertop, handheld, or a register setup. No brand list, no “free equipment,” and no pricing.
- No pressure to switch
- Highlighted line: “Nothing to bring to book.” A recent statement only if monthly card sales are high enough that it shows what they actually pay.
- Header is a solid deep teal. The only hero booking button is the one under the headline.

**Statement threshold, researched 2026-11-13:** there is no single public dollar amount for this. Pepper Pay’s underwriting checklist asks for three months of processing statements when monthly volume is over $150,000 on lower-risk files, and asks for them more broadly on moderate and high-risk files ([Pepper Pay underwriting requirements](https://pepperpay.com/resource-center/underwriting-requirements.php)). Payarc does not require processing statements for unrestricted card-present merchants at or under $250,000 a month, and does require them for other merchants ([Payarc partner guidelines](https://support.payarc.com/hc/en-us/articles/34344650087191-Underwriting-Risk-Partner-Guidelines)). An Elavon application package asks for three months of statements whenever the merchant already accepts cards ([NTC / Elavon checklist](https://ntctravel.net/1-23ElavonMerchantAppPackagemoto.pdf)). Do not print one of those figures as a SwipeX rule.

## Video

- Purpose: short explainer of the problem and the statement review
- Status: **not on the page.** The hero is a static review card. Do not initialize a placeholder player. Video returns only with a real ID, thumbnail, and captions or a short transcript.
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
**Lead capture:** none in the calculator. The CTA opens `https://calendly.com/vicbarrios24/30min`.  
**Unknown rate:** “If you don't know your rate, a recent statement is enough. You can still book the review.” Do not require the rate to book.  
**CTA:** “Review My Processing Costs” opens `https://calendly.com/vicbarrios24/30min`  
**Under the button:** “We'll look at a recent statement. There's no pressure to switch.”  
**Note, once, under the yearly figure:** estimate only, not a quote. Does not include card mix, interchange, or monthly fees.  

On small screens the yearly figure sits above the inputs. From the tablet breakpoint, inputs are on the left and the result is on the right. The yearly figure should stay at least as large as it is in the worked example on a phone.

## How it works

Four steps after the calculator. The heading is “What the Review Looks Like.” The nav label stays “How It Works.”

**Live:**
- Intro: “You can book without bringing anything. If monthly card sales are high enough that we need your real numbers, bring a recent statement.”
- 1. Review your statement. If they have a recent statement, use it to see rates, fees, and volume. Booking does not require one.
- 2. Walk through your numbers. We look at what you are paying now, based on your statement, not a generic average.
- 3. See what fits. If a different setup fits how you take cards, we explain it. If it does not, we say so.
- 4. Decide if a change is worth it. You leave with a clear read of the statement. There is no pressure to switch.
- Close: “Review My Processing Costs” opens the Calendly URL, with “Bring a recent statement if you have one.”

No visible step number. Each card has a teal bar across the top. The list stays ordered, so the sequence is still available to assistive tech. Steps stay one per row until the large breakpoint, then four columns. Do not title a step as a savings calculation. Do not end the process on switching. Do not add product options, timelines, or equipment until those are confirmed.

## Who it's for

Seven business types after the review steps. The heading stays “For Businesses That Take Cards Every Day.”

**Live:**
- Intro: “If your San Bernardino business takes cards as part of everyday sales, the review starts with your statement. That includes:”
- Types: Restaurants, Salons / Barbers, Auto Shops, Retail, Contractors, Medical / Dental, Other local services
- Close: “If your type is not listed, you can still book the review.”

Each type uses a small inline stroke icon in the button teal. No icon font, no image request. Do not add a booking button here. Do not add a savings line under any type. The last row stays centered when the count does not fill the grid.

## Social proof

One quote after the business types, then the booking section. No photo. No second button.

**Live:**
- H2: “From Local Merchants”
- Intro: “A San Bernardino store, in their own words.”
- Real quote, with quotation marks: “SwipeX changed how we take card payments. We've saved thousands in fees, and support has been there when we needed it.” Attribution: Socorrito Store, San Bernardino, CA.

Do not add another card until it has a business name, city, and an approved result. Do not write a fake business or a fake quote. Do not add review schema. The Socorrito quote stays public unless that approval is withdrawn.

## FAQ

Four questions, each a `details` disclosure. The heading and the list are centered. Question text stays left-aligned inside each card. No “show all” control.

**Live:**
- Intro: “A few answers before you book the review.”
- What SwipeX does for San Bernardino businesses: a cost review, usually a 30-minute statement review.
- Can you review a statement: yes. The review is 30 minutes. Book without a statement. Bring a recent one if monthly card sales are high enough that SwipeX needs it. Uses their volume, rates, and fees.
- California fee pass-through: Civil Code §1748.1, cash discounts may be allowed, not legal advice.
- Dual pricing and cash discount: definitions only. Do not say SwipeX offers either until the program model is confirmed.

**Off the page until answered:** how the program works, equipment, accepted card brands, setup time, contract terms, and pricing. Do not invent a rate. A pricing answer can return only as “the 30-minute review is where we look at your numbers,” with no figure attached.

## CTA Strategy

Primary wording: **Review My Processing Costs** (hero, nav, calculator, how it works, final, footer). The sticky bar shortens it to “Review My Costs.” Specific and financially relevant.

The review buttons use those same words and open `https://calendly.com/vicbarrios24/30min`. The `#book` heading is “A 30-Minute Look at Your Statement.” The final heading is “Ready for the 30-minute review?” Do not put “savings” on a button. The call is 30 minutes. Do not claim the review is free. “No-obligation” on the hero means no duty to switch. The booking band keeps “No pressure to switch.”

Path: hero, nav, calculator, how it works, the `#book` button, the final button, the sticky bar, and the footer open that Calendly URL in the same tab. They share one URL and `data-booking-url`. “Use my own numbers” scrolls to `#savings` only. How It Works, Savings, and FAQ still scroll to their sections. Do not open the scheduler in a new tab.

Do not publish a phone number or an email address. Neither is a second hero button.

Avoid generic “Book a Call.” Do not claim “free” until consultation pricing is verified.

## Lead Capture / Booking

- Provider: **Calendly**
- URL: `https://calendly.com/vicbarrios24/30min`
- The HTML uses `https://calendly.com/vicbarrios24/30min` on every review CTA: hero, nav, calculator, how it works, `#book`, final CTA, sticky bar, and footer. Keep each `data-booking-url` in sync. Same tab. No review CTA uses `target="_blank"`.
- Call length: **30 minutes**. Say so on the booking band. Bring a recent statement if they have one. No pressure to switch.
- Qualifying questions belong on the Calendly event, not in a long on-page form: business type, monthly card-volume range, city, and whether they have a recent statement. Those questions are not confirmed on the event yet. Ask current processor, exact rate, and terminal count on the call.
- Minimum card volume is unknown. Add it as a scheduler question or a disqualifier once the business sets a floor.
- Public phone and email: **omit**. The homepage footer has neither. Do not invent replacements.
- Privacy and Terms: `privacy.html` and `terms.html` describe the current website. The homepage footer links to both. They are not a lawyer-reviewed compliance claim. No public phone or email is listed. Google Analytics 4 (`G-LDMKLF3QVM`) is on the public pages. `privacy.html` discloses it. The preferred origin is `https://www.swipexthefee.com`. Canonical tags on the homepage, `privacy.html`, and `terms.html` use that origin. `robots.txt` allows crawling and points at `sitemap.xml`. The sitemap lists those three pages.

## Integrations

Google Analytics 4 (`G-LDMKLF3QVM`) is on the public pages. Scheduler URL is Calendly. Still planned: ad pixels, CRM.

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

**NAP:** No public phone, no public email, and no street address. The homepage footer lists none of them. Do not invent contact details.

**Service-area strategy:** Lead with San Bernardino; County / Inland Empire as secondary context only. No multi-city doorway pages yet.

**Citation opportunities (after NAP verified):** Apple Business Connect, Bing Places, relevant CA / Inland Empire directories, chamber listings, industry associations—consistent NAP only.

**Local testimonial strategy:** Prioritize verified quotes with business name (or initials), industry, city (San Bernardino or served city), and approved result. The only live quote is Socorrito Store, San Bernardino, CA.

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

**Do not publish unfinished entity facts.** Phone and email are omitted, not replaced. Pending FAQ notes and placeholder testimonials must not ship. Once call length, what to bring, and who the owner meets are known, add a short factual block in HTML: what SwipeX is, what the review includes, where it operates, and how to book. That is the useful answer-engine improvement. No extra schema until those facts are verified.

## Claims / Compliance

| Status | Item |
|---|---|
| Allowed | Educational framing; “may reduce what they absorb”; statement review; San Bernardino service-area language |
| Prohibited until verified | Guaranteed savings, zero-fee / free processing claims, fake social proof, invented rates, fake address |
| Needs verification | Exact program model (dual pricing / cash discount / IC+), equipment, contracts, pricing, timelines, card brands, “free” consult |
| Soften before launch | The booking heading is “A 30-Minute Look at Your Statement.” The hero video label is gone. |
| Decided | “No-obligation” means no duty to switch, not a free review (2026-11-12). The hero trust line stays “No-obligation statement review.” The booking band keeps “No pressure to switch.” Do not add “free.” The meta description names the 30-minute statement review and does not call it a savings analysis (2026-11-18). |
| CA note | Civil Code §1748.1 restricts surcharges historically while allowing cash discounts; Italian Colors affects enforcement nuance; SB 478 honest-pricing rules also relevant. Site gives general info only—not legal advice. |
| Decided | `privacy.html` and `terms.html` describe the current website (2026-11-12). No phone and no email. Google Analytics 4 (`G-LDMKLF3QVM`) is on the public pages, and `privacy.html` discloses it (2026-11-18). The preferred origin is `https://www.swipexthefee.com` (2026-11-13). The homepage canonical, Open Graph, Twitter, and schema URLs use that origin (2026-11-18). Share image tags are removed until a real image exists. `privacy.html` and `terms.html` have canonical tags on that origin. `robots.txt` allows crawling and names the production sitemap. `sitemap.xml` lists the homepage, privacy page, and terms page. A lawyer has not reviewed these pages. |

## Technical Architecture

- Semantic HTML5 (`index.html`, `privacy.html`, `terms.html`, `404.html`)
- SCSS → compiled CSS (`scss/` → `css/styles.css`) via official `sass` package
- Vanilla JS (`js/main.js`): nav, video facade, calculator, year stamp, analytics events
- No frameworks, no bundler, no CSS framework
- Prod ship: `npm run build` copies the public files into `site/`. `netlify.toml` publishes `site/`, not the repo root. The apex host redirects to `https://www.swipexthefee.com`. Force HTTPS is a Netlify UI setting. Do not point public DNS until the launch checks pass.

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

Google Analytics 4 is on `index.html`, `privacy.html`, and `terms.html`. Measurement ID: `G-LDMKLF3QVM`. One official `gtag.js` tag per page. No Tag Manager container, no ad pixel, and no consent banner. The banner stays off unless a later decision requires one. `privacy.html` discloses the tag. A lawyer has not reviewed that page.

**Primary conversion:** `booking_click`, the outbound click to the real scheduler URL (request a processing-cost / savings analysis). Mark that event as the GA4 key event once a hit arrives in the property. Realtime confirmation is still open.

`generate_lead` is not a launch event. Use it only after a thank-you URL or a confirmed completion exists, and then make that the key event instead of counting both.

**Event names** (avoid double-firing):

| Event | Trigger | Role |
|---|---|---|
| `page_view` | GA4 default | Baseline |
| `cta_click` | “Use my own numbers” only. `location`: `problem`. Scrolls to `#savings`. | Diagnostic. Not the conversion. Do not also fire `booking_click`. |
| `booking_click` | Click on a review CTA: hero, nav, calculator, how it works, `#book`, final CTA, sticky bar, or footer. One event per click. URL: `https://calendly.com/vicbarrios24/30min`. | Launch key event |
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
→ Calendly (`https://calendly.com/vicbarrios24/30min`)
→ appointment

`#book` still explains the 30-minute review. It is not a required stop before the scheduler.

Every “Review My Processing Costs” button, and the sticky “Review My Costs” button, opens the Calendly URL. “Use my own numbers” still scrolls to `#savings`. The `#book` section still explains the review.

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

## Implementation Workflow

`PROJECT.md` is the permanent project source of truth. `IMPLEMENTATION.md` is the local active implementation checklist for launch work. It is intentionally excluded from Git, so a fresh clone will not have it.

Agents doing launch-related work should read, when the files are available:

1. `PROJECT.md`
2. `IMPLEMENTATION.md`, if it is present

Then identify the first relevant unchecked task, implement it, verify it, and check it off in `IMPLEMENTATION.md`. Update `PROJECT.md` when the change affects permanent architecture, SEO strategy, analytics strategy, copy rules, or business decisions. Keep temporary task progress in `IMPLEMENTATION.md`.

If `IMPLEMENTATION.md` is missing, regenerate it from this file, the **Launch Checklist**, and the latest launch audit. Do not treat the checklist as a second source of truth, and do not block other work on a file that is not versioned.

## Current Work

**Pre-launch lead path.** The landing page strategy is in place: cost-focused hero, cost-only calculator, San Bernardino positioning, lightweight HTML/SCSS/JS. It cannot generate a qualified lead yet.

The decided scheduler URL is `https://calendly.com/vicbarrios24/30min` for every review CTA. `index.html`, `privacy.html`, and `terms.html` use that URL in the same tab. The homepage footer has no phone and no email. The legal pages do not either. The hero play button is gone. The right side of the hero is a static review card. The proof section is the Socorrito Store quote only. The photo is not on the page. Unanswered FAQ items are off the page. “No-obligation” means no duty to switch, not a free review. The hero trust line stays. The preferred origin is `https://www.swipexthefee.com`. Homepage canonical, Open Graph, Twitter, and schema URLs use that origin. Share image tags are removed. The meta description names the 30-minute statement review. `privacy.html` and `terms.html` have canonical tags on that origin. `robots.txt` allows `/` and points at `https://www.swipexthefee.com/sitemap.xml`. The sitemap lists the homepage, privacy page, and terms page. Google Analytics 4 (`G-LDMKLF3QVM`) is on those pages. Events in code: `page_view`, `booking_click`, `cta_click`, and `calculator_use`.

Clear that public page and connect a real scheduler before domain, GA4, and Search Console. Program-model claims stay deferred. The 2026-10-06 audit did not change site code. A 2026-10-14 launch audit also left the site code unchanged and recorded the ordered tasks in local `IMPLEMENTATION.md` when that file is present.

See **CRO Strategy** for the flow, lead-quality rules, and phases. See **Implementation Workflow** for how to use the local checklist.

## Next Steps

Do these first. Later phases are in **CRO Strategy**. Do not expand into multi-city SEO, CRM, ads, or a framework. When `IMPLEMENTATION.md` is present, carry out the launch work from its first relevant unchecked task, and check tasks off there only after verification. The list below stays the permanent sequence.

1. Write down the remaining facts for a real review: who the merchant talks to, and what they receive. Call length is 30 minutes. Phone and email are omitted. “No-obligation” means no duty to switch, not a free review.
2. Unfinished public content is off the homepage: no placeholder phone or email, no hero video placeholder, and no temporary proof cards. The Socorrito Store quote is the only proof card. `privacy.html` and `terms.html` describe the current website. Unanswered FAQ items are already off the page.
3. The review CTAs now open `https://calendly.com/vicbarrios24/30min` in the same tab: hero, nav, calculator, how it works, the booking band, the final CTA, the sticky bar, and the footer. Confirm the Calendly event asks business type, monthly volume range, city, and statement yes/no. `#book` still explains the review. Complete one real test booking on a phone.
4. Homepage canonical, Open Graph, Twitter, and schema URLs use `https://www.swipexthefee.com`. Share image tags are removed until a real image exists. `robots.txt` and `sitemap.xml` are in the repo, and the legal pages have canonical tags. Google Analytics 4 (`G-LDMKLF3QVM`) is on the public pages. `netlify.toml` publishes `site/` and 301s the apex host to `www`. Still to do: create the Netlify site without changing public DNS, set the primary domain to `www` and Force HTTPS, then after DNS mark `booking_click` as the GA4 key event, Search Console, and Lighthouse on the live URL. Confirm the live `/robots.txt` and `/sitemap.xml` after DNS. The apex host redirects to `www`.
5. Get the first conversations from people SwipeX already knows or can meet locally. Record why they booked or did not. Use that before any headline test, video production, or ads.

**After a working booking path:** the rest of the **Launch Checklist**. Real explainer video, verified testimonials, program-model copy, GBP only if eligible, LocalBusiness / FAQPage schema, and nearby-city pages only with real service proof. Paid ads only after a test booking and GA4 both work.

## Launch Checklist

Operational checklist for a clean first production launch of this static HTML + SCSS + vanilla JS site. Update checkboxes as work is verified. Do not mark items complete by assumption. Targets below are goals, not guarantees.

### 1. Domain and Hosting

Keep hosting aligned with the static-site architecture (HTML/CSS/JS; no server app).

- [ ] Production hosting selected/configured
- [ ] Custom domain connected
- [ ] HTTPS/SSL enabled
- [x] Preferred domain format selected (`www`)
- [ ] Redirect alternate domain version to preferred version
- [ ] HTTP redirects to HTTPS
- [x] Production URL recorded in PROJECT.md (Open Questions / Decisions): `https://www.swipexthefee.com`
- [ ] Final production build (`npm run build` output) tested on actual hosting

### 2. Google Analytics 4

Use the lightest reasonable Google tag. Prefer one clearly defined primary conversion (booking / lead request). Event names: see **Analytics**.

- [x] Create or verify GA4 property
- [x] Add GA4 measurement ID to the project
- [x] Add Google tag with the lightest reasonable implementation
- [ ] Verify page views in GA4 Realtime
- [x] Define primary conversion event (`booking_click` at launch; `generate_lead` only after a thank-you URL exists)
- [x] Track main CTA interaction (`cta_click`)
- [x] Track successful booking/lead completion where technically possible (else outbound booking click)
- [ ] Verify events are not firing twice
- [x] Document final analytics event names in PROJECT.md **Analytics**

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

- [x] Create/verify `/robots.txt`
- [x] Confirm production is not blocked from crawling
- [x] Confirm there is no accidental `noindex`
- [x] Create/verify `/sitemap.xml` (homepage, `/privacy.html`, and `/terms.html`, on the production host)
- [x] Include canonical URL on the homepage
- [x] Confirm canonical points to the production URL
- [ ] Ensure all important content remains available in HTML
- [ ] Ensure important content does not depend on JavaScript to become crawlable
- [ ] Confirm internal links are crawlable `<a>` links
- [ ] Verify there are no broken internal links
- [ ] Verify correct HTTP status codes (homepage 200; redirects 301 as intended)

### 5. Basic SEO

Preserve the San Bernardino local commercial strategy (geo in eyebrow/subhead/meta/FAQ; H1 stays cost-focused). Do not keyword-stuff. No extra city pages for launch.

- [ ] Unique page title (SwipeX + San Bernardino + cost review / merchant services)
- [x] Useful meta description
- [ ] One clear H1
- [ ] Logical H2/H3 hierarchy
- [ ] Descriptive link text
- [ ] Useful image alt text
- [x] Canonical tag (production URL)
- [ ] Open Graph title
- [x] Open Graph description
- [x] Open Graph image removed until a real share image exists
- [ ] Favicon (SVG favicon already in assets; confirm live)
- [ ] Mobile viewport configured
- [ ] Page language set correctly
- [x] Production URL used in metadata (replace placeholders)

### 6. Local SEO

Aligns with existing **Local SEO** / **Geographic Strategy**. No multi-city doorway pages. Do not invent ratings, reviews, addresses, or service areas.

- [ ] Clearly state San Bernardino, CA service relevance (already in live hero/footer; re-check after any edits)
- [ ] Confirm business name is consistent (legal name / DBA vs SwipeX still TBD)
- [x] Confirm phone number: omit. Do not publish one. Footer placeholders still need to be removed.
- [x] Confirm email: omit. Do not publish one. Footer placeholders still need to be removed.
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

`privacy.html` and `terms.html` describe the current website. They are not a lawyer-reviewed compliance claim. No public phone or email is listed. Google Analytics 4 (`G-LDMKLF3QVM`) is on the public pages, and `privacy.html` discloses it. Canonical URLs use the production domain. Do not claim legal compliance without review.

- [x] Privacy Policy content written for the current site (`privacy.html`)
- [x] Terms content written for the current site (`terms.html`)
- [x] Legal pages omit phone and email, matching the decision to publish neither
- [x] Update the privacy page when GA4 is added, before the tag goes live
- [ ] Confirm whether cookie consent is required for the actual GA4-only implementation (jurisdiction-dependent; do not assume)
- [ ] Lawyer review before treating these pages as a compliance claim
- [x] Booking path explains that Calendly collects what the merchant submits there. The on-site calculator is not submitted.

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

- [x] Remove unfinished public content (placeholder proof, dead video, pending FAQ notes). Keep deferred ideas in PROJECT.md, not on the live page.
- [x] Remove test URLs
- [x] Remove dummy email/phone information
- [x] Remove placeholder testimonials from the public page (labeling them is not enough). The Socorrito Store quote is the only proof card.
- [ ] Confirm internal notes are absent from public HTML (“Answer pending”, “Placeholder testimonial”, developer video copy)
- [ ] Remove unsupported claims (no zero-fee / guaranteed savings / unverified “free”)
- [ ] Confirm copy follows PROJECT.md **Copywriting Rules**
- [ ] Search site copy for em dashes
- [ ] Confirm San Bernardino targeting is natural (not stuffed)
- [ ] Confirm logo/favicon are production-ready
- [x] Confirm social sharing metadata
- [x] Confirm production canonical URL
- [x] Confirm `robots.txt`
- [x] Confirm `sitemap.xml`
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
| One verified quote | Socorrito Store is the only proof card, with no photo. Do not add another card until it has a business name, city, and an approved result. |
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
| Booking button = “Review My Processing Costs” | Same words on every review CTA. The `#book` heading names the 30-minute statement review. “Get My Savings Analysis” read like a second offer. |
| Every review CTA opens Calendly | `https://calendly.com/vicbarrios24/30min`, same tab, on the hero, nav, calculator, how it works, `#book`, final CTA, sticky bar, and footer. “Use my own numbers” still scrolls to `#savings`. |
| Problem section = one worked example | The yearly cost ($17,400 in the sample) is the only large figure. Four equal cards buried it, and “Placeholder example” on each card undercut the number. Still an example, not a quote or a savings claim. |
| Problem bridge = “Use my own numbers” → `#savings` | The next step is the calculator. This is not a second booking offer. |
| How it works = the review, then the same booking CTA | The section answers what the call is. Step 2 does not promise a savings calculation. Step 4 ends on the decision, with no pressure to switch. The close uses “Review My Processing Costs” and opens the Calendly URL. |
| Business types = recognition, not a second offer | Inline stroke icons, no letter tiles and no extra request. “Other local services” plus “you can still book” covers owners who do not see their type. No button and no per-type savings claim. |
| Short checkmark lists stay one per row on narrow screens | A wrapped 2 + 1 row is harder to scan. The hero trust list stays one column on desktop too, because the copy column is too narrow for a clean row. |
| Qualification lives on the scheduler | A few questions there. No long on-site form in v1. |
| No public phone or email | Launch decision, 2026-10-14. Do not publish either. One primary action: the processing-cost review. |
| “No-obligation” means no duty to switch | Decision 2026-11-12. It does not mean the review is free. The hero line stays “No-obligation statement review.” The booking band keeps “No pressure to switch.” Do not add “free.” |
| Privacy and Terms describe this website | Decision 2026-11-12. `privacy.html` and `terms.html` stay linked. They state what the page does now: no on-site form, booking details collected on Calendly, and Google Analytics 4 (`G-LDMKLF3QVM`) counting visits and review clicks. Calculator amounts are not sent. No phone and no email. The preferred origin is `https://www.swipexthefee.com`. Canonical tags on the homepage, `privacy.html`, and `terms.html` use that origin. `robots.txt` allows crawling and points at `sitemap.xml`. The sitemap lists those three pages. A lawyer has not reviewed them. |
| No dead hero video at launch | A play button that does not load a player is a dead end. The hero is a static review card. |
| Merchant chooses the card device | Decision 2026-11-13. The review card says a countertop terminal, a handheld, or a register setup. No brand, no “free equipment,” and no price until those are confirmed. |
| No published dollar cutoff for bringing a statement | Decision 2026-11-13. Book with nothing in hand. A statement is for monthly card sales high enough that it shows what they pay. Processor underwriting cutoffs disagree ($150,000, $250,000, or “already accepting cards”), so the page does not name one as a SwipeX rule. |
| First traffic is direct outreach, then GBP if eligible | Paid ads wait until a test booking and GA4 both work. |
| No headline A/B until real leads exist | Learn from the first conversations before testing copy. |

## Open Questions

Ranked by impact on whether a business owner will book a qualified review.

**Decided (2026-10-14):** scheduler is Calendly at `https://calendly.com/vicbarrios24/30min`, on every review CTA. Public phone and email are omitted.

**Decided (2026-11-12):** “No-obligation” means no duty to switch. It does not mean the review is free. The hero trust line stays. Do not call the review free.

**Decided (2026-11-12):** `privacy.html` and `terms.html` describe the current website and stay linked from the footer. They omit phone and email. Google Analytics 4 is disclosed on the privacy page (2026-11-18). A lawyer has not reviewed them.

**Decided (2026-11-13):** the production origin is `https://www.swipexthefee.com`. The apex, `https://swipexthefee.com`, redirects to `www`. Homepage canonical, Open Graph, Twitter, and schema URLs use that origin (2026-11-18). `privacy.html` and `terms.html` have canonical tags on that origin. `robots.txt` allows crawling and points at `sitemap.xml`, which lists those three pages. Share image tags are removed until a real image exists. Do not point public DNS at the site until the launch checks pass.

**Highest impact (blocks a real lead):**

- What does the owner receive on the 30-minute review, beyond a walkthrough of rates, fees, and volume? Call length is 30 minutes.
- Who does the merchant talk to (name and role)?
- Are the Calendly qualifying questions set (business type, monthly volume range, city, statement yes/no)?
- Minimum monthly card volume, if any? Any industries or volumes SwipeX will not take?

**Needed before public launch:**

- Production origin: `https://www.swipexthefee.com` (2026-11-13). The apex redirects to `www`. Canonical tags on the homepage, privacy page, and terms page use that origin. `robots.txt` and `sitemap.xml` are in the repo. Do not point public DNS until the launch checks pass.
- GA4 measurement ID: `G-LDMKLF3QVM` (2026-11-18). `privacy.html` discloses the tag. Realtime and the `booking_click` key event are still open.
- Google Search Console property and ownership method (Domain vs URL-prefix)?
- Does the GA4-only setup require a cookie consent banner for the jurisdictions you serve?

**Affects offer strength, schema, and later SEO:**

- Lawyer review of `privacy.html` and `terms.html` before treating them as a compliance claim?
- Legal business name / DBA beyond SwipeX? The terms page does not state one.
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

- **2026-11-18** - Netlify publishes `site/`, built by `npm run build`. That folder is the public HTML, crawl files, compressed CSS, `js/main.js`, and the logo and favicon files. `404.html` is included and uses `noindex`. `netlify.toml` 301s `swipexthefee.com` to `https://www.swipexthefee.com`. The Netlify site and public DNS are not connected yet.
- **2026-11-18** - Added Google Analytics 4 (`G-LDMKLF3QVM`) on the homepage, privacy page, and terms page. Events: `booking_click`, `cta_click` for “Use my own numbers,” and one `calculator_use` per page view. No `video_play`, no `generate_lead`, and no consent banner. `privacy.html` discloses the tag.
- **2026-11-18** - Added `robots.txt` and `sitemap.xml` for `https://www.swipexthefee.com`. Sitemap lists the homepage, `privacy.html`, and `terms.html`. Those legal pages now have matching canonical tags. Public HTML has no `noindex`.
- **2026-11-18** - Homepage canonical, Open Graph, Twitter, and schema URLs use `https://www.swipexthefee.com`. Meta description names the 30-minute statement review. Share image tags removed because no image exists. Twitter card is `summary`.
- **2026-11-13** - Removed the two temporary proof cards and the homepage footer phone and email. The Socorrito Store quote is the only proof card. Preferred origin is `https://www.swipexthefee.com`. Canonical tags still use `example.com`.
- **2026-11-13** - Pointed every homepage review CTA at `https://calendly.com/vicbarrios24/30min` in the same tab. “Use my own numbers” still scrolls to `#savings`.
- **2026-11-13** - Hero keeps one booking button, under the headline. The review card header is a solid deep teal.
- **2026-11-13** - Restyled the hero review card so the device choice and “nothing to bring” read first. Added an inline statement graphic and a second review button on the card. No stock photo.
- **2026-11-13** - Replaced the hero video placeholder with a static review card. The card covers rates, fees, volume, device choice, and no pressure to switch. Booking does not require a statement. No dollar cutoff is printed, because published underwriting rules disagree. Updated Hero, Video, Messaging, How it works, FAQ, Current Work, and Decisions.
- **2026-11-12** - Added `privacy.html` and `terms.html` for the current website. No phone, no email, no analytics disclosure beyond “not running yet,” and no canonical URL. Homepage booking links are still `example.com`. Updated Page Structure, Booking, Claims, Architecture, Current Work, Next Steps, Launch Checklist, Decisions, and Open Questions.
- **2026-11-12** - “No-obligation” means no duty to switch, not a free review. The hero trust line stays “No-obligation statement review.” The meta description is not rewritten yet. Updated Core Value Proposition, Messaging, CTA Strategy, Claims, Current Work, Next Steps, Decisions, and Open Questions.
- **2026-10-14** - Scheduler is Calendly (`https://calendly.com/vicbarrios24/30min`) for every review CTA. Public phone and email are omitted. HTML not updated yet. Updated Messaging, CTA Strategy, Booking, Analytics, Local SEO, CRO Strategy, Current Work, Next Steps, Launch Checklist, Decisions, and Open Questions.
- **2026-10-14** - Added **Implementation Workflow**. Ordered launch tasks belong in local `IMPLEMENTATION.md` (gitignored) when that file is present. No site code was changed.
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
