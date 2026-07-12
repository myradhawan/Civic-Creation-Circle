import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PressCard } from "@/components/press/press-card";
import { press, pressMentions } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Civic Creation Circle press coverage, from the UN ECOSOC Youth Forum to the Livingston Town Council, NJISJ, and Civics Unplugged.",
};

export default function PressPage() {
  return (
    <>
      <PageHero
        eyebrow="Press & Recognition"
        title="From Livingston to the United Nations."
        description="Our advocacy for lowering the voting age has reached local council chambers, statewide partners, and the international stage."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {press.map((item, i) => (
              <PressCard key={item.slug} item={item} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Media Mentions" title="Featured across the movement." />
          <div className="mt-12 divide-y divide-navy-900/8 overflow-hidden rounded-3xl border border-navy-900/8 bg-white">
            {pressMentions.map((mention) => (
              <a
                key={mention.href}
                href={mention.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-lavender-100/60 sm:px-8"
              >
                <div>
                  <p className="font-medium text-navy-900">{mention.label}</p>
                  <p className="text-sm text-gray-500">{mention.org}</p>
                </div>
                <ArrowUpRight className="size-5 shrink-0 text-gray-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-royal-500" />
              </a>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
