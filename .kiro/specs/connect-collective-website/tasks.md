# Implementation Plan: Connect Collective Website

## Overview

Build a single-page static marketing website for Connect Collective using Next.js App Router (static export), Tailwind CSS, and TypeScript. The implementation proceeds incrementally: project scaffolding → layout and navigation → content sections (in page order) → responsive polish → build/deploy configuration. Each task wires into the existing page composition so there is no orphaned code.

## Tasks

- [x] 1. Initialize Next.js project with Tailwind CSS and static export configuration
  - Run `npx create-next-app@latest` with TypeScript and Tailwind CSS enabled (App Router)
  - Configure `next.config.js` with `output: "export"` for static export
  - Set up `globals.css` with Tailwind directives (`@tailwind base; @tailwind components; @tailwind utilities`) and `scroll-behavior: smooth` on `html`
  - Configure `tailwind.config.ts` with the brand color palette (primary, secondary, accent, neutral, background) and sans-serif font family
  - Add `vercel.json` for Vercel deployment configuration
  - Install testing dependencies: `jest`, `@testing-library/react`, `@testing-library/jest-dom`, `jest-axe`, `jest-environment-jsdom`, `ts-jest`
  - Configure Jest (`jest.config.ts`) for Next.js with TypeScript support
  - _Requirements: 15.1, 15.2, 15.3, 15.4, 17.1, 17.2_

- [x] 2. Create root layout and page composition
  - [x] 2.1 Implement `src/app/layout.tsx` with semantic HTML structure
    - Set up `<html>`, `<body>` with professional sans-serif font (e.g., Inter via `next/font/google`)
    - Include `<meta>` viewport and site metadata (title, description)
    - _Requirements: 16.1, 17.2_

  - [x] 2.2 Create `src/app/page.tsx` composing all section components
    - Import and render all section components in order: Navigation, HeroSection, AboutSection, ChallengeSection, ApproachSection, ServicesSection, FrameworkSection, DifferentiatorsSection, AudienceSection, OutcomesSection, WhySection, CTASection, Footer
    - Wrap sections in `<main>` element for semantic structure
    - _Requirements: 1.1, 1.2, 16.1_

- [x] 3. Implement Navigation component
  - [x] 3.1 Create `src/components/Navigation.tsx` as a client component (`"use client"`)
    - Fixed position at top of viewport with z-index
    - Display company name on the left
    - Desktop (≥ 768px): horizontal nav links — About, Services, Framework, Let's Connect
    - Each link is an `<a href="#section-id">` for smooth scroll
    - Use `<nav>` and `<header>` semantic elements
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 16.1, 16.3_

  - [x] 3.2 Implement mobile hamburger menu
    - Below 768px: collapse links into a hamburger icon button
    - Toggle `mobileMenuOpen` state to show/hide vertical dropdown
    - Clicking a link closes the mobile menu
    - Ensure hamburger button is keyboard-accessible with appropriate `aria-expanded` and `aria-label`
    - _Requirements: 2.5, 2.6, 14.1, 16.3_

  - [ ]* 3.3 Write unit tests for Navigation component
    - Test company name renders
    - Test all four nav links render with correct hrefs
    - Test hamburger menu toggle behavior
    - Test mobile menu link click closes menu
    - Run jest-axe accessibility check
    - _Requirements: 2.1, 2.2, 2.3, 2.5, 2.6_

- [x] 4. Implement Hero and About sections
  - [x] 4.1 Create `src/components/HeroSection.tsx`
    - Render `<h1>` with "Connect Collective"
    - Render tagline paragraph: "Connecting the right technologies to the right decisions"
    - Render CTA button "Start a Conversation" linking to `#contact`
    - Full viewport height, centered content layout
    - Use `<section id="hero" aria-labelledby="hero-heading">`
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 1.3, 16.1, 16.4_

  - [x] 4.2 Create `src/components/AboutSection.tsx`
    - Render `<h2>` heading (e.g., "About Us")
    - Render company description paragraph
    - Use `<section id="about" aria-labelledby="about-heading">`
    - Single column, max-width constrained for readability
    - _Requirements: 4.1, 4.2, 16.1, 16.4_

  - [ ]* 4.3 Write unit tests for HeroSection and AboutSection
    - Test HeroSection renders company name, tagline, and CTA button with correct href
    - Test AboutSection renders heading and description text
    - Run jest-axe on both components
    - _Requirements: 3.1, 3.2, 3.3, 4.1, 4.2_

