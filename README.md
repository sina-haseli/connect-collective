# Connect Collective

A single-page static marketing website for **Connect Collective**, a consulting company that helps organizations evaluate external innovation opportunities — technologies, partnerships, and vendor solutions.

Built with [Next.js](https://nextjs.org/) (App Router, static export), [Tailwind CSS](https://tailwindcss.com/), and [TypeScript](https://www.typescriptlang.org/). Deployed on [Vercel](https://vercel.com/).

## Overview

Connect Collective helps companies cut through the noise of external innovation and focus on what truly matters. This website serves as the company's primary digital presence, communicating their value proposition, services, decision framework, and contact information — all on a single, smooth-scrolling page.

### Sections

| Section | Description |
|---|---|
| Hero | Company name, tagline, and primary CTA |
| About | Mission and purpose |
| What We Do | The challenge of external innovation |
| Our Approach | Methodology and four capability pillars |
| How We Help | Four service offerings |
| Our Framework | Decision framework (Ignore → Watch → Pilot → Advance) |
| What Makes Us Different | Four key differentiators |
| Who We Work With | Target audience categories |
| Typical Outcomes | Client results |
| Why Connect Collective | Closing value statement |
| Let's Connect | Contact links (Email, LinkedIn, Calendly) |

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Font:** Inter (via `next/font/google`)
- **Testing:** Jest 30 + React Testing Library + jest-axe
- **Deployment:** Vercel (static)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- npm (comes with Node.js)

### Installation

```bash
git clone <repository-url>
cd connect-collective
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

This produces a static export in the `out/` directory — pure HTML, CSS, and JS with no server runtime required.

### Lint

```bash
npm run lint
```

### Test

```bash
npm test
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (html, body, font, metadata)
│   ├── page.tsx            # Home page — composes all section components
│   ├── globals.css         # Tailwind directives + smooth scroll
│   └── favicon.ico
└── components/
    ├── Navigation.tsx      # Fixed navbar with mobile hamburger menu
    ├── HeroSection.tsx
    ├── AboutSection.tsx
    ├── ChallengeSection.tsx
    ├── ApproachSection.tsx
    ├── ServicesSection.tsx
    ├── FrameworkSection.tsx
    ├── DifferentiatorsSection.tsx
    ├── AudienceSection.tsx
    ├── OutcomesSection.tsx
    ├── WhySection.tsx
    ├── CTASection.tsx
    └── Footer.tsx
```

## Design Decisions

- **Static export** — No server runtime. The entire site is pre-rendered at build time and served from a CDN.
- **Component-per-section** — Each content section is an isolated React component, making content easy to update independently.
- **Tailwind-only styling** — No custom CSS files. Responsive breakpoints (`md:`, `lg:`) and utility classes handle all layout and visual design.
- **Client-side smooth scrolling** — Navigation uses anchor hrefs with CSS `scroll-behavior: smooth`, no JS scroll libraries.
- **Single client component** — Only `Navigation` uses `"use client"` for the mobile menu toggle. Everything else is a server component rendered at build time.

## Responsive Design

The site adapts across three breakpoints:

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | < 768px | Single column, hamburger nav |
| Tablet | 768px – 1023px | Multi-column grids where appropriate |
| Desktop | ≥ 1024px | Full multi-column layouts (2×2, 4-col grids) |

Readable without horizontal scrolling from 320px to 2560px.

## Brand Colors

| Token | Hex | Usage |
|---|---|---|
| Primary | `#1E3A5F` | Dark navy — hero background, headings |
| Secondary | `#2A9D8F` | Teal — buttons, accents |
| Accent | `#E9C46A` | Gold — highlights |
| Neutral | `#5B6B7D` | Slate — body text |
| Background | `#F8FAFC` | Light gray — page background |

## Deployment

The site is configured for Vercel with `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "out",
  "framework": "nextjs"
}
```

Push to your connected Git repository and Vercel handles the rest. The static export can also be deployed to any static hosting provider (Netlify, Cloudflare Pages, S3 + CloudFront, etc.) by serving the `out/` directory.

## Customization

To update contact links, edit `src/components/CTASection.tsx` and replace the placeholder URLs:

- **Email:** `mailto:contact@connectcollective.com`
- **LinkedIn:** `https://linkedin.com`
- **Schedule a Call:** `https://calendly.com`

All content is hardcoded in the component files under `src/components/`. No CMS or database required.

## License

See [LICENSE](./LICENSE) for details.
