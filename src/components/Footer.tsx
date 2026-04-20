import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { NAV_ITEMS } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white">
      <div className="container py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-gold-500 font-bold">
                Y
              </span>
              <div className="leading-tight">
                <div className="font-display text-lg font-extrabold">
                  Yanabiya
                </div>
                <div className="text-[10px] font-semibold tracking-[0.2em] text-brand-300 uppercase">
                  Group
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70 max-w-xs">
              A diversified global group building a future of shared prosperity
              across industries and communities.
            </p>
            <div className="mt-6 flex gap-3 text-white/70">
              {[Linkedin, Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 hover:bg-white/10"
                  href="#"
                  aria-label="social"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <div className="text-xs uppercase tracking-wider text-white/50">
                Explore
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                {NAV_ITEMS.slice(0, 5).map((n) => (
                  <li key={n.href}>
                    <a className="text-white/80 hover:text-white" href={n.href}>
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-white/50">
                Group
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                {NAV_ITEMS.slice(5, 10).map((n) => (
                  <li key={n.href}>
                    <a className="text-white/80 hover:text-white" href={n.href}>
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-white/50">
                More
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                {NAV_ITEMS.slice(10).map((n) => (
                  <li key={n.href}>
                    <a className="text-white/80 hover:text-white" href={n.href}>
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-white/50">
              Newsletter
            </div>
            <p className="mt-3 text-sm text-white/70">
              Get the latest insights from across Yanabiya Group.
            </p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm outline-none focus:border-brand-400"
              />
              <button type="button" className="btn-primary text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Yanabiya Group. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
