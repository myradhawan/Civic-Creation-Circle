import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { EventsTimeline } from "@/components/events/timeline";
import { events } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description:
    "From our first interest meeting to briefings with the New Jersey Institute for Social Justice, a timeline of Civic Creation Circle events.",
};

export default function EventsPage() {
  const chronological = [...events].reverse();

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="A year of rooms, speakers, and real conversations."
        description="Interest meetings, roundtable discussions, and briefings with state advocacy organizations. Here's where our members have shown up."
      />

      <section className="py-20 sm:py-28">
        <Container className="max-w-4xl">
          <EventsTimeline items={chronological} />
        </Container>
      </section>
    </>
  );
}