- [x] 5. Implement Challenge and Approach sections
  - [x] 5.1 Create `src/components/ChallengeSection.tsx`
    - Render `<h2>` heading (e.g., "What We Do")
    - Render `<ul>` listing four overwhelm categories: startup pitches, emerging technologies, vendor solutions, partnership opportunities
    - Render the critical question: "What should you actually spend time on?"
    - Communicate that the core challenge is clarity and prioritization
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 16.1, 16.4_

  - [x] 5.2 Create `src/components/ApproachSection.tsx`
    - Render `<h2>` heading (e.g., "Our Approach")
    - Render four approach pillars: structured decision frameworks, AI-enabled screening, market and competitive insight, commercialization and partnership strategy
    - Communicate that Connect Collective supplements the client's internal team
    - Single column on mobile, 2-column grid on desktop
    - _Requirements: 6.1, 6.2, 6.3, 14.3, 16.1, 16.4_

  - [ ]* 5.3 Write unit tests for ChallengeSection and ApproachSection
    - Test ChallengeSection renders heading, four categories, and critical question
    - Test ApproachSection renders heading, four pillars, and supplementary note
    - Run jest-axe on both components
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 6.1, 6.2, 6.3_

- [x] 6. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 7. Implement Services and Framework sections
  - [x] 7.1 Create `src/components/ServicesSection.tsx`
    - Render `<h2>` heading (e.g., "How We Help")
    - Render four service cards, each with `<h3>` title and `<p>` description:
      - "Technology Fit Screening" / "Is this aligned with your strategy?"
      - "Partner & Opportunity Mapping" / "Who should you be talking to—and who should you ignore?"
      - "Pilot Prioritization" / "What is worth testing now vs. later?"
      - "Risk & Feasibility Assessment" / "Where are the real risks before you invest time?"
    - Cards with border/shadow for visual distinction
    - Single column on mobile, 2×2 grid on tablet/desktop
    - _Requirements: 7.1, 7.2, 7.3, 14.2, 14.3, 16.1, 16.4_

  - [x] 7.2 Create `src/components/FrameworkSection.tsx`
    - Render `<h2>` heading (e.g., "Our Framework")
    - Render four outcome cards with emoji icon, `<h3>` title, `<p>` description:
      - ❌ "Ignore" / "Not worth your time"
      - 👀 "Watch" / "Monitor, but don't engage yet"
      - 🧪 "Pilot" / "Test in a controlled setting"
      - 🚀 "Advance" / "Move toward partnership or investment"
    - Communicate that the framework moves teams from analysis to decision
    - Single column on mobile, 4-column grid on desktop
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 14.3, 16.1, 16.4_

  - [ ]* 7.3 Write unit tests for ServicesSection and FrameworkSection
    - Test ServicesSection renders heading and all four service cards with correct titles and descriptions
    - Test FrameworkSection renders heading, four outcomes with icons, titles, and descriptions
    - Run jest-axe on both components
    - _Requirements: 7.1, 7.2, 7.3, 8.1, 8.2, 8.3, 8.4_

- [x] 8. Implement Differentiators and Audience sections
  - [x] 8.1 Create `src/components/DifferentiatorsSection.tsx`
    - Render `<h2>` heading (e.g., "What Makes Us Different")
    - Render four differentiators with `<h3>` title and `<p>` description:
      - "Decision-first, not data-first" / "Focus on what you should do, not just what exists."
      - "Built for external innovation" / "Specialize in evaluating technologies outside your organization."
      - "Speed and clarity" / "Compress weeks of internal discussion into actionable insight."
      - "Commercially grounded" / "Every recommendation is tied to real business impact."
    - Single column on mobile, 2×2 grid on desktop
    - _Requirements: 9.1, 9.2, 14.3, 16.1, 16.4_

  - [x] 8.2 Create `src/components/AudienceSection.tsx`
    - Render `<h2>` heading (e.g., "Who We Work With")
    - Render `<ul>` listing five audience categories: industrial and manufacturing companies, advanced materials and engineering firms, healthcare and medtech organizations, corporate innovation teams, business development and strategy groups
    - _Requirements: 10.1, 10.2, 16.1, 16.4_

  - [ ]* 8.3 Write unit tests for DifferentiatorsSection and AudienceSection
    - Test DifferentiatorsSection renders heading and all four differentiators
    - Test AudienceSection renders heading and all five audience categories
    - Run jest-axe on both components
    - _Requirements: 9.1, 9.2, 10.1, 10.2_

