import { siteConfig } from "@/content/siteConfig";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream/90 py-8">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-charcoal/70 sm:flex-row">
        <span className="font-serif text-lg text-charcoal">
          {siteConfig.footer.text}
        </span>
        <span>{siteConfig.footer.year}</span>
      </Container>
    </footer>
  );
}
