import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/content/siteConfig";

export default function RsvpPage() {
  const { rsvp } = siteConfig;

  return (
    <div className="py-16">
      <Container className="grid gap-10">
        <SectionHeading title={rsvp.title} description={rsvp.intro} />
        <Card className="bg-mist">
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl border border-border bg-white/70">
              <iframe
                title={rsvp.form.iframeTitle}
                src={rsvp.form.iframeSrc}
                className="h-[600px] w-full"
              />
            </div>
            <div>
              <Button
                label={rsvp.form.buttonLabel}
                href={rsvp.form.buttonHref}
                variant="outline"
                target="_blank"
                rel="noreferrer"
              />
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
}
