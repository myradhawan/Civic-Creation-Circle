"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { currentIssue } from "@/lib/content";

export function CurrentIssue() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <AuroraBackground />
      <Container className="relative grid items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-lavender-300">
            2025-26 Civic Issue
          </span>
          <h2 className="font-display text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {currentIssue.title}
          </h2>
          <p className="mt-6 text-balance text-base leading-relaxed text-white/85 sm:text-lg">
            {currentIssue.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={currentIssue.petition.href} variant="light" showArrow>
              Sign the petition
            </Button>
            <Button
              href="/events"
              variant="ghost"
              className="border-white/20 text-white hover:border-white/40 hover:bg-white/5"
            >
              See our advocacy work
            </Button>
          </div>
          <p className="mt-4 text-sm text-white/70">
            {currentIssue.petition.label}.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/25 bg-white/15 p-10 shadow-[0_30px_80px_-30px_rgba(12,28,102,0.55)] backdrop-blur-sm"
        >
          <Image
            src={currentIssue.image}
            alt="Lowering the voting age, U.S. flag graphic"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-contain p-12"
          />
        </motion.div>
      </Container>
    </section>
  );
}
