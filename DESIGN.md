---
version: alpha
name: RemotelyTalents Academy Website
description: Agent-facing design contract for the RemotelyTalents Academy website.
colors:
  primary: "#043d31"
  secondary: "#065040"
  tertiary: "#f0fd51"
  neutral: "#f7f7f1"
  surface: "#ffffff"
  surface-soft: "#eef2ef"
  line: "#e6ecea"
  ink: "#0f1f1a"
typography:
  display:
    fontFamily: Poppins
    fontSize: 4rem
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: -0.045em
  headline-lg:
    fontFamily: Poppins
    fontSize: 2.4rem
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: -0.04em
  headline-md:
    fontFamily: Poppins
    fontSize: 2.15rem
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: -0.04em
  body-lg:
    fontFamily: Poppins
    fontSize: 1.0625rem
    fontWeight: 400
    lineHeight: 1.88
  body-md:
    fontFamily: Poppins
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.75
  body-sm:
    fontFamily: Poppins
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.7
  label-caps:
    fontFamily: Poppins
    fontSize: 0.75rem
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.24em
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 80px
  container-padding-mobile: 24px
  container-padding-tablet: 40px
  container-padding-desktop: 48px
rounded:
  button-dark: 6px
  button-yellow: 7px
  card-sm: 1.3rem
  card-md: 1.8rem
  card-lg: 2rem
  card-xl: 2.4rem
  full: 9999px
components:
  page-canvas:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
  section-soft:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.primary}"
  divider-line:
    backgroundColor: "{colors.line}"
    height: 1px
  text-body:
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
  button-primary-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.button-dark}"
    padding: 12px 20px
  button-primary-dark-hover:
    backgroundColor: "{colors.secondary}"
  button-primary-yellow:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.button-yellow}"
    padding: 14px 28px
  card-light:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.card-lg}"
  card-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.card-xl}"
---

# RemotelyTalents Academy Design Contract

## Overview

RemotelyTalents Academy should feel like a calm, premium, recruiter-led education product under the existing RemotelyTalents brand. The interface must reduce buyer doubt through clarity, structure, and trust rather than visual spectacle.

The visual tone is professional, practical, supportive, and conversion-focused. It can carry moderate aspiration around remote work, but it must not become a generic online course brand, a flashy AI product, or a lifestyle fantasy page.

Use this file as the compact execution contract for UI work inside the `site/` codebase. The deeper strategic source of truth remains the design documentation in `context/BRAND-AND-DESIGN/`.

## Colors

The palette is anchored in dark green, supported by yellow action accents and warm neutral surfaces.

- **Primary green (`#043d31`):** Main brand anchor. Use for hero backgrounds, trust sections, dark CTA sections, dark buttons, and high-authority surfaces.
- **Secondary green (`#065040`):** Hover state and secondary brand emphasis. Use sparingly.
- **Action yellow (`#f0fd51`):** Primary conversion accent. Use for the strongest CTA moments, hero CTAs, dark-section CTAs, and limited highlights.
- **Cream (`#f7f7f1`):** Page canvas and default calm background.
- **White (`#ffffff`):** Cards, proof widgets, clean content containers, and high-readability surfaces.
- **Soft surface (`#eef2ef`):** Alternate section surface when cream is not enough separation.
- **Line (`#e6ecea`):** Subtle borders and dividers.
- **Ink (`#0f1f1a`):** Deep text color when primary green is too saturated for a specific detail.

Hero sections should use the shared green hero surface from `--rt-hero-surface`: a deep green base with a restrained yellow radial highlight near the top-left and a darker green vertical fade.

Do not introduce purple AI palettes, neon accents, lifestyle-coaching pastels, or multiple near-identical gray/green light backgrounds.

## Typography

Use **Poppins** for all Academy website UI. Do not introduce a second font unless there is a deliberate brand decision.

Typography should feel like the main RemotelyTalents brand: modern, clean, compact, trustworthy, and commercially safe.

- Use bold, compact headings for major conversion moments.
- Use dark green headings on light sections.
- Use white headings on dark green sections.
- Keep body copy readable and practical.
- Use uppercase tracking only for small labels and eyebrows.
- Avoid giant editorial display type that makes the site feel louder than the parent brand.

Current implementation uses `next/font` and CSS variable `--font-poppins`; preserve that approach.

## Layout

The layout should be conversion-led and easy to scan.

