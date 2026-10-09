# Welcome Itzfizz: Scroll-Driven Hero

A scroll-driven hero section built with Next.js, Tailwind CSS and GSAP ScrollTrigger, inspired by [car-scroll-animation](https://paraschaturvedi.github.io/car-scroll-animation).

- **Live demo:** https://rahulbabburi.github.io/itzfizz-scroll-hero/
- **Repository:** https://github.com/rahulbabburi/itzfizz-scroll-hero

## What it does

- **On load:** the letter-spaced headline rises in letter by letter as a faint outline, and the car's nose rolls in.
- **On scroll:** the hero pins in place and the car drives across the road. A green trail behind it paints the headline solid. Once the car has gone, the four stats come in one by one while their numbers count up. Everything follows scroll progress with 1 second of smoothing, and runs backwards when you scroll up.

## How it works

### The car and the trail stay in sync through layout, not maths

```
.road
  outlined headline
  .mover      slides right on scroll (xPercent 0 → 100)
    .trail    green, clips its contents
      .paint  slides left by the same amount; holds the dark headline
    .car      sits on the mover's right edge
```

- The car sits on the mover's right edge, so the trail's front is always the car's centre.
- The paint layer moves back by exactly as much as the mover moves forward, so the dark letters always sit on top of the outlined ones.
- Every size is a CSS percentage. JavaScript never measures anything, and it all stays aligned when the window is resized.

### Performance

- Only `transform` and `opacity` are animated, so scrolling never triggers layout.
- One scroll timeline with `scrub: 1` and `ease: "none"`.
- `will-change: transform` is set only on the two moving layers.
- The car is an inline SVG, so there's no image to download. The font is self-hosted by `next/font`.

### Accessibility

- Screen readers hear the heading as "Welcome Itzfizz". The split letters and the decorative car are hidden from them.
- With `prefers-reduced-motion`, the intro and the stats only fade, and the car follows the scroll directly, without smoothing.
- Elements that animate in are hidden only when JavaScript runs (`@media (scripting: enabled)`), so the page still shows everything without it.

## Project structure

```
src/
  app/               layout, page, global styles, icon
  components/hero/
    Hero.js          markup (server component)
    HeroMotion.js    all GSAP code (client component)
    Headline.js      letter-split headline, used for both layers
    StatCard.js      one stat card
    CarSvg.js        the car
  data/stats.js      the four stats
```

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run lint
npm run build   # static site in out/
```

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository, on the `main` branch.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. `.github/workflows/deploy.yml` builds the static site and publishes it. It sets the base path from the repository name, so the site works at `https://<user>.github.io/<repo>/`.

## Tech

Next.js 16 (App Router, static export) · React 19 · Tailwind CSS 4 · GSAP 3 with ScrollTrigger and `@gsap/react`
