import type { ReactNode } from "react";

type CardProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function Card({
  title,
  subtitle,
  description,
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-border bg-white/80 p-6 shadow-[var(--shadow-soft)] ${className}`}
    >
      {subtitle ? (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-olive">
          {subtitle}
        </p>
      ) : null}
      {title ? (
        <h3 className="mt-3 font-serif text-2xl text-charcoal">{title}</h3>
      ) : null}
      {description ? (
        <p className="mt-3 text-sm leading-7 text-charcoal/80">
          {description}
        </p>
      ) : null}
      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  );
}
