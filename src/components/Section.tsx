import type { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  dark?: boolean;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  dark = false,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={`section ${dark ? "bg-ink-900 text-white" : "bg-white"} ${className}`}
    >
      <div className="container">
        <div className="max-w-3xl">
          {eyebrow && (
            <span className={dark ? "eyebrow" : "eyebrow-light"}>
              {eyebrow}
            </span>
          )}
          <h2
            className={`section-title mt-4 ${
              dark ? "text-white" : "text-ink-900"
            }`}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={`section-sub ${
                dark ? "text-white/70" : "text-ink-700/80"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}
