import CarSvg from "./CarSvg";
import Headline from "./Headline";
import HeroMotion from "./HeroMotion";
import StatCard from "./StatCard";
import { stats } from "@/data/stats";

const HEADLINE = "Welcome Itzfizz";

// Static markup only. HeroMotion (a client component) wraps it and animates it.
export default function Hero() {
  return (
    <HeroMotion className="hero relative flex h-svh flex-col justify-center gap-[clamp(1.25rem,5svh,3.5rem)]">
      <div className="road">
        <h1 className="relative">
          <span className="sr-only">{HEADLINE}</span>
          <Headline text={HEADLINE} className="headline-outline" data-anim="ghost" data-reveal />
        </h1>

        {/* Starts just off the left edge; the scroll timeline slides it across. */}
        <div className="mover" data-anim="mover">
          <div className="trail">
            <div className="paint" data-anim="paint">
              <div className="paint-inner">
                <Headline text={HEADLINE} className="text-ink" />
              </div>
            </div>
          </div>
          <div className="car">
            <div data-anim="car" data-reveal>
              <CarSvg />
            </div>
          </div>
        </div>
      </div>

      <ul
        role="list"
        className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-3 px-4 md:grid-cols-4 md:gap-5 md:px-8"
      >
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </ul>

      <div
        data-anim="hint"
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[max(1rem,3svh)] flex justify-center [@media(max-height:560px)]:hidden"
      >
        <div
          data-anim="hint-inner"
          data-reveal
          className="flex flex-col items-center gap-2 text-[0.7rem] font-medium tracking-[0.3em] text-ink/60 uppercase"
        >
          Scroll to drive
          <span className="relative h-8 w-px overflow-hidden bg-ink/20">
            <span className="absolute inset-x-0 top-0 h-1/2 bg-ink motion-safe:animate-scroll-hint" />
          </span>
        </div>
      </div>
    </HeroMotion>
  );
}
