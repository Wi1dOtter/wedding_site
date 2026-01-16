import { Accordion } from "@/components/Accordion";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/content/siteConfig";

export default function FaqPage() {
  const { faq } = siteConfig;

  return (
    <div className="py-16">
      <Container className="grid gap-10">
        <SectionHeading title={faq.title} description={faq.intro} />
        <Accordion items={faq.items} />
      </Container>
    </div>
  );
}
