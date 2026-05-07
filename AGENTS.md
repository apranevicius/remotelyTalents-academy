# Academy Site AGENTS

## Scope

This file applies only to:

- `/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site`

This folder is the website codebase for RemotelyTalents Academy.

Parent workspace rules still apply:

- [../AGENTS.md](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/AGENTS.md)

## Workspace Classification

- `site/` is a git repository.
- Current primary branch is usually `main`.
- The Academy workspace root is a content workspace; do not treat the parent folder as the website git repo.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS 4
- Poppins via `next/font`
- CSS variables in [app/globals.css](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/app/globals.css)

## Required Reading Before Site Work

Before editing website code, read:

1. [../AGENTS.md](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/AGENTS.md)
2. [../context/index.md](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/context/index.md)
3. [../context/MEMORY.md](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/context/MEMORY.md)
4. [DESIGN.md](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/DESIGN.md) for UI work
5. the route, component, or content files relevant to the requested change

For strategy, copy, offer, and design context, use `../context/` as the source of truth.

For Academy-specific legal terms, refund rules, buyer responsibilities, fulfillment boundaries, and coaching-program no-guarantee language, use the live Google Doc:

- [Academy Terms & Conditions](https://docs.google.com/document/d/1bmLXo9gr05_uuB7bhl4Sci7wyALW3wcw8dbmIPyWgII/edit?usp=sharing)

For Anastasia Izotova bio, coach positioning, expert-section copy, and safe marketing claims, use the live Google Doc:

- [Anastasia Izotova - Coach Positioning One-Pager](https://docs.google.com/document/d/13Fa5nVKeBzysOWcVETqBD4ebvJ0uKiCdj8EFZ7eSp7g/edit?usp=sharing)

## Route Map

| Route | Purpose |
| --- | --- |
| `/` | Academy home page |
| `/about` | Academy trust-building About page |
| `/coaching-programs` | Remote-job coaching programs page |
| `/find-remote-job-with-ai` | Main public course page |
| `/remote-job-with-ai` | Legacy route that permanently redirects to `/find-remote-job-with-ai` |
| `/terms-of-service` | Academy-specific public Terms of Service page |

## Important Files

| File or Folder | Role |
| --- | --- |
| [app/_lib/site-config.ts](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/app/_lib/site-config.ts) | Site URL, metadata defaults, absolute URL helper |
| [app/_components/academy-footer.tsx](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/app/_components/academy-footer.tsx) | Shared Academy footer and legal-policy links |
| [app/globals.css](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/app/globals.css) | Global CSS variables and base styles |
| [app/_home/](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/app/_home) | Academy homepage components and content |
| [app/about/](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/app/about) | About page route, components, content, metadata, and schema |
| [app/coaching-programs/](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/app/coaching-programs) | Remote-job coaching programs route, components, content, metadata, schema, and conversion CTAs |
| [app/remote-job-with-ai/](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/app/remote-job-with-ai) | Shared course page implementation |
| [app/find-remote-job-with-ai/page.tsx](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/app/find-remote-job-with-ai/page.tsx) | Canonical course route, metadata, schema |
| [DESIGN.md](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/DESIGN.md) | Compact AI-facing design contract |

## Content And Claims Rules

- Do not invent testimonials, reviews, placements, guarantees, pricing, or outcome claims.
- The `29 days` framing is a structured action plan, not a hiring guarantee.
- Keep claims aligned with [../context/MEMORY.md](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/context/MEMORY.md).
- If a claim is unvalidated, either avoid it or clearly mark it as an assumption in context docs.
- Course copy should stay recruiter-led, practical, calm, and trust-building.
- For Anastasia copy, frame her as combining recruitment experience with psychology-backed career strategy. Do not describe her as a job-placement recruiter, generic motivational coach, lifestyle guru, or someone who guarantees jobs, interviews, salary increases, recruiter introductions, or employer introductions.

## Legal Link Rules

- Use the Academy Terms & Conditions Google Doc as the drafting source for Academy-specific terms.
- Public website links should use public policy URLs, not competitor files or private/local references.
- Privacy and Cookies may link to the shared RemotelyTalents policies if those policies explicitly cover Academy and `academy.remotelytalents.com`.
- Public Academy Terms URL: `/terms-of-service`.
- Use [app/_components/academy-footer.tsx](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/app/_components/academy-footer.tsx) and checkout/legal links to point to the Academy-specific terms page instead of the general RemotelyTalents Terms of Service.

## Design Rules

- Follow [DESIGN.md](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/DESIGN.md) before changing UI.
- Keep the RemotelyTalents green/yellow/cream visual system.
- Use Poppins only unless a deliberate brand decision changes this.
- Keep main section headlines and support paragraphs centered by default, including on desktop. Do not introduce left-aligned top-level section intros unless the user explicitly asks for that exception.
- Do not introduce generic AI gradients, purple palettes, pill CTAs, decorative blobs, or unrelated design systems.
- Prefer extending existing components and patterns before creating new ones.

## Development Commands

Run commands from this folder:

```bash
npm run dev
npm run lint
npm exec tsc -- --noEmit
npm run build
```

Use `npm run build` when the change affects routing, metadata, images, imports, or production behavior.

## Verification Expectations

For code changes:

- run `npm run lint`
- run `npm exec tsc -- --noEmit`
- run `npm run build` when relevant

For UI changes:

- verify the local server is running
- check desktop and mobile rendering
- check text wrapping, CTA contrast, images, and sticky/mobile behavior
- check that public claims still match the approved context

For documentation-only changes:

- inspect the changed docs for stale links, duplicated guidance, and unclear source-of-truth boundaries

## Environment Notes

- `NEXT_PUBLIC_SITE_URL` can override the public site URL used for canonical links, sitemap, robots, and schema.
- If it is not set, the app falls back to `https://academy.remotelytalents.com`.
- Google Tag Manager is currently embedded in [app/layout.tsx](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/app/layout.tsx).

## End-Of-Work Check

Before finishing site work:

1. confirm whether `context/index.md` needs updating
2. confirm whether `context/MEMORY.md` needs updating
3. confirm whether `DESIGN.md` still matches UI changes
4. report any verification not completed
5. do not touch unrelated dirty git changes
