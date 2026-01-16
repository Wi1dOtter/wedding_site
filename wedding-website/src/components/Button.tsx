import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonTone = "light" | "dark";

type ButtonProps = {
  label: string;
  href?: string;
  variant?: ButtonVariant;
  tone?: ButtonTone;
  className?: string;
  target?: string;
  rel?: string;
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.16em] uppercase transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

const variantClasses: Record<ButtonVariant, Record<ButtonTone, string>> = {
  primary: {
    light:
      "bg-charcoal text-cream shadow-[var(--shadow-soft)] hover:bg-olive",
    dark: "bg-cream text-charcoal shadow-[var(--shadow-soft)] hover:bg-sand",
  },
  secondary: {
    light: "bg-olive text-cream shadow-[var(--shadow-soft)] hover:bg-charcoal",
    dark: "bg-olive text-cream shadow-[var(--shadow-soft)] hover:bg-charcoal",
  },
  outline: {
    light: "border border-charcoal text-charcoal hover:bg-sand/40",
    dark: "border border-cream text-cream hover:bg-cream/10",
  },
  ghost: {
    light: "text-charcoal hover:text-olive",
    dark: "text-cream hover:text-sand",
  },
};

export function Button({
  label,
  href,
  variant = "primary",
  tone = "light",
  className = "",
  target,
  rel,
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant][tone]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {label}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {label}
    </button>
  );
}
