# Stargazer Event Consultants — Complete React Website

A responsive multi-page event-consultancy website built with React + Vite, using the supplied Stargazer logo and brochure-derived imagery.

## Included pages
- `/` — Home, cinematic rotating hero and company introduction
- `/about` — Company story, experience and client list
- `/services` — Service capabilities
- `/work` — Portfolio with category filters
- `/contact` — Contact details and enquiry form

## Visual features
- Original Stargazer logo retained
- Full-screen animated logo intro (once per browser session)
- Cinematic homepage hero slideshow with crossfades, slow zoom and manual slide controls
- Framer Motion page and content reveals
- GSAP ScrollTrigger animations
- Lenis smooth scrolling
- Responsive desktop and mobile navigation

## Tech stack
- React 18 + Vite
- React Router
- Framer Motion
- GSAP + ScrollTrigger
- Lenis
- Lucide React icons

## Run locally
Use Node.js 18+ (Node.js 20 LTS recommended).

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Production build
```bash
npm run build
npm run preview
```

## Assets and content
- The original supplied logo is `public/images/stargazer-logo.png`.
- Event photographs are crops from the supplied Stargazer company brochure and are stored in `public/images/`.
- Company description, services, event credentials, client names and contact details were transcribed from the supplied brochure.

## Before publishing
1. Confirm current contact address, phone numbers, email addresses and social profile URLs with Stargazer.
2. Replace brochure-derived image crops with original high-resolution event photography where available and approved.
3. Connect the enquiry form to a backend or form service. The current form uses `mailto:` and requires the visitor to have an email app configured.
4. Add client-approved privacy policy and terms pages if required.
5. Confirm image and logo usage permissions with the business.
6. Test the production build and all routes on the target hosting platform.

## Notes
The logo intro is stored in `sessionStorage`, so it plays once per browser tab session. Clear the `stargazer-intro-seen` session storage key to preview it again.
