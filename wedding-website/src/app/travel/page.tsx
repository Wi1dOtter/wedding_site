import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/content/siteConfig";

export default function TravelPage() {
  const { travel, venue } = siteConfig;

  return (
    <div className="py-16">
      <Container className="grid gap-12">
        <SectionHeading title={travel.title} description={travel.intro} />

        <div className="grid gap-6 lg:grid-cols-2">
          <Card
            title={travel.hotel.name}
            description={`${travel.hotel.addressLine1}, ${travel.hotel.addressLine2}`}
            className="bg-mist"
          >
            <p className="text-sm text-charcoal/70">{travel.hotel.notes}</p>
            <div className="mt-5">
              <Button
                label={travel.hotel.bookingLabel}
                href={travel.hotel.bookingLink}
                variant="primary"
                target="_blank"
                rel="noreferrer"
              />
            </div>
          </Card>

          <Card
            title={venue.name}
            description={`${venue.addressLine1}, ${venue.addressLine2}, ${venue.city}, ${venue.state} ${venue.postalCode}`}
            className="bg-mist"
          >
            <div className="mt-5">
              <Button
                label={travel.map.title}
                href={venue.mapLink}
                variant="outline"
                target="_blank"
                rel="noreferrer"
              />
            </div>
          </Card>
        </div>

        <Card className="bg-mist">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-olive">
                {travel.map.title}
              </p>
              <p className="mt-2 text-sm text-charcoal/70">
                {travel.map.placeholderText}
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title={travel.map.title}
                src={travel.map.iframeSrc}
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card
            title={travel.airports.heading}
            className="bg-mist"
          >
            <ul className="space-y-3 text-sm text-charcoal/70">
              {travel.airports.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
          <Card
            title={travel.transport.heading}
            className="bg-mist"
          >
            <ul className="space-y-3 text-sm text-charcoal/70">
              {travel.transport.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
          <Card
            title={travel.thingsToDo.heading}
            className="bg-mist"
          >
            <ul className="space-y-3 text-sm text-charcoal/70">
              {travel.thingsToDo.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </div>
  );
}
