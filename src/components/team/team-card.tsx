"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import type { TeamMember } from "@/lib/content";

export function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-navy-900/8 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-28px_rgba(10,23,48,0.25)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-lavender-100">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 90vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1c66]/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <a
          href={`mailto:${member.email}`}
          aria-label={`Email ${member.name}`}
          className="absolute bottom-4 right-4 flex size-9 translate-y-2 items-center justify-center rounded-full bg-white/95 text-navy-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <Mail className="size-4" />
        </a>
      </div>
      <div className="p-5">
        <h3 className="font-display text-base font-semibold tracking-tight text-navy-900">
          {member.name}
        </h3>
        <p className="mt-0.5 text-sm text-royal-500">{member.role}</p>
      </div>
    </motion.div>
  );
}
