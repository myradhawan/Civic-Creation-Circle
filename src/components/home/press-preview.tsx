import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { PressCard } from "@/components/press/press-card";
import { press } from "@/lib/content";

export function PressPreview() {
  return (
    <section className="bg-gray-50/70 py-24 sm:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Press & Recognition"
            title="From Livingston to the United Nations."
            description="Our advocacy for lowering the voting age has reached local council chambers and the international stage."
          />
          <Button href="/press" variant="ghost" showArrow>
            All press
          </Button>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {press.map((item, i) => (
            <PressCard key={item.slug} item={item} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
