import type { Metadata } from "next";
import { Newspaper, Users, Megaphone, Puzzle, FolderOpen, Send } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { links, newsletterSections } from "@/lib/content";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "The Civic Current Newsletter is a monthly, student-submission-based publication sent to every Livingston High School student and staff member.",
};

const icons = [Newspaper, Users, Megaphone, Puzzle];

export default function NewsletterPage() {
  return (
    <>
      <PageHero
        eyebrow="Civic Current Newsletter"
        title="A monthly publication for the civically curious."
        description="Sent to every Livingston High School student and staff member. News summaries, student op-eds, CCC updates, and a quiz, every month."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What Do We Do?"
            title="A place to showcase student passion for civic writing."
            description="We accept submissions school-wide on a range of civic topics that interest both the writer and our community, informing our community about issues happening around the globe."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {newsletterSections.map((section, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={section.name}
                  className="rounded-3xl border border-navy-900/8 bg-white p-7"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-royal-500/10">
                    <Icon className="size-5 text-royal-600" strokeWidth={1.75} />
                  </div>
                  <p className="mt-4 font-medium text-navy-900">{section.name}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28">
        <AuroraBackground />
        <Container className="relative">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col rounded-3xl border border-white/25 bg-white/10 p-8 backdrop-blur-sm">
              <FolderOpen className="size-7 text-white" strokeWidth={1.5} />
              <h3 className="font-display mt-5 text-lg font-semibold text-white">
                Browse the Archive
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/85">
                Read every past issue of the Civic Current Newsletter, stored in our shared Drive
                archive.
              </p>
              <Button href={links.newsletterArchive} variant="light" className="mt-6 w-fit" showArrow>
                Open archive
              </Button>
            </div>

            <div className="flex flex-col rounded-3xl border border-white/25 bg-white/10 p-8 backdrop-blur-sm">
              <Newspaper className="size-7 text-white" strokeWidth={1.5} />
              <h3 className="font-display mt-5 text-lg font-semibold text-white">
                Subscribe Today
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/85">
                Get the Civic Current Newsletter delivered straight to your inbox every month.
              </p>
              <Button href={links.newsletterSubscribe} variant="light" className="mt-6 w-fit" showArrow>
                Subscribe
              </Button>
            </div>

            <div className="flex flex-col rounded-3xl border border-white/25 bg-white/10 p-8 backdrop-blur-sm">
              <Send className="size-7 text-white" strokeWidth={1.5} />
              <h3 className="font-display mt-5 text-lg font-semibold text-white">
                Submit Your Writing
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/85">
                Turn in an op-ed or civic piece to see your work featured in an upcoming issue.
              </p>
              <Button href={links.newsletterSubmit} variant="light" className="mt-6 w-fit" showArrow>
                Submit writing
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
