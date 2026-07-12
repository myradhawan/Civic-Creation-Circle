import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProgramCard } from "@/components/programs/program-card";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { programs, links } from "@/lib/content";

export function ProgramsSection() {
  return (
    <section className="bg-gray-50/70 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our Programs"
          title="From newsletters to open forums to collaborative projects."
          description="Three programs, one throughline: give every student a real voice in civic life."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => (
            <ProgramCard key={program.slug} program={program} index={i} />
          ))}
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl p-8 sm:p-10">
          <AuroraBackground />
          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Bring these programs to your town.
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/85">
                Our resources and structure, your voice and impact. Apply to start a CCC chapter at
                your own school.
              </p>
            </div>
            <Button href={links.chapterApplication} variant="light" size="lg" showArrow className="shrink-0">
              Apply to Start a Chapter
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
