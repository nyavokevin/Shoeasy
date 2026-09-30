---
name: Kinetic Trail
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#424656'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#727687'
  outline-variant: '#c2c6d8'
  surface-tint: '#0054d6'
  primary: '#0050cb'
  on-primary: '#ffffff'
  primary-container: '#0066ff'
  on-primary-container: '#f8f7ff'
  inverse-primary: '#b3c5ff'
  secondary: '#a63500'
  on-secondary: '#ffffff'
  secondary-container: '#d04400'
  on-secondary-container: '#fffbff'
  tertiary: '#735500'
  on-tertiary: '#ffffff'
  tertiary-container: '#916c00'
  on-tertiary-container: '#fff7ee'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#001849'
  on-primary-fixed-variant: '#003fa4'
  secondary-fixed: '#ffdbcf'
  secondary-fixed-dim: '#ffb59c'
  on-secondary-fixed: '#390c00'
  on-secondary-fixed-variant: '#822700'
  tertiary-fixed: '#ffdf9f'
  tertiary-fixed-dim: '#f9bd22'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5c4300'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-xl:
    fontFamily: Syne
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 76px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Syne
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-md-mobile:
    fontFamily: Syne
    fontSize: 24px
    fontWeight: '800'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Syne
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 26px
    letterSpacing: 0em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 18px
    letterSpacing: 0.04em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-technical:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '800'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 3rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system is engineered for the high-performance trail running and ultra-distance endurance commerce space. It merges the raw energy, topography, and technical precision of mountain athletics with a crisp, fast-paced digital retail experience.

The design movement combines **High-Contrast Athletic Modernism** with **Swiss Utilitarian Grid** principles:
- **Tone:** Kinetic, hyper-functional, assertive, and technically credible.
- **Visual Tension:** Dense typographic scale juxtapositions—massive display headlines set against tight, disciplined, monospaced metadata and clear geometric labels.
- **Feel:** Rugged performance translated into digital precision. Sharp 1px technical divider lines, expansive full-width viewports, high-velocity accent pops, and tactile pill indicators evoke race bibs, topographic maps, and performance gear.

## Colors

The palette establishes an ultra-high contrast canvas anchored by pure optic whites, pitch blacks, and performance-grade technical pigments:

- **Primary Canvas & Neutral Tiers:**
  - Canvas: `#FFFFFF` (pure optic white for high legibility and product pop).
  - Surface Subdued (Product Cards, Wells): `#F4F4F5` (Zinc 100).
  - Surface Border / Delimiter: `#E4E4E7` (Zinc 200) for hairline 1px borders.
  - Text Secondary / Technical Metadata: `#71717A` (Zinc 500).
  - Text Primary & High-Impact Blocks: `#0F172A` (Slate 900) and `#000000` (Pitch Black).
- **Kinetic Accents:**
  - **Electric Blue (`#0066FF` / hover `#1E78F6`):** Primary interactive CTA states, navigation highlights, elevation delta indicators, and digital focus states.
  - **Energetic Orange (`#FF5500`):** Trail alerts, aggressive flash-drop tags, sale markers, and dynamic motion indicators.
  - **Technical Citrus Yellow (`#FBBF24`):** Race bib badges, technical spec callouts (Vibram® lugs, Gore-Tex®, stack height), and category micro-pills.
- **Color Discipline:** Vibrant accents never compete in the same component module. Primary buttons default to stark pitch black (`#000000`) with optic white text for commerce authority; accent colors serve strictly as functional triggers and performance indicators.

## Typography

The type system creates an immediate athletic hierarchy:
- **Headlines (`Syne` ExtraBold 800):** Expressive, structural, and powerful. Syne is locked to tight negative tracking (`-0.01em` to `-0.03em`) and disciplined line heights without forced stretching. Used for hero impact, collection titles, and model names (e.g., "SPEEDGOAT 6", "TECTON X 3").
- **Body & Controls (`Plus Jakarta Sans` 400/500/700/800):** Clean, geometric, and engineered for fast scan-ability. Renders product descriptions, specifications, checkout flows, and technical parameters with crisp clarity.
- **Labels & Micro-Data:** Set in uppercase with expanded letter spacing (`+0.04em` to `+0.08em`) to mimic gear stampings, trail markers, and GPS telemetry.

## Layout & Spacing

The layout philosophy uses a **Full-Bleed Technical Grid** that spans edge-to-edge across viewports:

- **Desktop (12 Columns):** 1440px max content lock with responsive edge bleed. 48px outer canvas margins (`margin`), 24px column gutters (`gutter`). Modular section spacing scales up to 80px–120px to let high-energy product photography breathe.
- **Tablet (8 Columns):** 24px outer margins, 16px gutters. Grids break cleanly from 4-up to 2-up configurations.
- **Mobile (4 Columns):** 16px outer margins (`margin-mobile`), 12px gutters (`gutter-mobile`). Full bleed horizontal carousels with peek overflow for shoe drops and colorway selections.
- **Internal Component Rhythm:** Driven strictly by base-4 increments (`space-xs` to `space-xl`). Product cards enforce tight inner padding to emphasize shoe scale and tread geometry.

