import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/content/siteConfig";

export default function SchedulePage() {
  const { schedule } = siteConfig;

  return (
    <div className="py-16">
      <Container className="grid gap-10">
        <SectionHeading title={schedule.title} description={schedule.intro} />
        <div className="grid gap-6">
          {schedule.sections.map((section) => (
            <Card
              key={section.title}
              subtitle={section.time}
              title={section.title}
              description={section.description}
              className="bg-mist"
            >
              <p className="text-sm text-charcoal/70">{section.location}</p>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
