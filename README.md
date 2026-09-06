# Keyvostra Group — Website

A production-ready React (Vite) rebuild of the Keyvostra Group Stitch design: a
premium real estate ecosystem (Investment, Property Management, Maintenance)
based in Sidi Maarouf, Casablanca.

## Stack

- **React 19 + Vite** — build tooling and dev server
- **React Router 7** — client-side routing, one route per page
- **Tailwind CSS 3** — styling, configured with the exact design-system tokens
  (see `tailwind.config.js`)
- **react-helmet-async** — per-page `<title>`, meta description, Open Graph,
  and Twitter Card tags

No backend. The contact form validates client-side and shows a success state;
wiring it to a real inbox is a placeholder task, see "Contact form" below.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint       # oxlint
```

## Folder structure

```
src/
  components/   Reusable UI: Navbar, Footer, StickyCTA, ServiceCard,
                TestimonialCarousel, ContactForm, PortfolioCard, SEO, Icon…
  pages/        One file per route: Home, About, Invest, Management,
                Maintenance, Portfolio, Contact, NotFound
  data/
    siteData.js Single source of truth for nav links, footer links, core
                services, testimonials, and portfolio projects
  App.jsx       Route table + persistent layout (Navbar/Footer/StickyCTA)
  main.jsx      App entry — wraps App in HelmetProvider + BrowserRouter
public/
  images/       Downloaded stock photography (see "Images" below)
  sitemap.xml, robots.txt, favicon.svg
```

### Adding a new page

1. Create `src/pages/NewPage.jsx`, following an existing page for structure
   (start with an `<SEO>` block, then one `<h1>`, then your sections).
2. Register the route in `src/App.jsx` (add to the `lazy()` imports and the
   `<Routes>` block).
3. Add it to `navLinks` / `footerLinks` in `src/data/siteData.js` if it should
   appear in the nav or footer.
4. Add its URL to `public/sitemap.xml`.

### Editing content

Nav links, footer links, the founder's name/title, contact details, the three
core services, homepage testimonials, and the four portfolio projects all live
in `src/data/siteData.js` — edit there rather than hunting through JSX.

## Design system fidelity

`tailwind.config.js` reproduces the full token palette extracted from the
Stitch export's `DESIGN.md` ("Azure Heritage System"), not just the five named
brand colors — most component classes in the original HTML reference tokens
like `on-surface-variant`, `surface-container-low`, `primary-fixed`, etc.
directly, so this was necessary for a faithful rebuild. The five brand colors
you specified are also available directly as Tailwind classes:
`cobalt-blue`, `deep-navy`, `cream-white`, `pale-sky`, `sand-gray`.

**One deliberate correction**: the raw Stitch export set
`borderRadius.full: 0.75rem`, which broke every circular element in the design
(icon roundels, avatar circles, filter-chip pills all render as squircles
instead of circles). This rebuild restores `full: 9999px` — a true pill/circle
radius — since that's clearly the original design intent.

## SEO

- Semantic HTML5 (`header`/`nav`/`main`/`section`/`footer`), one `<h1>` per
  page, logical heading order.
- Every page sets a unique `<title>` and meta description via `<SEO>`
  (`src/components/SEO.jsx`), plus Open Graph / Twitter Card tags.
- `index.html` also carries static fallback meta tags and a `RealEstateAgent`
  JSON-LD block (name, Sidi Maarouf/Casablanca address, phone, services) —
  this is what a crawler sees before any JavaScript runs.
- `public/sitemap.xml` and `public/robots.txt` are static files — update the
  sitemap whenever you add a route.
- All images carry contextual `alt` text; below-the-fold images use
  `loading="lazy"`, hero images use `fetchPriority="high"`.

**Important tradeoff to know about:** this is a Vite SPA, not a
server-rendered app. `react-helmet-async` updates `<title>` and meta tags
*after* the JavaScript bundle loads and React mounts — it does not change what
a crawler sees in the raw HTML response. Google's crawler executes JavaScript
and generally picks this up fine, but other crawlers (Bing, link-preview bots,
social scrapers that don't run JS) will only see the static fallback tags in
`index.html` for every route, not the per-page ones. If SEO ranking across
multiple search engines and rich social previews per page become a priority,
the fix is either:
- **Prerendering** (e.g. `vite-plugin-ssr`, or a build-time prerender pass
  with something like `react-snap`) to bake static HTML per route, or
- **Migrating to Next.js App Router**, which was the original recommendation
  for this project specifically because it solves this natively via true SSR
  and the Metadata API. The component structure here (one component per page,
  Tailwind classes, `siteData.js`) would port over with moderate effort.

## Images

Every photo in `public/images/` is a real, free-to-use photograph downloaded
from Unsplash (Unsplash License — free for commercial use, no attribution
required), chosen to match the mood described in the original Stitch export's
AI-generated placeholder images (which pointed at ephemeral, non-licensed
Google-hosted URLs and were not safe to ship to production as-is).

These are **placeholders for real Keyvostra Group photography** — swap the
files in `public/images/` for real property photos when available, keeping
the same filenames (referenced from `src/data/siteData.js` and the page
files) or updating the references if you rename them.

## Founder videos

The founder's photo on the Home authority section and the About hero were
replaced with looping background video (`src/components/BackgroundVideo.jsx`),
using two clips supplied directly (not stock footage):

- `public/videos/founder-explaining.mp4` — Home page authority section
- `public/videos/founder-rising.mp4` — About page hero

Both were re-encoded from the originals (H.264, audio stripped since they
autoplay muted, `scale=720:-2`, CRF 27) — roughly a 70% size reduction
(2.2–2.7 MB → 600–800 KB each) with no visible quality loss at their display
size. Poster frames were extracted to `public/images/founder-*-poster.jpg` so
the layout paints instantly before the video loads, and `BackgroundVideo`
falls back to the poster image (no autoplay) for users with
`prefers-reduced-motion` set.

The original, uncompressed source clips are kept in `public/vedio/` (not
referenced by the app, so not part of the shipped build) — that folder also
still has an unused drone shot of modern villas, kept in case it's useful for
a future hero background.

## Contact form

`src/components/ContactForm.jsx` validates all fields client-side (required
name/email/message, email format, optional phone format) and shows a success
message on submit — but there is no backend, so submissions currently go
nowhere. To wire it up:

- Point the `handleSubmit` function at an API route, a form backend (e.g.
  Formspree, Resend, a serverless function), or `mailto:` as a stopgap.
- Consider adding a honeypot field or reCAPTCHA if the form goes live
  publicly, to cut down on spam.

## Known content gaps / assumptions made

These were called out and decided during the build — recorded here for
visibility:

- **Founder name**: the Stitch export was inconsistent (homepage said
  "Youssef Benali", About page said "Youssef Berrada"). Standardized on
  **Youssef Berrada** everywhere.
- **Testimonials**: the Stitch export had no testimonials section or copy
  anywhere. The homepage carousel (`TestimonialCarousel`) ships with three
  placeholder quotes in `src/data/siteData.js` — replace with real client
  testimonials before launch.
- **Contact details**: phone (`+212 555 000 000`) and email
  (`contact@keyvostragroup.com`) are placeholders carried over verbatim from
  the Stitch export — replace in `src/data/siteData.js`.
- **Map**: the Contact page's "map card" is a static aerial photo with a
  location label (matching what the original Stitch design actually shipped,
  which was also a static image, not a real interactive map). Swap in a real
  embedded map (Google Maps/Mapbox) if desired.
- **Social links**: WhatsApp/website/share links on the Contact page point to
  `#` placeholders — fill in `site.social` in `src/data/siteData.js`.

