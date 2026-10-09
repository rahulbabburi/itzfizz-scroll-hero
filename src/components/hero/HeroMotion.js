"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Owns the hero's <section> and every animation in it. The markup arrives as
// children from the Hero server component; elements are found by data-anim.
export default function HeroMotion({ children, className }) {
  const root = useRef(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const mm = gsap.matchMedia();

      // Exactly one of these always matches, so the setup always runs. When the
      // preference changes, matchMedia reverts everything and runs it again.
      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        ({ conditions }) => {
          playIntro(q, conditions.reduce);
          driveOnScroll(root.current, q, conditions.reduce);
        },
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} className={className}>
      {children}
    </section>
  );
}

// Load animation: plays once, on its own clock.
function playIntro(q, reduce) {
  const ghost = q('[data-anim="ghost"]');
  const letters = q('[data-anim="ghost"] [data-anim="char"]');
  const car = q('[data-anim="car"]');
  const hint = q('[data-anim="hint-inner"]');

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  if (reduce) {
    // No movement, just gentle fades.
    gsap.set(car, { autoAlpha: 1 });
    tl.fromTo(ghost, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 })
      .fromTo(hint, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 });
    return;
  }

  gsap.set(ghost, { autoAlpha: 1 });
  tl.fromTo(letters, { yPercent: 110 }, { yPercent: 0, duration: 0.9, stagger: 0.045 })
    .fromTo(
      car,
      { xPercent: -60, autoAlpha: 1 },
      { xPercent: 0, duration: 0.8, ease: "power2.out" },
      0.15,
    )
    .fromTo(hint, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 }, 1.1);
}

// Scroll animation: pins the hero, drives the car across, then brings in the stats.
function driveOnScroll(section, q, reduce) {
  const tl = gsap.timeline({
    defaults: { ease: "none", duration: 1 },
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "+=220%",
      pin: true,
      // Catches up to the scrollbar over 1s for smooth motion; tracks it
      // directly when the user prefers reduced motion.
      scrub: reduce ? true : 1,
    },
  });

  // The drive. The mover carries the car and the trail. The paint layer moves
  // back by the same amount, so the painted letters stay exactly over the outline.
  tl.to(q('[data-anim="mover"]'), { xPercent: 100 }, 0)
    .to(q('[data-anim="paint"]'), { xPercent: -100 }, 0)
    .to(q('[data-anim="hint"]'), { autoAlpha: 0, duration: 0.15 }, 0);

  // Once the car has gone, the stats come in one by one and count up.
  tl.fromTo(
    q('[data-anim="stat"]'),
    reduce ? { autoAlpha: 0 } : { y: 32, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 0.25, stagger: 0.1, ease: "power2.out" },
    1,
  );
  if (!reduce) {
    q('[data-anim="count"]').forEach((number, i) => {
      tl.from(
        number,
        { textContent: 0, duration: 0.35, ease: "power1.out", snap: { textContent: 1 } },
        1 + i * 0.1,
      );
    });
  }

  // Hold the finished scene for a moment before the page scrolls on.
  tl.to({}, { duration: 0.15 });
}
