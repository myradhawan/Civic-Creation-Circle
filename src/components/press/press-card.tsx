"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PlayCircle, ArrowUpRight } from "lucide-react";
import type { press } from "@/lib/content";

export function PressCard({
  item,
  index,
}: {
  item: (typeof press)[number];
  index: number;
}) {
  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-navy-900/8 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-28px_rgba(10,23,48,0.25)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0a2a63]">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className={
              item.contain
                ? "object-contain"
                : "object-cover transition-transform duration-500 group-hover:scale-105"
            }
            sizes="(min-width: 1024px) 45vw, 90vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#123f8f] via-[#1e56b0] to-[#2f74c8]" />
        )}
        {item.video && (
          <div className="absolute inset-0 flex items-center justify-center bg-navy-900/25 transition-colors duration-300 group-hover:bg-navy-900/15">
            <PlayCircle
              className="size-14 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-110"
              strokeWidth={1.25}
            />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-7">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-royal-500">
          {item.kicker}
        </span>
        <h3 className="font-display mt-2 text-xl font-semibold tracking-tight text-navy-900">
          {item.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{item.description}</p>
        <span className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-royal-600">
          {item.cta}
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </motion.a>
  );
}
