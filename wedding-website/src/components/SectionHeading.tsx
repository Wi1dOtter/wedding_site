type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClasses =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClasses}`}>
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-serif text-3xl sm:text-4xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-base text-charcoal/80 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
