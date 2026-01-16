import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/content/siteConfig";

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

export default function WeddingPartyPage() {
  const { weddingParty } = siteConfig;

  return (
    <div className="py-16">
      <Container className="grid gap-10">
        <SectionHeading
          title={weddingParty.title}
          description={weddingParty.intro}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {weddingParty.members.map((member) => (
            <Card
              key={member.name}
              className="bg-mist"
            >
              <div className="flex items-center gap-4">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sand text-sm font-semibold text-charcoal">
                    {getInitials(member.name)}
                  </div>
                )}
                <div>
                  <p className="font-serif text-xl text-charcoal">
                    {member.name}
                  </p>
                  <p className="text-sm text-charcoal/70">{member.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