- Use max-width containers, usually `max-w-7xl`, `max-w-6xl`, or narrower content wrappers when the section is focused.
- Use responsive horizontal padding: 24px mobile, 40px tablet, 48px desktop.
- Use strong vertical rhythm with clear section blocks.
- Use centered section intros for persuasive, reassuring, or transitional sections.
- Use left-aligned intros for dense educational, FAQ, module, or asset-heavy sections.
- Use cream as the base page canvas, white for cards, and soft surface only when extra section separation is needed.
- Repeat CTAs at natural decision points, but keep the page calm and structured.

The site should feel medium-long and direct-sale oriented, not minimal lead generation and not extreme long-form.

## Elevation & Depth

Use depth to create trust and containment, not decoration.

- Prefer soft shadows with green-tinted opacity.
- Use borders with `--rt-line` or low-opacity green for structure.
- Use white cards on cream or soft-surface backgrounds.
- Use dark green cards for high-emphasis pricing or CTA moments.
- Avoid heavy drop shadows, glassmorphism, floating decorative fragments, and noisy layered effects.

## Shapes

Academy UI should be rounded and approachable, but standard CTAs must not become pill-shaped.

- Dark green CTA radius: `6px`.
- Yellow CTA radius: `7px`.
- Standard cards: around `1.8rem` to `2rem`.
- Large offer/pricing cards: up to `2.4rem`.
- Avatars and small status icons may use full radius.

Keep shape language consistent within a screen. Do not mix sharp editorial blocks with highly rounded course-marketplace cards.

## Components

### Header

Use the RemotelyTalents logo plus Academy label. Header surfaces should stay cream or lightly transparent cream with a subtle bottom border. Desktop navigation CTAs should use the dark green button style.

### Hero

Use the standard green hero surface. The hero should be text-led, calm, premium, and supported by one relevant visual. It should quickly communicate:

1. this is for the buyer
2. this is credible
3. this can help them move forward

Avoid busy collage layouts, fake dashboard fragments, too many floating stats, or generic AI visuals.

### Buttons

Use only two primary CTA styles unless there is a strong design reason:

- **Dark green CTA:** light headers, navigation, quieter primary actions, light/cream surfaces.
- **Yellow CTA:** hero, pricing, final action moments, and dark green sections.

Button text must be explicit:

- dark green button text: white
- yellow button text: primary green

Do not use white text on yellow CTAs. Do not use pill-shaped CTAs for standard buttons.

### Cards

Cards should support structure, trust, and scanability.

- Use white cards for content, proof, FAQ, testimonials, and toolkit blocks.
- Use dark green cards for high-emphasis offer or CTA modules.
- Keep card content concise.
- Avoid nested card-heavy layouts unless the inner elements are simple repeated rows.

### Proof And Trust

Trust modules should be calm and specific. Use proof bars, avatar clusters, review snippets, recruiter authority, and agency credibility. Do not invent proof claims or imply student outcomes that are not validated.

### Pricing

Pricing should be visible and easy to understand. Use a strong dark green offer card when pricing is the main conversion object. Yellow should draw the eye to the core CTA and key savings language.

### FAQ

Use clean white accordion-style cards with generous spacing and clear dark green headings. FAQ should reduce doubt, not become dense legal copy.

### Imagery

Use a mix of real-life professional imagery and practical process/system visuals. AI should appear lightly, as an enhancer, not as the emotional core of the page.

Strong motifs:

- path or roadmap
- signal versus noise
- recruiter-led process
- practical toolkit

## Do's and Don'ts

- Do keep the Academy visually connected to RemotelyTalents.
- Do use the shared green hero surface for primary Academy heroes.
- Do use yellow only for action and selective emphasis.
- Do keep Poppins as the single typography identity.
- Do keep CTAs compact, direct, and conversion-focused.
- Do use white, cream, and soft-surface backgrounds in a controlled system.
- Do make pages feel structured, practical, and trust-building.
- Do explain unvalidated claims as assumptions in copy or avoid them.
- Don't create generic online course marketplace styling.
- Don't use purple, neon, or flashy AI startup palettes.
- Don't use oversized pill buttons for standard CTAs.
- Don't introduce random gradients outside the established hero and product-card treatments.
- Don't overuse glassmorphism, decorative blobs, or floating UI fragments.
- Don't make the brand feel playful, chaotic, overly editorial, or trend-driven.
- Don't add new design patterns before checking existing components and `context/BRAND-AND-DESIGN/`.
