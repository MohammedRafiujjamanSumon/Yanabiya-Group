import {
  Building2,
  Factory,
  Landmark,
  Leaf,
  Ship,
  ShoppingBag,
  Cpu,
  Stethoscope,
  Handshake,
  MapPin,
  HeartHandshake,
  Network,
  Users,
  Lightbulb,
  Newspaper,
  Briefcase,
  Mail,
  Phone,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import Section from "./Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Us"
      title="A legacy of trust. A vision for tomorrow."
      subtitle="From humble beginnings to a multinational presence, Yanabiya Group is built on integrity, stewardship, and a relentless drive to serve people and progress."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            t: "Our Mission",
            d: "To create enduring value through diversified enterprises that uplift communities and advance sustainability.",
            icon: Leaf,
          },
          {
            t: "Our Vision",
            d: "To be a globally trusted group that shapes industries with integrity, innovation, and impact.",
            icon: Lightbulb,
          },
          {
            t: "Our Values",
            d: "Integrity · Excellence · Compassion · Accountability · Innovation · Sustainability.",
            icon: CheckCircle2,
          },
        ].map(({ t, d, icon: Icon }) => (
          <div key={t} className="card">
            <div className="h-11 w-11 rounded-xl bg-brand-50 text-brand-700 grid place-items-center">
              <Icon size={22} />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-700/80">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

const BUSINESSES = [
  { t: "Trading & Distribution", d: "Commodities, FMCG, industrial goods across global corridors.", icon: ShoppingBag },
  { t: "Manufacturing", d: "Modern facilities powering essential products at scale.", icon: Factory },
  { t: "Real Estate & Infrastructure", d: "Smart, sustainable developments for cities of the future.", icon: Building2 },
  { t: "Logistics & Shipping", d: "Moving cargo, connecting continents, reliably.", icon: Ship },
  { t: "Financial Services", d: "Capital solutions, advisory and fintech innovation.", icon: Landmark },
  { t: "Technology", d: "Digital platforms, AI and enterprise software.", icon: Cpu },
  { t: "Healthcare", d: "Hospitals, pharma and preventive care networks.", icon: Stethoscope },
  { t: "Agriculture & Agro-Tech", d: "Food security through modern, regenerative practices.", icon: Leaf },
];

export function Businesses() {
  return (
    <Section
      id="businesses"
      eyebrow="Our Businesses"
      title="Eight sectors. One purpose."
      subtitle="Our diversified portfolio is engineered for resilience and long-term impact across the real economy."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {BUSINESSES.map(({ t, d, icon: Icon }) => (
          <div key={t} className="card group">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-500 to-lime-400 text-white grid place-items-center">
              <Icon size={22} />
            </div>
            <h3 className="mt-5 font-display text-lg font-bold">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-700/80">{d}</p>
            <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 opacity-80 group-hover:opacity-100">
              Learn more <ArrowUpRight size={16} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Solutions() {
  const items = [
    "Enterprise Procurement",
    "Supply-Chain Optimization",
    "Turn-Key Infrastructure",
    "Digital Transformation",
    "ESG & Sustainability Advisory",
    "Capital & Financial Structuring",
  ];
  return (
    <Section
      id="solutions"
      eyebrow="Solutions"
      title="End-to-end capabilities for ambitious organizations."
      subtitle="We combine industrial depth, financial strength and digital expertise to solve complex challenges."
      dark
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <div
            key={s}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors"
          >
            <CheckCircle2 className="text-brand-300" />
            <div className="mt-4 text-lg font-semibold">{s}</div>
            <div className="mt-2 text-sm text-white/60">
              Tailored engagements with measurable outcomes and transparent KPIs.
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Partnerships() {
  return (
    <Section
      id="partnerships"
      eyebrow="Partnerships"
      title="Stronger together."
      subtitle="We collaborate with world-class partners across industries, governments and communities."
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="grid h-20 place-items-center rounded-xl border border-black/5 bg-gradient-to-br from-white to-brand-50/50 text-brand-700 font-bold tracking-wider"
          >
            PARTNER {i + 1}
          </div>
        ))}
      </div>
      <div className="mt-10 flex items-center gap-3 text-sm text-ink-700/80">
        <Handshake className="text-brand-700" />
        Strategic alliances designed for mutual, long-term value.
      </div>
    </Section>
  );
}

export function GlobalPresence() {
  const regions = [
    { r: "Asia Pacific", c: "Bangladesh · Singapore · Malaysia · Japan" },
    { r: "Middle East", c: "UAE · KSA · Qatar · Oman" },
    { r: "Europe", c: "UK · Germany · Netherlands" },
    { r: "Americas", c: "USA · Canada" },
    { r: "Africa", c: "Kenya · Egypt" },
  ];
  return (
    <Section
      id="global"
      eyebrow="Global Presence"
      title="Local roots, global reach."
      subtitle="Operating across 12 markets with trusted teams on the ground."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        {regions.map((x) => (
          <div key={x.r} className="card">
            <MapPin className="text-brand-700" />
            <div className="mt-4 font-display font-bold">{x.r}</div>
            <div className="mt-1 text-sm text-ink-700/70">{x.c}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Impact() {
  const pillars = [
    { t: "Education", d: "Scholarships, schools and skills programs.", n: "120k+ learners reached" },
    { t: "Health", d: "Access to care in underserved communities.", n: "45 clinics supported" },
    { t: "Climate", d: "Renewables, reforestation, circular economy.", n: "1.2M tons CO₂ offset" },
    { t: "Livelihoods", d: "Women, youth and rural entrepreneurs.", n: "18k+ jobs enabled" },
  ];
  return (
    <Section
      id="impact"
      eyebrow="Impact & CSR"
      title="Prosperity that lifts everyone."
      subtitle="Our impact agenda is measured, transparent and aligned with the SDGs."
      className="bg-brand-50/40"
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p) => (
          <div key={p.t} className="card">
            <HeartHandshake className="text-brand-700" />
            <div className="mt-4 font-display text-lg font-bold">{p.t}</div>
            <div className="mt-1 text-sm text-ink-700/80">{p.d}</div>
            <div className="mt-4 inline-flex rounded-full bg-brand-600/10 px-3 py-1 text-xs font-semibold text-brand-700">
              {p.n}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function NetworkSection() {
  return (
    <Section
      id="network"
      eyebrow="Network"
      title="A connected ecosystem."
      subtitle="Suppliers, partners, customers and communities — united by trust."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { t: "Suppliers & Vendors", d: "4,200+ vetted suppliers across 30+ countries." },
          { t: "Customers", d: "Millions served through retail, B2B and digital channels." },
          { t: "Communities", d: "Engagement programs across every market we operate." },
        ].map((x) => (
          <div key={x.t} className="card">
            <Network className="text-brand-700" />
            <div className="mt-4 font-display text-lg font-bold">{x.t}</div>
            <div className="mt-1 text-sm text-ink-700/80">{x.d}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Leadership() {
  const leaders = [
    { n: "Mohammed Rafiujjaman Sumon", r: "Chairman" },
    { n: "A. R. Khan", r: "Group CEO" },
    { n: "S. Ahmed", r: "Group CFO" },
    { n: "N. Haque", r: "Chief Strategy Officer" },
  ];
  return (
    <Section
      id="leadership"
      eyebrow="Leadership"
      title="Stewards of the long term."
      subtitle="An experienced leadership team guiding Yanabiya Group into its next chapter."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {leaders.map((p) => (
          <div key={p.n} className="card text-center">
            <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-brand-400 to-lime-400 grid place-items-center text-white">
              <Users size={34} />
            </div>
            <div className="mt-5 font-display font-bold">{p.n}</div>
            <div className="text-sm text-brand-700 font-semibold">{p.r}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Strategy() {
  return (
    <Section
      id="strategy"
      eyebrow="Strategy & Innovation"
      title="Built for the next decade."
      subtitle="Our strategy pairs disciplined capital allocation with bold innovation across AI, clean energy and digital commerce."
      dark
    >
      <div className="grid gap-5 md:grid-cols-3">
        {[
          { t: "Digital & AI", d: "Applied AI across operations, products and customer experience." },
          { t: "Clean Energy", d: "Scaling renewables and low-carbon industrial solutions." },
          { t: "New Ventures", d: "A venture arm backing founders aligned with our thesis." },
        ].map((x) => (
          <div
            key={x.t}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <Lightbulb className="text-lime-300" />
            <div className="mt-4 font-display text-lg font-bold">{x.t}</div>
            <div className="mt-1 text-sm text-white/70">{x.d}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Insights() {
  const posts = [
    { t: "The next wave of industrial AI", d: "How AI is reshaping heavy industry — from maintenance to design.", tag: "Innovation" },
    { t: "A blueprint for resilient supply chains", d: "Lessons from running a multi-continent logistics network.", tag: "Operations" },
    { t: "Impact that compounds", d: "Measuring CSR beyond inputs — the Yanabiya framework.", tag: "Sustainability" },
  ];
  return (
    <Section
      id="insights"
      eyebrow="Insights"
      title="Ideas from across the Group."
      subtitle="Research, perspectives and stories from our leaders and partners."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <a key={p.t} className="card group block">
            <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-brand-200 to-lime-300/60" />
            <div className="mt-5 inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              {p.tag}
            </div>
            <h3 className="mt-3 font-display text-lg font-bold group-hover:text-brand-700">
              {p.t}
            </h3>
            <p className="mt-1 text-sm text-ink-700/80">{p.d}</p>
            <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
              Read <ArrowUpRight size={16} />
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

export function Careers() {
  return (
    <Section
      id="careers"
      eyebrow="Careers"
      title="Build your career with purpose."
      subtitle="Join a team that values craftsmanship, curiosity and character."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { t: "Growth", d: "Learning budgets, mentorship and global mobility." },
          { t: "Culture", d: "A values-first environment where people thrive." },
          { t: "Impact", d: "Work that matters for customers, communities and the planet." },
        ].map((x) => (
          <div key={x.t} className="card">
            <Briefcase className="text-brand-700" />
            <div className="mt-4 font-display text-lg font-bold">{x.t}</div>
            <div className="mt-1 text-sm text-ink-700/80">{x.d}</div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <a href="#contact" className="btn-primary">
          View Open Roles <ArrowUpRight size={16} />
        </a>
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something meaningful."
      subtitle="Reach our team for partnerships, investor relations, media or careers."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <form className="card space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500"
              placeholder="Full name"
            />
            <input
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500"
              placeholder="Email"
            />
          </div>
          <input
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500"
            placeholder="Company"
          />
          <textarea
            rows={5}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500"
            placeholder="How can we help?"
          />
          <button type="button" className="btn-primary w-full sm:w-auto">
            Send Message <ArrowUpRight size={16} />
          </button>
        </form>

        <div className="space-y-4">
          <div className="card">
            <div className="font-display font-bold">Head Office</div>
            <p className="mt-1 text-sm text-ink-700/80">
              Yanabiya Tower, Corporate Avenue,
              <br />
              Dhaka 1212, Bangladesh
            </p>
          </div>
          <div className="card flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-brand-50 text-brand-700 grid place-items-center">
              <Mail />
            </div>
            <div>
              <div className="text-xs text-ink-700/60 uppercase tracking-wider">
                Email
              </div>
              <div className="font-semibold">hello@yanabiyagroup.com</div>
            </div>
          </div>
          <div className="card flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-brand-50 text-brand-700 grid place-items-center">
              <Phone />
            </div>
            <div>
              <div className="text-xs text-ink-700/60 uppercase tracking-wider">
                Phone
              </div>
              <div className="font-semibold">+880 1700 000 000</div>
            </div>
          </div>
          <div className="card">
            <Newspaper className="text-brand-700" />
            <div className="mt-3 font-display font-bold">Press & Media</div>
            <p className="mt-1 text-sm text-ink-700/80">
              For media inquiries, please write to press@yanabiyagroup.com
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
