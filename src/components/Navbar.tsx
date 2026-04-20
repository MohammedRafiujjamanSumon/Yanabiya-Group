import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/nav";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur border-b border-black/5 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        <a href="#home" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-gold-500 text-white font-bold">
            Y
          </span>
          <div className="leading-tight">
            <div className="font-display text-lg font-extrabold text-ink-900">
              Yanabiya
            </div>
            <div className="text-[10px] font-semibold tracking-[0.2em] text-brand-700 uppercase">
              Group
            </div>
          </div>
        </a>

        <nav className="hidden xl:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-ink-800 hover:text-brand-700 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href="#contact" className="btn-primary text-sm">
            Let's Talk
          </a>
        </div>

        <button
          aria-label="Menu"
          className="xl:hidden grid place-items-center rounded-lg p-2 text-ink-900 hover:bg-black/5"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden border-t border-black/5 bg-white">
          <div className="container grid grid-cols-2 gap-1 py-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink-800 hover:bg-brand-50 hover:text-brand-700"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="col-span-2 btn-primary mt-2 text-sm"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
