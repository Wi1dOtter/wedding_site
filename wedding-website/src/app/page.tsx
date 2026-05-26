import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { PolaroidBackground } from "@/components/PolaroidBackground";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/content/siteConfig";
import { assetPath } from "@/lib/paths";

export default function Home() {
  const { hero, details, schedulePreview } = siteConfig.home;

  return (
    <div className="flex flex-col gap-20 pb-20">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${assetPath(hero.backgroundImage)})` }}
          aria-hidden="true"
        />
        <PolaroidBackground
          photos={siteConfig.polaroidBackground.home.photos}
          density="hero"
          className="z-10"
        />
        <div
          className="absolute inset-0 z-20 bg-charcoal/55"
          aria-hidden="true"
        />
        <Container className="relative z-30 py-24 sm:py-32">
          <div className="max-w-2xl text-cream">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sand">
              {hero.eyebrow}
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight sm:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-6 text-base text-cream/80 sm:text-lg">
              {hero.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              {hero.ctaButtons.map((button) => (
                <Button
                  key={button.label}
                  label={button.label}
                  href={button.href}
                  variant={button.variant}
                  tone="dark"
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-4">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <SectionHeading
            eyebrow={siteConfig.couple.fullName}
            title={details.heading}
            description={details.description}
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {details.items.map((item) => (
              <Card
                key={item.label}
                title={item.label}
                description={item.value}
                className="bg-mist"
              />
            ))}
            <Card
              title={siteConfig.venue.name}
              description={`${siteConfig.venue.addressLine1}, ${siteConfig.venue.addressLine2}, ${siteConfig.venue.city}, ${siteConfig.venue.state} ${siteConfig.venue.postalCode}`}
              className="bg-mist sm:col-span-2"
            />
          </div>
        </Container>
      </section>

      <section className="py-4">
        <Container className="grid gap-10">
          <SectionHeading
            title={schedulePreview.heading}
            description={schedulePreview.description}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {schedulePreview.items.map((item) => (
              <Card
                key={item.title}
                subtitle={item.time}
                title={item.title}
                description={item.description}
                className="bg-mist"
              />
            ))}
          </div>
          <div>
            <Button
              label={schedulePreview.linkLabel}
              href={schedulePreview.linkHref}
              variant="outline"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
