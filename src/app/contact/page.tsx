import type { Metadata } from "next";
import { Mail, Users2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Faq } from "@/components/contact/faq";
import { InstagramIcon } from "@/components/ui/icons";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { site, links } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Civic Creation Circle. Email a board member, DM us on Instagram, or join our Schoology page.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Have any questions?"
        description="DM us on Instagram, email any board member, or reach out in person. We're more than happy to help with student mentorship, increasing involvement, and recommending organizations to engage with."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Reach Out" title="Get in touch" />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 rounded-2xl border border-navy-900/8 bg-white p-5 transition-colors hover:border-royal-300 hover:bg-lavender-100/40"
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-royal-500/10 text-royal-600">
                    <Mail className="size-4.5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-navy-900">Email</p>
                    <p className="text-xs text-gray-500">{site.email}</p>
                  </div>
                </a>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-navy-900/8 bg-white p-5 transition-colors hover:border-royal-300 hover:bg-lavender-100/40"
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-royal-500/10 text-royal-600">
                    <InstagramIcon className="size-4.5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-navy-900">Instagram</p>
                    <p className="text-xs text-gray-500">@civic.creation.circle</p>
                  </div>
                </a>
              </div>

              <div className="relative mt-6 overflow-hidden rounded-3xl p-8 text-white">
                <AuroraBackground />
                <div className="relative">
                  <Users2 className="size-7 text-white" strokeWidth={1.5} />
                  <h3 className="font-display mt-5 text-xl font-semibold">Join our Schoology!</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">
                    Our Schoology page includes important information and updates about upcoming
                    meetings, events, and resources. Join using the code below.
                  </p>
                  <p className="mt-5 w-fit rounded-xl bg-white/20 px-4 py-2.5 font-mono text-sm tracking-widest text-white">
                    {site.schoologyCode}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-navy-900/8 bg-lavender-100 p-8">
                <h3 className="font-display text-xl font-semibold text-navy-900">
                  Civic Current Newsletter
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Get our monthly civic news summary, student op-eds, and CCC updates in your inbox.
                </p>
                <Button href={links.newsletterSubscribe} className="mt-6" showArrow>
                  Subscribe
                </Button>
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="FAQ" title="Frequently asked" />
              <div className="mt-8">
                <Faq />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
