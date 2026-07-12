"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { team } from "@/lib/content";

export function LeadershipPreview() {
  const founder = team[0];
  // Leadership spotlight uses a focused excerpt (drops the personal "outside
  // school" line, which still appears in full on the Team page).
  const quote = founder.bio.split("Outside school")[0].trim();

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Leadership"
          title="Thirteen students. One mission."
          description="A student board leading discussions, journalism, outreach, and purpose projects across Livingston."
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl"
          >
            <Image
              src={founder.image}
              alt={founder.name}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1c66]/50 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-display text-xl font-medium leading-relaxed text-navy-900 sm:text-2xl">
              &ldquo;{quote}&rdquo;
            </p>
            <div className="mt-6">
              <p className="font-semibold text-navy-900">{founder.name}</p>
              <p className="text-sm text-royal-500">{founder.role}</p>
            </div>
            <Button href="/team" variant="ghost" className="mt-8" showArrow>
              Meet the full board
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
