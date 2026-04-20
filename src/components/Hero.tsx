import { ArrowRight } from "lucide-react";

const STATS = [
  { k: "4+", v: "Countries" },
  { k: "6+", v: "Industries" },
  { k: "15Y", v: "Experience" },
  { k: "500+", v: "Clients" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-hero-green text-white"
    >
      <div
        className="absolute inset-0 opacity-60 bg-grid"
        style={{ backgroundSize: "56px 56px" }}
      />

      <div className="absolute right-[6%] top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="relative h-[420px] w-[340px] xl:h-[460px] xl:w-[380px] rounded-md border-2 border-lime-300/80" />
      </div>

      <div className="container relative pt-24 pb-28 md:pt-32 md:pb-36 lg:pt-40 lg:pb-44">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="eyebrow">
              <span className="h-px w-8 bg-lime-300" />
              Welcome to Yanabiya Group
            </span>

            <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] text-white">
              Built on Trust,
              <br />
              Driven by
              <br />
              Excellence
            </h1>

            <p className="mt-6 font-display italic text-2xl md:text-3xl text-lime-300">
              A Global Group of Companies
            </p>

            <p className="mt-8 max-w-xl text-base md:text-lg text-white/80">
              Yanabiya Group delivers innovative solutions across multiple
              industries and continents — connecting Bangladesh, the United
              Kingdom, Oman and the USA through technology, trade and talent.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#businesses" className="btn-lime">
                EXPLORE OUR WORK <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-outline-light">
                GET IN TOUCH
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 lg:hidden">
            <div className="grid grid-cols-2 gap-4 max-w-md">
              {STATS.map((s) => (
                <div
                  key={s.v}
                  className="rounded-md border border-lime-300/30 bg-white/[0.04] p-5 backdrop-blur"
                >
                  <div className="font-display text-4xl font-bold text-lime-300">
                    {s.k}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/70">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-[3%] top-1/2 hidden -translate-y-1/2 lg:flex flex-col gap-3 z-10">
        {STATS.map((s) => (
          <div
            key={s.v}
            className="w-44 rounded-sm border border-lime-300/20 bg-brand-900/40 px-5 py-4 backdrop-blur"
          >
            <div className="font-display text-3xl font-bold text-lime-300">
              {s.k}
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/70">
              {s.v}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
