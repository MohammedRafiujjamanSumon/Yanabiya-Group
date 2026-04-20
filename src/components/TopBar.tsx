import { Mail, Phone, Download, Globe, Sun } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-brand-900 text-white text-xs">
      <div className="container flex h-10 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span aria-label="Bangladesh">🇧🇩</span>
            <span aria-label="UK">🇬🇧</span>
            <span aria-label="USA">🇺🇸</span>
            <span aria-label="Oman">🇴🇲</span>
          </div>
          <span className="hidden sm:inline text-white/70">|</span>
          <span className="hidden sm:inline text-white/80">
            Operating across 4 countries
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="tel:+96891161677"
            className="hidden md:inline-flex items-center gap-1.5 text-white/90 hover:text-lime-300"
          >
            <Phone size={12} className="text-lime-300" />
            +968 911 61677
          </a>
          <a
            href="mailto:info@yanabiyagroup.com"
            className="hidden md:inline-flex items-center gap-1.5 text-white/90 hover:text-lime-300"
          >
            <Mail size={12} className="text-lime-300" />
            info@yanabiyagroup.com
          </a>
          <a
            href="#"
            className="hidden lg:inline-flex items-center gap-1.5 text-white/90 hover:text-lime-300"
          >
            <Download size={12} className="text-lime-300" />
            Download PDF
          </a>
          <button className="inline-flex items-center gap-1.5 text-white/90 hover:text-lime-300">
            <Globe size={12} />
            English (UK)
          </button>
          <button
            aria-label="Theme"
            className="inline-flex items-center gap-1.5 text-white/90 hover:text-lime-300"
          >
            <Sun size={12} />
            Theme
          </button>
        </div>
      </div>
    </div>
  );
}
