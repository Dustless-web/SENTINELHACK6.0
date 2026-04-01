# SENTINEL HACK 6.0 - Squid Game Theme Website

## Original Problem Statement
Transform the existing Sentinel Hack 5.0 hackathon website into Sentinel Hack 6.0 with a Squid Game theme while keeping basic structure intact.

## Key Requirements
1. Change branding from "SENTINEL HACK 5.0" to "SENTINEL HACK 6.0"
2. Apply Squid Game theme with iconic pink/teal colors and shapes (circle, triangle, square)
3. Change "Register Now" to "Registration Starts Soon"
4. Update hackathon domains to: Data Science, Cybersecurity & Blockchain, Cloud Computing, Agentic AI
5. Update footer contact: Email: sentinelhack@ksit.edu.in, Student Coordinators: Pranav (7483986779) & Priyadarshini E P (7259905558)
6. Keep same logo, college address, and basic structure
7. **Add animated floating Squid Game shapes in the background**

## User Personas
- College students interested in hackathons
- Tech enthusiasts looking for competition opportunities
- Sponsors seeking partnership opportunities

## Tech Stack
- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion for animations
- shadcn/ui components

## What's Been Implemented (January 2026)

### Theme Changes
- Applied Squid Game color scheme: pink (#ed1b76) and teal (#067b7b)
- Added iconic Squid Game shapes (circle, triangle, square) throughout the website
- Updated all neon effects to match the new color scheme
- Created new CSS utility classes: `squid-card`, `neon-text-pink`, `neon-text-teal`

### Animated Background (New)
- Created slow-motion floating animations for all Squid Game shapes
- Added CSS keyframe animations:
  - `float-slow` / `float-reverse` - gentle up/down floating
  - `drift-left` / `drift-right` - horizontal drifting movement
  - `spin-slow` / `spin-slow-reverse` - slow rotation for squares
  - `pulse-glow` - pulsing glow effect
- Applied animations to ALL sections: Hero, About, Tracks, Rules, Sponsors, FAQs, CTA
- Shapes are scattered across the background with varying:
  - Sizes (small to large)
  - Opacities (15-35%)
  - Animation delays (staggered for natural feel)
  - Colors (alternating pink and teal)

### Content Updates
- Hero section: "SENTINEL HACK 6.0" with "Let the games begin!" tagline
- Navbar: Updated branding, "Coming Soon" button instead of Register
- Tracks: Data Science, Cybersecurity & Blockchain, Cloud Computing, Agentic AI
- Footer: Updated email and student coordinator contact details
- About section: Updated to reflect Sentinel Hack 6.0
- CTA section: "LET THE GAMES BEGIN!" with Squid Game shapes
- FAQs: Updated references to version 6.0
- Rules: Updated styling with Squid Game theme

### Files Modified
- `/app/frontend/src/components/home/HeroSection.tsx`
- `/app/frontend/src/components/home/TracksSection.tsx`
- `/app/frontend/src/components/home/AboutSection.tsx`
- `/app/frontend/src/components/home/CtaSection.tsx`
- `/app/frontend/src/components/home/FAQSection.tsx`
- `/app/frontend/src/components/home/RulesSection.tsx`
- `/app/frontend/src/components/home/SponsorsSection.tsx`
- `/app/frontend/src/components/layout/Footer.tsx`
- `/app/frontend/src/components/layout/Navbar.tsx`
- `/app/frontend/tailwind.config.ts`
- `/app/frontend/src/index.css` (added animation keyframes)
- `/app/frontend/vite.config.ts`

## Testing Status
- All frontend tests passed (100%)
- Mobile responsiveness verified
- Theme colors and shapes verified
- Contact information verified
- Animations working smoothly

## Prioritized Backlog

### P0 (Not Applicable - MVP Complete)
- None

### P1 (Future Enhancements)
- Add actual registration form when ready
- Update event dates when confirmed
- Add countdown timer when date is set
- Add sponsor logos when confirmed

### P2 (Nice to Have)
- Add animated Squid Game doll for hero section
- Add more Squid Game-inspired mini-games/easter eggs
- Add team registration tracking system
- Add email notification system for registration updates

## Next Tasks
1. Update event dates when finalized
2. Replace "Registration Starts Soon" with actual registration link
3. Update FAQs with specific event details
4. Add confirmed sponsor logos
