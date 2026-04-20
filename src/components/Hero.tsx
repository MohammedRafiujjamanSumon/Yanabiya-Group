import { ArrowRight, PlayCircle, Globe2, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-ink-900 text-white"
    >
      <div className="absolute inset-0 bg-hero-radial" />
      <div
        className="absolute inset-0 opacity-[0.08] bg-grid"
        style={{ backgroundSize: "40px 40px" }}
      />
      <div className="container relative pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="eyebrow bg-white/10 border-white/10 text-white/80">
              <Sparkles size={14} /> A Diversified Global Group
            </span>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05]">
              Building a future of{" "}
              <span className="bg-gradient-to-r from-brand-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
                shared prosperity
              </span>
              .
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/70">
              Yanabiya Group unites diverse businesses, bold ideas, and global
              partnerships to create enduring value for communities, customers,
              and the planet.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#businesses" className="btn-primary">
                Explore Our Businesses <ArrowRight size={18} />
              </a>
              <a
                href="#about"
                className="btn border border-white/15 text-white hover:bg-white/10"
              >
                <PlayCircle size={18} /> Our Story
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
              {[
                { k: "25+", v: "Years of Legacy" },
                { k: "12", v: "Countries" },
                { k: "8", v: "Core Sectors" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl md:text-4xl font-extrabold text-white">
                    {s.k}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-white/60 mt-1">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 animate-fade-up [animation-delay:120ms]">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-brand-500/30 to-gold-500/30 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand-500 to-gold-500" />
                  <div>
                    <div className="font-semibold">Yanabiya Index</div>
                    <div className="text-xs text-white/60">
                      Growth · Impact · Innovation
                    </div>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-4">
                  {[
                    { k: "Revenue Growth", v: "+18.4%", c: "text-brand-300" },
                    { k: "CSR Investment", v: "$42M", c: "text-gold-400" },
                    { k: "Employees", v: "14,500+", c: "text-white" },
                    { k: "Markets", v: "12 Countries", c: "text-white" },
                  ].map((x) => (
                    <div
                      key={x.k}
                      className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                    >
                      <div className="text-xs text-white/60">{x.k}</div>
                      <div className={`mt-1 text-xl font-bold ${x.c}`}>
                        {x.v}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2 text-xs text-white/60">
                  <Globe2 size={14} /> Aligned with UN Sustainable Development
                  Goals
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
