# House of Darya

Made-to-order fine jewellery: P0 marketing and lead-generation site. No ecommerce: the funnel is
Discover → Explore → Customize → **Book Home Atelier** → Consultation.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · next-themes · Resend + React Email

## Run

```
npm install
npm run dev
```

Production: `npm run build && npm start`.

## Email / lead capture

All forms post to one server action (`app/actions.ts`) which validates, applies a honeypot
(silent success for bots), and calls `lib/enquiry/submitEnquiry.ts`, the single provider
abstraction. With `RESEND_API_KEY` set (see `.env.example`) it sends an internal notification
plus a branded customer acknowledgement (templates in `emails/`). Without a key it logs the lead
server-side and skips sending, so the site runs without configuration. `lib/enquiry/persistEnquiry.ts`
is the seam for a future durable store.

## Images

Every external placeholder URL lives in `lib/images.ts`. To move to local assets, drop files into
`public/images/` and change the corresponding manifest entry, one line per asset.

## Sitemap

| Route | Purpose |
| --- | --- |
| `/` | Editorial home: hero, trust marks, collections, atelier story, customization, process |
| `/home-atelier` | Primary conversion page + booking form (`#book`) |
| `/collections` | Collection index |
| `/collections/[slug]` | modern-elegant · classic-designer · statement · studs |
| `/jewellery/[slug]` | Product detail with indicative range and enquiry form |
| `/customise` | Guided customization journey with live preview, indicative range, booking handoff |
| `/consultation` | Request consultation form |
| `/contact` | Contact form + WhatsApp + atelier details |

## Structure

```
app/          routes, server action, sitemap/robots
components/   header, footer, theme, forms, customizer, cards, motion
lib/          site constants, image manifest, products, customizer logic, enquiry abstraction
emails/       React Email templates (internal notification, customer acknowledgement)
```

Design tokens (dark palette, type scale utilities) are defined in `app/globals.css`.
Pricing is always shown as an indicative range, confirmed at consultation, never as a purchase price.
