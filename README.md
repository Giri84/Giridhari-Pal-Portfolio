# Giridhari Pal — Portfolio

A one-page portfolio built with Next.js 15 (App Router) + Tailwind CSS +
Framer Motion. The design is built around a "live telemetry" motif — a
signal trace that draws itself down the side nav as you scroll, an
experience section styled as a deployment log, and skills grouped as
loaded stack modules — since that's the actual world this profile lives in
(IoT, real-time data pipelines, backend systems).

## Run it locally

Requires Node 18.18+ (Node 20/22 recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit your content

Everything text-based — name, summary, stats, skills, experience,
projects, education, contact links — lives in one file:

```
data/profile.js
```

Change the values there and every section updates automatically. You
don't need to touch any component files to update your résumé content.

## Add a real photo (optional)

The hero currently shows a generated "GP" monogram instead of a photo,
since no photo was provided when this was built. To use a real one:

1. Drop a square photo (560×560px or larger) into `public/images/avatar.jpg`.
2. Open `components/SignalAvatar.jsx` — there's a commented block at the
   bottom of the file showing exactly what to change.

## Deploy to Vercel

**Option A — via GitHub (recommended):**

1. Push this folder to a new GitHub repository.
2. Go to https://vercel.com/new, import that repository.
3. Leave all settings on their defaults (Vercel auto-detects Next.js) and
   click **Deploy**.

**Option B — via Vercel CLI:**

```bash
npm i -g vercel
vercel
```

Follow the prompts. Running `vercel --prod` afterward promotes it to your
production URL.

No environment variables are required — this site has no backend or
external API calls.

## Project structure

```
app/            Root layout, global styles, page assembly
components/     One component per section (Hero, ExperienceLog, etc.)
data/profile.js All resume content in one place
public/images/  Where to drop a real photo, if you want one
```

## Tech notes

- Fonts (Space Grotesk, Inter, JetBrains Mono) are self-hosted via
  `@fontsource`, so there's no runtime dependency on Google Fonts.
- Respects `prefers-reduced-motion`.
- Fully responsive: a collapsible top nav + progress bar replaces the
  side rail below the `lg` breakpoint.