## Elevation & Depth

This design system avoids soft, muddy drop shadows in favor of a crisp, flat **Structural Tonal Hierarchy**:

- **Depth via Neutral Layers:** Elevation is articulated by contrast against the white base:
  - Base: `#FFFFFF`
  - Level 1 (Card tiles, facet panels): `#F4F4F5`
  - Level 2 (Active tooltips, elevated drawers, floating sticky checkout bars): `#FFFFFF` bounded by a strict 1px solid `#E4E4E7` border.
- **Active Technical Shadow (Performance Floating Elements):** Reserved exclusively for sticky "Add to Cart" mobile bars and active filter popovers: `0px 8px 24px -4px rgba(15, 23, 42, 0.08)`.
- **Structural Outlines:** 1px hairline rules (`#E4E4E7` or high-impact `#0F172A`) divide data sheets, trail metrics, and modular specs, producing an architectural, blueprint-like aesthetic.

## Shapes

The shape system adopts a hybrid approach balancing technical precision with anatomical utility:

- **Base Radius (0.25rem / 4px):** Product cards, input containers, spec blocks, filter chips, and image containers utilize minimal, disciplined corner softeners to maintain a sharp, aggressive athletic profile.
- **Pill Exception (9999px / Full Pill):** Exclusively reserved for status badges ("NEW DROP", "GORE-TEX", "CARBON PLATE"), category quick-filters, and primary CTAs. This distinct pill geometry signals instantaneous interactive touch targets and echoes athletic track/race bib conventions.

## Components

### 1. Buttons
- **Primary Action (Commerce):** Solid `#000000` fill, `#FFFFFF` text, `Plus Jakarta Sans` 700 uppercase (`label-lg`), pill shape (`rounded-full`), 52px height. Hover: shifts to `#0066FF` with an accelerated 150ms ease-out transition.
- **Secondary Action (Technical/Trial):** Transparent background, 1.5px solid `#0F172A`, `#0F172A` text. Hover: `#0F172A` fill with `#FFFFFF` text.
- **Tertiary Accent CTA:** Energetic Orange (`#FF5500`) fill with `#FFFFFF` text, reserved strictly for flash race releases, countdown triggers, or final checkout commits.

### 2. Badges & Chips
- **Status Pills:** Compact, 24px height, full-pill geometry (`rounded-full`), padding `0 10px`.
  - *Technical/Spec:* Citrus Yellow (`#FBBF24`) fill with `#000000` text, bold uppercase `10px`.
  - *Race Drop/Alert:* Energetic Orange (`#FF5500`) fill with `#FFFFFF` text.
  - *Sustainability/Feature:* Zinc 100 (`#F4F4F5`) fill, Zinc 600 (`#52525B`) text, 1px `#E4E4E7` outline.
- **Filter Chips:** 36px height, soft radius (4px), 1px solid `#E4E4E7` border on white. Selected state: solid `#0F172A` fill with `#FFFFFF` text.

### 3. Product Cards
- **Structure:** Surface background `#F4F4F5`, 4px border radius, no shadow.
- **Media Well:** 1:1 or 4:5 aspect ratio with zero padding, letting the trail shoe silhouette dominate.
- **Badge Anchor:** Absolute top-left positioned 12px from edge.
- **Typography Stack:** Syne bold model headline (`headline-sm`), neutral sub-headline for trail terrain type (e.g., "Technical Trail / All-Terrain"), and high-contrast bold price lockup.
- **Interactive State:** Quick-add size drawer slides up from card bottom on hover; image switches smoothly to an angled tread/lug outsole view.

### 4. Technical Specs Bar (Product Display Pages)
- **Grid Layout:** Modular 3-up or 4-up data strip with 1px `#E4E4E7` vertical boundary dividers.
- **Metric Formatting:** Syne 700 headline size for the raw metric (e.g., "5.0mm", "285g", "33/28mm") stacked over a muted geometric sans label (e.g., "LUG DEPTH", "WEIGHT", "HEEL-TO-TOE DROP").

### 5. Input Fields & Selectors
- **Fields:** 48px height, 4px border radius, `#FFFFFF` fill, 1px solid `#E4E4E7` border. Focus: 1.5px solid `#0066FF` with zero ambient glow.
- **Size Selector Grid:** Square tiles (44px x 44px), 4px radius, 1px solid `#E4E4E7`. Out of stock indicated by diagonal hairline strikethrough and muted gray text. Active state: solid `#0F172A` background with `#FFFFFF` text.

### 6. Lists & Cart Drawers
- **Dividers:** Clean 1px solid `#E4E4E7` horizontal separators throughout cart line items and order summaries.
- **Accordion Drawers:** Hairline borders top and bottom, clean `+` / `−` minimal SVG indicators, zero background tint on expansion.