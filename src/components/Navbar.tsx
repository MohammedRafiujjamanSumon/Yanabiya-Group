import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { MORE_NAV, NAV_ITEMS, PRIMARY_NAV } from "@/lib/nav";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.href.slice(1));
    const onScroll = () => {
      const y = window.scrollY + 140;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive("#" + current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-white border-b border-black/5">
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 py-3">
          <div className="grid h-11 w-11 place-items-center rounded-md bg-gradient-to-br from-brand-600 to-lime-400">
            <span className="font-display text-white text-xl font-bold leading-none">
              YG
            </span>
          </div>
          <div className="leading-tight">
            <div className="font-ui text-lg font-extrabold text-ink-900">
              Yanabiya Group
            </div>
            <div className="text-[10px] font-semibold tracking-[0.25em] text-brand-700 uppercase">
              Global Excellence
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center">
          {PRIMARY_NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${active === item.href ? "active" : ""}`}
            >
              {item.label}
            </a>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              className={`nav-link inline-flex items-center gap-1 ${
                MORE_NAV.some((m) => m.href === active) ? "active" : ""
              }`}
              onClick={() => setMoreOpen((o) => !o)}
            >
              More <ChevronDown size={14} />
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full w-60 rounded-xl border border-black/5 bg-white p-2 shadow-soft">
                {MORE_NAV.map((m) => (
                  <a
                    key={m.href}
                    href={m.href}
                    onClick={() => setMoreOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-ink-800 hover:bg-brand-50 hover:text-brand-700"
                  >
                    {m.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href="#contact" className="btn-primary text-sm">
            CONTACT <ArrowRight size={16} />
          </a>
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden grid place-items-center rounded-lg p-2 text-ink-900 hover:bg-black/5"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-black/5 bg-white">
          <div className="container grid grid-cols-2 gap-1 py-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  active === item.href
                    ? "bg-brand-50 text-brand-700"
                    : "text-ink-800 hover:bg-brand-50 hover:text-brand-700"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="col-span-2 btn-primary mt-2 text-sm"
            >
              CONTACT <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
