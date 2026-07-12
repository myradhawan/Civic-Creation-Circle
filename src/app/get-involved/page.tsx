import type { Metadata } from "next";
import { Users, Send, Newspaper, Flag } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Cta } from "@/components/home/cta";
import { site, links } from "@/lib/content";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join the Civic Creation Circle as a Livingston High School student, submit to the Civic Current Newsletter, or apply to bring a CCC chapter to your town.",
};

const paths = [
  {
    icon: Users,
    title: "Join as a Member",
    body: "Livingston High School students can join our meetings, discussions, and purpose projects. Join our Schoology page or come to our next interest meeting.",
    cta: { label: "Contact us to join", href: "/contact" },
  },
  {
    icon: Newspaper,
    title: "Write for the Newsletter",
    body: "Submit an op-ed, research piece, or civic update to be featured in an upcoming issue of the Civic Current Newsletter.",
    cta: { label: "Submit your writing", href: links.newsletterSubmit },
  },
  {
    icon: Send,
    title: "Subscribe & Stay Informed",
    body: "Get the Civic Current Newsletter delivered to your inbox every month, with news summaries, student op-eds, and CCC updates.",
    cta: { label: "Subscribe", href: links.newsletterSubscribe },
  },
  {
    icon: Flag,
    title: "Start a Chapter",
    body: "Bring the CCC to your town. Our resources. Our structure. Your voice. Apply to start a chapter at your own school.",
    cta: { label: "Apply to start a chapter", href: links.chapterApplication },
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Bring the CCC to your town."
        description="Our resources. Our structure. Your voice. However you want to get involved, there's a place for you at the Civic Creation Circle."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Ways to Get Involved" title="Choose your path." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {paths.map((path) => (
              <div
                key={path.title}
                className="flex flex-col rounded-3xl border border-navy-900/8 bg-white p-8"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-royal-500/10">
                  <path.icon className="size-5.5 text-royal-600" strokeWidth={1.75} />
                </div>
                <h3 className="font-display mt-5 text-xl font-semibold tracking-tight text-navy-900">
                  {path.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{path.body}</p>
                <Button href={path.cta.href} variant="ghost" className="mt-6 w-fit" showArrow>
                  {path.cta.label}
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="rounded-3xl border border-navy-900/8 bg-lavender-100 p-8 text-center sm:p-12">
            <h3 className="font-display text-2xl font-semibold text-navy-900">
              Prefer to reach out directly?
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-600">
              Email any board member or DM us on Instagram. We&apos;re happy to help with student
              mentorship and answer any questions.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button href={`mailto:${site.email}`} showArrow>
                Email us
              </Button>
              <Button href={site.instagram} variant="ghost">
                Instagram
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Cta />
    </>
  );
}
