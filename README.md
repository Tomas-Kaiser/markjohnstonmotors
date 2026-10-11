# Mark Johnston Motors

Rebuild of [markjohnstonmotors.ie](https://markjohnstonmotors.ie) in Next.js 16 (App Router), React 19 and Tailwind CSS 4.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Structure

- `src/lib/site.ts` holds all business details: garages, phone numbers, email and services. Edit this file to change any content.
- `src/app/page.tsx` is the home page: hero, about, services, garages and call-to-action.
- `src/app/contact/` is the contact page and the "Request a Service" form. The form uses a server action in `actions.ts`.
- `src/components/` holds the header, footer and garage card.
- `public/images/` holds the logo (cropped from the original site) and garage photos.

## Contact form email

The form sends email through [Resend](https://resend.com). Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`. The sending domain must be verified in Resend.

- **Development without a key:** submissions are logged to the server console.
- **Production without a key:** visitors see a message asking them to phone the garage.
