"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { AuroraBackground } from "@/components/ui/aurora-background";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden pb-20 pt-36 sm:pb-24 sm:pt-44">
      <AuroraBackground />
      <Container className="relative">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-lavender-200"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="font-display max-w-2xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-xl text-balance text-base leading-relaxed text-white/85 sm:text-lg"
          >
            {description}
          </motion.p>
        )}
      </Container>
    </section>
  );
}
