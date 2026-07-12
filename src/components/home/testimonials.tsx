"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/content";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export function Testimonials() {
  return (
    <section className="bg-gray-50/70 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="In Their Words"
          title="Why our community shows up."
          align="center"
        />
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col rounded-3xl border border-navy-900/8 bg-white p-7"
            >
              <Quote className="size-7 text-royal-300" fill="currentColor" strokeWidth={0} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                {t.image ? (
                  <div className="relative size-11 shrink-0 overflow-hidden rounded-full">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                ) : (
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#1e56b0] text-xs font-semibold text-white">
                    {initials(t.name)}
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold text-navy-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
