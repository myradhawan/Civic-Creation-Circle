import { RevealGate } from "@/components/home/reveal-gate";
import { Hero } from "@/components/home/hero";
import { ImpactStats } from "@/components/home/impact-stats";
import { Mission } from "@/components/home/mission";
import { ProgramsSection } from "@/components/home/programs-section";
import { CurrentIssue } from "@/components/home/current-issue";
import { EventsPreview } from "@/components/home/events-preview";
import { NewsletterPreview } from "@/components/home/newsletter-preview";
import { PressPreview } from "@/components/home/press-preview";
import { Testimonials } from "@/components/home/testimonials";
import { LeadershipPreview } from "@/components/home/leadership-preview";
import { Gallery } from "@/components/home/gallery";
import { Cta } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <RevealGate />
      <Hero />
      <ImpactStats />
      <Mission />
      <ProgramsSection />
      <CurrentIssue />
      <EventsPreview />
      <NewsletterPreview />
      <PressPreview />
      <Testimonials />
      <LeadershipPreview />
      <Gallery />
      <Cta />
    </>
  );
}
