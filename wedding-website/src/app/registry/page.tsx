import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/content/siteConfig";

export default function RegistryPage() {
  const { registry } = siteConfig;

  return (
    <div className="py-16">
      <Container className="grid gap-10">
        <SectionHeading title={registry.title} description={registry.intro} />
        <div className="flex flex-wrap gap-4">
          {registry.registries.map((item) => (
            <Button
              key={item.href}
              label={item.label}
              href={item.href}
              variant="primary"
              target="_blank"
              rel="noreferrer"
            />
          ))}
        </div>
        <Card
          title={registry.faqNoteTitle}
          description={registry.faqNoteBody}
          className="bg-mist"
        />
      </Container>
    </div>
  );
}
