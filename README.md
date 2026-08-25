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

## Lead capture

There is no backend and no email provider. Leads arrive through two channels:

- **Cal.com** handles anything that needs a booking: the Home Atelier visit (`/home-atelier#book`)
  and the Customizer's final step. Cal sends the confirmation and the host notification itself.
  The Customizer passes the current design into Cal's *Additional notes* field via the embed's
  `notes` prefill, so a booking arrives with the selections and indicative price attached.
- **Email, WhatsApp and phone** handle general queries, on `/contact`, `/consultation` and each
  product page, through `components/ContactActions.tsx`. Link builders live in `lib/contact.ts`,
  which prefills the subject and body so context is not lost.

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
