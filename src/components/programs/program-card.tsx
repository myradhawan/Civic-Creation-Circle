"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { programs } from "@/lib/content";

export function ProgramCard({
  program,
  index,
}: {
  program: (typeof programs)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-navy-900/8 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(10,23,48,0.25)]"
    >
      <div className="relative mb-6 flex size-16 items-center justify-center overflow-hidden rounded-2xl bg-royal-500/10 transition-transform duration-300 group-hover:scale-105">
        <Image src={program.icon} alt="" width={40} height={40} className="object-contain" />
      </div>
      <h3 className="font-display text-xl font-semibold tracking-tight text-navy-900">
        {program.name}
      </h3>
      <p className="mt-1.5 text-sm font-medium text-royal-500">{program.tagline}</p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">{program.description}</p>
      <Button href={program.cta.href} variant="ghost" size="md" className="mt-6 w-fit" showArrow>
        {program.cta.label}
      </Button>
    </motion.div>
  );
}
