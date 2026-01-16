type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-3xl border border-border bg-white/80 p-6 shadow-[var(--shadow-soft)]"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
            <span className="font-serif text-lg text-charcoal">
              {item.question}
            </span>
            <span
              aria-hidden="true"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-olive text-olive transition-transform group-open:rotate-45"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-current"
              >
                <path
                  d="M6 1V11M1 6H11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </summary>
          <p className="mt-4 text-sm leading-7 text-charcoal/80">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
