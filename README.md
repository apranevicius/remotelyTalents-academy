# RemotelyTalents Academy Site

This is the Next.js website for RemotelyTalents Academy.

It contains:

- the Academy homepage at `/`
- the Academy About page at `/about`
- the remote-job coaching programs page at `/coaching-programs`
- the public course page at `/find-remote-job-with-ai`
- a legacy redirect from `/remote-job-with-ai`

The parent Academy workspace holds the strategy, marketing, course, and design context in `../context/`.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS 4
- Poppins via `next/font`

## Start Here

Before editing this app, read:

1. [../AGENTS.md](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/AGENTS.md)
2. [AGENTS.md](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/AGENTS.md)
3. [../context/index.md](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/context/index.md)
4. [../context/MEMORY.md](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/context/MEMORY.md)
5. [DESIGN.md](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/DESIGN.md) for UI work

## Development

Run commands from this folder:

```bash
npm run dev
```

The dev server usually opens at:

```text
http://localhost:3000
```

If that port is busy, Next.js may choose another port.

## Verification

Use these checks before calling code work done:

```bash
npm run lint
npm exec tsc -- --noEmit
```

Run a production build when changes affect routing, metadata, images, imports, or production behavior:

```bash
npm run build
```

For UI changes, also check the page in a browser on desktop and mobile widths.

## Environment

Optional environment variable:

```bash
NEXT_PUBLIC_SITE_URL=https://academy.remotelytalents.com
```

This value is used for canonical links, sitemap, robots, and structured data through [app/_lib/site-config.ts](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/app/_lib/site-config.ts).

If it is not set, the app falls back to:

```text
https://academy.remotelytalents.com
```

Google Tag Manager is embedded in [app/layout.tsx](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/app/layout.tsx).

## App Structure

| Path | Purpose |
| --- | --- |
| [app/page.tsx](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/app/page.tsx) | Academy homepage route |
| [app/_home/](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/app/_home) | Homepage components and content |
| [app/about/](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/app/about) | About page route, components, content, metadata, and schema |
| [app/coaching-programs/](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/app/coaching-programs) | Remote-job coaching programs route, components, content, metadata, schema, and conversion CTAs |
| [app/find-remote-job-with-ai/page.tsx](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/app/find-remote-job-with-ai/page.tsx) | Canonical course page route |
| [app/remote-job-with-ai/page.tsx](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/app/remote-job-with-ai/page.tsx) | Legacy redirect route |
| [app/remote-job-with-ai/remote-job-with-ai-page.tsx](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/app/remote-job-with-ai/remote-job-with-ai-page.tsx) | Shared course page assembly |
| [app/remote-job-with-ai/_content/](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/app/remote-job-with-ai/_content) | Course page content data |
| [app/_components/](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/app/_components) | Shared site components |
| [app/globals.css](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/app/globals.css) | Global styles and brand variables |
| [public/](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/public) | Static images and payment logos |

## Design Contract

Use [DESIGN.md](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/site/DESIGN.md) as the compact AI-facing design contract for website UI work.

The deeper design rationale lives in:

- [../context/BRAND-AND-DESIGN/visual-direction.md](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/context/BRAND-AND-DESIGN/visual-direction.md)
- [../context/BRAND-AND-DESIGN/color-palette.md](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/context/BRAND-AND-DESIGN/color-palette.md)
- [../context/BRAND-AND-DESIGN/typography-and-fonts.md](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/context/BRAND-AND-DESIGN/typography-and-fonts.md)
- [../context/BRAND-AND-DESIGN/website-ui-system.md](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/context/BRAND-AND-DESIGN/website-ui-system.md)

## Content Safety

Do not invent testimonials, reviews, placements, guarantees, pricing, or outcome claims.

The course can use the `29 days` framing as a structured action plan, but not as a hiring guarantee.

When in doubt, check [../context/MEMORY.md](/Users/adomaspranevicius/Desktop/RemotelyTalents/Academy/context/MEMORY.md) before editing public claims.
