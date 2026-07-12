"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { events } from "@/lib/content";

export function EventsPreview() {
  const latest = events[events.length - 1];

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Latest Event"
            title="Real rooms, real conversations."
            description="Our most recent milestone, with a full timeline of everything else on the Events page."
          />
          <Button href="/events" variant="ghost" showArrow>
            View all events
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 grid overflow-hidden rounded-3xl border border-navy-900/8 bg-white shadow-sm lg:grid-cols-2"
        >
          <div className="relative aspect-[4/3] lg:aspect-auto">
            <Image
              src={latest.image}
              alt={latest.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 90vw"
            />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-royal-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-royal-600">
              <Calendar className="size-3.5" />
              {latest.displayDate}, 2026
            </span>
            <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
              {latest.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-gray-600">{latest.description}</p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Button href="/events" showArrow>
                Explore all events
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
