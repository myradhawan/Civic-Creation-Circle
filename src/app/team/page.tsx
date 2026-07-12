import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { TeamCard } from "@/components/team/team-card";
import { team } from "@/lib/content";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the thirteen-student board leading the Civic Creation Circle's discussions, journalism, outreach, and purpose projects.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Meet the board."
        description="Thirteen students leading discussions, journalism, outreach, research, and purpose projects across Livingston."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {team.map((member, i) => (
              <TeamCard key={member.email} member={member} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-20 sm:py-28">
        <Container className="max-w-3xl">
          <div className="space-y-10">
            {team.map((member) => (
              <div key={member.email} className="flex flex-col gap-2 border-b border-navy-900/8 pb-8 last:border-0">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-navy-900">
                    {member.name}
                  </h3>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-sm font-medium text-royal-600 hover:underline"
                  >
                    {member.email}
                  </a>
                </div>
                <p className="text-sm font-medium text-royal-500">{member.role}</p>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
