"use client";

import { motion } from "framer-motion";
import { Newspaper, Users, Megaphone, Puzzle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { links, newsletterSections } from "@/lib/content";

const icons = [Newspaper, Users, Megaphone, Puzzle];

export function NewsletterPreview() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem]">
          <AuroraBackground />
          <div className="relative grid gap-12 p-10 sm:p-14 lg:grid-cols-2 lg:gap-20 lg:p-20">
            <div>
              <SectionHeading
                eyebrow="Civic Current Newsletter"
                title="A monthly publication for the civically curious."
                description="Sent to every Livingston High School student and staff member. A news summary, student op-eds, CCC updates, and a news quiz, every month."
                light
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={links.newsletterSubscribe} variant="light" showArrow>
                  Subscribe
                </Button>
                <Button
                  href={links.newsletterArchive}
                  variant="ghost"
                  className="border-white/20 text-white hover:border-white/40 hover:bg-white/5"
                >
                  Browse archive
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {newsletterSections.map((section, i) => {
                const Icon = icons[i];
                return (
                  <motion.div
                    key={section.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                  >
                    <Icon className="size-5 text-lavender-300" strokeWidth={1.75} />
                    <p className="mt-3 text-sm font-medium text-white">{section.name}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
