import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ImpactStats } from "@/components/home/impact-stats";
import { CurrentIssue } from "@/components/home/current-issue";
import { homeImages } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Civic Creation Circle is a student-led civic engagement organization at Livingston High School, teaching students to hold productive civic conversations and build tangible solutions.",
};

const values = [
  {
    title: "Nonpartisan by design",
    body: "CCC is a forum to debate, brainstorm, and implement solutions, not a platform for any single political position.",
  },
  {
    title: "Conversation before conclusion",
    body: "Productive, respectful conversation is the first step to change. We teach students to disagree well before they act.",
  },
  {
    title: "From talk to tangible action",
    body: "Every discussion feeds a purpose project, a real initiative at the local, state, or national level, built by students.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Students are beyond capable of leading civic change."
        description="The Civic Creation Circle was founded on a simple belief: young people don't need to wait until they can vote to have a voice."
      />

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl order-2 lg:order-1">
              <Image
                src={homeImages.hero}
                alt="CCC members at an interest meeting"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-royal-500">
                Our Story
              </span>
              <h2 className="font-display text-balance text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                A club built on a nonpartisan forum for real solutions.
              </h2>
              <p className="mt-6 text-balance text-base leading-relaxed text-gray-600 sm:text-lg">
                The Civic Creation Circle is a school club based at Livingston High School in New Jersey,
                dedicated to teaching students how to engage in productive civic conversations and create
                tangible solutions for their communities. With time, the CCC plans to expand beyond
                Livingston High School, bringing civic awareness and engagement to more towns, counties,
                and states.
              </p>
              <p className="mt-4 text-balance text-base leading-relaxed text-gray-600 sm:text-lg">
                In today&apos;s world, it&apos;s easy to get wrapped up in heated, polarized conversations
                about civic issues, labeling those we disagree with as enemies, or distancing ourselves
                entirely to &quot;keep the peace.&quot; At the CCC, we fight this polarization and
                disengagement at the root, teaching youth to have productive conversations, disagree
                respectfully, and build solutions together. Today&apos;s youth are tomorrow&apos;s workers,
                voters, and leaders, and we seek to empower them and provide the resources they need.
              </p>
              <Button href="/get-involved" className="mt-8" showArrow>
                Join us today
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <ImpactStats />

      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="What We Stand For"
            title="Educate. Empower. Evolve."
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-navy-900/8 bg-white p-8"
              >
                <h3 className="font-display text-lg font-semibold tracking-tight text-navy-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{value.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CurrentIssue />
    </>
  );
}
