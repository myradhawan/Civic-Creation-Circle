"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { links } from "@/lib/content";

export function Cta() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <AuroraBackground />
      <Container className="relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display mx-auto max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl"
        >
          Bring the CCC to your town.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-white/85 sm:text-lg"
        >
          Our resources. Our structure. Your voice. Start a chapter and give students in your
          community a nonpartisan forum to discuss, change, and impact.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href={links.chapterApplication} size="lg" showArrow>
            Apply to Start a Chapter
          </Button>
          <Button
            href="/contact"
            variant="ghost"
            size="lg"
            className="border-white/20 text-white hover:border-white/40 hover:bg-white/5"
          >
            Contact Us
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
