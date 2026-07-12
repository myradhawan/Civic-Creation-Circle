"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { site, homeImages } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a2a63]">
      <div className="absolute inset-0">
        <Image
          src={homeImages.hero}
          alt="CCC members in an interest meeting at Livingston High School"
          fill
          priority
          className="object-cover opacity-[0.50]"
          sizes="100vw"
        />
        {/* Self-flowing deep-blue wash — lets the photography read through. */}
        <AuroraBackground variant="hero" tint />
        {/* Readability scrim: seats the left-aligned text. */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#06153c]/90 via-[#0c2c74]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06153c]/55 via-transparent to-transparent" />
      </div>

      <Container className="relative flex min-h-[52vh] flex-col justify-center py-16 sm:py-20">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-lavender-200 backdrop-blur-sm"
        >
          Livingston High School · Student-Led
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {site.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/85 sm:text-xl"
        >
          {site.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/get-involved" size="lg" showArrow>
            Get Involved
          </Button>
          <Button href="/about" variant="ghost" size="lg" className="border-white/20 text-white hover:bg-white/5 hover:border-white/40">
            Learn Our Story
          </Button>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute inset-x-0 bottom-8 flex justify-center"
      >
        <ChevronDown className="size-5 animate-bounce text-white/40" />
      </motion.div>
    </section>
  );
}