- [x] 9. Implement Outcomes, Why, and CTA sections
  - [x] 9.1 Create `src/components/OutcomesSection.tsx`
    - Render `<h2>` heading (e.g., "Typical Outcomes")
    - Render `<ul>` listing five outcomes with checkmarks or bullets
    - _Requirements: 11.1, 11.2, 16.1, 16.4_

  - [x] 9.2 Create `src/components/WhySection.tsx`
    - Render `<h2>` heading (e.g., "Why Connect Collective")
    - Render closing statement: "Because having access to innovation is not the problem. Knowing what to ignore—and what to act on—is."
    - Centered, visually prominent text
    - _Requirements: 12.1, 12.2, 16.1, 16.4_

  - [x] 9.3 Create `src/components/CTASection.tsx`
    - Render `<h2>` heading (e.g., "Let's Connect")
    - Render intro message: "If your team is evaluating new technologies or partnerships, we can help you move faster with more confidence."
    - Render three contact links as distinct clickable elements:
      - Email: `mailto:contact@connectcollective.com`
      - LinkedIn: `https://linkedin.com`
      - Schedule a Call: `https://calendly.com`
    - Centered content with distinct link buttons
    - _Requirements: 13.1, 13.2, 13.3, 13.4, 16.1, 16.3, 16.4_

  - [ ]* 9.4 Write unit tests for OutcomesSection, WhySection, and CTASection
    - Test OutcomesSection renders heading and all five outcomes
    - Test WhySection renders heading and closing statement
    - Test CTASection renders heading, intro message, and three contact links with correct hrefs
    - Run jest-axe on all three components
    - _Requirements: 11.1, 11.2, 12.1, 12.2, 13.1, 13.2, 13.3, 13.4_

- [x] 10. Implement Footer component
  - [x] 10.1 Create `src/components/Footer.tsx`
    - Render `<footer>` with copyright text (e.g., "© 2025 Connect Collective. All rights reserved.")
    - Full width, bottom of page
    - _Requirements: 1.2, 16.1_

  - [ ]* 10.2 Write unit tests for Footer
    - Test Footer renders copyright text inside a `<footer>` element
    - Run jest-axe accessibility check
    - _Requirements: 1.2_

- [x] 11. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 12. Responsive design polish and visual consistency
  - [x] 12.1 Apply responsive breakpoints across all sections
    - Verify mobile (< 768px): single-column stacked layout for all sections
    - Verify tablet (768px–1023px): appropriate multi-column layouts for Services, Framework, Differentiators
    - Verify desktop (≥ 1024px): full multi-column grids for Services (2×2), Framework (4-col), Differentiators (2×2)
    - Ensure text is readable without horizontal scrolling from 320px to 2560px
    - _Requirements: 14.1, 14.2, 14.3, 14.4_

  - [x] 12.2 Apply consistent visual design and branding
    - Verify consistent color palette usage across all sections
    - Verify consistent spacing and padding between sections
    - Verify visual hierarchy: font sizes, weights, and colors for headings, subheadings, body text
    - Ensure sufficient color contrast ratios (minimum 4.5:1 for normal text)
    - _Requirements: 17.1, 17.2, 17.3, 17.4, 16.5_

  - [x] 12.3 Verify semantic HTML and accessibility across all components
    - Confirm `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` are used correctly
    - Confirm heading levels (h1–h3) follow logical hierarchy without skipping
    - Confirm all interactive elements are keyboard-navigable
    - Confirm `aria-labelledby` attributes on all sections
    - _Requirements: 16.1, 16.2, 16.3, 16.4_

- [x] 13. Build verification and final checkpoint
  - [x] 13.1 Verify static export build
    - Run `next build` and confirm it completes successfully
    - Verify the `out/` directory contains `index.html` and static assets
    - Confirm no server-side runtime dependencies in the output
    - _Requirements: 15.1, 15.3_

  - [ ]* 13.2 Write build verification test
    - Create `src/__tests__/build/static-export.test.ts`
    - Test that `next build` produces a valid static export
    - Test that `out/index.html` exists after build
    - _Requirements: 15.1, 15.3_

  - [x] 13.3 Final checkpoint - Ensure all tests pass
    - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- All components use TypeScript with Tailwind CSS utility classes
- No property-based tests are included — the design explicitly determined PBT does not apply to this static UI feature
- Unit tests use Jest + React Testing Library + jest-axe for accessibility