## Homepage redesign — September 2026

The homepage and contact page now use French copy and the supplied cream/navy/cobalt palette. Existing service detail pages remain in English. The homepage uses local property photography and the existing founder poster; confirm the portrait and the founder’s Latin spelling before publication.

The homepage gallery is explicitly illustrative. Add approved client testimonials to `src/data/siteData.js` to display the testimonial carousel in place of the commitments section. Real case studies, approved social URLs and verified business contact details still need to be supplied.

The contact form now validates required fields and opens a prefilled email draft. It does not send or store inquiries on a server and does not claim delivery. This supersedes the original contact-form behavior described above. Connect an email/API service for direct submission.

## Cinematic presentation and floating video

The homepage now uses the existing villa drone video, a large animated wordmark, a floating header and one-time scroll reveals, inspired by the presentation at nordpixel.ch. No reference-site assets or business claims were imported.

`CinematicHero.jsx` pauses background playback offscreen and when the tab is hidden. `MotionReveal.jsx` respects reduced motion. `VideoGreeting.jsx` shows a muted floating preview with pause, collapse and reopen controls. Clicking opens a native modal with the original video (including its audio track), standard player controls and a contact link. Escape closes the modal and stops playback. Reduced-motion users receive static previews until they choose playback. On mobile the widget sits above the consultation bar.

## Contact delivery — current setup

The confirmed recipient is `contact@keyvostra.com`. Both contact forms now POST to `https://formsubmit.co/contact@keyvostra.com`, replacing the previous mailto draft workflow. FormSubmit handles delivery and its default CAPTCHA/confirmation page. Fields include the client's name, phone, email, selected service and message; the email field enables Reply-To. No API secret is embedded in the frontend.

**Activation required:** submit once from the served website, then confirm the activation email received at `contact@keyvostra.com` (check spam too). Afterwards send another message and verify receipt before relying on this for customer inquiries. Delivery has not been verified from this workspace. Submissions are processed by the external FormSubmit service. See https://formsubmit.co/ for activation instructions.

Earlier notes describing the email address as a placeholder or the form as mailto-only are superseded by this section.

## Published case-study content

Four client-supplied cases are maintained in `src/data/projects.js`, shared by the homepage carousel, `/portfolio`, and `/portfolio/:slug`. The previous illustrative project names have been removed from the central content store. The carousel is no longer empty.

The supplied outcomes are attributed to Keyvostra: the 15% figure describes the residential case, the land case is a marketed opportunity (not a completed sale), and agricultural work is advisory/forecasting. No investor identity is published. All images are locally stored Unsplash illustrations, labelled on cards and detail pages; provenance is in `public/images/projects/SOURCES.md`.
# keyvostra-website
